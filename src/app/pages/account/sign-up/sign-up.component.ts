import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  FormControl,
  FormGroup, FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import {Title} from '@angular/platform-browser';
import {
  IonButton, IonCheckbox,
  IonChip,
  IonCol,
  IonContent, IonIcon,
  IonImg,
  IonInput, IonItem,
  IonLabel, IonList,
  IonRow,
} from '@ionic/angular/standalone';
import {AsyncPipe, NgIf} from '@angular/common';
import {AuthProvider} from '@aws-amplify/auth/dist/esm/types/inputs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonInput,
    ReactiveFormsModule,
    IonChip,
    AsyncPipe,
    NgIf,
    IonCol,
    IonRow,
    IonContent,
    IonLabel,
    IonButton,
    IonImg,
    IonCheckbox,
    FormsModule,
    IonList,
    IonItem,
    IonIcon,
  ]
})
export class SignUpComponent implements OnInit {
  signInForm: FormGroup;

  private _busy = new BehaviorSubject(false);
  public busy = this._busy.asObservable();

  private _errorMessage = new BehaviorSubject('');
  public errorMessage = this._errorMessage.asObservable();
  public os: string;
  public loggedIn: boolean;
  public isAgreed = false;
  public showError = false;
  constructor(
    private router: Router,
    private auth: AuthService,
    private titleService: Title,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.titleService.setTitle('Register');
    this.route.queryParams.subscribe(params => {
      this.loggedIn = params.login;
    });

    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]),
      isAgreed: new FormControl(false, Validators.requiredTrue)
    });
  }
  public async signIn() {
    this._busy.next(true);
    this._errorMessage.next('');
    this.showError = true;
    // Check if the form is valid before proceeding
    if (!this.signInForm.valid) {
      this._busy.next(false);
      return;
    }

    try {
      // Attempt to register the user
      const signUpResponse: boolean = await this.auth.signUp(this.signInForm.controls.email.value);
      if (signUpResponse) {
        // log event in Google Analytics
      }
      // Attempt to sign the user in
      await this.auth.signIn(this.signInForm.controls.email.value);
      // Clear form and navigate to the next step
      this.signInForm.patchValue({
        email: '', // Clear the email input field
      });
      await this.router.navigate(['/account/enter-secret-code']);
    } catch (err: any) {
      if(err.name === 'UsernameExistsException') {
        await this.auth.signIn(this.signInForm.controls.email.value);
        await this.router.navigate(['/account/enter-secret-code']);
      } else {
        this._errorMessage.next(err.message);
        this._busy.next(false);
      }
    }
  }
  public socialSignIn(provider: AuthProvider) {
    void this.auth.socialSignIn(provider);
  }

}
