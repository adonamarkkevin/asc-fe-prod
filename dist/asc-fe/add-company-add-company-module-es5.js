(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-company-add-company-module"], {
    /***/
    "H6Pz":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/pages/company/add-company/add-company-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: AddCompanyRoutingModule */

    /***/
    function H6Pz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyRoutingModule", function () {
        return AddCompanyRoutingModule;
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


      var _add_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-company.component */
      "9hFf");

      var routes = [{
        path: '',
        component: _add_company_component__WEBPACK_IMPORTED_MODULE_2__["AddCompanyComponent"]
      }];

      var AddCompanyRoutingModule = /*@__PURE__*/function () {
        var AddCompanyRoutingModule = /*#__PURE__*/_createClass(function AddCompanyRoutingModule() {
          _classCallCheck(this, AddCompanyRoutingModule);
        });

        AddCompanyRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AddCompanyRoutingModule
        });
        AddCompanyRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AddCompanyRoutingModule_Factory(t) {
            return new (t || AddCompanyRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AddCompanyRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AddCompanyRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "mXdJ":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/pages/company/add-company/add-company.module.ts ***!
      \*************************************************************************/

    /*! exports provided: AddCompanyModule */

    /***/
    function mXdJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyModule", function () {
        return AddCompanyModule;
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


      var _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-company-routing.module */
      "H6Pz");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _add_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-company.component */
      "9hFf");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddCompanyModule = /*@__PURE__*/function () {
        var AddCompanyModule = /*#__PURE__*/_createClass(function AddCompanyModule() {
          _classCallCheck(this, AddCompanyModule);
        });

        AddCompanyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AddCompanyModule
        });
        AddCompanyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AddCompanyModule_Factory(t) {
            return new (t || AddCompanyModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]]]
        });
        return AddCompanyModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AddCompanyModule, {
          declarations: [_add_company_component__WEBPACK_IMPORTED_MODULE_4__["AddCompanyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_company_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=add-company-add-company-module-es5.js.map