import 'aws-amplify/auth/enable-oauth-listener';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {IonicModule, isPlatform} from '@ionic/angular';
import {provideRouter, withHashLocation} from '@angular/router';
import { routes } from './app/app-routing.module';
import {authInterceptor} from './app/auth.interceptor';
import { provideLottieOptions } from 'ngx-lottie';
import { IonicStorageModule } from '@ionic/storage-angular';
import { register } from 'swiper/element/bundle';
import {Hub} from 'aws-amplify/utils';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
register();

// Player factory method for lottie-web
export function playerFactory() {
  return import('lottie-web');
}

if (environment.production) {
  enableProdMode();
}
const mobileRedirect = 'cognitoapp://callback';
const mobileSignOut = 'cognitoapp://callback';
const webRedirect = 'http://localhost:8100';
const webSignOut = 'http://localhost:8100';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.awsConfig.userPoolId,
      userPoolClientId: environment.awsConfig.userPoolClientId,
      identityPoolId: environment.awsConfig.identityPoolId,
      loginWith: {
        oauth: {
          domain: environment.awsConfig.cognitoDomain,
          redirectSignIn: isPlatform('capacitor') ? mobileRedirect : webRedirect,
          redirectSignOut: isPlatform('capacitor') ? mobileSignOut : webSignOut,
          responseType: 'code',
          scopes: ['email', 'openid', 'profile'],
        },
      },
    }
  }
});

// Debug configuration
console.log('🔧 AWS Amplify Configuration:', {
  userPoolId: environment.awsConfig.userPoolId,
  userPoolClientId: environment.awsConfig.userPoolClientId,
  identityPoolId: environment.awsConfig.identityPoolId,
  cognitoDomain: environment.awsConfig.cognitoDomain,
  platform: isPlatform('capacitor') ? 'capacitor' : 'web',
  redirectSignIn: isPlatform('capacitor') ? mobileRedirect : webRedirect,
  redirectSignOut: isPlatform('capacitor') ? mobileSignOut : webSignOut
});

const currentConfig = Amplify.getConfig();
console.log('🔧 Final Amplify Config:', currentConfig);

Hub.listen('auth', async ({payload}) => {
  switch (payload.event) {
    case 'signInWithRedirect':
      const router = (window as any).ng?.getInjector()?.get(Router);
      await router?.navigate(['/home']);
      break;
    case 'signInWithRedirect_failure':
      console.error('Sign in with redirect failed:', payload.data);
      break;
    case 'customOAuthState':
      const state = payload.data; // this will be customState provided on signInWithRedirect function
      break;
  }
});

// Set up deep link handling for mobile apps
if (Capacitor.isNativePlatform()) {
  import('@capacitor/app').then(({ App }) => {
    App.addListener('appUrlOpen', (data: any) => {
      console.log('Deep link received:', data.url);

      // Check if this is an OAuth callback (custom scheme or Universal Link)
      if (data.url.includes('cognitoapp://callback') || data.url.includes('https://Travis-ugo.github.io/cognito-universal-links/callback')) {
        console.log('OAuth callback detected, processing...');

        // Extract query parameters from the URL
        try {
          const url = new URL(data.url);
          const code = url.searchParams.get('code');
          const error = url.searchParams.get('error');

          if (error) {
            console.error('OAuth error:', error);
            alert(`OAuth error: ${error}`);
          } else if (code) {
            console.log('OAuth code received:', code);
            // Let Amplify handle the token exchange
            window.location.href = data.url;
          }
        } catch (err) {
          console.error('Error processing deep link:', err);
        }
      }
    });
  });
}
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(
      IonicModule.forRoot(),
      IonicStorageModule.forRoot()
    ),
    provideLottieOptions({
      player: playerFactory
    }),
    provideRouter(
      routes,
      withHashLocation()
    )
  ],
}).catch(err => console.error(err));

