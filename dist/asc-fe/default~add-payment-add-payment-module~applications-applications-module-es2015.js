(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-payment-add-payment-module~applications-applications-module"],{

/***/ "1wm5":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-payment/add-payment-preview-application/add-payment-preview-application.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AddPaymentPreviewApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentPreviewApplicationComponent", function() { return AddPaymentPreviewApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_payment_preview_application_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-payment-preview-application.component.html */ "dW3V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/models/application-single-media.model */ "XLGj");







let AddPaymentPreviewApplicationComponent = class AddPaymentPreviewApplicationComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.applicationSingleMedia = new _core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_6__["ApplicationSingleMedia"]();
        this.multimediaDTO = {};
        this.presentorDetails = new _models__WEBPACK_IMPORTED_MODULE_3__["UserAccount"]();
        this.multimediaMovingList = [];
        this.multimediaStaticList = [];
    }
    ngOnChanges(changes) {
        if (changes['previewS1Application']) {
            this.getPresentorDetails();
        }
    }
    getPresentorDetails() {
        var _a, _b;
        if ((_b = (_a = this.previewS1Application) === null || _a === void 0 ? void 0 : _a.applicationOwner) === null || _b === void 0 ? void 0 : _b.username) {
            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].userLogin, this.previewS1Application.applicationOwner.username).subscribe((res) => {
                if (res.responseData.data) {
                    this.presentorDetails = res.responseData.data;
                }
            });
        }
    }
};
AddPaymentPreviewApplicationComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddPaymentPreviewApplicationComponent.propDecorators = {
    previewS1Application: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    applicationSingleMedia: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    multimediaDTO: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AddPaymentPreviewApplicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-payment-preview-application',
        template: _raw_loader_add_payment_preview_application_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AddPaymentPreviewApplicationComponent);



/***/ }),

/***/ "9Ls8":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-payment/add-payment.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentModule", function() { return AddPaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-payment-routing.module */ "lL+D");
/* harmony import */ var _add_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-payment.component */ "N5VM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-payment-preview-application/add-payment-preview-application.component */ "1wm5");









let AddPaymentModule = class AddPaymentModule {
};
AddPaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_payment_component__WEBPACK_IMPORTED_MODULE_4__["AddPaymentComponent"], _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_8__["AddPaymentPreviewApplicationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddPaymentRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
        ],
        exports: [
            _add_payment_component__WEBPACK_IMPORTED_MODULE_4__["AddPaymentComponent"],
            _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_8__["AddPaymentPreviewApplicationComponent"]
        ]
    })
], AddPaymentModule);



/***/ }),

