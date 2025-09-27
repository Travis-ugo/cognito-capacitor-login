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
    this.loadUserData();
  }

  ngOnDestroy() {
    this.allSubscriptions.unsubscribe()
  }

  private async loadUserData() {
    try {
      this.userAttributes = await this.authService.getUserAttributesPromise();
      this.loading = false;
    } catch (error) {
      console.error('Error loading user data:', error);
      this.loading = false;
    }
  }

  async signOut() {
    try {
      await this.authService.signOut();
      await this.router.navigate(['/']);
    } catch (error) {
      console.error('Error signing out:', error);
    }
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

  getSocialProvider(): string {
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
    return 'Email/Password';
  }

  getUserAttributeCount(): number {
    if (!this.userAttributes) return 0;
    return Object.keys(this.userAttributes).length;
  }

  toggleDebugInfo(): void {
    this.showDebugInfo = !this.showDebugInfo;
  }
}
