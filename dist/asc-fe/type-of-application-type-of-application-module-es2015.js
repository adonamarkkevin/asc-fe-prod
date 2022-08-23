(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-application-type-of-application-module"],{

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

/***/ "4Xm8":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1hcHBsaWNhdGlvbi90eXBlLW9mLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "G3MP":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-application/type-of-application.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n             Type of Application\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"typeOfApplicationForm\">\r\n        <div class=\"row\">\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Description <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.description\" name=\"description\" formControlName=\"description\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Sequence Number <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.sequenceNo\" name=\"sequenceNo\" formControlName=\"sequenceNo\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfApplication.id\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"typeOfApplication.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i.status}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Clearing Release Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.clearingReleaseTime\" name=\"clearingReleaseTime\"\r\n              formControlName=\"clearingReleaseTime\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Decision Release Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.decisionReleaseTime\" name=\"decisionReleaseTime\"\r\n              formControlName=\"decisionReleaseTime\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Submission Start Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.submissionStartTime\" name=\"submissionStartTime\"\r\n              formControlName=\"submissionStartTime\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Submission End Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.submissionEndTime\" name=\"submissionEndTime\"\r\n              formControlName=\"submissionEndTime\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"typeOfApplication\" [childForm]=\"typeOfApplicationForm\" (saveFunction)=\"save()\"\r\n        (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n          (selectInListFunction)=\"getTypeOfApplication()\"></app-form-list>\r\n    </div>\r\n  </form>\r\n");

/***/ }),

/***/ "nRib":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TypeOfApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplicationModule", function() { return TypeOfApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _type_of_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-application-routing.module */ "ncxP");
/* harmony import */ var _type_of_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-of-application.component */ "ws1B");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../fragments/fragments.module */ "7Tf7");









let TypeOfApplicationModule = class TypeOfApplicationModule {
};
TypeOfApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_of_application_component__WEBPACK_IMPORTED_MODULE_4__["TypeOfApplicationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _type_of_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeOfApplicationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]
        ]
    })
], TypeOfApplicationModule);



/***/ }),

/***/ "ncxP":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TypeOfApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplicationRoutingModule", function() { return TypeOfApplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _type_of_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-application.component */ "ws1B");




const routes = [
    {
        path: '',
        component: _type_of_application_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfApplicationComponent"]
    }
];
let TypeOfApplicationRoutingModule = class TypeOfApplicationRoutingModule {
};
TypeOfApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TypeOfApplicationRoutingModule);



/***/ }),

/***/ "ws1B":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TypeOfApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplicationComponent", function() { return TypeOfApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_type_of_application_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./type-of-application.component.html */ "G3MP");
/* harmony import */ var _type_of_application_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-of-application.component.scss */ "4Xm8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let TypeOfApplicationComponent = class TypeOfApplicationComponent {
    constructor(apiService, formBuilder, sweetAlertService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.displayedColumns = ['description', 'clearingReleaseTime', 'decisionReleaseTime', 'submissionStartTime', 'submissionEndTime'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_9__["STATUSES"]];
        this.typeOfApplication = new _models__WEBPACK_IMPORTED_MODULE_7__["TypeOfApplication"]();
        this.typeOfApplicationList = [];
        this.formTypeList = [..._shared__WEBPACK_IMPORTED_MODULE_9__["FORM_TYPE"]];
    }
    ;
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType).subscribe((res) => {
            console.log(res.responseData.data);
            this.typeOfApplicationList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.typeOfApplication).subscribe((res) => {
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
    getTypeOfApplication() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.typeOfApplication = res.responseData.data;
            }
        });
    }
    update() {
        // this.typeOfApplication.modifiedBy = "J. Dela Cruz";
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.typeOfApplication).subscribe((res) => {
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
        formType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.typeOfApplication.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfApplicationForm = this.formBuilder.group({
            // formType: ['', Validators.required],
            clearingReleaseTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            decisionReleaseTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            sequenceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            submissionEndTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            submissionStartTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    resetFormValidator() {
        this.typeOfApplication = new _models__WEBPACK_IMPORTED_MODULE_7__["TypeOfApplication"]();
        this.typeOfApplication.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfApplicationForm.markAsUntouched();
        this.typeOfApplicationForm.markAsPristine();
    }
    compareFormType(value, selected) {
        if (value && selected) {
            return value.description === selected;
        }
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to delete this type of application?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.typeOfApplication.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('Type of application successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
TypeOfApplicationComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"] }
];
TypeOfApplicationComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
TypeOfApplicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-application',
        template: _raw_loader_type_of_application_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_application_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TypeOfApplicationComponent);



/***/ })

}]);
//# sourceMappingURL=type-of-application-type-of-application-module-es2015.js.map