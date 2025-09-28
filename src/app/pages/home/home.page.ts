import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonSpinner
} from '@ionic/angular/standalone';
import {Router} from '@angular/router';
import {FooterInterface} from '../../models/content/footer.interface';
import {UserInterface} from '../../models/userData/user.interface';
import {FooterComponent} from '../../components/shared/footer/footer.component';
import {AuthService} from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonRow,
    IonCol,
    IonGrid,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonSpinner,
    FooterComponent,
    CommonModule,
  ],
  standalone: true,
})
export class HomePage implements OnInit, OnDestroy {
  public footerData: FooterInterface = {
    section: 'home'
  };
  private allSubscriptions = new Subscription();
  public userData: UserInterface;
  public userAttributes: any = null;
  public loading = true;
  public showDebugInfo = false;
  public cdn = environment.cdn;
  public imgCdn = environment.imgCdn;

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Dashboard');
    this.setupAuthListener();
    this.loadUserData();
  }

  private setupAuthListener() {
    // Listen for auth events - using the same import pattern as main.ts
    import('aws-amplify/utils').then(({ Hub }) => {
      Hub.listen('auth', ({ payload }: any) => {
        console.log('🏠 Home page received auth event:', payload.event);

        switch (payload.event) {
          case 'signedIn':
            console.log('🏠 User signed in, refreshing profile data...');
            // Wait a moment then reload user data
            setTimeout(() => {
              this.loadUserData();
            }, 1000);
            break;
          case 'signedOut':
            console.log('🏠 User signed out, clearing profile data...');
            this.userAttributes = null;
            break;
        }
      });
    });
  }

  ngOnDestroy() {
    this.allSubscriptions.unsubscribe()
  }

  private async loadUserData() {
    try {
      await this.loadUserAttributesWithRetry();
    } catch (error) {
      console.error('Error loading user data after retries:', error);
      this.loading = false;
    }
  }

  private async loadUserAttributesWithRetry(maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`🔄 Attempt ${attempt} to load user attributes...`);

        // First check if user is authenticated
        const { getCurrentUser } = await import('aws-amplify/auth');
        const user = await getCurrentUser();
        console.log('✅ User is authenticated:', user);

        // Wait a bit for tokens to be ready
        if (attempt === 1) {
          await this.sleep(2000); // Wait 2 seconds on first attempt
        } else {
          await this.sleep(delay * attempt); // Progressive delay
        }

        // Try multiple methods to get user attributes
        try {
          this.userAttributes = await this.authService.getUserAttributesPromise();
          console.log('✅ User attributes loaded successfully via getUserAttributesPromise:', this.userAttributes);
        } catch (attributeError) {
          console.log('⚠️ getUserAttributesPromise failed, trying alternative methods...', attributeError);

          // Try to get user data from JWT tokens
          this.userAttributes = await this.getUserDataFromTokens();
          console.log('✅ User attributes extracted from tokens:', this.userAttributes);
        }

        // Always supplement with user object data
        console.log('🔍 Supplementing with user object data...');
        this.supplementUserDataFromUserObject(user);

        // Debug: Log name extraction results
        console.log('👤 Name extraction results:', {
          fullDisplayName: this.getFullDisplayName(),
          given_name: this.userAttributes?.given_name,
          family_name: this.userAttributes?.family_name,
          name: this.userAttributes?.name,
          email: this.userAttributes?.email
        });

        this.loading = false;
        return; // Success!

      } catch (error) {
        console.error(`❌ Attempt ${attempt} failed:`, error);

        if (attempt === maxRetries) {
          // Last attempt failed, show error state
          this.loading = false;
          throw error;
        }

        // Wait before retrying
        await this.sleep(delay * attempt);
      }
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  signOut() {
    console.log('🚪 SignOut button clicked!');

    // Clear the session cache
    this.userAttributes = null;
    this.loading = false;

    // Call the auth service signOut to clear authentication state
    this.authService.signOut().then(() => {
      console.log('✅ User session cleared');

      // Navigate to introduction page after clearing auth
      this.router.navigate(['/']).then(() => {
        console.log('✅ Successfully navigated to intro page');
      }).catch((error) => {
        console.error('❌ Navigation error:', error);
      });
    }).catch((error) => {
      console.error('❌ Logout error:', error);
      // Still try to navigate even if logout fails
      this.router.navigate(['/']);
    });
  }

  getDisplayName(): string {
    if (this.userAttributes?.given_name && this.userAttributes?.family_name) {
      return `${this.userAttributes.given_name} ${this.userAttributes.family_name}`;
    } else if (this.userAttributes?.given_name) {
      return this.userAttributes.given_name;
    } else if (this.userAttributes?.family_name) {
      return this.userAttributes.family_name;
    } else if (this.userAttributes?.name) {
      return this.userAttributes.name;
    }
    return 'User';
  }

  getFullDisplayName(): string {
    // Priority order for getting the full name

    // 1. Try given_name + family_name combination
    if (this.userAttributes?.given_name && this.userAttributes?.family_name) {
      return `${this.userAttributes.given_name} ${this.userAttributes.family_name}`;
    }

    // 2. Try the 'name' field (often contains full name from social providers)
    if (this.userAttributes?.name && this.userAttributes.name.trim() !== '') {
      return this.userAttributes.name;
    }

    // 3. Try individual name parts
    if (this.userAttributes?.given_name) {
      return this.userAttributes.given_name;
    }

    if (this.userAttributes?.family_name) {
      return this.userAttributes.family_name;
    }

    // 4. Try extracting name from email (before @)
    if (this.userAttributes?.email) {
      const emailName = this.userAttributes.email.split('@')[0];
      // Clean up email name (remove dots, underscores, numbers)
      const cleanName = emailName.replace(/[._0-9]/g, ' ').trim();
      if (cleanName && cleanName !== emailName) {
        return this.capitalizeWords(cleanName);
      }
    }

    return null; // Return null if no name found
  }

  private capitalizeWords(str: string): string {
    return str.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  getSocialProvider(): string {
    // First try the identities attribute
    if (this.userAttributes?.identities) {
      try {
        const identities = JSON.parse(this.userAttributes.identities);
        if (identities && identities.length > 0) {
          const provider = identities[0].providerName;
          return provider === 'Google' ? 'Google Account' :
                 provider === 'Facebook' ? 'Facebook Account' :
                 provider === 'Amazon' ? 'Amazon Account' :
                 provider === 'Apple' ? 'Apple ID' :
                 `${provider} Account`;
        }
      } catch (error) {
        console.error('Error parsing identities:', error);
      }
    }

    // Fallback: check if we supplemented social provider info
    if (this.userAttributes?.social_provider) {
      return `${this.userAttributes.social_provider} Account`;
    }

    // Check username for social provider info
    if (this.userAttributes?.username) {
      const username = this.userAttributes.username.toLowerCase();
      if (username.startsWith('google_')) {
        return 'Google Account (detected)';
      } else if (username.startsWith('facebook_')) {
        return 'Facebook Account (detected)';
      } else if (username.startsWith('apple_')) {
        return 'Apple ID (detected)';
      }
    }

    // Another fallback: check email domain
    if (this.userAttributes?.email) {
      const email = this.userAttributes.email.toLowerCase();
      if (email.includes('gmail.com')) {
        return 'Google Account (detected)';
      }
    }

    return 'Email/Password';
  }

  getUserAttributeCount(): number {
    if (!this.userAttributes) return 0;
    return Object.keys(this.userAttributes).length;
  }

  toggleDebugInfo(): void {
    this.showDebugInfo = !this.showDebugInfo;
  }


  private async getUserDataFromTokens(): Promise<any> {
    try {
      console.log('🔍 Attempting to extract user data from JWT tokens...');

      // Get auth tokens directly
      const { fetchAuthSession } = await import('aws-amplify/auth');
      const session = await fetchAuthSession();

      console.log('🎫 Auth session:', session);

      let userData: any = {};

      // Extract data from ID token if available
      if (session.tokens?.idToken) {
        const idTokenPayload = session.tokens.idToken.payload;
        console.log('🆔 ID Token payload:', idTokenPayload);

        userData = {
          sub: idTokenPayload.sub,
          email: idTokenPayload.email,
          email_verified: idTokenPayload.email_verified,
          given_name: idTokenPayload.given_name,
          family_name: idTokenPayload.family_name,
          name: idTokenPayload.name,
          picture: idTokenPayload.picture,
          locale: idTokenPayload.locale,
          identities: idTokenPayload.identities ? JSON.stringify(idTokenPayload.identities) : undefined,
          // Add any other relevant claims
          ...Object.keys(idTokenPayload)
            .filter(key => !['iss', 'aud', 'exp', 'iat', 'token_use', 'auth_time'].includes(key))
            .reduce((obj, key) => {
              obj[key] = idTokenPayload[key];
              return obj;
            }, {} as any)
        };
      }

      // Extract data from access token if available
      if (session.tokens?.accessToken) {
        const accessTokenPayload = session.tokens.accessToken.payload;
        console.log('🔑 Access Token payload:', accessTokenPayload);

        // Add scope and other access token info
        userData.scope = accessTokenPayload.scope;
        userData.token_use = accessTokenPayload.token_use;
      }

      console.log('📄 Extracted user data from tokens:', userData);
      return userData;

    } catch (error) {
      console.error('❌ Error extracting user data from tokens:', error);
      // Return basic structure if token extraction fails
      return {
        email: 'unknown@example.com',
        sub: 'unknown',
        name: 'User'
      };
    }
  }

  private supplementUserDataFromUserObject(user: any): void {
    try {
      console.log('📋 User object:', user);

      if (!this.userAttributes) {
        this.userAttributes = {};
      }

      // Sometimes the username contains useful info for social logins
      if (user.username && user.username.startsWith('google_')) {
        this.userAttributes.social_provider = 'Google';
      }

      // Add any additional user object properties that might be useful
      if (user.userId && !this.userAttributes.sub) {
        this.userAttributes.sub = user.userId;
      }

      // Add username info
      if (user.username && !this.userAttributes.username) {
        this.userAttributes.username = user.username;
      }

      console.log('📋 Supplemented user attributes:', this.userAttributes);
    } catch (error) {
      console.error('Error supplementing user data:', error);
    }
  }
}
