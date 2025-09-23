import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SignOutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle ('Logout');
    this.auth.signOut().then(async () => {
      void this.router.navigate(['/']);
    })
  }

}
