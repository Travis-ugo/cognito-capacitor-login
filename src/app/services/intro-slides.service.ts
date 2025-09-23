import { Injectable } from '@angular/core';
import {ApiGatewayService} from './apigateway.service';
import {from, Observable} from 'rxjs';
import {IntroSlidesInterface} from '../models/content/introSlides.interface';

@Injectable({
  providedIn: 'root'
})
export class IntroSlidesService {

  constructor(
      private api: ApiGatewayService
  ) { }
  getSlides(): Observable<IntroSlidesInterface[]> {
    // return this.api.get('introSlides2');
    return from([]);
  }
}
