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

/***/ "m47g":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CompanyVoucherEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentComponent", function() { return CompanyVoucherEnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/models/payment-method.model */ "piSE");
/* harmony import */ var app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/models/voucher-signatories.model */ "VPUY");
/* harmony import */ var app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/models/voucher.model */ "Inok");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























const _c0 = function () { return { standalone: true }; };
function CompanyVoucherEnrollmentComponent_div_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Voucher: \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "PDF file only!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_div_21_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.attachment = $event; })("change", function CompanyVoucherEnrollmentComponent_div_21_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.attachment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
    }
}
function CompanyVoucherEnrollmentComponent_div_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "object", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "iframe", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This browser does not support PDF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx_r1.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r1.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);
    }
}
function CompanyVoucherEnrollmentComponent_mat_option_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CompanyVoucherEnrollmentComponent_mat_option_30_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const i_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.getCompanyDetails(i_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r11.companyName, " ");
    }
}
function CompanyVoucherEnrollmentComponent_mat_form_field_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r3.company.companyName);
    }
}
function CompanyVoucherEnrollmentComponent_mat_form_field_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Company TelephoneNo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r4.company.companyTelephoneNo);
    }
}
function CompanyVoucherEnrollmentComponent_mat_form_field_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Company Tin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.company.companyTin);
    }
}
function CompanyVoucherEnrollmentComponent_mat_form_field_34_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Company Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r6.company.completeAddress);
    }
}
let CompanyVoucherEnrollmentComponent = /*@__PURE__*/ (() => {
    class CompanyVoucherEnrollmentComponent {
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
            this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_8__["Voucher"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_4__["Company"]();
            this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_7__["VoucherSignatories"]();
            this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_6__["PaymentMethod"]();
            this.voucherList = [];
            this.companyList = [];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_5__["STATUSES"]];
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
            this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            this.voucherForm = this.formBuilder.group({
                company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                fundAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                voucherDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        }
        setSignatoriesForm() {
            this.voucherSignatoriesForm = this.formBuilder.group({
                voucherSignatoriesName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                voucherSignatoriesPosition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        }
        resetsetSignatoriesForm() {
            this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_7__["VoucherSignatories"]();
            this.voucherSignatoriesForm.markAsUntouched();
            this.voucherSignatoriesForm.markAsPristine();
        }
        resetFormValidatorVoucher() {
            this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_8__["Voucher"]();
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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
                    params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["ATTACHMENT_TYPE"].VOUCHER_FUND + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["SUBMISSION_TYPE"].ORIGINAL;
                    this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, this.selectedFiles.item(0), params)
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
            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, `voucher-attachment-reference/` + this.voucher.voucherAttachmentReference)
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
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherFundEnrollment, this.voucher).subscribe((res) => {
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
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].company).subscribe((res) => {
                this.companyList = res.responseData.data;
            });
        }
        getCompanyDetails(res) {
            this.company = res;
        }
        getVoucherDetails() {
            this.process = 'update';
            // console.log('+++', this.voucher);
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucher, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    // console.log(res.responseData.data);
                    this.voucher = res.responseData.data;
                    this.signatoriesList = this.voucher.voucherSignatories;
                    this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
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
                this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherSignatories, data).subscribe(result => {
                    this.signatoriesList.splice(this.signatoriesList.findIndex(r => r.id === signatory.id), 1, result.responseData.data);
                    this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
                    this.dataSourceSignatories.paginator = this.formListComponent.paginator;
                });
            }
            else {
                this.signatoriesList = signatory;
                this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
                this.dataSourceSignatories.paginator = this.formListComponent.paginator;
            }
        }
        onDeleteSignatory(signatory) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                text: 'Are you sure you want to delete this SIGNATORY?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.signatoriesList = this.signatoriesList.filter(s => s !== signatory);
                    this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
                    if (this.process === 'update' && signatory.id && this.voucher.id) {
                        this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherSignatories, signatory.id).subscribe((res) => {
                            this.signatoriesList.splice(this.signatoriesList.findIndex(r => r.id === signatory.id), 1);
                            this.dataSourceSignatories.paginator = this.formListComponent.paginator;
                        });
                    }
                }
            });
        }
        setSignatoriesList(res) {
            this.signatoriesList.push(res);
            this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
            this.dataSourceSignatories.paginator = this.formListComponent.paginator;
            this.dataSourceSignatories.sort = this.formListComponent.sort;
            if (this.process === 'update' && this.voucher.id) {
                let data = {
                    name: res.name,
                    position: res.position,
                    voucherId: this.voucher.id
                };
                this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherSignatories, data).subscribe(res => {
                    this.dataSourceSignatories.paginator = this.formListComponent.paginator;
                });
            }
            // this.resetForm === 'voucher_signatories';
            this.resetsetSignatoriesForm();
        }
        getVoucherList() {
            this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherMonitoring}?page=1&size=30`).subscribe((res) => {
                // console.log(res.data);
                this.voucherList = res.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
    }
    CompanyVoucherEnrollmentComponent.??fac = function CompanyVoucherEnrollmentComponent_Factory(t) { return new (t || CompanyVoucherEnrollmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
    CompanyVoucherEnrollmentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CompanyVoucherEnrollmentComponent, selectors: [["app-company-voucher-enrollment"]], viewQuery: function CompanyVoucherEnrollmentComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, inputs: { safeURL: "safeURL" }, decls: 88, vars: 26, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [1, "col-md-12", "information-title"], [1, "row", "col-md-12"], [1, "row", "col-md-5"], [4, "ngIf"], [1, "row", "col-md-7"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-12", 3, "hidden"], ["name", "company", "formControlName", "company", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-12", "appearance", "outline", 4, "ngIf"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "fundAmount", "formControlName", "fundAmount", "type", "number", 3, "ngModel", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "Date", "readonly", "", "name", "voucherDate", "formControlName", "voucherDate", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for", "hidden"], ["color", "warn", "disabled", "false"], ["voucherDate", ""], ["matInput", "", "name", "voucherSignatoriesName", "formControlName", "voucherSignatoriesName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "voucherSignatoriesPosition", "formControlName", "voucherSignatoriesPosition", 3, "ngModel", "ngModelChange"], [1, "col-md-9"], [1, "col-md-3"], ["mat-raised-button", "", 1, "button-red", 3, "disabled", "click"], [1, "material-icons", "color__white"], [3, "dataSource", "displayedColumns", "deleteInListFunction", "updateListFunction"], [1, "col-md-6"], ["mat-raised-button", "", 1, "button-red", 3, "hidden", "disabled", "click"], ["mat-raised-button", "", 1, "button-red", 3, "click"], ["type", "file", "accept", ".pdf", 1, "file-upload", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "500", 3, "data"], ["width", "100%", "height", "500", 3, "src"], [3, "value", "click"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "readonly", "", 3, "value"]], template: function CompanyVoucherEnrollmentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "view_list");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Company Voucher Enrollment ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "app-form-list", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function CompanyVoucherEnrollmentComponent_Template_app_form_list_selectInListFunction_10_listener() { return ctx.getVoucherDetails(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Company Information ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, CompanyVoucherEnrollmentComponent_div_21_Template, 7, 3, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, CompanyVoucherEnrollmentComponent_div_22_Template, 6, 2, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Company Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.voucher.company = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, CompanyVoucherEnrollmentComponent_mat_option_30_Template, 2, 2, "mat-option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, CompanyVoucherEnrollmentComponent_mat_form_field_31_Template, 4, 1, "mat-form-field", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, CompanyVoucherEnrollmentComponent_mat_form_field_32_Template, 4, 1, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, CompanyVoucherEnrollmentComponent_mat_form_field_33_Template, 4, 1, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, CompanyVoucherEnrollmentComponent_mat_form_field_34_Template, 4, 1, "mat-form-field", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-form-field", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Fund Amount ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_40_listener($event) { return ctx.voucher.fundAmount = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Voucher Date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_44_listener($event) { return ctx.voucher.voucherDate = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "mat-datepicker-toggle", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "mat-datepicker", 20, 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "form", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-form-field", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Voucher Signatories Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "input", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_56_listener($event) { return ctx.voucherSignatories.name = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-form-field", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Voucher Signatories Position ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "input", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_62_listener($event) { return ctx.voucherSignatories.position = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CompanyVoucherEnrollmentComponent_Template_button_click_66_listener() { return ctx.setSignatoriesList(ctx.voucherSignatories); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "task_alt");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Add Signatory ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "app-form-list", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("deleteInListFunction", function CompanyVoucherEnrollmentComponent_Template_app_form_list_deleteInListFunction_72_listener($event) { return ctx.onDeleteSignatory($event); })("updateListFunction", function CompanyVoucherEnrollmentComponent_Template_app_form_list_updateListFunction_72_listener($event) { return ctx.onUpdateSignatory($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "button", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CompanyVoucherEnrollmentComponent_Template_button_click_77_listener() { return ctx.uploadVoucher(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "task_alt");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " SUBMIT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CompanyVoucherEnrollmentComponent_Template_button_click_83_listener() { return ctx.reset(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "task_alt");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " RESET ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.process === "save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.previewDocument === true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.voucherForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.process === "update");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.voucher.company);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.companyList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.voucher.company && ctx.process === "update");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.voucher.company);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.voucher.company);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.voucher.company);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.voucher.fundAmount)("readonly", ctx.process === "update");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r7)("ngModel", ctx.voucher.voucherDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r7)("hidden", ctx.process === "update");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.voucherSignatoriesForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.voucherSignatories.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.voucherSignatories.position);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", (ctx.voucherSignatoriesForm.controls["voucherSignatoriesPosition"] == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesPosition"].errors == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesPosition"].errors.required) || (ctx.voucherSignatoriesForm.controls["voucherSignatoriesName"] == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesName"].errors == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesName"].errors.required));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSourceSignatories)("displayedColumns", ctx.displayedColumnsSignatories);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.process === "update")("disabled", ctx.voucherForm.invalid || (ctx.signatoriesList == null ? null : ctx.signatoriesList.length) === 0 || !ctx.attachment);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__["FormListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"]], styles: [".button-green[_ngcontent-%COMP%] {\n  background-color: green;\n  color: white;\n}\n\n.information-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2NvbXBhbnktdm91Y2hlci9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9jb21wYW55LXZvdWNoZXIvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"] });
    return CompanyVoucherEnrollmentComponent;
})();



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-voucher-enrollment.component */ "m47g");





const routes = [
    {
        path: '',
        component: _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherEnrollmentComponent"]
    }
];
let CompanyVoucherEnrollmentRoutingModule = /*@__PURE__*/ (() => {
    class CompanyVoucherEnrollmentRoutingModule {
    }
    CompanyVoucherEnrollmentRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CompanyVoucherEnrollmentRoutingModule });
    CompanyVoucherEnrollmentRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CompanyVoucherEnrollmentRoutingModule_Factory(t) { return new (t || CompanyVoucherEnrollmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CompanyVoucherEnrollmentRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CompanyVoucherEnrollmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-voucher-enrollment-routing.module */ "r8KB");
/* harmony import */ var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-voucher-enrollment.component */ "m47g");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let CompanyVoucherEnrollmentModule = /*@__PURE__*/ (() => {
    class CompanyVoucherEnrollmentModule {
    }
    CompanyVoucherEnrollmentModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CompanyVoucherEnrollmentModule });
    CompanyVoucherEnrollmentModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CompanyVoucherEnrollmentModule_Factory(t) { return new (t || CompanyVoucherEnrollmentModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherEnrollmentRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]
            ]] });
    return CompanyVoucherEnrollmentModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CompanyVoucherEnrollmentModule, { declarations: [_company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherEnrollmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherEnrollmentRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=company-voucher-company-voucher-enrollment-company-voucher-enrollment-module-es2015.js.map