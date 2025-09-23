import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { fetchAuthSession }  from 'aws-amplify/auth';
import {IonContent, IonSpinner} from '@ionic/angular/standalone';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    IonContent,
    IonSpinner
  ],
  template: `
      <ion-content class="ion-padding">
        <ion-spinner color="light"></ion-spinner>
      </ion-content>`
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router) {}

  async ngOnInit() {
    try {
      const isSignedIn = await fetchAuthSession();
      this.router.navigate([ isSignedIn ? '/home' : '/account/login' ]);
    } catch {
      this.router.navigate(['/']);
    }
  }
}
