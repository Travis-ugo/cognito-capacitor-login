(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 61584);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 37282);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_amplify_auth_enable_oauth_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify/auth/enable-oauth-listener */ 92391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ 29885);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/utility.service */ 25190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ 59326);
/* harmony import */ var _capawesome_capacitor_android_edge_to_edge_support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capawesome/capacitor-android-edge-to-edge-support */ 40496);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/status-bar */ 19153);














let AppComponent = class AppComponent {
  router;
  userSrv;
  utils;
  REDIRECT_URI = 'happymeapp://callback';
  constructor(router, userSrv, utils) {
    var _this = this;
    this.router = router;
    this.userSrv = userSrv;
    this.utils = utils;
    _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.addListener('appUrlOpen', /*#__PURE__*/function () {
      var _ref = (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        const incoming = event.url;
        console.log('Deep link received:', incoming);
        // Check if this is an OAuth callback
        if (incoming.startsWith(_this.REDIRECT_URI)) {
          console.log('OAuth callback detected:', incoming);
          try {
            // Parse the URL to extract parameters
            const url = new URL(incoming);
            const code = url.searchParams.get('code');
            const error = url.searchParams.get('error');
            if (error) {
              console.error('OAuth error:', error);
              _this.router.navigate(['/account/signup']);
              return;
            }
            if (code) {
              console.log('OAuth code received:', code);
              // Wait for Amplify to process the OAuth callback
              yield new Promise(resolve => setTimeout(resolve, 1000));
              // Check if user is authenticated
              const {
                getCurrentUser
              } = yield __webpack_require__.e(/*! import() */ "node_modules_aws-amplify_auth_dist_esm_index_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @aws-amplify/auth */ 85081));
              try {
                const user = yield getCurrentUser();
                console.log('User authenticated via deep link:', user);
                _this.router.navigate(['/home']);
              } catch (authError) {
                console.error('Authentication failed after deep link:', authError);
                _this.router.navigate(['/account/signup']);
              }
            }
          } catch (parseError) {
            console.error('Error parsing deep link URL:', parseError);
            _this.router.navigate(['/account/signup']);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  handleOAuthCallback() {
    var _this2 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Check if current URL contains OAuth callback parameters
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      if (code && state) {
        console.log('OAuth callback detected with code:', code);
        try {
          // Import Amplify auth functions
          const {
            getCurrentUser
          } = yield __webpack_require__.e(/*! import() */ "node_modules_aws-amplify_auth_dist_esm_index_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @aws-amplify/auth */ 85081));
          // Wait a moment for Amplify to process the OAuth callback
          yield new Promise(resolve => setTimeout(resolve, 2000));
          // Check if user is now authenticated
          const user = yield getCurrentUser();
          console.log('User authenticated:', user);
          // Navigate to home page
          _this2.router.navigate(['/home']);
        } catch (error) {
          console.error('Authentication failed:', error);
          // If authentication failed, redirect to signup page
          _this2.router.navigate(['/account/signup']);
        }
      }
    })();
  }
  ngOnInit() {
    var _this3 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capawesome_capacitor_android_edge_to_edge_support__WEBPACK_IMPORTED_MODULE_7__.EdgeToEdge.enable();
      yield _capawesome_capacitor_android_edge_to_edge_support__WEBPACK_IMPORTED_MODULE_7__.EdgeToEdge.setBackgroundColor({
        color: '#132530'
      });
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.StatusBar.setBackgroundColor({
        color: '#132530'
      });
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.StatusBar.setStyle({
        style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_8__.Style.Light
      });
      // Check if this is an OAuth callback URL
      _this3.handleOAuthCallback();
      try {
        console.log('App initialized - RevenueCat ready');
      } catch (error) {
        console.error('Failed to initialize subscription service', error);
      }
      _this3.utils.operatingSystem().then(os => {
        if (os === 'ios') {
          /*this.analyticsSrv.attGetStatus().then((optIn: boolean) => {
            this.userSrv.preferences.analytics = optIn;
            if (optIn) {
              this.analyticsSrv.initFb().then(() => {
                this.analyticsSrv.analyticsOptIn(optIn).then(() => this.watchRoutes()).catch((e) => console.error(e));
              });
            }
          });*/
        } else {
          // not iOS - optIn handled from register/profile page, so initialise and set to false
          /*this.analyticsSrv.initFb().then(() => {
            this.analyticsSrv.analyticsOptIn(false).then(() => this.watchRoutes()).catch((e) => console.error(e));
          });*/
        }
      });
    })();
  }
  watchRoutes() {
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd)).subscribe(event => {
      const navigationEndEvent = event;
      // this.analyticsSrv.setScreenName(navigationEndEvent.urlAfterRedirects).catch(err => console.error('Failed to set screen name:', err));
    });
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
  }, {
    type: _services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule],
  standalone: true,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router, _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService, _services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService])], AppComponent);


