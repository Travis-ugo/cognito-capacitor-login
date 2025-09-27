import "aws-amplify/auth/enable-oauth-listener";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { Amplify } from "aws-amplify";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { IonicModule, isPlatform } from "@ionic/angular";
import { provideRouter, withHashLocation } from "@angular/router";
import { routes } from "./app/app-routing.module";
import { authInterceptor } from "./app/auth.interceptor";
import { provideLottieOptions } from "ngx-lottie";
import { IonicStorageModule } from "@ionic/storage-angular";
import { register } from "swiper/element/bundle";
import { Hub } from "aws-amplify/utils";
import { Router } from "@angular/router";
import { Capacitor } from "@capacitor/core";
register();

// Player factory method for lottie-web
export function playerFactory() {
  return import("lottie-web");
}

if (environment.production) {
  enableProdMode();
}
const mobileRedirect = "tensilapp://callback";
const mobileSignOut = "tensilapp://callback";

const webRedirectDev = "http://localhost:8100/callback";
const webSignOutDev = "http://localhost:8100";

const webRedirectProd = "https://cognito-capacitor-login.vercel.app/callback";
const webSignOutProd = "https://cognito-capacitor-login.vercel.app";

// Determine if we're in development or production web mode
const isLocalDev =
  !environment.production &&
  !isPlatform("capacitor") &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const webRedirect = isLocalDev ? webRedirectDev : webRedirectProd;
const webSignOut = isLocalDev ? webSignOutDev : webSignOutProd;

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.awsConfig.userPoolId,
      userPoolClientId: environment.awsConfig.userPoolClientId,
      identityPoolId: environment.awsConfig.identityPoolId,
      loginWith: {
        oauth: {
          domain: environment.awsConfig.cognitoDomain || environment.awsConfig.oauth.domain,
          redirectSignIn: isPlatform("capacitor")
            ? [mobileRedirect]
            : [webRedirect],

          redirectSignOut: isPlatform("capacitor")
            ? [mobileSignOut]
            : [webSignOut],

          responseType: "code",
          scopes: ["email", "openid", "profile"],
        },
      },
    },
  },
});

// Debug configuration
console.log("🔧 AWS Amplify Configuration:", {
  userPoolId: environment.awsConfig.userPoolId,
  userPoolClientId: environment.awsConfig.userPoolClientId,
  identityPoolId: environment.awsConfig.identityPoolId,
  cognitoDomain: environment.awsConfig.cognitoDomain,
  platform: isPlatform("capacitor") ? "capacitor" : "web",
  isLocalDev: isLocalDev,
  hostname: window.location.hostname,
  mobileRedirect: mobileRedirect,
  mobileSignOut: mobileSignOut,
  webRedirect: webRedirect,
  webSignOut: webSignOut,
  redirectSignIn: isPlatform("capacitor") ? [mobileRedirect] : [webRedirect],
  redirectSignOut: isPlatform("capacitor") ? [mobileSignOut] : [webSignOut],
});

const currentConfig = Amplify.getConfig();
console.log("🔧 Final Amplify Config:", currentConfig);
console.log("🔧 OAuth Configuration Details:", {
  oauthConfig: currentConfig.Auth?.Cognito?.loginWith?.oauth,
  redirectArrays: {
    signIn: currentConfig.Auth?.Cognito?.loginWith?.oauth?.redirectSignIn,
    signOut: currentConfig.Auth?.Cognito?.loginWith?.oauth?.redirectSignOut,
  },
  scopes: currentConfig.Auth?.Cognito?.loginWith?.oauth?.scopes,
  responseType: currentConfig.Auth?.Cognito?.loginWith?.oauth?.responseType,
});

Hub.listen("auth", async ({ payload }) => {
  console.log("🎯 Auth Hub Event:", {
    event: payload.event,
    data: (payload as any).data,
    fullPayload: payload,
  });

  switch (payload.event) {
    case "signInWithRedirect":
      console.log("🎯 signInWithRedirect SUCCESS");
      const router = (window as any).ng?.getInjector()?.get(Router);
      await router?.navigate(["/home"]);
      break;
    case "signInWithRedirect_failure":
      console.error("🎯 signInWithRedirect FAILED:", {
        error: (payload as any).data,
        errorType: typeof (payload as any).data,
        errorKeys: (payload as any).data
          ? Object.keys((payload as any).data)
          : "no keys",
        fullError: JSON.stringify((payload as any).data, null, 2),
      });
      break;
    case "customOAuthState":
      console.log("🎯 customOAuthState received:", (payload as any).data);
      const state = (payload as any).data; // this will be customState provided on signInWithRedirect function
      break;
    case "signInWithRedirect_failure":
      console.error("🎯 OAuth redirect failure event");
      break;
    default:
      console.log("🎯 Unhandled auth event:", payload.event);
      break;
  }
});

// Set up deep link handling for mobile apps
if (Capacitor.isNativePlatform()) {
  import("@capacitor/app").then(({ App }) => {
    App.addListener("appUrlOpen", (data: any) => {
      console.log("🔗 Deep link received:", data.url);

      // Check if this is an OAuth callback (custom scheme or Universal Link)
      if (
        data.url.includes("tensilapp://callback") ||
        data.url.includes("tensilapp://logout") ||
        data.url.includes("https://cognito-capacitor-login.vercel.app/callback")
      ) {
        console.log("🔗 OAuth callback detected, processing...");

        // Extract query parameters from the URL
        try {
          const url = new URL(data.url);
          const code = url.searchParams.get("code");
          const error = url.searchParams.get("error");

          if (error) {
            console.error("OAuth error:", error);
          } else if (code) {
            console.log("OAuth code received:", code);
            // Let Amplify handle the token exchange
            window.location.href = data.url;
          }
        } catch (err) {
          console.error("Error processing deep link:", err);
        }
      }
    });
  });
}
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(IonicModule.forRoot(), IonicStorageModule.forRoot()),
    provideLottieOptions({
      player: playerFactory,
    }),
    // Use hash routing only for mobile (Capacitor) to avoid file:// protocol issues
    // Use regular routing for web to support Universal Links and OAuth callbacks
    provideRouter(
      routes,
      ...(isPlatform("capacitor") ? [withHashLocation()] : [])
    ),
  ],
}).catch((err) => console.error(err));
