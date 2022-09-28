(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"],{

/***/ "ahAP":
/*!**************************************************************!*\
  !*** ./src/app/shared/access-denied/access-denied.module.ts ***!
  \**************************************************************/
/*! exports provided: AccessDeniedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function() { return AccessDeniedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-denied-routing.module */ "o080");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-denied.component */ "zV6t");
/* harmony import */ var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/angular-material.module */ "ZN+y");






let AccessDeniedModule = /*@__PURE__*/ (() => {
    class AccessDeniedModule {
    }
    AccessDeniedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccessDeniedModule });
    AccessDeniedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccessDeniedModule_Factory(t) { return new (t || AccessDeniedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"],
                _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]
            ]] });
    return AccessDeniedModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessDeniedModule, { declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"],
            _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]] });
})();



/***/ }),

/***/ "o080":
/*!**********************************************************************!*\
  !*** ./src/app/shared/access-denied/access-denied-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AccessDeniedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function() { return AccessDeniedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-denied.component */ "zV6t");





const routes = [
    {
        path: '',
        component: _access_denied_component__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedComponent"]
    }
];
let AccessDeniedRoutingModule = /*@__PURE__*/ (() => {
    class AccessDeniedRoutingModule {
    }
    AccessDeniedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccessDeniedRoutingModule });
    AccessDeniedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccessDeniedRoutingModule_Factory(t) { return new (t || AccessDeniedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AccessDeniedRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessDeniedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=access-denied-access-denied-module-es2015.js.map