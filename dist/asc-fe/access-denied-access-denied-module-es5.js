(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"], {
    /***/
    "ahAP":
    /*!**************************************************************!*\
      !*** ./src/app/shared/access-denied/access-denied.module.ts ***!
      \**************************************************************/

    /*! exports provided: AccessDeniedModule */

    /***/
    function ahAP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function () {
        return AccessDeniedModule;
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


      var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./access-denied-routing.module */
      "o080");
      /* harmony import */


      var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./access-denied.component */
      "zV6t");
      /* harmony import */


      var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/angular-material.module */
      "ZN+y");

      var AccessDeniedModule = /*@__PURE__*/function () {
        var AccessDeniedModule = /*#__PURE__*/_createClass(function AccessDeniedModule() {
          _classCallCheck(this, AccessDeniedModule);
        });

        AccessDeniedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AccessDeniedModule
        });
        AccessDeniedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AccessDeniedModule_Factory(t) {
            return new (t || AccessDeniedModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"], _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]]
        });
        return AccessDeniedModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AccessDeniedModule, {
          declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"], _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "o080":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/access-denied/access-denied-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: AccessDeniedRoutingModule */

    /***/
    function o080(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function () {
        return AccessDeniedRoutingModule;
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


      var _access_denied_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./access-denied.component */
      "zV6t");

      var routes = [{
        path: '',
        component: _access_denied_component__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedComponent"]
      }];

      var AccessDeniedRoutingModule = /*@__PURE__*/function () {
        var AccessDeniedRoutingModule = /*#__PURE__*/_createClass(function AccessDeniedRoutingModule() {
          _classCallCheck(this, AccessDeniedRoutingModule);
        });

        AccessDeniedRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AccessDeniedRoutingModule
        });
        AccessDeniedRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AccessDeniedRoutingModule_Factory(t) {
            return new (t || AccessDeniedRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AccessDeniedRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AccessDeniedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=access-denied-access-denied-module-es5.js.map