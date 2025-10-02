import 'aws-amplify/auth/enable-oauth-listener';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from './services/user.service';
import { UtilityService } from './services/utility.service';
import { IonicModule } from '@ionic/angular';
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
  constructor(
    public router: Router,
    private userSrv: UserService,
    private utils: UtilityService,
  ) {}

  async ngOnInit() {
    await EdgeToEdge.enable();
    await EdgeToEdge.setBackgroundColor({ color: '#132530' });
    await StatusBar.setBackgroundColor({ color: '#132530' });
    await StatusBar.setStyle({ style: Style.Light });

    try {
      console.log('App initialized - RevenueCat ready');
    } catch (error) {
      console.error('Failed to initialize subscription service', error);
    }

    this.utils.operatingSystem().then((os) => {
      if (os === 'ios') {
        // ATT prompt + analytics opt-in handled here
      } else {
        // non-iOS analytics initialization
      }
    });
  }

  watchRoutes() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navigationEndEvent = event as NavigationEnd;
      // this.analyticsSrv.setScreenName(navigationEndEvent.urlAfterRedirects)
    });
  }
}