/***/ "HgyA":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-payment/add-payment.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  height: 200px;\n}\n\n.numbers-input {\n  text-align: end;\n}\n\n.total {\n  font-weight: 900;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover,\n.mat-expansion-panel-header {\n  background: #bad9ff;\n}\n\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]),\n.mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]),\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  background: #cfe5ff;\n}\n\n.mat-expansion-panel-header-description {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2FkZC1wYXltZW50L2FkZC1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTs7RUFFRSxtQkFBQTtBQUVGOztBQUNBOzs7RUFNRSxtQkFBQTtBQURGOztBQUlBO0VBQ0ksOEJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5udW1iZXJzLWlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi50b3RhbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6aG92ZXIsXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2JhZDlmZjtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWxcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSksXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSksXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XHJcbiAgYmFja2dyb3VuZDogI2NmZTVmZjtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "N5VM":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-payment/add-payment.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentComponent", function() { return AddPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-payment.component.html */ "QVrx");
/* harmony import */ var _add_payment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-payment.component.scss */ "HgyA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/models/payment-method.model */ "piSE");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/core/models/application-single-media.model */ "XLGj");


















let AddPaymentComponent = class AddPaymentComponent {
    constructor(apiService, sanitizer, formBuilder, route, router, fileStorageService, dataStorage, validateFieldService, spinner, sweetAlertService) {
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.fileStorageService = fileStorageService;
        this.dataStorage = dataStorage;
        this.validateFieldService = validateFieldService;
        this.spinner = spinner;
        this.sweetAlertService = sweetAlertService;
        this.displayedColumns = ['referenceCode', 'adTitle', 'mediumAndLength', 'amount'];
        this.multipleApplicationList = [];
        this.paymentTypeFromUrl = '';
        this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_4__["S1Application"]();
        this.attachmentDocument = new _models__WEBPACK_IMPORTED_MODULE_4__["AttachmentDocument"]();
        this.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_17__["ApplicationSingleMedia"]();
        this.typeOfMediumDisplay = '';
        this.paymentTypeList = [];
        this.attachmentDocuments = [];
        this.payment = new _models__WEBPACK_IMPORTED_MODULE_4__["Payment"]();
        this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_11__["PaymentMethod"]();
        this.currentDate = new Date();
        this.paymentTemp = new _models__WEBPACK_IMPORTED_MODULE_4__["Payment"]();
        this.isMultiple = false;
        this.isSpecial = false;
        this.isForPayment = false;
        this.isForApproval = false;
        this.isPaymentTypeValid = false;
        this.isDelinquent = false;
        this.isShowUploadButton = false;
        this.previewDocument = false;
        this.proofOfPayment = [
            { id: 1, name: 'Schedule of Fees - Individual' },
            { id: 2, name: 'Schedule of Fees - Multiple' },
            { id: 3, name: 'Schedule of Fees - Special' },
            { id: 4, name: 'Settlement of Delinquent Status' },
            { id: 5, name: 'Settlement of Brand Penalties' },
            { id: 6, name: 'Settlement of Company Penalties' }
        ];
        this.multimediaDTO = {};
    }
    ngOnInit() {
        this.currentUser = this.dataStorage.getUserAccount();
        this.paymentTypeFromUrl = this.route.snapshot.paramMap.get('id').split('-')[0];
        this.id = this.route.snapshot.paramMap.get('id').split('-')[1];
        this.getPaymentList();
        this.setFormValidator();
        this.initData();
    }
    initData() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (((_a = this.paymentTypeFromUrl) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'for_payment') {
            this.isForPayment = true;
        }
        if (((_b = this.paymentTypeFromUrl) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'for_approval') {
            this.isForApproval = true;
        }
        if ((_f = (_e = (_d = (_c = this.route) === null || _c === void 0 ? void 0 : _c.snapshot) === null || _d === void 0 ? void 0 : _d.paramMap) === null || _e === void 0 ? void 0 : _e.get('status')) === null || _f === void 0 ? void 0 : _f.includes('multiple-')) {
            this.isMultiple = true;
            this.paymentTypeFromUrl = 'multiple';
        }
        if ((_j = (_h = (_g = this.route) === null || _g === void 0 ? void 0 : _g.snapshot) === null || _h === void 0 ? void 0 : _h.params) === null || _j === void 0 ? void 0 : _j.id.includes('special-')) {
            this.isSpecial = true;
            this.paymentTypeFromUrl = 'special';
        }
        if ((_o = (_m = (_l = (_k = this.route) === null || _k === void 0 ? void 0 : _k.snapshot) === null || _l === void 0 ? void 0 : _l.paramMap) === null || _m === void 0 ? void 0 : _m.get('status')) === null || _o === void 0 ? void 0 : _o.includes('delinquent-')) {
            this.isDelinquent = true;
            this.paymentTypeFromUrl = 'delinquent';
        }
        if (this.id !== 0 && this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_6__["USER_ROLES"].ROLE_ACCOUNTING) {
            if (this.isForPayment || this.isSpecial || ((_p = this.paymentTypeFromUrl) === null || _p === void 0 ? void 0 : _p.toLowerCase()) === 'unpaid' || this.isMultiple) {
                this.getPaymentDetails();
            }
            else {
                this.viewPayment();
            }
            if (this.isMultiple) {
                this.getMultipleApplicationList();
            }
        }
    }
    setFormValidator() {
        this.paymentForm = this.formBuilder.group({
            paymentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            referenceNo: [''],
            amount: [''],
            paymentDate: [''],
            bankName: [''],
            bankBranch: [''],
            controlNo: [''],
            referenceNumber: [''],
            typeOfMaterial: [''],
            length: [''],
            baseRate: [''],
            vat: [''],
            total: [''],
            remarks: [''],
            applicantCompanyDetails: [''],
            accumulatedAmountToBeSettled: [''],
            clientCompanyDetails: [''],
            discount: [''],
            amountReceive: [''],
            filedBirForm: [''],
            withholdingTax: [0],
            orNo: [''],
            ccConfirmationCode: [''],
            checkNo: ['']
        });
    }
    approvePenalty() {
        if (this.paymentMethod.amount < this.payment.amountDue) {
            this.sweetAlertService.customErrorMessage(`Amount Received/Transferred is lower than Amount Due.`);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to approve this Delinquent Company?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.payment.paymentMethod = this.paymentMethod;
                    this.payment.amountReceive = Number(this.paymentMethod.amount);
                    this.apiService.save(`${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].approveDelinquentCompany}`, this.payment).subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage('Delinquent company approved successfully.');
                        this.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                    }, err => {
                        if (!err.error.message) {
                            err.error.message = err.error.responseMessage;
                        }
                        this.sweetAlertService.error(err);
                    });
                }
            });
        }
    }
    paymentTypevalidator() {
        var _a, _b;
        let a = this.paymentMethod;
        let b = (_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.paymentDescription;
        if (b === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].GCASH || b === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].CASH) {
            if (a.referenceNo && a.paymentDate && a.amount
                ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) { }
        }
        else if (b === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].PAYMAYA) {
            if (a.referenceNo && a.paymentDate && a.amount && a.ccConfirmationCode
                ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) { }
        }
        else if (b === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].BANK) {
            if (a.bankName && a.paymentDate && a.amount && a.bankBranch
                ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) { }
        }
        else if (b === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].VOUCHER) {
            if (a.controlNo ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) { }
        }
        else if (b === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].CHECK) {
            if (a.bankName && a.checkNo && a.amount
                ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) { }
        }
    }
    resetPaymentTypeValidation() {
        var _a, _b;
        this.isPaymentTypeValid = false;
        if (((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.paymentDescription) === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_MODE"].PROMISORRY_NOTE) {
            this.isPaymentTypeValid = true;
        }
    }
    getPaymentDetails() {
        let endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetails;
        if (this.isMultiple) {
            if (this.isForPayment) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].multiplePaymentDetails;
            }
            else {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentMultipleMonitoring + `?groupId=`;
            }
        }
        if (this.isSpecial) {
            if (this.isForPayment) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].specialPaymentDetails;
            }
            else {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentSpecial;
            }
        }
        this.apiService.findAll(endpoint + this.id).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (res.responseData) {
                this.payment = res.responseData.data;
                this.payment ? (this.payment.filedBirForm = this.payment.filedBirForm ? this.payment.filedBirForm : false) : null;
                this.paymentMethod = ((_a = this.payment) === null || _a === void 0 ? void 0 : _a.paymentMethod) ? this.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_11__["PaymentMethod"]();
            }
            else if (res.data) {
                this.payment = res.data[0];
                this.payment ? (this.payment.filedBirForm = this.payment.filedBirForm ? this.payment.filedBirForm : false) : null;
                this.paymentMethod = ((_b = this.payment) === null || _b === void 0 ? void 0 : _b.paymentMethod) ? this.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_11__["PaymentMethod"]();
            }
            else {
                this.payment = res;
                this.payment ? (this.payment.filedBirForm = this.payment.filedBirForm ? this.payment.filedBirForm : false) : null;
                this.paymentMethod = ((_c = this.payment) === null || _c === void 0 ? void 0 : _c.paymentMethod) ? this.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_11__["PaymentMethod"]();
            }
            switch (((_e = (_d = this.payment) === null || _d === void 0 ? void 0 : _d.applicationForm) === null || _e === void 0 ? void 0 : _e.refTypeOfMedium) || ((_h = (_g = (_f = this.payment) === null || _f === void 0 ? void 0 : _f.applicationFormS2) === null || _g === void 0 ? void 0 : _g.applicationForm) === null || _h === void 0 ? void 0 : _h.refTypeOfMedium)) {
                case 'SINGLE MEDIA':
                    this.getApplicationSingleMedia();
                    break;
                case 'MULTIMEDIA-MOVING':
                    this.getMultimediaMoving();
                    this.fetchMultimedia();
                    break;
                case 'MULTIMEDIA-STATIC':
                    this.getMultimediaStatic();
                    this.fetchMultimedia();
                    break;
                default:
                    break;
            }
            if ((_j = this.payment) === null || _j === void 0 ? void 0 : _j.paymentAttachmentReference) {
                this.getAttachmentDocumentDisplay(this.payment.paymentAttachmentReference);
            }
            // this.paymentTemp = this.payment;
        });
    }
    getPaymentList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentType).subscribe((res) => {
            this.paymentTypeList = res.responseData.data;
            if (this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_6__["USER_ROLES"].ROLE_APPLICANT) {
                const creditCardIndex = this.paymentTypeList
                    .findIndex((element) => element.paymentDescription === 'Credit Card');
                this.paymentTypeList.splice(creditCardIndex, 1);
            }
        });
    }
    viewPayment() {
        var _a;
        let endpoint = `${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].payment}/application-form-id`;
        if (this.isMultiple) {
            if (this.isForPayment) {
                endpoint = `${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentMultiple}/payment-multiple-details/multiple-application-id`;
            }
            else if (this.isForApproval) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentMultipleMonitoring;
            }
        }
        else {
            if (((_a = this.paymentTypeFromUrl) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'for_payment') {
                if (this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_6__["USER_ROLES"].ROLE_ACCOUNTING) {
                    endpoint = `${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetailsAccounting}`;
                }
                else {
                    endpoint = `${_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetails}`;
                }
            }
        }
        this.apiService.findByParam(endpoint, this.id).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (res.responseData) {
                this.payment = res.responseData.data;
                if (this.payment) {
                    this.payment.filedBirForm = this.payment.filedBirForm ? this.payment.filedBirForm : false;
                }
            }
            else {
                this.payment = res;
                if (this.payment) {
                    this.payment.filedBirForm = this.payment.filedBirForm ? this.payment.filedBirForm : false;
                }
            }
            this.paymentMethod = ((_a = this.payment) === null || _a === void 0 ? void 0 : _a.paymentMethod) ? this.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_11__["PaymentMethod"]();
            this.paymentMode = (_c = (_b = this.paymentMethod) === null || _b === void 0 ? void 0 : _b.paymentType) === null || _c === void 0 ? void 0 : _c.paymentDescription;
            // this.paymentTemp = this.payment;
            if ((_d = this.payment) === null || _d === void 0 ? void 0 : _d.paymentAttachmentReference) {
                this.getAttachmentDocumentDisplay(this.payment.paymentAttachmentReference);
            }
            switch (((_f = (_e = this.payment) === null || _e === void 0 ? void 0 : _e.applicationForm) === null || _f === void 0 ? void 0 : _f.refTypeOfMedium) || ((_j = (_h = (_g = this.payment) === null || _g === void 0 ? void 0 : _g.applicationFormS2) === null || _h === void 0 ? void 0 : _h.applicationForm) === null || _j === void 0 ? void 0 : _j.refTypeOfMedium)) {
                case 'SINGLE MEDIA':
                    this.getApplicationSingleMedia();
                    break;
                case 'MULTIMEDIA-MOVING':
                    this.getMultimediaMoving();
                    this.fetchMultimedia();
                    break;
                case 'MULTIMEDIA-STATIC':
                    this.getMultimediaStatic();
                    this.fetchMultimedia();
                    break;
                default:
                    break;
            }
        });
    }
    getAttachmentDocumentDisplay(paymentAttachmentReference) {
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].attachmentDocument, `payment-attachment-reference/` + paymentAttachmentReference)
            .subscribe((res1) => {
            if (res1.responseData.data) {
                this.attachmentDocuments = res1.responseData.data;
                this.attachmentDocument = res1.responseData.data;
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.attachmentDocument.fileURL);
                // console.log('view attachmentDocument: ', this.attachmentDocuments);
            }
        }, (err) => {
            this.attachmentDocuments = [];
        });
    }
    getMultipleApplicationList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].getMultipleAppFormsWithNoRejected + this.id).subscribe((res) => {
            this.multipleApplicationList = res.responseData.data;
            this.multipleApplicationList.forEach((multipleApplication) => {
                var _a, _b;
                switch ((multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.refTypeOfMedium) || ((_b = (_a = multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.applicationFormS2) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.refTypeOfMedium)) {
                    case 'SINGLE MEDIA':
                        this.getApplicationSingleMedia(multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.appFormReference);
                        break;
                    case 'MULTIMEDIA-MOVING':
                        this.getMultimediaMoving(multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.appFormReference);
                        break;
                    case 'MULTIMEDIA-STATIC':
                        this.getMultimediaStatic(multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.appFormReference);
                        break;
                    default:
                        break;
                }
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.multipleApplicationList);
            this.dataSource.paginator = this.paginator;
            if (this.multipleApplicationList.length) {
                this.payment.multipleApplication = this.multipleApplicationList[0].multipleApplication;
            }
        }, (err) => {
            this.sweetAlertService.error(err);
        });
    }
    processPayment(remarks) {
        var _a, _b, _c;
        const amountTransferred = Number.parseFloat((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.amount) === null || _b === void 0 ? void 0 : _b.toString());
        const toPay = this.payment.amountDue - ((_c = this.payment) === null || _c === void 0 ? void 0 : _c.withholdingTax);
        if (this.paymentMethod.paymentType.paymentDescription === 'Voucher' ||
            this.paymentMethod.paymentType.paymentDescription === 'Promisorry Note' ||
            (this.paymentMethod.paymentType.paymentDescription !== 'Voucher'
                && this.paymentMethod.paymentType.paymentDescription !== 'Promisorry Note'
                && amountTransferred >= toPay)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to process this PAYMENT?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.payment.paymentStatus = _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_STATUS"].PAID;
                    this.payment.paymentDate = new Date();
                    this.payment.paymentMethod = this.paymentMethod;
                    this.payment.amountReceive = this.paymentMethod.amount;
                    // this.payment.paymentAttachmentReference = this.attachmentDocument.paymentAttachmentReference;
                    let endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountingPaymentApprove;
                    if (this.isMultiple) {
                        endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountingMultiplePaymentApprove;
                    }
                    else if (this.isSpecial) {
                        endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountingSpecialPaymentApprove;
                    }
                    this.apiService.save(endpoint, this.payment).subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage('Payment successfully processed.');
                        // console.log('SAVED DATA: ', res);
                        this.router.navigate(['asc/page/accounting/payments/', `schedule-of-fees-${this.paymentTypeFromUrl}`]);
                    });
                }
            });
        }
        else {
            this.sweetAlertService.customErrorMessage(`Amount Received/Transferred is lower than Amount Due.`);
        }
    }
    comparePaymentType(value, selected) {
        if (value && selected) {
            return value.paymentDescription === selected.paymentDescription;
        }
    }
    selectProofOfPayment(res) {
        this.selectedProofOfPayment = res;
    }
    // recompute() {
    //   console.log('trigerring recompute... ', this.payment);
    //   this.paymentTemp = this.payment;
    //   let endpoint = ENDPOINTS.accountingRecompute;
    //   if (this.isMultiple) {
    //     endpoint = ENDPOINTS.accountingRecomputeMultiple;
    //   } else if (this.isSpecial) {
    //     endpoint = ENDPOINTS.accountingSpecialPaymentRecompute;
    //   }
    //   console.log('paymentMethod - ', this.paymentMethod);
    //   this.payment.paymentMethod = this.paymentMethod;
    //   this.payment.paymentDate = new Date();
    //   this.payment.filename = this.attachmentDocument.filename;
    //   this.payment.amountReceive = this.paymentMethod.amount;
    //   this.payment.paymentAttachmentReference = this.attachmentDocument.paymentAttachmentReference;
    //   this.apiService.save(endpoint, this.payment).subscribe((res: any) => {
    //     this.payment = res;
    //     this.payment.basicRate = this.paymentTemp.basicRate;
    //     this.payment.vat = this.paymentTemp.vat;
    //     this.payment.amountDue = this.paymentTemp.amountDue;
    //     console.log('payment... ', this.payment);
    //   }, (err: any) => {
    //   });
    // }
    computeWithholding() {
        var _a;
        if (this.payment) {
            this.payment.withholdingTax = ((_a = this.payment) === null || _a === void 0 ? void 0 : _a.filedBirForm) ? this.payment.basicRate * 0.02 : 0;
        }
    }
    getAmountDue() {
        var _a, _b;
        let amountDue = Number((Math.round(((_a = this.payment) === null || _a === void 0 ? void 0 : _a.amountDue) * 100) / 100).toFixed(2));
        let withholding = Number((Math.round(((_b = this.payment) === null || _b === void 0 ? void 0 : _b.withholdingTax) * 100) / 100).toFixed(2));
        let result = amountDue - withholding;
        return result ? result : 0;
    }
    validatePaymentStatus() {
        var _a, _b;
        if (((_a = this.payment) === null || _a === void 0 ? void 0 : _a.paymentStatus) !== _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_STATUS"].PAID && ((_b = this.payment) === null || _b === void 0 ? void 0 : _b.paymentStatus) !== _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_STATUS"].UNPAID) {
            return true;
        }
        return false;
    }
    comparePaymentMethod(value, selected) {
        if (value && selected) {
            return value.paymentDescription === selected.paymentDescription;
        }
    }
    selectFile(event) {
        this.isShowUploadButton = false;
        if (event.target.files[0]) {
            this.fileSize = event.target.files[0].size;
            if (this.fileSize > 15000000) {
                this.sweetAlertService.customErrorMessage(`Attachments' total file size should not exceed 15MB.`);
                event.target.value = '';
                return;
            }
            else {
                this.isShowUploadButton = true;
                const fileURL = URL.createObjectURL(event.target.files[0]);
                this.previewDocument = true;
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                const reader = new FileReader();
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onload = () => {
                };
                this.selectedFile = event.target.files[0];
            }
        }
    }
    viewDocument() {
        if (this.uploadedPaymentFile) {
            window.open(this.uploadedPaymentFile.fileURL);
        }
        else {
            window.open(this.attachmentDocument.fileURL);
        }
    }
    uploadProofOfPayment() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to submit this as proof of payment?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.spinner.show();
                let params = '';
                params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_6__["ATTACHMENT_TYPE"].PAYMENT + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_6__["SUBMISSION_TYPE"].ORIGINAL;
                this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].attachmentDocument, this.selectedFile, params)
                    .subscribe((res) => {
                    this.uploadedPaymentFile = res.responseData.data;
                    this.payment.paymentAttachmentReference = this.uploadedPaymentFile.paymentAttachmentReference;
                    this.addToAttachmentDocuments(this.uploadedPaymentFile);
                    this.hideSpinner();
                    this.sweetAlertService.customSuccessMessage('Attachment successfully uploaded.');
                    this.selectedFile = null;
                    this.getAttachmentDocument();
                }, (err) => {
                    this.hideSpinner();
                    this.sweetAlertService.error(err);
                }, () => {
                    // actions after subscription
                });
            }
            else {
                this.selectedFile = null;
            }
        });
    }
    addToAttachmentDocuments(obj) {
        this.attachmentDocument.paymentAttachmentReference = obj.paymentAttachmentReference;
        this.attachmentDocument.id = obj.id;
        this.attachmentDocument.originalFilename = obj.originalFilename;
        this.attachmentDocument.filename = obj.filename;
        this.attachmentDocument.fileExtension = obj.fileExtension;
        this.attachmentDocument.fileURL = obj.fileURL;
        this.attachmentDocument.attachmentType = obj.attachmentType;
        this.attachmentDocument.documentFormat = obj.documentFormat;
    }
    hideSpinner() {
        setTimeout(() => {
            this.spinner.hide();
        }, 1);
    }
    getAttachmentDocument() {
        this.spinner.show();
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentAttachmentReference, this.attachmentDocument.paymentAttachmentReference).subscribe((res) => {
            if (res) {
                this.attachmentDocument = res.responseData.data;
            }
            this.hideSpinner();
        }, (err) => {
            this.hideSpinner();
            console.error(err);
        });
    }
    getAttachmentDocuments() {
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].attachmentDocument, `brand-penalty-attachment-reference/${this.payment.paymentAttachmentReference}`).subscribe((res) => {
            if (res) {
                this.attachmentDocument = res;
            }
            this.previewDocument = true;
            this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.attachmentDocument.fileURL);
        });
    }
    navigateToList() {
        if (this.payment.paymentStatus === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_STATUS"].PAID || this.payment.paymentStatus === _shared__WEBPACK_IMPORTED_MODULE_6__["PAYMENT_STATUS"].UNPAID) {
            if (this.paymentTypeFromUrl) {
                this.router.navigate(['asc/page/accounting/payments/', `schedule-of-fees-${this.paymentTypeFromUrl}`]);
            }
            else {
                this.router.navigate(['asc/page/accounting/payments/']);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to go back to payment list?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    if (this.paymentTypeFromUrl) {
                        this.router.navigate(['asc/page/accounting/payments/', `schedule-of-fees-${this.paymentTypeFromUrl}`]);
                    }
                    else {
                        this.router.navigate(['asc/page/accounting/payments/']);
                    }
                }
            });
        }
    }
    getApplicationSingleMedia(appFormReference) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (appFormReference === void 0) { appFormReference = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.appFormReference; }
        if ((_e = (_d = (_c = this.payment) === null || _c === void 0 ? void 0 : _c.applicationFormS2) === null || _d === void 0 ? void 0 : _d.applicationForm) === null || _e === void 0 ? void 0 : _e.refTypeOfMedium) {
            appFormReference = (_h = (_g = (_f = this.payment) === null || _f === void 0 ? void 0 : _f.applicationFormS2) === null || _g === void 0 ? void 0 : _g.applicationForm) === null || _h === void 0 ? void 0 : _h.appFormReference;
        }
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].applicationSingleMedia, `app-form-reference/${appFormReference}`).subscribe((res) => {
            var _a, _b, _c, _d;
            if (res.responseData.data.length > 0) {
                this.applicationSingleMedia = res.responseData.data[0];
                this.typeOfMediumDisplay = `${(_c = (_b = (_a = this.applicationSingleMedia) === null || _a === void 0 ? void 0 : _a.mediumExecution) === null || _b === void 0 ? void 0 : _b.typeOfMedium) === null || _c === void 0 ? void 0 : _c.description} (${(_d = this.applicationSingleMedia) === null || _d === void 0 ? void 0 : _d.sizeLength})`;
                if (this.isMultiple) {
                    this.multipleApplicationList.forEach((element, index) => {
                        if (element.appFormReference === appFormReference) {
                            this.multipleApplicationList[index] = Object.assign(Object.assign({}, this.multipleApplicationList[index]), { typeOfMediumDisplay: this.typeOfMediumDisplay });
                        }
                    });
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.multipleApplicationList);
                    this.dataSource.paginator = this.paginator;
                }
            }
            else {
                this.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_17__["ApplicationSingleMedia"]();
                this.typeOfMediumDisplay = '';
            }
        }, (err) => {
            this.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_17__["ApplicationSingleMedia"]();
            this.typeOfMediumDisplay = '';
        });
    }
    getMultimediaStatic(appFormReference) {
        var _a, _b;
        if (appFormReference === void 0) { appFormReference = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.appFormReference; }
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].applicationMultimedia, `app-form-reference/${appFormReference}`).subscribe((res) => {
            if (res.responseData.data.length > 0) {
                const multimediaList = new Set(res.responseData.data.map(mappedList => { var _a; return `${(_a = mappedList === null || mappedList === void 0 ? void 0 : mappedList.typeOfMedium) === null || _a === void 0 ? void 0 : _a.description} (${mappedList === null || mappedList === void 0 ? void 0 : mappedList.multimediaSizeLength})`; }));
                this.typeOfMediumDisplay = '';
                let mediaCtrl = 1;
                for (const media of multimediaList) {
                    if (mediaCtrl !== multimediaList.size) {
                        this.typeOfMediumDisplay += `${media}, `;
                        mediaCtrl++;
                    }
                    else {
                        this.typeOfMediumDisplay += media;
                    }
                }
                if (this.isMultiple) {
                    this.multipleApplicationList.forEach((element, index) => {
                        if (element.appFormReference === appFormReference) {
                            this.multipleApplicationList[index] = Object.assign(Object.assign({}, this.multipleApplicationList[index]), { typeOfMediumDisplay: this.typeOfMediumDisplay });
                        }
                    });
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.multipleApplicationList);
                    this.dataSource.paginator = this.paginator;
                }
            }
            else {
                this.typeOfMediumDisplay = '';
            }
        }, (err) => {
            this.typeOfMediumDisplay = '';
        });
    }
    getMultimediaMoving(appFormReference) {
        var _a, _b;
        if (appFormReference === void 0) { appFormReference = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.appFormReference; }
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].applicationMultimedia, `app-form-reference/${appFormReference}`).subscribe((res) => {
            if (res.responseData.data.length > 0) {
                const multimediaList = new Set(res.responseData.data.map(mappedList => { var _a; return `${(_a = mappedList === null || mappedList === void 0 ? void 0 : mappedList.typeOfMedium) === null || _a === void 0 ? void 0 : _a.description} (${mappedList === null || mappedList === void 0 ? void 0 : mappedList.multimediaSizeLength})`; }));
                this.typeOfMediumDisplay = '';
                let mediaCtrl = 1;
                for (const media of multimediaList) {
                    if (mediaCtrl !== multimediaList.size) {
                        this.typeOfMediumDisplay += `${media}, `;
                        mediaCtrl++;
                    }
                    else {
                        this.typeOfMediumDisplay += media;
                    }
                }
                if (this.isMultiple) {
                    this.multipleApplicationList.forEach((element, index) => {
                        if (element.appFormReference === appFormReference) {
                            this.multipleApplicationList[index] = Object.assign(Object.assign({}, this.multipleApplicationList[index]), { typeOfMediumDisplay: this.typeOfMediumDisplay });
                        }
                    });
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.multipleApplicationList);
                    this.dataSource.paginator = this.paginator;
                }
            }
            else {
                this.typeOfMediumDisplay = '';
            }
        }, (err) => {
            this.typeOfMediumDisplay = '';
        });
    }
    rejectPayment() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to reject this roof of payment?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.spinner.show();
                let rejectEndpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountingReject;
                if (this.isMultiple) {
                    rejectEndpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountingRejectMultiple;
                }
                else if (this.isSpecial) {
                    rejectEndpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountingRejectSpecial;
                }
                this.apiService.save(rejectEndpoint, this.payment)
                    .subscribe((res) => {
                    this.hideSpinner();
                    this.sweetAlertService.customSuccessMessage('Successfully rejected.');
                    if (this.paymentTypeFromUrl) {
                        this.router.navigate(['asc/page/accounting/payments/', `schedule-of-fees-${this.paymentTypeFromUrl}`]);
                    }
                    else {
                        this.router.navigate(['asc/page/accounting/payments/']);
                    }
                }, (err) => {
                    this.hideSpinner();
                    this.sweetAlertService.error(err);
                }, () => {
                    // actions after subscription
                });
            }
        });
    }
    fetchMultimedia() {
        var _a, _b;
        let typeofMedium = ((_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm.refTypeOfMedium) === _shared__WEBPACK_IMPORTED_MODULE_6__["TYPE_OF_MEDIUM"].MULTIMEDIA_MOVING ? 'moving' : 'static';
        let endpoint = _shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].applicationMultimedia + '-' + typeofMedium + '/app-form-reference';
        this.apiService.findByParam(endpoint, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.applicationForm.appFormReference).subscribe(multimedia => {
            if (multimedia)
                this.multimediaDTO = multimedia.responseData.data;
        });
    }
};
AddPaymentComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_16__["FileStorageService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_15__["ValidateFieldService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["SweetAlertService"] }
];
AddPaymentComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], { static: false },] }],
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTable"], { static: false },] }],
    s1Application: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    payment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AddPaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-payment',
        template: _raw_loader_add_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_payment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPaymentComponent);



