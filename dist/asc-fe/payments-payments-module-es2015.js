(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "/qS1":
/*!*******************************************************!*\
  !*** ./src/app/core/models/type-of-document.model.ts ***!
  \*******************************************************/
/*! exports provided: TypeOfDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function() { return TypeOfDocument; });
class TypeOfDocument {
}


/***/ }),

/***/ "0Kn2":
/*!**********************************************!*\
  !*** ./src/app/core/models/country.model.ts ***!
  \**********************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
class Country {
}


/***/ }),

/***/ "50w+":
/*!*****************************************************!*\
  !*** ./src/app/core/models/type-of-reason.model.ts ***!
  \*****************************************************/
/*! exports provided: TypeOfReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfReason", function() { return TypeOfReason; });
class TypeOfReason {
}


/***/ }),

/***/ "8Ju7":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/payments/payments.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AKki":
/*!**********************************************************!*\
  !*** ./src/app/core/models/type-of-application.model.ts ***!
  \**********************************************************/
/*! exports provided: TypeOfApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function() { return TypeOfApplication; });
class TypeOfApplication {
}


/***/ }),

/***/ "BXqP":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/payments/payments-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.component */ "R/lV");




const routes = [
    {
        path: '',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
    },
    {
        path: ':link',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
    }
];
let PaymentsRoutingModule = class PaymentsRoutingModule {
};
PaymentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentsRoutingModule);



/***/ }),

/***/ "Bmuo":
/*!*****************************************************!*\
  !*** ./src/app/core/models/s1-application.model.ts ***!
  \*****************************************************/
/*! exports provided: S1Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Application", function() { return S1Application; });
class S1Application {
}


/***/ }),

/***/ "CmCX":
/*!**********************************************!*\
  !*** ./src/app/core/models/product.model.ts ***!
  \**********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "HQqM":
/*!**********************************************!*\
  !*** ./src/app/core/models/payment.model.ts ***!
  \**********************************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony import */ var _payment_method_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-method.model */ "piSE");

class Payment {
    constructor() {
        this.paymentMethod = new _payment_method_model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"]();
        this.filedBirForm = false;
        this.filedBirForm = false;
        this.remarks = '';
    }
}


/***/ }),

/***/ "JAX2":
/*!*****************************************************!*\
  !*** ./src/app/core/models/type-of-medium.model.ts ***!
  \*****************************************************/
/*! exports provided: TypeOfMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function() { return TypeOfMedium; });
class TypeOfMedium {
}


/***/ }),

/***/ "JLH3":
/*!*************************************************************!*\
  !*** ./src/app/core/models/application-multimedia.model.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function() { return ApplicationMultimedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function() { return ApplicationMultimediaItemsDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function() { return ApplicationMultimediaMovingDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function() { return ApplicationMultimediaStaticDTO; });
class ApplicationMultimedia {
}
class ApplicationMultimediaItemsDTO {
}
class ApplicationMultimediaMovingDTO extends ApplicationMultimedia {
}
class ApplicationMultimediaStaticDTO extends ApplicationMultimedia {
}


/***/ }),

/***/ "LhRd":
/*!*****************************************************!*\
  !*** ./src/app/core/models/s2-application.model.ts ***!
  \*****************************************************/
/*! exports provided: S2Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2Application", function() { return S2Application; });
class S2Application {
}


/***/ }),

/***/ "QLCe":
/*!*****************************************************!*\
  !*** ./src/app/core/models/or-preparation.model.ts ***!
  \*****************************************************/
/*! exports provided: OrPreparation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparation", function() { return OrPreparation; });
class OrPreparation {
    setTotalAmounts(totals) {
        this.totalSales = totals.totalSales;
        this.totalAmountDue = totals.totalAmountDue;
        this.totalVat = totals.totalVat;
        this.totalWithholdingtax = totals.totalWithholdingtax;
    }
}


/***/ }),

/***/ "R/lV":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/payments/payments.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payments.component.html */ "tt9k");
/* harmony import */ var _payments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments.component.scss */ "8Ju7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");












