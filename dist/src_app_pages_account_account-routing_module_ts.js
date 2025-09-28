(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account-routing_module_ts"],{

/***/ 12505:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/sign-out/sign-out.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15737:
/*!******************************************************************************!*\
  !*** ./src/app/pages/account/answer-challenge/answer-challenge.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnswerChallengeComponent: () => (/* binding */ AnswerChallengeComponent)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _answer_challenge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer-challenge.component.html?ngResource */ 67707);
/* harmony import */ var _answer_challenge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-challenge.component.scss?ngResource */ 20713);
/* harmony import */ var _answer_challenge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_answer_challenge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 90705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 44796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 29885);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 35135);














let AnswerChallengeComponent = class AnswerChallengeComponent {
  auth;
  router;
  titleService;
  userSrv;
  digit1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  digit2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  digit3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  digit4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
  digit1element;
  digit2element;
  digit3element;
  digit4element;
  allSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  _challengeResponse = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('');
  challengeResponse = this._challengeResponse.asObservable();
  _busy = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
  busy = this._busy.asObservable();
  constructor(auth, router, titleService, userSrv) {
    this.auth = auth;
    this.router = router;
    this.titleService = titleService;
    this.userSrv = userSrv;
  }
  ngOnInit() {
    this.resetForm();
    this.titleService.setTitle('Enter login code');
    // If the user copy and pastes the code into the first digit field
    // we'll be so kind to cut it in pieces and distribute it to the right fields
    this.allSubscriptions.add(this.digit1.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(value => {
      if (value && value.length > 1) {
        const digits = value.split('').slice(0, 4);
        this.digit1.setValue(digits[0]);
        this.digit2.setValue(digits[1]);
        this.digit3.setValue(digits[2]);
        this.digit4.setValue(digits[3]);
      }
    })).subscribe());
  }
  // Move focus to next field upon entry of a digit
  changeFocus(event, index) {
    // Exclude navigation keys
    const isDigit = event.key.match(/\d/);
    if (isDigit) {
      switch (index) {
        case 1:
          this.digit2element.nativeElement.focus();
          break;
        case 2:
          this.digit3element.nativeElement.focus();
          break;
        case 3:
          this.digit4element.nativeElement.focus();
          break;
      }
    }
  }
  ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
  ionViewDidEnter() {
    this.resetForm();
  }
  resetForm() {
    this.digit1element.nativeElement.focus();
    this.digit1.reset();
    this.digit2.reset();
    this.digit3.reset();
    this.digit4.reset();
    this._challengeResponse.next('');
  }
  submit() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._challengeResponse.next('');
      _this._busy.next(true);
      const answer = [1, 2, 3, 4].map(digit => _this[`digit${digit}`].value).join('');
      try {
        const response = yield _this.auth.answerCustomChallenge(answer);
        if (response === 'isSignedIn') {
          _this.userSrv.updateUser().subscribe();
          void _this.router.navigate(['/home']);
          _this._busy.next(false);
        } else {
          _this.resetForm();
          if (response.attempts < response.maxAttempts) {
            _this._challengeResponse.next('The code is not correct, please try again.');
          } else if (response.attempts >= response.maxAttempts) {
            void _this.router.navigate(['/account/login']);
          } else {
            _this._challengeResponse.next(response);
          }
          _this._busy.next(false);
        }
      } catch (error) {
        console.error(error.name);
        _this.resetForm();
        _this._challengeResponse.next('There was an error, please login again.');
        _this._busy.next(false);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
  }];
  static propDecorators = {
    digit1element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['digit1el', {
        static: true
      }]
    }],
    digit2element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['digit2el', {
        static: true
      }]
    }],
    digit3element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['digit3el', {
        static: true
      }]
    }],
    digit4element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['digit4el', {
        static: true
      }]
    }]
  };
};
AnswerChallengeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-answer-challenge',
  template: _answer_challenge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonChip, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_13__.IonButton, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink],
  styles: [(_answer_challenge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title, _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService])], AnswerChallengeComponent);


/***/ }),

