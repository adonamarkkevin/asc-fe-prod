(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-voucher-company-voucher-enrollment-company-voucher-enrollment-module"],{

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

/***/ "Imlt":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>view_list</mat-icon> Company Voucher Enrollment\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getVoucherDetails()\"></app-form-list>\r\n    <br>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 information-title\">\r\n          <mat-label>\r\n            Company Information\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <br>\r\n      <div class=\"row col-md-12\">\r\n        <div class=\"row col-md-5\">\r\n          <div *ngIf=\"process==='save'\">\r\n            <mat-label>Voucher: &nbsp;&nbsp;&nbsp;<span>PDF file only!</span></mat-label><br>\r\n            <input class=\"file-upload\" type=\"file\" [(ngModel)]=\"attachment\" [ngModelOptions]=\"{standalone: true}\"\r\n              accept=\".pdf\" (change)=\"selectFile($event)\">\r\n          </div>\r\n          <div *ngIf=\"previewDocument===true\">\r\n            <div class=\"file-upload\">\r\n              <object [data]=\"safeURL\" type=\"application/pdf\" width=\"100%\" height=\"500\">\r\n                <iframe [src]=\"safeURL\" width=\"100%\" height=\"500\">\r\n                  <p>This browser does not support PDF!</p>\r\n                </iframe>\r\n              </object>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-7\">\r\n          <form [formGroup]=\"voucherForm\">\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" [hidden]=\"process === 'update'\">\r\n                <mat-label> Company Name\r\n                </mat-label>\r\n                <mat-select [(ngModel)]=\"voucher.company\" name=\"company\" formControlName=\"company\">\r\n                  <mat-option *ngFor=\"let i of companyList\" [value]=\"i\" (click)=\"getCompanyDetails(i)\">\r\n                    {{i.companyName}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"voucher.company && process === 'update'\">\r\n                <mat-label>Company Name</mat-label>\r\n                <input matInput [value]=\"company.companyName\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"voucher.company\">\r\n                <mat-label>Company TelephoneNo</mat-label>\r\n                <input matInput [value]=\"company.companyTelephoneNo\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"voucher.company\">\r\n                <mat-label>Company Tin </mat-label>\r\n                <input matInput [value]=\"company.companyTin\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"voucher.company\">\r\n                <mat-label>Company Address</mat-label>\r\n                <input matInput [value]=\"company.completeAddress\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Fund Amount <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucher.fundAmount\" name=\"fundAmount\" formControlName=\"fundAmount\"\r\n                  type=\"number\" [readonly]=\"process === 'update'\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Voucher Date</mat-label>\r\n                <input matInput placeholder=\"Date\" [matDatepicker]=\"voucherDate\" readonly\r\n                  [(ngModel)]=\"voucher.voucherDate\" name=\"voucherDate\" formControlName=\"voucherDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"voucherDate\" [hidden]=\"process === 'update'\"></mat-datepicker-toggle>\r\n                <mat-datepicker color=\"warn\" #voucherDate disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Status</mat-label>\r\n                <mat-select [(ngModel)]=\"voucher.status\" name=\"status\" formControlName=\"status\" [disabled]=\"process === 'update'\">\r\n                  <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                    {{i.status}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n            </div>\r\n          </form>\r\n          <div class=\"row col-md-12\">\r\n          <form [formGroup]=\"voucherSignatoriesForm\">\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Voucher Signatories Name <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucherSignatories.name\" name=\"voucherSignatoriesName\"\r\n                  formControlName=\"voucherSignatoriesName\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Voucher Signatories Position <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucherSignatories.position\" name=\"voucherSignatoriesPosition\"\r\n                  formControlName=\"voucherSignatoriesPosition\">\r\n              </mat-form-field>\r\n            </div>\r\n          </form>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\"></div>\r\n            <div class=\"col-md-3\">\r\n              <button mat-raised-button class=\"button-red\" (click)=\"setSignatoriesList(voucherSignatories)\"\r\n                [disabled]=\"voucherSignatoriesForm.controls['voucherSignatoriesPosition']?.errors?.required || voucherSignatoriesForm.controls['voucherSignatoriesName']?.errors?.required\">\r\n                <i class=\"material-icons color__white\">task_alt</i> Add Signatory\r\n              </button>\r\n              <br> <br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <app-form-list [dataSource]=\"dataSourceSignatories\" [displayedColumns]=\"displayedColumnsSignatories\" (deleteInListFunction)=\"onDeleteSignatory($event)\" (updateListFunction)=\"onUpdateSignatory($event)\"></app-form-list>\r\n            <!-- <app-form-action-buttons [childObject]=\"voucher\" [childForm]=\"voucherForm\" (saveFunction)=\"uploadVoucher()\"\r\n            (updateFunction)=\"saveVoucher()\"  (cancelFunction)=\"resetFormValidatorVoucher()\"></app-form-action-buttons>\r\n            <br> -->\r\n          <div class=\"row\" >\r\n            <div class=\"col-md-6\"></div>\r\n            <div class=\"col-md-3\">\r\n              <br>\r\n              <button mat-raised-button class=\"button-red\" (click)=\"uploadVoucher()\" [hidden]=\"process === 'update' \"\r\n              [disabled]=\"voucherForm.invalid || signatoriesList?.length === 0 || !attachment\">\r\n                <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <br>\r\n              <button mat-raised-button class=\"button-red\" (click)=\"reset()\" >\r\n                <i class=\"material-icons color__white\">task_alt</i> RESET\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "VPUY":
/*!**********************************************************!*\
  !*** ./src/app/core/models/voucher-signatories.model.ts ***!
  \**********************************************************/
/*! exports provided: VoucherSignatories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherSignatories", function() { return VoucherSignatories; });
class VoucherSignatories {
}


/***/ }),

