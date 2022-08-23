(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-of-fees-single-application-single-application-module"],{

/***/ "DgKL":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/schedule-of-fees/single-application/single-application-routing.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SingleApplicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleApplicationRoutingModule", function() { return SingleApplicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _single_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-application.component */ "QAEE");




const routes = [
    {
        path: '',
        component: _single_application_component__WEBPACK_IMPORTED_MODULE_3__["SingleApplicationComponent"]
    }
];
let SingleApplicationRoutingModule = class SingleApplicationRoutingModule {
};
SingleApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SingleApplicationRoutingModule);



/***/ }),

/***/ "T30m":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/pages/applications/schedule-of-fees/single-application/single-application.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SingleApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleApplicationModule", function() { return SingleApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _single_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-application-routing.module */ "DgKL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _modal_single_application_modal_single_application_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-single-application/modal-single-application.component */ "RiBP");









let SingleApplicationModule = class SingleApplicationModule {
};
SingleApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modal_single_application_modal_single_application_component__WEBPACK_IMPORTED_MODULE_8__["ModalSingleApplicationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _single_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["SingleApplicationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
        ]
    })
], SingleApplicationModule);



/***/ })

}]);
//# sourceMappingURL=schedule-of-fees-single-application-single-application-module-es2015.js.map