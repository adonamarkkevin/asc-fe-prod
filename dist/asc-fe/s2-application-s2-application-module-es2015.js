(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s2-application-s2-application-module"],{

/***/ "A0SB":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s2-application/s2-application.module.ts ***!
  \************************************************************************************/
/*! exports provided: S2ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2ApplicationModule", function() { return S2ApplicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _s2_application_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s2-application-routing.module */ "qegO");




let S2ApplicationModule = /*@__PURE__*/ (() => {
    class S2ApplicationModule {
    }
    S2ApplicationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: S2ApplicationModule });
    S2ApplicationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function S2ApplicationModule_Factory(t) { return new (t || S2ApplicationModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _s2_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["S2ApplicationRoutingModule"]
            ]] });
    return S2ApplicationModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](S2ApplicationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _s2_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["S2ApplicationRoutingModule"]] });
})();



/***/ }),

/***/ "qegO":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s2-application/s2-application-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: S2ApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2ApplicationRoutingModule", function() { return S2ApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");





const routes = [
    {
        path: '',
        children: [
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s2-application-list-s2-application-module */ "list-s2-application-list-s2-application-module").then(__webpack_require__.bind(null, /*! ./list-s2-application/list-s2-application.module */ "INgm"))
                    .then(m => m.ListS2ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_SPECIAL_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s2-application-list-s2-application-module */ "list-s2-application-list-s2-application-module").then(__webpack_require__.bind(null, /*! ./list-s2-application/list-s2-application.module */ "INgm"))
                    .then(m => m.ListS2ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ADD_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | add-s2-application-add-s2-application-module */ "add-s2-application-add-s2-application-module").then(__webpack_require__.bind(null, /*! ./add-s2-application/add-s2-application.module */ "ZZAo"))
                    .then(m => m.AddS2ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].UPDATE_APPLICATION + '/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | add-s2-application-add-s2-application-module */ "add-s2-application-add-s2-application-module").then(__webpack_require__.bind(null, /*! ./add-s2-application/add-s2-application.module */ "ZZAo"))
                    .then(m => m.AddS2ApplicationModule)
            }
        ]
    }
];
let S2ApplicationRoutingModule = /*@__PURE__*/ (() => {
    class S2ApplicationRoutingModule {
    }
    S2ApplicationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: S2ApplicationRoutingModule });
    S2ApplicationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function S2ApplicationRoutingModule_Factory(t) { return new (t || S2ApplicationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return S2ApplicationRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](S2ApplicationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=s2-application-s2-application-module-es2015.js.map