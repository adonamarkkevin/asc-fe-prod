(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "Fy8O":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pages/company/company-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");





const routes = [
    {
        path: '',
        children: [
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_COMPANY,
                loadChildren: () => Promise.all(/*! import() | list-company-list-company-module */[__webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("list-company-list-company-module")]).then(__webpack_require__.bind(null, /*! ./list-company/list-company.module */ "lsCb"))
                    .then(m => m.ListCompanyModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ADD_COMPANY,
                loadChildren: () => Promise.all(/*! import() | add-company-add-company-module */[__webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("add-company-add-company-module")]).then(__webpack_require__.bind(null, /*! ./add-company/add-company.module */ "mXdJ"))
                    .then(m => m.AddCompanyModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].UPDATE_COMPANY + '/:id',
                loadChildren: () => Promise.all(/*! import() | add-company-add-company-module */[__webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("add-company-add-company-module")]).then(__webpack_require__.bind(null, /*! ./add-company/add-company.module */ "mXdJ"))
                    .then(m => m.AddCompanyModule)
            }
        ]
    }
];
let CompanyRoutingModule = /*@__PURE__*/ (() => {
    class CompanyRoutingModule {
    }
    CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
    CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CompanyRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "vKeY":
/*!*********************************************************!*\
  !*** ./src/app/modules/pages/company/company.module.ts ***!
  \*********************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-routing.module */ "Fy8O");




;
let CompanyModule = /*@__PURE__*/ (() => {
    class CompanyModule {
    }
    CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyModule });
    CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
            ]] });
    return CompanyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=company-company-module-es2015.js.map