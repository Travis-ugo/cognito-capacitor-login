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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify/auth */ 58586);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);






let CallbackComponent = class CallbackComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Downloads_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const isSignedIn = yield (0,aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__.fetchAuthSession)();
        _this.router.navigate([isSignedIn ? '/home' : '/account/login']);
      } catch {
        _this.router.navigate(['/']);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
CallbackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-callback',
  standalone: true,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonSpinner],
  template: `
      <ion-content class="ion-padding">
        <ion-spinner color="light"></ion-spinner>
      </ion-content>`
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router])], CallbackComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_callback_callback_component_ts.js.map