(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["holiday-holiday-module"],{

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

/***/ "EepS":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/holiday/holiday.component.ts ***!
  \************************************************************************/
/*! exports provided: HolidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayComponent", function() { return HolidayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_holiday_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./holiday.component.html */ "Izj/");
/* harmony import */ var _holiday_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./holiday.component.scss */ "ev7J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/holiday.model */ "lflh");
/* harmony import */ var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/date.service */ "HMc/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let HolidayComponent = class HolidayComponent {
    constructor(apiService, formBuilder, sweetAlertService, dateService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.dateService = dateService;
        this.displayedColumns = [
            "holidayName",
            "holidayDate",
            "holidayType",
            "status",
        ];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.holidayTypeList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["HOLIDAY_TYPE"]];
        this.holiday = new app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_9__["Holiday"]();
        this.holidayList = [];
        this.disabledWeekEnds = (d) => {
            const day = (d || new Date()).getDay();
            if (this.holiday.holidayType === "WEEKEND") {
                return day === 0 || day === 6;
            }
            return day !== 0 && day !== 6;
        };
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].holidays).subscribe((res) => {
            this.holidayList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.holiday.holidayDate = this.dateService.setDate(this.holiday.holidayDate);
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].holidays, this.holiday).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        }, () => {
            this.resetFormValidator(), this.getList();
        });
    }
    getHoliday() {
        this.apiService
            .findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].holidays, this.formListComponent.idForUpdate)
            .subscribe((res) => {
            if (res) {
                this.holiday = res.responseData.data;
                console.log(res);
            }
        });
    }
    update() {
        this.holiday.holidayDate = this.dateService.setDate(this.holiday.holidayDate);
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].holidays, this.holiday).subscribe((res) => {
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
        this.holiday.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.holidayForm = this.formBuilder.group({
            holidayName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            holidayDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            holidayType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [""],
        });
    }
    resetFormValidator() {
        this.holiday = new app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_9__["Holiday"]();
        this.holiday.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.holidayForm.markAsUntouched();
        this.holidayForm.markAsPristine();
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: "Are you sure you want to delete this holiday?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
        }).then((result) => {
            if (result.value) {
                this.apiService
                    .deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].holidays, this.holiday.id)
                    .subscribe(() => {
                    this.sweetAlertService.customSuccessMessage("Holiday successfully deleted.");
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
HolidayComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: app_core_services_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] }
];
HolidayComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
HolidayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-holiday",
        template: _raw_loader_holiday_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_holiday_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HolidayComponent);



/***/ }),

/***/ "Izj/":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/holiday/holiday.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n            Holiday\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"holidayForm\">\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Holiday Type <span class=\"required-field\">*</span></mat-label>\r\n            <mat-select [(ngModel)]=\"holiday.holidayType\" name=\"holidayType\" formControlName=\"holidayType\">\r\n              <mat-option *ngFor=\"let i of holidayTypeList\" [value]=\"i.type\">\r\n                {{i?.type?.replaceAll('_',' ')}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n            <mat-label>Holiday Name <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"holiday.holidayName\" name=\"holidayName\" formControlName=\"holidayName\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Holiday Date</mat-label>\r\n              <input matInput placeholder=\"Date\" [matDatepicker]=\"holidayDate\"\r\n                  [matDatepickerFilter]=\"disabledWeekEnds\" readonly [(ngModel)]=\"holiday.holidayDate\"\r\n                  name=\"holidayDate\" formControlName=\"holidayDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"holidayDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker color=\"warn\" #holidayDate disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"holiday.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i.status}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"holiday\" [childForm]=\"holidayForm\" (saveFunction)=\"save()\"\r\n        (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n      <br>\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n        (selectInListFunction)=\"getHoliday()\"></app-form-list>\r\n\r\n    </div>\r\n  </form>\r\n");

/***/ }),

/***/ "Rcoy":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/holiday/holiday-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HolidayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayRoutingModule", function() { return HolidayRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _holiday_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./holiday.component */ "EepS");




const routes = [
    {
        path: '',
        component: _holiday_component__WEBPACK_IMPORTED_MODULE_3__["HolidayComponent"]
    }
];
let HolidayRoutingModule = class HolidayRoutingModule {
};
HolidayRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HolidayRoutingModule);



/***/ }),

/***/ "ev7J":
/*!**************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/holiday/holiday.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvaG9saWRheS9ob2xpZGF5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ynZ1":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/holiday/holiday.module.ts ***!
  \*********************************************************************/
/*! exports provided: HolidayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayModule", function() { return HolidayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _holiday_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./holiday-routing.module */ "Rcoy");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _holiday_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./holiday.component */ "EepS");









let HolidayModule = class HolidayModule {
};
HolidayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _holiday_component__WEBPACK_IMPORTED_MODULE_8__["HolidayComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _holiday_routing_module__WEBPACK_IMPORTED_MODULE_3__["HolidayRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"],
        ]
    })
], HolidayModule);



/***/ })

}]);
//# sourceMappingURL=holiday-holiday-module-es2015.js.map