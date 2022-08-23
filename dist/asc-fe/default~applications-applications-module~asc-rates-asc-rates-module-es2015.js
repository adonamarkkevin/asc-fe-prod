(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~asc-rates-asc-rates-module"],{

/***/ "18hA":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/asc-rates/asc-rates.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYXNjLXJhdGVzL2FzYy1yYXRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Wz3k":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/asc-rates/asc-rates.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    <i class=\"material-icons\">credit_score</i>\r\n                    ASC Rates\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"ascRateForm\">\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                  <mat-label>Type Of Medium</mat-label>\r\n                  <mat-select [(ngModel)]=\"ascRate.typeOfMedium\" name=\"typeOfMedium\" formControlName=\"typeOfMedium\"\r\n                  [compareWith]=\"compareTypeOfMedium\" (selectionChange)=\"setExecution()\">\r\n                      <mat-option *ngFor=\"let i of typeOfMediumList\" [value]=\"i\">\r\n                          {{i.description}}\r\n                      </mat-option>\r\n                  </mat-select>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                  <mat-label>Type Of Execution</mat-label>\r\n                  <mat-select [(ngModel)]=\"ascRate.typeOfExecution\" name=\"typeOfExecution\" formControlName=\"typeOfExecution\"\r\n                  [compareWith]=\"compareMediumExecution\">\r\n                      <mat-option *ngFor=\"let i of typeOfMediumExecutionList\" [value]=\"i.typeOfExecution\">\r\n                          {{i.typeOfExecution.typeOfExecution}}\r\n                      </mat-option>\r\n                  </mat-select>\r\n              </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Length From</mat-label>\r\n                    <input matInput [(ngModel)]=\"ascRate.lengthFrom\" name=\"lengthFrom\" formControlName=\"lengthFrom\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"5\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Length To</mat-label>\r\n                    <input matInput [(ngModel)]=\"ascRate.lengthTo\" name=\"lengthTo\" formControlName=\"lengthTo\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"5\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Member Offline <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"ascRate.memberOffline\" name=\"memberOffline\"\r\n                        formControlName=\"memberOffline\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Non Member Offline <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"ascRate.nonMemberOffline\" name=\"nonMemberOffline\"\r\n                        formControlName=\"nonMemberOffline\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Member Online</mat-label>\r\n                    <input matInput [(ngModel)]=\"ascRate.memberOnline\" name=\"memberOnline\"\r\n                        formControlName=\"memberOnline\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Non Member Online</mat-label>\r\n                    <input matInput [(ngModel)]=\"ascRate.nonMemberOnline\" name=\"nonMemberOnline\"\r\n                        formControlName=\"nonMemberOnline\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"ascRate.id\">\r\n                    <mat-label>Status</mat-label>\r\n                    <mat-select [(ngModel)]=\"ascRate.status\" name=\"status\" formControlName=\"status\">\r\n                        <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                            {{i.status}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"ascRate\" [childForm]=\"ascRateForm\" (saveFunction)=\"save()\"\r\n            (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getAscRate()\"></app-form-list>\r\n\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "g34Q":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/asc-rates/asc-rates.component.ts ***!
  \****************************************************************************/
/*! exports provided: AscRatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscRatesComponent", function() { return AscRatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asc_rates_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asc-rates.component.html */ "Wz3k");
/* harmony import */ var _asc_rates_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asc-rates.component.scss */ "18hA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let AscRatesComponent = class AscRatesComponent {
    constructor(apiService, formBuilder, validateFieldService, sweetAlertService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.validateFieldService = validateFieldService;
        this.sweetAlertService = sweetAlertService;
        this.displayedColumns = [
            'lengthFrom',
            'lengthTo',
            'memberOffline',
            'memberOnline',
            'nonMemberOffline',
            'nonMemberOnline',
            'typeOfExecutionObj',
            'typeOfMediumObj',
            'status'
        ];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_9__["STATUSES"]];
        this.ascRate = new _models__WEBPACK_IMPORTED_MODULE_7__["AscRate"]();
        this.ascRateList = [];
        this.typeOfMediumExecutionList = [];
        this.typeOfMediumList = [];
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].ascRates).subscribe((res) => {
            this.ascRateList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
        this.getTypeOfMediumList();
    }
    getTypeOfMediumList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfMedium).subscribe((res) => {
            this.typeOfMediumList = res.responseData.data;
        });
    }
    setExecution() {
        console.log(this.ascRate.typeOfMedium);
        if (this.ascRate.typeOfMedium) {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfExecutionsByMedium + this.ascRate.typeOfMedium.id).subscribe((res) => {
                this.typeOfMediumExecutionList = res.responseData.data;
            });
        }
    }
    save() {
        console.log(this.ascRate);
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].ascRates, this.ascRate).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            console.log(err);
            this.sweetAlertService.error(err);
        }, () => {
            // actions after subscription
            this.resetFormValidator();
            this.getList();
        });
    }
    getAscRate() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].ascRates, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.ascRate = res.responseData.data;
                this.setExecution();
            }
        });
    }
    getTypeOfMediumExecutionList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfExecutions).subscribe((res) => {
            this.typeOfMediumExecutionList = res.responseData.data;
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].ascRates, this.ascRate).subscribe((res) => {
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
    setFormValidator() {
        this.ascRate.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
        this.ascRateForm = this.formBuilder.group({
            lengthFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lengthTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            memberOffline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memberOnline: [''],
            nonMemberOffline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nonMemberOnline: [''],
            typeOfExecution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typeOfMedium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [''],
        });
    }
    resetFormValidator() {
        this.ascRate = new _models__WEBPACK_IMPORTED_MODULE_7__["AscRate"]();
        this.ascRate.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
        this.ascRateForm.markAsUntouched();
        this.ascRateForm.markAsPristine();
    }
    setPenalty(penaltyParam) {
        return penaltyParam === 'Yes' ? true : false;
    }
    compareMediumExecution(value, selected) {
        if (value && selected) {
            return value.typeOfExecution === selected.typeOfExecution;
        }
    }
    compareTypeOfMedium(value, selected) {
        if (value && selected) {
            return value.description === selected.description;
        }
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: 'Are you sure you want to delete this ASC rate?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].ascRates, this.ascRate.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('ASC rate successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
AscRatesComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"] }
];
AscRatesComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
AscRatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asc-rates',
        template: _raw_loader_asc_rates_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asc_rates_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AscRatesComponent);



/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~asc-rates-asc-rates-module-es2015.js.map