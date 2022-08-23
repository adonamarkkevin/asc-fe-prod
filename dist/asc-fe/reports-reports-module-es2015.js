(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "TulQ":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/reports/reports.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Reports\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div *ngIf=\"currentUser.userRole.name === 'ROLE_ACCOUNTING'\">\r\n    <form [formGroup]=\"reportForm\" >\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Date Start:</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"dateFrom\" readonly [(ngModel)]=\"dateFrome\"\r\n            name=\"dateFrom\" readonly formControlName=\"dateFrom\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"dateFrom\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"warn\" #dateFrom disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Date End:</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date\" readonly [(ngModel)]=\"dateTo\" name=\"dateTo\"\r\n            formControlName=\"dateTo\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"Date\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"warn\" #Date disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Report Type: </mat-label>\r\n          <mat-select [(ngModel)]=\"reportType\" name=\"reportType\" formControlName=\"reportType\">\r\n            <mat-option *ngFor=\"let i of reportTypeList\" [value]=\"i\"  (click)=\"setReportType(i)\">\r\n              {{i.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"selectedReportType !== reportTypes.VAT_SUMMARY && selectedReportType !== reportTypes.TAX_SUMMARY\">\r\n          <mat-label>Payment Type:</mat-label>\r\n          <mat-select name=\"paymentType\" formControlName=\"paymentType\">\r\n            <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i.id\" (click)=\"setPaymentType(i.id)\">\r\n              {{i.paymentDescription}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"selectedReportType === reportTypes.COLLECTION_REPORT || selectedReportType === reportTypes.REPORT_PER_COMPANY || selectedReportType === reportTypes.REPORT_PER_AGENCY\">\r\n          <mat-label>Company:</mat-label>\r\n          <mat-select   name=\"company\" formControlName=\"company\">\r\n            <mat-option *ngFor=\"let company of activeCompanyList\" [value]=\"company.id\" >\r\n              {{company.companyName}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"selectedReportType === reportTypes.COLLECTION_REPORT || selectedReportType === reportTypes.REPORT_PER_APPLICANT\">\r\n          <mat-label>Applicant:</mat-label>\r\n          <mat-select   name=\"applicant\" formControlName=\"applicant\">\r\n            <mat-option *ngFor=\"let applicant of applicants\" [value]=\"applicant.id\" >\r\n              {{applicant.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"selectedReportType === reportTypes.COLLECTION_REPORT || selectedReportType === reportTypes.REPORT_PER_SCREENER\">\r\n          <mat-label>Screener:</mat-label>\r\n          <mat-select   name=\"company\" formControlName=\"screener\">\r\n            <mat-option *ngFor=\"let screener of screeners\" [value]=\"screener.id\" >\r\n              {{screener.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"selectedReportType === reportTypes.REPORT_PER_MEDIUM\">\r\n          <mat-label>Mediums:</mat-label>\r\n          <mat-select name=\"medium\" formControlName=\"medium\">\r\n            <mat-option *ngFor=\"let medium of typeOfMediums\" [value]=\"medium.id\" >\r\n              {{ medium?.description }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\"></div>\r\n      <div class=\"col-md-3\">\r\n        <button mat-raised-button class=\"button-red\"  (click)=\"generateReport()\"\r\n          [disabled]=\"reportForm.controls['dateFrom']?.errors?.required || reportForm.controls['dateTo']?.errors?.required || reportForm.controls['reportType']?.errors?.required || !isPaymentTypeRequired\">\r\n          <i class=\"material-icons color__white\">task_alt</i> GENERATE\r\n        </button>\r\n        <br> <br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div  *ngIf=\"currentUser.userRole.name === 'ROLE_SUPER_ADMIN' || currentUser.userRole.name === 'ROLE_ADMIN'\">\r\n    <form [formGroup]=\"newReportForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Date Start:</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"dateFrom\" readonly [(ngModel)]=\"dateFrome\"\r\n            name=\"dateFrom\" readonly formControlName=\"dateFrom\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"dateFrom\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"warn\" #dateFrom disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Date End:</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"Date\" readonly [(ngModel)]=\"dateTo\" name=\"dateTo\"\r\n            formControlName=\"dateTo\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"Date\"></mat-datepicker-toggle>\r\n          <mat-datepicker color=\"warn\" #Date disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Report Type: </mat-label>\r\n          <mat-select [(ngModel)]=\"reportType\" name=\"reportType\" formControlName=\"reportType\">\r\n            <mat-option *ngFor=\"let i of newReportTypeList\" [value]=\"i.filename\" (click)=\"setReportType(i.filename)\">\r\n              {{i.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\"></div>\r\n      <div class=\"col-md-3\">\r\n        <button mat-raised-button class=\"button-red\"  (click)=\"generateReport()\"\r\n          [disabled]=\"newReportForm.controls['dateFrom']?.errors?.required  || newReportForm.controls['reportType']?.errors?.required \">\r\n          <i class=\"material-icons color__white\">task_alt</i> GENERATE\r\n        </button>\r\n        <br> <br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "boHR":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gxz3":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "ic0y");




