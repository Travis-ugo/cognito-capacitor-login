(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_intro_intro_page_ts"],{

/***/ 2400:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 71962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 15602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 18473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 72083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 19103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 22727:
/*!********************************************************!*\
  !*** ./src/app/pages/intro/intro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--<ion-progress-bar type=\"indeterminate\" reversed=\"true\" *ngIf=\"!introSlides.length && !loggedIn\" color=\"primary\"></ion-progress-bar>-->\n<ion-content class=\"ion-padding flex-content\" *ngIf=\"!loggedIn\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"8\" offset-lg=\"2\" class=\"swiper-wrapper\">\n        <swiper-container\n          class=\"intro-swiper\"\n          *ngIf=\"introSlides\"\n          #swiper\n          direction=\"horizontal\"\n          watchSlidesProgress=\"true\"\n          loop=\"false\"\n          auto-height=\"false\"\n          pagination=\"true\"\n          autoplay=\"true\"\n          autoplay-delay=\"5000\"\n          autoplay-disable-on-interaction=\"true\"\n          pagination-type=\"progressbar\"\n          grab-cursor=\"true\">\n          <swiper-slide *ngFor=\"let slide of introSlides\" class=\"ion-padding\">\n            <div class=\"img-content\" *ngIf=\"slide?.dataMap?.image_upload?.length\">\n              <ion-img [src]=\"cdn+slide.dataMap.image_upload[0].thumbUrlPath\" [alt]=\"slide.dataMap.name\" />\n            </div>\n            <h2>{{slide.dataMap.name}}</h2>\n            <div class=\"slide-content\" [innerHTML]=\"slide.dataMap.content\"></div>\n          </swiper-slide>\n        </swiper-container>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-row class=\"dark-bg ion-padding\" *ngIf=\"!loggedIn\">\n  <ion-col size=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"8\" offset-lg=\"2\">\n    <ion-button\n      expand=\"block\"\n      routerLink=\"/account/register\">\n      Create an account\n    </ion-button>\n    <ion-button\n      expand=\"block\"\n      fill=\"outline\"\n      router-direction=\"forward\"\n      routerLink=\"/account/login\">\n      Log in\n    </ion-button>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 23340:
/*!************************************************!*\
  !*** ./src/app/services/apigateway.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiGatewayService: () => (/* binding */ ApiGatewayService)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 72354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);








let ApiGatewayService = class ApiGatewayService {
  httpClient;
  toastController;
  apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiGateway;
  profile = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiGatewayStage;
  apiEndpoint = this.apiURL + this.profile;
  timeout = 10000; // 10 seconds
  constructor(httpClient, toastController) {
    this.httpClient = httpClient;
    this.toastController = toastController;
  }
  get(resource) {
    return this.httpClient.get(this.apiEndpoint + '/' + resource).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return this.handleError(error);
    }));
  }
  post(resource, body) {
    return this.httpClient.post(this.apiEndpoint + '/' + resource, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return this.handleError(error);
    }));
  }
  patch(resource, body) {
    return this.httpClient.patch(this.apiEndpoint + '/' + resource, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return this.handleError(error);
    }));
  }
  delete(resource) {
    return this.httpClient.delete(this.apiEndpoint + '/' + resource).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(this.timeout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return this.handleError(error);
    }));
  }
  handleError(error) {
    if (error instanceof rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.TimeoutError) {
      // Handle timeout error
      void this.presentToast('Network error. Please ensure you are connected to the internet');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Network error. Please ensure you are connected to the internet'));
    } else if (!navigator.onLine) {
      // Handle no network connection
      void this.presentToast('No network connection. You need access to the internet to use the app.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('No network connection. Please check your internet settings.'));
    } else {
      // Handle generic error
      void this.presentToast('There was an error, if it persists please contact us.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('There was an error, if it persists please contact us.'));
    }
  }
  presentToast(_x) {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, duration = 2000) {
      const toast = yield _this.toastController.create({
        message,
        duration,
        animated: true,
        color: 'danger',
        icon: 'wifi',
        position: 'middle'
      });
      void toast.present();
    }).apply(this, arguments);
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
  }];
};
ApiGatewayService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])], ApiGatewayService);


/***/ }),

