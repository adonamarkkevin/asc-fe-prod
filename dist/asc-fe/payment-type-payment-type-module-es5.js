(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-type-payment-type-module"], {
    /***/
    "0zys":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/payment-type/payment-type.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: PaymentTypeModule */

    /***/
    function zys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentTypeModule", function () {
        return PaymentTypeModule;
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


      var _payment_type_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-type-routing.module */
      "3Zc0");
      /* harmony import */


      var _payment_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./payment-type.component */
      "PE+p");
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


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var PaymentTypeModule = /*#__PURE__*/_createClass(function PaymentTypeModule() {
        _classCallCheck(this, PaymentTypeModule);
      });

      PaymentTypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payment_type_component__WEBPACK_IMPORTED_MODULE_4__["PaymentTypeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _payment_type_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentTypeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], PaymentTypeModule);
      /***/
    },

    /***/
    "3Zc0":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/payment-type/payment-type-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: PaymentTypeRoutingModule */

    /***/
    function Zc0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentTypeRoutingModule", function () {
        return PaymentTypeRoutingModule;
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


      var _payment_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-type.component */
      "PE+p");

      var routes = [{
        path: '',
        component: _payment_type_component__WEBPACK_IMPORTED_MODULE_3__["PaymentTypeComponent"]
      }];

      var PaymentTypeRoutingModule = /*#__PURE__*/_createClass(function PaymentTypeRoutingModule() {
        _classCallCheck(this, PaymentTypeRoutingModule);
      });

      PaymentTypeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentTypeRoutingModule);
      /***/
    },

    /***/
    "3swC":
    /*!********************************************!*\
      !*** ./src/app/modules/fragments/index.ts ***!
      \********************************************/

    /*! exports provided: FormActionButtonsComponent, FormListComponent */

    /***/
    function swC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function () {
        return _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__["FormActionButtonsComponent"];
      });
      /* harmony import */


      var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-list/form-list.component */
      "DeKZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FormListComponent", function () {
        return _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__["FormListComponent"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=payment-type-payment-type-module-es5.js.map