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


      var _special_applications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./special-applications-routing.module */
      "Golh");
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


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _modal_special_applications_modal_special_applications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modal-special-applications/modal-special-applications.component */
      "Sedh");

      var SpecialApplicationsModule = /*#__PURE__*/_createClass(function SpecialApplicationsModule() {
        _classCallCheck(this, SpecialApplicationsModule);
      });

      SpecialApplicationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modal_special_applications_modal_special_applications_component__WEBPACK_IMPORTED_MODULE_8__["ModalSpecialApplicationsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _special_applications_routing_module__WEBPACK_IMPORTED_MODULE_3__["SpecialApplicationsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]]
      })], SpecialApplicationsModule);
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


      var _special_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./special-applications.component */
      "/s5X");

      var routes = [{
        path: '',
        component: _special_applications_component__WEBPACK_IMPORTED_MODULE_3__["SpecialApplicationsComponent"]
      }];

      var SpecialApplicationsRoutingModule = /*#__PURE__*/_createClass(function SpecialApplicationsRoutingModule() {
        _classCallCheck(this, SpecialApplicationsRoutingModule);
      });

      SpecialApplicationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SpecialApplicationsRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=schedule-of-fees-special-applications-special-applications-module-es5.js.map