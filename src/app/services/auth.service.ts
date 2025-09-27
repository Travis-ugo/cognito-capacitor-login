import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Capacitor } from "@capacitor/core";
import {
  confirmSignIn,
  deleteUser,
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
  signIn,
  signOut,
  signUp,
  signInWithRedirect,
} from "@aws-amplify/auth";
import { AuthProvider } from "@aws-amplify/auth/dist/esm/types/inputs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private window: Window | null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView ?? null;
  }

  /**
   * ---------- SOCIAL LOGIN (Amplify-managed)
   * Uses Amplify's signInWithRedirect which builds the Hosted UI URL,
   * opens the system browser or in-app browser (depending on platform),
   * and Amplify handles the redirect + token exchange.
   */
  public async socialSignIn(identityProvider: AuthProvider): Promise<void> {
    try {
      console.log("🔥 socialSignIn starting", {
        provider: identityProvider,
        isNative: Capacitor.isNativePlatform(),
        platform: Capacitor.getPlatform(),
        hostname: this.window?.location?.hostname,
        production: environment.production,
      });

      // Optional debug: dump current Amplify config (useful when debugging redirect issues)
      try {
        const { Amplify } = await import("aws-amplify");
        const cfg = Amplify.getConfig();
        console.log("🔧 Amplify config (auth redirects):", {
          signIn: cfg.Auth?.Cognito?.loginWith?.oauth?.redirectSignIn,
          signOut: cfg.Auth?.Cognito?.loginWith?.oauth?.redirectSignOut,
        });
      } catch (cfgErr) {
        console.warn("Could not read Amplify config for debug:", cfgErr);
      }

      // Trigger Amplify's hosted UI flow
      await signInWithRedirect({ provider: identityProvider });
      console.log("✅ signInWithRedirect initiated");
    } catch (err: any) {
      console.error("❌ socialSignIn error", err);

      const fallbackMsg = "Authentication failed. Please try again.";
      let userMessage = fallbackMsg;

      if (
        err?.message?.includes("InvalidOriginException") ||
        err?.message?.includes("redirect")
      ) {
        userMessage = "Redirect URL mismatch. Check callback URLs in Cognito.";
      } else if (err?.message?.includes("provider")) {
        userMessage = "OAuth provider configuration incorrect.";
      } else if (err?.message?.includes("NetworkError")) {
        userMessage = "Network error. Check your connection.";
      }

      // Friendly user alert (you may replace with Toast)
      // In production you might want to surface a nicer UI rather than an alert
      alert(`Authentication Error\n\n${userMessage}`);

      // rethrow if caller needs to handle
      throw new Error(userMessage);
    }
  }

  /**
   * ---------- USERNAME/PASSWORD SIGN-IN (custom auth aware)
   * If Cognito returns nextStep with 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE',
   * the caller/UI should call answerCustomChallenge() to complete.
   */
  public async signInWithUsername(
    email: string
  ): Promise<{ isSignedIn?: boolean; nextStep?: any }> {
    try {
      const result = await signIn({
        username: email,
        options: {
          authFlowType: "CUSTOM_WITHOUT_SRP", // leave as-is if you rely on custom flow
        },
      });
      // result may contain isSignedIn and nextStep; return it so the UI can react
      return result;
    } catch (error: any) {
      console.error("signInWithUsername error", error);
      // normalize error for caller
      throw error;
    }
  }

  /**
   * Confirm a custom challenge response (e.g., OTP) for the custom auth flow
   */
  public async answerCustomChallenge(answer: string): Promise<string> {
    try {
      const { isSignedIn, nextStep } = await confirmSignIn({
        challengeResponse: answer,
      });
      if (isSignedIn) return "isSignedIn";

      if ("additionalInfo" in nextStep) {
        return JSON.stringify(nextStep.additionalInfo); // 👈 make it a string
      }

      return "Challenge not fully satisfied";
    } catch (error: any) {
      console.error("answerCustomChallenge error", error);

      if (error?.name?.includes("EmptyChallengeResponse")) {
        return "Please enter the code you were emailed";
      }
      if (error?.name?.includes("SignInException")) {
        return "There was an issue, try again or return to login.";
      }
      return "There was an issue, please try again.";
    }
  }

  /**
   * Sign up (keeps current behaviour with randomly generated password for custom flows)
   */
  public async signUp(email: string): Promise<boolean> {
    try {
      const { isSignUpComplete } = await signUp({
        username: email,
        password: this.getRandomString(30),
        options: { userAttributes: { email } },
      });
      return isSignUpComplete;
    } catch (error: any) {
      console.error("signUp error", error);
      if (error?.name === "UserLambdaValidationException") {
        throw new Error(
          error.message.replace(/^PreSignUp failed with error\s*/, "")
        );
      }
      throw error;
    }
  }

  /**
   * Sign out (Amplify)
   */
  public async signOut(): Promise<void> {
    try {
      await signOut();
    } catch (error) {
      console.error("signOut error", error);
    }
  }

  /**
   * Delete user
   */
  public async deleteUser(): Promise<any> {
    try {
      return await deleteUser();
    } catch (error) {
      console.error("deleteUser error", error);
      throw error;
    }
  }

  /**
   * Get basic user/session helpers (uses Amplify under the hood)
   */
  public async getAccessKeys(): Promise<any> {
    const session = await fetchAuthSession();
    return session.credentials;
  }

  public getUserSub(): Observable<any> {
    return from(getCurrentUser()).pipe(map((u) => (u as any).userId));
  }

  public getUserAttributes(): Observable<any> {
    return from(fetchUserAttributes());
  }

  public getUserEmail(): Observable<any> {
    return from(fetchUserAttributes()).pipe(map((attrs: any) => attrs.email));
  }

  public async getUserAttributesPromise(): Promise<any> {
    return await fetchUserAttributes();
  }

  /**
   * Avoid shadowing Amplify fetchAuthSession — return id token string
   */
  private async fetchIdToken(): Promise<string | undefined> {
    const { tokens } = await fetchAuthSession();
    return tokens?.idToken?.toString();
  }

  public async isAuthenticated(): Promise<boolean> {
    try {
      const session = await fetchAuthSession();
      // Check if we have valid access tokens (not just guest credentials)
      return !!(session.tokens?.accessToken && session.tokens?.idToken);
    } catch {
      return false;
    }
  }

  public async getIDToken(): Promise<string | undefined> {
    return await this.fetchIdToken();
  }

  // UTIL
  private getRandomString(bytes: number): string {
    const randomValues = new Uint8Array(bytes);
    this.window?.crypto.getRandomValues(randomValues);
    return Array.from(randomValues).map(this.intToHex).join("");
  }

  private intToHex(nr: number): string {
    return nr.toString(16).padStart(2, "0");
  }
}
