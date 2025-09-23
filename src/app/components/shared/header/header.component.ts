import {Component, Input} from '@angular/core';
import {HeaderInterface} from '../../../models/content/header.interface';
import {IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonButtons,
    NgOptimizedImage,
    IonIcon,
    IonButton,
    IonToolbar,
    IonHeader,
    RouterLink,
    NgIf,
    IonBackButton
  ]
})
export class HeaderComponent {
  @Input() headerData: HeaderInterface;
  backText = '';
  backIcon = '';
  constructor(
  ) {
    try {
      this.backText = this.headerData.text;
    } catch (e) {
      this.backText = 'BACK';
    }
    try {
      this.backIcon = this.headerData.icon;
    } catch (e) {
      this.backIcon = 'arrow-back-outline';
    }
  }

}