const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
    }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportsRoutingModule);



/***/ }),

/***/ "ic0y":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports.component.html */ "TulQ");
/* harmony import */ var _reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component.scss */ "boHR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/models/payment-method.model */ "piSE");
/* harmony import */ var app_core_models_report_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/report.model */ "za27");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");











let ReportsComponent = class ReportsComponent {
    constructor(dataStorage, apiService, formBuilder, sweetAlertService, datepipe, spinner) {
        this.dataStorage = dataStorage;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.datepipe = datepipe;
        this.spinner = spinner;
        this.report = new app_core_models_report_model__WEBPACK_IMPORTED_MODULE_9__["Report"]();
        this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_8__["PaymentMethod"]();
        this.reportTypes = _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"];
        this.reportTypeList = [
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].COLLECTION_REPORT, filename: 'Collection_Report' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].VAT_SUMMARY, filename: 'VAT_TAX_Summary' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].TAX_SUMMARY, filename: 'VAT_TAX_Summary' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_COMPANY, filename: 'Per_Company' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_AGENCY, filename: 'Per_Agency' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_SCREENER, filename: 'Per_Screener' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_MEDIUM, filename: 'Per_Type_Of_Medium' },
            { name: _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_APPLICANT, filename: 'Per_Applicant' }
        ];
        this.applicants = [];
        this.screeners = [];
        this.newReportTypeList = [
            { name: 'Application Per Decision', filename: 'Application_Per_Decision' },
            { name: 'Screeners Productivity', filename: 'Screeners_Productivity' },
            { name: 'Ad Specialists-Encoders', filename: 'Ad_Specialists-Encoders' },
            { name: 'Top 20 Agencies', filename: 'Top_20_Agencies' },
            { name: 'Top 20 Categories(by Decision)', filename: 'Top_20_Categories(by_Decision)' },
            { name: 'Top 5 Categories Disapproval', filename: 'Top_5_Categories_Disapproval' },
            { name: 'Top 5 Agencies Disapproval', filename: 'Top_5_Agencies_Disapproval' },
            { name: 'Decision Per Type of medium', filename: 'Decision_per_type_of_medium' },
            { name: 'Top 20 Clients(with Medium)', filename: 'Top_20_Clients(with_Medium)' },
            { name: 'Top 20 Categories(with Medium)', filename: 'Top_20_Categories(with_Medium)' },
            { name: 'Top 20 Clients', filename: 'Top_20_Clients' },
            { name: 'Top 20 Agencies(with client)', filename: 'Top_20_Agencies(with_client)' }
        ];
        this.paymentTypeList = [];
        this.activeCompanyList = [];
        this.isPaymentTypeRequired = true;
        this.paymentTypeAll = {
            "id": 0,
            "paymentDescription": "All",
        };
    }
    ngOnInit() {
        this.currentUser = this.dataStorage.getUserAccount();
        this.setFormValidator();
        this.getPaymentType();
        this.getActiveCompanies();
        console.log(this.currentUser.userRole.name);
        this.getApplicants();
        this.getScreeners();
        this.getTypeOfMediums();
    }
    ngOnDestroy() {
    }
    getApplicants() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].userAccountType + '/APPLICANT').subscribe((res) => {
            var _c, _d, _e;
            // console.log('applicants', res.responseData.data);
            this.applicants.push({ name: 'ALL', id: 0 });
            if (((_c = res === null || res === void 0 ? void 0 : res.responseData) === null || _c === void 0 ? void 0 : _c.data) && ((_e = (_d = res === null || res === void 0 ? void 0 : res.responseData) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.length)) {
                res.responseData.data.filter(e => {
                    this.applicants.push({ name: `${e.firstName} ${e.middleName} ${e.lastName}`, id: e.id });
                });
            }
        });
    }
    setFormValidator() {
        if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
            this.reportForm = this.formBuilder.group({
                reportType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                paymentType: [0],
                company: [0],
                applicant: [0],
                screener: [0],
                medium: [0],
                dateFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                dateTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            });
        }
        else {
            this.newReportForm = this.formBuilder.group({
                reportType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                dateFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                dateTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
        }
    }
    getPaymentType() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].paymentType).subscribe((res) => {
            this.paymentTypeList = res.responseData.data;
            this.paymentTypeList.unshift(this.paymentTypeAll);
        });
    }
    getScreeners() {
        this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].userPerRole}${8}`).subscribe(screener => {
            var _c, _d, _e;
            this.screeners.push({ name: 'ALL', id: 0 });
            if (((_c = screener === null || screener === void 0 ? void 0 : screener.responseData) === null || _c === void 0 ? void 0 : _c.data) && ((_e = (_d = screener === null || screener === void 0 ? void 0 : screener.responseData) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.length)) {
                screener.responseData.data.filter(e => {
                    this.screeners.push({ name: `${e.firstName} ${e.middleName} ${e.lastName}`, id: e.id });
                });
            }
        });
    }
    getTypeOfMediums() {
        this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].typeOfMedium}`).subscribe(response => {
            this.typeOfMediums = response.responseData.data;
            this.typeOfMediums.unshift({ description: 'ALL', id: 0 });
        });
    }
    getActiveCompanies() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].activeCompanies).subscribe(res => {
            this.activeCompanyList = res.responseData.data;
            this.activeCompanyList.push({
                "id": 0,
                "companyName": "All",
            });
            this.activeCompanyList.sort((_a, _b) => {
                return (_a.id - _b.id);
            });
        });
    }
    setReportType(res) {
        if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
            this.selectedReportType = res.name;
            if (this.selectedReportType === 'Collection Report') {
                this.isPaymentTypeRequired = false;
            }
            else {
                this.reportForm.get('paymentType').patchValue(0);
                this.isPaymentTypeRequired = true;
                this.selectedPaymentType = 0;
            }
        }
        else {
            this.selectedReportType = res;
        }
    }
    setPaymentType(id) {
        this.isPaymentTypeRequired = true;
        this.selectedPaymentType = id;
    }
    generateReport() {
        this.spinner.show();
        this.report.format = 'xlsx';
        console.log('selected ', this.selectedReportType);
        if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
            this.report.filename = 'VAT_TAX_Summary';
            this.report.module = 'Report';
            this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'reportType': this.reportType.filename };
            let valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}`;
            if (this.selectedReportType === 'Collection Report') {
                this.report.filename = 'Collection_Report';
                valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
            }
            else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_COMPANY) {
                this.report.filename = 'Per_Company';
                valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                this.report.params = { 'companyId': this.reportForm.get('company').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
            }
            else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_AGENCY) {
                this.report.filename = 'Per_Agency';
                valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                this.report.params = { 'agencyId': this.reportForm.get('company').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
            }
            else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_SCREENER) {
                this.report.filename = 'Per_Screener';
                valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                this.report.params = { 'screenerId': this.reportForm.get('screener').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
            }
            else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_APPLICANT) {
                this.report.filename = 'Per_Applicant';
                valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                this.report.params = { 'applicantId': this.reportForm.get('applicant').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
            }
            else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_7__["REPORT_TYPE"].REPORT_PER_MEDIUM) {
                this.report.filename = 'Per_Type_Of_Medium';
                valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                this.report.params = { 'typeOfMediumId': this.reportForm.get('medium').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
            }
            else if (this.selectedReportType === 'VAT Summary') {
                this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'reportType': 'vat' };
            }
            else if (this.selectedReportType === 'TAX Summary') {
                this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'reportType': 'wtax' };
            }
            this.apiService.findAll(valdationReportEndpoint).subscribe((data) => {
                if (data.length > 0) {
                    this.printReport(this.report);
                }
                else {
                    this.sweetAlertService.customErrorMessage('No Record found on date ranged');
                    this.spinner.hide();
                }
            });
        }
        else {
            this.report.filename = this.selectedReportType;
            let dateFrom = `${this.datepipe.transform(this.newReportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`;
            let dateTo = `${this.datepipe.transform(this.newReportForm.get('dateTo').value, 'MM/dd/yyyy')}`;
            this.report.module = 'AppData';
            this.report.params = { 'dateFrom': dateFrom, 'dateTo': dateTo };
            this.printReport(this.report);
        }
    }
    printReport(report) {
        this.apiService.printReport(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].generateReports, report).subscribe((data) => {
            const newBlob = new Blob([(data)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const downloadURL = URL.createObjectURL(newBlob);
            var anchor = document.createElement('a');
            anchor.download = this.selectedReportType + '.xlsx';
            anchor.href = downloadURL;
            anchor.click();
            if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
                this.reportForm.reset();
                this.reportForm.patchValue({
                    paymentType: 0,
                    company: 0,
                    applicant: 0,
                    screener: 0,
                    medium: 0,
                });
            }
            else {
                this.newReportForm.reset();
            }
            this.selectedReportType = null;
            this.sweetAlertService.customSuccessMessage('Successfully Generated!');
            this.spinner.hide();
        }, (err) => {
            // console.log(err);
            this.spinner.hide();
            this.sweetAlertService.customErrorMessage('No Record found on date ranged');
        });
    }
};
ReportsComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }
];
ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-reports',
        template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportsComponent);



/***/ }),

/***/ "piSE":
/*!*****************************************************!*\
  !*** ./src/app/core/models/payment-method.model.ts ***!
  \*****************************************************/
/*! exports provided: PaymentMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return PaymentMethod; });
class PaymentMethod {
}


/***/ }),

/***/ "qZlX":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports.module.ts ***!
  \********************************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "gxz3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.component */ "ic0y");








let ReportsModule = class ReportsModule {
};
ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        ]
    })
], ReportsModule);



/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es2015.js.map