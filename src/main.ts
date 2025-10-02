// import "aws-amplify/auth/enable-oauth-listener";
// import { enableProdMode, importProvidersFrom } from "@angular/core";
// import { environment } from "./environments/environment";
// import { Amplify } from "aws-amplify";
// import { cognitoUserPoolsTokenProvider } from "@aws-amplify/auth/cognito";
// import { bootstrapApplication } from "@angular/platform-browser";
// import { AppComponent } from "./app/app.component";
// import { provideHttpClient, withInterceptors } from "@angular/common/http";
// import { IonicModule, isPlatform } from "@ionic/angular";
// import { provideRouter, withHashLocation } from "@angular/router";
// import { routes } from "./app/app-routing.module";
// import { authInterceptor } from "./app/auth.interceptor";
// import { provideLottieOptions } from "ngx-lottie";
// import { IonicStorageModule } from "@ionic/storage-angular";
// import { register } from "swiper/element/bundle";
// import { Hub } from "aws-amplify/utils";
// import { Router } from "@angular/router";
// import { Capacitor } from "@capacitor/core";
// import { CapacitorStorage } from "./app/utils/capacitor-storage";
// register();

// // Player factory method for lottie-web
// export function playerFactory() {
//   return import("lottie-web");
// }

// if (environment.production) {
//   enableProdMode();
// }
// const mobileRedirect = "capacitor://callback";
// const mobileSignOut = "capacitor://callback";
// const capacitorRedirect = "capacitor://localhost/callback";
// const capacitorCallback = "capacitor://callback";
// const capacitorSignOut = "capacitor://callback";
// const capacitorCallbackSignOut = "capacitor://callback";
// const webRedirectDev = "http://localhost:8100/callback";
// const webSignOutDev = "http://localhost:8100";
// const webRedirectProd = "https://cognito-capacitor-login.vercel.app/callback";
// const webSignOutProd = "https://cognito-capacitor-login.vercel.app";

// // Determine if we're in development or production web mode
// const isLocalDev =
//   !environment.production &&
//   !isPlatform("capacitor") &&
//   (window.location.hostname === "localhost" ||
//     window.location.hostname === "127.0.0.1");

// const webRedirect = isLocalDev ? webRedirectDev : webRedirectProd;
// const webSignOut = isLocalDev ? webSignOutDev : webSignOutProd;

// // Configure custom storage for Capacitor apps BEFORE Amplify.configure
// if (isPlatform("capacitor")) {
//   const capacitorStorage = new CapacitorStorage();
//   cognitoUserPoolsTokenProvider.setKeyValueStorage(capacitorStorage);
//   console.log("📦 Capacitor storage configured for Amplify Auth");
// }

// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId: environment.awsConfig.userPoolId,
//       userPoolClientId: environment.awsConfig.userPoolClientId,
//       identityPoolId: environment.awsConfig.identityPoolId,
//       loginWith: {
//         oauth: {
//           domain: environment.awsConfig.cognitoDomain,
//           redirectSignIn: isPlatform("capacitor")
//             ? [capacitorRedirect, capacitorCallback, mobileRedirect]
//             : [webRedirect],
//           redirectSignOut: isPlatform("capacitor")
//             ? [capacitorSignOut, capacitorCallbackSignOut, mobileSignOut]
//             : [webSignOut],
//           responseType: "code",
//           scopes: ["email", "openid", "profile"],
//         },
//       },
//     },
//   },
// });

// // Debug configuration
// console.log("🔧 AWS Amplify Configuration:", {
//   userPoolId: environment.awsConfig.userPoolId,
//   userPoolClientId: environment.awsConfig.userPoolClientId,
//   identityPoolId: environment.awsConfig.identityPoolId,
//   cognitoDomain: environment.awsConfig.cognitoDomain,
//   platform: isPlatform("capacitor") ? "capacitor" : "web",
//   isLocalDev: isLocalDev,
//   hostname: window.location.hostname,
//   usingCapacitorStorage: isPlatform("capacitor"),
//   redirectSignIn: isPlatform("capacitor")
//     ? [capacitorRedirect, capacitorCallback, mobileRedirect]
//     : [webRedirect],
//   redirectSignOut: isPlatform("capacitor")
//     ? [capacitorSignOut, capacitorCallbackSignOut, mobileSignOut]
//     : [webSignOut],
// });

// const currentConfig = Amplify.getConfig();
// console.log("🔧 Final Amplify Config:", currentConfig);
// console.log("🔧 OAuth Configuration Details:", {
//   oauthConfig: currentConfig.Auth?.Cognito?.loginWith?.oauth,
//   redirectArrays: {
//     signIn: currentConfig.Auth?.Cognito?.loginWith?.oauth?.redirectSignIn,
//     signOut: currentConfig.Auth?.Cognito?.loginWith?.oauth?.redirectSignOut,
//   },
//   scopes: currentConfig.Auth?.Cognito?.loginWith?.oauth?.scopes,
//   responseType: currentConfig.Auth?.Cognito?.loginWith?.oauth?.responseType,
// });

