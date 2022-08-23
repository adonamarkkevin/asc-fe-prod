(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-content-announcement-content-module"],{

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

/***/ "E5Y0":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYW5ub3VuY2VtZW50LWNvbnRlbnQvYW5ub3VuY2VtZW50LWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "LmGG":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AnnouncementContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementContentRoutingModule", function() { return AnnouncementContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _announcement_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcement-content.component */ "MvWX");




const routes = [
    {
        path: '',
        component: _announcement_content_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementContentComponent"]
    }
];
let AnnouncementContentRoutingModule = class AnnouncementContentRoutingModule {
};
AnnouncementContentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AnnouncementContentRoutingModule);



/***/ }),

/***/ "MvWX":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AnnouncementContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementContentComponent", function() { return AnnouncementContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_announcement_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./announcement-content.component.html */ "uHUQ");
/* harmony import */ var _announcement_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcement-content.component.scss */ "E5Y0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/announcement.model */ "dszm");
/* harmony import */ var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/date.service */ "HMc/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let AnnouncementContentComponent = class AnnouncementContentComponent {
    constructor(apiService, formBuilder, sweetAlertService, dateService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.dateService = dateService;
        this.displayedColumns = ['title', 'details', 'noOfView', 'postingDate', 'status'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.announcement = new app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_9__["Announcement"]();
        this.announcementList = [];
        this.disabledWeekEnds = (d) => {
            const day = (d || new Date()).getDay();
            return day !== 0 && day !== 6;
        };
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements).subscribe((res) => {
            this.announcementList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    save() {
        this.announcement.postingDate = this.dateService.setDate(this.announcement.postingDate);
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.announcement).subscribe((res) => {
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
    getAnnouncement() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.announcement = res.responseData.data;
                console.log(res);
            }
        });
    }
    update() {
        this.announcement.postingDate = this.dateService.setDate(this.announcement.postingDate);
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.announcement).subscribe((res) => {
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
        this.announcement.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.announcementForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            noOfView: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [''],
            link: ['']
        });
    }
    resetFormValidator() {
        this.announcement = new app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_9__["Announcement"]();
        this.announcement.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.announcementForm.markAsUntouched();
        this.announcementForm.markAsPristine();
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
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.announcement.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('Announcement successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
AnnouncementContentComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: app_core_services_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] }
];
AnnouncementContentComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
AnnouncementContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-announcement-content',
        template: _raw_loader_announcement_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_announcement_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AnnouncementContentComponent);



/***/ }),

/***/ "jfQZ":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AnnouncementContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementContentModule", function() { return AnnouncementContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _announcement_content_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcement-content-routing.module */ "LmGG");
/* harmony import */ var _announcement_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./announcement-content.component */ "MvWX");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let AnnouncementContentModule = class AnnouncementContentModule {
};
AnnouncementContentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_announcement_content_component__WEBPACK_IMPORTED_MODULE_4__["AnnouncementContentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _announcement_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnouncementContentRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"],
        ]
    })
], AnnouncementContentModule);



/***/ }),

/***/ "uHUQ":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/announcement-content/announcement-content.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                  <mat-icon>announcement</mat-icon> Announcements\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"announcementForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Title <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"announcement.title\" name=\"title\" formControlName=\"title\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Details <span class=\"required-field\">*</span></mat-label>\r\n                    <textarea matInput [(ngModel)]=\"announcement.details\" name=\"details\"\r\n                        formControlName=\"details\"></textarea>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Link <span class=\"required-field\">*</span></mat-label>\r\n                    <textarea matInput [(ngModel)]=\"announcement.link\" name=\"link\"\r\n                        formControlName=\"link\"></textarea>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Number Of View <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"announcement.noOfView\" name=\"noOfView\" formControlName=\"noOfView\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Posting Date</mat-label>\r\n                    <input matInput placeholder=\"Date\" [matDatepicker]=\"postingDate\"\r\n                        [matDatepickerFilter]=\"disabledWeekEnds\" readonly [(ngModel)]=\"announcement.postingDate\"\r\n                        name=\"postingDate\" formControlName=\"postingDate\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"postingDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker color=\"warn\" #postingDate disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Status</mat-label>\r\n                    <mat-select [(ngModel)]=\"announcement.status\" name=\"status\" formControlName=\"status\">\r\n                        <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                            {{i.status}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"announcement\" [childForm]=\"announcementForm\" (saveFunction)=\"save()\"\r\n            (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getAnnouncement()\"></app-form-list>\r\n\r\n    </div>\r\n</form>\r\n");

/***/ })

}]);
//# sourceMappingURL=announcement-content-announcement-content-module-es2015.js.map