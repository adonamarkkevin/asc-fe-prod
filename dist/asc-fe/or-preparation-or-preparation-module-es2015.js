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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./or-preparation-routing.module */ "h6MT");
/* harmony import */ var _or_preparation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./or-preparation.component */ "5scm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let OrPreparationModule = class OrPreparationModule {
};
OrPreparationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_or_preparation_component__WEBPACK_IMPORTED_MODULE_4__["OrPreparationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrPreparationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"],
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
    })
], OrPreparationModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_or_preparation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./or-preparation.component.html */ "90bD");
/* harmony import */ var _or_preparation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./or-preparation.component.scss */ "srj/");
/* harmony import */ var _core_models_totals_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/models/totals.model */ "DBuf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_report_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/models/report.model */ "za27");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");















let OrPreparationComponent = class OrPreparationComponent {
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
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_10__["STATUSES"]];
        this.orPreparation = new _models__WEBPACK_IMPORTED_MODULE_8__["OrPreparation"]();
        this.orPreparationReference = new _models__WEBPACK_IMPORTED_MODULE_8__["OrPreparationReference"]();
        this.orPreparationList = [];
        this.typeOfMediumList = [];
        this.officialReceiptReferenceList = [];
        this.availableReferenceCodeList = [];
        this.companyList = [];
        this.report = new app_core_models_report_model__WEBPACK_IMPORTED_MODULE_11__["Report"]();
        this.totalAmts = new Array();
        this.totalAmounts = new _core_models_totals_model__WEBPACK_IMPORTED_MODULE_3__["TotalAmountsModel"]();
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
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].officialReceipt).subscribe((res) => {
            this.orPreparationList = res.responseData.data;
            this.orPreparationList = this.orPreparationList.map((mappedList) => (Object.assign(Object.assign({}, mappedList), { officialReceiptReferencesValue: mappedList.officialReceiptReferences.reduce((previousValue, currentValue) => {
                    if (previousValue) {
                        return previousValue + ", " + (currentValue === null || currentValue === void 0 ? void 0 : currentValue.reference);
                    }
                    else {
                        return currentValue === null || currentValue === void 0 ? void 0 : currentValue.reference;
                    }
                }, "") })));
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.orPreparationList);
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
                    .findByParam(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].orPreparationRefCodeCheck, this.orPreparationReference.reference)
                    .subscribe((res) => {
                    var _a, _b;
                    if ((_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data) {
                        let appForm = (_b = res === null || res === void 0 ? void 0 : res.responseData) === null || _b === void 0 ? void 0 : _b.data[0];
                        this.apiService
                            .findByParam(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].paymentDetailsByAppformId, appForm.id)
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
                        this.orPreparationReference = new _models__WEBPACK_IMPORTED_MODULE_8__["OrPreparationReference"]();
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
                .findByParam(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].availableReferenceCode, refCode)
                .subscribe((res) => {
                console.log(res);
            });
        }
        else {
            this.apiService
                .findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].availableReferenceCode)
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
            .findByParam(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].orPreparationORNumberCheck, this.orPreparation.officialReceiptNo)
            .subscribe((isExisting) => {
            var _a;
            if (isExisting.responseData.data && !((_a = this.orPreparation) === null || _a === void 0 ? void 0 : _a.id)) {
                this.sweetAlertService.customErrorMessage(isExisting.responseMessage);
            }
            else {
                // this.orPreparation.setTotalAmounts(this.totalAmounts);
                // console.log('orPreparation')
                this.apiService
                    .save(`${_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].orPreparation}/submit`, Object.assign(Object.assign({}, this.orPreparation), this.totalAmounts))
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
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
                    .save(`${_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].orPreparation}/cancel`, this.orPreparation)
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
            .findById(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].officialReceipt, this.formListComponent.idForUpdate)
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
                this.getAvailableReferenceCodeList();
                this.orPreparationForm
                    .get("totalAmount")
                    .setValue(this.totalAmounts.totalSales);
                this.officialReceiptReferenceList = this.orPreparation.officialReceiptReferences;
                this.officialReceiptReferenceList.filter((or) => {
                    this.apiService
                        .findByParam(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].orPreparationRefCodeCheck, or.reference)
                        .subscribe((paymentDtls) => {
                        var _a;
                        let appForm = (_a = paymentDtls === null || paymentDtls === void 0 ? void 0 : paymentDtls.responseData) === null || _a === void 0 ? void 0 : _a.data[0];
                        this.apiService
                            .findByParam(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].paymentDetailsByAppformId, appForm.id)
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
        this.isGettingCompanies = true;
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].activeCompanies).subscribe((res) => {
            this.companyList = res.responseData.data; // .filter((company) => !this.notInSelection.includes(company.status));
            this.isGettingCompanies = false;
        }, (err) => {
            this.isGettingCompanies = false;
        });
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
            officialReceiptNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            typeOfMedium: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
        this.totalAmounts = new _core_models_totals_model__WEBPACK_IMPORTED_MODULE_3__["TotalAmountsModel"]();
        this.orPreparationForm.reset();
        this.orPreparation = new _models__WEBPACK_IMPORTED_MODULE_8__["OrPreparation"]();
        this.officialReceiptReferenceList = [];
        this.orPreparationForm.markAsUntouched();
        this.orPreparationForm.markAsPristine();
    }
    getTypeOfMedium() {
        this.typeOfMediumList = [];
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].typeOfMediumSingleMedia).subscribe((singleMediaList) => {
            this.apiService
                .findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].typeOfMediumMultiMediaMoving)
                .subscribe((multimediaMovingList) => {
                this.apiService
                    .findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].typeOfMediumMultiMediaMoving)
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
                .printReport(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].generateReports, this.report)
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
        console.log("here");
        if (this.selectedCompanyId && this.orPreparation.typeOfMedium) {
            this.apiService
                .findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].availableReferenceCodeByCompany +
                "/" +
                this.selectedCompanyId +
                "/type-of-medium/" +
                this.orPreparation.typeOfMedium.description)
                .subscribe((res) => {
                this.availableReferenceCodeList = res;
            });
        }
    }
};
OrPreparationComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"] }
];
OrPreparationComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_7__["FormListComponent"],] }]
};
OrPreparationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-or-preparation",
        template: _raw_loader_or_preparation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_or_preparation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrPreparationComponent);



