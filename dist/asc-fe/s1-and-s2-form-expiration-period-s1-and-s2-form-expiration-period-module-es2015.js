(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s1-and-s2-form-expiration-period-s1-and-s2-form-expiration-period-module"],{

/***/ "0xa7":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    S1 and S2 Form Expiration Period\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"s1AndS2FormExpirationPeriodForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>S1 Expiration No Of Years <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"s1AndS2FormExpirationPeriod.s1ExpNoOfYears\" name=\"s1ExpNoOfYears\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"s1ExpNoOfYears\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>S2 Expiration No Of Years <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"s1AndS2FormExpirationPeriod.s2ExpNoOfYears\" name=\"s2ExpNoOfYears\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"s2ExpNoOfYears\">\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"s1AndS2FormExpirationPeriod\"\r\n            [childForm]=\"s1AndS2FormExpirationPeriodForm\" (saveFunction)=\"save()\" (updateFunction)=\"update()\"\r\n            (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getS1AndS2FormExpirationPeriod()\"></app-form-list>\r\n\r\n    </div>\r\n</form>");

/***/ }),

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

/***/ "7Zr9":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriodModule", function() { return S1AndS2FormExpirationPeriodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _s1_and_s2_form_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period-routing.module */ "pkD9");
/* harmony import */ var _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period.component */ "Kuzo");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let S1AndS2FormExpirationPeriodModule = class S1AndS2FormExpirationPeriodModule {
};
S1AndS2FormExpirationPeriodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_4__["S1AndS2FormExpirationPeriodComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _s1_and_s2_form_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_3__["S1AndS2FormExpirationPeriodRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"],
        ]
    })
], S1AndS2FormExpirationPeriodModule);



/***/ }),

/***/ "Kuzo":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriodComponent", function() { return S1AndS2FormExpirationPeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_s1_and_s2_form_expiration_period_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./s1-and-s2-form-expiration-period.component.html */ "0xa7");
/* harmony import */ var _s1_and_s2_form_expiration_period_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period.component.scss */ "MY9R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/s1-and-s2-form-expiration-period.model */ "zL5c");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let S1AndS2FormExpirationPeriodComponent = class S1AndS2FormExpirationPeriodComponent {
    constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.validateFieldService = validateFieldService;
        this.displayedColumns = ['s1ExpNoOfYears', 's2ExpNoOfYears'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.s1AndS2FormExpirationPeriod = new app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__["S1AndS2FormExpirationPeriod"]();
        this.s1AndS2FormExpirationPeriodList = [];
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1AndS2FormExpirationPeriods).subscribe((res) => {
            this.s1AndS2FormExpirationPeriodList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.s1AndS2FormExpirationPeriod).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            if (!Number(this.s1AndS2FormExpirationPeriod.s1ExpNoOfYears)
                || !Number(this.s1AndS2FormExpirationPeriod.s2ExpNoOfYears)) {
                err.error.message = 'Please enter numeric values only';
            }
            else {
                err.error.message = 'Default expiration values have already been set. Select the entry to update the record';
            }
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator(),
                this.getList();
        });
    }
    getS1AndS2FormExpirationPeriod() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.s1AndS2FormExpirationPeriod = res.responseData.data;
                console.log(res);
            }
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.s1AndS2FormExpirationPeriod).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator();
            this.getList();
        });
    }
    setFormValidator() {
        this.s1AndS2FormExpirationPeriodForm = this.formBuilder.group({
            s1ExpNoOfYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            s2ExpNoOfYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.s1AndS2FormExpirationPeriod = new app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__["S1AndS2FormExpirationPeriod"]();
        this.s1AndS2FormExpirationPeriodForm.markAsUntouched();
        this.s1AndS2FormExpirationPeriodForm.markAsPristine();
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: 'Are you sure you want to delete this S1 and S2 form expiration period?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.s1AndS2FormExpirationPeriod.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('S1 and S2 form expiration period successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
S1AndS2FormExpirationPeriodComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"] }
];
S1AndS2FormExpirationPeriodComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
S1AndS2FormExpirationPeriodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-s1-and-s2-form-expiration-period',
        template: _raw_loader_s1_and_s2_form_expiration_period_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_s1_and_s2_form_expiration_period_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], S1AndS2FormExpirationPeriodComponent);



/***/ }),

/***/ "MY9R":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvczEtYW5kLXMyLWZvcm0tZXhwaXJhdGlvbi1wZXJpb2QvczEtYW5kLXMyLWZvcm0tZXhwaXJhdGlvbi1wZXJpb2QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pkD9":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriodRoutingModule", function() { return S1AndS2FormExpirationPeriodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period.component */ "Kuzo");




const routes = [
    {
        path: '',
        component: _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_3__["S1AndS2FormExpirationPeriodComponent"]
    }
];
let S1AndS2FormExpirationPeriodRoutingModule = class S1AndS2FormExpirationPeriodRoutingModule {
};
S1AndS2FormExpirationPeriodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], S1AndS2FormExpirationPeriodRoutingModule);



/***/ })

}]);
//# sourceMappingURL=s1-and-s2-form-expiration-period-s1-and-s2-form-expiration-period-module-es2015.js.map