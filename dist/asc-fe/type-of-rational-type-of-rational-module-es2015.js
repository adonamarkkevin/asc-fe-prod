(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-rational-type-of-rational-module"],{

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

/***/ "JuHp":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-rational/type-of-rational.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TypeOfRationalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfRationalModule", function() { return TypeOfRationalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _type_of_rational_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-rational-routing.module */ "o8Tb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _type_of_rational_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type-of-rational.component */ "K6pd");









let TypeOfRationalModule = class TypeOfRationalModule {
};
TypeOfRationalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_of_rational_component__WEBPACK_IMPORTED_MODULE_8__["TypeOfRationalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _type_of_rational_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeOfRationalRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"],
        ]
    })
], TypeOfRationalModule);



/***/ }),

/***/ "K6pd":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-rational/type-of-rational.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypeOfRationalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfRationalComponent", function() { return TypeOfRationalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_type_of_rational_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./type-of-rational.component.html */ "lWwP");
/* harmony import */ var _type_of_rational_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-of-rational.component.scss */ "p2+f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/type-of-rational.model */ "Do+y");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let TypeOfRationalComponent = class TypeOfRationalComponent {
    constructor(apiService, formBuilder, sweetAlertService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.displayedColumns = ['rationale', 'rationaleCategory', 'status'];
        this.statusList1 = ['FOR_COMPLIANCE', 'FOR_INCOMPLETE_DECISION', 'FOR_TOA_APPLICATION'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.typeOfRational = new app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfRational"]();
        this.typeOfRationalList = [];
    }
    ;
    ngOnInit() {
        this.getAllTypeOfRational();
        this.setFormValidator();
    }
    setFormValidator() {
        this.typeOfRationalForm = this.formBuilder.group({
            rationale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rationaleCategory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    resetFormValidator() {
        this.typeOfRational = new app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfRational"]();
        this.typeOfRational.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfRationalForm.markAsUntouched();
        this.typeOfRationalForm.markAsPristine();
    }
    getAllTypeOfRational() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfRationale).subscribe((res) => {
            console.log(res.responseData.data);
            this.typeOfRationalList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    getTypeOfRational() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfRationale, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.typeOfRational = res.responseData.data;
            }
        });
    }
    saveTypeOfRational() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfRationale, this.typeOfRational).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator();
            this.getAllTypeOfRational();
        });
    }
    updateTypeOfRational() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfRationale, this.typeOfRational).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator();
            this.getAllTypeOfRational();
        });
    }
    deleteTypeOfRational() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to delete this TYPE OF RATIONALE?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfRationale, this.typeOfRational.id).subscribe((res) => {
                    console.log(res.responseData.data);
                    this.sweetAlertService.customSuccessMessage('Type of rationale successfully deleted.');
                    this.resetFormValidator(),
                        this.getAllTypeOfRational();
                });
            }
        });
    }
};
TypeOfRationalComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] }
];
TypeOfRationalComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
TypeOfRationalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-rational',
        template: _raw_loader_type_of_rational_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_rational_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TypeOfRationalComponent);



/***/ }),

/***/ "lWwP":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-rational/type-of-rational.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n             Type of Rationale\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"typeOfRationalForm\">\r\n        <div class=\"row\">\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Rationale <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfRational.rationale\" name=\"rationale\" formControlName=\"rationale\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Rationale Category</mat-label>\r\n            <mat-select [(ngModel)]=\"typeOfRational.rationaleCategory\" name=\"rationaleCategory\" formControlName=\"rationaleCategory\">\r\n              <mat-option *ngFor=\"let i of statusList1\" [value]=\"i\">\r\n                {{i.replaceAll('_',' ') | uppercase }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfRational.id\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"typeOfRational.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i.status}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"typeOfRational\" [childForm]=\"typeOfRationalForm\" (saveFunction)=\"saveTypeOfRational()\"\r\n      (updateFunction)=\"updateTypeOfRational()\" (deleteFunction)=\"deleteTypeOfRational()\" (cancelFunction)=\"resetFormValidator()\"></app-form-action-buttons>\r\n      <br>\r\n\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getTypeOfRational()\"></app-form-list>\r\n\r\n     </div>\r\n  </form>");

/***/ }),

/***/ "o8Tb":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-rational/type-of-rational-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: TypeOfRationalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfRationalRoutingModule", function() { return TypeOfRationalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _type_of_rational_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-rational.component */ "K6pd");




const routes = [
    {
        path: '',
        component: _type_of_rational_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfRationalComponent"]
    }
];
let TypeOfRationalRoutingModule = class TypeOfRationalRoutingModule {
};
TypeOfRationalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TypeOfRationalRoutingModule);



/***/ }),

/***/ "p2+f":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-rational/type-of-rational.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1yYXRpb25hbC90eXBlLW9mLXJhdGlvbmFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=type-of-rational-type-of-rational-module-es2015.js.map