let PaymentsComponent = class PaymentsComponent {
    constructor(router, apiService, dataStorageService, spinner, route) {
        this.router = router;
        this.apiService = apiService;
        this.dataStorageService = dataStorageService;
        this.spinner = spinner;
        this.route = route;
        this.pageSize = 10;
        this.pageNo = 0;
        this.pageSizeOptions = [10, 20, 50];
        this.currentPage = 1;
        this.paymentTotalItems = 0;
        this.paymentTypeList = [..._shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE_LIST"]];
        this.paymentList = [];
        this.paymentType = _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE_LIST"][0];
        this.paymentStatusList = _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_STATUS_LIST"];
        this.paymentStatus = "FOR_APPROVAL";
        this.linkExtension = "";
    }
    ngOnInit() {
        this.linkExtension = this.route.snapshot.paramMap.get("link");
        if (this.linkExtension === "schedule-of-fees-individual") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL)[0];
        }
        else if (this.linkExtension === "schedule-of-fees-multiple") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE)[0];
        }
        else if (this.linkExtension === "schedule-of-fees-special") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL)[0];
        }
        else if (this.linkExtension === "delinquent-companies") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].DELINQUENT)[0];
        }
        else if (this.linkExtension === "brand-penalties") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS)[0];
        }
        else if (this.linkExtension === "company-penalties") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY)[0];
        }
        else if (this.linkExtension === "accounts-receivable") {
            this.paymentType = this.paymentTypeList.filter((filteredList) => filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE)[0];
        }
        this.getPaymentList(this.paymentStatus);
    }
    printRefCode(element) {
        if (element.referenceCode) {
            return element.referenceCode;
        }
        else if (element.referenceCodeRejected) {
            return element.referenceCodeRejected;
        }
    }
    getByPaymentStatusList(paymentStatus) {
        this.pageNo = 0;
        this.getPaymentList(paymentStatus);
    }
    getPaymentList(paymentStatus) {
        let param = "";
        if (paymentStatus !== "ALL") {
            param = "&paymentStatus=" + paymentStatus;
        }
        this.currentPage = this.pageNo;
        this.currentPage++;
        if (this.currentPage === 0)
            this.currentPage++;
        this.spinner.show();
        let endpoint = "";
        if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "schedule-of-fees-individual",
            ]);
            this.displayedColumns = [
                "referenceCode",
                "typeOfApplication",
                "brand",
                "typeOfMedium",
                "companyName",
                "paymentStatus",
            ];
            //
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMonitoring +
                    `?page=${this.currentPage}&size=${this.pageSize}` +
                    param;
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "schedule-of-fees-multiple",
            ]);
            this.displayedColumns = [
                "adTitle",
                "typeOfApplication",
                "brand",
                "product",
                "company",
                "paymentStatus",
            ];
            //
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMultipleMonitoring +
                    `?page=${this.currentPage}&size=${this.pageSize}` +
                    param;
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "schedule-of-fees-special",
            ]);
            this.displayedColumns = [
                "referenceCode",
                "typeOfApplication",
                "brand",
                "typeOfMedium",
                "companyName",
                "paymentStatus",
            ];
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesSpecialMonitoring +
                    `?page=${this.currentPage}&size=${this.pageSize}` +
                    param;
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].DELINQUENT) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "delinquent-companies",
            ]);
            this.displayedColumns = [
                // 'referenceCode',
                "company",
                "membersAffiliation",
                "companyTelephoneNo",
                "amount",
            ];
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].delinquentApplications +
                    `?hasDelinquentAppForm=true&page=${this.currentPage}&size=${this.pageSize}`;
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "brand-penalties",
            ]);
            this.displayedColumns = [
                "referenceCode",
                "brand",
                "penaltyDate",
                "amount",
                "paymentMethod",
                "paidDate",
                "paymentStatus",
            ];
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].penalizedBrandMonitoring +
                    `?page=${this.currentPage}&size=${this.pageSize}` + (param === null || param === void 0 ? void 0 : param.replace("paymentStatus", "status"));
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "company-penalties",
            ]);
            // endpoint = ENDPOINTS.penalizedCompanyMonitoring;
            this.displayedColumns = [
                "referenceCode",
                "company",
                "penaltyDate",
                "amount",
                "paymentStatus",
            ];
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].companyPenalties +
                    `/custom/search?page=${this.currentPage}&size=${this.pageSize}` +
                    param;
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
            this.router.navigate([
                "asc/page/accounting/payments/",
                "accounts-receivable",
            ]);
            this.displayedColumns = [
                "referenceCode",
                "typeOfApplication",
                "brand",
                "typeOfMedium",
                "companyName",
                "paymentStatus",
            ];
            endpoint =
                _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMonitoring +
                    `?hasPromissoryNote=true&page=${this.currentPage}&size=${this.pageSize}` +
                    param;
        }
        console.log(endpoint);
        this.apiService.findAll(endpoint).subscribe((res) => {
            if (res.data) {
                this.paymentList = res.data;
            }
            else if (res.responseData) {
                this.paymentList = res.responseData.data;
            }
            else if (res) {
                this.paymentList = res;
            }
            else {
                this.paymentList = [];
            }
            this.paymentTotalItems = res.totalItems;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.paymentList);
            // this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.paymentTotalItems = res.totalItems;
            this.spinner.hide();
            console.log("datasource", this.dataSource.data);
        }, (err) => {
            this.paymentList = [];
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.paymentList);
            this.spinner.hide();
        });
    }
    pageEvents(event) {
        this.pageSize = event.pageSize;
        if (event.pageIndex > this.pageNo) {
            this.pageNo++;
        }
        else {
            this.pageNo--;
        }
        if (event.pageSize > event.length) {
            this.pageNo = 0;
        }
        this.getPaymentList(this.paymentStatus);
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput
                .split(",")
                .map((str) => +str);
        }
    }
    comparePaymentType(value, selected) {
        if (value && selected) {
            return value.type === selected.type;
        }
    }
    getPaymentDetails(elm) {
        var _a, _b, _c;
        if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
            this.router.navigate([
                "asc/page/accounting/update/",
                elm.paymentStatus.toLowerCase() + "-" + elm.id,
            ]);
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
            if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                this.router.navigate([
                    "asc/page/accounting/update/",
                    `${(_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()}-${elm.id}`,
                    `multiple-${elm.id}`,
                ]);
            }
            else {
                this.router.navigate([
                    "asc/page/accounting/update/",
                    `multiple-${elm.id}`,
                ]);
            }
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
            if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                this.router.navigate([
                    "asc/page/accounting/update/",
                    `${(_b = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase()}-${elm.id}`,
                    `special-${elm.id}`,
                ]);
            }
            else {
                this.router.navigate([
                    "asc/page/accounting/update/",
                    `special-${elm.id}`,
                ]);
            }
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
            this.router.navigate([
                "asc/page/accounting/update/",
                elm.paymentStatus.toLowerCase() + "-" + elm.id,
            ]);
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].DELINQUENT) {
            const payment = new _models__WEBPACK_IMPORTED_MODULE_8__["Payment"]();
            payment.amountDue = elm.amountToSettle;
            payment.applicationForm = elm;
            payment.appFormReference = elm.appFormReference;
            payment.companyId = elm.id;
            this.dataStorageService.setPayment(payment);
            this.router.navigate([
                "asc/page/accounting/add-penalty/update/",
                "delinquent",
                elm.id,
            ]);
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
            this.router.navigate([
                "asc/page/accounting/add-penalty/update/",
                "brand",
                elm.id,
            ]);
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
            this.router.navigate([
                "asc/page/accounting/add-penalty/update/",
                "company",
                (_c = elm === null || elm === void 0 ? void 0 : elm.company) === null || _c === void 0 ? void 0 : _c.id,
            ]);
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
            this.router.navigate([
                "asc/page/accounting/update/",
                elm.paymentStatus.toLowerCase() + "-" + elm.id,
            ]);
        }
    }
    openComponent() {
        if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
            this.router.navigate(["asc/page/accounting/add-penalty", "brand"]);
        }
        else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
            this.router.navigate(["asc/page/accounting/add-penalty", "company"]);
        }
    }
};
PaymentsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
PaymentsComponent.propDecorators = {
    paginatorFalse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false },] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false },] }]
};
PaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payments",
        template: _raw_loader_payments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentsComponent);



