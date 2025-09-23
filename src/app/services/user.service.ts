import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {concatMap, from, Observable} from 'rxjs';
import {UtilityService} from './utility.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import {Capacitor} from '@capacitor/core';
// import {ApiGatewayService} from './apigateway.service';
// import {AnalyticsService} from './analytics.service';
// import {LoggerService} from './logger.service';
// import {SubscriptionsService} from './subscriptions.service';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public sub: string;
  private cdn = environment.cdn;
  private userAttributes: any;
  private userData: any;
  public preferences: {
    newsletter: boolean,
    analytics: boolean,
    notifications: boolean
  } = {
    newsletter: false,
    analytics: false,
    notifications: false,
  }
  constructor(
    private auth: AuthService,
    private utils: UtilityService,
    private router: Router,
  ) {
    this.pushListener();
  }
  /**
   * API Functions for DynamoDB user record
   */
  public getUserData(user: string): Observable<any> {
    // return this.api.get('userData/users?pk=' + user)
    return from(user)
  }
  public updateUserProfile(body: any): Observable<any> {
    // return this.api.patch('userData', body);
    return from(body);
  }
  public deleteUserProfile(user: string): Observable<any> {
    // return this.api.delete('userData/users?pk='+user+'&sk='+user);
    return from(user);
  }
  public logDeleteRequest(user: string): Observable<any> {
    const body: any = {
      pk: 'deleteUserRequest',
      sk: this.utils.getDate(),
      createdDate: this.utils.getDateTime(),
      updatedDate: this.utils.getDate(),
      dataMap: {
        requestDate: this.utils.getDateTime(),
        userId: user
      }
    }
    // return this.api.post('userData', body);
    return from(body);
  }

  /**
   * post user data to email marketing platform
   */
  public newsletterSubscription() {
    return this.auth.getUserAttributes().pipe(
      concatMap((userAttributes) => {
        this.userAttributes = userAttributes;
        return this.getUserProfile();
      }),
      concatMap((userData) => {
        this.userData = userData[0].dataMap;
        // return this.subsSrv.subscribed;
        return userData;
      }),
      concatMap((subscribed) => {
        const avatar = this.userData.avatar ? this.cdn+this.userData?.avatar : this.cdn+'happyme-app-logo.svg';
        const avatarId = this.userData?.avatarId ? this.cdn+this.userData?.avatarId : 3;
        const request: any = {
          email: this.userAttributes.email,
          subscribed,
          avatarId,
          avatar,
          emailBlacklisted: !this.userData.optInNewsletter
        }
        // return this.api.post('subscriptions/newsletter', request);
        return from(request);
      })
    )
  }
  public setNotification(notification: { section: any; status: any; time?: any; }) {
    return this.auth.getUserSub().pipe(
      concatMap(sub => {
        // opt into notifications if true
        if(notification.status === true) {
          this.pushSubscription(true);
        }
        const userData = {
          pk: 'users#' + sub,
          sk: sub,
          dataMap: {
            notifications: {
              [notification.section]: notification
            }
          }
        };
        return this.updateUserProfile(userData);
      })
    );
  }
  public pushSubscription(optInReminders: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      if (Capacitor.isNativePlatform()) {
        if (optInReminders) {
          // Request permission to use push notifications
          PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
              // Register with Apple / Google to receive push via APNS/FCM
              PushNotifications.register()
                .then(() => {
                  resolve('granted'); // Resolve the promise with 'granted'
                })
                .catch(error => {
                  reject(error); // Reject if registration fails
                });
            } else if (result.receive === 'denied') {
              this.updateUserPushSub('').subscribe({
                next: () => resolve('denied'), // Resolve with 'denied'
                error: err => reject(err), // Reject if update fails
              });
            }
          }).catch(error => {
            reject(error); // Reject if permission request fails
          });
        } else {
          // Unsubscribe from push notifications
          PushNotifications.unregister()
            .then(() => {
              this.updateUserPushSub('').subscribe({
                next: () => resolve('unsubscribed'), // Resolve with 'unsubscribed'
                error: err => reject(err), // Reject if update fails
              });
            })
            .catch(error => {
              reject(error); // Reject if unregister fails
            });
        }
      } else {
        resolve('unsupported'); // For non-native platforms
      }
    });
  }
  pushListener() {
    if(Capacitor.isNativePlatform()) {
      // On success, we should be able to receive notifications
      void PushNotifications.addListener('registration', (token: Token) => {
        this.updateUserPushSub(token.value).subscribe();
      });
      // Some issue with our setup and push will not work
      void PushNotifications.addListener('registrationError',
        (error: any) => {
          const body = {
            pk: 'pushNotification#RegistrationError',
            sk: this.utils.getDateTime(),
            dataMap: error,
            createdDate: this.utils.getDateTime(),
            updatedDate: this.utils.getDateTime()
          }
          // this.logger.post(body).subscribe();
        }
      );
      // Show us the notification payload if the app is open on our device
      void PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          const body = {
            pk: 'pushNotification#Received',
            sk: this.utils.getDateTime(),
            dataMap: notification,
            createdDate: this.utils.getDateTime(),
            updatedDate: this.utils.getDateTime()
          }
          // this.logger.post(body).subscribe();
        }
      );
      // Method called when tapping on a notification
      void PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          const body = {
            pk: 'pushNotification#ActionPerformed',
            sk: this.utils.getDateTime(),
            dataMap: notification,
            createdDate: this.utils.getDateTime(),
            updatedDate: this.utils.getDateTime()
          }
          // this.logger.post(body).subscribe();
        }
      );
    }
  }
  /**
   * Get User ID from Cognito and use it to get User Data in DynamoDB
   */
  public getUserProfile(): Observable<any> {
    return this.auth.getUserSub().pipe(
      concatMap(user => {
        return this.getUserData(user);
      })
    );
  }
  /**
   * creates or updates a user record in DynamoDB, to save user related data
   */
  public updateUser(): Observable<any> {
    return this.auth.getUserSub().pipe(
      concatMap(user => {
        this.sub = user;
        return this.getUserData(user);
      }),
      concatMap(userData => {
        if(userData.length === 0) {
          return this.createUser(this.sub);
        } else {
          return this.updateUserAtLogin(this.sub);
        }
      })
    );
  }
  public updateUserPushSub(token: string) {
    return this.auth.getUserSub().pipe(
      concatMap(user => {
        const userData = {
          pk: 'users#' + user,
          sk: user,
          updatedDate: this.utils.getDate(),
          dataMap: {
            fcmToken: token,
            timezoneOffset: this.utils.getTimezoneOffset()
          }
        };
        return this.updateUserProfile(userData);
      })
    );
  }
  /**
   * Create user in DynamoDB
   * Save app-state variables against user in DynamoDB.
   */
  private createUser(user: string): Observable<any> {
    const userData: any = {
      pk: 'users#' + user,
      sk: user,
      userId: user,
      createdDate: this.utils.getDateTime(),
      updatedDate: this.utils.getDate(),
      dataMap: {
        userId: user,
        lastLogin: this.utils.getDateTime(),
        createdDate: this.utils.getDateTime(),
        timezoneOffset: this.utils.getTimezoneOffset(),
        dismissedIntroSlides: true,
        showIntroLink: true,
        optInNewsletter: this.preferences.newsletter,
        optInReminders: this.preferences.notifications,
        optInAnalytics: this.preferences.analytics,
        ageGroup: 0,
        parentalStatus: []
      }
    };
    this.utils.operatingSystem().then(async (os) => {
      if (os !== 'ios') {
        // await this.analytics.analyticsOptIn(this.preferences.analytics);
      }
    });
    // return this.api.post('userData', userData);
    return from(userData);
  }
  /**
   * Update a user's last login
   * @param user
   * @private
   */
  private updateUserAtLogin(user: string) {
    const userData = {
      pk: 'users#' + user,
      sk: user,
      updatedDate: this.utils.getDate(),
      dataMap: {
        lastLogin: this.utils.getDateTime(),
        timezoneOffset: this.utils.getTimezoneOffset()
      }
    };
    // this.analytics.analyticsOptIn(this.preferences.analytics).then();
    return this.updateUserProfile(userData);
  }
  public updateUserPreferences(user: string, preferences: any) {
    const userData = {
      pk: 'users#' + user,
      sk: user,
      updatedDate: this.utils.getDate(),
      dataMap: {
        ageGroup: preferences.ageGroup,
        parentalStatus: preferences.parentalStatus
      }
    }
    return this.updateUserProfile(userData);
  }
  /**
   * Delete the user record in DynamoDB
   * Then delete the Cognito user and kill the session
   * Finally redirect to login page.
   */
  public deleteUserAccount() {
    return this.auth.getUserSub().pipe(
      concatMap((user) => {
        this.sub = user;
        return this.deleteUserProfile(user);
      }),
      concatMap(() => {
        this.preferences.newsletter = false;
        this.preferences.analytics = false;
        this.preferences.notifications = false;
        return this.logDeleteRequest(this.sub);
      }),
      concatMap(() => {
        return this.auth.deleteUser();
      }),
      map(() => {
        this.router.navigateByUrl('/');
      })
    )
  }

  /**
   * set help content as viewed so only appears on first view.
   * @param fieldName
   */
  public setHelpViewed(fieldName: any) {
    return this.auth.getUserSub().pipe(
      concatMap((user) => {
        const body = {
          pk: 'users#' + user,
          sk: user,
          userId: user,
          updatedDate: this.utils.getDate(),
          dataMap: {
            [fieldName]: true
          }
        }
        return this.updateUserProfile(body);
      })
    )
  }

  /**
   * Intro banner on homepage. If dismissed save to user so not shown again
   * @param state
   */
  showIntro(state: boolean) {
    return this.auth.getUserSub().pipe(
      concatMap(sub => {
        const userData = {
          pk: 'users#' + sub,
          sk: sub,
          updatedDate: this.utils.getDate(),
          dataMap: {
            showIntroLink: state
          }
        };
        return this.updateUserProfile(userData);
      })
    );
  }
}