/***/ }),

/***/ 25190:
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilityService: () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 67801);




let UtilityService = class UtilityService {
  constructor() {}
  getTimezoneOffset() {
    return new Date().getTimezoneOffset();
  }
  getDateTime() {
    // YYYY-MM-DDTHH:MM:SS
    return new Date().toISOString().slice(0, 19);
  }
  getDate() {
    // YYYY-MM-DD
    return new Date().toISOString().slice(0, 10);
  }
  getFutureDate(days) {
    const date = new Date();
    return date.setDate(date.getDate() + days);
  }
  getFutureDateYYYYMMDD(days) {
    const timestamp = this.getFutureDate(days);
    const date = new Date(timestamp);
    return date.toISOString().slice(0, 10);
  }
  getPastDate(days) {
    const date = new Date();
    return date.setDate(date.getDate() - days);
  }
  // https://stackoverflow.com/questions/46068084/calculating-week-number-with-typescript-right-hand-side-of-an-arithmetic-opera
  getWeekNumber(dt, type = 'int') {
    const firstDayOfYear = new Date(dt.getFullYear(), 0, 1);
    const startOfYearWeek = new Date(firstDayOfYear);
    startOfYearWeek.setDate(firstDayOfYear.getDate() - firstDayOfYear.getDay());
    const startOfCurrentWeek = new Date(dt);
    startOfCurrentWeek.setDate(dt.getDate() - dt.getDay());
    const msInWeek = 7 * 24 * 60 * 60 * 1000;
    const weekNum = Math.floor((startOfCurrentWeek.getTime() - startOfYearWeek.getTime()) / msInWeek) + 1;
    // returns ISO week date format YYYY-W01 minus current day, because we want the year / week number only.
    if (type === 'string') {
      return dt.getFullYear().toString() + '-W' + weekNum;
    }
    return weekNum.toString();
  }
  // https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
  getMonday(dt) {
    const d = new Date(dt);
    const day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    const mon = new Date(d.setDate(diff));
    return mon.getDate() + ' ' + this.months(mon.getMonth()) + ' ' + mon.getFullYear();
  }
  months(month) {
    const monthL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthL[month];
  }
  days(day) {
    const dayL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayL[day];
  }
  getFirstDayOfWeek(week, y) {
    const d = new Date('Jan 01, ' + y + ' 01:00:00');
    const dayMs = 24 * 60 * 60 * 1000;
    const offSetTimeStart = dayMs * (d.getDay() - 1);
    const w = d.getTime() + 604800000 * (week - 1) - offSetTimeStart; // reducing the offset here
    const n1 = new Date(w).toISOString().slice(0, 10);
    const n2 = new Date(w + 518400000).toISOString().slice(0, 10);
    return {
      dateFrom: n1,
      dateTo: n2
    };
  }
  timestampToMysqlDate(timestamp) {
    // Create a Date object from the Unix timestamp
    const date = new Date(timestamp * 1000);
    // Extract year, month, day, hours, minutes, and seconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // Combine into MySQL date format (YYYY-MM-DD HH:MM:SS)
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  pagination(content, start, end) {
    const result = [];
    content.slice(start, end).map(i => {
      result.push(i);
    });
    return result;
  }
  getRandomList(array, numberRequired) {
    const result = [];
    const taken = [];
    const length = array.length;
    if (numberRequired > length) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    let currentAmount = 0; // create an index to iterate through
    while (currentAmount < numberRequired) {
      // while our index iterator (current items) is less than the required number of items..
      const randomInt = Math.floor(Math.random() * length); // generate a random number between 0 and length of source array
      if (taken.includes(randomInt)) {
        // if the random number exists in our taken array..
        continue; // skip this iteration to avoid a duplicate
      } else {
        taken[randomInt] = randomInt; // if random number not already used, then add it to the taken array to prevent it being used again
      }
      result[currentAmount] = array[randomInt]; // use the random number to get an item from source array and add to our result array
      currentAmount++; // increment the index to move onto the next item
    }
    return result;
  }
  // removes duplicates from an array of objects
  removeDuplicates(originalArray, field) {
    const newArray = [];
    const lookupObject = {};
    for (const x of Object.keys(originalArray)) {
      lookupObject[originalArray[x][field]] = originalArray[x];
    }
    for (const x of Object.keys(lookupObject)) {
      newArray.push(lookupObject[x]);
    }
    return newArray;
  }
  videoFormat() {
    const video = document.createElement('video');
    let format = '';
    if (Boolean(video.canPlayType('application/x-mpegURL'))) {
      format = 'x-mpegURL';
    } else if (Boolean(video.canPlayType('application/dash+xml'))) {
      format = 'dash+xml';
    } else if (Boolean(video.canPlayType('video/mp4'))) {
      format = 'video/mp4';
    } else {
      format = 'video playback not possible';
    }
    return format;
  }
  // accepts an array and an object property name to group by, returns an associative array.
  groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  deviceInfo() {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getInfo();
    })();
  }
  operatingSystem() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const deviceInformation = yield _this.deviceInfo();
      const operatingSystem = deviceInformation.operatingSystem; // 'ios' | 'android' | 'windows' | 'mac' | 'unknown'
      if (operatingSystem === 'mac' || operatingSystem === 'ios') {
        return 'ios';
      }
      return operatingSystem;
    })();
  }
  static ctorParameters = () => [];
};
UtilityService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], UtilityService);


