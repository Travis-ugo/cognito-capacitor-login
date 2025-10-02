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
/* harmony import */ var _Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify/auth */ 58586);
/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify/auth */ 38238);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var aws_amplify_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify/utils */ 27620);







let CallbackComponent = class CallbackComponent {
  router;
  route;
  authCheckInterval;
  hubUnsubscribe;
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔗 OAuth callback component initialized');
      // Set up Hub listener for auth events
      _this.hubUnsubscribe = aws_amplify_utils__WEBPACK_IMPORTED_MODULE_1__.Hub.listen('auth', /*#__PURE__*/function () {
        var _ref = (0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
          payload
        }) {
          console.log('🔗 Callback component received auth event:', payload.event);
          if (payload.event === 'signInWithRedirect') {
            console.log('✅ OAuth sign-in complete! Redirecting to home...');
            _this.cleanup();
            yield _this.router.navigate(['/home']);
          } else if (payload.event === 'signInWithRedirect_failure') {
            console.error('❌ OAuth sign-in failed:', payload.data);
            _this.cleanup();
            yield _this.router.navigate(['/account/signup'], {
              queryParams: {
                error: 'Authentication failed'
              }
            });
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      // Always read from the full URL (works for iOS + Android)
      const currentUrl = window.location.href;
      const urlParams = new URL(currentUrl).searchParams;
      // Fallback: Angular route snapshot (useful on web)
      const routeParams = _this.route.snapshot.queryParams;
      const code = urlParams.get('code') || routeParams['code'];
      const error = urlParams.get('error') || routeParams['error'];
      console.log('🔗 Callback URL:', currentUrl);
      console.log('🔗 OAuth code:', code ? 'present' : 'missing');
      console.log('🔗 OAuth error:', error || 'none');
      if (error) {
        console.error('🔗 OAuth error received:', error);
        _this.cleanup();
        _this.router.navigate(['/account/signup'], {
          queryParams: {
            error: 'OAuth authentication failed'
          }
        });
        return;
      }
      if (code) {
        console.log('🔗 Authorization code detected, waiting for Amplify to process...');
        yield _this.waitForAuthentication();
      } else {
        console.warn('🔗 No authorization code found in callback URL');
        _this.cleanup();
        _this.router.navigate(['/account/signup']);
      }
    })();
  }
  ngOnDestroy() {
    this.cleanup();
  }
  cleanup() {
    if (this.authCheckInterval) {
      clearInterval(this.authCheckInterval);
      this.authCheckInterval = null;
    }
    if (this.hubUnsubscribe) {
      this.hubUnsubscribe();
      this.hubUnsubscribe = null;
    }
  }
  waitForAuthentication() {
    var _this2 = this;
    return (0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Start checking auth status immediately and periodically
      let attempts = 0;
      const maxAttempts = 40; // 60 seconds total (40 * 1.5s)
      // First, give Amplify a moment to process the OAuth callback
      console.log('⏳ Waiting for Amplify OAuth listener to process callback...');
      yield new Promise(resolve => setTimeout(resolve, 2000));
      return new Promise(resolve => {
        _this2.authCheckInterval = setInterval(/*#__PURE__*/(0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          attempts++;
          console.log(`🔗 Checking authentication status (${attempts}/${maxAttempts})...`);
          try {
            // Force refresh every 3rd attempt to check if tokens are ready
            const forceRefresh = attempts % 3 === 0;
            const session = yield (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__.fetchAuthSession)({
              forceRefresh
            });
            console.log(`🔗 Session check result:`, {
              hasTokens: !!session.tokens,
              hasIdToken: !!session.tokens?.idToken,
              hasAccessToken: !!session.tokens?.accessToken,
              forceRefresh
            });
            if (session.tokens?.idToken) {
              console.log('✅ Session tokens found! Verifying user...');
              try {
                // Verify user is actually authenticated
                const user = yield (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)();
                console.log('✅ User authenticated successfully!', {
                  userId: user.userId,
                  username: user.username
                });
                _this2.cleanup();
                console.log('✅ Redirecting to /home...');
                yield _this2.router.navigate(['/home']);
                resolve();
                return;
              } catch (userErr) {
                console.log('⏳ Tokens present but user not ready yet:', userErr.message || userErr);
              }
            } else {
              console.log('⏳ No tokens found yet, continuing to wait...');
            }
          } catch (err) {
            console.log(`⏳ Auth check failed (${attempts}/${maxAttempts}):`, {
              message: err.message || err,
              name: err.name,
              code: err.code
            });
          }
          // Timeout check
          if (attempts >= maxAttempts) {
            console.error('❌ Authentication timeout after', maxAttempts * 1.5, 'seconds');
            console.error('❌ OAuth callback failed to complete. This may be due to:');
            console.error('   1. Amplify OAuth listener not processing the authorization code');
            console.error('   2. Redirect URI mismatch in AWS Cognito configuration');
            console.error('   3. Network connectivity issues');
            _this2.cleanup();
            _this2.router.navigate(['/account/signup'], {
              queryParams: {
                error: 'Authentication timeout. Please try again.'
              }
            });
            resolve();
          }
        }), 1500); // Check every 1.5 seconds
      });
    })();
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
CallbackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-callback',
  standalone: true,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonText],
  template: `
      <ion-content class="ion-padding">
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
          <ion-spinner color="primary"></ion-spinner>
          <ion-text color="primary" style="margin-top: 20px;">
            <h3>Verifying your sign-in...</h3>
            <p>Please wait while we complete your authentication.</p>
          </ion-text>
        </div>
      </ion-content>`
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute])], CallbackComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_callback_callback_component_ts.js.map