/***/ }),

/***/ "SYHT":
/*!***************************************************!*\
  !*** ./src/app/core/models/user-account.model.ts ***!
  \***************************************************/
/*! exports provided: UserAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccount", function() { return UserAccount; });
class UserAccount {
}


/***/ }),

/***/ "WN7m":
/*!***********************************************!*\
  !*** ./src/app/core/models/asc-rate.model.ts ***!
  \***********************************************/
/*! exports provided: AscRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscRate", function() { return AscRate; });
class AscRate {
}


/***/ }),

/***/ "XLGj":
/*!***************************************************************!*\
  !*** ./src/app/core/models/application-single-media.model.ts ***!
  \***************************************************************/
/*! exports provided: ApplicationSingleMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function() { return ApplicationSingleMedia; });
class ApplicationSingleMedia {
}


/***/ }),

/***/ "aiYd":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/accounting/payments/payments.module.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments-routing.module */ "BXqP");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payments.component */ "R/lV");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");






let PaymentsModule = class PaymentsModule {
};
PaymentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_4__["PaymentsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentsRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]
        ]
    })
], PaymentsModule);



/***/ }),

/***/ "an1Z":
/*!**********************************************************!*\
  !*** ./src/app/core/models/application-request.model.ts ***!
  \**********************************************************/
