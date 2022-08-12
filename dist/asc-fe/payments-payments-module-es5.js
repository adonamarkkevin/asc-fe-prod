(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"], {
    /***/
    "/qS1":
    /*!*******************************************************!*\
      !*** ./src/app/core/models/type-of-document.model.ts ***!
      \*******************************************************/

    /*! exports provided: TypeOfDocument */

    /***/
    function qS1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function () {
        return TypeOfDocument;
      });

      var TypeOfDocument = /*#__PURE__*/_createClass(function TypeOfDocument() {
        _classCallCheck(this, TypeOfDocument);
      });
      /***/

    },

    /***/
    "0Kn2":
    /*!**********************************************!*\
      !*** ./src/app/core/models/country.model.ts ***!
      \**********************************************/

    /*! exports provided: Country */

    /***/
    function Kn2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Country", function () {
        return Country;
      });

      var Country = /*#__PURE__*/_createClass(function Country() {
        _classCallCheck(this, Country);
      });
      /***/

    },

    /***/
    "50w+":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/type-of-reason.model.ts ***!
      \*****************************************************/

    /*! exports provided: TypeOfReason */

    /***/
    function w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfReason", function () {
        return TypeOfReason;
      });

      var TypeOfReason = /*#__PURE__*/_createClass(function TypeOfReason() {
        _classCallCheck(this, TypeOfReason);
      });
      /***/

    },

    /***/
    "AKki":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/type-of-application.model.ts ***!
      \**********************************************************/

    /*! exports provided: TypeOfApplication */

    /***/
    function AKki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function () {
        return TypeOfApplication;
      });

      var TypeOfApplication = /*#__PURE__*/_createClass(function TypeOfApplication() {
        _classCallCheck(this, TypeOfApplication);
      });
      /***/

    },

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

        PaymentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PaymentsRoutingModule
        });
        PaymentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PaymentsRoutingModule_Factory(t) {
            return new (t || PaymentsRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return PaymentsRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Bmuo":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/s1-application.model.ts ***!
      \*****************************************************/

    /*! exports provided: S1Application */

    /***/
    function Bmuo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1Application", function () {
        return S1Application;
      });

      var S1Application = /*#__PURE__*/_createClass(function S1Application() {
        _classCallCheck(this, S1Application);
      });
      /***/

    },

    /***/
    "CmCX":
    /*!**********************************************!*\
      !*** ./src/app/core/models/product.model.ts ***!
      \**********************************************/

    /*! exports provided: Product */

    /***/
    function CmCX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = /*#__PURE__*/_createClass(function Product() {
        _classCallCheck(this, Product);
      });
      /***/

    },

    /***/
    "HQqM":
    /*!**********************************************!*\
      !*** ./src/app/core/models/payment.model.ts ***!
      \**********************************************/

    /*! exports provided: Payment */

    /***/
    function HQqM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Payment", function () {
        return Payment;
      });
      /* harmony import */


      var _payment_method_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment-method.model */
      "piSE");

      var Payment = /*#__PURE__*/_createClass(function Payment() {
        _classCallCheck(this, Payment);

        this.paymentMethod = new _payment_method_model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"]();
        this.filedBirForm = false;
        this.filedBirForm = false;
        this.remarks = '';
      });
      /***/

    },

    /***/
    "JAX2":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/type-of-medium.model.ts ***!
      \*****************************************************/

    /*! exports provided: TypeOfMedium */

    /***/
    function JAX2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function () {
        return TypeOfMedium;
      });

      var TypeOfMedium = /*#__PURE__*/_createClass(function TypeOfMedium() {
        _classCallCheck(this, TypeOfMedium);
      });
      /***/

    },

    /***/
    "JLH3":
    /*!*************************************************************!*\
      !*** ./src/app/core/models/application-multimedia.model.ts ***!
      \*************************************************************/

    /*! exports provided: ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */

    /***/
    function JLH3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function () {
        return ApplicationMultimedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function () {
        return ApplicationMultimediaItemsDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function () {
        return ApplicationMultimediaMovingDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function () {
        return ApplicationMultimediaStaticDTO;
      });

      var ApplicationMultimedia = /*#__PURE__*/_createClass(function ApplicationMultimedia() {
        _classCallCheck(this, ApplicationMultimedia);
      });

      var ApplicationMultimediaItemsDTO = /*#__PURE__*/_createClass(function ApplicationMultimediaItemsDTO() {
        _classCallCheck(this, ApplicationMultimediaItemsDTO);
      });

      var ApplicationMultimediaMovingDTO = /*#__PURE__*/function (_ApplicationMultimedi) {
        _inherits(ApplicationMultimediaMovingDTO, _ApplicationMultimedi);

        var _super = _createSuper(ApplicationMultimediaMovingDTO);

        function ApplicationMultimediaMovingDTO() {
          _classCallCheck(this, ApplicationMultimediaMovingDTO);

          return _super.apply(this, arguments);
        }

        return _createClass(ApplicationMultimediaMovingDTO);
      }(ApplicationMultimedia);

      var ApplicationMultimediaStaticDTO = /*#__PURE__*/function (_ApplicationMultimedi2) {
        _inherits(ApplicationMultimediaStaticDTO, _ApplicationMultimedi2);

        var _super2 = _createSuper(ApplicationMultimediaStaticDTO);

        function ApplicationMultimediaStaticDTO() {
          _classCallCheck(this, ApplicationMultimediaStaticDTO);

          return _super2.apply(this, arguments);
        }

        return _createClass(ApplicationMultimediaStaticDTO);
      }(ApplicationMultimedia);
      /***/

    },

    /***/
    "LhRd":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/s2-application.model.ts ***!
      \*****************************************************/

    /*! exports provided: S2Application */

    /***/
    function LhRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S2Application", function () {
        return S2Application;
      });

      var S2Application = /*#__PURE__*/_createClass(function S2Application() {
        _classCallCheck(this, S2Application);
      });
      /***/

    },

    /***/
    "QLCe":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/or-preparation.model.ts ***!
      \*****************************************************/

    /*! exports provided: OrPreparation */

    /***/
    function QLCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparation", function () {
        return OrPreparation;
      });

      var OrPreparation = /*#__PURE__*/function () {
        function OrPreparation() {
          _classCallCheck(this, OrPreparation);
        }

        _createClass(OrPreparation, [{
          key: "setTotalAmounts",
          value: function setTotalAmounts(totals) {
            this.totalSales = totals.totalSales;
            this.totalAmountDue = totals.totalAmountDue;
            this.totalVat = totals.totalVat;
            this.totalWithholdingtax = totals.totalWithholdingtax;
          }
        }]);

        return OrPreparation;
      }();
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
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_mat_option_13_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.getByPaymentStatusList(ctx_r36.paymentStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r35 == null ? null : i_r35.type == null ? null : i_r35.type.replace("SPECIAL", "S2 SPECIAL CLEARING"), " ");
        }
      }

      function PaymentsComponent_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_mat_option_17_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.getByPaymentStatusList(ctx_r39.paymentStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r38.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r38 == null ? null : i_r38.type == null ? null : i_r38.type.replaceAll("_", " "), " ");
        }
      }

      function PaymentsComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.openComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ADD PENALTY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REFERENCE CODE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_23_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var element_r43 = ctx.$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.getPaymentDetails(element_r43);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r43 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.printRefCode(element_r43), " ");
        }
      }

      function PaymentsComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AD TITLE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_26_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var element_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.getPaymentDetails(element_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, element_r46 == null ? null : element_r46.adTitle), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, element_r46 == null ? null : element_r46.multipleApplication == null ? null : element_r46.multipleApplication.adTitle), " ");
        }
      }

      function PaymentsComponent_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TYPE OF APPLICATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_29_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var element_r49 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.getPaymentDetails(element_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, element_r49 == null ? null : element_r49.applicationType == null ? null : element_r49.applicationType.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, element_r49 == null ? null : element_r49.applicationForm == null ? null : element_r49.applicationForm.applicationType == null ? null : element_r49.applicationForm.applicationType.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, element_r49 == null ? null : element_r49.formType == null ? null : element_r49.formType.replaceAll("_", " ")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, element_r49 == null ? null : element_r49.multipleApplication == null ? null : element_r49.multipleApplication.applicationType == null ? null : element_r49.multipleApplication.applicationType.description == null ? null : element_r49.multipleApplication.applicationType.description.replaceAll("_", " ")), " ");
        }
      }

      function PaymentsComponent_th_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " BRAND ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_32_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var element_r52 = ctx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.getPaymentDetails(element_r52);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, element_r52 == null ? null : element_r52.applicationForm == null ? null : element_r52.applicationForm.brand == null ? null : element_r52.applicationForm.brand.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, element_r52 == null ? null : element_r52.brand == null ? null : element_r52.brand.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, element_r52 == null ? null : element_r52.multipleApplication == null ? null : element_r52.multipleApplication.brand == null ? null : element_r52.multipleApplication.brand.description), " ");
        }
      }

      function PaymentsComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PRODUCT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_35_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var element_r55 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.getPaymentDetails(element_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, element_r55 == null ? null : element_r55.product == null ? null : element_r55.product.description), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, element_r55 == null ? null : element_r55.multipleApplication == null ? null : element_r55.multipleApplication.product == null ? null : element_r55.multipleApplication.product.description), "");
        }
      }

      function PaymentsComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PRESENTOR'S COMPANY NAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_38_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var element_r59 = ctx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.getPaymentDetails(element_r59);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, element_r59 == null ? null : element_r59.applicationOwner == null ? null : element_r59.applicationOwner.company == null ? null : element_r59.applicationOwner.company.companyName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, element_r59 == null ? null : element_r59.companyName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, element_r59 == null ? null : element_r59.multipleApplication == null ? null : element_r59.multipleApplication.company == null ? null : element_r59.multipleApplication.company.companyName), "");
        }
      }

      function PaymentsComponent_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telephone No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_41_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var element_r62 = ctx.$implicit;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.getPaymentDetails(element_r62);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, element_r62 == null ? null : element_r62.companyTelephoneNo), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, element_r62 == null ? null : element_r62.companyTelephoneNo2), " ");
        }
      }

      function PaymentsComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MEMBERS AFFILIATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_44_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var element_r65 = ctx.$implicit;

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r66.getPaymentDetails(element_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r65 == null ? null : element_r65.membersAffiliation == null ? null : element_r65.membersAffiliation.description), " ");
        }
      }

      function PaymentsComponent_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PENALTY DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_47_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var element_r68 = ctx.$implicit;

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r69.getPaymentDetails(element_r68);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r68 == null ? null : element_r68.penaltyDate, "MM/dd/yyyy"), " ");
        }
      }

      function PaymentsComponent_th_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AMOUNT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_50_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var element_r71 = ctx.$implicit;

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r72.getPaymentDetails(element_r71);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", element_r71 == null ? null : element_r71.amount, " ", element_r71 == null ? null : element_r71.penaltyAmount, " ", element_r71 == null ? null : element_r71.amountToSettle, " ");
        }
      }

      function PaymentsComponent_th_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PAYMENT METHOD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_53_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var element_r74 = ctx.$implicit;

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r75.getPaymentDetails(element_r74);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r74 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r74 == null ? null : element_r74.paymentMethod == null ? null : element_r74.paymentMethod.paymentType == null ? null : element_r74.paymentMethod.paymentType.paymentDescription), " ");
        }
      }

      function PaymentsComponent_th_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PAID DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_56_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_56_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var element_r77 = ctx.$implicit;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r78.getPaymentDetails(element_r77);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, element_r77 == null ? null : element_r77.applicationForm == null ? null : element_r77.applicationForm.paidDate, "MM/dd/yyyy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, element_r77 == null ? null : element_r77.paidDate, "MM/dd/yyyy"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, element_r77 == null ? null : element_r77.paymentMethod == null ? null : element_r77.paymentMethod.paymentDate, "MM/dd/yyyy"), " ");
        }
      }

      function PaymentsComponent_th_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TYPE OF MEDIUM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_59_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var element_r80 = ctx.$implicit;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r81.getPaymentDetails(element_r80);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, element_r80 == null ? null : element_r80.typeOfMedium), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, element_r80 == null ? null : element_r80.applicationForm == null ? null : element_r80.applicationForm.typeOfMedium), " ");
        }
      }

      function PaymentsComponent_th_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PRESENTOR'S COMPANY NAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_62_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

            var element_r83 = ctx.$implicit;

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r84.getPaymentDetails(element_r83);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, element_r83 == null ? null : element_r83.applicationOwner == null ? null : element_r83.applicationOwner.company == null ? null : element_r83.applicationOwner.company.companyName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, element_r83 == null ? null : element_r83.applicationForm == null ? null : element_r83.applicationForm.company == null ? null : element_r83.applicationForm.company.companyName), " ");
        }
      }

      function PaymentsComponent_th_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PAYMENT STATUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaymentsComponent_td_65_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentsComponent_td_65_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var element_r86 = ctx.$implicit;

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r87.getPaymentDetails(element_r86);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r86 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r86 == null ? null : element_r86.paymentStatus == null ? null : element_r86.paymentStatus.replaceAll("_", " ")), " ");
        }
      }

      function PaymentsComponent_tr_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
        }
      }

      function PaymentsComponent_tr_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
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
            this.paymentStatus = 'FOR_APPROVAL';
            this.linkExtension = '';
          }

          _createClass(PaymentsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.linkExtension = this.route.snapshot.paramMap.get('link');

              if (this.linkExtension === 'schedule-of-fees-individual') {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL;
                })[0];
              } else if (this.linkExtension === 'schedule-of-fees-multiple') {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE;
                })[0];
              } else if (this.linkExtension === 'schedule-of-fees-special') {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL;
                })[0];
              } else if (this.linkExtension === 'delinquent-companies') {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].DELINQUENT;
                })[0];
              } else if (this.linkExtension === 'brand-penalties') {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS;
                })[0];
              } else if (this.linkExtension === 'company-penalties') {
                this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                  return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY;
                })[0];
              } else if (this.linkExtension === 'accounts-receivable') {
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

              var param = '';

              if (paymentStatus !== 'ALL') {
                param = '&paymentStatus=' + paymentStatus;
              }

              this.currentPage = this.pageNo;
              this.currentPage++;
              if (this.currentPage === 0) this.currentPage++;
              this.spinner.show();
              var endpoint = '';

              if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
                this.router.navigate(['asc/page/accounting/payments/', 'schedule-of-fees-individual']);
                this.displayedColumns = ['referenceCode', 'typeOfApplication', 'brand', 'typeOfMedium', 'companyName', 'paymentStatus']; //

                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
                this.router.navigate(['asc/page/accounting/payments/', 'schedule-of-fees-multiple']);
                this.displayedColumns = ['adTitle', 'typeOfApplication', 'brand', 'product', 'company', 'paymentStatus']; //

                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesMultipleMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
                this.router.navigate(['asc/page/accounting/payments/', 'schedule-of-fees-special']);
                this.displayedColumns = ['referenceCode', 'typeOfApplication', 'brand', 'typeOfMedium', 'companyName', 'paymentStatus'];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].scheduleOfFeesSpecialMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].DELINQUENT) {
                this.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                this.displayedColumns = [// 'referenceCode',
                'company', 'membersAffiliation', 'companyTelephoneNo', 'amount'];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].delinquentApplications + "?hasDelinquentAppForm=true&page=".concat(this.currentPage, "&size=").concat(this.pageSize);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
                this.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                this.displayedColumns = ['referenceCode', 'brand', 'penaltyDate', 'amount', 'paymentMethod', 'paidDate', 'paymentStatus'];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].penalizedBrandMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + (param === null || param === void 0 ? void 0 : param.replace('paymentStatus', 'status'));
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
                this.router.navigate(['asc/page/accounting/payments/', 'company-penalties']); // endpoint = ENDPOINTS.penalizedCompanyMonitoring;

                this.displayedColumns = ['referenceCode', 'company', 'penaltyDate', 'amount', 'paymentStatus'];
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].companyPenalties + "/custom/search?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
                this.router.navigate(['asc/page/accounting/payments/', 'accounts-receivable']);
                this.displayedColumns = ['referenceCode', 'typeOfApplication', 'brand', 'typeOfMedium', 'companyName', 'paymentStatus'];
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

                console.log('datasource', _this.dataSource.data);
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
                this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) {
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
                this.router.navigate(['asc/page/accounting/update/', elm.paymentStatus.toLowerCase() + '-' + elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
                if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                  this.router.navigate(['asc/page/accounting/update/', "".concat((_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase(), "-").concat(elm.id), "multiple-".concat(elm.id)]);
                } else {
                  this.router.navigate(['asc/page/accounting/update/', "multiple-".concat(elm.id)]);
                }
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
                if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                  this.router.navigate(['asc/page/accounting/update/', "".concat((_b = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase(), "-").concat(elm.id), "special-".concat(elm.id)]);
                } else {
                  this.router.navigate(['asc/page/accounting/update/', "special-".concat(elm.id)]);
                }
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].DELINQUENT) {
                var payment = new _models__WEBPACK_IMPORTED_MODULE_4__["Payment"]();
                payment.amountDue = elm.amountToSettle;
                payment.applicationForm = elm;
                payment.appFormReference = elm.appFormReference;
                payment.companyId = elm.id;
                this.dataStorageService.setPayment(payment);
                this.router.navigate(['asc/page/accounting/add-penalty/update/', 'delinquent', elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
                this.router.navigate(['asc/page/accounting/add-penalty/update/', 'brand', elm.id]);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
                this.router.navigate(['asc/page/accounting/add-penalty/update/', 'company', (_c = elm === null || elm === void 0 ? void 0 : elm.company) === null || _c === void 0 ? void 0 : _c.id]);
              }
            }
          }, {
            key: "openComponent",
            value: function openComponent() {
              if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
                this.router.navigate(['asc/page/accounting/add-penalty', 'brand']);
              } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_5__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
                this.router.navigate(['asc/page/accounting/add-penalty', 'company']);
              }
            }
          }]);

          return PaymentsComponent;
        }();

        PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) {
          return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
        };

        PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PaymentsComponent,
          selectors: [["app-payments"]],
          viewQuery: function PaymentsComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginatorFalse = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            }
          },
          decls: 71,
          vars: 15,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "col-md-8"], ["appearance", "outline", 1, "col-md-12"], ["name", "paymentType", "placeholder", "Type of Payment", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["appearance", "outline", 1, "col-md-12", 3, "hidden"], ["name", "paymentStatus", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "class", "button-right button-red", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8", "fields"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "referenceCode"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "adTitle"], ["matColumnDef", "typeOfApplication"], ["matColumnDef", "brand"], ["matColumnDef", "product"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "company"], ["matColumnDef", "companyTelephoneNo"], ["matColumnDef", "membersAffiliation"], ["matColumnDef", "penaltyDate"], ["matColumnDef", "amount"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "paidDate"], ["matColumnDef", "typeOfMedium"], ["matColumnDef", "companyName"], ["matColumnDef", "paymentStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], [3, "pageSize", "pageIndex", "length", "pageSizeOptions", "page"], [3, "value", "click"], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "click"], [1, "material-icons", "color__white"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]],
          template: function PaymentsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "payments");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PAYMENT LIST ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_Template_mat_select_ngModelChange_12_listener($event) {
                return ctx.paymentType = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PaymentsComponent_mat_option_13_Template, 2, 2, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_Template_mat_select_ngModelChange_16_listener($event) {
                return ctx.paymentStatus = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PaymentsComponent_mat_option_17_Template, 2, 2, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaymentsComponent_button_18_Template, 4, 0, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PaymentsComponent_th_22_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PaymentsComponent_td_23_Template, 2, 1, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PaymentsComponent_th_25_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PaymentsComponent_td_26_Template, 4, 6, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PaymentsComponent_th_28_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PaymentsComponent_td_29_Template, 6, 12, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PaymentsComponent_th_31_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PaymentsComponent_td_32_Template, 5, 9, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PaymentsComponent_th_34_Template, 2, 0, "th", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PaymentsComponent_td_35_Template, 4, 6, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PaymentsComponent_th_37_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PaymentsComponent_td_38_Template, 5, 9, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PaymentsComponent_th_40_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PaymentsComponent_td_41_Template, 6, 6, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PaymentsComponent_th_43_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PaymentsComponent_td_44_Template, 3, 3, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PaymentsComponent_th_46_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PaymentsComponent_td_47_Template, 3, 4, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PaymentsComponent_th_49_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PaymentsComponent_td_50_Template, 2, 3, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PaymentsComponent_th_52_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PaymentsComponent_td_53_Template, 3, 3, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PaymentsComponent_th_55_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PaymentsComponent_td_56_Template, 5, 12, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PaymentsComponent_th_58_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PaymentsComponent_td_59_Template, 4, 6, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PaymentsComponent_th_61_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, PaymentsComponent_td_62_Template, 4, 6, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PaymentsComponent_th_64_Template, 2, 0, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PaymentsComponent_td_65_Template, 3, 3, "td", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PaymentsComponent_tr_66_Template, 1, 0, "tr", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, PaymentsComponent_tr_67_Template, 1, 0, "tr", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " No record found. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-paginator", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PaymentsComponent_Template_mat_paginator_page_70_listener($event) {
                return ctx.pageEvents($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paymentType)("compareWith", ctx.comparePaymentType);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentTypeList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", (ctx.paymentType == null ? null : ctx.paymentType.type) === "DELINQUENT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paymentStatus);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentStatusList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.paymentType == null ? null : ctx.paymentType.type) === "PENALIZED BRANDS" || (ctx.paymentType == null ? null : ctx.paymentType.type) === "PENALIZED COMPANY");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.dataSource && (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageIndex", ctx.pageNo)("length", ctx.paymentTotalItems)("pageSizeOptions", ctx.pageSizeOptions);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return PaymentsComponent;
      }();
      /***/

    },

    /***/
    "SYHT":
    /*!***************************************************!*\
      !*** ./src/app/core/models/user-account.model.ts ***!
      \***************************************************/

    /*! exports provided: UserAccount */

    /***/
    function SYHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccount", function () {
        return UserAccount;
      });

      var UserAccount = /*#__PURE__*/_createClass(function UserAccount() {
        _classCallCheck(this, UserAccount);
      });
      /***/

    },

    /***/
    "WN7m":
    /*!***********************************************!*\
      !*** ./src/app/core/models/asc-rate.model.ts ***!
      \***********************************************/

    /*! exports provided: AscRate */

    /***/
    function WN7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AscRate", function () {
        return AscRate;
      });

      var AscRate = /*#__PURE__*/_createClass(function AscRate() {
        _classCallCheck(this, AscRate);
      });
      /***/

    },

    /***/
    "XLGj":
    /*!***************************************************************!*\
      !*** ./src/app/core/models/application-single-media.model.ts ***!
      \***************************************************************/

    /*! exports provided: ApplicationSingleMedia */

    /***/
    function XLGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function () {
        return ApplicationSingleMedia;
      });

      var ApplicationSingleMedia = /*#__PURE__*/_createClass(function ApplicationSingleMedia() {
        _classCallCheck(this, ApplicationSingleMedia);
      });
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

        PaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PaymentsModule
        });
        PaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PaymentsModule_Factory(t) {
            return new (t || PaymentsModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]]
        });
        return PaymentsModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentsModule, {
          declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "an1Z":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/application-request.model.ts ***!
      \**********************************************************/

    /*! exports provided: ApplicationRequest */

    /***/
    function an1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function () {
        return ApplicationRequest;
      });

      var ApplicationRequest = /*#__PURE__*/_createClass(function ApplicationRequest() {
        _classCallCheck(this, ApplicationRequest);
      });
      /***/

    },

    /***/
    "bN3y":
    /*!**********************************************!*\
      !*** ./src/app/core/models/profile.model.ts ***!
      \**********************************************/

    /*! exports provided: Profile */

    /***/
    function bN3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return Profile;
      });

      var Profile = /*#__PURE__*/_createClass(function Profile() {
        _classCallCheck(this, Profile);
      });
      /***/

    },

    /***/
    "d215":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/attachment-document.model.ts ***!
      \**********************************************************/

    /*! exports provided: AttachmentDocument */

    /***/
    function d215(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function () {
        return AttachmentDocument;
      });

      var AttachmentDocument = /*#__PURE__*/_createClass(function AttachmentDocument() {
        _classCallCheck(this, AttachmentDocument);
      });
      /***/

    },

    /***/
    "eP4w":
    /*!***********************************************!*\
      !*** ./src/app/core/models/category.model.ts ***!
      \***********************************************/

    /*! exports provided: Category */

    /***/
    function eP4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return Category;
      });

      var Category = /*#__PURE__*/_createClass(function Category() {
        _classCallCheck(this, Category);
      });
      /***/

    },

    /***/
    "g+XZ":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/supporting-document.model.ts ***!
      \**********************************************************/

    /*! exports provided: SupportingDocument */

    /***/
    function gXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportingDocument", function () {
        return SupportingDocument;
      });

      var SupportingDocument = /*#__PURE__*/_createClass(function SupportingDocument() {
        _classCallCheck(this, SupportingDocument);
      });
      /***/

    },

    /***/
    "gYLz":
    /*!************************************************!*\
      !*** ./src/app/core/models/user-role.model.ts ***!
      \************************************************/

    /*! exports provided: UserRole */

    /***/
    function gYLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return UserRole;
      });

      var UserRole = /*#__PURE__*/_createClass(function UserRole() {
        _classCallCheck(this, UserRole);
      });
      /***/

    },

    /***/
    "intf":
    /*!***************************************************!*\
      !*** ./src/app/core/models/payment-type.model.ts ***!
      \***************************************************/

    /*! exports provided: PaymentType */

    /***/
    function intf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentType", function () {
        return PaymentType;
      });

      var PaymentType = /*#__PURE__*/_createClass(function PaymentType() {
        _classCallCheck(this, PaymentType);
      });
      /***/

    },

    /***/
    "jEab":
    /*!***************************************************************!*\
      !*** ./src/app/core/models/or-preparation-reference.model.ts ***!
      \***************************************************************/

    /*! exports provided: OrPreparationReference */

    /***/
    function jEab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function () {
        return OrPreparationReference;
      });

      var OrPreparationReference = /*#__PURE__*/_createClass(function OrPreparationReference() {
        _classCallCheck(this, OrPreparationReference);
      });
      /***/

    },

    /***/
    "no/g":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/performance-metrics.model.ts ***!
      \**********************************************************/

    /*! exports provided: PerformanceMetrics */

    /***/
    function noG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function () {
        return PerformanceMetrics;
      });

      var PerformanceMetrics = /*#__PURE__*/_createClass(function PerformanceMetrics() {
        _classCallCheck(this, PerformanceMetrics);
      });
      /***/

    },

    /***/
    "piSE":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/payment-method.model.ts ***!
      \*****************************************************/

    /*! exports provided: PaymentMethod */

    /***/
    function piSE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentMethod", function () {
        return PaymentMethod;
      });

      var PaymentMethod = /*#__PURE__*/_createClass(function PaymentMethod() {
        _classCallCheck(this, PaymentMethod);
      });
      /***/

    },

    /***/
    "sKXY":
    /*!**************************************!*\
      !*** ./src/app/core/models/index.ts ***!
      \**************************************/

    /*! exports provided: Affiliation, Brand, Company, PaymentType, Profile, S1Application, S2Application, TypeOfDocument, TypeOfMedium, TypeOfReason, UserRole, UserAccount, AttachmentDocument, Category, Product, TypeOfApplication, AscRate, Payment, Country, PerformanceMetrics, OrPreparation, OrPreparationReference, SupportingDocument, ApplicationSingleMedia, ApplicationRequest, ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */

    /***/
    function sKXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _affiliation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./affiliation.model */
      "vWPX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Affiliation", function () {
        return _affiliation_model__WEBPACK_IMPORTED_MODULE_0__["Affiliation"];
      });
      /* harmony import */


      var _brand_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./brand.model */
      "xlTg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Brand", function () {
        return _brand_model__WEBPACK_IMPORTED_MODULE_1__["Brand"];
      });
      /* harmony import */


      var _company_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company.model */
      "xpUm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return _company_model__WEBPACK_IMPORTED_MODULE_2__["Company"];
      });
      /* harmony import */


      var _payment_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-type.model */
      "intf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaymentType", function () {
        return _payment_type_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"];
      });
      /* harmony import */


      var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile.model */
      "bN3y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return _profile_model__WEBPACK_IMPORTED_MODULE_4__["Profile"];
      });
      /* harmony import */


      var _s1_application_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./s1-application.model */
      "Bmuo");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "S1Application", function () {
        return _s1_application_model__WEBPACK_IMPORTED_MODULE_5__["S1Application"];
      });
      /* harmony import */


      var _s2_application_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./s2-application.model */
      "LhRd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "S2Application", function () {
        return _s2_application_model__WEBPACK_IMPORTED_MODULE_6__["S2Application"];
      });
      /* harmony import */


      var _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./type-of-document.model */
      "/qS1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function () {
        return _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__["TypeOfDocument"];
      });
      /* harmony import */


      var _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./type-of-medium.model */
      "JAX2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function () {
        return _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__["TypeOfMedium"];
      });
      /* harmony import */


      var _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./type-of-reason.model */
      "50w+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfReason", function () {
        return _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfReason"];
      });
      /* harmony import */


      var _user_role_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-role.model */
      "gYLz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return _user_role_model__WEBPACK_IMPORTED_MODULE_10__["UserRole"];
      });
      /* harmony import */


      var _user_account_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-account.model */
      "SYHT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserAccount", function () {
        return _user_account_model__WEBPACK_IMPORTED_MODULE_11__["UserAccount"];
      });
      /* harmony import */


      var _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./attachment-document.model */
      "d215");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function () {
        return _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__["AttachmentDocument"];
      });
      /* harmony import */


      var _category_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./category.model */
      "eP4w");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return _category_model__WEBPACK_IMPORTED_MODULE_13__["Category"];
      });
      /* harmony import */


      var _product_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./product.model */
      "CmCX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return _product_model__WEBPACK_IMPORTED_MODULE_14__["Product"];
      });
      /* harmony import */


      var _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./type-of-application.model */
      "AKki");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function () {
        return _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__["TypeOfApplication"];
      });
      /* harmony import */


      var _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./asc-rate.model */
      "WN7m");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AscRate", function () {
        return _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__["AscRate"];
      });
      /* harmony import */


      var _payment_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./payment.model */
      "HQqM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Payment", function () {
        return _payment_model__WEBPACK_IMPORTED_MODULE_17__["Payment"];
      });
      /* harmony import */


      var _country_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./country.model */
      "0Kn2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Country", function () {
        return _country_model__WEBPACK_IMPORTED_MODULE_18__["Country"];
      });
      /* harmony import */


      var _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./performance-metrics.model */
      "no/g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function () {
        return _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__["PerformanceMetrics"];
      });
      /* harmony import */


      var _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./or-preparation.model */
      "QLCe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OrPreparation", function () {
        return _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__["OrPreparation"];
      });
      /* harmony import */


      var _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./or-preparation-reference.model */
      "jEab");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function () {
        return _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__["OrPreparationReference"];
      });
      /* harmony import */


      var _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./supporting-document.model */
      "g+XZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SupportingDocument", function () {
        return _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__["SupportingDocument"];
      });
      /* harmony import */


      var _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./application-single-media.model */
      "XLGj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function () {
        return _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__["ApplicationSingleMedia"];
      });
      /* harmony import */


      var _application_request_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./application-request.model */
      "an1Z");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function () {
        return _application_request_model__WEBPACK_IMPORTED_MODULE_24__["ApplicationRequest"];
      });
      /* harmony import */


      var _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./application-multimedia.model */
      "JLH3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaItemsDTO"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaMovingDTO"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaStaticDTO"];
      });
      /***/

    },

    /***/
    "vWPX":
    /*!**************************************************!*\
      !*** ./src/app/core/models/affiliation.model.ts ***!
      \**************************************************/

    /*! exports provided: Affiliation */

    /***/
    function vWPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Affiliation", function () {
        return Affiliation;
      });

      var Affiliation = /*#__PURE__*/_createClass(function Affiliation() {
        _classCallCheck(this, Affiliation);
      });
      /***/

    },

    /***/
    "xlTg":
    /*!********************************************!*\
      !*** ./src/app/core/models/brand.model.ts ***!
      \********************************************/

    /*! exports provided: Brand */

    /***/
    function xlTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Brand", function () {
        return Brand;
      });

      var Brand = /*#__PURE__*/_createClass(function Brand() {
        _classCallCheck(this, Brand);
      });
      /***/

    },

    /***/
    "xpUm":
    /*!**********************************************!*\
      !*** ./src/app/core/models/company.model.ts ***!
      \**********************************************/

    /*! exports provided: Company */

    /***/
    function xpUm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });

      var Company = /*#__PURE__*/_createClass(function Company() {
        _classCallCheck(this, Company);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=payments-payments-module-es5.js.map