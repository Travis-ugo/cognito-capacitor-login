import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { IonContent, IonSpinner, IonText } from '@ionic/angular/standalone';
import { Hub } from 'aws-amplify/utils';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    IonContent,
    IonSpinner,
    IonText
  ],
  template: `
      <ion-content class="ion-padding">
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
          <ion-spinner color="primary"></ion-spinner>
          <ion-text color="primary" style="margin-top: 20px;">
            <h3>Verifying your sign-in...</h3>
            <p>Please wait while we complete your authentication.</p>
          </ion-text>
        </div>
      </ion-content>`
})
export class CallbackComponent implements OnInit {
  private authCheckInterval: any;
  private hubUnsubscribe: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    console.log('🔗 OAuth callback component initialized');

    // Set up Hub listener for auth events
    this.hubUnsubscribe = Hub.listen('auth', async ({ payload }) => {
      console.log('🔗 Callback component received auth event:', payload.event);

      if (payload.event === 'signInWithRedirect') {
        console.log('✅ OAuth sign-in complete! Redirecting to home...');
        this.cleanup();
        await this.router.navigate(['/home']);
      } else if (payload.event === 'signInWithRedirect_failure') {
        console.error('❌ OAuth sign-in failed:', payload.data);
        this.cleanup();
        await this.router.navigate(['/account/signup'], {
          queryParams: { error: 'Authentication failed' }
        });
      }
    });

    // Always read from the full URL (works for iOS + Android)
    const currentUrl = window.location.href;
    const urlParams = new URL(currentUrl).searchParams;

    // Fallback: Angular route snapshot (useful on web)
    const routeParams = this.route.snapshot.queryParams;

    const code = urlParams.get('code') || routeParams['code'];
    const error = urlParams.get('error') || routeParams['error'];

    console.log('🔗 Callback URL:', currentUrl);
    console.log('🔗 OAuth code:', code ? 'present' : 'missing');
    console.log('🔗 OAuth error:', error || 'none');

    if (error) {
      console.error('🔗 OAuth error received:', error);
      this.cleanup();
      this.router.navigate(['/account/signup'], {
        queryParams: { error: 'OAuth authentication failed' }
      });
      return;
    }

    if (code) {
      console.log('🔗 Authorization code detected, waiting for Amplify to process...');
      await this.waitForAuthentication();
    } else {
      console.warn('🔗 No authorization code found in callback URL');
      this.cleanup();
      this.router.navigate(['/account/signup']);
    }
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private cleanup() {
    if (this.authCheckInterval) {
      clearInterval(this.authCheckInterval);
      this.authCheckInterval = null;
    }
    if (this.hubUnsubscribe) {
      this.hubUnsubscribe();
      this.hubUnsubscribe = null;
    }
  }

  private async waitForAuthentication(): Promise<void> {
    // Start checking auth status immediately and periodically
    let attempts = 0;
    const maxAttempts = 40; // 60 seconds total (40 * 1.5s)

    // First, give Amplify a moment to process the OAuth callback
    console.log('⏳ Waiting for Amplify OAuth listener to process callback...');
    await new Promise(resolve => setTimeout(resolve, 2000));

    return new Promise((resolve) => {
      this.authCheckInterval = setInterval(async () => {
        attempts++;
        console.log(`🔗 Checking authentication status (${attempts}/${maxAttempts})...`);

        try {
          // Force refresh every 3rd attempt to check if tokens are ready
          const forceRefresh = attempts % 3 === 0;
          const session = await fetchAuthSession({ forceRefresh });

          console.log(`🔗 Session check result:`, {
            hasTokens: !!session.tokens,
            hasIdToken: !!session.tokens?.idToken,
            hasAccessToken: !!session.tokens?.accessToken,
            forceRefresh
          });

          if (session.tokens?.idToken) {
            console.log('✅ Session tokens found! Verifying user...');

            try {
              // Verify user is actually authenticated
              const user = await getCurrentUser();
              console.log('✅ User authenticated successfully!', {
                userId: user.userId,
                username: user.username
              });

              this.cleanup();
              console.log('✅ Redirecting to /home...');
              await this.router.navigate(['/home']);
              resolve();
              return;
            } catch (userErr: any) {
              console.log('⏳ Tokens present but user not ready yet:', userErr.message || userErr);
            }
          } else {
            console.log('⏳ No tokens found yet, continuing to wait...');
          }
        } catch (err: any) {
          console.log(`⏳ Auth check failed (${attempts}/${maxAttempts}):`, {
            message: err.message || err,
            name: err.name,
            code: err.code
          });
        }

        // Timeout check
        if (attempts >= maxAttempts) {
          console.error('❌ Authentication timeout after', maxAttempts * 1.5, 'seconds');
          console.error('❌ OAuth callback failed to complete. This may be due to:');
          console.error('   1. Amplify OAuth listener not processing the authorization code');
          console.error('   2. Redirect URI mismatch in AWS Cognito configuration');
          console.error('   3. Network connectivity issues');

          this.cleanup();
          this.router.navigate(['/account/signup'], {
            queryParams: { error: 'Authentication timeout. Please try again.' }
          });
          resolve();
        }
      }, 1500); // Check every 1.5 seconds
    });
  }
}
