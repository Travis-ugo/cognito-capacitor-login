"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_callback_callback_component_ts"],{

/***/ 12959:
/*!**************************************************************!*\
  !*** ./src/app/pages/account/callback/callback.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackComponent: () => (/* binding */ CallbackComponent)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify/auth */ 58586);
/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify/auth */ 38238);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);






let CallbackComponent = class CallbackComponent {
  router;
  route;
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔗 OAuth callback component initialized');
      // Log the current URL and parameters for debugging
      const currentUrl = window.location.href;
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const error = urlParams.get('error');
      console.log('🔗 Callback URL:', currentUrl);
      console.log('🔗 OAuth code:', code);
      console.log('🔗 OAuth error:', error);
      if (error) {
        console.error('🔗 OAuth error received:', error);
        _this.router.navigate(['/account/signup'], {
          queryParams: {
            error: 'OAuth authentication failed'
          }
        });
        return;
      }
      if (code) {
        console.log('🔗 Authorization code received, waiting for Amplify to process...');
        // Give Amplify some time to process the OAuth callback
        yield _this.waitForAuthentication();
      } else {
        console.warn('🔗 No authorization code found in callback URL');
        _this.router.navigate(['/account/signup']);
      }
    })();
  }
  waitForAuthentication() {
    var _this2 = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (maxAttempts = 10, delayMs = 1000) {
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          console.log(`🔗 Checking authentication status (attempt ${attempt}/${maxAttempts})...`);
          const session = yield (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__.fetchAuthSession)();
          if (session.tokens?.idToken) {
            console.log('🔗 Authentication successful! Redirecting to home...');
            _this2.router.navigate(['/home']);
            return;
          }
          // Also try getCurrentUser as a double-check
          const user = yield (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();
          if (user) {
            console.log('🔗 User authenticated via getCurrentUser! Redirecting to home...');
            _this2.router.navigate(['/home']);
            return;
          }
        } catch (error) {
          console.log(`🔗 Authentication not ready yet (attempt ${attempt}):`, error.message || error);
        }
        if (attempt < maxAttempts) {
          yield new Promise(resolve => setTimeout(resolve, delayMs));
        }
      }
      console.error('🔗 Authentication timeout - redirecting to signup');
      _this2.router.navigate(['/account/signup'], {
        queryParams: {
          error: 'Authentication timeout'
        }
      });
    }).apply(this, arguments);
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
CallbackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-callback',
  standalone: true,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonSpinner, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonText],
  template: `
      <ion-content class="ion-padding">
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
          <ion-spinner color="primary"></ion-spinner>
          <ion-text color="primary" style="margin-top: 20px;">
            <h3>Processing OAuth callback...</h3>
            <p>Please wait while we complete your sign-in.</p>
          </ion-text>
        </div>
      </ion-content>`
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute])], CallbackComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_callback_callback_component_ts.js.map