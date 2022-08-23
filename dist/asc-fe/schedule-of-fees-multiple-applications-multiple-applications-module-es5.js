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


      var _multiple_applications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./multiple-applications-routing.module */
      "sovL");
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


      var _modal_multiple_applications_modal_multiple_applications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modal-multiple-applications/modal-multiple-applications.component */
      "6wJU");

      var MultipleApplicationsModule = /*#__PURE__*/_createClass(function MultipleApplicationsModule() {
        _classCallCheck(this, MultipleApplicationsModule);
      });

      MultipleApplicationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modal_multiple_applications_modal_multiple_applications_component__WEBPACK_IMPORTED_MODULE_8__["ModalMultipleApplicationsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _multiple_applications_routing_module__WEBPACK_IMPORTED_MODULE_3__["MultipleApplicationsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]]
      })], MultipleApplicationsModule);
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


      var _multiple_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./multiple-applications.component */
      "QuhR");

      var routes = [{
        path: '',
        component: _multiple_applications_component__WEBPACK_IMPORTED_MODULE_3__["MultipleApplicationsComponent"]
      }];

      var MultipleApplicationsRoutingModule = /*#__PURE__*/_createClass(function MultipleApplicationsRoutingModule() {
        _classCallCheck(this, MultipleApplicationsRoutingModule);
      });

      MultipleApplicationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MultipleApplicationsRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=schedule-of-fees-multiple-applications-multiple-applications-module-es5.js.map