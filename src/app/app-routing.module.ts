import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IsAuthenticated} from './auth.guard';

export const routes: Routes = [
  // INTRO
  {
    path: '',
    loadComponent: () => import('./pages/intro/intro.page').then( c => c.IntroPage),
  },
  // HOME
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(c => c.HomePage),
    canActivate: [IsAuthenticated]
  },
  // ACCOUNT PAGES
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account-routing.module').then(m => m.AccountRoutingModule),
  },
  {
    path: 'callback',
    loadComponent: () => import('./pages/account/callback/callback.component').then( c => c.CallbackComponent),
  },
  // 404 page
  {
    path: '**',
    loadComponent: () => import('./pages/intro/intro.page').then( c => c.IntroPage),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