/***/ }),

/***/ "90bD":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/or-preparation/or-preparation.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label> Official Receipt Preparation </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n\r\n    <form [formGroup]=\"orPreparationForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label\r\n            >Official Receipt Number\r\n            <span class=\"required-field\">*</span></mat-label\r\n          >\r\n          <input\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.officialReceiptNo\"\r\n            name=\"officialReceiptNo\"\r\n            formControlName=\"officialReceiptNo\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Voucher Control Number</mat-label>\r\n          <input matInput [(ngModel)]=\"orPreparation.voucherControlNumber\" name=\"voucherControlNumber\"\r\n            formControlName=\"voucherControlNumber\">\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n          <mat-label>\r\n            <ng-container *ngIf=\"isGettingCompanies; else loadedLabelTemp\">\r\n              <i>Loading companies...</i>\r\n            </ng-container>\r\n            <ng-template #loadedLabelTemp>\r\n              Search Company:\r\n            </ng-template>\r\n          </mat-label>\r\n          <mat-select [value]=\"selectedCompany\">\r\n            <mat-option\r\n              *ngFor=\"let i of companyList\"\r\n              [value]=\"i\"\r\n              (click)=\"setCompanyDetails(i)\"\r\n            >\r\n              {{ i.companyName }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Company Name:</mat-label>\r\n          <input\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.companyName\"\r\n            name=\"companyName\"\r\n            formControlName=\"companyName\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Company TIN:</mat-label>\r\n          <input\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.companyTin\"\r\n            name=\"companyTin\"\r\n            formControlName=\"companyTin\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n          <mat-label>Company Address:</mat-label>\r\n          <textarea\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.companyAddress\"\r\n            name=\"companyAddress\"\r\n            formControlName=\"companyAddress\"\r\n          >\r\n          </textarea>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Business Style:</mat-label>\r\n          <input\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.businessStyle\"\r\n            name=\"businessStyle\"\r\n            formControlName=\"businessStyle\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Control Number:</mat-label>\r\n          <input\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.controlNumber\"\r\n            name=\"controlNumber\"\r\n            formControlName=\"controlNumber\"\r\n          />\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Amount:</mat-label>\r\n          <input\r\n            matInput\r\n            [(ngModel)]=\"orPreparation.amount\"\r\n            name=\"amount\"\r\n            (change)=\"amountChanged()\"\r\n            formControlName=\"amount\"\r\n          />\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Total Amount:</mat-label>\r\n          <input\r\n            matInput\r\n            name=\"totalAmount\"\r\n            formControlName=\"totalAmount\"\r\n            readonly\r\n          />\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Amount In Words:</mat-label>\r\n          <input matInput [(ngModel)]=\"orPreparation.fullPaymentOf\" name=\"fullPaymentOf\"\r\n            formControlName=\"fullPaymentOf\">\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n          <mat-label>Type of Medium</mat-label>\r\n          <mat-select\r\n            [(ngModel)]=\"orPreparation.typeOfMedium\"\r\n            formControlName=\"typeOfMedium\"\r\n            name=\"typeOfMedium\"\r\n            [compareWith]=\"compareList\"\r\n            (selectionChange)=\"getAvailableReferenceCodeList()\"\r\n          >\r\n            <mat-option *ngFor=\"let i of typeOfMediumList\" [value]=\"i\">\r\n              {{ i.description }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>List of Paid Reference Codes:</mat-label>\r\n          <mat-select\r\n            [(ngModel)]=\"orPreparationReference.reference\"\r\n            [disabled]=\"!selectedCompanyId || !orPreparation.typeOfMedium\"\r\n            formControlName=\"officialReceiptReference\"\r\n            name=\"officialReceiptReference\"\r\n            [compareWith]=\"compareList\"\r\n          >\r\n            <mat-option\r\n              *ngFor=\"let i of availableReferenceCodeList\"\r\n              [value]=\"i.referenceCode\"\r\n            >\r\n              {{ i.referenceCode }}\r\n            </mat-option>\r\n          </mat-select>\r\n          <span *ngIf=\"orPreparationReference.reference\"> <br /><br /> </span>\r\n          <button\r\n            mat-raised-button\r\n            color=\"primary\"\r\n            (click)=\"addReceiptReference()\"\r\n            *ngIf=\"orPreparationReference.reference\"\r\n          >\r\n            <i class=\"material-icons color__white\">save</i> Add Receipt\r\n            Reference\r\n          </button>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Reference List:</mat-label>\r\n          <input matInput readonly />\r\n\r\n          <ul *ngFor=\"let i of officialReceiptReferenceList\">\r\n            <li>\r\n              {{ i.reference }}\r\n              <span\r\n                class=\"material-icons\"\r\n                matTooltip=\"Remove Reference Code\"\r\n                (click)=\"removeReferenceCode(i)\"\r\n                >close</span\r\n              >\r\n            </li>\r\n          </ul>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"button-content\">\r\n      <app-form-action-buttons\r\n        [childObject]=\"orPreparation\"\r\n        [childForm]=\"orPreparationForm\"\r\n        (saveFunction)=\"saveOrUpdate()\"\r\n        (updateFunction)=\"saveOrUpdate()\"\r\n        (cancelFunction)=\"resetFormValidator()\"\r\n      >\r\n      </app-form-action-buttons>\r\n      <button\r\n        [disabled]=\"!orPreparation.id\"\r\n        mat-raised-button\r\n        color=\"primary\"\r\n        (click)=\"printOr(orPreparation)\"\r\n      >\r\n        <i class=\"material-icons color__white\">print</i> Print OR\r\n      </button>\r\n    </div>\r\n    <br />\r\n\r\n    <br />\r\n    <app-form-list\r\n      [dataSource]=\"dataSource\"\r\n      [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getOrPreparation()\"\r\n      (deleteInListFunction)=\"cancel()\"\r\n    ></app-form-list>\r\n  </div>\r\n</form>\r\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _or_preparation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./or-preparation.component */ "5scm");




const routes = [
    {
        path: '',
        component: _or_preparation_component__WEBPACK_IMPORTED_MODULE_3__["OrPreparationComponent"]
    }
];
let OrPreparationRoutingModule = class OrPreparationRoutingModule {
};
OrPreparationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrPreparationRoutingModule);



/***/ }),

/***/ "srj/":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span.material-icons {\n  color: #ad0000;\n  cursor: pointer;\n}\n\n.button-content {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL29yLXByZXBhcmF0aW9uL29yLXByZXBhcmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnRpbmcvb3ItcHJlcGFyYXRpb24vb3ItcHJlcGFyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yOiByZ2IoMTczLCAwLCAwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=or-preparation-or-preparation-module-es2015.js.map