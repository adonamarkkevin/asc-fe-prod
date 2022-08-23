(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-document-type-of-document-module"],{

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

/***/ "OiDA":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-document/type-of-document-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: TypeOfDocumentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocumentRoutingModule", function() { return TypeOfDocumentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _type_of_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-document.component */ "0uvy");




const routes = [
    {
        path: '',
        component: _type_of_document_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfDocumentComponent"]
    }
];
let TypeOfDocumentRoutingModule = class TypeOfDocumentRoutingModule {
};
TypeOfDocumentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TypeOfDocumentRoutingModule);



/***/ }),

/***/ "y+NH":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-document/type-of-document.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TypeOfDocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocumentModule", function() { return TypeOfDocumentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _type_of_document_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-document-routing.module */ "OiDA");
/* harmony import */ var _type_of_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type-of-document.component */ "0uvy");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../fragments/fragments.module */ "7Tf7");









let TypeOfDocumentModule = class TypeOfDocumentModule {
};
TypeOfDocumentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_of_document_component__WEBPACK_IMPORTED_MODULE_4__["TypeOfDocumentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _type_of_document_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeOfDocumentRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]
        ]
    })
], TypeOfDocumentModule);



/***/ })

}]);
//# sourceMappingURL=type-of-document-type-of-document-module-es2015.js.map