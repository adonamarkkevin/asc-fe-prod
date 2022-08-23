(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-pages-module"],{

/***/ "/HDY":
/*!***********************************************!*\
  !*** ./src/app/modules/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages */ "PXec");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "FRbf");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/layout/layout.module */ "pV/B");







let PagesModule = class PagesModule {
};
PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"],
            _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "FRbf":
/*!*******************************************************!*\
  !*** ./src/app/modules/pages/pages-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages */ "PXec");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");





const routes = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        children: [
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].APPLICATION,
                loadChildren: () => Promise.all(/*! import() | applications-applications-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"), __webpack_require__.e("default~applications-applications-module~email-notification-email-notification-module"), __webpack_require__.e("default~applications-applications-module~weekly-user-schedule-weekly-user-schedule-module"), __webpack_require__.e("default~add-payment-add-payment-module~applications-applications-module"), __webpack_require__.e("default~applications-applications-module~type-of-medium-type-of-medium-module"), __webpack_require__.e("default~applications-applications-module~product-product-module"), __webpack_require__.e("default~applications-applications-module~brands-brands-module"), __webpack_require__.e("default~applications-applications-module~asc-rates-asc-rates-module"), __webpack_require__.e("common"), __webpack_require__.e("applications-applications-module")]).then(__webpack_require__.bind(null, /*! ./applications/applications.module */ "C7lX"))
                    .then(m => m.ApplicationsModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].COMPANY,
                loadChildren: () => __webpack_require__.e(/*! import() | company-company-module */ "company-company-module").then(__webpack_require__.bind(null, /*! ./company/company.module */ "vKeY"))
                    .then(m => m.CompanyModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].DASHBOARD,
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "MijW"))
                    .then(m => m.DashboardModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].MAINTENANCE,
                loadChildren: () => __webpack_require__.e(/*! import() | maintenance-maintenance-module */ "maintenance-maintenance-module").then(__webpack_require__.bind(null, /*! ./maintenance/maintenance.module */ "Ilh0"))
                    .then(m => m.MaintenanceModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].ACCOUNT,
                loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "common").then(__webpack_require__.bind(null, /*! ./account/account.module */ "iUXy"))
                    .then(m => m.AccountModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].ANNOUNCEMENT,
                loadChildren: () => __webpack_require__.e(/*! import() | announcement-announcement-module */ "announcement-announcement-module").then(__webpack_require__.bind(null, /*! ./announcement/announcement.module */ "7SPu"))
                    .then(m => m.AnnouncementModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"].ACCOUNTING,
                loadChildren: () => __webpack_require__.e(/*! import() | accounting-accounting-module */ "common").then(__webpack_require__.bind(null, /*! ./accounting/accounting.module */ "tlev"))
                    .then(m => m.AccountingModule)
            },
        ]
    }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesRoutingModule);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "PXec":
/*!****************************************!*\
  !*** ./src/app/modules/pages/index.ts ***!
  \****************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ "xPeN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return _pages_component__WEBPACK_IMPORTED_MODULE_0__["PagesComponent"]; });


// moved to tsconfig.json
// export * from './account';
// export * from './applications';
// export * from './company';
// export * from './dashboard';
// export * from './landing-page';
// export * from './maintenance';


/***/ }),

/***/ "YrJv":
/*!****************************************************!*\
  !*** ./src/app/modules/pages/pages.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "xPeN":
/*!**************************************************!*\
  !*** ./src/app/modules/pages/pages.component.ts ***!
  \**************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages.component.html */ "ytvF");
/* harmony import */ var _pages_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component.scss */ "YrJv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PagesComponent = class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagesComponent.ctorParameters = () => [];
PagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pages',
        template: _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pages_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagesComponent);



/***/ }),

/***/ "ytvF":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <router-outlet></router-outlet>\r\n</app-layout>");

/***/ })

}]);
//# sourceMappingURL=modules-pages-pages-module-es2015.js.map