(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-reason-type-of-reason-module"],{

/***/ "3swC":
/*!********************************************!*\
  !*** ./src/app/modules/fragments/index.ts ***!
  \********************************************/
/*! exports provided: FormActionButtonsComponent, FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function() { return _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__["FormActionButtonsComponent"]; });

/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-list/form-list.component */ "DeKZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__["FormListComponent"]; });






/***/ }),

/***/ "BqXF":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-reason/type-of-reason.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TypeOfReasonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfReasonModule", function() { return TypeOfReasonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _type_of_reason_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-of-reason.component */ "kyg5");
/* harmony import */ var _type_of_reason_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type-of-reason-routing.module */ "p/KS");
/* harmony import */ var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../fragments/fragments.module */ "7Tf7");









let TypeOfReasonModule = /*@__PURE__*/ (() => {
    class TypeOfReasonModule {
    }
    TypeOfReasonModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: TypeOfReasonModule });
    TypeOfReasonModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function TypeOfReasonModule_Factory(t) { return new (t || TypeOfReasonModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _type_of_reason_routing_module__WEBPACK_IMPORTED_MODULE_6__["TypeOfReasonRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]
            ]] });
    return TypeOfReasonModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TypeOfReasonModule, { declarations: [_type_of_reason_component__WEBPACK_IMPORTED_MODULE_5__["TypeOfReasonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _type_of_reason_routing_module__WEBPACK_IMPORTED_MODULE_6__["TypeOfReasonRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]] });
})();



/***/ }),

/***/ "p/KS":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-reason/type-of-reason-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TypeOfReasonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfReasonRoutingModule", function() { return TypeOfReasonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _type_of_reason_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-of-reason.component */ "kyg5");





const routes = [
    {
        path: '',
        component: _type_of_reason_component__WEBPACK_IMPORTED_MODULE_2__["TypeOfReasonComponent"]
    }
];
let TypeOfReasonRoutingModule = /*@__PURE__*/ (() => {
    class TypeOfReasonRoutingModule {
    }
    TypeOfReasonRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: TypeOfReasonRoutingModule });
    TypeOfReasonRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function TypeOfReasonRoutingModule_Factory(t) { return new (t || TypeOfReasonRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TypeOfReasonRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TypeOfReasonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=type-of-reason-type-of-reason-module-es2015.js.map