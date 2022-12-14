(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-medium-type-of-medium-module"], {
    /***/
    "9y7t":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-medium/type-of-medium.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: TypeOfMediumModule */

    /***/
    function y7t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMediumModule", function () {
        return TypeOfMediumModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _type_of_medium_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./type-of-medium-routing.module */
      "pg4l");
      /* harmony import */


      var _type_of_medium_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./type-of-medium.component */
      "cIBp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var TypeOfMediumModule = /*@__PURE__*/function () {
        var TypeOfMediumModule = /*#__PURE__*/_createClass(function TypeOfMediumModule() {
          _classCallCheck(this, TypeOfMediumModule);
        });

        TypeOfMediumModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: TypeOfMediumModule
        });
        TypeOfMediumModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function TypeOfMediumModule_Factory(t) {
            return new (t || TypeOfMediumModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_of_medium_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypeOfMediumRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return TypeOfMediumModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TypeOfMediumModule, {
          declarations: [_type_of_medium_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfMediumComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_of_medium_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypeOfMediumRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "pg4l":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-medium/type-of-medium-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: TypeOfMediumRoutingModule */

    /***/
    function pg4l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMediumRoutingModule", function () {
        return TypeOfMediumRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _type_of_medium_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./type-of-medium.component */
      "cIBp");

      var routes = [{
        path: '',
        component: _type_of_medium_component__WEBPACK_IMPORTED_MODULE_2__["TypeOfMediumComponent"]
      }];

      var TypeOfMediumRoutingModule = /*@__PURE__*/function () {
        var TypeOfMediumRoutingModule = /*#__PURE__*/_createClass(function TypeOfMediumRoutingModule() {
          _classCallCheck(this, TypeOfMediumRoutingModule);
        });

        TypeOfMediumRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: TypeOfMediumRoutingModule
        });
        TypeOfMediumRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function TypeOfMediumRoutingModule_Factory(t) {
            return new (t || TypeOfMediumRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return TypeOfMediumRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TypeOfMediumRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=type-of-medium-type-of-medium-module-es5.js.map