/***/ }),

/***/ "QVrx":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/add-payment/add-payment.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" *ngIf=\"currentUser?.userRole.name=='ROLE_ACCOUNTING'\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>payment</mat-icon> PAYMENT\r\n        </mat-label>\r\n\r\n        <button class=\"button-right button-red\" mat-raised-button (click)=\"navigateToList()\">\r\n          <mat-icon>list</mat-icon> VIEW LIST OF PAYMENT\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-3\">\r\n      <mat-accordion class=\"headers-align\">\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <i class=\"material-icons\">label_important</i> &nbsp;Preview\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Application Details\r\n              <i class=\"material-icons\">visibility</i>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <br>\r\n          <app-add-payment-preview-application [previewS1Application]=\"payment?.applicationForm || payment?.multipleApplication\" [multimediaDTO]=\"multimediaDTO\"></app-add-payment-preview-application>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"paymentForm\">\r\n      <div class=\"row fields\">\r\n        <div class=\"col-md-12 title\" *ngIf=\"currentUser?.userRole?.name!='ROLE_ACCOUNTING'\">\r\n          <mat-label>\r\n            <mat-icon>payment</mat-icon>\r\n            {{payment?.paymentStatus!='PAID'&&safeURL!=undefined ? 'FOR APPROVAL' : payment?.paymentStatus}}\r\n          </mat-label>\r\n        </div>\r\n\r\n        <!--///////////////////////// ACCOUNTING /////////////////////////////-->\r\n        <div class=\"row\" *ngIf=\"currentUser.userRole.name=='ROLE_ACCOUNTING'\">\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Type Of Payment</mat-label>\r\n            <input matInput value=\"Schedule of Fees\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\" appearance=\"outline\">\r\n          <div class=\"col-md-12\" appearance=\"outline\" *ngIf=\"isForPayment || paymentTypeFromUrl === 'paid' || safeURL \">\r\n            <mat-label>Filename: </mat-label>\r\n            <br>\r\n            <input matInput [value]=\"attachmentDocument.originalFilename\" disabled\r\n              *ngIf=\"attachmentDocument.originalFilename\">\r\n            <input class=\"file-upload\" type=\"file\"\r\n              *ngIf=\"!attachmentDocument.originalFilename && this.paymentTypeFromUrl !== 'paid'\" accept=\".pdf\"\r\n              (change)=\"selectFile($event)\">\r\n            <br><br>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\" appearance=\"outline\"\r\n            *ngIf=\"(isForPayment || this.paymentTypeFromUrl === 'paid' || safeURL) && (attachmentDocument?.paymentAttachmentReference || isShowUploadButton)\">\r\n\r\n            <button mat-raised-button class=\"button-red button-right\" (click)=\"viewDocument()\"\r\n              *ngIf=\"attachmentDocument?.paymentAttachmentReference\">\r\n              <mat-icon>open_in_new</mat-icon> VIEW DOCUMENT\r\n            </button>\r\n\r\n            &nbsp; &nbsp;\r\n\r\n            <button mat-raised-button class=\"button-red button-right\" (click)=\"uploadProofOfPayment()\"\r\n              [disabled]=\"!safeURL||!isShowUploadButton\"\r\n              *ngIf=\"isShowUploadButton && !attachmentDocument.originalFilename\">\r\n              <mat-icon>upload</mat-icon> UPLOAD\r\n            </button>\r\n            <br><br>\r\n          </div>\r\n          <div class=\"file-upload\" style=\"border: 1px solid red\" *ngIf=\"safeURL\"\r\n            [hidden]=\"payment?.paymentStatus === 'PAID' || payment?.paymentStatus === 'UNPAID'\">\r\n            <object [data]=\"safeURL\" type=\"application/pdf\" width=\"100%\" height=\"500\">\r\n              <iframe [src]=\"safeURL\" width=\"100%\" height=\"500\">\r\n                <p>This browser does not support PDF!</p>\r\n              </iframe>\r\n            </object>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\" [hidden]=\"isMultiple\">\r\n              <mat-label>Reference Number</mat-label>\r\n              <input matInput\r\n                [value]=\"payment?.applicationForm?.referenceCode || payment?.applicationFormS2?.applicationForm?.referenceCode\"\r\n                readonly>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Advertiser</mat-label>\r\n              <input matInput name=\"companyName\" readonly\r\n                [value]=\"payment?.applicationForm?.company?.companyName || payment?.multipleApplication?.company?.companyName || payment?.applicationFormS2?.applicationForm?.company?.companyName\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\" [hidden]=\"isMultiple\">\r\n              <mat-label>Ad Title - Medium (Length)</mat-label>\r\n              <textarea matInput name=\"refTypeOfMedium\"\r\n                [value]=\"payment?.applicationForm?.adTitle ? payment?.applicationForm?.adTitle + ' - ' + typeOfMediumDisplay : typeOfMediumDisplay || payment?.applicationFormS2?.applicationForm?.adTitle + ' - ' + typeOfMediumDisplay || payment?.applicationFormS2?.applicationForm?.adTitle + ' - ' + typeOfMediumDisplay\"\r\n                readonly></textarea>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Vatable Sales</mat-label>\r\n              <input class=\"numbers-input\" matInput [value]=\"payment?.basicRate | number : '1.2-2'\" readonly\r\n                step=\"0.01\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>VAT</mat-label>\r\n              <input class=\"numbers-input\" matInput [value]=\"payment?.vat | number : '1.2-2'\" readonly>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Total Sales (VAT Inclusive)</mat-label>\r\n              <input class=\"numbers-input total\" matInput name=\"amount\" [value]=\"payment?.amountDue | number : '1.2-2'\"\r\n                readonly>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\" [hidden]=\"payment?.paymentStatus!='PAID'&&currentUser?.userRole?.name!='ROLE_ACCOUNTING'\">\r\n\r\n          <div class=\"row\">\r\n            <div *ngIf=\"isMultiple\">\r\n              <table mat-table [dataSource]=\"dataSource\" matSort>\r\n                <ng-container matColumnDef=\"referenceCode\">\r\n                  <th mat-header-cell *matHeaderCellDef> Reference Code </th>\r\n                  <td mat-cell *matCellDef=\"let element; let i = index\">{{element?.referenceCode}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"adTitle\">\r\n                  <th mat-header-cell *matHeaderCellDef> Ad Title </th>\r\n                  <td mat-cell *matCellDef=\"let element; let i = index\">{{element?.adTitle}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"mediumAndLength\">\r\n                  <th mat-header-cell *matHeaderCellDef> Medium And Length</th>\r\n                  <td mat-cell *matCellDef=\"let element; let i = index\">{{ element?.typeOfMediumDisplay }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"amount\">\r\n                  <th mat-header-cell *matHeaderCellDef> Amount</th>\r\n                  <td mat-cell *matCellDef=\"let element; let i = index\">{{element?.amount | number : '1.2-2'}}</td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n              </table>\r\n              <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n                No record found.\r\n              </div>\r\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n\r\n            <span>\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"payment && payment.filedBirForm\" formControlName=\"filedBirForm\"\r\n                (ngModelChange)=\"computeWithholding()\"\r\n                >\r\n                BIR Form 2307</mat-checkbox>\r\n            </span>\r\n            <!-- <b [hidden]=\"payment?.paymentStatus !== 'PAID' || !payment.filedBirForm\"><i class=\"material-icons\">check</i>\r\n              BIR Form 2307</b>\r\n            <b [hidden]=\"payment?.paymentStatus !== 'PAID' || payment.filedBirForm\"><i class=\"material-icons\">close</i>\r\n              BIR Form 2307</b> -->\r\n            <br><br>\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Withholding Tax</mat-label>\r\n              <input matInput class=\"numbers-input\" name=\"vat\" [value]=\"payment?.withholdingTax | number : '1.2-2'\"\r\n                formControlName=\"withholdingTax\" readonly>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Official Receipt No</mat-label>\r\n              <input matInput name=\"orNo\" [(ngModel)]=\"payment.officialReceiptNo\" [readonly]=\"!isForPayment\"\r\n                formControlName=\"orNo\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n            </mat-form-field> -->\r\n\r\n            <!-- <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Amount Receive</mat-label>\r\n              <input matInput name=\"amountReceive\" type=\"number\" [(ngModel)]=\"payment.amountReceive\" formControlName=\"amountReceive\"\r\n              [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Amount Due</mat-label>\r\n              <input class=\"numbers-input total\" matInput name=\"amount\"\r\n                [value]=\"getAmountDue() | number : '1.2-2'\" readonly>\r\n            </mat-form-field>\r\n\r\n            <div *ngIf=\"isMultiple\"><br>\r\n              <hr><br>\r\n            </div>\r\n\r\n            <!-- <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Payment Mode</mat-label>\r\n              <input matInput [value]=\"payment?.paymentMethod?.paymentType?.paymentDescription\" readonly> -->\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Payment Mode</mat-label>\r\n              <mat-select class=\"col-md-4\" [(ngModel)]=\"paymentMethod.paymentType\" name=\"paymentType\"\r\n                [compareWith]=\"comparePaymentMethod\" formControlName=\"paymentType\" [disabled]=\"payment?.paymentStatus=='PAID' || payment?.paymentStatus=='UNPAID'\"\r\n                (selectionChange)=\"resetPaymentTypeValidation()\">\r\n                <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" name=\"paymentType\">\r\n                  {{ i?.paymentDescription | uppercase }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <div *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Cash' || paymentMethod?.paymentType?.paymentDescription ==='GCash' ||\r\n              paymentMethod?.paymentType?.paymentDescription ==='PayMaya'\">\r\n\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Reference Number <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.referenceNo\" name=\"referenceNo\" formControlName=\"referenceNo\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Fund Transfer Date <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput placeholder=\"Date\" [matDatepicker]=\"paymentDate\" [min]=\"currentDate\"\r\n                  [(ngModel)]=\"paymentMethod.paymentDate\" name=\"paymentDate\" formControlName=\"paymentDate\"\r\n                  [readonly]=\"currentUser?.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (dateChange)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"paymentDate\" *ngIf=\"payment?.paymentStatus!=='PAID'\">\r\n                </mat-datepicker-toggle>\r\n                <mat-datepicker color=\"warn\" #paymentDate></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\"\r\n                *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='PayMaya'\">\r\n                <mat-label>Confirmation Code <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.ccConfirmationCode\" name=\"ccConfirmationCode\"\r\n                  formControlName=\"ccConfirmationCode\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Amount Transferred <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.amount\" name=\"amount\" formControlName=\"amount\"\r\n                  (keydown)=\"validateFieldService.numbersOnly($event)\" class=\"numbers-input\"\r\n                  [hidden]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n\r\n                <input class=\"numbers-input total\" matInput name=\"amount\"\r\n                  [value]=\"paymentMethod?.amount | number : '1.2-2'\" readonly\r\n                  *ngIf=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\" *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Voucher'\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Control Number <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.controlNo\" name=\"controlNo\" formControlName=\"controlNo\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n              </mat-form-field>\r\n              <!-- <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Amount</mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.amount\" name=\"amount\" formControlName=\"amount\"\r\n                  (keydown)=\"validateFieldService.numbersOnly($event)\" class=\"numbers-input\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\">\r\n              </mat-form-field> -->\r\n            </div>\r\n\r\n            <div class=\"row\"\r\n              *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Bank' ||\r\n            paymentMethod?.paymentType?.paymentDescription ==='Credit Card' || paymentMethod?.paymentType?.paymentDescription ==='Check'\">\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Bank Name <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.bankName\" name=\"bankName\" formControlName=\"bankName\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\"\r\n                *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Credit Card'\">\r\n                <mat-label>Confirmation Code <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.ccConfirmationCode\" name=\"ccConfirmationCode\"\r\n                  formControlName=\"ccConfirmationCode\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\"\r\n                *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Check'\">\r\n                <mat-label>Check Number <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.checkNo\" name=\"checkNo\" formControlName=\"checkNo\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Amount Transferred <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.amount\" name=\"amount\" class=\"numbers-input\"\r\n                  formControlName=\"amount\"\r\n                  [hidden]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n\r\n                <input class=\"numbers-input total\" matInput name=\"amount\"\r\n                  [value]=\"paymentMethod?.amount | number : '1.2-2'\" readonly\r\n                  *ngIf=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\"\r\n                *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Bank'\">\r\n                <mat-label>Branch <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"paymentMethod.bankBranch\" name=\"withholdingTax\"\r\n                  formControlName=\"bankBranch\"\r\n                  [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"\r\n                  (blur)=\"paymentTypevalidator()\" (keyup)=\"paymentTypevalidator()\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\"\r\n                *ngIf=\"paymentMethod?.paymentType?.paymentDescription ==='Bank'\">\r\n                <mat-label>Deposited Date <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput placeholder=\"Date\" [matDatepicker]=\"paymentDate\" [(ngModel)]=\"paymentMethod.paymentDate\"\r\n                  name=\"paymentDate\" formControlName=\"paymentDate\" (dateChange)=\"paymentTypevalidator()\"\r\n                  (keyup)=\"paymentTypevalidator()\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"paymentDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker color=\"warn\" #paymentDate disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <!--  <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>Discount</mat-label>\r\n              <input matInput name=\"discount\" type=\"number\" [(ngModel)]=\"payment.discount\" formControlName=\"discount\"\r\n              [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\">\r\n            </mat-form-field> -->\r\n\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n              <mat-label>REMARKS</mat-label>\r\n              <!-- <textarea matInput [value]=\"payment?.remarks\" [readonly]=\"!isForPayment\"></textarea> -->\r\n              <textarea matInput [ngModel]=\"payment?.remarks\" (ngModelChange)=\"payment ? payment.remarks = $event : null\" formControlName=\"remarks\" name=\"remarks\"\r\n                [readonly]=\"currentUser.userRole.name!='ROLE_ACCOUNTING'||payment?.paymentStatus=='PAID'\"></textarea>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"selectedProofOfPayment === 2\">\r\n            <div class=\"row\">\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Applicant Company Details</mat-label>\r\n                <input matInput name=\"companyName\" [readonly]=\"isForPayment\">\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Accumulated Amount to be settled</mat-label>\r\n                <input matInput name=\"length\" [readonly]=\"isForPayment\" class=\"numbers-input\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"selectedProofOfPayment === 3\">\r\n            <div class=\"row\">\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Client Company Details</mat-label>\r\n                <input matInput name=\"companyName\" [readonly]=\"isForPayment\">\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label>Accumulated Amount to be settled</mat-label>\r\n                <input matInput name=\"length\" [readonly]=\"isForPayment\" class=\"numbers-input\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" *ngIf=\"currentUser?.userRole?.name=='ROLE_ACCOUNTING'&&payment?.paymentStatus!=='PAID'\">\r\n            <div class=\"col-md-12\">\r\n              <button class=\"button-right button-red\" mat-raised-button (click)=\"processPayment(payment?.remarks)\"\r\n                [hidden]=\"isDelinquent\"\r\n                [disabled]=\"(!paymentForm.valid || !payment?.paymentAttachmentReference || !isPaymentTypeValid)\r\n                && ((paymentMode?.toUpperCase() !== 'PROMISORRY NOTE' && paymentMethod.paymentType?.paymentDescription?.toUpperCase() !== 'PROMISORRY NOTE') || !payment.paymentAttachmentReference )\">\r\n                <mat-icon>offline_pin</mat-icon> PROCESS\r\n              </button>\r\n              <button mat-raised-button class=\"button-right button-red button-right__approve\" (click)=\"approvePenalty()\"\r\n                [disabled]=\"(!paymentForm.valid || !payment?.paymentAttachmentReference || !isPaymentTypeValid)\r\n              && ((paymentMode?.toUpperCase() !== 'PROMISORRY NOTE' && paymentMethod.paymentType?.paymentDescription?.toUpperCase() !== 'PROMISORRY NOTE') || !payment.paymentAttachmentReference )\"\r\n                *ngIf=\"isDelinquent\">\r\n                <i class=\"material-icons color__white\">task_alt</i> APPROVE\r\n              </button>\r\n              &nbsp;\r\n              <button mat-raised-button class=\"button-right button-red\" (click)=\"rejectPayment()\" *ngIf=\"isForApproval\">\r\n                <mat-icon>unpublished</mat-icon> REJECT\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "dW3V":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/add-payment/add-payment-preview-application/add-payment-preview-application.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CLIENT INFO -->\r\n<div class=\"row fields\">\r\n  <h4>\r\n    <i class=\"material-icons\">preview</i> &nbsp;<b>CLIENT'S INFORMATION</b>\r\n    <hr>\r\n  </h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\" appearance=\"outline\">\r\n      <mat-label>Client Company Name</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.company?.companyName\" disabled>\r\n    </div>\r\n    <div class=\"col-md-4\" appearance=\"outline\">\r\n      <mat-label>Client Membership Affiliation</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.company?.membersAffiliation?.description\" disabled>\r\n    </div>\r\n    <div class=\"col-md-4\" appearance=\"outline\"></div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\" appearance=\"outline\">\r\n      <mat-label>Brand</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.brand?.description\" disabled>\r\n    </div>\r\n    <div class=\"col-md-4\" appearance=\"outline\">\r\n      <mat-label>Product</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.product?.description\" disabled>\r\n    </div>\r\n    <div class=\"col-md-4\" appearance=\"outline\">\r\n      <mat-label>Category</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.product?.category?.description\" disabled>\r\n    </div>\r\n  </div>\r\n\r\n  <br><br><br>\r\n</div>\r\n\r\n<!-- PRESENTOR INFO -->\r\n<div class=\"row fields\">\r\n  <h4>\r\n    <i class=\"material-icons\">preview</i> &nbsp;<b>PRESENTOR INFORMATION</b>\r\n    <hr>\r\n  </h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mb-3\" appearance=\"outline\">\r\n      <mat-label>Name of Applicant</mat-label>\r\n      <input matInput [value]=\"presentorDetails?.firstName+' '+presentorDetails?.lastName\" disabled>\r\n    </div>\r\n    <div class=\"col-md-12 mb-3\" appearance=\"outline\">\r\n      <mat-label>Company Name</mat-label>\r\n      <input matInput [value]=\"presentorDetails?.company?.companyName\" disabled>\r\n    </div>\r\n    <div class=\"col-md-12 mb-3\" appearance=\"outline\">\r\n      <mat-label>Address</mat-label>\r\n        <input matInput [value]=\"presentorDetails?.company?.completeAddress\" disabled>\r\n    </div>\r\n    \r\n    <div class=\"row col-md-12 mb-4\">\r\n      <div class=\"col-md-6 mb-3\" appearance=\"outline\">\r\n        <mat-label>Mobile Number</mat-label>\r\n        <input matInput [value]=\"presentorDetails?.mobileNumber\" disabled>\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\" appearance=\"outline\">\r\n        <mat-label>Email Address</mat-label>\r\n        <input matInput [value]=\"presentorDetails?.username\" disabled>\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\" appearance=\"outline\">\r\n        <mat-label>Telephone Number</mat-label>\r\n        <input matInput [value]=\"presentorDetails?.company?.companyTelephoneNo\" disabled>\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\" appearance=\"outline\">\r\n        <mat-label>Alternate Telephone Number</mat-label>\r\n        <input matInput [value]=\"presentorDetails?.company?.companyTelephoneNo2\" disabled>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- MATERIAL INFO -->\r\n<div class=\"row fields\">\r\n  <h4>\r\n    <i class=\"material-icons\">preview</i> &nbsp;<b>MATERIAL INFORMATION</b>\r\n    <hr>\r\n  </h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" appearance=\"outline\">\r\n      <mat-label>Ad Title</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.adTitle\" disabled>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\"><br></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\" appearance=\"outline\">\r\n      <mat-label>Reference Code of Previously-Approved Material</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.previousRefCode\" disabled>\r\n    </div>\r\n    <div class=\"col-md-6\" appearance=\"outline\">\r\n      <mat-label>Tag line</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.tagLine\" disabled>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"previewS1Application?.refTypeOfMedium\">\r\n    <div class=\"col-md-6\" appearance=\"outline\">\r\n      <mat-label>Media Type</mat-label>\r\n      <input matInput [value]=\"previewS1Application?.refTypeOfMedium\" disabled>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"><br></div>\r\n  <div class=\"row\" *ngIf=\"applicationSingleMedia\">\r\n    <div class=\"col-md-3\" appearance=\"outline\"\r\n      *ngIf=\"applicationSingleMedia?.mediumExecution?.typeOfMedium?.description\">\r\n      <mat-label>Type of Medium</mat-label>\r\n      <input matInput [value]=\"applicationSingleMedia?.mediumExecution?.typeOfMedium?.description\" disabled>\r\n    </div>\r\n    <div class=\"col-md-3\" appearance=\"outline\" *ngIf=\"applicationSingleMedia?.mediumExecution\">\r\n      <mat-label>Execution</mat-label>\r\n      <input matInput [value]=\"applicationSingleMedia?.mediumExecution?.typeOfExecution?.typeOfExecution\" disabled>\r\n    </div>\r\n    <div class=\"col-md-3\" appearance=\"outline\" *ngIf=\"applicationSingleMedia?.dialect\">\r\n      <mat-label>Language/Dialect</mat-label>\r\n      <input matInput [value]=\"applicationSingleMedia?.dialect?.dialect\" disabled>\r\n    </div>\r\n    <div class=\"col-md-3\" appearance=\"outline\" *ngIf=\"applicationSingleMedia?.others\">\r\n      <mat-label>Others</mat-label>\r\n      <input matInput [value]=\"applicationSingleMedia?.others\" disabled>\r\n    </div>\r\n    <div class=\"col-md-3\" appearance=\"outline\" *ngIf=\"applicationSingleMedia?.sizeLength\">\r\n      <mat-label>Size Length</mat-label>\r\n      <input matInput [value]=\"applicationSingleMedia?.sizeLength\" disabled>\r\n    </div>\r\n    <div class=\"col-md-3\" appearance=\"outline\" *ngIf=\"applicationSingleMedia?.width\">\r\n      <mat-label>Width</mat-label>\r\n      <input matInput [value]=\"applicationSingleMedia?.width\" disabled>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Displaying Multimedia List -->\r\n  <div class=\"row\" *ngIf=\"multimediaDTO\">\r\n    <table class=\"mx-3 mb-3\">\r\n      <ng-container *ngIf=\"previewS1Application?.refTypeOfMedium === 'MULTIMEDIA-STATIC'\">\r\n        <ng-container *ngFor=\"let i of multimediaDTO.applicationMultimediaStaticList\">\r\n          <tr *ngIf=\"i?.hasSelected\" style=\"height: 30px;\">\r\n            <td class=\"col-md-4\">\r\n              <mat-checkbox [checked]=\"i?.hasSelected\" disabled>\r\n                {{i?.multimediaStaticMedium | uppercase}}\r\n              </mat-checkbox>\r\n            </td>\r\n            <td class=\"col-md-1\" \r\n              *ngIf=\"previewS1Application?.refTypeOfMedium === 'MULTIMEDIA-STATIC' && i?.multimediaStaticMedium !== 'digital static'\">\r\n              Size\r\n            </td>\r\n            <td class=\"col-md-2\">\r\n              <input matInput \r\n                *ngIf=\"previewS1Application?.refTypeOfMedium === 'MULTIMEDIA-STATIC' && i?.multimediaStaticMedium !== 'digital static'\" \r\n                [value]=\"i?.sizeLength\" disabled>\r\n            </td>\r\n            <td class=\"col-md-5\"></td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"previewS1Application?.refTypeOfMedium === 'MULTIMEDIA-MOVING'\">\r\n        <ng-container *ngFor=\"let i of multimediaDTO.applicationMultimediaMovingList\" style=\"height: 30px;\">\r\n          <tr *ngIf=\"i?.hasSelected\">\r\n            <td class=\"col-md-4\">\r\n              <mat-checkbox [checked]=\"true\" disabled>\r\n                {{i?.multimediaMovingMedium | uppercase}}\r\n              </mat-checkbox>\r\n            </td>\r\n            <td class=\"col-md-1\" *ngIf=\"previewS1Application?.refTypeOfMedium === 'MULTIMEDIA-MOVING'\">Length</td>\r\n            <td class=\"col-md-2\">\r\n              <input matInput *ngIf=\"previewS1Application?.refTypeOfMedium === 'MULTIMEDIA-MOVING'\" [value]=\"multimediaDTO?.sizeLength\" disabled>\r\n            </td>\r\n            <td class=\"col-md-5\"></td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-container>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "lL+D":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-payment/add-payment-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: AddPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentRoutingModule", function() { return AddPaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-payment.component */ "N5VM");




const routes = [
    {
        path: '',
        component: _add_payment_component__WEBPACK_IMPORTED_MODULE_3__["AddPaymentComponent"]
    }
];
let AddPaymentRoutingModule = class AddPaymentRoutingModule {
};
AddPaymentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddPaymentRoutingModule);



/***/ })

}]);
//# sourceMappingURL=default~add-payment-add-payment-module~applications-applications-module-es2015.js.map