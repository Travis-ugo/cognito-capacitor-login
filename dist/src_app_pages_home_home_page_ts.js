(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_page_ts"],{

/***/ 7561:
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-footer translucent=\"true\" id=\"footer\">\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\" color=\"dark\">\n\n        <ion-tab-button [routerDirection]=\"'root'\" routerLink=\"/home\" [selected]=\"homeSelected\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button [routerDirection]=\"'root'\" routerLink=\"/tasks\" [selected]=\"routineSelected\">\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button [routerDirection]=\"'root'\" routerLink=\"/learn\" [selected]=\"learnSelected\">\n          <ion-icon name=\"school-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button [routerDirection]=\"'root'\" routerLink=\"/discover\" [selected]=\"discoverSelected\">\n          <ion-icon name=\"id-card-outline\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button [routerDirection]=\"'root'\" routerLink=\"/profile\" [selected]=\"profileSelected\">\n          <ion-icon name=\"person-outline\"></ion-icon>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 44607:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 7561);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 62211);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 90705);






let FooterComponent = class FooterComponent {
  footerData;
  section = '';
  homeSelected = false;
  routineSelected = false;
  learnSelected = false;
  discoverSelected = false;
  profileSelected = false;
  constructor() {}
  ngOnInit() {
    this.setNavState();
  }
  setNavState() {
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
  static ctorParameters = () => [];
  static propDecorators = {
    footerData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonTabButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonTabBar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonTabs, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_4__.IonRouterLink],
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], FooterComponent);


/***/ }),

/***/ 52743:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#homePage h1,
#homePage h2,
#homePage h3,
#homePage p {
  color: #fff;
}
#homePage #affirmation-home h2 {
  color: #222;
}
#homePage a {
  text-decoration: none;
  color: #222;
}
#homePage .avatar-img-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 20px 0;
}
#homePage .avatar-img {
  margin: auto;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}
#homePage #open-modal {
  margin-bottom: 1rem;
}
#homePage #get-started {
  background: url("/assets/backgrounds/background-painted.png");
  background-size: cover;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 15px;
}
#homePage #get-started h1,
#homePage #get-started h2,
#homePage #get-started p {
  color: #fff;
}
#homePage .green-bg {
  background-color: #86E7C0;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #494949;
  padding: 15px;
}
#homePage .small-text {
  color: #494949;
  font-size: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/home/home.page.scss"],"names":[],"mappings":"AAEE;;;;EAIE,WAAA;AADJ;AAKE;EACE,WAAA;AAHJ;AAME;EACE,qBAAA;EACA,WAAA;AAJJ;AAOE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AALJ;AAQE;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AANJ;AASE;EACE,mBAAA;AAPJ;AAUE;EACE,6DAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AARJ;AAWE;;;EAGE,WAAA;AATJ;AAYE;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;AAVJ;AAaE;EACE,cAAA;EACA,eAAA;AAXJ","sourcesContent":["#homePage {\n\n  h1,\n  h2,\n  h3,\n  p {\n    color: #fff;\n  }\n  h2 {\n  }\n  #affirmation-home h2 {\n    color: #222;\n  }\n\n  a {\n    text-decoration: none;\n    color: #222;\n  }\n\n  .avatar-img-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 150px;\n    padding: 20px 0;\n  }\n\n  .avatar-img {\n    margin: auto;\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    border-radius: 50%;\n  }\n\n  #open-modal {\n    margin-bottom: 1rem;\n  }\n\n  #get-started {\n    background: url('/assets/backgrounds/background-painted.png');\n    background-size: cover;\n    padding: 1rem;\n    border-radius: 8px;\n    margin-bottom: 15px;\n  }\n\n  #get-started h1,\n  #get-started h2,\n  #get-started p {\n    color: #fff;\n  }\n\n  .green-bg {\n    background-color: #86E7C0;\n    border-radius: 4px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    color: #494949;\n    padding: 15px;\n  }\n\n  .small-text {\n    color: #494949;\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62211:
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-tab-bar {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

ion-tab-button.tab-selected {
  color: var(--ion-color-primary);
}`, "",{"version":3,"sources":["webpack://./src/app/components/shared/footer/footer.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;EACA,cAAA;AACF;;AAGE;EACE,+BAAA;AAAJ","sourcesContent":["ion-tab-bar {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n}\n\nion-tab-button {\n  &.tab-selected {\n    color: var(--ion-color-primary);\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66393:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 68395);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 52743);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 90705);
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/footer/footer.component */ 44607);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 35135);













let HomePage = class HomePage {
  titleService;
  authService;
  router;
  footerData = {
    section: 'home'
  };
  allSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  userData;
  userAttributes = null;
  loading = true;
  cdn = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.cdn;
  imgCdn = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imgCdn;
  constructor(titleService, authService, router) {
    this.titleService = titleService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.titleService.setTitle('Dashboard');
    this.loadUserData();
  }
  ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
  loadUserData() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.userAttributes = yield _this.authService.getUserAttributesPromise();
        _this.loading = false;
      } catch (error) {
        console.error('Error loading user data:', error);
        _this.loading = false;
      }
    })();
  }
  signOut() {
    var _this2 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.authService.signOut();
        yield _this2.router.navigate(['/']);
      } catch (error) {
        console.error('Error signing out:', error);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title
  }, {
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule],
  standalone: true,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title, _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])], HomePage);


/***/ }),

/***/ 68395:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\" id=\"homePage\">\n  <ion-grid [fixed]=\"true\">\n\n    <ion-row id=\"titleBlock\">\n      <ion-col size=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"10\" offset-lg=\"1\">\n        <h1 class=\"center\">Welcome Home!</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\">\n        <ion-card *ngIf=\"!loading; else loadingSpinner\">\n          <ion-card-header>\n            <ion-card-title>Your Profile</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div *ngIf=\"userAttributes\">\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <h3>Email</h3>\n                  <p>{{ userAttributes.email }}</p>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"userAttributes.given_name\">\n                <ion-label>\n                  <h3>First Name</h3>\n                  <p>{{ userAttributes.given_name }}</p>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"userAttributes.family_name\">\n                <ion-label>\n                  <h3>Last Name</h3>\n                  <p>{{ userAttributes.family_name }}</p>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" *ngIf=\"userAttributes.picture\">\n                <ion-label>\n                  <h3>Profile Picture</h3>\n                  <img [src]=\"userAttributes.picture\" alt=\"Profile\" style=\"width: 50px; height: 50px; border-radius: 50%;\">\n                </ion-label>\n              </ion-item>\n            </div>\n            <div *ngIf=\"!userAttributes\">\n              <p>No user data available</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n\n        <ng-template #loadingSpinner>\n          <ion-card>\n            <ion-card-content>\n              <div style=\"text-align: center; padding: 20px;\">\n                <ion-spinner></ion-spinner>\n                <p>Loading your profile...</p>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\">\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"signOut()\">\n          Sign Out\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n<app-footer [footerData]=\"footerData\"></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_page_ts.js.map