/***/ }),

/***/ 29885:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 44796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 51903);
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.service */ 25190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 92132);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70271);










// import {ApiGatewayService} from './apigateway.service';
// import {AnalyticsService} from './analytics.service';
// import {LoggerService} from './logger.service';
// import {SubscriptionsService} from './subscriptions.service';

let UserService = class UserService {
  auth;
  utils;
  router;
  sub;
  cdn = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.cdn;
  userAttributes;
  userData;
  preferences = {
    newsletter: false,
    analytics: false,
    notifications: false
  };
  constructor(auth, utils, router) {
    this.auth = auth;
    this.utils = utils;
    this.router = router;
    this.pushListener();
  }
  /**
   * API Functions for DynamoDB user record
   */
  getUserData(user) {
    // return this.api.get('userData/users?pk=' + user)
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(user);
  }
  updateUserProfile(body) {
    // return this.api.patch('userData', body);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(body);
  }
  deleteUserProfile(user) {
    // return this.api.delete('userData/users?pk='+user+'&sk='+user);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(user);
  }
  logDeleteRequest(user) {
    const body = {
      pk: 'deleteUserRequest',
      sk: this.utils.getDate(),
      createdDate: this.utils.getDateTime(),
      updatedDate: this.utils.getDate(),
      dataMap: {
        requestDate: this.utils.getDateTime(),
        userId: user
      }
    };
    // return this.api.post('userData', body);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(body);
  }
  /**
   * post user data to email marketing platform
   */
  newsletterSubscription() {
    return this.auth.getUserAttributes().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(userAttributes => {
      this.userAttributes = userAttributes;
      return this.getUserProfile();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(userData => {
      this.userData = userData[0].dataMap;
      // return this.subsSrv.subscribed;
      return userData;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(subscribed => {
      const avatar = this.userData.avatar ? this.cdn + this.userData?.avatar : this.cdn + 'happyme-app-logo.svg';
      const avatarId = this.userData?.avatarId ? this.cdn + this.userData?.avatarId : 3;
      const request = {
        email: this.userAttributes.email,
        subscribed,
        avatarId,
        avatar,
        emailBlacklisted: !this.userData.optInNewsletter
      };
      // return this.api.post('subscriptions/newsletter', request);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(request);
    }));
  }
  setNotification(notification) {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(sub => {
      // opt into notifications if true
      if (notification.status === true) {
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
    }));
  }
  pushSubscription(optInReminders) {
    return new Promise((resolve, reject) => {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform()) {
        if (optInReminders) {
          // Request permission to use push notifications
          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
              // Register with Apple / Google to receive push via APNS/FCM
              _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.register().then(() => {
                resolve('granted'); // Resolve the promise with 'granted'
              }).catch(error => {
                reject(error); // Reject if registration fails
              });
            } else if (result.receive === 'denied') {
              this.updateUserPushSub('').subscribe({
                next: () => resolve('denied'),
                // Resolve with 'denied'
                error: err => reject(err) // Reject if update fails
              });
            }
          }).catch(error => {
            reject(error); // Reject if permission request fails
          });
        } else {
          // Unsubscribe from push notifications
          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.unregister().then(() => {
            this.updateUserPushSub('').subscribe({
              next: () => resolve('unsubscribed'),
              // Resolve with 'unsubscribed'
              error: err => reject(err) // Reject if update fails
            });
          }).catch(error => {
            reject(error); // Reject if unregister fails
          });
        }
      } else {
        resolve('unsupported'); // For non-native platforms
      }
    });
  }
  pushListener() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform()) {
      // On success, we should be able to receive notifications
      void _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registration', token => {
        this.updateUserPushSub(token.value).subscribe();
      });
      // Some issue with our setup and push will not work
      void _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registrationError', error => {
        const body = {
          pk: 'pushNotification#RegistrationError',
          sk: this.utils.getDateTime(),
          dataMap: error,
          createdDate: this.utils.getDateTime(),
          updatedDate: this.utils.getDateTime()
        };
        // this.logger.post(body).subscribe();
      });
      // Show us the notification payload if the app is open on our device
      void _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('pushNotificationReceived', notification => {
        const body = {
          pk: 'pushNotification#Received',
          sk: this.utils.getDateTime(),
          dataMap: notification,
          createdDate: this.utils.getDateTime(),
          updatedDate: this.utils.getDateTime()
        };
        // this.logger.post(body).subscribe();
      });
      // Method called when tapping on a notification
      void _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        const body = {
          pk: 'pushNotification#ActionPerformed',
          sk: this.utils.getDateTime(),
          dataMap: notification,
          createdDate: this.utils.getDateTime(),
          updatedDate: this.utils.getDateTime()
        };
        // this.logger.post(body).subscribe();
      });
    }
  }
  /**
   * Get User ID from Cognito and use it to get User Data in DynamoDB
   */
  getUserProfile() {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(user => {
      return this.getUserData(user);
    }));
  }
  /**
   * creates or updates a user record in DynamoDB, to save user related data
   */
  updateUser() {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(user => {
      this.sub = user;
      return this.getUserData(user);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(userData => {
      if (userData.length === 0) {
        return this.createUser(this.sub);
      } else {
        return this.updateUserAtLogin(this.sub);
      }
    }));
  }
  updateUserPushSub(token) {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(user => {
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
    }));
  }
  /**
   * Create user in DynamoDB
   * Save app-state variables against user in DynamoDB.
   */
  createUser(user) {
    const userData = {
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
    this.utils.operatingSystem().then(/*#__PURE__*/function () {
      var _ref = (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (os) {
        if (os !== 'ios') {
          // await this.analytics.analyticsOptIn(this.preferences.analytics);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    // return this.api.post('userData', userData);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(userData);
  }
  /**
   * Update a user's last login
   * @param user
   * @private
   */
  updateUserAtLogin(user) {
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
  updateUserPreferences(user, preferences) {
    const userData = {
      pk: 'users#' + user,
      sk: user,
      updatedDate: this.utils.getDate(),
      dataMap: {
        ageGroup: preferences.ageGroup,
        parentalStatus: preferences.parentalStatus
      }
    };
    return this.updateUserProfile(userData);
  }
  /**
   * Delete the user record in DynamoDB
   * Then delete the Cognito user and kill the session
   * Finally redirect to login page.
   */
  deleteUserAccount() {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(user => {
      this.sub = user;
      return this.deleteUserProfile(user);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(() => {
      this.preferences.newsletter = false;
      this.preferences.analytics = false;
      this.preferences.notifications = false;
      return this.logDeleteRequest(this.sub);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(() => {
      return this.auth.deleteUser();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
      this.router.navigateByUrl('/');
    }));
  }
  /**
   * set help content as viewed so only appears on first view.
   * @param fieldName
   */
  setHelpViewed(fieldName) {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(user => {
      const body = {
        pk: 'users#' + user,
        sk: user,
        userId: user,
        updatedDate: this.utils.getDate(),
        dataMap: {
          [fieldName]: true
        }
      };
      return this.updateUserProfile(body);
    }));
  }
  /**
   * Intro banner on homepage. If dismissed save to user so not shown again
   * @param state
   */
  showIntro(state) {
    return this.auth.getUserSub().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.concatMap)(sub => {
      const userData = {
        pk: 'users#' + sub,
        sk: sub,
        updatedDate: this.utils.getDate(),
        dataMap: {
          showIntroLink: state
        }
      };
      return this.updateUserProfile(userData);
    }));
  }
  static ctorParameters = () => [{
    type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
  }, {
    type: _utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }];
};
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router])], UserService);


/***/ }),

