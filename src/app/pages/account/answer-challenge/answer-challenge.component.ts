import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {UserService} from '../../../services/user.service';
import {IonButton, IonChip, IonCol, IonContent, IonRow} from '@ionic/angular/standalone';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-answer-challenge',
  templateUrl: './answer-challenge.component.html',
  styleUrls: ['./answer-challenge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonContent,
    AsyncPipe,
    NgIf,
    IonChip,
    ReactiveFormsModule,
    IonButton,
    RouterLink
  ]
})
export class AnswerChallengeComponent implements OnInit, OnDestroy {
  digit1 = new FormControl('');
  digit2 = new FormControl('');
  digit3 = new FormControl('');
  digit4 = new FormControl('');
  @ViewChild('digit1el', { static: true }) digit1element: ElementRef;
  @ViewChild('digit2el', { static: true }) digit2element: ElementRef;
  @ViewChild('digit3el', { static: true }) digit3element: ElementRef;
  @ViewChild('digit4el', { static: true }) digit4element: ElementRef;

  private allSubscriptions = new Subscription();

  private _challengeResponse = new BehaviorSubject('');
  public challengeResponse = this._challengeResponse.asObservable();

  private _busy = new BehaviorSubject(false);
  public busy = this._busy.asObservable();

  constructor(
      private auth: AuthService,
      private router: Router,
      private titleService: Title,
      private userSrv: UserService
  ) { }

  ngOnInit() {
    this.resetForm();
    this.titleService.setTitle ('Enter login code');
    // If the user copy and pastes the code into the first digit field
    // we'll be so kind to cut it in pieces and distribute it to the right fields
    this.allSubscriptions.add(
      this.digit1.valueChanges.pipe(
        tap(value => {
          if (value && value.length > 1) {
            const digits = value.split('').slice(0, 4);
            this.digit1.setValue(digits[0]);
            this.digit2.setValue(digits[1]);
            this.digit3.setValue(digits[2]);
            this.digit4.setValue(digits[3]);
          }
        })
      ).subscribe()
    );
  }
  // Move focus to next field upon entry of a digit
  changeFocus(event: KeyboardEvent, index: number) {
		// Exclude navigation keys
		const isDigit = event.key.match(/\d/);
		if (isDigit) {
			switch(index) {
				case 1:
					this.digit2element.nativeElement.focus();
					break;
				case 2:
					this.digit3element.nativeElement.focus();
					break;
				case 3:
					this.digit4element.nativeElement.focus();
					break;
			}
		}
  }
  ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
  ionViewDidEnter() {
    this.resetForm();
  }
  resetForm() {
    this.digit1element.nativeElement.focus();
    this.digit1.reset();
    this.digit2.reset();
    this.digit3.reset();
    this.digit4.reset();
    this._challengeResponse.next('');
  }
  public async submit() {
    this._challengeResponse.next('');
    this._busy.next(true);
    const answer: string = [1, 2, 3, 4]
      .map(digit => (this[`digit${digit}`] as FormControl).value)
      .join('');
    try {
      const response: any = await this.auth.answerCustomChallenge(answer);
      if (response === 'isSignedIn') {
        this.userSrv.updateUser().subscribe();
        void this.router.navigate(['/home']);
        this._busy.next(false);
      } else {
        this.resetForm();
        if (response.attempts < response.maxAttempts) {
          this._challengeResponse.next('The code is not correct, please try again.');
        } else if (response.attempts >= response.maxAttempts) {
          void this.router.navigate(['/account/login']);
        } else {
          this._challengeResponse.next(response);
        }
        this._busy.next(false);
      }
    } catch (error: any) {
      console.error(error.name);
      this.resetForm();
      this._challengeResponse.next('There was an error, please login again.');
      this._busy.next(false);
    }
  }
}