// Hub.listen("auth", async ({ payload }) => {
//   console.log("🎯 Auth Hub Event:", {
//     event: payload.event,
//     data: (payload as any).data,
//     fullPayload: payload,
//   });

//   switch (payload.event) {
//     case "signInWithRedirect":
//       console.log("🎯 signInWithRedirect SUCCESS - navigating to home");
//       // Give Angular time to bootstrap if needed
//       setTimeout(async () => {
//         const router = (window as any).ng?.getInjector()?.get(Router);
//         if (router) {
//           console.log("🎯 Router found, navigating to /home");
//           await router.navigate(["/home"]);
//         } else {
//           console.error("🎯 Router not found, attempting manual navigation");
//           window.location.href = window.location.origin + "/home";
//         }
//       }, 500);
//       break;
//     case "signInWithRedirect_failure":
//       console.error("🎯 signInWithRedirect FAILED:", {
//         error: (payload as any).data,
//         errorType: typeof (payload as any).data,
//         errorKeys: (payload as any).data
//           ? Object.keys((payload as any).data)
//           : "no keys",
//         fullError: JSON.stringify((payload as any).data, null, 2),
//       });
//       break;
//     case "customOAuthState":
//       console.log("🎯 customOAuthState received:", (payload as any).data);
//       const state = (payload as any).data; // this will be customState provided on signInWithRedirect function
//       break;
//     default:
//       console.log("🎯 Unhandled auth event:", payload.event);
//       break;
//   }
// });

// // Set up deep link handling for mobile apps
// if (Capacitor.isNativePlatform()) {
//   import("@capacitor/app").then(({ App }) => {
//     App.addListener("appUrlOpen", async (data: any) => {
//       console.log("🔗 Deep link received:", data.url);

//       // Check if this is an OAuth callback (custom scheme or Universal Link)
//       if (
//         data.url.includes("tensilapp://callback") ||
//         data.url.includes("capacitor://localhost/callback") ||
//         data.url.includes("capacitor://callback") ||
//         data.url.includes("https://cognito-capacitor-login.vercel.app/callback")
//       ) {
//         console.log("🔗 OAuth callback detected, processing...");

//         // Extract query parameters from the URL
//         try {
//           const url = new URL(data.url);
//           const code = url.searchParams.get("code");
//           const state = url.searchParams.get("state");
//           const error = url.searchParams.get("error");

//           console.log("🔗 OAuth callback details:", {
//             code: code ? "present" : "missing",
//             state: state ? "present" : "missing",
//             error: error || "none"
//           });

//           if (error) {
//             console.error("🔗 OAuth error:", error);
//             const router = (window as any).ng?.getInjector()?.get(Router);
//             router?.navigate(["/account/signup"], { queryParams: { error } });
//             return;
//           }

//           if (code) {
//             console.log("🔗 OAuth code received, updating window.location for Amplify OAuth listener...");
//             console.log("🔗 Original deep link URL:", data.url);

//             // Convert deep link URL to web URL format that Amplify's OAuth listener expects
//             // Amplify's OAuth listener monitors window.location changes
//             const newUrl = `${window.location.origin}${window.location.pathname}?code=${encodeURIComponent(code)}${state ? `&state=${encodeURIComponent(state)}` : ''}`;

//             console.log("🔗 Setting window.location.href to:", newUrl);

//             // This will trigger a page reload with the OAuth code in the URL
//             // Amplify's OAuth listener (imported at top of file) will process it
//             window.location.href = newUrl;
//           }
//         } catch (err) {
//           console.error("🔗 Error processing deep link:", err);
//         }
//       }
//     });
//   });
// }
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(withInterceptors([authInterceptor])),
//     importProvidersFrom(IonicModule.forRoot(), IonicStorageModule.forRoot()),
//     provideLottieOptions({
//       player: playerFactory,
//     }),
//     // Use hash routing only for mobile (Capacitor) to avoid file:// protocol issues
//     // Use regular routing for web to support Universal Links and OAuth callbacks
//     provideRouter(
//       routes,
//       ...(isPlatform("capacitor") ? [withHashLocation()] : [])
//     ),
//   ],
// }).catch((err) => console.error(err));




// src/app/app-routing.module.ts
// src/app/app.component.ts
// src/app/pages/account/callback/callback.component.ts
// src/app/services/auth.service.ts
// src/environments/environment.prod.ts
// src/environments/environment.ts
// src/main.ts
// src/zone-flags.ts



import "aws-amplify/auth/enable-oauth-listener";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { environment } from "./environments/environment";
import { Amplify } from "aws-amplify";
import { cognitoUserPoolsTokenProvider } from "@aws-amplify/auth/cognito";
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
import { CapacitorStorage } from "./app/utils/capacitor-storage";

register();

// Player factory method for lottie-web
export function playerFactory() {
  return import("lottie-web");
}

