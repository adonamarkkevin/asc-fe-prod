(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s1-incomplete-decision-expiration-period-s1-incomplete-decision-expiration-period-module"],{

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

/***/ "76F+":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-incomplete-decision-expiration-period/s1-incomplete-decision-expiration-period.module.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: S1IncompleteDecisionExpirationPeriodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1IncompleteDecisionExpirationPeriodModule", function() { return S1IncompleteDecisionExpirationPeriodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _s1_incomplete_decision_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s1-incomplete-decision-expiration-period-routing.module */ "ZliV");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _s1_incomplete_decision_expiration_period_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./s1-incomplete-decision-expiration-period.component */ "SyoH");









let S1IncompleteDecisionExpirationPeriodModule = class S1IncompleteDecisionExpirationPeriodModule {
};
S1IncompleteDecisionExpirationPeriodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _s1_incomplete_decision_expiration_period_component__WEBPACK_IMPORTED_MODULE_8__["S1IncompleteDecisionExpirationPeriodComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _s1_incomplete_decision_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_3__["S1IncompleteDecisionExpirationPeriodRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"],
        ]
    })
], S1IncompleteDecisionExpirationPeriodModule);



/***/ }),

/***/ "SG0u":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-incomplete-decision-expiration-period/s1-incomplete-decision-expiration-period.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvczEtaW5jb21wbGV0ZS1kZWNpc2lvbi1leHBpcmF0aW9uLXBlcmlvZC9zMS1pbmNvbXBsZXRlLWRlY2lzaW9uLWV4cGlyYXRpb24tcGVyaW9kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "SyoH":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-incomplete-decision-expiration-period/s1-incomplete-decision-expiration-period.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: S1IncompleteDecisionExpirationPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1IncompleteDecisionExpirationPeriodComponent", function() { return S1IncompleteDecisionExpirationPeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_s1_incomplete_decision_expiration_period_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./s1-incomplete-decision-expiration-period.component.html */ "WQh1");
/* harmony import */ var _s1_incomplete_decision_expiration_period_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s1-incomplete-decision-expiration-period.component.scss */ "SG0u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_s1_settlement_or_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/s1-settlement-or-expiration-period.model */ "ZJcX");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let S1IncompleteDecisionExpirationPeriodComponent = class S1IncompleteDecisionExpirationPeriodComponent {
    constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.validateFieldService = validateFieldService;
        this.displayedColumns = ['noOfWorkingDays'];
        this.s1IncompleteDecisionExpirationPeriod = new app_core_models_s1_settlement_or_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__["S1SettlementOrExpirationPeriod"]();
        this.s1IncompleteDecisionExpirationPeriodList = [];
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1IncompleteDecisionExpirationPeriod).subscribe((res) => {
            this.s1IncompleteDecisionExpirationPeriodList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1IncompleteDecisionExpirationPeriod, this.s1IncompleteDecisionExpirationPeriod).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            if (!Number(this.s1IncompleteDecisionExpirationPeriod.noOfWorkingDays)) {
                err.error.message = 'Please enter numeric values only';
            }
            else {
                err.error.message = 'Default Number of working days have already been set. Select the entry to update the record';
            }
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator(),
                this.getList();
        });
    }
    getS1IncompleteDecisionExpirationPeriod() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1IncompleteDecisionExpirationPeriod, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.s1IncompleteDecisionExpirationPeriod = res.responseData.data;
                console.log(res);
            }
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1IncompleteDecisionExpirationPeriod, this.s1IncompleteDecisionExpirationPeriod).subscribe((res) => {
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
        this.s1IncompleteDecisionExpirationPeriodForm = this.formBuilder.group({
            noOfWorkingDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.s1IncompleteDecisionExpirationPeriod = new app_core_models_s1_settlement_or_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__["S1SettlementOrExpirationPeriod"]();
        this.s1IncompleteDecisionExpirationPeriodForm.markAsUntouched();
        this.s1IncompleteDecisionExpirationPeriodForm.markAsPristine();
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: 'Are you sure you want to delete this announcement?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1IncompleteDecisionExpirationPeriod, this.s1IncompleteDecisionExpirationPeriod.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('S1 incomplete decision expiration period successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
S1IncompleteDecisionExpirationPeriodComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"] }
];
S1IncompleteDecisionExpirationPeriodComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
S1IncompleteDecisionExpirationPeriodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-s1-incomplete-decision-expiration-period',
        template: _raw_loader_s1_incomplete_decision_expiration_period_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_s1_incomplete_decision_expiration_period_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], S1IncompleteDecisionExpirationPeriodComponent);



/***/ }),

/***/ "WQh1":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/s1-incomplete-decision-expiration-period/s1-incomplete-decision-expiration-period.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    S1 Incomplete Decision Expiration Period\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"s1IncompleteDecisionExpirationPeriodForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n                    <mat-label>Number of Working Days <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"s1IncompleteDecisionExpirationPeriod.noOfWorkingDays\"\r\n                        name=\"noOfWorkingDays\" (keydown)=\"validateFieldService.numbersOnly($event)\"\r\n                        formControlName=\"noOfWorkingDays\">\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"s1IncompleteDecisionExpirationPeriod\"\r\n            [childForm]=\"s1IncompleteDecisionExpirationPeriodForm\" (saveFunction)=\"save()\" (updateFunction)=\"update()\"\r\n            (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\">\r\n        </app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getS1IncompleteDecisionExpirationPeriod()\"></app-form-list>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "ZliV":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-incomplete-decision-expiration-period/s1-incomplete-decision-expiration-period-routing.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: S1IncompleteDecisionExpirationPeriodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1IncompleteDecisionExpirationPeriodRoutingModule", function() { return S1IncompleteDecisionExpirationPeriodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _s1_incomplete_decision_expiration_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s1-incomplete-decision-expiration-period.component */ "SyoH");




const routes = [
    {
        path: '',
        component: _s1_incomplete_decision_expiration_period_component__WEBPACK_IMPORTED_MODULE_3__["S1IncompleteDecisionExpirationPeriodComponent"]
    }
];
let S1IncompleteDecisionExpirationPeriodRoutingModule = class S1IncompleteDecisionExpirationPeriodRoutingModule {
};
S1IncompleteDecisionExpirationPeriodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], S1IncompleteDecisionExpirationPeriodRoutingModule);



/***/ })

}]);
//# sourceMappingURL=s1-incomplete-decision-expiration-period-s1-incomplete-decision-expiration-period-module-es2015.js.map