/***/ 36747:
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 44796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 36647);




const authInterceptor = (request, next) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService); // Use `inject()` instead of constructor injection
  const noAuthRequests = ['introSlides', 'introSlides2']; // Example excluded requests
  const requestPath = request.url.substring(request.url.lastIndexOf('/') + 1);
  if (!noAuthRequests.includes(requestPath)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(authService.getIDToken()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const reqClone = request.clone({
        setHeaders: {
          Authorization: `${token}`,
          'Content-Type': 'application/json'
        }
      });
      return next(reqClone);
    }));
  } else {
    const reqClone = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next(reqClone);
  }
};

/***/ }),

/***/ 37282:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 19770);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 26515);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/app */ 59326);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/auth */ 22766);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/auth */ 58586);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/auth */ 38238);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/auth */ 25554);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/auth */ 43244);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @aws-amplify/auth */ 26814);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @aws-amplify/auth */ 93521);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @aws-amplify/auth */ 57950);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @aws-amplify/auth */ 75220);











let AuthService = class AuthService {
  document;
  // Get access to window object in the Angular way
  window;
  constructor(document) {
    this.document = document;
    this.window = this.document.defaultView;
  }
  socialSignIn(identityProvider) {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Starting social sign-in with provider:', identityProvider);
        console.log('Current environment config:', _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.awsConfig);
        console.log('Platform info:', {
          isNative: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.isNativePlatform(),
          platform: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform()
        });
        // Let's build the OAuth URL manually and show it to debug
        const redirectUri = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.isNativePlatform() ? 'happymeapp://callback' : 'http://localhost:8100';
        const testAuthUrl = `https://${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.awsConfig.cognitoDomain}/oauth2/authorize?` + `client_id=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.awsConfig.userPoolClientId}&` + `response_type=code&` + `scope=email+openid+profile&` + `redirect_uri=${redirectUri}&` + `identity_provider=${identityProvider}`;
        console.log('Generated OAuth URL:', testAuthUrl);
        console.log('Using redirect URI:', redirectUri);
        alert(`OAuth URL: ${testAuthUrl}`);
        // Let's try the standard Amplify method first with detailed error logging
        console.log('Attempting standard Amplify signInWithRedirect...');
        yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithRedirect)({
          provider: identityProvider
        });
        console.log('Amplify signInWithRedirect completed successfully');
      } catch (error) {
        console.error('Error during social sign-in:', error);
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          code: error.code,
          stack: error.stack
        });
        // More specific error messages
        if (error.message?.includes('redirect')) {
          alert(`Redirect URL error: ${error.message}\n\nCheck AWS Cognito callback URLs configuration.`);
        } else if (error.message?.includes('provider')) {
          alert(`Provider error: ${error.message}\n\nEnsure ${identityProvider} is configured in AWS Cognito.`);
        } else {
          alert(`Social login error: ${error.message || error}\n\nCheck browser console for details.`);
        }
      }
    })();
  }
  handleMobileSocialLogin(provider) {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Handling mobile social login for:', provider);
        // Build the OAuth URL manually for mobile - use localhost redirect for in-app browser
        const authUrl = `https://${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.awsConfig.cognitoDomain}/oauth2/authorize?` + `client_id=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.awsConfig.userPoolClientId}&` + `response_type=code&` + `scope=email+openid+profile&` + `redirect_uri=http://localhost:8100&` + `identity_provider=${provider}`;
        console.log('Opening OAuth URL in browser:', authUrl);
        alert(`Opening ${provider} OAuth login in in-app browser`);
        // Try using window.open instead of Browser plugin
        if (_this.window) {
          console.log('Using window.open for OAuth URL');
          _this.window.open(authUrl, '_blank', 'location=yes,hidden=no,closebuttoncaption=Done');
        } else {
          console.log('Fallback to Browser plugin');
          yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
            url: authUrl,
            windowName: '_blank'
          });
        }
        console.log('Browser opened successfully');
        // Set up listener for the deep link callback
        _this.setupDeepLinkListener();
        // Also listen for browser navigation changes
        _this.setupBrowserListener();
      } catch (error) {
        console.error('Error in mobile social login:', error);
        throw error;
      }
    })();
  }
  setupDeepLinkListener() {
    var _this2 = this;
    console.log('Setting up deep link listener');
    _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appUrlOpen', /*#__PURE__*/function () {
      var _ref = (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        console.log('Deep link received:', data.url);
        if (data.url.includes('localhost:8100') || data.url.includes('happymeapp://localhost/')) {
          try {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.close();
            yield _this2.processAuthCallback(data.url);
          } catch (error) {
            console.error('Error processing auth callback:', error);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  setupBrowserListener() {
    console.log('Setting up browser listener');
    _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.addListener('browserFinished', () => {
      console.log('Browser closed');
    });
    _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.addListener('browserPageLoaded', () => {
      console.log('Browser page loaded');
    });
  }
  processAuthCallback(url) {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Processing auth callback URL:', url);
        // Extract the authorization code from the URL
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const code = urlParams.get('code');
        if (code) {
          console.log('Authorization code received:', code);
          // Here you would normally exchange the code for tokens
          // For now, let's redirect to home page
          alert('OAuth callback received! Code: ' + code);
          // You can implement token exchange here or let Amplify handle it
        } else {
          console.error('No authorization code found in callback URL');
          alert('OAuth callback error: No authorization code found');
        }
      } catch (error) {
        console.error('Error processing auth callback:', error);
        alert('Error processing OAuth callback: ' + error);
      }
    })();
  }
  // Get temporary access keys from the Identity Pool
  getAccessKeys() {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authSession = yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__.fetchAuthSession)();
      return authSession.credentials;
    })();
  }
  // Get Cognito username
  getUserSub() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)((0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_8__.getCurrentUser)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(authUser => authUser.userId));
  }
  // Get Cognito user attributes - observable
  getUserAttributes() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)((0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.fetchUserAttributes)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(attributes => attributes));
  }
  // Get Cognito user email - observable
  getUserEmail() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)((0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.fetchUserAttributes)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(attributes => attributes.email));
  }
  // Get Cognito user attributes - promise
  getUserAttributesPromise() {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.fetchUserAttributes)();
    })();
  }
  signUp(email) {
    var _this3 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          isSignUpComplete,
          userId,
          nextStep
        } = yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.signUp)({
          username: email,
          password: _this3.getRandomString(30),
          options: {
            userAttributes: {
              email
            }
          }
        });
        return isSignUpComplete;
      } catch (error) {
        if (error.name === 'UserLambdaValidationException') {
          // Throw the cleaned-up error instead of just returning the message
          throw new Error(error.message.replace(/^PreSignUp failed with error\s*/, ''));
        }
        throw error;
      }
    })();
  }
  signIn(email) {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          isSignedIn,
          nextStep
        } = yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_12__.signIn)({
          username: email,
          options: {
            authFlowType: 'CUSTOM_WITHOUT_SRP'
          }
        });
        if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
          return isSignedIn;
        }
      } catch (error) {
        console.error('error signing in', error);
        return error;
      }
    })();
  }
  signOut() {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_13__.signOut)();
      } catch (error) {
        console.error('error signing out: ', error);
      }
    })();
  }
  answerCustomChallenge(answer) {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // @ts-ignore
      try {
        const {
          isSignedIn,
          nextStep
        } = yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__.confirmSignIn)({
          challengeResponse: answer
        });
        if (isSignedIn) {
          // login successful
          return 'isSignedIn';
        }
        if ('additionalInfo' in nextStep) {
          // login failed, present the nextStep feedback (how many attempts left etc).
          return nextStep.additionalInfo;
        }
      } catch (error) {
        if (error.name.includes('SignInException')) {
          return 'There was an issue, try again or return to login.';
        }
        if (error.name.includes('EmptyChallengeResponse')) {
          return 'Please enter the code you were emailed';
        }
        return 'There was an issue, please login again.';
      }
    })();
  }
  fetchAuthSession() {
    const getSession = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          tokens,
          credentials,
          identityId,
          userSub
        } = yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__.fetchAuthSession)();
        const {
          idToken,
          accessToken
        } = tokens;
        return idToken;
      });
      return function getSession() {
        return _ref2.apply(this, arguments);
      };
    }();
    return getSession();
  }
  // returns a boolean based on auth state
  isAuthenticated() {
    var _this4 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.fetchAuthSession();
        return true;
      } catch {
        return false;
      }
    })();
  }
  // Get ID Token to make API calls when Cognito authentication is enabled on API Gateway
  getIDToken() {
    var _this5 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this5.fetchAuthSession().then(result => {
        return result;
      });
    })();
  }
  deleteUser() {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_15__.deleteUser)();
    })();
  }
  // Generate a password to create user but never used as we have a custom auth challenge setup in Cognito
  getRandomString(bytes) {
    const randomValues = new Uint8Array(bytes);
    this.window.crypto.getRandomValues(randomValues);
    return Array.from(randomValues).map(this.intToHex).join('');
  }
  intToHex(nr) {
    return nr.toString(16).padStart(2, '0');
  }
  static ctorParameters = () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DOCUMENT]
    }]
  }];
};
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__metadata)("design:paramtypes", [Document])], AuthService);


