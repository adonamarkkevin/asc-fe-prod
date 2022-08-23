(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-s2-application-add-s2-application-module"], {
    /***/
    "IVGw":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/s2-application/add-s2-application/add-s2-application-routing.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: AddS2ApplicationRoutingModule */

    /***/
    function IVGw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddS2ApplicationRoutingModule", function () {
        return AddS2ApplicationRoutingModule;
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


      var _add_s2_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-s2-application.component */
      "aVd4");

      var routes = [{
        path: '',
        component: _add_s2_application_component__WEBPACK_IMPORTED_MODULE_3__["AddS2ApplicationComponent"]
      }];

      var AddS2ApplicationRoutingModule = /*#__PURE__*/_createClass(function AddS2ApplicationRoutingModule() {
        _classCallCheck(this, AddS2ApplicationRoutingModule);
      });

      AddS2ApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddS2ApplicationRoutingModule);
      /***/
    },

    /***/
    "ZZAo":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/s2-application/add-s2-application/add-s2-application.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: AddS2ApplicationModule */

    /***/
    function ZZAo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddS2ApplicationModule", function () {
        return AddS2ApplicationModule;
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


      var _add_s2_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-s2-application-routing.module */
      "IVGw");
      /* harmony import */


      var _add_s2_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-s2-application.component */
      "aVd4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _applications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../applications.module */
      "C7lX");

      var AddS2ApplicationModule = /*#__PURE__*/_createClass(function AddS2ApplicationModule() {
        _classCallCheck(this, AddS2ApplicationModule);
      });

      AddS2ApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_s2_application_component__WEBPACK_IMPORTED_MODULE_4__["AddS2ApplicationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_s2_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddS2ApplicationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _applications_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationsModule"]]
      })], AddS2ApplicationModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-s2-application-add-s2-application-module-es5.js.map