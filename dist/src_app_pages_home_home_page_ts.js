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
#homePage .safe-area-top {
  height: env(safe-area-inset-top, 20px);
  min-height: 20px;
  max-height: 60px;
}
#homePage #titleBlock {
  margin-top: 20px;
  padding-top: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/home/home.page.scss"],"names":[],"mappings":"AAEE;;;;EAIE,WAAA;AADJ;AAKE;EACE,sCAAA;EACA,gBAAA;EACA,gBAAA;AAHJ;AAOE;EACE,gBAAA;EACA,iBAAA;AALJ;AASE;EACE,WAAA;AAPJ;AAUE;EACE,qBAAA;EACA,WAAA;AARJ;AAWE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AATJ;AAYE;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AAVJ;AAaE;EACE,mBAAA;AAXJ;AAcE;EACE,6DAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;AAZJ;AAeE;;;EAGE,WAAA;AAbJ;AAgBE;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;AAdJ;AAiBE;EACE,cAAA;EACA,eAAA;AAfJ","sourcesContent":["#homePage {\n\n  h1,\n  h2,\n  h3,\n  p {\n    color: #fff;\n  }\n\n  // Safe area spacing for top of screen\n  .safe-area-top {\n    height: env(safe-area-inset-top, 20px); // Use device safe area or fallback to 20px\n    min-height: 20px; // Minimum spacing\n    max-height: 60px; // Maximum spacing to prevent excessive space\n  }\n\n  // Additional spacing for the title block\n  #titleBlock {\n    margin-top: 20px; // Extra spacing after safe area\n    padding-top: 10px;\n  }\n  h2 {\n  }\n  #affirmation-home h2 {\n    color: #222;\n  }\n\n  a {\n    text-decoration: none;\n    color: #222;\n  }\n\n  .avatar-img-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 150px;\n    padding: 20px 0;\n  }\n\n  .avatar-img {\n    margin: auto;\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    border-radius: 50%;\n  }\n\n  #open-modal {\n    margin-bottom: 1rem;\n  }\n\n  #get-started {\n    background: url('/assets/backgrounds/background-painted.png');\n    background-size: cover;\n    padding: 1rem;\n    border-radius: 8px;\n    margin-bottom: 15px;\n  }\n\n  #get-started h1,\n  #get-started h2,\n  #get-started p {\n    color: #fff;\n  }\n\n  .green-bg {\n    background-color: #86E7C0;\n    border-radius: 4px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    color: #494949;\n    padding: 15px;\n  }\n\n  .small-text {\n    color: #494949;\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/footer/footer.component */ 44607);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 35135);













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
  showDebugInfo = false;
  cdn = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.cdn;
  imgCdn = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imgCdn;
  constructor(titleService, authService, router) {
    this.titleService = titleService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.titleService.setTitle('Dashboard');
    this.setupAuthListener();
    this.loadUserData();
  }
  setupAuthListener() {
    // Listen for auth events - using the same import pattern as main.ts
    __webpack_require__.e(/*! import() */ "node_modules_aws-amplify_dist_esm_utils_index_mjs").then(__webpack_require__.bind(__webpack_require__, /*! aws-amplify/utils */ 72464)).then(({
      Hub
    }) => {
      Hub.listen('auth', ({
        payload
      }) => {
        console.log('🏠 Home page received auth event:', payload.event);
        switch (payload.event) {
          case 'signedIn':
            console.log('🏠 User signed in, refreshing profile data...');
            // Wait a moment then reload user data
            setTimeout(() => {
              this.loadUserData();
            }, 1000);
            break;
          case 'signedOut':
            console.log('🏠 User signed out, clearing profile data...');
            this.userAttributes = null;
            break;
        }
      });
    });
  }
  ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
  loadUserData() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.loadUserAttributesWithRetry();
      } catch (error) {
        console.error('Error loading user data after retries:', error);
        _this.loading = false;
      }
    })();
  }
  loadUserAttributesWithRetry() {
    var _this2 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (maxRetries = 3, delay = 1000) {
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`🔄 Attempt ${attempt} to load user attributes...`);
          // First check if user is authenticated
          const {
            getCurrentUser
          } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_aws-amplify_auth_dist_esm_index_mjs"), __webpack_require__.e("node_modules_aws-amplify_dist_esm_auth_index_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! aws-amplify/auth */ 50181));
          const user = yield getCurrentUser();
          console.log('✅ User is authenticated:', user);
          // Wait a bit for tokens to be ready
          if (attempt === 1) {
            yield _this2.sleep(2000); // Wait 2 seconds on first attempt
          } else {
            yield _this2.sleep(delay * attempt); // Progressive delay
          }
          // Try multiple methods to get user attributes
          try {
            _this2.userAttributes = yield _this2.authService.getUserAttributesPromise();
            console.log('✅ User attributes loaded successfully via getUserAttributesPromise:', _this2.userAttributes);
          } catch (attributeError) {
            console.log('⚠️ getUserAttributesPromise failed, trying alternative methods...', attributeError);
            // Try to get user data from JWT tokens
            _this2.userAttributes = yield _this2.getUserDataFromTokens();
            console.log('✅ User attributes extracted from tokens:', _this2.userAttributes);
          }
          // Always supplement with user object data
          console.log('🔍 Supplementing with user object data...');
          _this2.supplementUserDataFromUserObject(user);
          // Debug: Log name extraction results
          console.log('👤 Name extraction results:', {
            fullDisplayName: _this2.getFullDisplayName(),
            given_name: _this2.userAttributes?.given_name,
            family_name: _this2.userAttributes?.family_name,
            name: _this2.userAttributes?.name,
            email: _this2.userAttributes?.email
          });
          _this2.loading = false;
          return; // Success!
        } catch (error) {
          console.error(`❌ Attempt ${attempt} failed:`, error);
          if (attempt === maxRetries) {
            // Last attempt failed, show error state
            _this2.loading = false;
            throw error;
          }
          // Wait before retrying
          yield _this2.sleep(delay * attempt);
        }
      }
    }).apply(this, arguments);
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  signOut() {
    var _this3 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.authService.signOut();
        yield _this3.router.navigate(['/']);
      } catch (error) {
        console.error('Error signing out:', error);
      }
    })();
  }
  getDisplayName() {
    if (this.userAttributes?.given_name && this.userAttributes?.family_name) {
      return `${this.userAttributes.given_name} ${this.userAttributes.family_name}`;
    } else if (this.userAttributes?.given_name) {
      return this.userAttributes.given_name;
    } else if (this.userAttributes?.family_name) {
      return this.userAttributes.family_name;
    } else if (this.userAttributes?.name) {
      return this.userAttributes.name;
    }
    return 'User';
  }
  getFullDisplayName() {
    // Priority order for getting the full name
    // 1. Try given_name + family_name combination
    if (this.userAttributes?.given_name && this.userAttributes?.family_name) {
      return `${this.userAttributes.given_name} ${this.userAttributes.family_name}`;
    }
    // 2. Try the 'name' field (often contains full name from social providers)
    if (this.userAttributes?.name && this.userAttributes.name.trim() !== '') {
      return this.userAttributes.name;
    }
    // 3. Try individual name parts
    if (this.userAttributes?.given_name) {
      return this.userAttributes.given_name;
    }
    if (this.userAttributes?.family_name) {
      return this.userAttributes.family_name;
    }
    // 4. Try extracting name from email (before @)
    if (this.userAttributes?.email) {
      const emailName = this.userAttributes.email.split('@')[0];
      // Clean up email name (remove dots, underscores, numbers)
      const cleanName = emailName.replace(/[._0-9]/g, ' ').trim();
      if (cleanName && cleanName !== emailName) {
        return this.capitalizeWords(cleanName);
      }
    }
    return null; // Return null if no name found
  }
  capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
  getSocialProvider() {
    // First try the identities attribute
    if (this.userAttributes?.identities) {
      try {
        const identities = JSON.parse(this.userAttributes.identities);
        if (identities && identities.length > 0) {
          const provider = identities[0].providerName;
          return provider === 'Google' ? 'Google Account' : provider === 'Facebook' ? 'Facebook Account' : provider === 'Amazon' ? 'Amazon Account' : provider === 'Apple' ? 'Apple ID' : `${provider} Account`;
        }
      } catch (error) {
        console.error('Error parsing identities:', error);
      }
    }
    // Fallback: check if we supplemented social provider info
    if (this.userAttributes?.social_provider) {
      return `${this.userAttributes.social_provider} Account`;
    }
    // Check username for social provider info
    if (this.userAttributes?.username) {
      const username = this.userAttributes.username.toLowerCase();
      if (username.startsWith('google_')) {
        return 'Google Account (detected)';
      } else if (username.startsWith('facebook_')) {
        return 'Facebook Account (detected)';
      } else if (username.startsWith('apple_')) {
        return 'Apple ID (detected)';
      }
    }
    // Another fallback: check email domain
    if (this.userAttributes?.email) {
      const email = this.userAttributes.email.toLowerCase();
      if (email.includes('gmail.com')) {
        return 'Google Account (detected)';
      }
    }
    return 'Email/Password';
  }
  getUserAttributeCount() {
    if (!this.userAttributes) return 0;
    return Object.keys(this.userAttributes).length;
  }
  toggleDebugInfo() {
    this.showDebugInfo = !this.showDebugInfo;
  }
  getUserDataFromTokens() {
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('🔍 Attempting to extract user data from JWT tokens...');
        // Get auth tokens directly
        const {
          fetchAuthSession
        } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_aws-amplify_auth_dist_esm_index_mjs"), __webpack_require__.e("node_modules_aws-amplify_dist_esm_auth_index_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! aws-amplify/auth */ 50181));
        const session = yield fetchAuthSession();
        console.log('🎫 Auth session:', session);
        let userData = {};
        // Extract data from ID token if available
        if (session.tokens?.idToken) {
          const idTokenPayload = session.tokens.idToken.payload;
          console.log('🆔 ID Token payload:', idTokenPayload);
          userData = {
            sub: idTokenPayload.sub,
            email: idTokenPayload.email,
            email_verified: idTokenPayload.email_verified,
            given_name: idTokenPayload.given_name,
            family_name: idTokenPayload.family_name,
            name: idTokenPayload.name,
            picture: idTokenPayload.picture,
            locale: idTokenPayload.locale,
            identities: idTokenPayload.identities ? JSON.stringify(idTokenPayload.identities) : undefined,
            // Add any other relevant claims
            ...Object.keys(idTokenPayload).filter(key => !['iss', 'aud', 'exp', 'iat', 'token_use', 'auth_time'].includes(key)).reduce((obj, key) => {
              obj[key] = idTokenPayload[key];
              return obj;
            }, {})
          };
        }
        // Extract data from access token if available
        if (session.tokens?.accessToken) {
          const accessTokenPayload = session.tokens.accessToken.payload;
          console.log('🔑 Access Token payload:', accessTokenPayload);
          // Add scope and other access token info
          userData.scope = accessTokenPayload.scope;
          userData.token_use = accessTokenPayload.token_use;
        }
        console.log('📄 Extracted user data from tokens:', userData);
        return userData;
      } catch (error) {
        console.error('❌ Error extracting user data from tokens:', error);
        // Return basic structure if token extraction fails
        return {
          email: 'unknown@example.com',
          sub: 'unknown',
          name: 'User'
        };
      }
    })();
  }
  supplementUserDataFromUserObject(user) {
    try {
      console.log('📋 User object:', user);
      if (!this.userAttributes) {
        this.userAttributes = {};
      }
      // Sometimes the username contains useful info for social logins
      if (user.username && user.username.startsWith('google_')) {
        this.userAttributes.social_provider = 'Google';
      }
      // Add any additional user object properties that might be useful
      if (user.userId && !this.userAttributes.sub) {
        this.userAttributes.sub = user.userId;
      }
      // Add username info
      if (user.username && !this.userAttributes.username) {
        this.userAttributes.username = user.username;
      }
      console.log('📋 Supplemented user attributes:', this.userAttributes);
    } catch (error) {
      console.error('Error supplementing user data:', error);
    }
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
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonSpinner, _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule],
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
module.exports = "<ion-content class=\"ion-padding\" id=\"homePage\">\n  <!-- Safe area spacer -->\n  <div class=\"safe-area-top\"></div>\n\n  <ion-grid [fixed]=\"true\">\n\n    <ion-row id=\"titleBlock\">\n      <ion-col size=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"10\" offset-lg=\"1\">\n        <h1 class=\"center\">\n          Welcome{{ getFullDisplayName() ? ', ' + getFullDisplayName() : '' }}!\n        </h1>\n        <div *ngIf=\"userAttributes && getFullDisplayName()\" class=\"center\" style=\"margin-top: 10px;\">\n          <h2 style=\"color: var(--ion-color-primary); font-weight: 300;\">{{ getFullDisplayName() }}</h2>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\">\n        <ion-card *ngIf=\"!loading; else loadingSpinner\">\n          <ion-card-header>\n            <ion-card-title>Your Profile</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div *ngIf=\"userAttributes\">\n              <!-- Profile Picture Section -->\n              <div *ngIf=\"userAttributes.picture\" style=\"text-align: center; margin-bottom: 20px;\">\n                <img [src]=\"userAttributes.picture\"\n                     alt=\"Profile Picture\"\n                     style=\"width: 80px; height: 80px; border-radius: 50%; border: 3px solid var(--ion-color-primary);\">\n              </div>\n\n              <!-- Full Name Display -->\n              <ion-item lines=\"none\" *ngIf=\"getFullDisplayName()\">\n                <ion-label>\n                  <h2 style=\"color: var(--ion-color-primary); font-weight: 500;\">{{ getFullDisplayName() }}</h2>\n                  <p>Full Name</p>\n                </ion-label>\n              </ion-item>\n\n              <!-- Email -->\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <h3>{{ userAttributes.email }}</h3>\n                  <p>Email Address</p>\n                </ion-label>\n              </ion-item>\n\n              <!-- Social Login Provider -->\n              <ion-item lines=\"none\" *ngIf=\"userAttributes.identities\">\n                <ion-label>\n                  <h3>{{ getSocialProvider() }}</h3>\n                  <p>Login Method</p>\n                </ion-label>\n              </ion-item>\n\n              <!-- Email Verified Status -->\n              <ion-item lines=\"none\" *ngIf=\"userAttributes.email_verified !== undefined\">\n                <ion-label>\n                  <h3>{{ userAttributes.email_verified === 'true' ? 'Verified' : 'Not Verified' }}</h3>\n                  <p>Email Status</p>\n                </ion-label>\n              </ion-item>\n\n              <!-- Locale/Language -->\n              <ion-item lines=\"none\" *ngIf=\"userAttributes.locale\">\n                <ion-label>\n                  <h3>{{ userAttributes.locale }}</h3>\n                  <p>Language/Locale</p>\n                </ion-label>\n              </ion-item>\n\n              <!-- Additional Details Section -->\n              <div style=\"margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--ion-color-light);\">\n                <h4 style=\"margin-bottom: 10px;\">Account Details</h4>\n\n                <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 10px;\">\n                  <div style=\"text-align: center; padding: 10px; background: var(--ion-color-light); border-radius: 8px;\">\n                    <strong>{{ userAttributes.sub ? 'Active' : 'Unknown' }}</strong>\n                    <br>\n                    <small>Account Status</small>\n                  </div>\n\n                  <div style=\"text-align: center; padding: 10px; background: var(--ion-color-light); border-radius: 8px;\">\n                    <strong>{{ getUserAttributeCount() }}</strong>\n                    <br>\n                    <small>Profile Fields</small>\n                  </div>\n                </div>\n              </div>\n\n              <!-- Raw Attributes for Debugging (optional) -->\n              <details style=\"margin-top: 20px;\" *ngIf=\"showDebugInfo\">\n                <summary style=\"cursor: pointer; color: var(--ion-color-medium);\">\n                  <small>Debug Info (Tap to expand)</small>\n                </summary>\n                <pre style=\"font-size: 12px; background: var(--ion-color-light); padding: 10px; border-radius: 4px; margin-top: 10px; overflow-x: auto;\">{{ userAttributes | json }}</pre>\n              </details>\n\n              <ion-button fill=\"clear\" size=\"small\" (click)=\"toggleDebugInfo()\" style=\"margin-top: 10px;\">\n                {{ showDebugInfo ? 'Hide' : 'Show' }} Debug Info\n              </ion-button>\n            </div>\n            <div *ngIf=\"!userAttributes\">\n              <p>No user data available</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n\n        <ng-template #loadingSpinner>\n          <ion-card>\n            <ion-card-content>\n              <div style=\"text-align: center; padding: 20px;\">\n                <ion-spinner></ion-spinner>\n                <p>Loading your profile...</p>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\">\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"signOut()\">\n          Sign Out\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n<app-footer [footerData]=\"footerData\"></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_page_ts.js.map