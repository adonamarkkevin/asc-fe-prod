(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-of-fees-special-applications-special-applications-module"], {
    /***/
    "Bysl":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/special-applications/special-applications.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: SpecialApplicationsModule */

    /***/
    function Bysl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpecialApplicationsModule", function () {
        return SpecialApplicationsModule;
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


      var _special_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./special-applications-routing.module */
      "Golh");
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


      var _modal_special_applications_modal_special_applications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal-special-applications/modal-special-applications.component */
      "Sedh");

      var SpecialApplicationsModule = /*@__PURE__*/function () {
        var SpecialApplicationsModule = /*#__PURE__*/_createClass(function SpecialApplicationsModule() {
          _classCallCheck(this, SpecialApplicationsModule);
        });

        SpecialApplicationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SpecialApplicationsModule
        });
        SpecialApplicationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SpecialApplicationsModule_Factory(t) {
            return new (t || SpecialApplicationsModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _special_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpecialApplicationsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]]
        });
        return SpecialApplicationsModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpecialApplicationsModule, {
          declarations: [_modal_special_applications_modal_special_applications_component__WEBPACK_IMPORTED_MODULE_7__["ModalSpecialApplicationsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _special_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpecialApplicationsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]
        });
      })();
      /***/

    },

    /***/
    "Golh":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/special-applications/special-applications-routing.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: SpecialApplicationsRoutingModule */

    /***/
    function Golh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpecialApplicationsRoutingModule", function () {
        return SpecialApplicationsRoutingModule;
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


      var _special_applications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./special-applications.component */
      "/s5X");

      var routes = [{
        path: '',
        component: _special_applications_component__WEBPACK_IMPORTED_MODULE_2__["SpecialApplicationsComponent"]
      }];

      var SpecialApplicationsRoutingModule = /*@__PURE__*/function () {
        var SpecialApplicationsRoutingModule = /*#__PURE__*/_createClass(function SpecialApplicationsRoutingModule() {
          _classCallCheck(this, SpecialApplicationsRoutingModule);
        });

        SpecialApplicationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SpecialApplicationsRoutingModule
        });
        SpecialApplicationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SpecialApplicationsRoutingModule_Factory(t) {
            return new (t || SpecialApplicationsRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return SpecialApplicationsRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpecialApplicationsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=schedule-of-fees-special-applications-special-applications-module-es5.js.map