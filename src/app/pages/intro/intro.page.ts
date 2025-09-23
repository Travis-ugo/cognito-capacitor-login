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
  public loggedIn = true;
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
    this.auth.isAuthenticated().then((loggedIn: boolean) => {
      if(loggedIn) {
        this.loggedIn = true;
        void this.router.navigateByUrl('/home');
      } else {
        this.loggedIn = false;
        this.titleService.setTitle ('Welcome to HappyMe');
        this.introSlidesSrv.getSlides().subscribe((introSlides: IntroSlidesInterface[]) => {
          if (this.introSlides) {
            this.introSlides = introSlides;
            this.swiper = this.swiperRef?.nativeElement.swiper;
            if (this.swiper) {
              this.swiper.on('slideChange', () => {
                this.slideChange();
              });
            }
          } else {
            void this.router.navigateByUrl('/home');
          }
        });
      }
    })
  }
  slideChange() {
    this._reachedEnd.next(this.swiper.isEnd);
  }
}
