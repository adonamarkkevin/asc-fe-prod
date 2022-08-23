(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medium-execution-controller-medium-execution-controller-module"],{

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

/***/ "5EpM":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/medium-execution-controller/medium-execution-controller.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MediumExecutionControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumExecutionControllerComponent", function() { return MediumExecutionControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_medium_execution_controller_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./medium-execution-controller.component.html */ "6AE+");
/* harmony import */ var _medium_execution_controller_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medium-execution-controller.component.scss */ "UJSL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/medium-execution-controller.model */ "Ql0k");
/* harmony import */ var app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/models/type-of-medium-execution.model */ "XP8G");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
















let MediumExecutionControllerComponent = class MediumExecutionControllerComponent {
    constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.validateFieldService = validateFieldService;
        this.displayedColumns = ['typeOfMediumController', 'typeOfExecutionController'];
        this.mediumExecutionController = new app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_12__["MediumExecutionController"]();
        this.typeOfMedium = new _models__WEBPACK_IMPORTED_MODULE_9__["TypeOfMedium"]();
        this.typeOfMediumExecution = new app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_13__["TypeOfMediumExecution"]();
        this.typeOfMediumList = [];
        this.typeOfMediumExecutionList = [];
        this.mediumExecutionControllerList = [];
    }
    ngOnInit() {
        this.setFormValidator();
        this.getMaintenance();
        this.getList();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].mediumExecutionController).subscribe((res) => {
            this.mediumExecutionControllerList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    getMediumExecution() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].mediumExecutionController, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.mediumExecutionController = res.responseData.data;
            }
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].mediumExecutionController, this.mediumExecutionController).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator();
            this.getList();
            this.getMaintenance();
        });
    }
    update() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].mediumExecutionController, this.mediumExecutionController).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator();
            this.getList();
            this.getMaintenance();
        });
    }
    getMaintenance() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].typeOfMedium).subscribe((res) => {
            this.typeOfMediumList = res.responseData.data;
        });
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].typeOfExecutions).subscribe((res) => {
            this.typeOfMediumExecutionList = res.responseData.data;
        });
    }
    compareTypeOfMedium(value, selected) {
        if (value && selected) {
            return value.description === selected.description;
        }
    }
    compareTypeOfExecution(value, selected) {
        if (value && selected) {
            return value.typeOfExecution === selected.typeOfExecution;
        }
    }
    setFormValidator() {
        this.mediumExecutionControllerForm = this.formBuilder.group({
            typeOfExecution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typeOfMedium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.mediumExecutionController = new app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_12__["MediumExecutionController"]();
        this.typeOfMedium = new _models__WEBPACK_IMPORTED_MODULE_9__["TypeOfMedium"]();
        this.typeOfMediumExecution = new app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_13__["TypeOfMediumExecution"]();
        this.mediumExecutionControllerForm.markAsUntouched();
        this.mediumExecutionControllerForm.markAsPristine();
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a.fire({
            text: 'Are you sure you want to delete this brand?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].mediumExecutionController, this.mediumExecutionController.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('Medium execution controller successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
MediumExecutionControllerComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_14__["ValidateFieldService"] }
];
MediumExecutionControllerComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_8__["FormListComponent"],] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false },] }]
};
MediumExecutionControllerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medium-execution-controller',
        template: _raw_loader_medium_execution_controller_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medium_execution_controller_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MediumExecutionControllerComponent);



/***/ }),

/***/ "6AE+":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/medium-execution-controller/medium-execution-controller.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <span class=\"material-icons\">badge</span> Medium Execution Controller\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <b><b class=\"material-icons\">error_outline</b> <i>&nbsp;Note: All type of medium must have Medium Execution, select \"NO EXECUTION\" if none.</i></b>\r\n    </div>\r\n    <form class=\"row\" [formGroup]=\"mediumExecutionControllerForm\">\r\n      <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n        <mat-label> Type of Medium <mat-icon>notification_important</mat-icon>\r\n        </mat-label>\r\n        <mat-select [(ngModel)]=\"mediumExecutionController.typeOfMedium\" name=\"typeOfMedium\"\r\n          [compareWith]=\"compareTypeOfMedium\" formControlName=\"typeOfMedium\" matNativeControl>\r\n          <mat-option *ngFor=\"let i of typeOfMediumList\" [value]=\"i\">\r\n            {{i.description}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n        <mat-label>Type of Execution <mat-icon>notification_important</mat-icon>\r\n        </mat-label>\r\n        <mat-select [(ngModel)]=\"mediumExecutionController.typeOfExecution\" name=\"typeOfExecution\"\r\n          [compareWith]=\"compareTypeOfExecution\" formControlName=\"typeOfExecution\" matNativeControl>\r\n          <mat-option *ngFor=\"let i of typeOfMediumExecutionList\" [value]=\"i\">\r\n            {{i.typeOfExecution}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <app-form-action-buttons [childObject]=\"mediumExecutionController\" [childForm]=\"mediumExecutionControllerForm\"\r\n        (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"\r\n        (deleteFunction)=\"delete()\"></app-form-action-buttons><br><br><br>\r\n\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n        (selectInListFunction)=\"getMediumExecution()\"></app-form-list>\r\n    </form>\r\n\r\n  </div>\r\n\r\n\r\n</form>\r\n");

/***/ }),

/***/ "9iWe":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/medium-execution-controller/medium-execution-controller-routing.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MediumExecutionControllerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumExecutionControllerRoutingModule", function() { return MediumExecutionControllerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _medium_execution_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium-execution-controller.component */ "5EpM");




const routes = [
    {
        path: "",
        component: _medium_execution_controller_component__WEBPACK_IMPORTED_MODULE_3__["MediumExecutionControllerComponent"]
    }
];
let MediumExecutionControllerRoutingModule = class MediumExecutionControllerRoutingModule {
};
MediumExecutionControllerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MediumExecutionControllerRoutingModule);



/***/ }),

/***/ "UJSL":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/medium-execution-controller/medium-execution-controller.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbWVkaXVtLWV4ZWN1dGlvbi1jb250cm9sbGVyL21lZGl1bS1leGVjdXRpb24tY29udHJvbGxlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "cLrI":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/medium-execution-controller/medium-execution-controller.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MediumExecutionControllerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumExecutionControllerModule", function() { return MediumExecutionControllerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _medium_execution_controller_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium-execution-controller-routing.module */ "9iWe");
/* harmony import */ var _medium_execution_controller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medium-execution-controller.component */ "5EpM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let MediumExecutionControllerModule = class MediumExecutionControllerModule {
};
MediumExecutionControllerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_medium_execution_controller_component__WEBPACK_IMPORTED_MODULE_4__["MediumExecutionControllerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _medium_execution_controller_routing_module__WEBPACK_IMPORTED_MODULE_3__["MediumExecutionControllerRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"],
        ]
    })
], MediumExecutionControllerModule);



/***/ })

}]);
//# sourceMappingURL=medium-execution-controller-medium-execution-controller-module-es2015.js.map