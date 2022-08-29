(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-company-add-company-module"],{

/***/ "H6Pz":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pages/company/add-company/add-company-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddCompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyRoutingModule", function() { return AddCompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-company.component */ "9hFf");





const routes = [
    {
        path: '',
        component: _add_company_component__WEBPACK_IMPORTED_MODULE_2__["AddCompanyComponent"]
    }
];
let AddCompanyRoutingModule = /*@__PURE__*/ (() => {
    class AddCompanyRoutingModule {
    }
    AddCompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddCompanyRoutingModule });
    AddCompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddCompanyRoutingModule_Factory(t) { return new (t || AddCompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AddCompanyRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "mXdJ":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/company/add-company/add-company.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyModule", function() { return AddCompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-company-routing.module */ "H6Pz");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _add_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-company.component */ "9hFf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let AddCompanyModule = /*@__PURE__*/ (() => {
    class AddCompanyModule {
    }
    AddCompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddCompanyModule });
    AddCompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddCompanyModule_Factory(t) { return new (t || AddCompanyModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            ]] });
    return AddCompanyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCompanyModule, { declarations: [_add_company_component__WEBPACK_IMPORTED_MODULE_4__["AddCompanyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=add-company-add-company-module-es2015.js.map