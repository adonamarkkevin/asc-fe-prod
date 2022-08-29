(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-verification-page-success-verification-page-module"],{

/***/ "lbkY":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/success-verification-page/success-verification-page.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SuccessVerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageModule", function() { return SuccessVerificationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _success_verification_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-verification-page-routing.module */ "tnkC");
/* harmony import */ var _success_verification_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success-verification-page.component */ "KXg1");
/* harmony import */ var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/angular-material.module */ "ZN+y");






let SuccessVerificationPageModule = /*@__PURE__*/ (() => {
    class SuccessVerificationPageModule {
    }
    SuccessVerificationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SuccessVerificationPageModule });
    SuccessVerificationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SuccessVerificationPageModule_Factory(t) { return new (t || SuccessVerificationPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _success_verification_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageRoutingModule"],
                _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]
            ]] });
    return SuccessVerificationPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuccessVerificationPageModule, { declarations: [_success_verification_page_component__WEBPACK_IMPORTED_MODULE_3__["SuccessVerificationPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _success_verification_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageRoutingModule"],
            _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]] });
})();



/***/ }),

/***/ "tnkC":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/success-verification-page/success-verification-page-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SuccessVerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageRoutingModule", function() { return SuccessVerificationPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-verification-page.component */ "KXg1");





const routes = [
    {
        path: 'verification-code/:id',
        component: _success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageComponent"]
    }
];
let SuccessVerificationPageRoutingModule = /*@__PURE__*/ (() => {
    class SuccessVerificationPageRoutingModule {
    }
    SuccessVerificationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SuccessVerificationPageRoutingModule });
    SuccessVerificationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SuccessVerificationPageRoutingModule_Factory(t) { return new (t || SuccessVerificationPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SuccessVerificationPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuccessVerificationPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=success-verification-page-success-verification-page-module-es2015.js.map