/***/ 28113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 47939:
/*!********************************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `app-intro {
  --background: radial-gradient(circle, rgb(12, 80, 123) 0%, rgba(22,34,42,1) 100%);
}
app-intro .flex-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
app-intro .swiper-wrapper {
  flex: 1; /* This makes the swiper-wrapper expand to fill available space */
  /* Optionally, if you need to prevent overflow */
  overflow: hidden;
}
app-intro .intro-swiper {
  overflow: hidden;
  height: 100%;
}
app-intro swiper-slide {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
}
app-intro p, app-intro h2 {
  color: #fff;
}
app-intro h2 {
  font-size: 2rem;
  text-align: center;
}
app-intro ion-segment-button {
  --background: transparent;
  --color: #fff;
}
app-intro .img-content ion-img {
  width: 100%;
  height: 100px;
}
app-intro ion-checkbox {
  --background: transparent;
  color: #fff;
}
app-intro ion-checkbox::part(helper-text) {
  color: #fff;
}
app-intro ion-checkbox::part(error-text) {
  color: var(--ion-color-danger);
}`, "",{"version":3,"sources":["webpack://./src/app/pages/intro/intro.page.scss"],"names":[],"mappings":"AAAA;EACE,iFAAA;AACF;AAAE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAEJ;AAAE;EACE,OAAA,EAAA,iEAAA;EACA,gDAAA;EACA,gBAAA;AAEJ;AAAE;EACE,gBAAA;EACA,YAAA;AAEJ;AAAE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,WAAA;AAEJ;AAAE;EACE,WAAA;AAEJ;AAAE;EACE,eAAA;EACA,kBAAA;AAEJ;AAAE;EACE,yBAAA;EACA,aAAA;AAEJ;AAAE;EACE,WAAA;EACA,aAAA;AAEJ;AAAE;EACE,yBAAA;EACA,WAAA;AAEJ;AAAE;EACE,WAAA;AAEJ;AAAE;EACE,8BAAA;AAEJ","sourcesContent":["app-intro {\n  --background: radial-gradient(circle, rgb(12, 80, 123) 0%, rgba(22,34,42,1) 100%);\n  .flex-content {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n  .swiper-wrapper {\n    flex: 1; /* This makes the swiper-wrapper expand to fill available space */\n    /* Optionally, if you need to prevent overflow */\n    overflow: hidden;\n  }\n  .intro-swiper {\n    overflow: hidden;\n    height: 100%;\n  }\n  swiper-slide {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    width: 100%;\n  }\n  p, h2 {\n    color: #fff;\n  }\n  h2 {\n    font-size: 2rem;\n    text-align: center;\n  }\n  ion-segment-button {\n    --background: transparent;\n    --color: #fff;\n  }\n  .img-content ion-img {\n    width: 100%;\n    height: 100px;\n  }\n  ion-checkbox {\n    --background: transparent;\n    color: #fff;\n  }\n  ion-checkbox::part(helper-text) {\n    color: #fff;\n  }\n  ion-checkbox::part(error-text) {\n    color: var(--ion-color-danger);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 71962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 35152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 72083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 19103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 28113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 80967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 72354:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/timeout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isDate */ 15602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/innerFrom */ 82645);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/createErrorClass */ 32384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/executeSchedule */ 20310);







const TimeoutError = (0,_util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function TimeoutErrorImpl(info = null) {
  _super(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  this.info = info;
});
function timeout(config, schedulerArg) {
  const {
    first,
    each,
    with: _with = timeoutErrorFactory,
    scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler,
    meta = null
  } = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config;
  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    let originalSourceSubscription;
    let timerSubscription;
    let lastValue = null;
    let seen = 0;
    const startTimer = delay => {
      timerSubscription = (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__.executeSchedule)(subscriber, scheduler, () => {
        try {
          originalSourceSubscription.unsubscribe();
          (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.innerFrom)(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__.createOperatorSubscriber)(subscriber, value => {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, () => {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}

/***/ }),

/***/ 78517:
/*!**************************************************!*\
  !*** ./src/app/services/intro-slides.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroSlidesService: () => (/* binding */ IntroSlidesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _apigateway_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apigateway.service */ 23340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 95429);




let IntroSlidesService = class IntroSlidesService {
  api;
  constructor(api) {
    this.api = api;
  }
  getSlides() {
    // return this.api.get('introSlides2');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)([]);
  }
  static ctorParameters = () => [{
    type: _apigateway_service__WEBPACK_IMPORTED_MODULE_0__.ApiGatewayService
  }];
};
IntroSlidesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_apigateway_service__WEBPACK_IMPORTED_MODULE_0__.ApiGatewayService])], IntroSlidesService);


/***/ }),

/***/ 83725:
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroPage: () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page.html?ngResource */ 22727);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss?ngResource */ 47939);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/element/bundle */ 10493);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _services_intro_slides_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/intro-slides.service */ 78517);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 90705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utility.service */ 25190);







(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__.register)();








let IntroPage = class IntroPage {
  titleService;
  introSlidesSrv;
  auth;
  router;
  utils;
  swiperRef;
  swiper;
  introSlides = [];
  cdn = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imgCdn;
  _reachedEnd = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
  reachedEnd = this._reachedEnd.asObservable();
  isAgreed = false;
  showError = false;
  loggedIn = true;
  constructor(titleService, introSlidesSrv, auth, router, utils) {
    this.titleService = titleService;
    this.introSlidesSrv = introSlidesSrv;
    this.auth = auth;
    this.router = router;
    this.utils = utils;
  }
  ngOnInit() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn() {
    this.auth.isAuthenticated().then(loggedIn => {
      if (loggedIn) {
        this.loggedIn = true;
        void this.router.navigateByUrl('/home');
      } else {
        this.loggedIn = false;
        this.titleService.setTitle('Welcome to HappyMe');
        this.introSlidesSrv.getSlides().subscribe(introSlides => {
          if (this.introSlides) {
            this.introSlides = introSlides;
            this.swiper = this.swiperRef?.nativeElement.swiper;
            if (this.swiper) {
              this.swiper.on('slideChange', () => {
                this.slideChange();
              });
            }
          } else {
            void this.router.navigateByUrl('/home');
          }
        });
      }
    });
  }
  slideChange() {
    this._reachedEnd.next(this.swiper.isEnd);
  }
  static ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title
  }, {
    type: _services_intro_slides_service__WEBPACK_IMPORTED_MODULE_4__.IntroSlidesService
  }, {
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _services_utility_service__WEBPACK_IMPORTED_MODULE_6__.UtilityService
  }];
  static propDecorators = {
    swiperRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['swiper']
    }]
  };
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-intro',
  template: _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonProgressBar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonImg, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonCol, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule],
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
  styles: [(_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title, _services_intro_slides_service__WEBPACK_IMPORTED_MODULE_4__.IntroSlidesService, _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_utility_service__WEBPACK_IMPORTED_MODULE_6__.UtilityService])], IntroPage);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_intro_intro_page_ts.js.map