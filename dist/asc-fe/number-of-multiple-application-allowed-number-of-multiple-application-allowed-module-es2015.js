(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["number-of-multiple-application-allowed-number-of-multiple-application-allowed-module"],{

/***/ "3swC":
/*!********************************************!*\
  !*** ./src/app/modules/fragments/index.ts ***!
  \********************************************/
/*! exports provided: FormActionButtonsComponent, FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function() { return _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__["FormActionButtonsComponent"]; });

/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-list/form-list.component */ "DeKZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__["FormListComponent"]; });





/***/ }),

/***/ "DJTD":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed-routing.module.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowedRoutingModule", function() { return NumberOfMultipleApplicationAllowedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number-of-multiple-application-allowed.component */ "Ft7N");




const routes = [
    {
        path: '',
        component: _number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_3__["NumberOfMultipleApplicationAllowedComponent"]
    }
];
let NumberOfMultipleApplicationAllowedRoutingModule = class NumberOfMultipleApplicationAllowedRoutingModule {
};
NumberOfMultipleApplicationAllowedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NumberOfMultipleApplicationAllowedRoutingModule);



/***/ }),

/***/ "Ft7N":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowedComponent", function() { return NumberOfMultipleApplicationAllowedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_number_of_multiple_application_allowed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./number-of-multiple-application-allowed.component.html */ "nZhn");
/* harmony import */ var _number_of_multiple_application_allowed_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-of-multiple-application-allowed.component.scss */ "n9c8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/numberOfMultipleApplicationAllowed.model */ "/RNn");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");











let NumberOfMultipleApplicationAllowedComponent = class NumberOfMultipleApplicationAllowedComponent {
    constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.validateFieldService = validateFieldService;
        this.displayedColumns = ['minimum', 'maximum'];
        this.numberOfMultipleApplicationAllowed = new app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_9__["NumberOfMultipleApplicationAllowed"]();
        this.numberOfMultipleApplicationAllowedList = [];
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].noOfMultipleApplicationAllowed).subscribe((res) => {
            this.numberOfMultipleApplicationAllowed = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].noOfMultipleApplicationAllowed, this.numberOfMultipleApplicationAllowed).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            err.error.message = 'Please enter numeric values only';
            this.sweetAlertService.error(err);
        }, () => {
            // actions after subscription
            this.resetFormValidator();
            this.getList();
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].noOfMultipleApplicationAllowed, this.numberOfMultipleApplicationAllowed).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            // actions after subscription
            this.resetFormValidator();
            this.getList();
        });
    }
    getNumberOfMultipleApplicationAllowed() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].noOfMultipleApplicationAllowed, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.numberOfMultipleApplicationAllowed = res.responseData.data;
            }
        });
    }
    setFormValidator() {
        this.numberOfMultipleApplicationAllowedForm = this.formBuilder.group({
            minimum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            maximum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.numberOfMultipleApplicationAllowed = new app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_9__["NumberOfMultipleApplicationAllowed"]();
        this.numberOfMultipleApplicationAllowedForm.markAsUntouched();
        this.numberOfMultipleApplicationAllowedForm.markAsPristine();
    }
};
NumberOfMultipleApplicationAllowedComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"] }
];
NumberOfMultipleApplicationAllowedComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
NumberOfMultipleApplicationAllowedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-number-of-multiple-application-allowed',
        template: _raw_loader_number_of_multiple_application_allowed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_number_of_multiple_application_allowed_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NumberOfMultipleApplicationAllowedComponent);



/***/ }),

/***/ "n9c8":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbnVtYmVyLW9mLW11bHRpcGxlLWFwcGxpY2F0aW9uLWFsbG93ZWQvbnVtYmVyLW9mLW11bHRpcGxlLWFwcGxpY2F0aW9uLWFsbG93ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "nZhn":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    <span class=\"material-icons\">filter_9_plus</span> Number of Multiple Application Allowed\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n            <form [formGroup]=\"numberOfMultipleApplicationAllowedForm\">\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                        <mat-label>MINIMUM: <span class=\"required-field\">*</span></mat-label>\r\n                        <input matInput [(ngModel)]=\"numberOfMultipleApplicationAllowed.minimum\" name=\"minimum\"\r\n                            (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"minimum\"\r\n                            maxlength=\"5\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                        <mat-label>MAXIMUM: <span class=\"required-field\">*</span></mat-label>\r\n                        <input matInput [(ngModel)]=\"numberOfMultipleApplicationAllowed.maximum\" name=\"maximum\"\r\n                            (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"maximum\"\r\n                            maxlength=\"5\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </form>\r\n\r\n            <app-form-action-buttons [childObject]=\"numberOfMultipleApplicationAllowed\"\r\n                [childForm]=\"numberOfMultipleApplicationAllowedForm\" (saveFunction)=\"save()\" (updateFunction)=\"update()\"\r\n                (cancelFunction)=\"resetFormValidator()\">\r\n            </app-form-action-buttons>\r\n            <br><br><br>\r\n            <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n                (selectInListFunction)=\"getNumberOfMultipleApplicationAllowed()\"></app-form-list>\r\n        </div>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "rRfx":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowedModule", function() { return NumberOfMultipleApplicationAllowedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _number_of_multiple_application_allowed_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number-of-multiple-application-allowed-routing.module */ "DJTD");
/* harmony import */ var _number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-of-multiple-application-allowed.component */ "Ft7N");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let NumberOfMultipleApplicationAllowedModule = class NumberOfMultipleApplicationAllowedModule {
};
NumberOfMultipleApplicationAllowedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_4__["NumberOfMultipleApplicationAllowedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _number_of_multiple_application_allowed_routing_module__WEBPACK_IMPORTED_MODULE_3__["NumberOfMultipleApplicationAllowedRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"],
        ]
    })
], NumberOfMultipleApplicationAllowedModule);



/***/ })

}]);
//# sourceMappingURL=number-of-multiple-application-allowed-number-of-multiple-application-allowed-module-es2015.js.map