/*! exports provided: ApplicationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function() { return ApplicationRequest; });
class ApplicationRequest {
}


/***/ }),

/***/ "bN3y":
/*!**********************************************!*\
  !*** ./src/app/core/models/profile.model.ts ***!
  \**********************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class Profile {
}


/***/ }),

/***/ "d215":
/*!**********************************************************!*\
  !*** ./src/app/core/models/attachment-document.model.ts ***!
  \**********************************************************/
/*! exports provided: AttachmentDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function() { return AttachmentDocument; });
class AttachmentDocument {
}


/***/ }),

/***/ "eP4w":
/*!***********************************************!*\
  !*** ./src/app/core/models/category.model.ts ***!
  \***********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "g+XZ":
/*!**********************************************************!*\
  !*** ./src/app/core/models/supporting-document.model.ts ***!
  \**********************************************************/
/*! exports provided: SupportingDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportingDocument", function() { return SupportingDocument; });
class SupportingDocument {
}


/***/ }),

/***/ "gYLz":
/*!************************************************!*\
  !*** ./src/app/core/models/user-role.model.ts ***!
  \************************************************/
/*! exports provided: UserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
class UserRole {
}


/***/ }),

/***/ "intf":
/*!***************************************************!*\
  !*** ./src/app/core/models/payment-type.model.ts ***!
  \***************************************************/
/*! exports provided: PaymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return PaymentType; });
class PaymentType {
}


/***/ }),

/***/ "jEab":
/*!***************************************************************!*\
  !*** ./src/app/core/models/or-preparation-reference.model.ts ***!
  \***************************************************************/
/*! exports provided: OrPreparationReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function() { return OrPreparationReference; });
class OrPreparationReference {
}


/***/ }),

/***/ "no/g":
/*!**********************************************************!*\
  !*** ./src/app/core/models/performance-metrics.model.ts ***!
  \**********************************************************/
/*! exports provided: PerformanceMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function() { return PerformanceMetrics; });
class PerformanceMetrics {
}


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

/***/ "sKXY":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: Affiliation, Brand, Company, PaymentType, Profile, S1Application, S2Application, TypeOfDocument, TypeOfMedium, TypeOfReason, UserRole, UserAccount, AttachmentDocument, Category, Product, TypeOfApplication, AscRate, Payment, Country, PerformanceMetrics, OrPreparation, OrPreparationReference, SupportingDocument, ApplicationSingleMedia, ApplicationRequest, ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affiliation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affiliation.model */ "vWPX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Affiliation", function() { return _affiliation_model__WEBPACK_IMPORTED_MODULE_0__["Affiliation"]; });

/* harmony import */ var _brand_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand.model */ "xlTg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return _brand_model__WEBPACK_IMPORTED_MODULE_1__["Brand"]; });

/* harmony import */ var _company_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.model */ "xpUm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return _company_model__WEBPACK_IMPORTED_MODULE_2__["Company"]; });

/* harmony import */ var _payment_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-type.model */ "intf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return _payment_type_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"]; });

/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.model */ "bN3y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _profile_model__WEBPACK_IMPORTED_MODULE_4__["Profile"]; });

/* harmony import */ var _s1_application_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./s1-application.model */ "Bmuo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S1Application", function() { return _s1_application_model__WEBPACK_IMPORTED_MODULE_5__["S1Application"]; });

/* harmony import */ var _s2_application_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./s2-application.model */ "LhRd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S2Application", function() { return _s2_application_model__WEBPACK_IMPORTED_MODULE_6__["S2Application"]; });