if (environment.production) {
  enableProdMode();
}

const mobileRedirect = "capacitor://callback";
const mobileSignOut = "capacitor://callback";
const capacitorRedirect = "capacitor://localhost/callback";
const capacitorCallback = "capacitor://callback";
const capacitorSignOut = "capacitor://callback";
const capacitorCallbackSignOut = "capacitor://callback";
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

// Configure custom storage for Capacitor apps BEFORE Amplify.configure
if (isPlatform("capacitor")) {
  const capacitorStorage = new CapacitorStorage();
  cognitoUserPoolsTokenProvider.setKeyValueStorage(capacitorStorage);
  console.log("📦 Capacitor storage configured for Amplify Auth");
}

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.awsConfig.userPoolId,
      userPoolClientId: environment.awsConfig.userPoolClientId,
      identityPoolId: environment.awsConfig.identityPoolId,
      loginWith: {
        oauth: {
          domain: environment.awsConfig.cognitoDomain,
          redirectSignIn: isPlatform("capacitor")
            ? [capacitorRedirect, capacitorCallback, mobileRedirect]
            : [webRedirect],
          redirectSignOut: isPlatform("capacitor")
            ? [capacitorSignOut, capacitorCallbackSignOut, mobileSignOut]
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
  usingCapacitorStorage: isPlatform("capacitor"),
  redirectSignIn: isPlatform("capacitor")
    ? [capacitorRedirect, capacitorCallback, mobileRedirect]
    : [webRedirect],
  redirectSignOut: isPlatform("capacitor")
    ? [capacitorSignOut, capacitorCallbackSignOut, mobileSignOut]
    : [webSignOut],
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
      console.log("🎯 signInWithRedirect SUCCESS - navigating to home");
      setTimeout(async () => {
        const router = (window as any).ng?.getInjector()?.get(Router);
        if (router) {
          console.log("🎯 Router found, navigating to /home");
          await router.navigate(["/home"]);
        } else {
          console.error("🎯 Router not found, attempting manual navigation");
          window.location.href = window.location.origin + "/home";
        }
      }, 500);
      break;
    case "signInWithRedirect_failure":
      console.error("🎯 signInWithRedirect FAILED:", {
        error: (payload as any).data,
        fullError: JSON.stringify((payload as any).data, null, 2),
      });
      break;
    case "customOAuthState":
      console.log("🎯 customOAuthState received:", (payload as any).data);
      break;
    default:
      console.log("🎯 Unhandled auth event:", payload.event);
      break;
  }
});

// ✅ FIXED Deep link handling (safe navigation)
if (Capacitor.isNativePlatform()) {
  import("@capacitor/app").then(({ App }) => {
    App.addListener("appUrlOpen", async (data: any) => {
      console.log("🔗 Deep link received:", data.url);

      if (
        data.url.includes("tensilapp://callback") ||
        data.url.includes("capacitor://localhost/callback") ||
        data.url.includes("capacitor://callback") ||
        data.url.includes("https://cognito-capacitor-login.vercel.app/callback")
      ) {
        console.log("🔗 OAuth callback detected, processing...");
        try {
          const url = new URL(data.url);
          const code = url.searchParams.get("code");
          const state = url.searchParams.get("state");
          const error = url.searchParams.get("error");

          if (error) {
            console.error("🔗 OAuth error:", error);
            const router = (window as any).ng?.getInjector()?.get(Router);
            router?.navigate(["/account/signup"], { queryParams: { error } });
            return;
          }

          if (code) {
            console.log("🔑 OAuth code received");

            const targetUrl = `/callback?code=${encodeURIComponent(code)}${
              state ? `&state=${encodeURIComponent(state)}` : ""
            }`;

            try {
              const injector = (window as any).ng?.getInjector?.();
              if (injector) {
                const router = injector.get(
                  (await import("@angular/router")).Router
                );
                const ngZone = injector.get(
                  (await import("@angular/core")).NgZone
                );

                ngZone.run(() => {
                  router.navigateByUrl(targetUrl).catch((err: any) => {
                    console.error("❌ Router navigation failed:", err);
                    window.location.href =
                      `${window.location.origin}${targetUrl}`;
                  });
                });
              } else {
                console.warn("⚠️ Angular injector not ready, fallback reload");
                window.location.href = `${window.location.origin}${targetUrl}`;
              }
            } catch (err) {
              console.error("⚠️ Deep link routing failed:", err);
              window.location.href = `${window.location.origin}${targetUrl}`;
            }
          }
        } catch (err) {
          console.error("🔗 Error processing deep link:", err);
        }
      }
    });
  });
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(IonicModule.forRoot(), IonicStorageModule.forRoot()),
    provideLottieOptions({ player: playerFactory }),
    provideRouter(
      routes,
      ...(isPlatform("capacitor") ? [withHashLocation()] : [])
    ),
  ],
}).catch((err) => console.error(err));

