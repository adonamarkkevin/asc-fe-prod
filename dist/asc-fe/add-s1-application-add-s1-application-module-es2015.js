(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-s1-application-add-s1-application-module"],{

/***/ "6QZU":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s1-application/add-s1-application/add-s1-application-routing.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddS1ApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddS1ApplicationRoutingModule", function() { return AddS1ApplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_s1_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-s1-application.component */ "sojo");




const routes = [
    {
        path: '',
        component: _add_s1_application_component__WEBPACK_IMPORTED_MODULE_3__["AddS1ApplicationComponent"]
    }
];
let AddS1ApplicationRoutingModule = class AddS1ApplicationRoutingModule {
};
AddS1ApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddS1ApplicationRoutingModule);



/***/ }),

/***/ "Zikp":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/s1-application/add-s1-application/add-s1-application.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddS1ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddS1ApplicationModule", function() { return AddS1ApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_s1_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-s1-application-routing.module */ "6QZU");
/* harmony import */ var _add_s1_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-s1-application.component */ "sojo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _applications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../applications.module */ "C7lX");
/* harmony import */ var _accounting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @accounting */ "Wf2x");










let AddS1ApplicationModule = class AddS1ApplicationModule {
};
AddS1ApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _add_s1_application_component__WEBPACK_IMPORTED_MODULE_4__["AddS1ApplicationComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_s1_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddS1ApplicationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _applications_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationsModule"],
            _accounting__WEBPACK_IMPORTED_MODULE_9__["AddPaymentModule"]
        ],
        exports: []
    })
], AddS1ApplicationModule);



/***/ })

}]);
//# sourceMappingURL=add-s1-application-add-s1-application-module-es2015.js.map