/***/ "h435":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-green {\n  background-color: green;\n  color: white;\n}\n\n.information-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2NvbXBhbnktdm91Y2hlci9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9jb21wYW55LXZvdWNoZXIvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */");

/***/ }),

/***/ "m47g":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CompanyVoucherEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentComponent", function() { return CompanyVoucherEnrollmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_company_voucher_enrollment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./company-voucher-enrollment.component.html */ "Imlt");
/* harmony import */ var _company_voucher_enrollment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-voucher-enrollment.component.scss */ "h435");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/payment-method.model */ "piSE");
/* harmony import */ var app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/models/voucher-signatories.model */ "VPUY");
/* harmony import */ var app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/models/voucher.model */ "Inok");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);

















let CompanyVoucherEnrollmentComponent = class CompanyVoucherEnrollmentComponent {
    constructor(apiService, formBuilder, sanitizer, dataStorage, fileStorageService, sweetAlertService, router) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.dataStorage = dataStorage;
        this.fileStorageService = fileStorageService;
        this.sweetAlertService = sweetAlertService;
        this.router = router;
        this.displayedColumns = ['company', 'fundAmount', 'voucherDate'];
        this.displayedColumnsSignatories = ['name', 'position', 'voucherActionItems'];
        this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__["Voucher"]();
        this.company = new _models__WEBPACK_IMPORTED_MODULE_9__["Company"]();
        this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_13__["VoucherSignatories"]();
        this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_12__["PaymentMethod"]();
        this.voucherList = [];
        this.companyList = [];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_11__["STATUSES"]];
        this.signatoriesList = [];
        // safeURLVoucherEnrollment: any;
        this.process = 'save';
        this.previewDocument = false;
        this.currentDate = new Date();
        this.disabledWeekEnds = (d) => {
            const day = (d || new Date()).getDay();
            return day !== 0 && day !== 6;
        };
    }
    ngOnInit() {
        this.setFormValidator();
        this.setSignatoriesForm();
        this.getVoucherList();
        this.getCompanyList();
    }
    ngOnDestroy() {
    }
    setFormValidator() {
        this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_11__["COMMON_FUNCTION"].ACTIVE;
        this.voucherForm = this.formBuilder.group({
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            fundAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            voucherDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    setSignatoriesForm() {
        this.voucherSignatoriesForm = this.formBuilder.group({
            voucherSignatoriesName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            voucherSignatoriesPosition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    resetsetSignatoriesForm() {
        this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_11__["COMMON_FUNCTION"].ACTIVE;
        this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_13__["VoucherSignatories"]();
        this.voucherSignatoriesForm.markAsUntouched();
        this.voucherSignatoriesForm.markAsPristine();
    }
    resetFormValidatorVoucher() {
        this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_11__["COMMON_FUNCTION"].ACTIVE;
        this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__["Voucher"]();
        this.attachment = null;
        this.voucherForm.markAsUntouched();
        this.voucherForm.markAsPristine();
    }
    selectFile(event) {
        const attachmentSize = event.target.files[0].size;
        if (event.target.files[0].type === 'application/pdf') {
            if (attachmentSize > 15000000) { // 1MB = 1M
                this.sweetAlertService.customErrorMessage(`Attachments' total file size should not exceed 15MB.`);
                event.target.value = '';
                return;
            }
            else {
                const pdfURL = URL.createObjectURL(event.target.files[0]);
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
                this.previewDocument = true;
                const reader = new FileReader();
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onload = () => {
                };
            }
            this.selectedFiles = event.target.files;
        }
        else {
            this.sweetAlertService.customErrorMessage('Attachment should be in PDF format only.');
            event.target.value = '';
            return;
        }
    }
    uploadVoucher() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            text: 'Are you sure you want to submit this VOUCHER?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.dataStorage.setDisplayProgressbar(true);
                let params = '';
                params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_11__["ATTACHMENT_TYPE"].VOUCHER_FUND + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_11__["SUBMISSION_TYPE"].ORIGINAL;
                this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, this.selectedFiles.item(0), params)
                    .subscribe(res => {
                    const obj = res.responseData.data;
                    // console.log('UPLOADED', obj);
                    this.voucher.voucherAttachmentReference = obj.voucherAttachmentReference;
                    this.voucher.company = this.company;
                    this.voucher.voucherSignatories = this.signatoriesList;
                    // console.log('VOUCHER', this.voucher);
                    this.saveVoucher();
                    this.selectedFiles = undefined;
                }, (err) => {
                    this.sweetAlertService.error(err);
                }, () => {
                    this.dataStorage.setDisplayProgressbar(false);
                });
            }
        });
    }
    viewAttachmentFile() {
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, `voucher-attachment-reference/` + this.voucher.voucherAttachmentReference)
            .subscribe((res1) => {
            if (res1) {
                this.previewDocument = true;
                this.attachmentDocuments = res1.responseData.data;
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.attachmentDocuments.fileURL);
                // console.log('view attachmentDocument: ', this.attachmentDocuments);
            }
        }, (err) => {
            this.attachmentDocuments = [];
        });
    }
    reset() {
        this.process = 'save';
        this.resetFormValidatorVoucher();
        this.resetsetSignatoriesForm();
        this.attachmentDocuments = [];
        this.previewDocument = false;
        this.dataSourceSignatories = null;
        this.signatoriesList = [];
    }
    saveVoucher() {
        // console.log('SAVE ::: ', this.voucher);
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherFundEnrollment, this.voucher).subscribe((res) => {
            // console.log('SAVED ::::: > ', res);
            this.sweetAlertService.success(res);
            this.setFormValidator();
            this.getVoucherList();
            this.router.navigateByUrl('asc/page/accounting/voucher-enrollment');
            this.reset();
        }, (err) => {
            // console.log(err);
            this.sweetAlertService.error(err);
        });
    }
    getCompanyList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].company).subscribe((res) => {
            this.companyList = res.responseData.data;
        });
    }
    getCompanyDetails(res) {
        this.company = res;
    }
    getVoucherDetails() {
        this.process = 'update';
        // console.log('+++', this.voucher);
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucher, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                // console.log(res.responseData.data);
                this.voucher = res.responseData.data;
                this.signatoriesList = this.voucher.voucherSignatories;
                this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
                this.dataSourceSignatories.paginator = this.formListComponent.paginator;
                this.dataSourceSignatories.sort = this.formListComponent.sort;
                this.getCompanyDetails(this.voucher.company);
                this.viewAttachmentFile();
            }
        });
    }
    onUpdateSignatory(signatory) {
        if (signatory.id && this.process === 'update' && this.voucher.id) {
            let data = {
                id: signatory.id,
                name: signatory.name,
                position: signatory.position,
                voucherId: this.voucher.id
            };
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherSignatories, data).subscribe(result => {
                this.signatoriesList.splice(this.signatoriesList.findIndex(r => r.id === signatory.id), 1, result.responseData.data);
                this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
                this.dataSourceSignatories.paginator = this.formListComponent.paginator;
            });
        }
        else {
            this.signatoriesList = signatory;
            this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
            this.dataSourceSignatories.paginator = this.formListComponent.paginator;
        }
    }
    onDeleteSignatory(signatory) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            text: 'Are you sure you want to delete this SIGNATORY?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.signatoriesList = this.signatoriesList.filter(s => s !== signatory);
                this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
                if (this.process === 'update' && signatory.id && this.voucher.id) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherSignatories, signatory.id).subscribe((res) => {
                        this.signatoriesList.splice(this.signatoriesList.findIndex(r => r.id === signatory.id), 1);
                        this.dataSourceSignatories.paginator = this.formListComponent.paginator;
                    });
                }
            }
        });
    }
    setSignatoriesList(res) {
        this.signatoriesList.push(res);
        this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
        this.dataSourceSignatories.paginator = this.formListComponent.paginator;
        this.dataSourceSignatories.sort = this.formListComponent.sort;
        if (this.process === 'update' && this.voucher.id) {
            let data = {
                name: res.name,
                position: res.position,
                voucherId: this.voucher.id
            };
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherSignatories, data).subscribe(res => {
                this.dataSourceSignatories.paginator = this.formListComponent.paginator;
            });
        }
        // this.resetForm === 'voucher_signatories';
        this.resetsetSignatoriesForm();
    }
    getVoucherList() {
        this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherMonitoring}?page=1&size=30`).subscribe((res) => {
            // console.log(res.data);
            this.voucherList = res.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
};
CompanyVoucherEnrollmentComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"] },
    { type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
CompanyVoucherEnrollmentComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_8__["FormListComponent"],] }],
    safeURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CompanyVoucherEnrollmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company-voucher-enrollment',
        template: _raw_loader_company_voucher_enrollment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_voucher_enrollment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CompanyVoucherEnrollmentComponent);



/***/ }),

/***/ "r8KB":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment-routing.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CompanyVoucherEnrollmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentRoutingModule", function() { return CompanyVoucherEnrollmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-voucher-enrollment.component */ "m47g");




const routes = [
    {
        path: '',
        component: _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherEnrollmentComponent"]
    }
];
let CompanyVoucherEnrollmentRoutingModule = class CompanyVoucherEnrollmentRoutingModule {
};
CompanyVoucherEnrollmentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompanyVoucherEnrollmentRoutingModule);



/***/ }),

/***/ "thCm":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CompanyVoucherEnrollmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentModule", function() { return CompanyVoucherEnrollmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-voucher-enrollment-routing.module */ "r8KB");
/* harmony import */ var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-voucher-enrollment.component */ "m47g");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let CompanyVoucherEnrollmentModule = class CompanyVoucherEnrollmentModule {
};
CompanyVoucherEnrollmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_4__["CompanyVoucherEnrollmentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherEnrollmentRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]
        ]
    })
], CompanyVoucherEnrollmentModule);



/***/ })

}]);
//# sourceMappingURL=company-voucher-company-voucher-enrollment-company-voucher-enrollment-module-es2015.js.map