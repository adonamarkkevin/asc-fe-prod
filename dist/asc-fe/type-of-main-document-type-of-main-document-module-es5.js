(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-main-document-type-of-main-document-module"], {
    /***/
    "+gQL":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-main-document/type-of-main-document-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: TypeOfMainDocumentRoutingModule */

    /***/
    function gQL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMainDocumentRoutingModule", function () {
        return TypeOfMainDocumentRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _type_of_main_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./type-of-main-document.component */
      "rJNo");

      var routes = [{
        path: '',
        component: _type_of_main_document_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfMainDocumentComponent"]
      }];

      var TypeOfMainDocumentRoutingModule = /*#__PURE__*/_createClass(function TypeOfMainDocumentRoutingModule() {
        _classCallCheck(this, TypeOfMainDocumentRoutingModule);
      });

      TypeOfMainDocumentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TypeOfMainDocumentRoutingModule);
      /***/
    },

    /***/
    "EjMv":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-main-document/type-of-main-document.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TypeOfMainDocumentModule */

    /***/
    function EjMv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMainDocumentModule", function () {
        return TypeOfMainDocumentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _type_of_main_document_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./type-of-main-document-routing.module */
      "+gQL");
      /* harmony import */


      var _type_of_main_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./type-of-main-document.component */
      "rJNo");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TypeOfMainDocumentModule = /*#__PURE__*/_createClass(function TypeOfMainDocumentModule() {
        _classCallCheck(this, TypeOfMainDocumentModule);
      });

      TypeOfMainDocumentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_of_main_document_component__WEBPACK_IMPORTED_MODULE_4__["TypeOfMainDocumentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _type_of_main_document_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeOfMainDocumentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"]]
      })], TypeOfMainDocumentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=type-of-main-document-type-of-main-document-module-es5.js.map