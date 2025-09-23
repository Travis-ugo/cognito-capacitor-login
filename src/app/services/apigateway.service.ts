import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable, throwError, TimeoutError} from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  apiURL = environment.apiGateway;
  profile = environment.apiGatewayStage;
  apiEndpoint = this.apiURL + this.profile;
	private timeout = 10000; // 10 seconds
  constructor(
      private httpClient: HttpClient,
			private toastController: ToastController
  ) {
  }
  public get(resource: string): Observable<any> {
    return this.httpClient.get(this.apiEndpoint + '/' + resource).pipe(
			timeout(this.timeout),
			catchError(error => {
				return this.handleError(error);
			})
		);
  }
  public post(resource: string, body: object): Observable<any> {
    return this.httpClient.post(this.apiEndpoint + '/' + resource, body).pipe(
			timeout(this.timeout),
			catchError(error => {
				return this.handleError(error);
			})
		);
  }
  public patch(resource: string, body: object): Observable<any> {
    return this.httpClient.patch(this.apiEndpoint + '/' + resource, body).pipe(
      timeout(this.timeout),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }
  public delete(resource: string): Observable<any> {
    return this.httpClient.delete(this.apiEndpoint + '/' + resource).pipe(
			timeout(this.timeout),
			catchError(error => {
				return this.handleError(error);
			})
		);
  }
	private handleError(error: any) {
		if (error instanceof TimeoutError) {
			// Handle timeout error
			void this.presentToast('Network error. Please ensure you are connected to the internet');
			return throwError(() => new Error('Network error. Please ensure you are connected to the internet'));
		} else if (!navigator.onLine) {
			// Handle no network connection
      void this.presentToast('No network connection. You need access to the internet to use the app.');
			return throwError(() => new Error('No network connection. Please check your internet settings.'));
		} else {
      // Handle generic error
      void this.presentToast('There was an error, if it persists please contact us.');
      return throwError(() => new Error('There was an error, if it persists please contact us.'));
    }
	}
	async presentToast(message: string, duration: number = 2000) {
		const toast: HTMLIonToastElement = await this.toastController.create({
			message,
			duration,
			animated: true,
			color: 'danger',
			icon: 'wifi',
			position: 'middle'
		});
		void toast.present();
	}

}