/***/ 20713:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/account/answer-challenge/answer-challenge.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `input {
  width: 21%;
  margin: auto 2%;
  height: 50px;
  text-align: center;
  font-size: 20px;
}

#loginCode h1,
#loginCode p {
  color: #fff;
}

#loginCode ion-chip {
  background: #d2d9fd;
  --color: #4a9ed2;
  color: #05293f;
  border-radius: 4px;
  border: #0d5f88 1px solid;
  font-size: 16px;
  width: 100%;
  padding: 20px;
}

.sub-text {
  font-size: 14px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/account/answer-challenge/answer-challenge.component.scss"],"names":[],"mappings":"AACA;EACI,UAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AAAJ;;AAEA;;EAEI,WAAA;AACJ;;AACA;EACE,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;AAEF;;AAAA;EACE,eAAA;AAGF","sourcesContent":["\ninput {\n    width: 21%;\n    margin: auto 2%;\n    height: 50px;\n    text-align: center;\n    font-size: 20px;\n}\n#loginCode h1,\n#loginCode p {\n    color: #fff;\n}\n#loginCode ion-chip {\n  background: #d2d9fd;\n  --color: #4a9ed2;\n  color: #05293f;\n  border-radius: 4px;\n  border: #0d5f88 1px solid;\n  font-size: 16px;\n  width: 100%;\n  padding: 20px;\n}\n.sub-text {\n  font-size: 14px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21503:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account/sign-out/sign-out.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  Signing you out ...\n</p>\n";

/***/ }),

/***/ 35923:
/*!************************************************************!*\
  !*** ./src/app/pages/account/sign-up/sign-up.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _sign_up_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.component.html?ngResource */ 49301);
/* harmony import */ var _sign_up_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.component.scss?ngResource */ 38343);
/* harmony import */ var _sign_up_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sign_up_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 44796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 35135);












let SignUpComponent = class SignUpComponent {
  router;
  auth;
  titleService;
  route;
  signInForm;
  _busy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
  busy = this._busy.asObservable();
  _errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
  errorMessage = this._errorMessage.asObservable();
  os;
  loggedIn;
  isAgreed = false;
  showError = false;
  constructor(router, auth, titleService, route) {
    this.router = router;
    this.auth = auth;
    this.titleService = titleService;
    this.route = route;
  }
  ngOnInit() {
    this.titleService.setTitle('Register');
    this.route.queryParams.subscribe(params => {
      this.loggedIn = params.login;
    });
    this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)]),
      isAgreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue)
    });
  }
  signIn() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._busy.next(true);
      _this._errorMessage.next('');
      _this.showError = true;
      // Check if the form is valid before proceeding
      if (!_this.signInForm.valid) {
        _this._busy.next(false);
        return;
      }
      try {
        // Attempt to register the user
        const signUpResponse = yield _this.auth.signUp(_this.signInForm.controls.email.value);
        if (signUpResponse) {
          // log event in Google Analytics
        }
        // Attempt to sign the user in
        yield _this.auth.signIn(_this.signInForm.controls.email.value);
        // Clear form and navigate to the next step
        _this.signInForm.patchValue({
          email: '' // Clear the email input field
        });
        yield _this.router.navigate(['/account/enter-secret-code']);
      } catch (err) {
        if (err.name === 'UsernameExistsException') {
          yield _this.auth.signIn(_this.signInForm.controls.email.value);
          yield _this.router.navigate(['/account/enter-secret-code']);
        } else {
          _this._errorMessage.next(err.message);
          _this._busy.next(false);
        }
      }
    })();
  }
  socialSignIn(provider) {
    void this.auth.socialSignIn(provider);
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }];
};
SignUpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-sign-up',
  template: _sign_up_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonChip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonImg, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_10__.IonIcon],
  styles: [(_sign_up_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title, _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute])], SignUpComponent);


/***/ }),

/***/ 38343:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/sign-up/sign-up.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#signUp {
  --background: radial-gradient(circle, rgb(12, 80, 123) 0%, rgba(22,34,42,1) 100%);
}
#signUp h1, #signUp h2 {
  text-align: center;
}
#signUp h1, #signUp h2, #signUp h3, #signUp p, #signUp ion-checkbox {
  color: #fff;
}
#signUp ion-icon {
  padding-right: 10px;
}
#signUp .terms-text {
  font-size: 14px;
  margin-bottom: 0;
}
#signUp #logo {
  text-align: center;
  margin: 15px auto;
}
#signUp #logo ion-img {
  width: 150px;
  height: 150px;
}
#signUp .spacer {
  margin-top: 20px;
  margin-bottom: 20px;
}
#signUp p {
  margin-bottom: 10px;
}
#signUp .wrap-text {
  white-space: normal;
}
#signUp ion-toggle {
  --track-background: #ddd;
  --track-background-checked: var(--ion-color-primary);
  --handle-background: #b0b0b0;
  --handle-background-checked: #11a987;
  overflow: visible;
}
#signUp ion-input {
  background: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  --padding-start: 10px;
}
#signUp ion-button {
  margin-bottom: 20px;
}
#signUp ion-button.facebook {
  --background: #325A9F;
  --background-hover: #4877c9;
  --background-activated: #325A9F;
  --background-focused: #325A9F;
  --color: #ffffff;
}
#signUp ion-button.apple {
  --background: #FFFFFF;
  --background-hover: #BBBBBB;
  --background-activated: #FFFFFF;
  --background-focused: #FFFFFF;
  --color: #000000;
}
#signUp ion-button.google {
  --background: #4285F6;
  --background-hover: #6e9ef1;
  --background-activated: #4285F6;
  --background-focused: #4285F6;
  --color: #ffffff;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/account/sign-up/sign-up.component.scss"],"names":[],"mappings":"AAAA;EACE,iFAAA;AACF;AACE;EACE,kBAAA;AACJ;AAEE;EACE,WAAA;AAAJ;AAGE;EACE,mBAAA;AADJ;AAIE;EACE,eAAA;EACA,gBAAA;AAFJ;AAKE;EACE,kBAAA;EACA,iBAAA;AAHJ;AAKE;EACE,YAAA;EACA,aAAA;AAHJ;AAKE;EACE,gBAAA;EACA,mBAAA;AAHJ;AAME;EACE,mBAAA;AAJJ;AAOE;EACE,mBAAA;AALJ;AAQE;EACE,wBAAA;EACA,oDAAA;EACA,4BAAA;EACA,oCAAA;EACA,iBAAA;AANJ;AASE;EACE,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;AAPJ;AAUE;EACE,mBAAA;AARJ;AAUE;EACE,qBAAA;EACA,2BAAA;EACA,+BAAA;EACA,6BAAA;EACA,gBAAA;AARJ;AAUE;EACE,qBAAA;EACA,2BAAA;EACA,+BAAA;EACA,6BAAA;EACA,gBAAA;AARJ;AAUE;EACE,qBAAA;EACA,2BAAA;EACA,+BAAA;EACA,6BAAA;EACA,gBAAA;AARJ","sourcesContent":["#signUp {\n  --background: radial-gradient(circle, rgb(12, 80, 123) 0%, rgba(22,34,42,1) 100%);\n\n  h1, h2 {\n    text-align: center;\n  }\n\n  h1, h2, h3, p, ion-checkbox {\n    color: #fff;\n  }\n\n  ion-icon {\n    padding-right: 10px;\n  }\n\n  .terms-text {\n    font-size: 14px;\n    margin-bottom: 0;\n  }\n\n  #logo {\n    text-align: center;\n    margin: 15px auto;\n  }\n  #logo ion-img {\n    width: 150px;\n    height: 150px;\n  }\n  .spacer {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  p {\n    margin-bottom: 10px;\n  }\n\n  .wrap-text {\n    white-space: normal;\n  }\n\n  ion-toggle {\n    --track-background: #ddd;\n    --track-background-checked: var(--ion-color-primary);\n    --handle-background: #b0b0b0;\n    --handle-background-checked: #11a987;\n    overflow: visible;\n  }\n\n  ion-input {\n    background: #fff;\n    border-radius: 6px;\n    border: 1px solid #ddd;\n    --padding-start: 10px;\n  }\n\n  ion-button {\n    margin-bottom: 20px;\n  }\n  ion-button.facebook {\n    --background: #325A9F;\n    --background-hover: #4877c9;\n    --background-activated: #325A9F;\n    --background-focused: #325A9F;\n    --color: #ffffff;\n  }\n  ion-button.apple {\n    --background: #FFFFFF;\n    --background-hover: #BBBBBB;\n    --background-activated: #FFFFFF;\n    --background-focused: #FFFFFF;\n    --color: #000000;\n  }\n  ion-button.google {\n    --background: #4285F6;\n    --background-hover: #6e9ef1;\n    --background-activated: #4285F6;\n    --background-focused: #4285F6;\n    --color: #ffffff;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39479:
/*!************************************************************!*\
  !*** ./src/app/pages/account/sign-in/sign-in.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _sign_in_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.component.html?ngResource */ 97697);
/* harmony import */ var _sign_in_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.component.scss?ngResource */ 44171);
/* harmony import */ var _sign_in_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sign_in_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 44796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 29885);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular/standalone */ 17241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 35135);













let SignInComponent = class SignInComponent {
  router;
  auth;
  titleService;
  userSrv;
  route;
  signInForm;
  _busy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
  busy = this._busy.asObservable();
  _errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
  errorMessage = this._errorMessage.asObservable();
  os;
  constructor(router, auth, titleService, userSrv, route) {
    this.router = router;
    this.auth = auth;
    this.titleService = titleService;
    this.userSrv = userSrv;
    this.route = route;
  }
  ngOnInit() {
    this.titleService.setTitle('Login in');
    this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)])
    });
  }
  signIn() {
    var _this = this;
    return (0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._busy.next(true);
      _this._errorMessage.next('');
      try {
        // Attempt to register the user
        const signUpResponse = yield _this.auth.signUp(_this.signInForm.controls.email.value);
        if (signUpResponse) {
          // logs an event in Google Analytics
        }
        // Attempt to sign the user in
        yield _this.auth.signIn(_this.signInForm.controls.email.value);
        // Clear form and navigate to the next step
        _this.signInForm.patchValue({
          email: '' // Clear the email input field
        });
        yield _this.router.navigate(['/account/enter-secret-code']);
      } catch (err) {
        if (err.name === 'UsernameExistsException') {
          yield _this.auth.signIn(_this.signInForm.controls.email.value);
          yield _this.router.navigate(['/account/enter-secret-code']);
        } else {
          _this._errorMessage.next(err.message);
          _this._busy.next(false);
        }
      }
    })();
  }
  socialSignIn(provider) {
    console.log('Social sign-in button clicked for provider:', provider);
    // Call the auth service
    void this.auth.socialSignIn(provider);
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title
  }, {
    type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }];
};
SignInComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-sign-up',
  template: _sign_in_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
  imports: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonChip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonImg, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonIcon],
  styles: [(_sign_in_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title, _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService, _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute])], SignInComponent);


/***/ }),

/***/ 44171:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/sign-in/sign-in.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#signIn {
  --background: radial-gradient(circle, rgb(12, 80, 123) 0%, rgba(22,34,42,1) 100%);
}
#signIn h1, #signIn h2 {
  text-align: center;
}
#signIn h1, #signIn h2, #signIn h3, #signIn p, #signIn ion-checkbox {
  color: #fff;
}
#signIn #logo {
  text-align: center;
  margin: 15px auto;
}
#signIn #logo ion-img {
  width: 150px;
  height: 150px;
}
#signIn .spacer {
  margin-top: 20px;
  margin-bottom: 20px;
}
#signIn p {
  margin-bottom: 10px;
}
#signIn .wrap-text {
  white-space: normal;
}
#signIn ion-toggle {
  --track-background: #ddd;
  --track-background-checked: var(--ion-color-primary);
  --handle-background: #b0b0b0;
  --handle-background-checked: #11a987;
  overflow: visible;
}
#signIn ion-input {
  background: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  --padding-start: 10px;
}
#signIn ion-button {
  margin-bottom: 20px;
}
#signIn ion-button.facebook {
  --background: #325A9F;
  --background-hover: #4877c9;
  --background-activated: #325A9F;
  --background-focused: #325A9F;
  --color: #ffffff;
}
#signIn ion-button.apple {
  --background: #FFFFFF;
  --background-hover: #BBBBBB;
  --background-activated: #FFFFFF;
  --background-focused: #FFFFFF;
  --color: #000000;
}
#signIn ion-button.google {
  --background: #4285F6;
  --background-hover: #6e9ef1;
  --background-activated: #4285F6;
  --background-focused: #4285F6;
  --color: #ffffff;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/account/sign-in/sign-in.component.scss"],"names":[],"mappings":"AAAA;EACE,iFAAA;AACF;AACE;EACE,kBAAA;AACJ;AAEE;EACE,WAAA;AAAJ;AAGE;EACE,kBAAA;EACA,iBAAA;AADJ;AAGE;EACE,YAAA;EACA,aAAA;AADJ;AAGE;EACE,gBAAA;EACA,mBAAA;AADJ;AAIE;EACE,mBAAA;AAFJ;AAKE;EACE,mBAAA;AAHJ;AAME;EACE,wBAAA;EACA,oDAAA;EACA,4BAAA;EACA,oCAAA;EACA,iBAAA;AAJJ;AAOE;EACE,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;AALJ;AAQE;EACE,mBAAA;AANJ;AAQE;EACE,qBAAA;EACA,2BAAA;EACA,+BAAA;EACA,6BAAA;EACA,gBAAA;AANJ;AAQE;EACE,qBAAA;EACA,2BAAA;EACA,+BAAA;EACA,6BAAA;EACA,gBAAA;AANJ;AAQE;EACE,qBAAA;EACA,2BAAA;EACA,+BAAA;EACA,6BAAA;EACA,gBAAA;AANJ","sourcesContent":["#signIn {\n  --background: radial-gradient(circle, rgb(12, 80, 123) 0%, rgba(22,34,42,1) 100%);\n\n  h1, h2 {\n    text-align: center;\n  }\n\n  h1, h2, h3, p, ion-checkbox {\n    color: #fff;\n  }\n\n  #logo {\n    text-align: center;\n    margin: 15px auto;\n  }\n  #logo ion-img {\n    width: 150px;\n    height: 150px;\n  }\n  .spacer {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  p {\n    margin-bottom: 10px;\n  }\n\n  .wrap-text {\n    white-space: normal;\n  }\n\n  ion-toggle {\n    --track-background: #ddd;\n    --track-background-checked: var(--ion-color-primary);\n    --handle-background: #b0b0b0;\n    --handle-background-checked: #11a987;\n    overflow: visible;\n  }\n\n  ion-input {\n    background: #fff;\n    border-radius: 6px;\n    border: 1px solid #ddd;\n    --padding-start: 10px;\n  }\n\n  ion-button {\n    margin-bottom: 20px;\n  }\n  ion-button.facebook {\n    --background: #325A9F;\n    --background-hover: #4877c9;\n    --background-activated: #325A9F;\n    --background-focused: #325A9F;\n    --color: #ffffff;\n  }\n  ion-button.apple {\n    --background: #FFFFFF;\n    --background-hover: #BBBBBB;\n    --background-activated: #FFFFFF;\n    --background-focused: #FFFFFF;\n    --color: #000000;\n  }\n  ion-button.google {\n    --background: #4285F6;\n    --background-hover: #6e9ef1;\n    --background-activated: #4285F6;\n    --background-focused: #4285F6;\n    --color: #ffffff;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49301:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/sign-up/sign-up.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\" id=\"signUp\">\n\n  <ion-row>\n    <ion-col size-sm=\"4\" offset-sm=\"4\" id=\"logo\">\n      <ion-img src=\"./assets/happyme-app-logo.svg\" alt=\"HappyMe\" class=\"center\"></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size-sm=\"4\" offset-sm=\"4\">\n      <h1>Welcome to HappyMe</h1>\n\n      <h2>Sign up for free, no obligation</h2>\n\n      <hr>\n\n      <ion-list>\n        <ion-item color=\"secondary\">\n          <ion-icon name=\"checkbox-outline\" color=\"dark\"></ion-icon>\n          FREE access to all content for 7 Days\n        </ion-item>\n        <ion-item color=\"secondary\">\n          <ion-icon name=\"checkbox-outline\" color=\"dark\"></ion-icon>\n          Personalised Daily Routine\n        </ion-item>\n        <ion-item color=\"secondary\">\n          <ion-icon name=\"checkbox-outline\" color=\"dark\"></ion-icon>\n          Developed by Professional Therapists\n        </ion-item>\n      </ion-list>\n\n      <hr>\n\n      <ion-chip color=\"danger\" *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</ion-chip>\n\n      <p>Enter your email to start</p>\n\n      <form (ngSubmit)=\"signIn()\" [formGroup]=\"signInForm\">\n        <ion-input\n          label=\"Enter your email address\"\n          labelPlacement=\"floating\"\n          type=\"email\"\n          formControlName=\"email\"\n          email\n          name=\"email\">\n        </ion-input>\n        <ion-chip color=\"danger\" *ngIf=\"signInForm.controls['email'].invalid && signInForm.controls['email']?.touched\">\n          <ion-label>Please enter your email</ion-label>\n        </ion-chip>\n\n        <hr>\n\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"google\" (click)=\"socialSignIn('Google')\">\n              <ion-icon name=\"logo-google\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"facebook\" (click)=\"socialSignIn('Facebook')\">\n              <ion-icon name=\"logo-facebook\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"apple\" (click)=\"socialSignIn('Apple')\">\n              <ion-icon name=\"logo-apple\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <hr>\n        <ion-checkbox\n          justify=\"start\"\n          labelPlacement=\"end\"\n          formControlName=\"isAgreed\">\n          I agree to the Terms and Conditions\n        </ion-checkbox>\n\n        <ion-chip color=\"danger\" *ngIf=\"signInForm.controls['isAgreed']?.invalid && (signInForm.controls['isAgreed']?.touched || showError)\">\n          You must agree to the terms to continue\n        </ion-chip>\n\n        <p class=\"terms-text\">\n          By creating an account, you acknowledge that you have read and agree to the\n          <a href=\"https://www.myhappyme.co.uk/terms-of-service\" target=\"_blank\" rel=\"noopener\">Terms of Service</a>\n          and the\n          <a href=\"https://www.myhappyme.co.uk/privacy-policy\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a>.\n        </p>\n\n        <ion-button color=\"primary\" type=\"submit\" expand=\"block\" [disabled]=\"(busy | async)\">\n          <div *ngIf=\"!(busy | async) || !signInForm.valid\">\n            Continue\n          </div>\n          <div *ngIf=\"busy | async\">\n            Please wait\n          </div>\n        </ion-button>\n      </form>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";

/***/ }),

/***/ 61157:
/*!**************************************************************!*\
  !*** ./src/app/pages/account/sign-out/sign-out.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignOutComponent: () => (/* binding */ SignOutComponent)
/* harmony export */ });
/* harmony import */ var _Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _sign_out_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-out.component.html?ngResource */ 21503);
/* harmony import */ var _sign_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-out.component.scss?ngResource */ 12505);
/* harmony import */ var _sign_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sign_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ 44796);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 80436);








let SignOutComponent = class SignOutComponent {
  auth;
  router;
  titleService;
  constructor(auth, router, titleService) {
    this.auth = auth;
    this.router = router;
    this.titleService = titleService;
  }
  ngOnInit() {
    var _this = this;
    this.titleService.setTitle('Logout');
    this.auth.signOut().then(/*#__PURE__*/(0,_Users_t_r_a_v_s_Software_cognito_capacitor_login_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      void _this.router.navigate(['/']);
    }));
  }
  static ctorParameters = () => [{
    type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title
  }];
};
SignOutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-sign-out',
  template: _sign_out_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
  standalone: true,
  styles: [(_sign_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title])], SignOutComponent);


/***/ }),

/***/ 67707:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/account/answer-challenge/answer-challenge.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\" id=\"loginCode\">\n  <ion-row>\n    <ion-col size-md=\"8\" offset-md=\"2\" size-lg=\"6\" offset-lg=\"3\">\n      <h1>Confirmation Code</h1>\n      <p>We've <strong>emailed</strong> you a secret code. Please enter it below.</p>\n\n      <div *ngIf=\"challengeResponse | async\">\n        <ion-chip>\n          <div>{{ challengeResponse | async }}</div>\n        </ion-chip>\n      </div>\n\n      <form>\n        <label>\n          <input [formControl]=\"digit1\" #digit1el type=\"tel\" pattern=\"\\d*\" (keyup)=\"changeFocus($event, 1)\">\n        </label>\n        <label>\n          <input [formControl]=\"digit2\" #digit2el type=\"tel\" pattern=\"\\d\" maxlength=\"1\" (keyup)=\"changeFocus($event, 2)\">\n        </label>\n        <label>\n          <input [formControl]=\"digit3\" #digit3el type=\"tel\" pattern=\"\\d\" maxlength=\"1\" (keyup)=\"changeFocus($event, 3)\">\n        </label>\n        <label>\n          <input [formControl]=\"digit4\" #digit4el type=\"tel\" pattern=\"\\d\" maxlength=\"1\">\n        </label>\n      </form>\n\n      <p class=\"sub-text\">If it doesn't arrive within a couple of minutes check your Junk Folder</p>\n\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        (click)=\"submit()\"\n        [disabled]=\"(busy | async)\">\n        <div *ngIf=\"!(busy | async)\">CONTINUE</div>\n        <div *ngIf=\"busy | async\">PLEASE WAIT</div>\n      </ion-button>\n\n      <ion-button  *ngIf=\"challengeResponse | async\"  routerLink=\"/account/login\" router-direction=\"back\" expand=\"block\" fill=\"outline\">\n        Return to LOGIN\n      </ion-button>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ }),

/***/ 87191:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountRoutingModule: () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 90705);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth.guard */ 82193);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 35923);
/* harmony import */ var _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-out/sign-out.component */ 61157);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 39479);
/* harmony import */ var _answer_challenge_answer_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./answer-challenge/answer-challenge.component */ 15737);








const routes = [{
  path: 'login',
  component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsNotAuthenticated]
}, {
  path: 'register',
  component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsNotAuthenticated]
}, {
  path: 'logout',
  component: _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__.SignOutComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsAuthenticated]
}, {
  path: 'enter-secret-code',
  component: _answer_challenge_answer_challenge_component__WEBPACK_IMPORTED_MODULE_4__.AnswerChallengeComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.IsNotAuthenticated]
}];
let AccountRoutingModule = class AccountRoutingModule {};
AccountRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], AccountRoutingModule);


/***/ }),

/***/ 97697:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/sign-in/sign-in.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\" id=\"signIn\">\n\n  <ion-row>\n    <ion-col size-sm=\"4\" offset-sm=\"4\" id=\"logo\">\n      <ion-img src=\"./assets/happyme-app-logo.svg\" alt=\"HappyMe\" class=\"center\"></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size-sm=\"4\" offset-sm=\"4\">\n      <h1>Welcome Back</h1>\n\n      <p>Login to continue your happiness journey...</p>\n\n      <ion-chip color=\"danger\" *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</ion-chip>\n\n      <form (ngSubmit)=\"signIn()\" [formGroup]=\"signInForm\">\n        <ion-input\n          label=\"Enter your Email\"\n          labelPlacement=\"floating\"\n          type=\"email\"\n          formControlName=\"email\"\n          email\n          name=\"email\">\n        </ion-input>\n        <ion-chip color=\"danger\" *ngIf=\"signInForm.controls['email'].invalid && signInForm.controls['email']?.touched\">\n          <ion-label>Please enter your email</ion-label>\n        </ion-chip>\n\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"google\" (click)=\"socialSignIn('Google')\">\n              <ion-icon name=\"logo-google\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"facebook\" (click)=\"socialSignIn('Facebook')\">\n              <ion-icon name=\"logo-facebook\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"apple\" (click)=\"socialSignIn('Apple')\">\n              <ion-icon name=\"logo-apple\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-button color=\"primary\" type=\"submit\" expand=\"block\" [disabled]=\"!signInForm.valid || (busy | async)\">\n          <div *ngIf=\"!(busy | async) || !signInForm.valid\">\n            Continue\n          </div>\n          <div *ngIf=\"busy | async\">\n            Please wait\n          </div>\n        </ion-button>\n      </form>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account-routing_module_ts.js.map