/* harmony import */ var _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type-of-document.model */ "/qS1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function() { return _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__["TypeOfDocument"]; });

/* harmony import */ var _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type-of-medium.model */ "JAX2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function() { return _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__["TypeOfMedium"]; });

/* harmony import */ var _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./type-of-reason.model */ "50w+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfReason", function() { return _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfReason"]; });

/* harmony import */ var _user_role_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-role.model */ "gYLz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return _user_role_model__WEBPACK_IMPORTED_MODULE_10__["UserRole"]; });

/* harmony import */ var _user_account_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-account.model */ "SYHT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAccount", function() { return _user_account_model__WEBPACK_IMPORTED_MODULE_11__["UserAccount"]; });

/* harmony import */ var _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./attachment-document.model */ "d215");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function() { return _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__["AttachmentDocument"]; });

/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category.model */ "eP4w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category_model__WEBPACK_IMPORTED_MODULE_13__["Category"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product.model */ "CmCX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product_model__WEBPACK_IMPORTED_MODULE_14__["Product"]; });

/* harmony import */ var _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./type-of-application.model */ "AKki");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function() { return _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__["TypeOfApplication"]; });

/* harmony import */ var _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./asc-rate.model */ "WN7m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AscRate", function() { return _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__["AscRate"]; });

/* harmony import */ var _payment_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment.model */ "HQqM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return _payment_model__WEBPACK_IMPORTED_MODULE_17__["Payment"]; });

/* harmony import */ var _country_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./country.model */ "0Kn2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return _country_model__WEBPACK_IMPORTED_MODULE_18__["Country"]; });

/* harmony import */ var _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./performance-metrics.model */ "no/g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function() { return _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__["PerformanceMetrics"]; });

/* harmony import */ var _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./or-preparation.model */ "QLCe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrPreparation", function() { return _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__["OrPreparation"]; });

/* harmony import */ var _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./or-preparation-reference.model */ "jEab");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function() { return _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__["OrPreparationReference"]; });

/* harmony import */ var _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./supporting-document.model */ "g+XZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportingDocument", function() { return _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__["SupportingDocument"]; });

/* harmony import */ var _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./application-single-media.model */ "XLGj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function() { return _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__["ApplicationSingleMedia"]; });

/* harmony import */ var _application_request_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./application-request.model */ "an1Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function() { return _application_request_model__WEBPACK_IMPORTED_MODULE_24__["ApplicationRequest"]; });

/* harmony import */ var _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./application-multimedia.model */ "JLH3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaItemsDTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaMovingDTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaStaticDTO"]; });





























/***/ }),

