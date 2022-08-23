(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["promissory-note-period-promissory-note-period-module"],{

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

/***/ "59d7":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PromissoryNotePeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriodComponent", function() { return PromissoryNotePeriodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_promissory_note_period_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./promissory-note-period.component.html */ "Plar");
/* harmony import */ var _promissory_note_period_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promissory-note-period.component.scss */ "MdLj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/promissory-note-period.model */ "QvPK");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let PromissoryNotePeriodComponent = class PromissoryNotePeriodComponent {
    constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.validateFieldService = validateFieldService;
        this.displayedColumns = ['noOfDays'];
        this.promissoryNotePeriod = new app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_9__["PromissoryNotePeriod"]();
        this.promissoryNotePeriodList = [];
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].promissoryNotePeriods).subscribe((res) => {
            this.promissoryNotePeriodList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].promissoryNotePeriods, this.promissoryNotePeriod).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            if (!Number(this.promissoryNotePeriod.noOfDays)) {
                err.error.message = 'Please enter numeric values only';
            }
            else {
                err.error.message = 'Default Promissory Note Period have already been set. Select the entry to update the record';
            }
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator(),
                this.getList();
        });
    }
    getPromissoryNotePeriod() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].promissoryNotePeriods, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.promissoryNotePeriod = res.responseData.data;
                console.log(res);
            }
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].promissoryNotePeriods, this.promissoryNotePeriod).subscribe((res) => {
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
        this.promissoryNotePeriodForm = this.formBuilder.group({
            noOfDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.promissoryNotePeriod = new app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_9__["PromissoryNotePeriod"]();
        this.promissoryNotePeriodForm.markAsUntouched();
        this.promissoryNotePeriodForm.markAsPristine();
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: 'Are you sure you want to delete this promissory note period?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].promissoryNotePeriods, this.promissoryNotePeriod.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('Promissory note period successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
PromissoryNotePeriodComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"] }
];
PromissoryNotePeriodComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
PromissoryNotePeriodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-promissory-note-period',
        template: _raw_loader_promissory_note_period_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_promissory_note_period_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PromissoryNotePeriodComponent);



/***/ }),

/***/ "MdLj":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcHJvbWlzc29yeS1ub3RlLXBlcmlvZC9wcm9taXNzb3J5LW5vdGUtcGVyaW9kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Plar":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    Promissory Note Period\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"promissoryNotePeriodForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n                    <mat-label>Number of Days <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"promissoryNotePeriod.noOfDays\" name=\"noOfDays\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"noOfDays\">\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"promissoryNotePeriod\" [childForm]=\"promissoryNotePeriodForm\"\r\n            (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"\r\n            (deleteFunction)=\"delete()\">\r\n        </app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getPromissoryNotePeriod()\"></app-form-list>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "RX6L":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PromissoryNotePeriodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriodRoutingModule", function() { return PromissoryNotePeriodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promissory-note-period.component */ "59d7");




const routes = [
    {
        path: '',
        component: _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_3__["PromissoryNotePeriodComponent"]
    }
];
let PromissoryNotePeriodRoutingModule = class PromissoryNotePeriodRoutingModule {
};
PromissoryNotePeriodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PromissoryNotePeriodRoutingModule);



/***/ }),

/***/ "V+jx":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: PromissoryNotePeriodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriodModule", function() { return PromissoryNotePeriodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _promissory_note_period_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promissory-note-period-routing.module */ "RX6L");
/* harmony import */ var _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promissory-note-period.component */ "59d7");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let PromissoryNotePeriodModule = class PromissoryNotePeriodModule {
};
PromissoryNotePeriodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_4__["PromissoryNotePeriodComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _promissory_note_period_routing_module__WEBPACK_IMPORTED_MODULE_3__["PromissoryNotePeriodRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"],
        ]
    })
], PromissoryNotePeriodModule);



/***/ })

}]);
//# sourceMappingURL=promissory-note-period-promissory-note-period-module-es2015.js.map