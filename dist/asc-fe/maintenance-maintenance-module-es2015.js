(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-maintenance-module"],{

/***/ "3EiE":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/maintenance-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function() { return MaintenanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");





const routes = [
    {
        path: '',
        children: [
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].BRANDS,
                loadChildren: () => Promise.all(/*! import() | brands-brands-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~brands-brands-module"), __webpack_require__.e("common"), __webpack_require__.e("brands-brands-module")]).then(__webpack_require__.bind(null, /*! ./brands/brands.module */ "EES/"))
                    .then(m => m.BrandsModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_REASON,
                loadChildren: () => Promise.all(/*! import() | type-of-reason-type-of-reason-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~type-of-reason-type-of-reason-module"), __webpack_require__.e("type-of-reason-type-of-reason-module")]).then(__webpack_require__.bind(null, /*! ./type-of-reason/type-of-reason.module */ "BqXF"))
                    .then(m => m.TypeOfReasonModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_MEDIUM,
                loadChildren: () => Promise.all(/*! import() | type-of-medium-type-of-medium-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"), __webpack_require__.e("default~applications-applications-module~type-of-medium-type-of-medium-module"), __webpack_require__.e("type-of-medium-type-of-medium-module")]).then(__webpack_require__.bind(null, /*! ./type-of-medium/type-of-medium.module */ "9y7t"))
                    .then(m => m.TypeOfMediumModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].AFFILIATION,
                loadChildren: () => Promise.all(/*! import() | affiliation-affiliation-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~affiliation-affiliation-module~applications-applications-module"), __webpack_require__.e("affiliation-affiliation-module")]).then(__webpack_require__.bind(null, /*! ./affiliation/affiliation.module */ "1f37"))
                    .then(m => m.AffiliationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].PAYMENT_TYPE,
                loadChildren: () => Promise.all(/*! import() | payment-type-payment-type-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~payment-type-payment-type-module"), __webpack_require__.e("payment-type-payment-type-module")]).then(__webpack_require__.bind(null, /*! ./payment-type/payment-type.module */ "0zys"))
                    .then(m => m.PaymentTypeModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_DOCUMENT,
                loadChildren: () => Promise.all(/*! import() | type-of-document-type-of-document-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~type-of-document-type-of-document-module"), __webpack_require__.e("type-of-document-type-of-document-module")]).then(__webpack_require__.bind(null, /*! ./type-of-document/type-of-document.module */ "y+NH"))
                    .then(m => m.TypeOfDocumentModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].CATEGORY,
                loadChildren: () => Promise.all(/*! import() | category-category-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~category-category-module"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null, /*! ./category/category.module */ "BYy1"))
                    .then(m => m.CategoryModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].PRODUCT,
                loadChildren: () => Promise.all(/*! import() | product-product-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~product-product-module"), __webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null, /*! ./product/product.module */ "px5W"))
                    .then(m => m.ProductModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_APPLICATION,
                loadChildren: () => Promise.all(/*! import() | type-of-application-type-of-application-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("type-of-application-type-of-application-module")]).then(__webpack_require__.bind(null, /*! ./type-of-application/type-of-application.module */ "nRib"))
                    .then(m => m.TypeOfApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ASC_RATES,
                loadChildren: () => Promise.all(/*! import() | asc-rates-asc-rates-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~asc-rates-asc-rates-module"), __webpack_require__.e("asc-rates-asc-rates-module")]).then(__webpack_require__.bind(null, /*! ./asc-rates/asc-rates.module */ "8rVr"))
                    .then(m => m.AscRatesModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ASC_RATES_SPECIAL,
                loadChildren: () => Promise.all(/*! import() | asc-rates-special-asc-rates-special-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("asc-rates-special-asc-rates-special-module")]).then(__webpack_require__.bind(null, /*! ./asc-rates-special/asc-rates-special.module */ "D4qW"))
                    .then(m => m.AscRatesSpecialModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].HOLIDAYS,
                loadChildren: () => Promise.all(/*! import() | holiday-holiday-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("holiday-holiday-module")]).then(__webpack_require__.bind(null, /*! ./holiday/holiday.module */ "ynZ1"))
                    .then(m => m.HolidayModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].DIALECTS,
                loadChildren: () => Promise.all(/*! import() | dialect-dialect-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("dialect-dialect-module")]).then(__webpack_require__.bind(null, /*! ./dialect/dialect.module */ "eaB6"))
                    .then(m => m.DialectModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_APPLICATION,
                loadChildren: () => Promise.all(/*! import() | type-of-application-type-of-application-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("type-of-application-type-of-application-module")]).then(__webpack_require__.bind(null, /*! ./type-of-application/type-of-application.module */ "nRib"))
                    .then(m => m.TypeOfApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].SCREENER_REVIEWER_PAIRS,
                loadChildren: () => Promise.all(/*! import() | screener-reviewer-pair-screener-reviewer-pair-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("screener-reviewer-pair-screener-reviewer-pair-module")]).then(__webpack_require__.bind(null, /*! ./screener-reviewer-pair/screener-reviewer-pair.module */ "L/mX"))
                    .then(m => m.ScreenerReviewerPairModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].EMAIL_NOTIFICATION,
                loadChildren: () => Promise.all(/*! import() | email-notification-email-notification-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~email-notification-email-notification-module"), __webpack_require__.e("email-notification-email-notification-module")]).then(__webpack_require__.bind(null, /*! ./email-notification/email-notification.module */ "2Ur+"))
                    .then(m => m.EmailNotificationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_EXECUTIONS,
                loadChildren: () => Promise.all(/*! import() | type-of-medium-execution-type-of-medium-execution-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("type-of-medium-execution-type-of-medium-execution-module")]).then(__webpack_require__.bind(null, /*! ./type-of-medium-execution/type-of-medium-execution.module */ "gSGB"))
                    .then(m => m.TypeOfMediumExecutionModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_MAIN_DOCUMENTS,
                loadChildren: () => Promise.all(/*! import() | type-of-main-document-type-of-main-document-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"), __webpack_require__.e("type-of-main-document-type-of-main-document-module")]).then(__webpack_require__.bind(null, /*! ./type-of-main-document/type-of-main-document.module */ "EjMv"))
                    .then(m => m.TypeOfMainDocumentModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].DOCUMENTS_SIZE,
                loadChildren: () => Promise.all(/*! import() | type-of-main-document-type-of-main-document-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"), __webpack_require__.e("type-of-main-document-type-of-main-document-module")]).then(__webpack_require__.bind(null, /*! ./type-of-main-document/type-of-main-document.module */ "EjMv"))
                    .then(m => m.TypeOfMainDocumentModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ANNOUNCEMENT_CONTENT,
                loadChildren: () => Promise.all(/*! import() | announcement-content-announcement-content-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("announcement-content-announcement-content-module")]).then(__webpack_require__.bind(null, /*! ./announcement-content/announcement-content.module */ "jfQZ"))
                    .then(m => m.AnnouncementContentModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].S1_S2_EXPIRATION_PERIODS,
                loadChildren: () => Promise.all(/*! import() | s1-and-s2-form-expiration-period-s1-and-s2-form-expiration-period-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("s1-and-s2-form-expiration-period-s1-and-s2-form-expiration-period-module")]).then(__webpack_require__.bind(null, /*! ./s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.module */ "7Zr9"))
                    .then(m => m.S1AndS2FormExpirationPeriodModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].S1_FEES_SETTLEMENT_PERIOD,
                loadChildren: () => Promise.all(/*! import() | s1-fees-settlement-period-s1-fees-settlement-period-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("s1-fees-settlement-period-s1-fees-settlement-period-module")]).then(__webpack_require__.bind(null, /*! ./s1-fees-settlement-period/s1-fees-settlement-period.module */ "d0AD"))
                    .then(m => m.S1FeesSettlementPeriodModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].S1_INCOMPLETE_DECISION_EXPIRATION_PERIOD,
                loadChildren: () => Promise.all(/*! import() | s1-incomplete-decision-expiration-period-s1-incomplete-decision-expiration-period-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("s1-incomplete-decision-expiration-period-s1-incomplete-decision-expiration-period-module")]).then(__webpack_require__.bind(null, /*! ./s1-incomplete-decision-expiration-period/s1-incomplete-decision-expiration-period.module */ "76F+"))
                    .then(m => m.S1IncompleteDecisionExpirationPeriodModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].PROMISSORY_NOTE_PERIODS,
                loadChildren: () => Promise.all(/*! import() | promissory-note-period-promissory-note-period-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("promissory-note-period-promissory-note-period-module")]).then(__webpack_require__.bind(null, /*! ./promissory-note-period/promissory-note-period.module */ "V+jx"))
                    .then(m => m.PromissoryNotePeriodModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].QR_AND_BAR_CODE_CHECKER,
                loadChildren: () => Promise.all(/*! import() | qr-and-bar-code-checker-qr-and-bar-code-checker-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("qr-and-bar-code-checker-qr-and-bar-code-checker-module")]).then(__webpack_require__.bind(null, /*! ./qr-and-bar-code-checker/qr-and-bar-code-checker.module */ "GoHl"))
                    .then(m => m.QrAndBarCodeCheckerModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].NUMBER_OF_MULTIPLE_APPLICATION_ALLOWED,
                loadChildren: () => Promise.all(/*! import() | number-of-multiple-application-allowed-number-of-multiple-application-allowed-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("number-of-multiple-application-allowed-number-of-multiple-application-allowed-module")]).then(__webpack_require__.bind(null, /*! ./number-of-multiple-application-allowed/number-of-multiple-application-allowed.module */ "rRfx"))
                    .then(m => m.NumberOfMultipleApplicationAllowedModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].BRAND_PENALTIES,
                loadChildren: () => Promise.all(/*! import() | brand-penalties-brand-penalties-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("brand-penalties-brand-penalties-module")]).then(__webpack_require__.bind(null, /*! ./brand-penalties/brand-penalties.module */ "LSHe"))
                    .then(m => m.BrandPenaltiesModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].COMPANY_PENALTIES,
                loadChildren: () => Promise.all(/*! import() | company-penalties-company-penalties-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("company-penalties-company-penalties-module")]).then(__webpack_require__.bind(null, /*! ./company-penalties/company-penalties.module */ "uZqy"))
                    .then(m => m.CompanyPenaltiesModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].TYPE_OF_RATIONAL,
                loadChildren: () => Promise.all(/*! import() | type-of-rational-type-of-rational-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("type-of-rational-type-of-rational-module")]).then(__webpack_require__.bind(null, /*! ./type-of-rational/type-of-rational.module */ "JuHp"))
                    .then(m => m.TypeOfRationalModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].USER_ACCOUNT,
                loadChildren: () => Promise.all(/*! import() | user-account-user-account-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e")]).then(__webpack_require__.bind(null, /*! ./user-account/user-account.module */ "gaza"))
                    .then(m => m.UserAccountModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].MEDIUM_EXECUTIONS_CONTROLLER,
                loadChildren: () => Promise.all(/*! import() | medium-execution-controller-medium-execution-controller-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("medium-execution-controller-medium-execution-controller-module")]).then(__webpack_require__.bind(null, /*! ./medium-execution-controller/medium-execution-controller.module */ "cLrI"))
                    .then(m => m.MediumExecutionControllerModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LOGIN_IMAGE,
                loadChildren: () => Promise.all(/*! import() | login-images-login-images-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("login-images-login-images-module")]).then(__webpack_require__.bind(null, /*! ./login-images/login-images.module */ "98s5"))
                    .then(m => m.LoginImagesModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].WEEKLY_USER_SCHEDULE,
                loadChildren: () => Promise.all(/*! import() | weekly-user-schedule-weekly-user-schedule-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~applications-applications-module~weekly-user-schedule-weekly-user-schedule-module"), __webpack_require__.e("weekly-user-schedule-weekly-user-schedule-module")]).then(__webpack_require__.bind(null, /*! ./weekly-user-schedule/weekly-user-schedule.module */ "5h0i"))
                    .then(m => m.WeeklyUserScheduleModule)
            }
        ]
    }
];
let MaintenanceRoutingModule = /*@__PURE__*/ (() => {
    class MaintenanceRoutingModule {
    }
    MaintenanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaintenanceRoutingModule });
    MaintenanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaintenanceRoutingModule_Factory(t) { return new (t || MaintenanceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MaintenanceRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaintenanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "Ilh0":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/maintenance.module.ts ***!
  \*****************************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-routing.module */ "3EiE");




let MaintenanceModule = /*@__PURE__*/ (() => {
    class MaintenanceModule {
    }
    MaintenanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaintenanceModule });
    MaintenanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaintenanceModule_Factory(t) { return new (t || MaintenanceModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRoutingModule"]
            ]] });
    return MaintenanceModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaintenanceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRoutingModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=maintenance-maintenance-module-es2015.js.map