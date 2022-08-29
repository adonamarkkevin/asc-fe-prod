(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-and-bar-code-checker-qr-and-bar-code-checker-module"],{

/***/ "GoHl":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/qr-and-bar-code-checker/qr-and-bar-code-checker.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: QrAndBarCodeCheckerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrAndBarCodeCheckerModule", function() { return QrAndBarCodeCheckerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _qr_and_bar_code_checker_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-and-bar-code-checker-routing.module */ "ZF6W");
/* harmony import */ var _qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-and-bar-code-checker.component */ "ce/n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let QrAndBarCodeCheckerModule = /*@__PURE__*/ (() => {
    class QrAndBarCodeCheckerModule {
    }
    QrAndBarCodeCheckerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QrAndBarCodeCheckerModule });
    QrAndBarCodeCheckerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QrAndBarCodeCheckerModule_Factory(t) { return new (t || QrAndBarCodeCheckerModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _qr_and_bar_code_checker_routing_module__WEBPACK_IMPORTED_MODULE_2__["QrAndBarCodeCheckerRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"],
            ]] });
    return QrAndBarCodeCheckerModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QrAndBarCodeCheckerModule, { declarations: [_qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_3__["QrAndBarCodeCheckerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _qr_and_bar_code_checker_routing_module__WEBPACK_IMPORTED_MODULE_2__["QrAndBarCodeCheckerRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]] });
})();



/***/ }),

/***/ "ZF6W":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/qr-and-bar-code-checker/qr-and-bar-code-checker-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: QrAndBarCodeCheckerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrAndBarCodeCheckerRoutingModule", function() { return QrAndBarCodeCheckerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-and-bar-code-checker.component */ "ce/n");





const routes = [
    {
        path: '',
        component: _qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_2__["QrAndBarCodeCheckerComponent"]
    }
];
let QrAndBarCodeCheckerRoutingModule = /*@__PURE__*/ (() => {
    class QrAndBarCodeCheckerRoutingModule {
    }
    QrAndBarCodeCheckerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QrAndBarCodeCheckerRoutingModule });
    QrAndBarCodeCheckerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QrAndBarCodeCheckerRoutingModule_Factory(t) { return new (t || QrAndBarCodeCheckerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return QrAndBarCodeCheckerRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QrAndBarCodeCheckerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "ce/n":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/qr-and-bar-code-checker/qr-and-bar-code-checker.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: QrAndBarCodeCheckerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrAndBarCodeCheckerComponent", function() { return QrAndBarCodeCheckerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/models/qrAndBarCodeChecker.model */ "s7wx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function QrAndBarCodeCheckerComponent_mat_option_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r3, " Application ");
    }
}
function QrAndBarCodeCheckerComponent_span_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "VALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function QrAndBarCodeCheckerComponent_span_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let QrAndBarCodeCheckerComponent = /*@__PURE__*/ (() => {
    class QrAndBarCodeCheckerComponent {
        constructor(apiService, formBuilder, sweetAlertService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.qrAndBarCodeChecker = new app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_3__["QrAndBarCodeChecker"]();
            this.qrAndBarCodeCheckerTypeList = ['S1', 'S2'];
            this.qrAndBarCodeCheckerType = '';
            this.qrBarCodeValid = false;
        }
        ngOnInit() {
            this.setFormValidator();
        }
        validate() {
            let endpoint = this.qrAndBarCodeCheckerType === 'S1' ? _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].s1QrCheck : _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].s2QrCheck;
            endpoint += this.qrAndBarCodeChecker.qrOrBarCode;
            this.apiService.save(endpoint, this.qrAndBarCodeChecker).subscribe(res => {
                this.qrBarCodeValid = true;
            }, err => {
                this.qrBarCodeValid = false;
                this.sweetAlertService.customErrorMessage('QR or Bar Code is Invalid. Please try again.');
            });
        }
        setFormValidator() {
            this.qrAndBarCodeCheckerForm = this.formBuilder.group({
                applicationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                qrOrBarCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        resetFormValidator() {
            this.qrAndBarCodeChecker = new app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_3__["QrAndBarCodeChecker"]();
            this.qrAndBarCodeCheckerForm.markAsUntouched();
            this.qrAndBarCodeCheckerForm.markAsPristine();
        }
    }
    QrAndBarCodeCheckerComponent.ɵfac = function QrAndBarCodeCheckerComponent_Factory(t) { return new (t || QrAndBarCodeCheckerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["SweetAlertService"])); };
    QrAndBarCodeCheckerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QrAndBarCodeCheckerComponent, selectors: [["app-qr-and-bar-code-checker"]], decls: 28, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "material-icons"], [1, "col-md-7", "form-group"], [3, "formGroup"], ["appearance", "outline"], ["name", "applicationType", "formControlName", "applicationType", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "required-field"], ["matInput", "", "name", "qrOrBarCode", "formControlName", "qrOrBarCode", 3, "ngModel", "ngModelChange"], [3, "childObject", "childForm", "validateFunction", "cancelFunction"], [1, "col-md-5", "message-output"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [3, "value"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"]], template: function QrAndBarCodeCheckerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "qr_code_scanner");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " QR and BAR CODE Checker ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Application Type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QrAndBarCodeCheckerComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.qrAndBarCodeCheckerType = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, QrAndBarCodeCheckerComponent_mat_option_17_Template, 2, 2, "mat-option", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "QR/BAR CODE: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QrAndBarCodeCheckerComponent_Template_input_ngModelChange_23_listener($event) { return ctx.qrAndBarCodeChecker.qrOrBarCode = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-form-action-buttons", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("validateFunction", function QrAndBarCodeCheckerComponent_Template_app_form_action_buttons_validateFunction_24_listener() { return ctx.validate(); })("cancelFunction", function QrAndBarCodeCheckerComponent_Template_app_form_action_buttons_cancelFunction_24_listener() { return ctx.resetFormValidator(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QrAndBarCodeCheckerComponent_span_26_Template, 2, 0, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, QrAndBarCodeCheckerComponent_span_27_Template, 2, 0, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.qrAndBarCodeCheckerForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.qrAndBarCodeCheckerType);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.qrAndBarCodeCheckerTypeList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.qrAndBarCodeChecker.qrOrBarCode);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.qrAndBarCodeChecker)("childForm", ctx.qrAndBarCodeCheckerForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrBarCodeValid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.qrBarCodeValid);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_9__["FormActionButtonsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".form-group[_ngcontent-%COMP%] {\n  border-right: 4px solid #cccccc;\n}\n\n.message-output[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n\n.message-output[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.message-output[_ngcontent-%COMP%]   .bg-success[_ngcontent-%COMP%], .message-output[_ngcontent-%COMP%]   .bg-danger[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  font-size: 20px;\n  text-align: justify;\n  text-justify: inter-word;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS9xci1hbmQtYmFyLWNvZGUtY2hlY2tlci9xci1hbmQtYmFyLWNvZGUtY2hlY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcXItYW5kLWJhci1jb2RlLWNoZWNrZXIvcXItYW5kLWJhci1jb2RlLWNoZWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cHtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcclxufVxyXG5cclxuLm1lc3NhZ2Utb3V0cHV0e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmJhZGdle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJnLXN1Y2Nlc3MsIC5iZy1kYW5nZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
    return QrAndBarCodeCheckerComponent;
})();



/***/ })

}]);
//# sourceMappingURL=qr-and-bar-code-checker-qr-and-bar-code-checker-module-es2015.js.map