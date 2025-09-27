import 'aws-amplify/auth/enable-oauth-listener';
import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs';
import {UserService} from './services/user.service';
import {UtilityService} from './services/utility.service';
import {IonicModule} from '@ionic/angular';
import {App} from '@capacitor/app';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonicModule],
  standalone: true
})
export class AppComponent implements OnInit {
  private REDIRECT_URIS = ['tensilapp://callback', 'capacitor://callback'];
  constructor(
    public router: Router,
    private userSrv: UserService,
    private utils: UtilityService,
  ) {

    App.addListener('appUrlOpen', async (event: {url: string}) => {
      const incoming = event.url;
      console.log('Deep link received:', incoming);

      // Check if this is an OAuth callback
      if (this.REDIRECT_URIS.some(uri => incoming.startsWith(uri))) {
        console.log('OAuth callback detected:', incoming);

        try {
          // Parse the URL to extract parameters
          const url = new URL(incoming);
          const code = url.searchParams.get('code');
          const error = url.searchParams.get('error');

          if (error) {
            console.error('OAuth error:', error);
            this.router.navigate(['/account/signup']);
            return;
          }

          if (code) {
            console.log('OAuth code received:', code);

            // Wait for Amplify to process the OAuth callback
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Check if user is authenticated
            const { getCurrentUser } = await import('@aws-amplify/auth');
            try {
              const user = await getCurrentUser();
              console.log('User authenticated via deep link:', user);
              this.router.navigate(['/home']);
            } catch (authError) {
              console.error('Authentication failed after deep link:', authError);
              this.router.navigate(['/account/signup']);
            }
          }
        } catch (parseError) {
          console.error('Error parsing deep link URL:', parseError);
          this.router.navigate(['/account/signup']);
        }
      }
    });
  }

  private async handleOAuthCallback() {
    // Check if current URL contains OAuth callback parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      console.log('OAuth callback detected with code:', code);

      try {
        // Import Amplify auth functions
        const { getCurrentUser } = await import('@aws-amplify/auth');

        // Wait a moment for Amplify to process the OAuth callback
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check if user is now authenticated
        const user = await getCurrentUser();
        console.log('User authenticated:', user);

        // Navigate to home page
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Authentication failed:', error);
        // If authentication failed, redirect to signup page
        this.router.navigate(['/account/signup']);
      }
    }
  }

  async ngOnInit() {
    await EdgeToEdge.enable();
    await EdgeToEdge.setBackgroundColor({ color: '#132530' });
    await StatusBar.setBackgroundColor({ color: '#132530' });
    await StatusBar.setStyle({ style: Style.Light });

    // Check if this is an OAuth callback URL
    this.handleOAuthCallback();

    try {
      console.log('App initialized - RevenueCat ready');
    } catch (error) {
      console.error('Failed to initialize subscription service', error);
    }

    this.utils.operatingSystem().then((os) => {
      if(os === 'ios') {
        /*this.analyticsSrv.attGetStatus().then((optIn: boolean) => {
          this.userSrv.preferences.analytics = optIn;
          if (optIn) {
            this.analyticsSrv.initFb().then(() => {
              this.analyticsSrv.analyticsOptIn(optIn).then(() => this.watchRoutes()).catch((e) => console.error(e));
            });
          }
        });*/
      } else {
        // not iOS - optIn handled from register/profile page, so initialise and set to false
        /*this.analyticsSrv.initFb().then(() => {
          this.analyticsSrv.analyticsOptIn(false).then(() => this.watchRoutes()).catch((e) => console.error(e));
        });*/
      }
    });
  }
  watchRoutes() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navigationEndEvent = event as NavigationEnd;
      // this.analyticsSrv.setScreenName(navigationEndEvent.urlAfterRedirects).catch(err => console.error('Failed to set screen name:', err));
    });
  }

}