/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  cdn: '',
  imgCdn: '',
  apiGateway: '',
  apiGatewayStage: '',
  subscriptionsIOSAPIKey: '',
  subscriptionsAndroidAPIKey: '',
  // awsConfig: {
  //   accountID: '730335457135',
  //   region: 'eu-north-1', // Replace with your AWS region
  //   cognitoDomain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com', // Replace with your Cognito domain
  //   userPoolId: 'eu-north-1_bZzl2ybtS', // Replace with your User Pool ID
  //   userPoolClientId: '2j624tdce1fe6kso61d1f0lhoc', // Replace with your App Client ID
  //   // identityPoolId: 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Replace with your Identity Pool ID
  // },
  awsConfig: {
    region: 'eu-north-1',
    cognitoDomain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com',
    userPoolId: 'eu-north-1_bZzl2ybtS',
    userPoolClientId: '2j624tdce1fe6kso61d1f0lhoc',
    userPoolWebClientId: '2j624tdce1fe6kso61d1f0lhoc',
    oauth: {
      domain: 'eu-north-1bzzl2ybts.auth.eu-north-1.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'happymeapp://callback',
      redirectSignOut: 'happymeapp://signout',
      responseType: 'code'
    }
  },
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};

/***/ }),

/***/ 54140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 54140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 61584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 82193:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsAuthenticated: () => (/* binding */ IsAuthenticated),
/* harmony export */   IsNotAuthenticated: () => (/* binding */ IsNotAuthenticated)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 44796);