/***/ "tt9k":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/payments/payments.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>payments</mat-icon> PAYMENT LIST\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n          <mat-select [(ngModel)]=\"paymentType\" name=\"paymentType\" placeholder=\"Type of Payment\"\r\n            [compareWith]=\"comparePaymentType\">\r\n            <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" (click)=\"getByPaymentStatusList(paymentStatus)\">\r\n              {{i?.type?.replace('SPECIAL','S2 SPECIAL CLEARING')}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" [hidden]=\"paymentType?.type === 'DELINQUENT'\">\r\n          <mat-select [(ngModel)]=\"paymentStatus\" name=\"paymentStatus\">\r\n            <mat-option *ngFor=\"let i of paymentStatusList\" [value]=\"i.type\" (click)=\"getByPaymentStatusList(paymentStatus)\">\r\n              {{i?.type?.replaceAll('_', ' ')}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"openComponent()\"\r\n          *ngIf=\"paymentType?.type === 'PENALIZED BRANDS' || paymentType?.type === 'PENALIZED COMPANY' \">\r\n          <i class=\"material-icons color__white\">task_alt</i> ADD PENALTY\r\n        </button>\r\n      </div>\r\n\r\n    <div class=\"mat-elevation-z8 fields\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"referenceCode\">\r\n          <th mat-header-cell *matHeaderCellDef > REFERENCE CODE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            <!-- {{ element?.referenceCode }}\r\n            {{ element?.applicationForm?.referenceCode | uppercase }}\r\n            {{ element?.brandPenaltyAttachmentReference | uppercase }} -->\r\n            {{printRefCode(element)}}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"adTitle\">\r\n          <th mat-header-cell *matHeaderCellDef > AD TITLE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.adTitle | uppercase }}\r\n            {{ element?.multipleApplication?.adTitle | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"typeOfApplication\">\r\n          <th mat-header-cell *matHeaderCellDef > TYPE OF APPLICATION </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationType?.description | uppercase }}\r\n            {{ element?.applicationForm?.applicationType?.description | uppercase }}\r\n            {{ element?.formType?.replaceAll('_',' ') | uppercase }}\r\n            {{ element?.multipleApplication?.applicationType?.description?.replaceAll('_',' ') | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"brand\">\r\n          <th mat-header-cell *matHeaderCellDef > BRAND </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationForm?.brand?.description | uppercase }}\r\n            {{ element?.brand?.description | uppercase }}\r\n            {{ element?.multipleApplication?.brand?.description | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"product\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> PRODUCT</th>\r\n          <td mat-cell *matCellDef=\"let element; let i = index\" (click)=\"getPaymentDetails(element)\">\r\n            {{element?.product?.description | uppercase}}\r\n            {{ element?.multipleApplication?.product?.description | uppercase }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"company\">\r\n            <th mat-header-cell *matHeaderCellDef > PRESENTOR'S COMPANY NAME </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n              {{ element?.applicationOwner?.company?.companyName | uppercase }}\r\n              {{ element?.companyName | uppercase }}\r\n              {{ element?.multipleApplication?.company?.companyName | uppercase }}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"companyTelephoneNo\">\r\n          <th mat-header-cell *matHeaderCellDef > Telephone No </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.companyTelephoneNo | uppercase }}<br>\r\n            {{ element?.companyTelephoneNo2 | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"membersAffiliation\">\r\n          <th mat-header-cell *matHeaderCellDef > MEMBERS AFFILIATION </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.membersAffiliation?.description | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"penaltyDate\">\r\n          <th mat-header-cell *matHeaderCellDef > PENALTY DATE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.penaltyDate | date: 'MM/dd/yyyy' }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"amount\">\r\n          <th mat-header-cell *matHeaderCellDef > AMOUNT </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.amount }}\r\n            {{ element?.penaltyAmount }}\r\n            {{ element?.amountToSettle }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paymentMethod\">\r\n          <th mat-header-cell *matHeaderCellDef > PAYMENT METHOD </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            <!-- {{ element?.paymentMethod | uppercase }} -->\r\n            {{ element?.paymentMethod?.paymentType?.paymentDescription | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paidDate\">\r\n          <th mat-header-cell *matHeaderCellDef > PAID DATE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationForm?.paidDate | date: 'MM/dd/yyyy' }}\r\n            {{ element?.paidDate | date: 'MM/dd/yyyy' }}\r\n            {{ element?.paymentMethod?.paymentDate | date: 'MM/dd/yyyy' }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"typeOfMedium\">\r\n          <th mat-header-cell *matHeaderCellDef > TYPE OF MEDIUM </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.typeOfMedium | uppercase }}\r\n            {{ element?.applicationForm?.typeOfMedium | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"companyName\">\r\n          <th mat-header-cell *matHeaderCellDef > PRESENTOR'S COMPANY NAME </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationOwner?.company?.companyName | uppercase }}\r\n            {{ element?.applicationForm?.company?.companyName | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paymentStatus\">\r\n          <th mat-header-cell *matHeaderCellDef > PAYMENT STATUS </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.paymentStatus?.replaceAll('_',' ') | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n        No record found.\r\n      </div>\r\n      <mat-paginator [pageSize]=\"pageSize\" [pageIndex]=\"pageNo\" [length]=\"paymentTotalItems\"\r\n      [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvents($event)\">\r\n  </mat-paginator>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "vWPX":
/*!**************************************************!*\
  !*** ./src/app/core/models/affiliation.model.ts ***!
  \**************************************************/
/*! exports provided: Affiliation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Affiliation", function() { return Affiliation; });
class Affiliation {
}


/***/ }),

/***/ "xlTg":
/*!********************************************!*\
  !*** ./src/app/core/models/brand.model.ts ***!
  \********************************************/
/*! exports provided: Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
class Brand {
}


/***/ }),

/***/ "xpUm":
/*!**********************************************!*\
  !*** ./src/app/core/models/company.model.ts ***!
  \**********************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
}


/***/ })

}]);
//# sourceMappingURL=payments-payments-module-es2015.js.map