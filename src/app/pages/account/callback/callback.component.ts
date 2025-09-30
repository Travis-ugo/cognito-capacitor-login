import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { IonContent, IonSpinner, IonText } from '@ionic/angular/standalone';

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
            <h3>Processing OAuth callback...</h3>
            <p>Please wait while we complete your sign-in.</p>
          </ion-text>
        </div>
      </ion-content>`
})
export class CallbackComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    console.log('🔗 OAuth callback component initialized');

    // Get parameters from Angular route (for deep link navigation) or URL (for web navigation)
    const routeParams = this.route.snapshot.queryParams;
    const urlParams = new URLSearchParams(window.location.search);

    const code = routeParams['code'] || urlParams.get('code');
    const error = routeParams['error'] || urlParams.get('error');
    const currentUrl = window.location.href;

    console.log('🔗 Callback URL:', currentUrl);
    console.log('🔗 Route params:', routeParams);
    console.log('🔗 OAuth code:', code);
    console.log('🔗 OAuth error:', error);

    if (error) {
      console.error('🔗 OAuth error received:', error);
      this.router.navigate(['/account/signup'], {
        queryParams: { error: 'OAuth authentication failed' }
      });
      return;
    }

    if (code) {
      console.log('🔗 Authorization code received, waiting for Amplify to process...');

      // Give Amplify some time to process the OAuth callback
      await this.waitForAuthentication();
    } else {
      console.warn('🔗 No authorization code found in callback URL');
      this.router.navigate(['/account/signup']);
    }
  }

  private async waitForAuthentication(maxAttempts = 10, delayMs = 1000): Promise<void> {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        console.log(`🔗 Checking authentication status (attempt ${attempt}/${maxAttempts})...`);

        const session = await fetchAuthSession();
        if (session.tokens?.idToken) {
          console.log('🔗 Authentication successful! Redirecting to home...');
          this.router.navigate(['/home']);
          return;
        }

        // Also try getCurrentUser as a double-check
        const user = await getCurrentUser();
        if (user) {
          console.log('🔗 User authenticated via getCurrentUser! Redirecting to home...');
          this.router.navigate(['/home']);
          return;
        }
      } catch (error) {
        console.log(`🔗 Authentication not ready yet (attempt ${attempt}):`, error.message || error);
      }

      if (attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }

    console.error('🔗 Authentication timeout - redirecting to signup');
    this.router.navigate(['/account/signup'], {
      queryParams: { error: 'Authentication timeout' }
    });
  }
}
