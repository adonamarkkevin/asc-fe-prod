(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-verification-page-success-verification-page-module"], {
    /***/
    "lbkY":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/success-verification-page/success-verification-page.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: SuccessVerificationPageModule */

    /***/
    function lbkY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageModule", function () {
        return SuccessVerificationPageModule;
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


      var _success_verification_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./success-verification-page-routing.module */
      "tnkC");
      /* harmony import */


      var _success_verification_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success-verification-page.component */
      "KXg1");
      /* harmony import */


      var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/angular-material.module */
      "ZN+y");

      var SuccessVerificationPageModule = /*@__PURE__*/function () {
        var SuccessVerificationPageModule = /*#__PURE__*/_createClass(function SuccessVerificationPageModule() {
          _classCallCheck(this, SuccessVerificationPageModule);
        });

        SuccessVerificationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SuccessVerificationPageModule
        });
        SuccessVerificationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SuccessVerificationPageModule_Factory(t) {
            return new (t || SuccessVerificationPageModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _success_verification_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageRoutingModule"], _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]]
        });
        return SuccessVerificationPageModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuccessVerificationPageModule, {
          declarations: [_success_verification_page_component__WEBPACK_IMPORTED_MODULE_3__["SuccessVerificationPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _success_verification_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageRoutingModule"], _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "tnkC":
    /*!**********************************************************************************************!*\
      !*** ./src/app/shared/success-verification-page/success-verification-page-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: SuccessVerificationPageRoutingModule */

    /***/
    function tnkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageRoutingModule", function () {
        return SuccessVerificationPageRoutingModule;
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


      var _success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./success-verification-page.component */
      "KXg1");

      var routes = [{
        path: 'verification-code/:id',
        component: _success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageComponent"]
      }];

      var SuccessVerificationPageRoutingModule = /*@__PURE__*/function () {
        var SuccessVerificationPageRoutingModule = /*#__PURE__*/_createClass(function SuccessVerificationPageRoutingModule() {
          _classCallCheck(this, SuccessVerificationPageRoutingModule);
        });

        SuccessVerificationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SuccessVerificationPageRoutingModule
        });
        SuccessVerificationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SuccessVerificationPageRoutingModule_Factory(t) {
            return new (t || SuccessVerificationPageRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return SuccessVerificationPageRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuccessVerificationPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=success-verification-page-success-verification-page-module-es5.js.map