let IsAuthenticated = class IsAuthenticated {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this.auth.isAuthenticated()) {
        return true;
      }
      _this.router.navigate(['/account/login']);
      return false;
    })();
  }
  static ctorParameters = () => [{
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
IsAuthenticated = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])], IsAuthenticated);

let IsNotAuthenticated = class IsNotAuthenticated {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    var _this2 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(yield _this2.auth.isAuthenticated())) {
        return true;
      }
      _this2.router.navigate(['/home']);
      return false;
    })();
  }
  static ctorParameters = () => [{
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
IsNotAuthenticated = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])], IsNotAuthenticated);


/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerFactory: () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var aws_amplify_auth_enable_oauth_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify/auth/enable-oauth-listener */ 92391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 45312);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aws-amplify */ 56271);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 53563);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.component */ 20092);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3920);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 90705);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app-routing.module */ 94114);
/* harmony import */ var _app_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/auth.interceptor */ 36747);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-lottie */ 37325);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ 26817);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/element/bundle */ 10493);
/* harmony import */ var aws_amplify_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aws-amplify/utils */ 27620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 14070);


















(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_6__.register)();
// Player factory method for lottie-web
function playerFactory() {
  return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 24335, 23));
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.enableProdMode)();
}
const mobileRedirects = ['happymeapp://callback'];
const mobileSignOuts = ['happymeapp://callback'];
const webRedirects = ['http://localhost:8100'];
const webSignOuts = ['http://localhost:8100'];
aws_amplify__WEBPACK_IMPORTED_MODULE_9__.DefaultAmplify.configure({
  Auth: {
    Cognito: {
      userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.awsConfig.userPoolId,
      userPoolClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.awsConfig.userPoolClientId,
      loginWith: {
        oauth: {
          domain: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.awsConfig.cognitoDomain,
          redirectSignIn: (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.isPlatform)('capacitor') ? mobileRedirects : webRedirects,
          redirectSignOut: (0,_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.isPlatform)('capacitor') ? mobileSignOuts : webSignOuts,
          responseType: 'code',
          scopes: ['email', 'openid', 'profile']
        }
      }
    }
  }
});
const currentConfig = aws_amplify__WEBPACK_IMPORTED_MODULE_9__.DefaultAmplify.getConfig();
aws_amplify_utils__WEBPACK_IMPORTED_MODULE_11__.Hub.listen('auth', /*#__PURE__*/function () {
  var _ref = (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    payload
  }) {
    switch (payload.event) {
      case 'signInWithRedirect':
        const router = window.ng?.getInjector()?.get(_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router);
        yield router?.navigate(['/home']);
        break;
      case 'signInWithRedirect_failure':
        console.error('Sign in with redirect failed:', payload.data);
        break;
      case 'customOAuthState':
        const state = payload.data; // this will be customState provided on signInWithRedirect function
        break;
    }
  });
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
// Set up deep link handling for mobile apps
if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.isNativePlatform()) {
  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @capacitor/app */ 59326)).then(({
    App
  }) => {
    App.addListener('appUrlOpen', data => {
      console.log('Deep link received:', data.url);
      // Check if this is an OAuth callback
      if (data.url.includes('happymeapp://callback')) {
        console.log('OAuth callback detected, processing...');
        // Extract query parameters from the URL
        try {
          const url = new URL(data.url);
          const code = url.searchParams.get('code');
          const error = url.searchParams.get('error');
          if (error) {
            console.error('OAuth error:', error);
            alert(`OAuth error: ${error}`);
          } else if (code) {
            console.log('OAuth code received:', code);
            // Let Amplify handle the token exchange
            window.location.href = data.url;
          }
        } catch (err) {
          console.error('Error processing deep link:', err);
        }
      }
    });
  });
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, {
  providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.withInterceptors)([_app_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.authInterceptor])), (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.importProvidersFrom)(_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__.IonicStorageModule.forRoot()), (0,ngx_lottie__WEBPACK_IMPORTED_MODULE_17__.provideLottieOptions)({
    player: playerFactory
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_18__.provideRouter)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_18__.withHashLocation)())]
}).catch(err => console.error(err));

