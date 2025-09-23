import {Component, Input, OnInit} from '@angular/core';
import {IonFooter, IonIcon, IonRouterLink, IonTabBar, IonTabButton, IonTabs, IonToolbar} from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router';
export interface FooterData {
  section: string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    IonToolbar,
    IonFooter,
    RouterLink,
    IonRouterLink
  ]
})
export class FooterComponent implements OnInit {
  @Input() footerData: FooterData;
  private section = '';
  homeSelected = false;
  routineSelected = false;
  learnSelected = false;
  discoverSelected = false;
  profileSelected = false;
  constructor(
  ) { }
  ngOnInit() {
    this.setNavState();
  }
  private setNavState(): void {
    this.section = this.footerData ? this.footerData.section : '';
    switch (this.section) {
      case 'home':
        this.homeSelected = true;
        break;
      case 'routine':
        this.routineSelected = true;
        break;
      case 'learn':
        this.learnSelected = true;
        break;
      case 'discover':
        this.discoverSelected = true;
        break;
      case 'profile':
        this.profileSelected = true;
        break;
    }
  }
}
