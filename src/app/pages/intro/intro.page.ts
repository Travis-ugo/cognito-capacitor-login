import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();
import {environment} from '../../../environments/environment';
import {IntroSlidesService} from '../../services/intro-slides.service';
import {AuthService} from '../../services/auth.service';
import {Router, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {
    IonButton, IonCol,
    IonContent, IonGrid,
    IonImg,
    IonRow,
} from '@ionic/angular/standalone';
import {IntroSlidesInterface} from '../../models/content/introSlides.interface';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UtilityService} from '../../services/utility.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
    imports: [
        NgIf,
        IonContent,
        IonButton,
        NgForOf,
        RouterLink,
        IonImg,
        IonGrid,
        IonRow,
        IonCol,
        ReactiveFormsModule,
        FormsModule,
    ],
  encapsulation: ViewEncapsulation.None
})
export class IntroPage implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  public introSlides: IntroSlidesInterface[] = [];
  public cdn: string = environment.imgCdn;
  private _reachedEnd = new BehaviorSubject(false);
  public reachedEnd = this._reachedEnd.asObservable();
  public isAgreed = false;
  public showError = false;
  public loggedIn = false;
  constructor(
      private titleService: Title,
      private introSlidesSrv: IntroSlidesService,
      private auth: AuthService,
      private router: Router,
      private utils: UtilityService,
  ) { }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn() {
    console.log('🔍 Intro page: Checking if user is logged in...');

    this.auth.isAuthenticated().then((loggedIn: boolean) => {
      console.log('🔍 Intro page: Authentication result:', loggedIn);

      if(loggedIn) {
        console.log('✅ User is authenticated, redirecting to home...');
        this.loggedIn = true;
        void this.router.navigateByUrl('/home');
      } else {
        console.log('❌ User is NOT authenticated, showing intro content...');
        this.loggedIn = false;
        this.titleService.setTitle ('Welcome to HappyMe');
        this.introSlidesSrv.getSlides().subscribe((introSlides: IntroSlidesInterface[]) => {
          console.log('📄 Intro slides received:', introSlides?.length || 0, 'slides');
          console.log('📄 Raw slides data:', introSlides);

          // Always set introSlides (even if empty) to prevent infinite loading
          this.introSlides = introSlides || [];

          if (this.introSlides && this.introSlides.length > 0) {
            console.log('✅ Intro slides set, initializing swiper...');
            // Wait for view to update then initialize swiper
            setTimeout(() => {
              this.swiper = this.swiperRef?.nativeElement.swiper;
              if (this.swiper) {
                this.swiper.on('slideChange', () => {
                  this.slideChange();
                });
              }
            }, 100);
          } else {
            console.log('⚠️ No intro slides available, showing fallback content...');
            // Don't redirect, just show the fallback content with login buttons
          }
        }, (error) => {
          console.error('❌ Error loading intro slides:', error);
          // Set empty array to show fallback content
          this.introSlides = [];
        });
      }
    }).catch((error) => {
      console.error('❌ Error checking authentication:', error);
      console.log('🔄 Assuming not authenticated due to error...');
      this.loggedIn = false;
    });
  }
  slideChange() {
    this._reachedEnd.next(this.swiper.isEnd);
  }
}