/***/ }),

/***/ 88996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		37518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		41981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		71603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		82273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		19642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		32095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		72335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		78221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		47184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		38759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		24248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		69863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		51769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-174ad5e0_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		76534,
		"default-node_modules_ionic_core_dist_esm_data-174ad5e0_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		25458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		70654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		36034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		20761,
		"default-node_modules_ionic_core_dist_esm_input_utils-28bf4ef0_js-node_modules_ionic_core_dist-c72fbc",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		29557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		68353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		51024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		29160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		60393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		68442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		43110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		15575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		16772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		34810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		14639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		90628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		10852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		61479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		24065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		57971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		93184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		94312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		54540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		57101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		78471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		40388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		42392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		36059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		50198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-28bf4ef0_js-node_modules_ionic_core_dist-c72fbc",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		45297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 88996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 90705);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 82193);




const routes = [
// INTRO
{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ionic_angular_fesm2022_ionic-angular-standalone_mjs"), __webpack_require__.e("src_app_pages_intro_intro_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intro/intro.page */ 83725)).then(c => c.IntroPage)
},
// HOME
{
  path: 'home',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ionic_angular_fesm2022_ionic-angular-standalone_mjs"), __webpack_require__.e("src_app_pages_home_home_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.page */ 66393)).then(c => c.HomePage),
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticated]
},
// ACCOUNT PAGES
{
  path: 'account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ionic_angular_fesm2022_ionic-angular-standalone_mjs"), __webpack_require__.e("src_app_pages_account_account-routing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account-routing.module */ 87191)).then(m => m.AccountRoutingModule)
}, {
  path: 'callback',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ionic_angular_fesm2022_ionic-angular-standalone_mjs"), __webpack_require__.e("src_app_pages_account_callback_callback_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/callback/callback.component */ 12959)).then(c => c.CallbackComponent)
},
// 404 page
{
  path: '**',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic_core_components_animation_js"), __webpack_require__.e("default-node_modules_ionic_core_components_ios_transition_js"), __webpack_require__.e("default-node_modules_ionic_angular_fesm2022_ionic-angular-standalone_mjs"), __webpack_require__.e("src_app_pages_intro_intro_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intro/intro.page */ 83725)).then(c => c.IntroPage)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppRoutingModule);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map