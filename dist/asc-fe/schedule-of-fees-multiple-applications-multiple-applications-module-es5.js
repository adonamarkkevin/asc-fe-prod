(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-of-fees-multiple-applications-multiple-applications-module"], {
    /***/
    "VOEw":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/multiple-applications/multiple-applications.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: MultipleApplicationsModule */

    /***/
    function VOEw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleApplicationsModule", function () {
        return MultipleApplicationsModule;
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


      var _multiple_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./multiple-applications-routing.module */
      "sovL");
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


      var _modal_multiple_applications_modal_multiple_applications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal-multiple-applications/modal-multiple-applications.component */
      "6wJU");

      var MultipleApplicationsModule = /*@__PURE__*/function () {
        var MultipleApplicationsModule = /*#__PURE__*/_createClass(function MultipleApplicationsModule() {
          _classCallCheck(this, MultipleApplicationsModule);
        });

        MultipleApplicationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MultipleApplicationsModule
        });
        MultipleApplicationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MultipleApplicationsModule_Factory(t) {
            return new (t || MultipleApplicationsModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _multiple_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__["MultipleApplicationsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]]
        });
        return MultipleApplicationsModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultipleApplicationsModule, {
          declarations: [_modal_multiple_applications_modal_multiple_applications_component__WEBPACK_IMPORTED_MODULE_7__["ModalMultipleApplicationsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _multiple_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__["MultipleApplicationsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]
        });
      })();
      /***/

    },

    /***/
    "sovL":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/multiple-applications/multiple-applications-routing.module.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: MultipleApplicationsRoutingModule */

    /***/
    function sovL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleApplicationsRoutingModule", function () {
        return MultipleApplicationsRoutingModule;
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


      var _multiple_applications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./multiple-applications.component */
      "QuhR");

      var routes = [{
        path: '',
        component: _multiple_applications_component__WEBPACK_IMPORTED_MODULE_2__["MultipleApplicationsComponent"]
      }];

      var MultipleApplicationsRoutingModule = /*@__PURE__*/function () {
        var MultipleApplicationsRoutingModule = /*#__PURE__*/_createClass(function MultipleApplicationsRoutingModule() {
          _classCallCheck(this, MultipleApplicationsRoutingModule);
        });

        MultipleApplicationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MultipleApplicationsRoutingModule
        });
        MultipleApplicationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MultipleApplicationsRoutingModule_Factory(t) {
            return new (t || MultipleApplicationsRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return MultipleApplicationsRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultipleApplicationsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=schedule-of-fees-multiple-applications-multiple-applications-module-es5.js.map