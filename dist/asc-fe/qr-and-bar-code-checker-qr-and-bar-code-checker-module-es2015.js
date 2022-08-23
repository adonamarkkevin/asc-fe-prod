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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _qr_and_bar_code_checker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-and-bar-code-checker-routing.module */ "ZF6W");
/* harmony import */ var _qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qr-and-bar-code-checker.component */ "ce/n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let QrAndBarCodeCheckerModule = class QrAndBarCodeCheckerModule {
};
QrAndBarCodeCheckerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_4__["QrAndBarCodeCheckerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _qr_and_bar_code_checker_routing_module__WEBPACK_IMPORTED_MODULE_3__["QrAndBarCodeCheckerRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"],
        ]
    })
], QrAndBarCodeCheckerModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-and-bar-code-checker.component */ "ce/n");




const routes = [
    {
        path: '',
        component: _qr_and_bar_code_checker_component__WEBPACK_IMPORTED_MODULE_3__["QrAndBarCodeCheckerComponent"]
    }
];
let QrAndBarCodeCheckerRoutingModule = class QrAndBarCodeCheckerRoutingModule {
};
QrAndBarCodeCheckerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QrAndBarCodeCheckerRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qr_and_bar_code_checker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qr-and-bar-code-checker.component.html */ "nCie");
/* harmony import */ var _qr_and_bar_code_checker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-and-bar-code-checker.component.scss */ "xOqz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/models/qrAndBarCodeChecker.model */ "s7wx");








let QrAndBarCodeCheckerComponent = class QrAndBarCodeCheckerComponent {
    constructor(apiService, formBuilder, sweetAlertService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.qrAndBarCodeChecker = new app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_7__["QrAndBarCodeChecker"]();
        this.qrAndBarCodeCheckerTypeList = ['S1', 'S2'];
        this.qrAndBarCodeCheckerType = '';
        this.qrBarCodeValid = false;
    }
    ngOnInit() {
        this.setFormValidator();
    }
    validate() {
        let endpoint = this.qrAndBarCodeCheckerType === 'S1' ? _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].s1QrCheck : _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].s2QrCheck;
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
            applicationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qrOrBarCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.qrAndBarCodeChecker = new app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_7__["QrAndBarCodeChecker"]();
        this.qrAndBarCodeCheckerForm.markAsUntouched();
        this.qrAndBarCodeCheckerForm.markAsPristine();
    }
};
QrAndBarCodeCheckerComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SweetAlertService"] }
];
QrAndBarCodeCheckerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-and-bar-code-checker',
        template: _raw_loader_qr_and_bar_code_checker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_and_bar_code_checker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QrAndBarCodeCheckerComponent);



/***/ }),

/***/ "nCie":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/qr-and-bar-code-checker/qr-and-bar-code-checker.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    <span class=\"material-icons\">qr_code_scanner</span> QR and BAR CODE Checker\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-7 form-group\">\r\n                <form [formGroup]=\"qrAndBarCodeCheckerForm\">\r\n                    <div class=\"row\">\r\n\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Application Type</mat-label>\r\n                          <mat-select [(ngModel)]=\"qrAndBarCodeCheckerType\" name=\"applicationType\" formControlName=\"applicationType\">\r\n                            <mat-option *ngFor=\"let i of qrAndBarCodeCheckerTypeList\" [value]=\"i\">\r\n                              {{i}} Application\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>QR/BAR CODE: <span class=\"required-field\">*</span></mat-label>\r\n                            <input matInput [(ngModel)]=\"qrAndBarCodeChecker.qrOrBarCode\" name=\"qrOrBarCode\"\r\n                                formControlName=\"qrOrBarCode\">\r\n                        </mat-form-field>\r\n\r\n                        <app-form-action-buttons [childObject]=\"qrAndBarCodeChecker\" [childForm]=\"qrAndBarCodeCheckerForm\"\r\n                            (validateFunction)=\"validate()\" (cancelFunction)=\"resetFormValidator()\">\r\n                        </app-form-action-buttons>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"col-md-5 message-output\">\r\n                <span class=\"badge bg-success\" *ngIf=\"qrBarCodeValid\">VALID</span>\r\n                <span class=\"badge bg-danger\" *ngIf=\"!qrBarCodeValid\">INVALID</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "xOqz":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/qr-and-bar-code-checker/qr-and-bar-code-checker.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  border-right: 4px solid #cccccc;\n}\n\n.message-output {\n  margin: auto;\n  text-align: center;\n}\n\n.message-output .badge {\n  width: 100%;\n}\n\n.message-output .bg-success, .message-output .bg-danger {\n  padding: 20px 10px;\n  font-size: 20px;\n  text-align: justify;\n  text-justify: inter-word;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS9xci1hbmQtYmFyLWNvZGUtY2hlY2tlci9xci1hbmQtYmFyLWNvZGUtY2hlY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcXItYW5kLWJhci1jb2RlLWNoZWNrZXIvcXItYW5kLWJhci1jb2RlLWNoZWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cHtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcclxufVxyXG5cclxuLm1lc3NhZ2Utb3V0cHV0e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmJhZGdle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJnLXN1Y2Nlc3MsIC5iZy1kYW5nZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=qr-and-bar-code-checker-qr-and-bar-code-checker-module-es2015.js.map