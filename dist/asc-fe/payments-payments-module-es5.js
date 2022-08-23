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
    "8Ju7":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/payments/payments.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Ju7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
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


      var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments.component */
      "R/lV");

      var routes = [{
        path: '',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
      }, {
        path: ':link',
        component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"]
      }];

      var PaymentsRoutingModule = /*#__PURE__*/_createClass(function PaymentsRoutingModule() {
        _classCallCheck(this, PaymentsRoutingModule);
      });

      PaymentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentsRoutingModule);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payments.component.html */
      "tt9k");
      /* harmony import */


      var _payments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payments.component.scss */
      "8Ju7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

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
          this.paymentTypeList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE_LIST"]);
          this.paymentList = [];
          this.paymentType = _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE_LIST"][0];
          this.paymentStatusList = _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_STATUS_LIST"];
          this.paymentStatus = "FOR_APPROVAL";
          this.linkExtension = "";
        }

        _createClass(PaymentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.linkExtension = this.route.snapshot.paramMap.get("link");

            if (this.linkExtension === "schedule-of-fees-individual") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL;
              })[0];
            } else if (this.linkExtension === "schedule-of-fees-multiple") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE;
              })[0];
            } else if (this.linkExtension === "schedule-of-fees-special") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL;
              })[0];
            } else if (this.linkExtension === "delinquent-companies") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].DELINQUENT;
              })[0];
            } else if (this.linkExtension === "brand-penalties") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS;
              })[0];
            } else if (this.linkExtension === "company-penalties") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY;
              })[0];
            } else if (this.linkExtension === "accounts-receivable") {
              this.paymentType = this.paymentTypeList.filter(function (filteredList) {
                return filteredList.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE;
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

            if (paymentStatus !== "ALL") {
              param = "&paymentStatus=" + paymentStatus;
            }

            this.currentPage = this.pageNo;
            this.currentPage++;
            if (this.currentPage === 0) this.currentPage++;
            this.spinner.show();
            var endpoint = "";

            if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
              this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-individual"]);
              this.displayedColumns = ["referenceCode", "typeOfApplication", "brand", "typeOfMedium", "companyName", "paymentStatus"]; //

              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
              this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-multiple"]);
              this.displayedColumns = ["adTitle", "typeOfApplication", "brand", "product", "company", "paymentStatus"]; //

              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMultipleMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
              this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-special"]);
              this.displayedColumns = ["referenceCode", "typeOfApplication", "brand", "typeOfMedium", "companyName", "paymentStatus"];
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesSpecialMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].DELINQUENT) {
              this.router.navigate(["asc/page/accounting/payments/", "delinquent-companies"]);
              this.displayedColumns = [// 'referenceCode',
              "company", "membersAffiliation", "companyTelephoneNo", "amount"];
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].delinquentApplications + "?hasDelinquentAppForm=true&page=".concat(this.currentPage, "&size=").concat(this.pageSize);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
              this.router.navigate(["asc/page/accounting/payments/", "brand-penalties"]);
              this.displayedColumns = ["referenceCode", "brand", "penaltyDate", "amount", "paymentMethod", "paidDate", "paymentStatus"];
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].penalizedBrandMonitoring + "?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + (param === null || param === void 0 ? void 0 : param.replace("paymentStatus", "status"));
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
              this.router.navigate(["asc/page/accounting/payments/", "company-penalties"]); // endpoint = ENDPOINTS.penalizedCompanyMonitoring;

              this.displayedColumns = ["referenceCode", "company", "penaltyDate", "amount", "paymentStatus"];
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].companyPenalties + "/custom/search?page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
              this.router.navigate(["asc/page/accounting/payments/", "accounts-receivable"]);
              this.displayedColumns = ["referenceCode", "typeOfApplication", "brand", "typeOfMedium", "companyName", "paymentStatus"];
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMonitoring + "?hasPromissoryNote=true&page=".concat(this.currentPage, "&size=").concat(this.pageSize) + param;
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
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.paymentList); // this.dataSource.paginator = this.paginator;

              _this.dataSource.sort = _this.sort;
              _this.paymentTotalItems = res.totalItems;

              _this.spinner.hide();

              console.log("datasource", _this.dataSource.data);
            }, function (err) {
              _this.paymentList = [];
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.paymentList);

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

            if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_INDIVIDUAL) {
              this.router.navigate(["asc/page/accounting/update/", elm.paymentStatus.toLowerCase() + "-" + elm.id]);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_MULTIPLE) {
              if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                this.router.navigate(["asc/page/accounting/update/", "".concat((_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase(), "-").concat(elm.id), "multiple-".concat(elm.id)]);
              } else {
                this.router.navigate(["asc/page/accounting/update/", "multiple-".concat(elm.id)]);
              }
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].SCHEDULE_OF_FEES_SPECIAL) {
              if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                this.router.navigate(["asc/page/accounting/update/", "".concat((_b = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _b === void 0 ? void 0 : _b.toLowerCase(), "-").concat(elm.id), "special-".concat(elm.id)]);
              } else {
                this.router.navigate(["asc/page/accounting/update/", "special-".concat(elm.id)]);
              }
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
              this.router.navigate(["asc/page/accounting/update/", elm.paymentStatus.toLowerCase() + "-" + elm.id]);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].DELINQUENT) {
              var payment = new _models__WEBPACK_IMPORTED_MODULE_8__["Payment"]();
              payment.amountDue = elm.amountToSettle;
              payment.applicationForm = elm;
              payment.appFormReference = elm.appFormReference;
              payment.companyId = elm.id;
              this.dataStorageService.setPayment(payment);
              this.router.navigate(["asc/page/accounting/add-penalty/update/", "delinquent", elm.id]);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
              this.router.navigate(["asc/page/accounting/add-penalty/update/", "brand", elm.id]);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
              this.router.navigate(["asc/page/accounting/add-penalty/update/", "company", (_c = elm === null || elm === void 0 ? void 0 : elm.company) === null || _c === void 0 ? void 0 : _c.id]);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].ACCOUNTS_RECEIVABLE) {
              this.router.navigate(["asc/page/accounting/update/", elm.paymentStatus.toLowerCase() + "-" + elm.id]);
            }
          }
        }, {
          key: "openComponent",
          value: function openComponent() {
            if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_BRANDS) {
              this.router.navigate(["asc/page/accounting/add-penalty", "brand"]);
            } else if (this.paymentType.type === _shared__WEBPACK_IMPORTED_MODULE_10__["PAYMENT_TYPE"].PENALIZED_COMPANY) {
              this.router.navigate(["asc/page/accounting/add-penalty", "company"]);
            }
          }
        }]);

        return PaymentsComponent;
      }();

      PaymentsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      PaymentsComponent.propDecorators = {
        paginatorFalse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
            "static": false
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
            "static": false
          }]
        }]
      };
      PaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payments",
        template: _raw_loader_payments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PaymentsComponent);
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


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments-routing.module */
      "BXqP");
      /* harmony import */


      var _payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./payments.component */
      "R/lV");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var PaymentsModule = /*#__PURE__*/_createClass(function PaymentsModule() {
        _classCallCheck(this, PaymentsModule);
      });

      PaymentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_4__["PaymentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
      })], PaymentsModule);
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
    "tt9k":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/payments/payments.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tt9k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>payments</mat-icon> PAYMENT LIST\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n          <mat-select [(ngModel)]=\"paymentType\" name=\"paymentType\" placeholder=\"Type of Payment\"\r\n            [compareWith]=\"comparePaymentType\">\r\n            <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" (click)=\"getByPaymentStatusList(paymentStatus)\">\r\n              {{i?.type?.replace('SPECIAL','S2 SPECIAL CLEARING')}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" [hidden]=\"paymentType?.type === 'DELINQUENT'\">\r\n          <mat-select [(ngModel)]=\"paymentStatus\" name=\"paymentStatus\">\r\n            <mat-option *ngFor=\"let i of paymentStatusList\" [value]=\"i.type\" (click)=\"getByPaymentStatusList(paymentStatus)\">\r\n              {{i?.type?.replaceAll('_', ' ')}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"openComponent()\"\r\n          *ngIf=\"paymentType?.type === 'PENALIZED BRANDS' || paymentType?.type === 'PENALIZED COMPANY' \">\r\n          <i class=\"material-icons color__white\">task_alt</i> ADD PENALTY\r\n        </button>\r\n      </div>\r\n\r\n    <div class=\"mat-elevation-z8 fields\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"referenceCode\">\r\n          <th mat-header-cell *matHeaderCellDef > REFERENCE CODE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            <!-- {{ element?.referenceCode }}\r\n            {{ element?.applicationForm?.referenceCode | uppercase }}\r\n            {{ element?.brandPenaltyAttachmentReference | uppercase }} -->\r\n            {{printRefCode(element)}}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"adTitle\">\r\n          <th mat-header-cell *matHeaderCellDef > AD TITLE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.adTitle | uppercase }}\r\n            {{ element?.multipleApplication?.adTitle | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"typeOfApplication\">\r\n          <th mat-header-cell *matHeaderCellDef > TYPE OF APPLICATION </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationType?.description | uppercase }}\r\n            {{ element?.applicationForm?.applicationType?.description | uppercase }}\r\n            {{ element?.formType?.replaceAll('_',' ') | uppercase }}\r\n            {{ element?.multipleApplication?.applicationType?.description?.replaceAll('_',' ') | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"brand\">\r\n          <th mat-header-cell *matHeaderCellDef > BRAND </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationForm?.brand?.description | uppercase }}\r\n            {{ element?.brand?.description | uppercase }}\r\n            {{ element?.multipleApplication?.brand?.description | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"product\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> PRODUCT</th>\r\n          <td mat-cell *matCellDef=\"let element; let i = index\" (click)=\"getPaymentDetails(element)\">\r\n            {{element?.product?.description | uppercase}}\r\n            {{ element?.multipleApplication?.product?.description | uppercase }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"company\">\r\n            <th mat-header-cell *matHeaderCellDef > PRESENTOR'S COMPANY NAME </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n              {{ element?.applicationOwner?.company?.companyName | uppercase }}\r\n              {{ element?.companyName | uppercase }}\r\n              {{ element?.multipleApplication?.company?.companyName | uppercase }}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"companyTelephoneNo\">\r\n          <th mat-header-cell *matHeaderCellDef > Telephone No </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.companyTelephoneNo | uppercase }}<br>\r\n            {{ element?.companyTelephoneNo2 | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"membersAffiliation\">\r\n          <th mat-header-cell *matHeaderCellDef > MEMBERS AFFILIATION </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.membersAffiliation?.description | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"penaltyDate\">\r\n          <th mat-header-cell *matHeaderCellDef > PENALTY DATE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.penaltyDate | date: 'MM/dd/yyyy' }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"amount\">\r\n          <th mat-header-cell *matHeaderCellDef > AMOUNT </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.amount }}\r\n            {{ element?.penaltyAmount }}\r\n            {{ element?.amountToSettle }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paymentMethod\">\r\n          <th mat-header-cell *matHeaderCellDef > PAYMENT METHOD </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            <!-- {{ element?.paymentMethod | uppercase }} -->\r\n            {{ element?.paymentMethod?.paymentType?.paymentDescription | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paidDate\">\r\n          <th mat-header-cell *matHeaderCellDef > PAID DATE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationForm?.paidDate | date: 'MM/dd/yyyy' }}\r\n            {{ element?.paidDate | date: 'MM/dd/yyyy' }}\r\n            {{ element?.paymentMethod?.paymentDate | date: 'MM/dd/yyyy' }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"typeOfMedium\">\r\n          <th mat-header-cell *matHeaderCellDef > TYPE OF MEDIUM </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.typeOfMedium | uppercase }}\r\n            {{ element?.applicationForm?.typeOfMedium | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"companyName\">\r\n          <th mat-header-cell *matHeaderCellDef > PRESENTOR'S COMPANY NAME </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.applicationOwner?.company?.companyName | uppercase }}\r\n            {{ element?.applicationForm?.company?.companyName | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paymentStatus\">\r\n          <th mat-header-cell *matHeaderCellDef > PAYMENT STATUS </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\">\r\n            {{ element?.paymentStatus?.replaceAll('_',' ') | uppercase }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n        No record found.\r\n      </div>\r\n      <mat-paginator [pageSize]=\"pageSize\" [pageIndex]=\"pageNo\" [length]=\"paymentTotalItems\"\r\n      [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvents($event)\">\r\n  </mat-paginator>\r\n    </div>\r\n  </div>\r\n";
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