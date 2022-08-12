(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module"],{

/***/ "0Qv6":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ResetPasswordLandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordLandingPageModule", function() { return ResetPasswordLandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reset_password_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-landing-page-routing.module */ "2BzS");
/* harmony import */ var _reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password-landing-page.component */ "Amo0");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");






let ResetPasswordLandingPageModule = /*@__PURE__*/ (() => {
    class ResetPasswordLandingPageModule {
    }
    ResetPasswordLandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResetPasswordLandingPageModule });
    ResetPasswordLandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResetPasswordLandingPageModule_Factory(t) { return new (t || ResetPasswordLandingPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reset_password_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordLandingPageRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            ]] });
    return ResetPasswordLandingPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetPasswordLandingPageModule, { declarations: [_reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordLandingPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reset_password_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordLandingPageRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]], exports: [_reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordLandingPageComponent"]] });
})();



/***/ }),

/***/ "2BzS":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page-routing.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ResetPasswordLandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordLandingPageRoutingModule", function() { return ResetPasswordLandingPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-landing-page.component */ "Amo0");





const routes = [
    {
        path: '',
        component: _reset_password_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordLandingPageComponent"]
    }
];
let ResetPasswordLandingPageRoutingModule = /*@__PURE__*/ (() => {
    class ResetPasswordLandingPageRoutingModule {
    }
    ResetPasswordLandingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResetPasswordLandingPageRoutingModule });
    ResetPasswordLandingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResetPasswordLandingPageRoutingModule_Factory(t) { return new (t || ResetPasswordLandingPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ResetPasswordLandingPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetPasswordLandingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "Amo0":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ResetPasswordLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordLandingPageComponent", function() { return ResetPasswordLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/services/encr-decr-service.service */ "CHq8");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function ResetPasswordLandingPageComponent_span_25_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
    }
}
function ResetPasswordLandingPageComponent_span_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordLandingPageComponent_span_25_ng_container_1_Template, 1, 0, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    }
}
function ResetPasswordLandingPageComponent_button_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordLandingPageComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.submitNewPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.newPassword || ctx_r1.newPassword !== ctx_r1.confirmNewPassword);
    }
}
function ResetPasswordLandingPageComponent_button_29_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordLandingPageComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go to Login Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ResetPasswordLandingPageComponent_ng_template_44_div_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Password must be at least 8 characters long and must contain a number, lower case and upper case characters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ResetPasswordLandingPageComponent_ng_template_44_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordLandingPageComponent_ng_template_44_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordLandingPageComponent_ng_template_44_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordLandingPageComponent_ng_template_44_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.hideNewPassword = !ctx_r14.hideNewPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordLandingPageComponent_ng_template_44_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.confirmNewPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordLandingPageComponent_ng_template_44_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.hideConfirmNewPassword = !ctx_r16.hideConfirmNewPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ResetPasswordLandingPageComponent_ng_template_44_div_26_Template, 4, 0, "div", 29);
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.passwordFormatChecker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.hideNewPassword ? "password" : "text")("ngModel", ctx_r4.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r4.hideNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.hideNewPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r4.hideConfirmNewPassword ? "password" : "text")("ngModel", ctx_r4.confirmNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r4.hideConfirmNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.hideConfirmNewPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passwordFormatChecker.get("newPassword").dirty && ctx_r4.passwordFormatChecker.controls["newPassword"].errors);
    }
}
let ResetPasswordLandingPageComponent = /*@__PURE__*/ (() => {
    class ResetPasswordLandingPageComponent {
        constructor(apiService, sweetAlertService, route, router, formBuilder, EncrDecr) {
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
        ngOnInit() {
            this.verificationCode = this.route.snapshot.paramMap.get('code');
            this.username = this.route.snapshot.paramMap.get('username');
            this.username = this.EncrDecr.get(this.username.replace(new RegExp('-', 'g'), '/'));
            this.setFormValidator();
            if (this.verificationCode) {
                this.validateVerificationCode();
            }
        }
        setFormValidator() {
            this.passwordFormatChecker = this.formBuilder.group({
                username: [''],
                newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        validateVerificationCode() {
            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].forgotPasswordVerification, this.verificationCode).subscribe(res => {
                this.isShowUpdatePassword = true;
                if (!this.isShowUpdatePassword) {
                    this.sweetAlertService.customErrorMessage('Invalid verification code!');
                }
            });
        }
        submitNewPassword() {
            const account = {
                username: this.username,
                password: this.newPassword
            };
            this.apiService.save(`${_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].newPasswordVerification}/${this.verificationCode}/new-password/`, account).subscribe(res => {
                console.log(res);
                this.sweetAlertService.success(res, 5);
                setTimeout(() => {
                    this.goToLogin();
                }, 5000);
            }, err => {
                this.sweetAlertService.error(err);
            });
        }
        goToLogin() {
            this.router.navigate(['/login']);
        }
    }
    ResetPasswordLandingPageComponent.ɵfac = function ResetPasswordLandingPageComponent_Factory(t) { return new (t || ResetPasswordLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_5__["EncrDecrService"])); };
    ResetPasswordLandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordLandingPageComponent, selectors: [["app-reset-password-landing-page"]], decls: 46, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "primary-color", "fixed-top"], [1, "container-fluid"], [1, "navbar-brand"], ["src", "../../../../assets/images/asc-logo.jpg", "alt", ""], ["id", "intro", 1, "view"], [1, "mask"], [1, "spinner"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "large", "color", "#fff", "type", "line-spin-fade", 3, "fullScreen"], [1, "photo-slider"], ["src", "../../../../assets/images/cover-photo/cover-photo.jpg", "alt", ""], [1, "text-title"], ["id", "login", 1, "mat-elevation-z8"], [1, "image-holder"], [4, "ngIf"], [1, "login-action"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "footer-nav"], [1, "footer-details"], ["createNewPassword", ""], [4, "ngTemplateOutlet"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "formGroup"], [1, "form-field"], ["matInput", "", "placeholder", "Username", "id", "username", "name", "username", "formControlName", "username", "readonly", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "New Password", "id", "newPassword", "type", "password", "name", "newPassword", "formControlName", "newPassword", 3, "type", "ngModel", "ngModelChange"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Confirm New Password", "id", "password", "type", "password", "name", "confirmNewPassword", "formControlName", "confirmNewPassword", 3, "type", "ngModel", "ngModelChange"], ["class", "warning-message", 4, "ngIf"], [1, "warning-message"]], template: function ResetPasswordLandingPageComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-spinner", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Logging in... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sample Title ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, saepe quia id iure, beatae porro itaque iusto voluptatem neque obcaecati aliquid adipisci quos quae totam impedit eaque corrupti mollitia suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vero ullam. Ex saepe quo molestiae, assumenda labore possimus, praesentium ipsum non voluptatum quia expedita rerum dicta iusto dolorum quidem laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vero ullam. Ex saepe quo molestiae, assumenda labore possimus, praesentium ipsum non voluptatum quia expedita rerum dicta iusto dolorum quidem laboriosam? ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResetPasswordLandingPageComponent_span_25_Template, 2, 1, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResetPasswordLandingPageComponent_button_28_Template, 2, 1, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ResetPasswordLandingPageComponent_button_29_Template, 2, 0, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "footer");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Terms and Conditions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Privacy Policy");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inquiry");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ad Standards Council - Screening System -v 2.0");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u00A9 2022. Ad Standards Council");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ResetPasswordLandingPageComponent_ng_template_44_Template, 27, 13, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowUpdatePassword);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowUpdatePassword);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShowUpdatePassword);
            }
        }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: ["body[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fb9696, transparent);\n}\n\n.landing-page[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 3em;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  font-weight: 500;\n  padding: 1em 0.3em;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: flex;\n  text-decoration: underline;\n  padding: 0em 1em;\n}\n\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {\n  float: left;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-details[_ngcontent-%COMP%] {\n  float: right;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#intro[_ngcontent-%COMP%] {\n  background: url('login-bg.png') no-repeat center center fixed;\n  background-size: cover !important;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.fixed-top[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: gray;\n  z-index: 9;\n}\n\n.photo-slider[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  min-width: 27em;\n  max-width: 50vw;\n  position: fixed;\n  top: 45%;\n  right: 10%;\n  transform: translate(-10%, -40%);\n  overflow: auto;\n  border-radius: 10px;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10em;\n}\n\n.mat-card[_ngcontent-%COMP%]    > .mat-card-actions[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.login-action[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.login-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0.5em;\n}\n\n.login-action[_ngcontent-%COMP%]   .register__button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  color: #1e88e5;\n  border: 1px solid #1e88e5;\n}\n\n.login-action[_ngcontent-%COMP%] {\n  max-height: 50vh !important;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: gray;\n  margin: 10px 0px;\n}\n\n.forgot-password[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  transition: 1000ms;\n}\n\n  mat-tab-group .mat-tab-label {\n  min-width: 100px !important;\n}\n\n@media (min-width: 800px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 5%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0.5em;\n    background-color: white;\n    height: 65%;\n    width: 40%;\n    position: fixed;\n    top: 43%;\n    left: 9%;\n    transform: translate(-10%, -40%);\n    overflow: hidden;\n    border-radius: 10px;\n    padding: 2em;\n  }\n  .photo-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80%;\n    width: 100%;\n  }\n  .photo-slider[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n    height: 20%;\n    width: 100%;\n  }\n  .photo-slider[_ngcontent-%COMP%]   p.text-title[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 1000px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 3%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    height: 75%;\n    width: 50%;\n    left: 11%;\n  }\n}\n\n@media (min-width: 1300px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 3%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    height: 75%;\n    width: 60%;\n    left: 11%;\n  }\n}\n\n@media (min-width: 1700px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 4%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    height: 75%;\n    width: 65%;\n    left: 11%;\n  }\n}\n\n.warning-message[_ngcontent-%COMP%] {\n  color: red;\n  text-align: justify;\n  text-justify: inter-word;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  padding: 0 16px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvbG9naW4vZm9yZ290LXBhc3Nvd3JkL3Jlc2V0LXBhc3N3b3JkLWxhbmRpbmctcGFnZS9yZXNldC1wYXNzd29yZC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUlBO0VBQ0ksdUJBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJOztFQUVJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFLSTtFQUNJLGVBQUE7QUFIUjs7QUFNSTtFQUNJLFdBQUE7QUFKUjs7QUFPSTtFQUNJLFlBQUE7QUFMUjs7QUFVQTs7OztFQUlJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLDZEQUFBO0VBSUEsaUNBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLHFCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUEo7O0FBaUJBO0VBQ0ksYUFBQTtBQWRKOztBQWlCQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFnQkk7RUFDSSxXQUFBO0FBZFI7O0FBa0JBO0VBQ0ksa0JBQUE7QUFmSjs7QUFrQkE7RUFDSSxVQUFBO0FBZko7O0FBa0JBO0VBQ0ksd0JBQUE7QUFmSjs7QUFrQkE7RUFDSSxXQUFBO0FBZko7O0FBaUJJO0VBQ0ksa0JBQUE7QUFmUjs7QUFtQkE7RUFDSSxZQUFBO0FBaEJKOztBQW1CQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQWhCSjs7QUFrQkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQWhCUjs7QUFtQkk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWpCUjs7QUFxQkE7RUFDSSwyQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFsQko7O0FBcUJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbEJKOztBQXNCSTtFQUNJLDJCQUFBO0FBbkJSOztBQTZCQTtFQUNJO0lBQ0ksU0FBQTtFQTFCTjs7RUE2QkU7SUFDSSxjQUFBO0lBRUEsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFFQSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBM0JOO0VBNkJNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUEzQlY7RUE4Qk07SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQTVCVjtFQWdDVTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQTlCZDtBQUNGOztBQW1DQTtFQUNJO0lBQ0ksU0FBQTtFQWpDTjs7RUFvQ0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFqQ047QUFDRjs7QUFvQ0E7RUFDSTtJQUNJLFNBQUE7RUFsQ047O0VBcUNFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBbENOO0FBQ0Y7O0FBc0NBO0VBQ0k7SUFDSSxTQUFBO0VBcENOOztFQXVDRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQXBDTjtBQUNGOztBQXVDQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBckNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvbG9naW4vZm9yZ290LXBhc3Nvd3JkL3Jlc2V0LXBhc3N3b3JkLWxhbmRpbmctcGFnZS9yZXNldC1wYXNzd29yZC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmI5Njk2LCB0cmFuc3BhcmVudCk7XG59XG5cbi5sYW5kaW5nLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwIDFlbTtcbn1cblxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAxZW0gMC4zZW07XG5cbiAgICB1bCxcbiAgICBsaSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBwYWRkaW5nOiAwZW0gMWVtO1xuICAgIH1cblxuICAgIGxpOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5mb290ZXItbmF2IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1kZXRhaWxzIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuXG5odG1sLFxuYm9keSxcbmhlYWRlcixcbiNpbnRybyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaW50cm8ge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmcucG5nXCIpbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuLmZpeGVkLXRvcCB7XG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi8vIG1hdC1pY29uIHtcbi8vICAgICBoZWlnaHQ6IDFlbTtcbi8vICAgICB3aWR0aDogMWVtO1xuLy8gICAgIGZvbnQtc2l6ZTogNWVtO1xuLy8gfVxuXG5cbi5waG90by1zbGlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI3ZW07XG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQ1JTtcbiAgICByaWdodDogMTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTQwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTQwJSk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMGVtO1xuICAgIH1cbn1cblxuLm1hdC1jYXJkPi5tYXQtY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5ociB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9naW4tYWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIDAuNWVtO1xuICAgIH1cblxuICAgIC5yZWdpc3Rlcl9fYnV0dG9uIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6ICMxZTg4ZTU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTg4ZTU7XG4gICAgfVxufVxuXG4ubG9naW4tYWN0aW9uIHtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IDEwMDBtcztcbn1cblxuOjpuZy1kZWVwIHtcbiAgICBtYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8vIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50LnJlbWVtYmVyLW1lLWNoZWNrLWJveCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xuICAgIC8vIH1cbn1cblxuXG5cbkBtZWRpYShtaW4td2lkdGg6ODAwcHgpIHtcbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICB9XG5cbiAgICAucGhvdG8tc2xpZGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogNDMlO1xuICAgICAgICBsZWZ0OiA5JTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAtNDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTQwJSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDJlbTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LWluZm8ge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgJi50ZXh0LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDoxMDAwcHgpIHtcbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIHJpZ2h0OiAzJTtcbiAgICB9XG5cbiAgICAucGhvdG8tc2xpZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGxlZnQ6IDExJTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6MTMwMHB4KSB7XG4gICAgbWF0LWNhcmQge1xuICAgICAgICByaWdodDogMyU7XG4gICAgfVxuXG4gICAgLnBob3RvLXNsaWRlciB7XG4gICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBsZWZ0OiAxMSU7XG4gICAgfVxuXG59XG5cbkBtZWRpYShtaW4td2lkdGg6MTcwMHB4KSB7XG4gICAgbWF0LWNhcmQge1xuICAgICAgICByaWdodDogNCU7XG4gICAgfVxuXG4gICAgLnBob3RvLXNsaWRlciB7XG4gICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBsZWZ0OiAxMSU7XG4gICAgfVxufVxuXG4ud2FybmluZy1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
    return ResetPasswordLandingPageComponent;
})();



/***/ })

}]);
//# sourceMappingURL=modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module-es2015.js.map