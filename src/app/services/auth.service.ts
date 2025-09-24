import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Browser} from '@capacitor/browser';
import {App} from '@capacitor/app';
import {Capacitor} from '@capacitor/core';
import {
  confirmSignIn,
  deleteUser,
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
  signIn,
  signOut,
  signUp,
  signInWithRedirect
} from '@aws-amplify/auth';
import {AuthProvider} from '@aws-amplify/auth/dist/esm/types/inputs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Get access to window object in the Angular way
  private window: Window;
  constructor(
      @Inject(DOCUMENT) private document: Document,
  ) {
    this.window = this.document.defaultView;
  }
  async socialSignIn(identityProvider: AuthProvider) {
    try {
      console.log('🔥 STARTING SOCIAL SIGN-IN');
      console.log('🔥 Provider:', identityProvider);
      console.log('🔥 Platform info:', {
        isNative: Capacitor.isNativePlatform(),
        platform: Capacitor.getPlatform(),
        hostname: this.window?.location?.hostname,
        production: environment.production
      });

      // Get the current Amplify configuration to debug
      const { Amplify } = await import('aws-amplify');
      const currentConfig = Amplify.getConfig();
      console.log('🔥 Current Amplify config redirects:', {
        signIn: currentConfig.Auth?.Cognito?.loginWith?.oauth?.redirectSignIn,
        signOut: currentConfig.Auth?.Cognito?.loginWith?.oauth?.redirectSignOut
      });

      // Use Amplify's configured redirect URIs (which are set in main.ts based on environment)
      console.log('🔥 Attempting Amplify signInWithRedirect...');

      // Log the exact parameters being passed to signInWithRedirect
      const signInParams = { provider: identityProvider };
      console.log('🔥 SignInWithRedirect parameters:', JSON.stringify(signInParams, null, 2));

      await signInWithRedirect(signInParams);
      console.log('🔥 Amplify signInWithRedirect initiated successfully');

    } catch (error: any) {
      console.error('🔥🔥🔥 ERROR during social sign-in:', error);
      console.error('🔥🔥🔥 Error details:', {
        name: error.name,
        message: error.message,
        code: error.code
      });

      // Provide user-friendly error messages based on error type
      let userMessage = 'Authentication failed. ';

      if (error.message?.includes('InvalidOriginException') || error.message?.includes('redirect')) {
        userMessage += 'Please ensure the redirect URLs are configured correctly in AWS Cognito.';
        console.error('🔥🔥🔥 This appears to be a redirect URL configuration error in AWS Cognito');
      } else if (error.message?.includes('provider')) {
        userMessage += 'The OAuth provider configuration is incorrect.';
        console.error('🔥🔥🔥 This appears to be a provider configuration error');
      } else if (error.message?.includes('NetworkError')) {
        userMessage += 'Network connection failed. Please check your internet connection.';
      } else {
        userMessage += 'An unexpected error occurred. Please try again.';
      }

      // Show a cleaner user-facing alert
      alert(`Authentication Error\n\n${userMessage}`);

      throw new Error(userMessage);
    }
  }

  private async handleMobileSocialLogin(provider: AuthProvider) {
    try {
      console.log('Handling mobile social login for:', provider);

      // Build the OAuth URL manually for mobile - use localhost redirect for in-app browser
      const authUrl = `https://${environment.awsConfig.cognitoDomain}/oauth2/authorize?` +
        `client_id=${environment.awsConfig.userPoolClientId}&` +
        `response_type=code&` +
        `scope=email+openid+profile&` +
        `redirect_uri=http://localhost:8100&` +
        `identity_provider=${provider}`;

      console.log('Opening OAuth URL in browser:', authUrl);
      alert(`Opening ${provider} OAuth login in in-app browser`);

      // Try using window.open instead of Browser plugin
      if (this.window) {
        console.log('Using window.open for OAuth URL');
        this.window.open(authUrl, '_blank', 'location=yes,hidden=no,closebuttoncaption=Done');
      } else {
        console.log('Fallback to Browser plugin');
        await Browser.open({
          url: authUrl,
          windowName: '_blank',
        });
      }

      console.log('Browser opened successfully');

      // Set up listener for the deep link callback
      this.setupDeepLinkListener();

      // Also listen for browser navigation changes
      this.setupBrowserListener();

    } catch (error) {
      console.error('Error in mobile social login:', error);
      throw error;
    }
  }

  private setupDeepLinkListener() {
    console.log('Setting up deep link listener');

    App.addListener('appUrlOpen', async (data) => {
      console.log('Deep link received:', data.url);

      if (data.url.includes('localhost:8100') || data.url.includes('cognitoapp://callback')) {
        try {
          await Browser.close();
          await this.processAuthCallback(data.url);
        } catch (error) {
          console.error('Error processing auth callback:', error);
        }
      }
    });
  }

  private setupBrowserListener() {
    console.log('Setting up browser listener');

    Browser.addListener('browserFinished', () => {
      console.log('Browser closed');
    });

    Browser.addListener('browserPageLoaded', () => {
      console.log('Browser page loaded');
    });
  }

  private async processAuthCallback(url: string) {
    try {
      console.log('Processing auth callback URL:', url);

      // Extract the authorization code from the URL
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const code = urlParams.get('code');

      if (code) {
        console.log('Authorization code received:', code);
        // Here you would normally exchange the code for tokens
        // For now, let's redirect to home page
        alert('OAuth callback received! Code: ' + code);
        // You can implement token exchange here or let Amplify handle it
      } else {
        console.error('No authorization code found in callback URL');
        alert('OAuth callback error: No authorization code found');
      }
    } catch (error) {
      console.error('Error processing auth callback:', error);
      alert('Error processing OAuth callback: ' + error);
    }
  }
  // Get temporary access keys from the Identity Pool
  public async getAccessKeys(): Promise<any> {
    const authSession = await fetchAuthSession();
    return authSession.credentials;
  }
  // Get Cognito username
  public getUserSub(): Observable<any> {
    return from(getCurrentUser()).pipe(
      map(authUser => (authUser.userId))
    );
  }
  // Get Cognito user attributes - observable
  public getUserAttributes() {
    return from(fetchUserAttributes()).pipe(
      map(attributes => (attributes))
    );
  }
  // Get Cognito user email - observable
  public getUserEmail() {
    return from(fetchUserAttributes()).pipe(
      map(attributes => (attributes.email))
    );
  }
  // Get Cognito user attributes - promise
  public async getUserAttributesPromise() {
    return await fetchUserAttributes();
  }
  public async signUp(email: string): Promise<boolean> {
    try {
      const {isSignUpComplete, userId, nextStep} = await signUp({
        username: email,
        password: this.getRandomString(30),
        options: {
          userAttributes: {
            email
          }
        }
      });
      return isSignUpComplete;
    } catch (error) {
      if (error.name === 'UserLambdaValidationException') {
        // Throw the cleaned-up error instead of just returning the message
        throw new Error(error.message.replace(/^PreSignUp failed with error\s*/, ''));
      }
      throw error;
    }
  }
  public async signIn(email: string) {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        options: {
          authFlowType: 'CUSTOM_WITHOUT_SRP'
        }
      });
      if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
        return isSignedIn;
      }
    } catch(error: any) {
			console.error('error signing in', error);
      return error;
    }
  }
  public async signOut() {
		try {
			await signOut();
		} catch (error) {
			console.error('error signing out: ', error);
		}
  }
  public async answerCustomChallenge(answer: string) {
    // @ts-ignore
		try {
      const {
        isSignedIn,
        nextStep
      } = await confirmSignIn({ challengeResponse: answer });
      if (isSignedIn) {
				// login successful
        return 'isSignedIn';
      }
      if ('additionalInfo' in nextStep) {
				// login failed, present the nextStep feedback (how many attempts left etc).
				return nextStep.additionalInfo;
      }
    } catch (error: any) {
      if (error.name.includes('SignInException')) {
        return 'There was an issue, try again or return to login.';
      }
      if (error.name.includes('EmptyChallengeResponse')) {
        return 'Please enter the code you were emailed';
      }
      return 'There was an issue, please login again.';
		}
  }
  private fetchAuthSession() {
    const getSession = async () => {
      const {
        tokens,
        credentials,
        identityId,
        userSub
      } = await fetchAuthSession();

      const {
        idToken,
        accessToken
      } = tokens;
      return idToken;
    }
    return getSession();
  }
  // returns a boolean based on auth state
  public async isAuthenticated() {
    try {
      await this.fetchAuthSession();
      return true;
    } catch {
      return false;
    }
  }
  // Get ID Token to make API calls when Cognito authentication is enabled on API Gateway
  public async getIDToken() {
      return await this.fetchAuthSession().then((result) => {
        return result;
      });
  }
  async deleteUser() {
    return await deleteUser();
  }
  // Generate a password to create user but never used as we have a custom auth challenge setup in Cognito
  private getRandomString(bytes: number) {
    const randomValues = new Uint8Array(bytes);
    this.window.crypto.getRandomValues(randomValues);
    return Array.from(randomValues).map(this.intToHex).join('');
  }
  private intToHex(nr: number) {
    return nr.toString(16).padStart(2, '0');
  }
}
