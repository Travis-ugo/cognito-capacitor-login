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
import {UserService} from '../../../services/user.service';
import {
  IonButton, IonCheckbox,
  IonChip,
  IonCol,
  IonContent, IonIcon,
  IonImg,
  IonInput,
  IonLabel,
  IonRow,
} from '@ionic/angular/standalone';
import {AsyncPipe, NgIf} from '@angular/common';
import {AuthProvider} from '@aws-amplify/auth/dist/esm/types/inputs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
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
    IonIcon,
  ]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  private _busy = new BehaviorSubject(false);
  public busy = this._busy.asObservable();

  private _errorMessage = new BehaviorSubject('');
  public errorMessage = this._errorMessage.asObservable();
  public os: string;
  constructor(
    private router: Router,
    private auth: AuthService,
    private titleService: Title,
    private userSrv: UserService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.titleService.setTitle('Login in');
    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]),
    });
  }
  public async signIn() {
    this._busy.next(true);
    this._errorMessage.next('');
    try {
      // Attempt to register the user
      const signUpResponse: boolean = await this.auth.signUp(this.signInForm.controls.email.value);
      if (signUpResponse) {
        // logs an event in Google Analytics
      }
      // Attempt to sign the user in
      await this.auth.signInWithUsername(this.signInForm.controls.email.value);
      // Clear form and navigate to the next step
      this.signInForm.patchValue({
        email: '', // Clear the email input field
      });
      await this.router.navigate(['/account/enter-secret-code']);
    } catch (err: any) {
      if(err.name === 'UsernameExistsException') {
        await this.auth.signInWithUsername(this.signInForm.controls.email.value);
        await this.router.navigate(['/account/enter-secret-code']);
      } else {
        this._errorMessage.next(err.message);
        this._busy.next(false);
      }
    }
  }
  public socialSignIn(provider: AuthProvider) {
    console.log('Social sign-in button clicked for provider:', provider);

    // Call the auth service
    void this.auth.socialSignIn(provider);
  }
}
