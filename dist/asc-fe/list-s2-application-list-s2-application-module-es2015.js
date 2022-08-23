(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-s2-application-list-s2-application-module"],{

/***/ "INgm":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s2-application/list-s2-application/list-s2-application.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ListS2ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListS2ApplicationModule", function() { return ListS2ApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_s2_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-s2-application-routing.module */ "Xo6A");
/* harmony import */ var _list_s2_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-s2-application.component */ "mp9u");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");








let ListS2ApplicationModule = class ListS2ApplicationModule {
};
ListS2ApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_s2_application_component__WEBPACK_IMPORTED_MODULE_4__["ListS2ApplicationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _list_s2_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListS2ApplicationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
        ]
    })
], ListS2ApplicationModule);



/***/ }),

/***/ "Xo6A":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s2-application/list-s2-application/list-s2-application-routing.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ListS2ApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListS2ApplicationRoutingModule", function() { return ListS2ApplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_s2_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-s2-application.component */ "mp9u");




const routes = [
    {
        path: '',
        component: _list_s2_application_component__WEBPACK_IMPORTED_MODULE_3__["ListS2ApplicationComponent"]
    }
];
let ListS2ApplicationRoutingModule = class ListS2ApplicationRoutingModule {
};
ListS2ApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ListS2ApplicationRoutingModule);



/***/ })

}]);
//# sourceMappingURL=list-s2-application-list-s2-application-module-es2015.js.map