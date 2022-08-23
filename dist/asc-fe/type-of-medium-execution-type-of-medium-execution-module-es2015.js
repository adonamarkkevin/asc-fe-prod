(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-medium-execution-type-of-medium-execution-module"],{

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

/***/ "WiQ/":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium-execution/type-of-medium-execution.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1tZWRpdW0tZXhlY3V0aW9uL3R5cGUtb2YtbWVkaXVtLWV4ZWN1dGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "bVFk":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium-execution/type-of-medium-execution.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TypeOfMediumExecutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumExecutionComponent", function() { return TypeOfMediumExecutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_type_of_medium_execution_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./type-of-medium-execution.component.html */ "ny7b");
/* harmony import */ var _type_of_medium_execution_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-of-medium-execution.component.scss */ "WiQ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_type_of_execution_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/type-of-execution.model */ "Hjha");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let TypeOfMediumExecutionComponent = class TypeOfMediumExecutionComponent {
    constructor(apiService, formBuilder, sweetAlertService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.displayedColumns = ['typeOfExecution', 'applyForTOA', 'applyForS2', 'status'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.typeOfExecution = new app_core_models_type_of_execution_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfExecution"]();
        this.typeOfExecutionList = [];
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfExecutions).subscribe((res) => {
            this.typeOfExecutionList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfExecutions, this.typeOfExecution).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator(),
                this.getList();
        });
    }
    getTypeOfExecution() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfExecutions, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.typeOfExecution = res.responseData.data;
                console.log(res.responseData.data);
            }
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfExecutions, this.typeOfExecution).subscribe((res) => {
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
        this.typeOfExecution.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfExecutionForm = this.formBuilder.group({
            typeOfExecution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [''],
        });
    }
    resetFormValidator() {
        this.typeOfExecution = new app_core_models_type_of_execution_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfExecution"]();
        this.typeOfExecution.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfExecutionForm.markAsUntouched();
        this.typeOfExecutionForm.markAsPristine();
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to delete this type of execution?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfExecutions, this.typeOfExecution.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('Type of execution successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
TypeOfMediumExecutionComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] }
];
TypeOfMediumExecutionComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
TypeOfMediumExecutionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-medium-execution',
        template: _raw_loader_type_of_medium_execution_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_medium_execution_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TypeOfMediumExecutionComponent);



/***/ }),

/***/ "gSGB":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium-execution/type-of-medium-execution.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TypeOfMediumExecutionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumExecutionModule", function() { return TypeOfMediumExecutionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _type_of_medium_execution_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-medium-execution-routing.module */ "lUfL");
/* harmony import */ var _type_of_medium_execution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-of-medium-execution.component */ "bVFk");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let TypeOfMediumExecutionModule = class TypeOfMediumExecutionModule {
};
TypeOfMediumExecutionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_of_medium_execution_component__WEBPACK_IMPORTED_MODULE_4__["TypeOfMediumExecutionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _type_of_medium_execution_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeOfMediumExecutionRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"],
        ]
    })
], TypeOfMediumExecutionModule);



/***/ }),

/***/ "lUfL":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium-execution/type-of-medium-execution-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TypeOfMediumExecutionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumExecutionRoutingModule", function() { return TypeOfMediumExecutionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _type_of_medium_execution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-medium-execution.component */ "bVFk");




const routes = [
    {
        path: '',
        component: _type_of_medium_execution_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfMediumExecutionComponent"]
    }
];
let TypeOfMediumExecutionRoutingModule = class TypeOfMediumExecutionRoutingModule {
};
TypeOfMediumExecutionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TypeOfMediumExecutionRoutingModule);



/***/ }),

/***/ "ny7b":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-medium-execution/type-of-medium-execution.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n      THIS IS TYPE OF EXECUTION\r\n -->\r\n<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    Type Of Execution\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"typeOfExecutionForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n                    <mat-label>Type Of Execution <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"typeOfExecution.typeOfExecution\" name=\"typeOfExecution\"\r\n                        formControlName=\"typeOfExecution\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Status</mat-label>\r\n                    <mat-select [(ngModel)]=\"typeOfExecution.status\" name=\"status\" formControlName=\"status\">\r\n                        <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                            {{i.status}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-1\"><b>Live</b></div>\r\n                <div class=\"col-md-1\">\r\n                    <mat-slide-toggle [(ngModel)]=\"typeOfExecution.live\"\r\n                        [ngModelOptions]=\"{standalone: true}\" [checked]=\"typeOfExecution?.live\"\r\n                        name=\"live\" color=\"warn\">\r\n                    </mat-slide-toggle>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                  <b>True:</b> The application is for S1 only.<br>\r\n                  <b>False:</b> Can apply for Special Clearing Request/S2 Application.\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n\r\n            <div class=\"row\"><br></div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-1\"> <b>Apply for TOA</b></div>\r\n                <div class=\"col-md-1\">\r\n                  <mat-slide-toggle [(ngModel)]=\"typeOfExecution.applyForToa\"\r\n                      [ngModelOptions]=\"{standalone: true}\" [checked]=\"typeOfExecution?.applyForToa\"\r\n                      name=\"applyForToa\" color=\"warn\">\r\n                  </mat-slide-toggle>\r\n\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                  <b>True:</b> The application can only apply for TOA.<br>\r\n                  <b>False:</b> Unable to apply for TOA.\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"typeOfExecution\" [childForm]=\"typeOfExecutionForm\"\r\n            (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\">\r\n        </app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getTypeOfExecution()\"></app-form-list>\r\n\r\n    </div>\r\n</form>\r\n");

/***/ })

}]);
//# sourceMappingURL=type-of-medium-execution-type-of-medium-execution-module-es2015.js.map