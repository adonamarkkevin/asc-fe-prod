(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module"], {
    /***/
    "0Qv6":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.module.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ResetPasswordLandingPageModule */

    /***/
    function Qv6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordLandingPageModule", function () {
        return ResetPasswordLandingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _reset_password_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password-landing-page-routing.module */
      "2BzS");
      /* harmony import */


      var _reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reset-password-landing-page.component */
      "Amo0");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var ResetPasswordLandingPageModule = /*#__PURE__*/_createClass(function ResetPasswordLandingPageModule() {
        _classCallCheck(this, ResetPasswordLandingPageModule);
      });

      ResetPasswordLandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordLandingPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reset_password_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordLandingPageRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]],
        exports: [_reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordLandingPageComponent"]]
      })], ResetPasswordLandingPageModule);
      /***/
    },

    /***/
    "1Hf4":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--Main Navigation-->\r\n<header>\r\n    <!--Navbar-->\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark primary-color fixed-top\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Navbar brand -->\r\n            <a class=\"navbar-brand\">\r\n                <img src=\"../../../../assets/images/asc-logo.jpg\" alt=\"\">\r\n            </a>\r\n        </div>\r\n    </nav>\r\n    <!-- Navbar -->\r\n    <!--Mask-->\r\n    <div id=\"intro\" class=\"view\">\r\n        <div class=\"mask\">\r\n        </div>\r\n    </div>\r\n    <!-- Mask-->\r\n\r\n</header>\r\n<!--Main Navigation-->\r\n<!--Main layout-->\r\n<main>\r\n    <div class=\"spinner\">\r\n        <ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"large\" color=\"#fff\" type=\"line-spin-fade\" [fullScreen]=\"true\">\r\n            <p> Logging in... </p>\r\n        </ngx-spinner>\r\n    </div>\r\n    <div class=\"photo-slider\">\r\n        <img src=\"../../../../assets/images/cover-photo/cover-photo.jpg\" alt=\"\">\r\n        <hr>\r\n        <p class=\"text-title\">\r\n            Sample Title\r\n        </p>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, saepe quia id iure, beatae porro itaque\r\n            iusto\r\n            voluptatem neque obcaecati aliquid adipisci quos quae totam impedit eaque corrupti mollitia suscipit?\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vero ullam. Ex saepe quo molestiae,\r\n            assumenda labore\r\n            possimus, praesentium ipsum non voluptatum quia expedita rerum dicta iusto dolorum quidem laboriosam?\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vero ullam. Ex saepe quo molestiae,\r\n            assumenda labore\r\n            possimus, praesentium ipsum non voluptatum quia expedita rerum dicta iusto dolorum quidem laboriosam?\r\n        </p>\r\n    </div>\r\n    <mat-card class=\"mat-elevation-z8\" id=\"login\">\r\n        <mat-card-header>\r\n            <mat-card-title>\r\n                <div class=\"image-holder\">\r\n                    <img src=\"../../../../assets/images/asc-logo.jpg\" alt=\"\">\r\n                </div>\r\n            </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <span *ngIf=\"isShowUpdatePassword\">\r\n                <ng-container *ngTemplateOutlet=\"createNewPassword\"></ng-container>\r\n            </span>\r\n\r\n\r\n\r\n\r\n\r\n            <br>\r\n            <div class=\"login-action\">\r\n                <button mat-raised-button (click)=\"submitNewPassword()\" color=\"primary\"\r\n                    [disabled]=\"!newPassword || newPassword !== confirmNewPassword\" *ngIf=\"isShowUpdatePassword\">\r\n                    Continue\r\n                </button>\r\n                <button mat-raised-button (click)=\"goToLogin()\" color=\"primary\" *ngIf=\"!isShowUpdatePassword\">\r\n                    Go to Login Page\r\n                </button>\r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n</main>\r\n<!--Main layout-->\r\n<!--Footer-->\r\n<footer>\r\n    <div class=\"footer-nav\">\r\n        <ul>\r\n            <li>Terms and Conditions</li>\r\n            <li>Privacy Policy</li>\r\n            <li>Inquiry</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"footer-details\">\r\n        <span>Ad Standards Council - Screening System -v 2.0<br>\r\n            &copy; 2022. Ad Standards Council</span>\r\n    </div>\r\n</footer>\r\n<!--Footer-->\r\n\r\n\r\n<ng-template #createNewPassword>\r\n    <form [formGroup]=\"passwordFormatChecker\">\r\n        <table>\r\n            <tr>\r\n                <td>\r\n                    <h1>\r\n                        <b>\r\n                            Reset Password\r\n                        </b>\r\n                    </h1>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <br>\r\n                    <mat-form-field class=\"form-field\">\r\n                        <input matInput placeholder=\"Username\" id=\"username\" [(ngModel)]=\"username\" name=\"username\"\r\n                            formControlName=\"username\" readonly>\r\n                    </mat-form-field>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <mat-form-field class=\"form-field\">\r\n                        <input matInput [type]=\"hideNewPassword ? 'password' : 'text'\" placeholder=\"New Password\"\r\n                            id=\"newPassword\" [(ngModel)]=\"newPassword\" type=\"password\" name=\"newPassword\"\r\n                            formControlName=\"newPassword\">\r\n                        <button type=\"button\" mat-icon-button matSuffix (click)=\"hideNewPassword = !hideNewPassword\"\r\n                            [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideNewPassword\">\r\n                            <mat-icon>{{hideNewPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                        </button>\r\n                    </mat-form-field>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <mat-form-field class=\"form-field\">\r\n                        <input matInput [type]=\"hideConfirmNewPassword ? 'password' : 'text'\"\r\n                            placeholder=\"Confirm New Password\" id=\"password\" [(ngModel)]=\"confirmNewPassword\"\r\n                            type=\"password\" name=\"confirmNewPassword\" formControlName=\"confirmNewPassword\">\r\n                        <button type=\"button\" mat-icon-button matSuffix\r\n                            (click)=\"hideConfirmNewPassword = !hideConfirmNewPassword\"\r\n                            [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideConfirmNewPassword\">\r\n                            <mat-icon>{{hideConfirmNewPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                        </button>\r\n                    </mat-form-field>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </form>\r\n    <div *ngIf=\"passwordFormatChecker.get('newPassword').dirty && passwordFormatChecker.controls['newPassword'].errors\"\r\n        class=\"warning-message\">\r\n        <mat-icon>warning</mat-icon>\r\n        Password must be at least 8 characters long and must contain a number, lower case and upper case\r\n        characters.\r\n    </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "2BzS":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page-routing.module.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: ResetPasswordLandingPageRoutingModule */

    /***/
    function BzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordLandingPageRoutingModule", function () {
        return ResetPasswordLandingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password-landing-page.component */
      "Amo0");

      var routes = [{
        path: '',
        component: _reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordLandingPageComponent"]
      }];

      var ResetPasswordLandingPageRoutingModule = /*#__PURE__*/_createClass(function ResetPasswordLandingPageRoutingModule() {
        _classCallCheck(this, ResetPasswordLandingPageRoutingModule);
      });

      ResetPasswordLandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPasswordLandingPageRoutingModule);
      /***/
    },

    /***/
    "Amo0":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ResetPasswordLandingPageComponent */

    /***/
    function Amo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordLandingPageComponent", function () {
        return ResetPasswordLandingPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_landing_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password-landing-page.component.html */
      "1Hf4");
      /* harmony import */


      var _reset_password_landing_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password-landing-page.component.scss */
      "sm+l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/services/encr-decr-service.service */
      "CHq8");

      var ResetPasswordLandingPageComponent = /*#__PURE__*/function () {
        function ResetPasswordLandingPageComponent(apiService, sweetAlertService, route, router, formBuilder, EncrDecr) {
          _classCallCheck(this, ResetPasswordLandingPageComponent);

          this.apiService = apiService;
          this.sweetAlertService = sweetAlertService;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.EncrDecr = EncrDecr;
          this.verificationCode = '';
          this.username = '';
          this.newPassword = '';
          this.confirmNewPassword = '';
          this.hideNewPassword = true;
          this.hideConfirmNewPassword = true;
        }

        _createClass(ResetPasswordLandingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.verificationCode = this.route.snapshot.paramMap.get('code');
            this.username = this.route.snapshot.paramMap.get('username');
            this.username = this.EncrDecr.get(this.username.replace(new RegExp('-', 'g'), '/'));
            this.setFormValidator();

            if (this.verificationCode) {
              this.validateVerificationCode();
            }
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.passwordFormatChecker = this.formBuilder.group({
              username: [''],
              newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
              confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "validateVerificationCode",
          value: function validateVerificationCode() {
            var _this = this;

            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].forgotPasswordVerification, this.verificationCode).subscribe(function (res) {
              _this.isShowUpdatePassword = true;

              if (!_this.isShowUpdatePassword) {
                _this.sweetAlertService.customErrorMessage('Invalid verification code!');
              }
            });
          }
        }, {
          key: "submitNewPassword",
          value: function submitNewPassword() {
            var _this2 = this;

            var account = {
              username: this.username,
              password: this.newPassword
            };
            this.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].newPasswordVerification, "/").concat(this.verificationCode, "/new-password/"), account).subscribe(function (res) {
              console.log(res);

              _this2.sweetAlertService.success(res, 5);

              setTimeout(function () {
                _this2.goToLogin();
              }, 5000);
            }, function (err) {
              _this2.sweetAlertService.error(err);
            });
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['/login']);
          }
        }]);

        return ResetPasswordLandingPageComponent;
      }();

      ResetPasswordLandingPageComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: app_core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_8__["EncrDecrService"]
        }];
      };

      ResetPasswordLandingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password-landing-page',
        template: _raw_loader_reset_password_landing_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_landing_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetPasswordLandingPageComponent);
      /***/
    },

    /***/
    "sm+l":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.component.scss ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function smL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  background: linear-gradient(180deg, #fb9696, transparent);\n}\n\n.landing-page {\n  padding: 2em;\n}\n\nimg {\n  height: 3em;\n}\n\n.navbar {\n  background-color: white;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  font-weight: 500;\n  padding: 1em 0.3em;\n}\n\nfooter ul,\nfooter li {\n  vertical-align: middle;\n  display: flex;\n  text-decoration: underline;\n  padding: 0em 1em;\n}\n\nfooter li:hover {\n  cursor: pointer;\n}\n\nfooter .footer-nav {\n  float: left;\n}\n\nfooter .footer-details {\n  float: right;\n}\n\nhtml,\nbody,\nheader,\n#intro {\n  height: 100%;\n}\n\n#intro {\n  background: url('login-bg.png') no-repeat center center fixed;\n  background-size: cover !important;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: black;\n}\n\n.fixed-top {\n  z-index: 1 !important;\n}\n\n.mat-card-header {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: gray;\n  z-index: 9;\n}\n\n.photo-slider {\n  display: none;\n}\n\nmat-card {\n  min-width: 27em;\n  max-width: 50vw;\n  position: fixed;\n  top: 45%;\n  right: 10%;\n  transform: translate(-10%, -40%);\n  overflow: auto;\n  border-radius: 10px;\n}\n\nmat-card img {\n  width: 10em;\n}\n\n.mat-card > .mat-card-actions:last-child {\n  text-align: center;\n}\n\n.form-field {\n  width: 75%;\n}\n\nform {\n  margin-top: 0 !important;\n}\n\ntable {\n  width: 100%;\n}\n\ntable td {\n  text-align: center;\n}\n\nhr {\n  color: black;\n}\n\n.login-action {\n  width: 100%;\n  text-align: center;\n}\n\n.login-action button {\n  width: 100%;\n  margin: 0 0.5em;\n}\n\n.login-action .register__button {\n  box-shadow: none;\n  color: #1e88e5;\n  border: 1px solid #1e88e5;\n}\n\n.login-action {\n  max-height: 50vh !important;\n}\n\n.forgot-password {\n  text-align: center;\n  font-size: 12px;\n  color: gray;\n  margin: 10px 0px;\n}\n\n.forgot-password:hover {\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  transition: 1000ms;\n}\n\n::ng-deep mat-tab-group .mat-tab-label {\n  min-width: 100px !important;\n}\n\n@media (min-width: 800px) {\n  mat-card {\n    right: 5%;\n  }\n\n  .photo-slider {\n    display: block;\n    margin: 0.5em;\n    background-color: white;\n    height: 65%;\n    width: 40%;\n    position: fixed;\n    top: 43%;\n    left: 9%;\n    transform: translate(-10%, -40%);\n    overflow: hidden;\n    border-radius: 10px;\n    padding: 2em;\n  }\n  .photo-slider img {\n    height: 80%;\n    width: 100%;\n  }\n  .photo-slider .text-info {\n    height: 20%;\n    width: 100%;\n  }\n  .photo-slider p.text-title {\n    font-weight: 600;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 1000px) {\n  mat-card {\n    right: 3%;\n  }\n\n  .photo-slider {\n    height: 75%;\n    width: 50%;\n    left: 11%;\n  }\n}\n\n@media (min-width: 1300px) {\n  mat-card {\n    right: 3%;\n  }\n\n  .photo-slider {\n    height: 75%;\n    width: 60%;\n    left: 11%;\n  }\n}\n\n@media (min-width: 1700px) {\n  mat-card {\n    right: 4%;\n  }\n\n  .photo-slider {\n    height: 75%;\n    width: 65%;\n    left: 11%;\n  }\n}\n\n.warning-message {\n  color: red;\n  text-align: justify;\n  text-justify: inter-word;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  padding: 0 16px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvbG9naW4vZm9yZ290LXBhc3Nvd3JkL3Jlc2V0LXBhc3N3b3JkLWxhbmRpbmctcGFnZS9yZXNldC1wYXNzd29yZC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUlBO0VBQ0ksdUJBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJOztFQUVJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFLSTtFQUNJLGVBQUE7QUFIUjs7QUFNSTtFQUNJLFdBQUE7QUFKUjs7QUFPSTtFQUNJLFlBQUE7QUFMUjs7QUFVQTs7OztFQUlJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLDZEQUFBO0VBSUEsaUNBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLHFCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUEo7O0FBaUJBO0VBQ0ksYUFBQTtBQWRKOztBQWlCQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFnQkk7RUFDSSxXQUFBO0FBZFI7O0FBa0JBO0VBQ0ksa0JBQUE7QUFmSjs7QUFrQkE7RUFDSSxVQUFBO0FBZko7O0FBa0JBO0VBQ0ksd0JBQUE7QUFmSjs7QUFrQkE7RUFDSSxXQUFBO0FBZko7O0FBaUJJO0VBQ0ksa0JBQUE7QUFmUjs7QUFtQkE7RUFDSSxZQUFBO0FBaEJKOztBQW1CQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQWhCSjs7QUFrQkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQWhCUjs7QUFtQkk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWpCUjs7QUFxQkE7RUFDSSwyQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFsQko7O0FBcUJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbEJKOztBQXNCSTtFQUNJLDJCQUFBO0FBbkJSOztBQTZCQTtFQUNJO0lBQ0ksU0FBQTtFQTFCTjs7RUE2QkU7SUFDSSxjQUFBO0lBRUEsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFFQSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBM0JOO0VBNkJNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUEzQlY7RUE4Qk07SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQTVCVjtFQWdDVTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQTlCZDtBQUNGOztBQW1DQTtFQUNJO0lBQ0ksU0FBQTtFQWpDTjs7RUFvQ0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFqQ047QUFDRjs7QUFvQ0E7RUFDSTtJQUNJLFNBQUE7RUFsQ047O0VBcUNFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBbENOO0FBQ0Y7O0FBc0NBO0VBQ0k7SUFDSSxTQUFBO0VBcENOOztFQXVDRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXBDTjtBQUNGOztBQXVDQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvbG9naW4vZm9yZ290LXBhc3Nvd3JkL3Jlc2V0LXBhc3N3b3JkLWxhbmRpbmctcGFnZS9yZXNldC1wYXNzd29yZC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYjk2OTYsIHRyYW5zcGFyZW50KTtcclxufVxyXG5cclxuLmxhbmRpbmctcGFnZSB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDAgMWVtO1xyXG59XHJcblxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjNlbTtcclxuXHJcbiAgICB1bCxcclxuICAgIGxpIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgcGFkZGluZzogMGVtIDFlbTtcclxuICAgIH1cclxuXHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbmF2IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWRldGFpbHMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmhlYWRlcixcclxuI2ludHJvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2ludHJvIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmcucG5nXCIpbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5maXhlZC10b3Age1xyXG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4vLyBtYXQtaWNvbiB7XHJcbi8vICAgICBoZWlnaHQ6IDFlbTtcclxuLy8gICAgIHdpZHRoOiAxZW07XHJcbi8vICAgICBmb250LXNpemU6IDVlbTtcclxuLy8gfVxyXG5cclxuXHJcbi5waG90by1zbGlkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAyN2VtO1xyXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAtNDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMCUsIC00MCUpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxvZ2luLWFjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXJfX2J1dHRvbiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzFlODhlNTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWU4OGU1O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tYWN0aW9uIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRyYW5zaXRpb246IDEwMDBtcztcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIG1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudC5yZW1lbWJlci1tZS1jaGVjay1ib3ggLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6ODAwcHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICByaWdodDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBob3RvLXNsaWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NSU7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA0MyU7XHJcbiAgICAgICAgbGVmdDogOSU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAtNDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAtNDAlKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMmVtO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1pbmZvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICYudGV4dC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjEwMDBweCkge1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIHJpZ2h0OiAzJTtcclxuICAgIH1cclxuXHJcbiAgICAucGhvdG8tc2xpZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDExJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxMzAwcHgpIHtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICByaWdodDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBob3RvLXNsaWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBsZWZ0OiAxMSU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjE3MDBweCkge1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgIH1cclxuXHJcbiAgICAucGhvdG8tc2xpZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIGxlZnQ6IDExJTtcclxuICAgIH1cclxufVxyXG5cclxuLndhcm5pbmctbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module-es5.js.map