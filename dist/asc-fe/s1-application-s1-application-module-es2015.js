(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s1-application-s1-application-module"],{

/***/ "4JiT":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s1-application/s1-application-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: S1ApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1ApplicationRoutingModule", function() { return S1ApplicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");





const routes = [
    {
        path: '',
        children: [
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s1-application-list-s1-application-module */ "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null, /*! ./list-s1-application/list-s1-application.module */ "Em3A"))
                    .then(m => m.ListS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_MULTIPLE_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s1-application-list-s1-application-module */ "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null, /*! ./list-s1-application/list-s1-application.module */ "Em3A"))
                    .then(m => m.ListS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_SPECIAL_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s1-application-list-s1-application-module */ "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null, /*! ./list-s1-application/list-s1-application.module */ "Em3A"))
                    .then(m => m.ListS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_ASSIGNED_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s1-application-list-s1-application-module */ "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null, /*! ./list-s1-application/list-s1-application.module */ "Em3A"))
                    .then(m => m.ListS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_FOR_RELEASE_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s1-application-list-s1-application-module */ "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null, /*! ./list-s1-application/list-s1-application.module */ "Em3A"))
                    .then(m => m.ListS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].RELEASED_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | list-s1-application-list-s1-application-module */ "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null, /*! ./list-s1-application/list-s1-application.module */ "Em3A"))
                    .then(m => m.ListS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ADD_APPLICATION,
                loadChildren: () => __webpack_require__.e(/*! import() | add-s1-application-add-s1-application-module */ "add-s1-application-add-s1-application-module").then(__webpack_require__.bind(null, /*! ./add-s1-application/add-s1-application.module */ "Zikp"))
                    .then(m => m.AddS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].UPDATE_APPLICATION + '/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | add-s1-application-add-s1-application-module */ "add-s1-application-add-s1-application-module").then(__webpack_require__.bind(null, /*! ./add-s1-application/add-s1-application.module */ "Zikp"))
                    .then(m => m.AddS1ApplicationModule)
            },
            {
                path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ADD_MULTIPLE + '/:multipleId/:nextSequence',
                loadChildren: () => __webpack_require__.e(/*! import() | add-s1-application-add-s1-application-module */ "add-s1-application-add-s1-application-module").then(__webpack_require__.bind(null, /*! ./add-s1-application/add-s1-application.module */ "Zikp"))
                    .then(m => m.AddS1ApplicationModule)
            }
        ]
    }
];
let S1ApplicationRoutingModule = /*@__PURE__*/ (() => {
    class S1ApplicationRoutingModule {
    }
    S1ApplicationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: S1ApplicationRoutingModule });
    S1ApplicationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function S1ApplicationRoutingModule_Factory(t) { return new (t || S1ApplicationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return S1ApplicationRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](S1ApplicationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "J91h":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s1-application/s1-application.module.ts ***!
  \************************************************************************************/
/*! exports provided: S1ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1ApplicationModule", function() { return S1ApplicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _s1_application_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s1-application-routing.module */ "4JiT");
/* harmony import */ var _maintenance_brands_brands_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maintenance/brands/brands.module */ "EES/");
/* harmony import */ var _maintenance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @maintenance */ "u+D7");
/* harmony import */ var _maintenance_product_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../maintenance/product/product.module */ "px5W");







let S1ApplicationModule = /*@__PURE__*/ (() => {
    class S1ApplicationModule {
    }
    S1ApplicationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: S1ApplicationModule });
    S1ApplicationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function S1ApplicationModule_Factory(t) { return new (t || S1ApplicationModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _s1_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["S1ApplicationRoutingModule"],
                _maintenance_brands_brands_module__WEBPACK_IMPORTED_MODULE_3__["BrandsModule"],
                _maintenance_product_product_module__WEBPACK_IMPORTED_MODULE_5__["ProductModule"]
            ]] });
    return S1ApplicationModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](S1ApplicationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _s1_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["S1ApplicationRoutingModule"],
            _maintenance_brands_brands_module__WEBPACK_IMPORTED_MODULE_3__["BrandsModule"],
            _maintenance_product_product_module__WEBPACK_IMPORTED_MODULE_5__["ProductModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=s1-application-s1-application-module-es2015.js.map