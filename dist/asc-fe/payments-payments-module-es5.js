(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"], {
    /***/
    "BXqP":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/payments/payments-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: PaymentsRoutingModule */

    /***/
    function BXqP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function () {
        return PaymentsRoutingModule;
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


      var _payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payments.component */
      "R/lV");

      var routes = [{
        path: '',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_2__["PaymentsComponent"]
      }, {
        path: ':link',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_2__["PaymentsComponent"]
      }];

      var PaymentsRoutingModule = /*@__PURE__*/function () {
        var PaymentsRoutingModule = /*#__PURE__*/_createClass(function PaymentsRoutingModule() {
          _classCallCheck(this, PaymentsRoutingModule);
        });

        PaymentsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: PaymentsRoutingModule
        });
        PaymentsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function PaymentsRoutingModule_Factory(t) {
            return new (t || PaymentsRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return PaymentsRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PaymentsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "R/lV":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/payments/payments.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PaymentsComponent */

    /***/
    function RLV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function () {
        return PaymentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function PaymentsComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_mat_option_13_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r37.getByPaymentStatusList(ctx_r37.paymentStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r36 == null ? null : i_r36.type == null ? null : i_r36.type.replace("SPECIAL", "S2 SPECIAL CLEARING"), " ");
        }
      }

      function PaymentsComponent_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_mat_option_17_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r40.getByPaymentStatusList(ctx_r40.paymentStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r39.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r39 == null ? null : i_r39.type == null ? null : i_r39.type.replaceAll("_", " "), " ");
        }
      }

      function PaymentsComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_mat_option_18_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r42.getByPaymentStatusList("PROMISSORY");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " ACCOUNTS RECEIVABLE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", "PROMISSORY");
        }
      }

      function PaymentsComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r44.openComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " ADD PENALTY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " REFERENCE CODE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_24_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var element_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r47.getPaymentDetails(element_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r5.printRefCode(element_r46), " ");
        }
      }

      function PaymentsComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " AD TITLE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_27_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

            var element_r49 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r50.getPaymentDetails(element_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, element_r49 == null ? null : element_r49.adTitle), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, element_r49 == null ? null : element_r49.multipleApplication == null ? null : element_r49.multipleApplication.adTitle), " ");
        }
      }

      function PaymentsComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " TYPE OF APPLICATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_30_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r54);

            var element_r52 = ctx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r53.getPaymentDetails(element_r52);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 4, element_r52 == null ? null : element_r52.applicationType == null ? null : element_r52.applicationType.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 6, element_r52 == null ? null : element_r52.applicationForm == null ? null : element_r52.applicationForm.applicationType == null ? null : element_r52.applicationForm.applicationType.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 8, element_r52 == null ? null : element_r52.formType == null ? null : element_r52.formType.replaceAll("_", " ")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 10, element_r52 == null ? null : element_r52.multipleApplication == null ? null : element_r52.multipleApplication.applicationType == null ? null : element_r52.multipleApplication.applicationType.description == null ? null : element_r52.multipleApplication.applicationType.description.replaceAll("_", " ")), " ");
        }
      }

      function PaymentsComponent_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " BRAND ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_33_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r57);

            var element_r55 = ctx.$implicit;

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r56.getPaymentDetails(element_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, element_r55 == null ? null : element_r55.applicationForm == null ? null : element_r55.applicationForm.brand == null ? null : element_r55.applicationForm.brand.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 5, element_r55 == null ? null : element_r55.brand == null ? null : element_r55.brand.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 7, element_r55 == null ? null : element_r55.multipleApplication == null ? null : element_r55.multipleApplication.brand == null ? null : element_r55.multipleApplication.brand.description), " ");
        }
      }

      function PaymentsComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PRODUCT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_36_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var element_r58 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r60.getPaymentDetails(element_r58);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, element_r58 == null ? null : element_r58.product == null ? null : element_r58.product.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, element_r58 == null ? null : element_r58.multipleApplication == null ? null : element_r58.multipleApplication.product == null ? null : element_r58.multipleApplication.product.description), "");
        }
      }

      function PaymentsComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PRESENTOR'S COMPANY NAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_39_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64);

            var element_r62 = ctx.$implicit;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r63.getPaymentDetails(element_r62);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, element_r62 == null ? null : element_r62.applicationOwner == null ? null : element_r62.applicationOwner.company == null ? null : element_r62.applicationOwner.company.companyName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 5, element_r62 == null ? null : element_r62.companyName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 7, element_r62 == null ? null : element_r62.multipleApplication == null ? null : element_r62.multipleApplication.company == null ? null : element_r62.multipleApplication.company.companyName), "");
        }
      }

      function PaymentsComponent_th_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Telephone No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_42_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r67);

            var element_r65 = ctx.$implicit;

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r66.getPaymentDetails(element_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, element_r65 == null ? null : element_r65.companyTelephoneNo), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 4, element_r65 == null ? null : element_r65.companyTelephoneNo2), " ");
        }
      }

      function PaymentsComponent_th_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " MEMBERS AFFILIATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_45_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r70);

            var element_r68 = ctx.$implicit;

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r69.getPaymentDetails(element_r68);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, element_r68 == null ? null : element_r68.membersAffiliation == null ? null : element_r68.membersAffiliation.description), " ");
        }
      }

      function PaymentsComponent_th_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PENALTY DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_48_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);

            var element_r71 = ctx.$implicit;

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r72.getPaymentDetails(element_r71);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, element_r71 == null ? null : element_r71.penaltyDate, "MM/dd/yyyy"), " ");
        }
      }

      function PaymentsComponent_th_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " AMOUNT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_51_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r76);

            var element_r74 = ctx.$implicit;

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r75.getPaymentDetails(element_r74);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r74 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", element_r74 == null ? null : element_r74.amount, " ", element_r74 == null ? null : element_r74.penaltyAmount, " ", element_r74 == null ? null : element_r74.amountToSettle, " ");
        }
      }

      function PaymentsComponent_th_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PAYMENT METHOD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_54_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r79);

            var element_r77 = ctx.$implicit;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r78.getPaymentDetails(element_r77);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, element_r77 == null ? null : element_r77.paymentMethod == null ? null : element_r77.paymentMethod.paymentType == null ? null : element_r77.paymentMethod.paymentType.paymentDescription), " ");
        }
      }

      function PaymentsComponent_th_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PAID DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_57_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r82);

            var element_r80 = ctx.$implicit;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r81.getPaymentDetails(element_r80);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 3, element_r80 == null ? null : element_r80.applicationForm == null ? null : element_r80.applicationForm.paidDate, "MM/dd/yyyy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](3, 6, element_r80 == null ? null : element_r80.paidDate, "MM/dd/yyyy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](4, 9, element_r80 == null ? null : element_r80.paymentMethod == null ? null : element_r80.paymentMethod.paymentDate, "MM/dd/yyyy"), " ");
        }
      }

      function PaymentsComponent_th_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " TYPE OF MEDIUM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_60_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r85);

            var element_r83 = ctx.$implicit;

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r84.getPaymentDetails(element_r83);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, element_r83 == null ? null : element_r83.typeOfMedium), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, element_r83 == null ? null : element_r83.applicationForm == null ? null : element_r83.applicationForm.typeOfMedium), " ");
        }
      }

      function PaymentsComponent_th_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PRESENTOR'S COMPANY NAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_63_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r88);

            var element_r86 = ctx.$implicit;

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r87.getPaymentDetails(element_r86);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r86 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, element_r86 == null ? null : element_r86.applicationOwner == null ? null : element_r86.applicationOwner.company == null ? null : element_r86.applicationOwner.company.companyName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, element_r86 == null ? null : element_r86.applicationForm == null ? null : element_r86.applicationForm.company == null ? null : element_r86.applicationForm.company.companyName), " ");
        }
      }

      function PaymentsComponent_th_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " PAYMENT STATUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PaymentsComponent_td_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaymentsComponent_td_66_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r91);

            var element_r89 = ctx.$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r90.getPaymentDetails(element_r89);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r89 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, element_r89 == null ? null : element_r89.paymentStatus == null ? null : element_r89.paymentStatus.replaceAll("_", " ")), " ");
        }
      }

      function PaymentsComponent_tr_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 42);
        }
      }

      function PaymentsComponent_tr_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 43);
        }
      }

      var PaymentsComponent = /*@__PURE__*/function () {
        var PaymentsComponent = /*#__PURE__*/function () {
          function PaymentsComponent(router, apiService, dataStorageService, spinner, route) {
            _classCallCheck(this, PaymentsComponent);

            this.router = router;
            this.apiService = apiService;
            this.dataStorageService = dataStorageService;
            this.spinner = spinner;
            this.route = route;
            this.pageSize = 10;
            this.pageNo = 0;
            this.pageSizeOptions = [10, 20, 50];
            this.currentPage = 1;
            this.paymentTotalItems = 0;
            this.paymentTypeList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE_LIST"]);
            this.paymentList = [];
            this.paymentType = _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE_LIST"][0];
            this.paymentStatusList = _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_STATUS_LIST"];
            this.paymentStatus = "FOR_APPROVAL";
            this.linkExtension = "";
          }

          _createClass(PaymentsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.linkExtension = this.route.snapshot.paramMap.get("link");

              if (this.linkExtension === "schedule-of-fees-individual") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL;
                })[0];
              } else if (this.linkExtension === "schedule-of-fees-multiple") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE;
                })[0];
              } else if (this.linkExtension === "schedule-of-fees-special") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL;
                })[0];
              } else if (this.linkExtension === "delinquent-companies") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].DELINQUENT;
                })[0];
              } else if (this.linkExtension === "brand-penalties") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS;
                })[0];
              } else if (this.linkExtension === "company-penalties") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY;
                })[0];
              } else if (this.linkExtension === "accounts-receivable") {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE;
                })[0];
              }

              this.getPaymentList(this.paymentStatus);
            }
          }, {
            key: "printRefCode",
            value: function printRefCode(element) {
              if (element.referenceCode) {
                return element.referenceCode;
              } else if (element.referenceCodeRejected) {
                return element.referenceCodeRejected;
              }
            }
          }, {
            key: "getByPaymentStatusList",
            value: function getByPaymentStatusList(paymentStatus) {
              this.pageNo = 0;
              this.getPaymentList(paymentStatus);
            }
          }, {
            key: "getPaymentList",
            value: function getPaymentList(paymentStatus) {
              var _this = this;

              var param = "";

              if (paymentStatus !== "ALL" && paymentStatus !== 'PROMISSORY') {
                param = "&paymentStatus=" + paymentStatus;
              } else if (paymentStatus === 'PROMISSORY') {
                param = '&hasPromissoryNote=true';
              }

              this.currentPage = this.pageNo;
              this.currentPage++;
              if (this.currentPage === 0) this.currentPage++;
              this.spinner.show();
              var endpoint = "";

              if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
                this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-individual"]);
                this.displayedColumns = ["referenceCode", "typeOfApplication", "brand", "typeOfMedium", "companyName", "paymentStatus"]; //

                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
                this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-multiple"]);
                this.displayedColumns = ["adTitle", "typeOfApplication", "brand", "product", "company", "paymentStatus"]; //

                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesMultipleMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
                this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-special"]);
                this.displayedColumns = ["referenceCode", "typeOfApplication", "brand", "typeOfMedium", "companyName", "paymentStatus"];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesSpecialMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].DELINQUENT) {
                this.router.navigate(["asc/page/accounting/payments/", "delinquent-companies"]);
                this.displayedColumns = [// 'referenceCode',
                "company", "membersAffiliation", "companyTelephoneNo", "amount"];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].delinquentApplications + "?hasDelinquentAppForm=true&page=".concat(this.currentPage, "&size=").concat(this.pageSize);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
                this.router.navigate(["asc/page/accounting/payments/", "brand-penalties"]);
                this.displayedColumns = ["referenceCode", "brand", "penaltyDate", "amount", "paymentMethod", "paidDate", "paymentStatus"];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].penalizedBrandMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + (param === null || param === void 0 ? void 0 : param.replace("paymentStatus", "status"));
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
                this.router.navigate(["asc/page/accounting/payments/", "company-penalties"]); // endpoint = ENDPOINTS.penalizedCompanyMonitoring;

                this.displayedColumns = ["referenceCode", "company", "penaltyDate", "amount", "paymentStatus"];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].companyPenalties + "/custom/search?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
                this.router.navigate(["asc/page/accounting/payments/", "accounts-receivable"]);
                this.displayedColumns = ["referenceCode", "typeOfApplication", "brand", "typeOfMedium", "companyName", "paymentStatus"];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesMonitoring + "?hasPromissoryNote=true&page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              }

              console.log(endpoint);
              this.apiService.findAll(endpoint).subscribe(function (res) {
                if (res.data) {
                  _this.paymentList = res.data;
                } else if (res.responseData) {
                  _this.paymentList = res.responseData.data;
                } else if (res) {
                  _this.paymentList = res;
                } else {
                  _this.paymentList = [];
                }

                _this.paymentTotalItems = res.totalItems;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.paymentList); // this.dataSource.paginator = this.paginator;

                _this.dataSource.sort = _this.sort;
                _this.paymentTotalItems = res.totalItems;

                _this.spinner.hide();

                console.log("datasource", _this.dataSource.data);
              }, function (err) {
                _this.paymentList = [];
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.paymentList);

                _this.spinner.hide();
              });
            }
          }, {
            key: "pageEvents",
            value: function pageEvents(event) {
              this.pageSize = event.pageSize;

              if (event.pageIndex > this.pageNo) {
                this.pageNo++;
              } else {
                this.pageNo--;
              }

              if (event.pageSize > event.length) {
                this.pageNo = 0;
              }

              this.getPaymentList(this.paymentStatus);
            }
          }, {
            key: "setPageSizeOptions",
            value: function setPageSizeOptions(setPageSizeOptionsInput) {
              if (setPageSizeOptionsInput) {
                this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(function (str) {
                  return +str;
                });
              }
            }
          }, {
            key: "comparePaymentType",
            value: function comparePaymentType(value, selected) {
              if (value && selected) {
                return value.type === selected.type;
              }
            }
          }, {
            key: "getPaymentDetails",
            value: function getPaymentDetails(elm) {
              var _a, _b, _c;

              if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
                this.router.navigate(["asc/page/accounting/update/", elm.paymentStatus.toLowerCase() + "-" + elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
                if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                  this.router.navigate(["asc/page/accounting/update/", "".concat((_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase(), "-").concat(elm.id), "multiple-".concat(elm.id)]);
                } else {
                  this.router.navigate(["asc/page/accounting/update/", "multiple-".concat(elm.id)]);
                }
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
                if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                  this.router.navigate(["asc/page/accounting/update/", "".concat((_b = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase(), "-").concat(elm.id), "special-".concat(elm.id)]);
                } else {
                  this.router.navigate(["asc/page/accounting/update/", "special-".concat(elm.id)]);
                }
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
                this.router.navigate(["asc/page/accounting/update/", elm.paymentStatus.toLowerCase() + "-" + elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].DELINQUENT) {
                var payment = new _models__WEBPACK_IMPORTED_MODULE_4__["Payment"]();
                payment.amountDue = elm.amountToSettle;
                payment.applicationForm = elm;
                payment.appFormReference = elm.appFormReference;
                payment.companyId = elm.id;
                this.dataStorageService.setPayment(payment);
                this.router.navigate(["asc/page/accounting/add-penalty/update/", "delinquent", elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
                this.router.navigate(["asc/page/accounting/add-penalty/update/", "brand", elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
                this.router.navigate(["asc/page/accounting/add-penalty/update/", "company", (_c = elm === null || elm === void 0 ? void 0 : elm.company) === null || _c === void 0 ? void 0 : _c.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
                this.router.navigate(["asc/page/accounting/update/", elm.paymentStatus.toLowerCase() + "-" + elm.id]);
              }
            }
          }, {
            key: "openComponent",
            value: function openComponent() {
              if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
                this.router.navigate(["asc/page/accounting/add-penalty", "brand"]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
                this.router.navigate(["asc/page/accounting/add-penalty", "company"]);
              }
            }
          }]);

          return PaymentsComponent;
        }();

        PaymentsComponent.??fac = function PaymentsComponent_Factory(t) {
          return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
        };

        PaymentsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: PaymentsComponent,
          selectors: [["app-payments"]],
          viewQuery: function PaymentsComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginatorFalse = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
            }
          },
          decls: 72,
          vars: 16,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "col-md-8"], ["appearance", "outline", 1, "col-md-12"], ["name", "paymentType", "placeholder", "Type of Payment", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["appearance", "outline", 1, "col-md-12", 3, "hidden"], ["name", "paymentStatus", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-right button-red", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8", "fields"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "referenceCode"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "adTitle"], ["matColumnDef", "typeOfApplication"], ["matColumnDef", "brand"], ["matColumnDef", "product"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "company"], ["matColumnDef", "companyTelephoneNo"], ["matColumnDef", "membersAffiliation"], ["matColumnDef", "penaltyDate"], ["matColumnDef", "amount"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "paidDate"], ["matColumnDef", "typeOfMedium"], ["matColumnDef", "companyName"], ["matColumnDef", "paymentStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], [3, "pageSize", "pageIndex", "length", "pageSizeOptions", "page"], [3, "value", "click"], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "click"], [1, "material-icons", "color__white"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]],
          template: function PaymentsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "payments");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " PAYMENT LIST ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-select", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentsComponent_Template_mat_select_ngModelChange_12_listener($event) {
                return ctx.paymentType = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PaymentsComponent_mat_option_13_Template, 2, 2, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-select", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentsComponent_Template_mat_select_ngModelChange_16_listener($event) {
                return ctx.paymentStatus = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, PaymentsComponent_mat_option_17_Template, 2, 2, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, PaymentsComponent_mat_option_18_Template, 2, 1, "mat-option", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, PaymentsComponent_button_19_Template, 4, 0, "button", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "table", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](22, 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, PaymentsComponent_th_23_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, PaymentsComponent_td_24_Template, 2, 1, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](25, 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, PaymentsComponent_th_26_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, PaymentsComponent_td_27_Template, 4, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, PaymentsComponent_th_29_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, PaymentsComponent_td_30_Template, 6, 12, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, PaymentsComponent_th_32_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, PaymentsComponent_td_33_Template, 5, 9, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](34, 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, PaymentsComponent_th_35_Template, 2, 0, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, PaymentsComponent_td_36_Template, 4, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](37, 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, PaymentsComponent_th_38_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, PaymentsComponent_td_39_Template, 5, 9, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](40, 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, PaymentsComponent_th_41_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, PaymentsComponent_td_42_Template, 6, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](43, 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, PaymentsComponent_th_44_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, PaymentsComponent_td_45_Template, 3, 3, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](46, 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, PaymentsComponent_th_47_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, PaymentsComponent_td_48_Template, 3, 4, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](49, 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, PaymentsComponent_th_50_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, PaymentsComponent_td_51_Template, 2, 3, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](52, 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, PaymentsComponent_th_53_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, PaymentsComponent_td_54_Template, 3, 3, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](55, 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, PaymentsComponent_th_56_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, PaymentsComponent_td_57_Template, 5, 12, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](58, 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, PaymentsComponent_th_59_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, PaymentsComponent_td_60_Template, 4, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](61, 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, PaymentsComponent_th_62_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, PaymentsComponent_td_63_Template, 4, 6, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](64, 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, PaymentsComponent_th_65_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, PaymentsComponent_td_66_Template, 3, 3, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](67, PaymentsComponent_tr_67_Template, 1, 0, "tr", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, PaymentsComponent_tr_68_Template, 1, 0, "tr", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " No record found. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-paginator", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function PaymentsComponent_Template_mat_paginator_page_71_listener($event) {
                return ctx.pageEvents($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.paymentType)("compareWith", ctx.comparePaymentType);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.paymentTypeList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", (ctx.paymentType == null ? null : ctx.paymentType.type) === "DELINQUENT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.paymentStatus);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.paymentStatusList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.paymentType.type === "SCHEDULE OF FEES - INDIVIDUAL" || ctx.paymentType.type === "SCHEDULE OF FEES - MULTIPLE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.paymentType == null ? null : ctx.paymentType.type) === "PENALIZED BRANDS" || (ctx.paymentType == null ? null : ctx.paymentType.type) === "PENALIZED COMPANY");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.dataSource && (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSize", ctx.pageSize)("pageIndex", ctx.pageNo)("length", ctx.paymentTotalItems)("pageSizeOptions", ctx.pageSizeOptions);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return PaymentsComponent;
      }();
      /***/

    },

    /***/
    "aiYd":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/pages/accounting/payments/payments.module.ts ***!
      \**********************************************************************/

    /*! exports provided: PaymentsModule */

    /***/
    function aiYd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsModule", function () {
        return PaymentsModule;
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


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payments-routing.module */
      "BXqP");
      /* harmony import */


      var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments.component */
      "R/lV");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var PaymentsModule = /*@__PURE__*/function () {
        var PaymentsModule = /*#__PURE__*/_createClass(function PaymentsModule() {
          _classCallCheck(this, PaymentsModule);
        });

        PaymentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: PaymentsModule
        });
        PaymentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function PaymentsModule_Factory(t) {
            return new (t || PaymentsModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]]
        });
        return PaymentsModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PaymentsModule, {
          declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=payments-payments-module-es5.js.map