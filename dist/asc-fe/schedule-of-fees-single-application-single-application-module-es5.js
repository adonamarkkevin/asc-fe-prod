(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-of-fees-single-application-single-application-module"], {
    /***/
    "DgKL":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/single-application/single-application-routing.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: SingleApplicationRoutingModule */

    /***/
    function DgKL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleApplicationRoutingModule", function () {
        return SingleApplicationRoutingModule;
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


      var _single_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-application.component */
      "QAEE");

      var routes = [{
        path: '',
        component: _single_application_component__WEBPACK_IMPORTED_MODULE_2__["SingleApplicationComponent"]
      }];

      var SingleApplicationRoutingModule = /*@__PURE__*/function () {
        var SingleApplicationRoutingModule = /*#__PURE__*/_createClass(function SingleApplicationRoutingModule() {
          _classCallCheck(this, SingleApplicationRoutingModule);
        });

        SingleApplicationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SingleApplicationRoutingModule
        });
        SingleApplicationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SingleApplicationRoutingModule_Factory(t) {
            return new (t || SingleApplicationRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return SingleApplicationRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleApplicationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "T30m":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/single-application/single-application.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: SingleApplicationModule */

    /***/
    function T30m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleApplicationModule", function () {
        return SingleApplicationModule;
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


      var _single_application_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-application-routing.module */
      "DgKL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _modal_single_application_modal_single_application_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal-single-application/modal-single-application.component */
      "RiBP");

      var SingleApplicationModule = /*@__PURE__*/function () {
        var SingleApplicationModule = /*#__PURE__*/_createClass(function SingleApplicationModule() {
          _classCallCheck(this, SingleApplicationModule);
        });

        SingleApplicationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SingleApplicationModule
        });
        SingleApplicationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SingleApplicationModule_Factory(t) {
            return new (t || SingleApplicationModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _single_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["SingleApplicationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]]
        });
        return SingleApplicationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleApplicationModule, {
          declarations: [_modal_single_application_modal_single_application_component__WEBPACK_IMPORTED_MODULE_7__["ModalSingleApplicationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _single_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["SingleApplicationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=schedule-of-fees-single-application-single-application-module-es5.js.map