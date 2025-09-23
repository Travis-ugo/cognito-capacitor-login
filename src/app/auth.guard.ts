import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (await this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/account/login']);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (!await this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
