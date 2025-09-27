import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticated, IsNotAuthenticated } from '../../auth.guard';

import {SignUpComponent} from './sign-up/sign-up.component';
import {SignOutComponent} from './sign-out/sign-out.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AnswerChallengeComponent} from './answer-challenge/answer-challenge.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent, canActivate: [IsNotAuthenticated]},
  { path: 'signup', component: SignUpComponent, canActivate: [IsNotAuthenticated]},
  { path: 'register', redirectTo: 'signup' }, // redirect old route
  { path: 'logout', component: SignOutComponent, canActivate: [IsAuthenticated] },
  { path: 'enter-secret-code', component: AnswerChallengeComponent, canActivate: [IsNotAuthenticated] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default account route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
