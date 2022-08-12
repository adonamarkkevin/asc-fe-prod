(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["or-preparation-or-preparation-module"],{

/***/ "/+ax":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OrPreparationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparationModule", function() { return OrPreparationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./or-preparation-routing.module */ "h6MT");
/* harmony import */ var _or_preparation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./or-preparation.component */ "5scm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let OrPreparationModule = /*@__PURE__*/ (() => {
    class OrPreparationModule {
    }
    OrPreparationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrPreparationModule });
    OrPreparationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrPreparationModule_Factory(t) { return new (t || OrPreparationModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrPreparationRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"],
            ]] });
    return OrPreparationModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrPreparationModule, { declarations: [_or_preparation_component__WEBPACK_IMPORTED_MODULE_3__["OrPreparationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrPreparationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]] });
})();



/***/ }),

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

/***/ "5scm":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrPreparationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparationComponent", function() { return OrPreparationComponent; });
/* harmony import */ var _core_models_totals_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/models/totals.model */ "DBuf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_report_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/models/report.model */ "za27");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");






















function OrPreparationComponent_mat_option_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_mat_option_19_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setCompanyDetails(i_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r6.companyName, " ");
    }
}
function OrPreparationComponent_mat_option_49_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r9.description, " ");
    }
}
function OrPreparationComponent_mat_option_54_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r10.referenceCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r10.referenceCode, " ");
    }
}
function OrPreparationComponent_span_55_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function OrPreparationComponent_button_56_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_button_56_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.addReceiptReference(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add Receipt Reference ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function OrPreparationComponent_ul_61_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_ul_61_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.removeReferenceCode(i_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r13.reference, " ");
    }
}
let OrPreparationComponent = /*@__PURE__*/ (() => {
    class OrPreparationComponent {
        constructor(apiService, formBuilder, sweetAlertService, spinner, numberPipe) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.spinner = spinner;
            this.numberPipe = numberPipe;
            this.displayedColumns = [
                "officialReceiptNo",
                "typeOfMediumDescription",
                "officialReceiptReferences",
                "status",
                "deleteIcon",
            ];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_6__["STATUSES"]];
            this.orPreparation = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparation"]();
            this.orPreparationReference = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparationReference"]();
            this.orPreparationList = [];
            this.typeOfMediumList = [];
            this.officialReceiptReferenceList = [];
            this.availableReferenceCodeList = [];
            this.companyList = [];
            this.report = new app_core_models_report_model__WEBPACK_IMPORTED_MODULE_7__["Report"]();
            this.totalAmts = new Array();
            this.totalAmounts = new _core_models_totals_model__WEBPACK_IMPORTED_MODULE_0__["TotalAmountsModel"]();
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
            this.getTypeOfMedium();
            this.getCompanyList();
            this.getAvailableReferenceCode();
        }
        getList() {
            this.getAvailableReferenceCode();
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].officialReceipt).subscribe((res) => {
                this.orPreparationList = res.responseData.data;
                this.orPreparationList = this.orPreparationList.map((mappedList) => (Object.assign(Object.assign({}, mappedList), { officialReceiptReferencesValue: mappedList.officialReceiptReferences.reduce((previousValue, currentValue) => {
                        if (previousValue) {
                            return previousValue + ", " + (currentValue === null || currentValue === void 0 ? void 0 : currentValue.reference);
                        }
                        else {
                            return currentValue === null || currentValue === void 0 ? void 0 : currentValue.reference;
                        }
                    }, "") })));
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.orPreparationList);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        amountChanged() {
            // this.orPreparationForm
            //   .get("totalAmount")
            //   .setValue(
            //     this.numberPipe.transform(
            //       (+this.orPreparationForm.get("amount").value || 0) +
            //         this.totalAmounts.totalSales,
            //       ".2-2"
            //     )
            //   );
        }
        addReceiptReference() {
            console.log("prep => ", this.orPreparationReference);
            if ((this.orPreparation.voucherControlNumber &&
                this.officialReceiptReferenceList.length >= 6) ||
                this.officialReceiptReferenceList.length >= 9) {
                this.sweetAlertService.customErrorMessage("Max input limit reached");
            }
            else {
                const isExisting = this.officialReceiptReferenceList.filter((filteredOR) => filteredOR.reference === this.orPreparationReference.reference.trim());
                if (isExisting.length) {
                    this.sweetAlertService.customErrorMessage("Reference code already in the list");
                }
                else {
                    this.apiService
                        .findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparationRefCodeCheck, this.orPreparationReference.reference)
                        .subscribe((res) => {
                        var _a, _b;
                        if ((_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data) {
                            let appForm = (_b = res === null || res === void 0 ? void 0 : res.responseData) === null || _b === void 0 ? void 0 : _b.data[0];
                            this.apiService
                                .findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetailsByAppformId, appForm.id)
                                .subscribe((form) => {
                                console.log("form : ", form);
                                let paymentDtls;
                                if (form) {
                                    //  this.totalAmounts.totalAmountDue = Number(this.totalAmounts.totalAmountDue) + Number(form?.responseData?.data?.amountDue);
                                    // this.totalAmounts.setTotalValues(form.responseData.data)
                                    this.totalAmts.push(form.responseData.data);
                                    this.totalAmounts.setTotalValues(this.totalAmts);
                                    this.orPreparationForm
                                        .get("totalAmount")
                                        .setValue(this.numberPipe.transform(this.totalAmounts.totalSales, ".2-2"));
                                }
                                console.log("totals : ", this.totalAmounts);
                            });
                            this.officialReceiptReferenceList.push(this.orPreparationReference);
                            this.orPreparationReference.amount = appForm.amount;
                            // this.getAvailableReferenceCode(this.orPreparationReference?.reference);
                            this.orPreparationReference = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparationReference"]();
                            // console.log("data => ", this.officialReceiptReferenceList)
                            this.officialReceiptReferenceList.filter((ref) => {
                                // let total = Number(this.orPreparationForm.controls.totalAmount.value) + Number(ref.amount);
                                // this.orPreparationForm.controls.totalAmount.setValue(total);
                            });
                        }
                        else {
                            this.sweetAlertService.customErrorMessage(res === null || res === void 0 ? void 0 : res.responseMessage);
                        }
                    }, (err) => {
                        this.sweetAlertService.error(err);
                    });
                }
            }
        }
        removeReferenceCode(obj) {
            this.officialReceiptReferenceList = this.officialReceiptReferenceList.filter((filteredOR) => filteredOR.reference !== obj.reference.trim());
            console.log("remove ref : ", obj);
            console.log("totalAmts", this.totalAmts);
            this.totalAmts = this.totalAmts.filter((amts) => amts.applicationForm.referenceCode !== obj.reference.trim());
            console.log("totalamts", this.totalAmts);
            this.totalAmounts.setTotalValues(this.totalAmts);
            console.log("total amounts : ", this.totalAmounts);
        }
        getAvailableReferenceCode(refCode = "") {
            if (refCode) {
                this.apiService
                    .findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].availableReferenceCode, refCode)
                    .subscribe((res) => {
                    console.log(res);
                });
            }
            else {
                this.apiService
                    .findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].availableReferenceCode)
                    .subscribe((res) => {
                    console.log(res);
                    this.availableReferenceCodeList = res;
                });
            }
        }
        saveOrUpdate() {
            var _a;
            this.orPreparation.id = ((_a = this.orPreparation) === null || _a === void 0 ? void 0 : _a.id) ? this.orPreparation.id : 0;
            this.orPreparation.officialReceiptReferences = this.officialReceiptReferenceList;
            // this.orPreparation.setTotalAmounts(this.totalAmounts);
            // console.log(this.totalAmounts.)
            console.log("orPrep", this.orPreparation);
            this.apiService
                .findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparationORNumberCheck, this.orPreparation.officialReceiptNo)
                .subscribe((isExisting) => {
                var _a;
                if (isExisting.responseData.data && !((_a = this.orPreparation) === null || _a === void 0 ? void 0 : _a.id)) {
                    this.sweetAlertService.customErrorMessage(isExisting.responseMessage);
                }
                else {
                    // this.orPreparation.setTotalAmounts(this.totalAmounts);
                    // console.log('orPreparation')
                    this.apiService
                        .save(`${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparation}/submit`, Object.assign(Object.assign({}, this.orPreparation), this.totalAmounts))
                        .subscribe((res) => {
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
            }, (err) => this.sweetAlertService.error(err));
        }
        cancel() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                text: `Are you sure you want to cancel this Official Receipt Preparation?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm",
            }).then((result) => {
                if (result.value) {
                    this.orPreparation = this.formListComponent.elementObject;
                    this.orPreparation.officialReceiptReferences = null;
                    this.apiService
                        .save(`${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparation}/cancel`, this.orPreparation)
                        .subscribe((res) => {
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
            });
        }
        getOrPreparation() {
            console.log("get:: =>");
            this.apiService
                .findById(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].officialReceipt, this.formListComponent.idForUpdate)
                .subscribe((res) => {
                if (res) {
                    this.orPreparation = res.responseData.data;
                    console.log("OR PREP => ", res);
                    this.totalAmounts.totalSales = this.orPreparation.totalSales;
                    this.totalAmounts.totalAmountDue = this.orPreparation.totalAmountDue;
                    this.totalAmounts.totalVat = this.orPreparation.totalVat;
                    this.totalAmounts.totalWithholdingtax = this.orPreparation.totalWithholdingtax;
                    const company = this.companyList.find((company) => company.companyName === this.orPreparation.companyName);
                    this.selectedCompanyId = company.id;
                    this.selectedCompany = company;
                    this.orPreparationForm
                        .get("totalAmount")
                        .setValue(this.totalAmounts.totalSales);
                    this.officialReceiptReferenceList = this.orPreparation.officialReceiptReferences;
                    this.officialReceiptReferenceList.filter((or) => {
                        this.apiService
                            .findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparationRefCodeCheck, or.reference)
                            .subscribe((paymentDtls) => {
                            var _a;
                            let appForm = (_a = paymentDtls === null || paymentDtls === void 0 ? void 0 : paymentDtls.responseData) === null || _a === void 0 ? void 0 : _a.data[0];
                            this.apiService
                                .findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetailsByAppformId, appForm.id)
                                .subscribe((payment) => {
                                var _a;
                                this.totalAmts.push((_a = payment === null || payment === void 0 ? void 0 : payment.responseData) === null || _a === void 0 ? void 0 : _a.data);
                            });
                        });
                    });
                }
            });
        }
        getCompanyList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].activeCompanies).subscribe((res) => {
                this.companyList = res.responseData.data; // .filter((company) => !this.notInSelection.includes(company.status));
            }, (err) => { });
        }
        setCompanyDetails(i) {
            this.selectedCompanyId = i.id;
            this.orPreparation.companyName = i.companyName;
            this.orPreparation.companyTin = i.companyTin;
            this.orPreparation.companyAddress =
                "[" + i.country.code + " - " + i.country.name + "] " + i.completeAddress;
            this.getAvailableReferenceCodeList();
        }
        setFormValidator() {
            this.orPreparationForm = this.formBuilder.group({
                officialReceiptNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                typeOfMedium: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                amount: [""],
                officialReceiptReference: [""],
                voucherControlNumber: [""],
                businessStyle: [""],
                fullPaymentOf: [""],
                controlNumber: [""],
                companyName: [""],
                companyTin: [""],
                companyAddress: [""],
                totalAmount: [""],
            });
        }
        resetFormValidator() {
            this.selectedCompanyId = null;
            this.totalAmounts = new _core_models_totals_model__WEBPACK_IMPORTED_MODULE_0__["TotalAmountsModel"]();
            this.orPreparationForm.reset();
            this.orPreparation = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparation"]();
            this.officialReceiptReferenceList = [];
            this.orPreparationForm.markAsUntouched();
            this.orPreparationForm.markAsPristine();
        }
        getTypeOfMedium() {
            this.typeOfMediumList = [];
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfMediumSingleMedia).subscribe((singleMediaList) => {
                this.apiService
                    .findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfMediumMultiMediaMoving)
                    .subscribe((multimediaMovingList) => {
                    this.apiService
                        .findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfMediumMultiMediaMoving)
                        .subscribe((multimediaStaticList) => {
                        this.typeOfMediumList = [
                            ...singleMediaList.responseData.data,
                            ...multimediaMovingList.responseData.data,
                            ...multimediaStaticList.responseData.data,
                        ];
                        const key = "id";
                        this.typeOfMediumList = [
                            ...new Map(this.typeOfMediumList.map((item) => [item[key], item])).values(),
                        ];
                    });
                });
            }, (err) => {
                console.log(err);
            });
        }
        compareList(value, selected) {
            if (value && selected) {
                return value.id === selected.id;
            }
        }
        printOr(orData) {
            if (orData.id) {
                this.report.filename = "ASC_Receipt";
                this.report.format = "pdf";
                (this.report.module = "Receipt"),
                    (this.report.params = { officialReceiptId: orData.id });
                this.apiService
                    .printReport(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].generateReports, this.report)
                    .subscribe((data) => {
                    const newBlob = new Blob([data], { type: "application/pdf" });
                    const downloadURL = URL.createObjectURL(newBlob);
                    window.open(downloadURL);
                });
            }
            else {
                this.sweetAlertService.customErrorMessage("Please select data first...");
            }
        }
        getAvailableReferenceCodeList() {
            if (this.selectedCompanyId && this.orPreparation.typeOfMedium) {
                this.apiService
                    .findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].availableReferenceCodeByCompany +
                    "/" +
                    this.selectedCompanyId +
                    "/type-of-medium/" +
                    this.orPreparation.typeOfMedium.description)
                    .subscribe((res) => {
                    this.availableReferenceCodeList = res;
                });
            }
        }
    }
    OrPreparationComponent.ɵfac = function OrPreparationComponent_Factory(t) { return new (t || OrPreparationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"])); };
    OrPreparationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrPreparationComponent, selectors: [["app-or-preparation"]], viewQuery: function OrPreparationComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_4__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 71, vars: 24, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "officialReceiptNo", "formControlName", "officialReceiptNo", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "col-md-12"], [3, "value"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "companyName", "formControlName", "companyName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "companyTin", "formControlName", "companyTin", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "companyAddress", "formControlName", "companyAddress", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "businessStyle", "formControlName", "businessStyle", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "controlNumber", "formControlName", "controlNumber", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "totalAmount", "formControlName", "totalAmount", "readonly", ""], ["formControlName", "typeOfMedium", "name", "typeOfMedium", 3, "ngModel", "compareWith", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "officialReceiptReference", "name", "officialReceiptReference", 3, "ngModel", "disabled", "compareWith", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["matInput", "", "readonly", ""], [4, "ngFor", "ngForOf"], [1, "button-content"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons", "color__white"], [3, "dataSource", "displayedColumns", "selectInListFunction", "deleteInListFunction"], [3, "value", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matTooltip", "Remove Reference Code", 1, "material-icons", 3, "click"]], template: function OrPreparationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Official Receipt Preparation ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Official Receipt Number ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.orPreparation.officialReceiptNo = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Search Company:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrPreparationComponent_mat_option_19_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Company Name:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_23_listener($event) { return ctx.orPreparation.companyName = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Company TIN:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_27_listener($event) { return ctx.orPreparation.companyTin = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Company Address:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "textarea", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_textarea_ngModelChange_31_listener($event) { return ctx.orPreparation.companyAddress = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "          ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Business Style:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_36_listener($event) { return ctx.orPreparation.businessStyle = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Control Number:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_40_listener($event) { return ctx.orPreparation.controlNumber = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Total Amount:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Type of Medium");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_mat_select_ngModelChange_48_listener($event) { return ctx.orPreparation.typeOfMedium = $event; })("change", function OrPreparationComponent_Template_mat_select_change_48_listener() { return ctx.getAvailableReferenceCodeList(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, OrPreparationComponent_mat_option_49_Template, 2, 2, "mat-option", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "List of Paid Reference Codes:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-select", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_mat_select_ngModelChange_53_listener($event) { return ctx.orPreparationReference.reference = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, OrPreparationComponent_mat_option_54_Template, 2, 2, "mat-option", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, OrPreparationComponent_span_55_Template, 3, 0, "span", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, OrPreparationComponent_button_56_Template, 4, 0, "button", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Reference List:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, OrPreparationComponent_ul_61_Template, 5, 1, "ul", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "app-form-action-buttons", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("saveFunction", function OrPreparationComponent_Template_app_form_action_buttons_saveFunction_63_listener() { return ctx.saveOrUpdate(); })("updateFunction", function OrPreparationComponent_Template_app_form_action_buttons_updateFunction_63_listener() { return ctx.saveOrUpdate(); })("cancelFunction", function OrPreparationComponent_Template_app_form_action_buttons_cancelFunction_63_listener() { return ctx.resetFormValidator(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_Template_button_click_64_listener() { return ctx.printOr(ctx.orPreparation); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "print");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Print OR ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "app-form-list", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectInListFunction", function OrPreparationComponent_Template_app_form_list_selectInListFunction_70_listener() { return ctx.getOrPreparation(); })("deleteInListFunction", function OrPreparationComponent_Template_app_form_list_deleteInListFunction_70_listener() { return ctx.cancel(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.orPreparationForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.officialReceiptNo);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedCompany);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.companyName);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.companyTin);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.companyAddress);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.businessStyle);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.controlNumber);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.typeOfMedium)("compareWith", ctx.compareList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.typeOfMediumList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparationReference.reference)("disabled", !ctx.selectedCompanyId || !ctx.orPreparation.typeOfMedium)("compareWith", ctx.compareList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableReferenceCodeList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orPreparationReference.reference);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orPreparationReference.reference);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.officialReceiptReferenceList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("childObject", ctx.orPreparation)("childForm", ctx.orPreparationForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.orPreparation.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormActionButtonsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_17__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"]], styles: ["span.material-icons[_ngcontent-%COMP%] {\n  color: #ad0000;\n  cursor: pointer;\n}\n\n.button-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL29yLXByZXBhcmF0aW9uL29yLXByZXBhcmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnRpbmcvb3ItcHJlcGFyYXRpb24vb3ItcHJlcGFyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLm1hdGVyaWFsLWljb25zIHtcbiAgICBjb2xvcjogcmdiKDE3MywgMCwgMCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uLWNvbnRlbnR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */"] });
    return OrPreparationComponent;
})();



/***/ }),

/***/ "DBuf":
/*!*********************************************!*\
  !*** ./src/app/core/models/totals.model.ts ***!
  \*********************************************/
/*! exports provided: TotalAmountsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalAmountsModel", function() { return TotalAmountsModel; });
class TotalAmountsModel {
    constructor() {
        this.totalSales = 0;
        this.totalVat = 0;
        this.totalWithholdingtax = 0;
        this.totalAmountDue = 0;
    }
    setTotalValues(data) {
        console.log("totalValues:  ", data);
        let totalAmountDue = 0;
        let totalVat = 0;
        let totalSales = 0;
        let totalwWithholdingtax = 0;
        data.filter((payment) => {
            totalAmountDue = totalAmountDue + payment.amountDue;
            totalVat = totalVat + payment.vat;
            totalSales = totalSales + payment.basicRate + payment.vat;
            totalwWithholdingtax = totalwWithholdingtax + payment.withholdingTax;
        });
        this.totalAmountDue = totalAmountDue;
        this.totalSales = totalSales;
        this.totalVat = totalVat;
        this.totalWithholdingtax = this.totalWithholdingtax;
    }
}



/***/ }),

/***/ "h6MT":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: OrPreparationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparationRoutingModule", function() { return OrPreparationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _or_preparation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./or-preparation.component */ "5scm");





const routes = [
    {
        path: '',
        component: _or_preparation_component__WEBPACK_IMPORTED_MODULE_2__["OrPreparationComponent"]
    }
];
let OrPreparationRoutingModule = /*@__PURE__*/ (() => {
    class OrPreparationRoutingModule {
    }
    OrPreparationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrPreparationRoutingModule });
    OrPreparationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrPreparationRoutingModule_Factory(t) { return new (t || OrPreparationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return OrPreparationRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrPreparationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=or-preparation-or-preparation-module-es2015.js.map