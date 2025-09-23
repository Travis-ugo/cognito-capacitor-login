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
}
