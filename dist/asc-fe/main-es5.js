(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\asc\asc-frontend\src\main.ts */
      "zUnb");
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
    "0MCZ":
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/layout.component.ts ***!
      \***************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function MCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/constants */
      "9Vv1");
      /* harmony import */


      var app_core_models_applicationCountS2_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/core/models/applicationCountS2.model */
      "Uyvf");
      /* harmony import */


      var app_core_models_application_count_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/application-count.model */
      "hlXp");
      /* harmony import */


      var app_core_models_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/core/models/counter */
      "x25a");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var app_core_services_common_services_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/core/services/common-services.service */
      "Iws0");
      /* harmony import */


      var _core_services_socket_websocket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../core/services/socket/websocket.service */
      "B1bq");

      var _c0 = function _c0() {
        return ["/asc/page/application/s1/multiple"];
      };

      function LayoutComponent_ul_25_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Multiple Applications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r14.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.badgeCounter.countTotalMultipleApplications);
        }
      }

      var _c1 = function _c1() {
        return ["/asc/page/application/s1/special"];
      };

      function LayoutComponent_ul_25_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Special Applications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r15.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.badgeCounter.countTotalSpecialApplications);
        }
      }

      var _c2 = function _c2() {
        return ["/asc/page/application/s1/assigned-applications"];
      };

      function LayoutComponent_ul_25_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Retrieve/Re-assign ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r16.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.badgeCounter.countTotalAssignedApplication);
        }
      }

      var _c3 = function _c3() {
        return ["/asc/page/application/s1/for-release"];
      };

      function LayoutComponent_ul_25_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "For Release ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r17.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.badgeCounter.countTotalForRelease);
        }
      }

      var _c4 = function _c4() {
        return ["/asc/page/application/s1/released"];
      };

      function LayoutComponent_ul_25_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Released ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r18.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.badgeCounter.countTotalReleased);
        }
      }

      var _c5 = function _c5() {
        return ["/asc/page/application/s1/lists"];
      };

      function LayoutComponent_ul_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Application List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LayoutComponent_ul_25_li_6_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_ul_25_li_7_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LayoutComponent_ul_25_li_8_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LayoutComponent_ul_25_li_9_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LayoutComponent_ul_25_li_10_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.badgeCounter.countTotalApplications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isApplicant || ctx_r1.isEvaluator || ctx_r1.isAdmin || ctx_r1.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isApplicant || ctx_r1.isEvaluator || ctx_r1.isAdmin || ctx_r1.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdSpecialist || ctx_r1.isScreener);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isReviewer || ctx_r1.isAdSpecialist || ctx_r1.isAdmin || ctx_r1.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdSpecialist || ctx_r1.isAdmin || ctx_r1.isSuperAdmin);
        }
      }

      var _c6 = function _c6() {
        return ["/asc/page/application/s2/special"];
      };

      function LayoutComponent_ul_33_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Special Clearing Request ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r19.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.applicationCountS2.countTotalSpecialClearingRequest);
        }
      }

      var _c7 = function _c7() {
        return ["/asc/page/application/s2/lists"];
      };

      function LayoutComponent_ul_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Application List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LayoutComponent_ul_33_li_6_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.applicationCountS2.countTotalApplications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isApplicant || ctx_r2.isAdmin || ctx_r2.isSuperAdmin);
        }
      }

      var _c8 = function _c8() {
        return ["/asc/page/accounting/payments"];
      };

      function LayoutComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_34_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.opened = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Payments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faHandHoldingUsd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.badgeCounter.countForPaymentAccounting || 0);
        }
      }

      function LayoutComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_35_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r22.hiddenVoucher = !ctx_r22.hiddenVoucher && (ctx_r22.openedVoucher = true);
            return ctx_r22.rotateCarretIcon("voucherState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vouchers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faMoneyBillWave);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r4.voucherState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faCaretDown);
        }
      }

      var _c9 = function _c9() {
        return ["/asc/page/accounting/voucher-enrollment"];
      };

      var _c10 = function _c10() {
        return ["/asc/page/accounting/voucher-replenishment"];
      };

      function LayoutComponent_ul_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voucher Enrollment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Voucher Replenishment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faCaretRight);
        }
      }

      var _c11 = function _c11() {
        return ["/asc/page/accounting/or-preparation"];
      };

      function LayoutComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_37_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.opened = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Official Receipt Preparation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faReceipt);
        }
      }

      var _c12 = function _c12() {
        return ["/asc/page/accounting/reports"];
      };

      function LayoutComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_38_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.opened = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faPrint);
        }
      }

      function LayoutComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_39_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r28.hidden3 = !ctx_r28.hidden3 && (ctx_r28.opened = true);
            return ctx_r28.rotateCarretIcon("feeState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "For Payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faHandHoldingUsd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r8.feeState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faCaretDown);
        }
      }

      var _c13 = function _c13() {
        return ["/asc/page/application/special-applications"];
      };

      function LayoutComponent_ul_40_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S2 Special Clearing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r30.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.s2SpecialCounter);
        }
      }

      var _c14 = function _c14() {
        return ["/asc/page/application/single-application"];
      };

      var _c15 = function _c15() {
        return ["/asc/page/application/multiple-applications"];
      };

      var _c16 = function _c16() {
        return ["/asc/page/application/accounts-payable"];
      };

      function LayoutComponent_ul_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Individual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LayoutComponent_ul_40_li_11_Template, 5, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Accounts Payable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.individualCounter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.multipleCounter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isApplicant || ctx_r9.isAdmin || ctx_r9.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.accountsPayableCounter);
        }
      }

      function LayoutComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_41_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r31.hidden1 = !ctx_r31.hidden1 && (ctx_r31.opened = true);
            return ctx_r31.rotateCarretIcon("accountState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.faUserCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r10.accountState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.faCaretDown);
        }
      }

      var _c17 = function _c17() {
        return ["/asc/page/maintenance/accounts"];
      };

      var _c18 = function _c18() {
        return ["/asc/page/account/user-role"];
      };

      function LayoutComponent_ul_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Accounts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c17));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.faCaretRight);
        }
      }

      function LayoutComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_43_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r33.hidden2 = !ctx_r33.hidden2 && (ctx_r33.opened = true);
            return ctx_r33.rotateCarretIcon("maintenanceState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.faTools);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r12.maintenanceState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.faCaretDown);
        }
      }

      var _c19 = function _c19() {
        return ["/asc/page/maintenance/announcement-content"];
      };

      function LayoutComponent_ul_44_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Announcement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c19));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r35.faCaretRight);
        }
      }

      var _c20 = function _c20() {
        return ["/asc/page/company/lists"];
      };

      function LayoutComponent_ul_44_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r36.faCaretRight);
        }
      }

      var _c21 = function _c21() {
        return ["/asc/page/maintenance/affiliation"];
      };

      function LayoutComponent_ul_44_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Membership Affiliation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r37.faCaretRight);
        }
      }

      var _c22 = function _c22() {
        return ["/asc/page/maintenance/login-image"];
      };

      function LayoutComponent_ul_44_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c22));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r38.faCaretRight);
        }
      }

      var _c23 = function _c23() {
        return ["/asc/page/maintenance/type-of-application"];
      };

      function LayoutComponent_ul_44_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type Of Application ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c23));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r39.faCaretRight);
        }
      }

      var _c24 = function _c24() {
        return ["/asc/page/maintenance/dialects"];
      };

      function LayoutComponent_ul_44_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dialect ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c24));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r40.faCaretRight);
        }
      }

      var _c25 = function _c25() {
        return ["/asc/page/maintenance/type-of-document"];
      };

      function LayoutComponent_ul_44_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c25));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r41.faCaretRight);
        }
      }

      var _c26 = function _c26() {
        return ["/asc/page/maintenance/type-of-main-documents"];
      };

      function LayoutComponent_ul_44_li_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Main Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c26));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r42.faCaretRight);
        }
      }

      var _c27 = function _c27() {
        return ["/asc/page/maintenance/document-size"];
      };

      function LayoutComponent_ul_44_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Main Document File Size ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c27));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r43.faCaretRight);
        }
      }

      var _c28 = function _c28() {
        return ["/asc/page/maintenance/email-notification"];
      };

      function LayoutComponent_ul_44_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email Notification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c28));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r44.faCaretRight);
        }
      }

      var _c29 = function _c29() {
        return ["/asc/page/maintenance/payment-type"];
      };

      function LayoutComponent_ul_44_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c29));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r45.faCaretRight);
        }
      }

      var _c30 = function _c30() {
        return ["/asc/page/maintenance/weekly-user-schedule"];
      };

      function LayoutComponent_ul_44_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Weekly User Schedule ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c30));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r46.faCaretRight);
        }
      }

      var _c31 = function _c31() {
        return ["/asc/page/maintenance/type-of-reason"];
      };

      function LayoutComponent_ul_44_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Reason ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c31));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r47.faCaretRight);
        }
      }

      var _c32 = "/asc/page/maintenance/number-of-multiple-application-allowed";

      var _c33 = function _c33() {
        return [_c32];
      };

      function LayoutComponent_ul_44_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of Multiple Application Allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c33));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r48.faCaretRight);
        }
      }

      var _c34 = function _c34() {
        return ["/asc/page/maintenance/type-of-rational"];
      };

      function LayoutComponent_ul_44_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type Of Rationale ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c34));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r49.faCaretRight);
        }
      }

      var _c35 = function _c35() {
        return ["/asc/page/maintenance/qr-and-bar-code-checker"];
      };

      function LayoutComponent_ul_44_li_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "QR and Barcode Checker ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c35));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r50.faCaretRight);
        }
      }

      var _c36 = function _c36() {
        return ["/asc/page/application/reassignment"];
      };

      function LayoutComponent_ul_44_li_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Application Reassignment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c36));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r51.faCaretRight);
        }
      }

      var _c37 = function _c37() {
        return ["/asc/page/maintenance/category"];
      };

      function LayoutComponent_ul_44_div_21_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Category ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c37));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r58.faCaretRight);
        }
      }

      var _c38 = function _c38() {
        return ["/asc/page/maintenance/brands"];
      };

      function LayoutComponent_ul_44_div_21_ul_7_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c38));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r59.faCaretRight);
        }
      }

      var _c39 = function _c39() {
        return ["/asc/page/maintenance/product"];
      };

      function LayoutComponent_ul_44_div_21_ul_7_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c39));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r60.faCaretRight);
        }
      }

      function LayoutComponent_ul_44_div_21_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_ul_44_div_21_ul_7_li_1_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutComponent_ul_44_div_21_ul_7_li_2_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LayoutComponent_ul_44_div_21_ul_7_li_3_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.isAdmin || ctx_r57.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.isAdmin || ctx_r57.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.isAdmin || ctx_r57.isSuperAdmin);
        }
      }

      function LayoutComponent_ul_44_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_ul_44_div_21_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r61.hidden5 = !ctx_r61.hidden5 && (ctx_r61.opened = true);
            return ctx_r61.rotateCarretIcon("s1ApplicationState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Category-Brand-Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_ul_44_div_21_ul_7_Template, 4, 3, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r52.isAccounting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r52.s1ApplicationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r52.faCaretDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.opened && ctx_r52.hidden5);
        }
      }

      var _c40 = function _c40() {
        return ["/asc/page/maintenance/type-of-medium"];
      };

      function LayoutComponent_ul_44_div_22_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Medium ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c40));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r64.faCaretRight);
        }
      }

      var _c41 = function _c41() {
        return ["/asc/page/maintenance/type-of-executions"];
      };

      function LayoutComponent_ul_44_div_22_ul_7_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Execution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c41));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r65.faCaretRight);
        }
      }

      var _c42 = "/asc/page/maintenance/medium-executions-controller";

      var _c43 = function _c43() {
        return [_c42];
      };

      function LayoutComponent_ul_44_div_22_ul_7_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Medium Execution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c43));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r66.faCaretRight);
        }
      }

      function LayoutComponent_ul_44_div_22_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_ul_44_div_22_ul_7_li_1_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutComponent_ul_44_div_22_ul_7_li_2_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LayoutComponent_ul_44_div_22_ul_7_li_3_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.isAdmin || ctx_r63.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.isAdmin || ctx_r63.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.isAdmin || ctx_r63.isSuperAdmin);
        }
      }

      function LayoutComponent_ul_44_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_ul_44_div_22_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r67.hidden6 = !ctx_r67.hidden6 && (ctx_r67.opened = true);
            return ctx_r67.rotateCarretIcon("s1ApplicationState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Medium & Execution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_ul_44_div_22_ul_7_Template, 4, 3, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r53.isAccounting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r53.s1ApplicationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r53.faCaretDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.opened && ctx_r53.hidden6);
        }
      }

      var _c44 = function _c44() {
        return ["/asc/page/maintenance/holidays"];
      };

      function LayoutComponent_ul_44_div_23_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Holiday ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c44));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r70.faCaretRight);
        }
      }

      var _c45 = function _c45() {
        return ["/asc/page/maintenance/s1-s2-expiration-periods"];
      };

      function LayoutComponent_ul_44_div_23_ul_7_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S1 and S2 Form Expiration Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c45));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r71.faCaretRight);
        }
      }

      var _c46 = function _c46() {
        return ["/asc/page/maintenance/s1-fees-settlement-period"];
      };

      function LayoutComponent_ul_44_div_23_ul_7_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S1 Form Schedule of Fees Settlement Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c46));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r72.faCaretRight);
        }
      }

      var _c47 = "/asc/page/maintenance/s1-incomplete-decision-expiration-period";

      var _c48 = function _c48() {
        return [_c47];
      };

      function LayoutComponent_ul_44_div_23_ul_7_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Incomplete Decision Expiration Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c48));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r73.faCaretRight);
        }
      }

      var _c49 = function _c49() {
        return ["/asc/page/maintenance/promissory-note-periods"];
      };

      function LayoutComponent_ul_44_div_23_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_ul_44_div_23_ul_7_li_1_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutComponent_ul_44_div_23_ul_7_li_2_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LayoutComponent_ul_44_div_23_ul_7_li_3_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LayoutComponent_ul_44_div_23_ul_7_li_4_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Promissory Note Period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.isAdmin || ctx_r69.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.isAdmin || ctx_r69.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.isAdmin || ctx_r69.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.isAdmin || ctx_r69.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c49));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r69.faCaretRight);
        }
      }

      function LayoutComponent_ul_44_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_ul_44_div_23_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r74.hidden8 = !ctx_r74.hidden8 && (ctx_r74.opened = true);
            return ctx_r74.rotateCarretIcon("s1ApplicationState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hours / Days Maintenance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_ul_44_div_23_ul_7_Template, 8, 7, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r54.isAccounting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r54.s1ApplicationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r54.faCaretDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.opened && ctx_r54.hidden8);
        }
      }

      var _c50 = function _c50() {
        return ["/asc/page/maintenance/brand-penalties"];
      };

      function LayoutComponent_ul_44_div_24_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brand Penalties ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c50));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r77.faCaretRight);
        }
      }

      var _c51 = function _c51() {
        return ["/asc/page/maintenance/company-penalties"];
      };

      function LayoutComponent_ul_44_div_24_ul_7_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Penalty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c51));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r78.faCaretRight);
        }
      }

      function LayoutComponent_ul_44_div_24_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_ul_44_div_24_ul_7_li_1_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutComponent_ul_44_div_24_ul_7_li_2_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.isAdmin || ctx_r76.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.isAdmin || ctx_r76.isSuperAdmin);
        }
      }

      function LayoutComponent_ul_44_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_ul_44_div_24_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r79.hidden9 = !ctx_r79.hidden9 && (ctx_r79.opened = true);
            return ctx_r79.rotateCarretIcon("s1ApplicationState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Penalties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_ul_44_div_24_ul_7_Template, 3, 2, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r55.isAccounting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r55.s1ApplicationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r55.faCaretDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.opened && ctx_r55.hidden9);
        }
      }

      var _c52 = function _c52() {
        return ["/asc/page/maintenance/asc-rates"];
      };

      var _c53 = function _c53() {
        return ["/asc/page/maintenance/asc-rates-special"];
      };

      function LayoutComponent_ul_44_ul_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maintenance of Fees (ASC Rates) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ASC Rates - Special ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c52));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r56.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c53));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r56.faCaretRight);
        }
      }

      var _c54 = function _c54() {
        return ["/asc/page/maintenance/screener-reviewer-pairs"];
      };

      function LayoutComponent_ul_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_ul_44_li_1_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutComponent_ul_44_li_2_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LayoutComponent_ul_44_li_3_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LayoutComponent_ul_44_li_4_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LayoutComponent_ul_44_li_5_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LayoutComponent_ul_44_li_6_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_ul_44_li_7_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LayoutComponent_ul_44_li_8_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LayoutComponent_ul_44_li_9_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LayoutComponent_ul_44_li_10_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LayoutComponent_ul_44_li_11_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LayoutComponent_ul_44_li_12_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LayoutComponent_ul_44_li_13_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LayoutComponent_ul_44_li_14_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LayoutComponent_ul_44_li_15_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Screener Reviewer Pairing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LayoutComponent_ul_44_li_19_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LayoutComponent_ul_44_li_20_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LayoutComponent_ul_44_div_21_Template, 8, 4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LayoutComponent_ul_44_div_22_Template, 8, 4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LayoutComponent_ul_44_div_23_Template, 8, 4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LayoutComponent_ul_44_div_24_Template, 8, 4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_ul_44_Template_div_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r81.hidden0 = !ctx_r81.hidden0 && (ctx_r81.opened = true);
            return ctx_r81.rotateCarretIcon("s1ApplicationState");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Rates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LayoutComponent_ul_44_ul_32_Template, 7, 6, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin || ctx_r13.isAccounting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c54));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r13.faCaretRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin || ctx_r13.isSuperAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx_r13.s1ApplicationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r13.faCaretDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.opened && ctx_r13.hidden0);
        }
      }

      var _c55 = [[["router-outlet"]]];

      var _c56 = function _c56() {
        return ["/asc/page/announcement"];
      };

      var _c57 = ["router-outlet"];

      var LayoutComponent = /*@__PURE__*/function () {
        var LayoutComponent = /*#__PURE__*/function () {
          function LayoutComponent(dataStorage, router, spinner, apiService, commonService, webSocketService) {
            var _this = this;

            _classCallCheck(this, LayoutComponent);

            this.dataStorage = dataStorage;
            this.router = router;
            this.spinner = spinner;
            this.apiService = apiService;
            this.commonService = commonService;
            this.webSocketService = webSocketService;
            this.opened = true;
            this.userRole = '';
            this.panelOpenState = false;
            this.faAlignJustify = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAlignJustify"];
            this.faChartLine = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartLine"];
            this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserCircle"];
            this.faTools = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTools"];
            this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"];
            this.faCaretRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretRight"];
            this.faLogout = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPowerOff"];
            this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCopy"];
            this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBuilding"];
            this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfoCircle"];
            this.faHandHoldingUsd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandHoldingUsd"];
            this.faReceipt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faReceipt"];
            this.faMoneyBillWave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoneyBillWave"];
            this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPrint"];
            this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileAlt"];
            this.faLayerGroup = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLayerGroup"];
            this.isSuperAdmin = false;
            this.isAdmin = false;
            this.isAccounting = false;
            this.isApplicant = false;
            this.isScreener = false;
            this.isReviewer = false;
            this.isAdSpecialist = false;
            this.isEvaluator = false;
            this.countTotalApplications = 0;
            this.countTotalMultipleApplications = 0;
            this.applicationCount = new app_core_models_application_count_model__WEBPACK_IMPORTED_MODULE_5__["ApplicationCount"]();
            this.applicationCountS2 = new app_core_models_applicationCountS2_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationCountS2"]();
            this.countTotalAssignedApplication = 0;
            this.s1ApplicationCountList = [];
            this.s2ApplicationCountList = []; // specialTabDataCount = 0;

            this.currentPage = 1;
            this.currentSize = 10;
            this.openedVoucher = false; // declared in HTML but not in component (feb 14 aot)

            this.hiddenVoucher = false; // declared in HTML but not in component (feb 14 aot)
            // state rotations

            this.s1ApplicationState = 'default';
            this.s2ApplicationState = 'default';
            this.maintenanceState = 'default';
            this.accountState = 'default';
            this.feeState = 'default';
            this.voucherState = 'default';
            this.badgeCounter = new app_core_models_counter__WEBPACK_IMPORTED_MODULE_6__["BadgeCounnter"]();
            this.individualCounter = 0;
            this.multipleCounter = 0;
            this.s2SpecialCounter = 0;
            this.accountsPayableCounter = 0;
            this.userRole = this.dataStorage.getUserRole();
            this.clickEventSubscription = this.commonService.getClickEvent().subscribe(function () {
              _this.getApplicationCountS1();

              _this.getApplicationCountS2();
            });
          }

          _createClass(LayoutComponent, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {// if(this.counterObservable){
              //   this.counterObservable.unsubscribe();
              // }
            }
          }, {
            key: "counter",
            value: function counter() {
              var _this2 = this;

              this.apiService.findByParam(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].applicationFormPresentor + this.currentUser.id, 'payment-status/FOR_PAYMENT/schedule-of-fees').subscribe(function (res) {
                _this2.individualCounter = res.responseData.data.length;
              });
              this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].applicationFormPresentor + "".concat(this.currentUser.id, "/multiple-application?paymentStatus=FOR_PAYMENT")).subscribe(function (res) {
                _this2.multipleCounter = res.responseData.data.length;
              });
              this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].scheduleOfFeesS2Special).subscribe(function (res) {
                _this2.s2SpecialCounter = res.length;
              });
              this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].scheduleOfFeesMonitoring + '?hasPromissoryNote=true').subscribe(function (res) {
                _this2.accountsPayableCounter = res.totalItems;
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this3 = this;

              this.webSocketService.listen("broadcast").subscribe(function (res) {
                _this3.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].badgeCountByAscUser + _this3.currentUser.id).subscribe(function (res) {
                  _this3.badgeCounter = res;

                  _this3.counter();
                }, function (err) {
                  console.log('Error:', err);
                });
              });
              this.spinnerMessageEmitter = 'LOADING ';
              this.initUserRole();
              this.currentUser = this.dataStorage.getUserAccount();
              this.counter();
              this.getApplicationCountS1();
              this.getApplicationCountS2();

              if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_APPLICANT) {
                this.voucherNavigationName = 'Voucher Fund';
              } else {
                this.voucherNavigationName = 'Company Voucher Fund';
              }
            }
          }, {
            key: "spinnerMessageReceived",
            value: function spinnerMessageReceived($message) {
              this.spinnerMessageEmitter = $message;
            }
          }, {
            key: "initUserRole",
            value: function initUserRole() {
              if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_SUPER_ADMIN) {
                this.isSuperAdmin = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_ADMIN) {
                this.isAdmin = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_ACCOUNTING) {
                this.isAccounting = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_APPLICANT) {
                this.isApplicant = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_SCREENER) {
                this.isScreener = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_REVIEWER) {
                this.isReviewer = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_AD_SPECIALIST) {
                this.isAdSpecialist = true;
              } else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_ENCODER) {
                this.isEvaluator = true;
              }
            }
          }, {
            key: "close",
            value: function close(param) {} // in html but not existing in component -- encountered during 'ng serve --aot'

          }, {
            key: "rotateCarretIcon",
            value: function rotateCarretIcon(e) {
              if (e === 's1ApplicationState') {
                this.s1ApplicationState = this.s1ApplicationState === 'default' ? 'rotated' : 'default';
              } else if (e === 's2ApplicationState') {
                this.s2ApplicationState = this.s2ApplicationState === 'default' ? 'rotated' : 'default';
              } else if (e === 'maintenanceState') {
                this.maintenanceState = this.maintenanceState === 'default' ? 'rotated' : 'default';
              } else if (e === 'accountState') {
                this.accountState = this.accountState === 'default' ? 'rotated' : 'default';
              } else if (e === 'feeState') {
                this.feeState = this.feeState === 'default' ? 'rotated' : 'default';
              } else if (e === 'voucherState') {
                this.voucherState = this.voucherState === 'default' ? 'rotated' : 'default';
              }
            }
          }, {
            key: "logout",
            value: function logout() {
              this.dataStorage.signOut();
              this.router.navigateByUrl('login');
            }
          }, {
            key: "spinnerShow",
            value: function spinnerShow() {
              this.spinner.show();
            }
          }, {
            key: "spinnerHide",
            value: function spinnerHide() {
              var _this4 = this;

              setTimeout(function () {
                _this4.spinner.hide();
              }, 1);
            }
          }, {
            key: "getApplicationCountS1",
            value: function getApplicationCountS1() {
              var _this5 = this;

              var endpoint;

              if (this.currentUser.userRole.name === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_APPLICANT) {
                endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].badgeCountByApplicationOwner;
              } else {
                endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].badgeCountByAscUser;
              }

              this.apiService.findAll(endpoint + this.currentUser.id).subscribe(function (res) {
                _this5.badgeCounter = res;
              }, function (err) {
                console.log('Error:', err);
              });
            }
          }, {
            key: "getApplicationCountS2",
            value: function getApplicationCountS2() {
              var _this6 = this;

              var endpoint;

              if (this.currentUser.userRole.name === _utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_APPLICANT) {
                endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].badgeCountByApplicationOwnerS2;
              } else {
                endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].badgeCountByAscUserS2;
              }

              this.apiService.findAll(endpoint + this.currentUser.id).subscribe(function (res) {
                _this6.applicationCountS2 = res;
              });
            }
          }, {
            key: "refreshBadgeCounter",
            value: function refreshBadgeCounter() {// this.getApplicationCountS1();
              // this.getApplicationCountS2();
              // const obs$ = interval(5000);
              // obs$.subscribe((d) => {
              //   this.getApplicationCountS1();
              //   this.getApplicationCountS2();
              // })
            }
          }]);

          return LayoutComponent;
        }();

        LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
          return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_common_services_service__WEBPACK_IMPORTED_MODULE_10__["CommonServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_socket_websocket_service__WEBPACK_IMPORTED_MODULE_11__["WebSocketService"]));
        };

        LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LayoutComponent,
          selectors: [["app-layout"]],
          inputs: {
            spinnerMessageEmitter: "spinnerMessageEmitter"
          },
          ngContentSelectors: _c57,
          decls: 68,
          vars: 36,
          consts: [[1, "spinner"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "large", "color", "#fff", "type", "line-spin-fade", 3, "fullScreen"], [1, "header", 3, "ngClass"], [3, "backdropClick"], ["mode", "side", 3, "opened", "openedChange"], ["sidenav", ""], [1, "side-nav"], [1, "user-role"], [1, "list-items"], [1, "list-item", 3, "hidden", "click"], [1, "list-icon", 3, "icon"], [3, "icon"], ["class", "nav-dropdown", 4, "ngIf"], ["class", "list-item", 3, "routerLink", "click", 4, "ngIf"], ["class", "list-item", 3, "click", 4, "ngIf"], [1, "list-item", 3, "routerLink"], [1, "list-icon", 3, "icon", "click"], [1, "list-item", 3, "click"], [1, "main-content"], ["matTooltip", "Toggle Sidenav", 1, "sidenav-icon", 3, "ngClass", "click"], [3, "ngClass"], [1, "footer", 3, "ngClass"], ["fixed", ""], [1, "nav-dropdown"], [3, "routerLink"], [1, "list-icon-li", 3, "icon"], [1, "badge", "rounded-pill", "bg-success"], [3, "routerLink", 4, "ngIf"], [1, "list-item", 3, "routerLink", "click"], [1, "badge", "rounded-pill", "bg-danger", "badge-accounting"], [4, "ngIf"]],
          template: function LayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c55);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-spinner", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function LayoutComponent_Template_mat_sidenav_container_backdropClick_7_listener() {
                return ctx.close("backdrop");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 4, 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function LayoutComponent_Template_mat_sidenav_openedChange_8_listener($event) {
                return ctx.opened = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "uppercase");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_18_listener() {
                ctx.hidden4 = !ctx.hidden4 && (ctx.opened = true);
                return ctx.rotateCarretIcon("s1ApplicationState");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S1 Applications");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LayoutComponent_ul_25_Template, 11, 9, "ul", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_26_listener() {
                ctx.hidden7 = !ctx.hidden7 && (ctx.opened = true);
                return ctx.rotateCarretIcon("s2ApplicationState");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "S2 Applications");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LayoutComponent_ul_33_Template, 7, 5, "ul", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LayoutComponent_div_34_Template, 5, 4, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LayoutComponent_div_35_Template, 7, 3, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LayoutComponent_ul_36_Template, 7, 6, "ul", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, LayoutComponent_div_37_Template, 4, 3, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LayoutComponent_div_38_Template, 4, 3, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LayoutComponent_div_39_Template, 7, 3, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, LayoutComponent_ul_40_Template, 17, 13, "ul", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, LayoutComponent_div_41_Template, 7, 3, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LayoutComponent_ul_42_Template, 7, 6, "ul", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, LayoutComponent_div_43_Template, 7, 3, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, LayoutComponent_ul_44_Template, 33, 27, "ul", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "fa-icon", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_fa_icon_click_46_listener() {
                return ctx.opened = true;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Announcement");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_52_listener() {
                return ctx.logout();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "fa-icon", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_fa_icon_click_53_listener() {
                return ctx.opened = true;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Logout");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-sidenav-content");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_58_listener() {
                return ctx.opened = !ctx.opened;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "fa-icon", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-footer", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var tmp_4_0 = null;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.spinnerMessageEmitter, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.opened == false ? "header__sidenav-opened" : "header__sidenav-closed");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 33, ctx.userRole == null ? null : (tmp_4_0 = ctx.userRole.replace("ENCODER", "EVALUATOR")) == null ? null : tmp_4_0.replaceAll("_", " ").replaceAll("ROLE ", "")));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isAccounting);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUserCircle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx.s1ApplicationState);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCaretDown);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened && ctx.hidden4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isAccounting || ctx.isScreener || ctx.isReviewer);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUserCircle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx.s2ApplicationState);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCaretDown);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened && ctx.hidden7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAccounting);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAccounting);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openedVoucher && ctx.hiddenVoucher);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAccounting);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAccounting || ctx.isAdmin || ctx.isSuperAdmin);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole == "ROLE_APPLICANT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened && ctx.hidden3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isSuperAdmin);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened && ctx.hidden1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isSuperAdmin || ctx.isAccounting);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened && ctx.hidden2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c56));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInfoCircle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLogout);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.opened == true ? "sidenav-opened" : "sidenav-closed");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAlignJustify);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.opened == true ? "sidenav-content-opened" : "sidenav-content-closed");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.opened == false ? "footer__sidenav-opened" : "footer__sidenav-closed");
            }
          },
          styles: ["mat-sidenav[_ngcontent-%COMP%] {\n  width: 290px;\n  background-color: #cee6ff;\n  position: fixed;\n  padding-top: 7em;\n}\n\n.user-role[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  padding-top: 1em;\n  text-align: center;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  max-height: 80vh;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  background: #dfdfdf;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  height: 87.5vh;\n  max-height: 87.5vh;\n  z-index: 1;\n  overflow-x: hidden;\n}\n\n.badge-accounting[_ngcontent-%COMP%] {\n  left: 85% !important;\n  width: 1.5rem !important;\n  height: 1rem !important;\n  margin-top: 0.1rem !important;\n  padding: 0.2rem !important;\n  text-align: center !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.header__sidenav-opened[_ngcontent-%COMP%], .header__sidenav-closed[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sidenav-content-opened[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sidenav-content-closed[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n\n.footer__sidenav-opened[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer__sidenav-closed[_ngcontent-%COMP%] {\n  width: calc(100% - 300px);\n}\n\n.sidenav-closed[_ngcontent-%COMP%] {\n  margin-left: 4em;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  transition: 100ms;\n  z-index: 2;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  transition: 100ms;\n  z-index: 2;\n}\n\n.user-role[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n\n  .mat-drawer-inner-container {\n  overflow: auto !important;\n}\n\n  ::-webkit-scrollbar {\n  width: 1em;\n}\n\n  ::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n  ::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  border-radius: 10px;\n}\n\n  ::-webkit-scrollbar-thumb:hover {\n  background: #8c8b8b;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened) {\n  transform: translate3d(0, 0, 0) !important;\n  visibility: visible !important;\n  width: 57px !important;\n  overflow: auto;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .asc-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .asc-logo-small[_ngcontent-%COMP%] {\n  padding: 20px 5px 0px 10px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .asc-logo-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .asc-logo-small[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .user-role[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   hr[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   p[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  vertical-align: middle;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .list-icon-li[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened)   .list-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 300px;\n  box-shadow: 10px 2px 28px -8px rgba(0, 0, 0, 0.32);\n  -webkit-box-shadow: 10px 2px 28px -8px rgba(0, 0, 0, 0.32);\n  -moz-box-shadow: 10px 2px 28px -8px rgba(0, 0, 0, 0.32);\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a10000;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 1000;\n  border-radius: 0px 5px 5px 0px;\n  background-color: #c5140c;\n  color: white;\n  border-color: rgba(255, 255, 255, 0);\n  padding: 5px 10px 5px 7px;\n  position: fixed;\n  top: 6.7em;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 600ms;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: auto !important;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: rgba(116, 0, 0, 0.445);\n  width: 100%;\n  height: 2px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  color: #770000;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 10px 20px;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 90%;\n  text-align: end;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: #7a1821;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:focus {\n  transition: 1000ms;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover {\n  color: red;\n  cursor: pointer;\n  background-color: rgba(255, 166, 0, 0.062);\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 5px;\n  background-color: #ca0000;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.1s, opacity 0.5s;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: scaleY(1);\n  transition: 0.2s;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 0, 0, 0.137);\n  border-left: 5px solid #740000;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:focus   .list-icon[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  font-size: 20px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  color: #ca0000;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   .list-icon-li[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  margin-left: -20px;\n  color: #ca0000;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 0px 10px 70px;\n  width: 100%;\n  color: #770000;\n  font-weight: 500;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 10px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  width: auto;\n  font-size: 10px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 166, 0, 0.062);\n  border-left: #ca0000 solid 2px;\n  color: red;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 0, 0, 0.137);\n  border-color: #f80202;\n  transition: 1000ms;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus   .list-icon-li[_ngcontent-%COMP%] {\n  color: #b94a00;\n}\n\n.list-item-2[_ngcontent-%COMP%] {\n  border: solid 2px #7a1821;\n  border-radius: 5px;\n  background-color: #e0e0e0;\n}\n\n.list-item-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: start;\n  color: #7a1821;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n.list-item-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: #7a1821;\n}\n\n@media only screen and (max-width: 600px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 2em;\n    text-align: center;\n  }\n\n  a[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n    padding: 10px 15px 10px 12px !important;\n    position: fixed !important;\n    top: 80vh !important;\n    right: 5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLE1BQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtBQURKOztBQUlFO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7QUFKSjs7QUFhRTtFQUNFLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFWSjs7QUFZSTtFQUNFLGFBQUE7QUFWTjs7QUFhSTtFQUtFLDBCQUFBO0FBZk47O0FBV007RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVRSOztBQWNJO0VBQ0UsZUFBQTtBQVpOOztBQWVJO0VBQ0UsYUFBQTtBQWJOOztBQWdCSTtFQUNFLGFBQUE7QUFkTjs7QUFpQkk7RUFDRSxhQUFBO0FBZk47O0FBcUJNO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQW5CUjs7QUF1Qkk7RUFDRSxhQUFBO0FBckJOOztBQXdCSTtFQUNFLGVBQUE7QUF0Qk47O0FBaUNFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSwwREFBQTtFQUNBLHVEQUFBO0FBL0JKOztBQWtDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBaENOOztBQWtDTTtFQUNFLGNBQUE7QUFoQ1I7O0FBd0NJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdENOOztBQXlDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXZDTjs7QUEyQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBekNKOztBQTZDTTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUEzQ1I7O0FBNkNNO0VBV0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXJEUjs7QUFzQ1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBcENWOztBQXFDVTtFQUNFLGNBQUE7QUFuQ1o7O0FBZ0RNO0VBQ0Usa0JBQUE7QUE5Q1I7O0FBaURNO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQS9DUjs7QUFrRE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBQWhEUjs7QUFtRE07RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWpEUjs7QUFvRE07RUFDRSx3Q0FBQTtFQUNBLDhCQUFBO0FBbERSOztBQW9EUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWxEVjs7QUEwRE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0FBeERSOztBQTRETTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQTFEUjs7QUFpRU07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQS9EUjs7QUFrRU07RUFDRSx1QkFBQTtBQWhFUjs7QUFrRVE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBaEVWOztBQWtFVTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQWpFWjs7QUFtRVU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0FBbEVaOztBQXNFUTtFQUNFLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBcEVWOztBQXVFUTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXJFVjs7QUF1RVU7RUFDRSxjQUFBO0FBckVaOztBQXNGQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQW5GQTs7QUFzRkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFwRk47O0FBc0ZJO0VBQ0UsY0FBQTtBQXBGTjs7QUE0RkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUF6RkY7O0VBNEZFO0lBQ0UsOEJBQUE7SUFDQSx1Q0FBQTtJQUNBLDBCQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0VBekZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZy10b3A6IDdlbTtcclxufVxyXG5cclxuLnVzZXItcm9sZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaHIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGhlaWdodDogODcuNXZoO1xyXG4gIG1heC1oZWlnaHQ6IDg3LjV2aDtcclxuICB6LWluZGV4OiAxO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhZGdlLWFjY291bnRpbmcge1xyXG4gIGxlZnQ6IDg1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwLjFyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjJyZW0gIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3NpZGVuYXYtb3BlbmVkLCAuaGVhZGVyX19zaWRlbmF2LWNsb3NlZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYtY29udGVudC1vcGVuZWR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQtY2xvc2Vke1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19zaWRlbmF2LW9wZW5lZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3Rlcl9fc2lkZW5hdi1jbG9zZWR7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxufVxyXG5cclxuLnNpZGVuYXYtY2xvc2Vke1xyXG4gIG1hcmdpbi1sZWZ0OiA0ZW07XHJcbn1cclxuXHJcblxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgei1pbmRleDogMiA7XHJcbn1cclxuLmZvb3RlcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgei1pbmRleDogMiA7XHJcbn1cclxuXHJcbi51c2VyLXJvbGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzhjOGI4YjtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAvLyBmb3IgbWF0LWRyYXdlci1jbG9zZVxyXG4gIG1hdC1zaWRlbmF2Om5vdCgubWF0LWRyYXdlci1vcGVuZWQpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAuYXNjLWxvZ297XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFzYy1sb2dvLXNtYWxse1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNXB4IDBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hc2MtbG9nby1zbWFsbDpob3ZlcntcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXJvbGV7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaHJ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1pdGVtc3tcclxuXHJcblxyXG4gICAgICAubGlzdC1pdGVte1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWljb24tbGl7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtaWNvbntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvLyBFbmQgZm9yIG1hdC1kcmF3ZXItY2xvc2VcclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDJweCAyOHB4IC04cHggcmdiYSgwLDAsMCwwLjMyKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAycHggMjhweCAtOHB4IHJnYmEoMCwwLDAsMC4zMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMnB4IDI4cHggLThweCByZ2JhKDAsMCwwLDAuMzIpO1xyXG5cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDE2MSwgMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBtYXQtc2lkZW5hdi1jb250ZW50IHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAyMCwgMTIpO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiA2LjdlbTtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiA2MDBtcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWRlLW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmxpc3QtaXRlbXMge1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDExNiwgMCwgMCwgMC40NDUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWl0ZW0ge1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzdhMTgyMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICBjb2xvcjogcmdiKDExOSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtOmZvY3VzIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxMDAwbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC4wNjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAwLCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzLCBvcGFjaXR5IDAuNXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0LWl0ZW06aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xMzcpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDExNiwgMCwgMCk7XHJcblxyXG4gICAgICAgIC5saXN0LWljb24ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5saXN0LWl0ZW06Zm9jdXM6aG92ZXIge1xyXG4gICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5saXN0LWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMDIsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyAmLmxpc3QtaWNvbjpob3ZlciB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pY29uLWxpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDIwMiwgMCwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggNzBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMTksIDAsIDApO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICBzcGFueyAvL2ZvciBiYWRnZSBjb3VudGVyXHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFkZ2V7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuMDYyKTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiByZ2IoMjAyLCAwLCAwKSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaTpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xMzcpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ4LCAyLCAyKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDEwMDBtcztcclxuXHJcbiAgICAgICAgICAubGlzdC1pY29uLWxpIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxODUsIDc0LCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBsaTpmb2N1czpob3ZlciB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1pdGVtLTIge1xyXG5ib3JkZXI6IHNvbGlkIDJweCAjN2ExODIxO1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgc3BhbiB7XHJcbiAgIFxyXG4gICAgcHtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGNvbG9yOiAjN2ExODIxO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6ICM3YTE4MjE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IDgwdmggIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDV2dztcclxuICAgIH1cclxufSJdfQ== */"],
          data: {
            animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'rotate(0)'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
              transform: 'rotate(-180deg)',
              color: 'rgb(58, 238, 58)',
              fontSize: '20px'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))])]
          }
        });
        return LayoutComponent;
      }();
      /***/

    },

    /***/
    1:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "4nSt":
    /*!********************************************************************!*\
      !*** ./src/app/core/services/alert-message/sweet-alert.service.ts ***!
      \********************************************************************/

    /*! exports provided: SweetAlertService */

    /***/
    function nSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SweetAlertService", function () {
        return SweetAlertService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _socket_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../socket/websocket.service */
      "B1bq");

      var SweetAlertService = /*@__PURE__*/function () {
        var SweetAlertService = /*#__PURE__*/function () {
          function SweetAlertService(webSocketService) {
            _classCallCheck(this, SweetAlertService);

            this.webSocketService = webSocketService;
          }

          _createClass(SweetAlertService, [{
            key: "success",
            value: function success(res) {
              var displayTimeInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'success',
                title: res.responseMessage ? res.responseMessage : res.message,
                timer: displayTimeInSeconds * 1000,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false
              });
              this.webSocketService.emit("broadcast", res);
            }
          }, {
            key: "error",
            value: function error(err) {
              var displayTimeInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: err.error.message ? err.error.message : err.error.responseMessage,
                timer: displayTimeInSeconds * 1000,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false
              });
            }
          }, {
            key: "customErrorMessage",
            value: function customErrorMessage(errorMessage) {
              var displayTimeInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: errorMessage,
                timer: displayTimeInSeconds * 1000,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false
              });
            }
          }, {
            key: "customSuccessMessage",
            value: function customSuccessMessage(successMessage) {
              var displayTimeInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'success',
                title: successMessage,
                timer: displayTimeInSeconds * 1000,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false
              });
              this.webSocketService.emit("broadcast", successMessage);
            }
          }, {
            key: "sweetAlertMessage",
            value: function sweetAlertMessage(iconParam, titleParam, message) {
              var displayTimeInSeconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
              // icons: success, warning, error, question, info
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: iconParam,
                title: titleParam,
                text: message,
                allowOutsideClick: true
              });
            }
          }]);

          return SweetAlertService;
        }();

        SweetAlertService.ɵfac = function SweetAlertService_Factory(t) {
          return new (t || SweetAlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]));
        };

        SweetAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: SweetAlertService,
          factory: SweetAlertService.ɵfac,
          providedIn: 'root'
        });
        return SweetAlertService;
      }();
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
    "9Vv1":
    /*!*******************************************!*\
      !*** ./src/app/shared/utils/constants.ts ***!
      \*******************************************/

    /*! exports provided: ENV, ENDPOINTS, COMMON_FUNCTION, URL_PATHS, SUCCESS_MESSAGES, ERROR_MESSAGES, APPLICATION_STATUS, APPLICATION_STATUS_FOR_COMPLIANCE, APPLICATION_STATUS_REVISION, OTHER_STATUS, APPLICATION_STATUS_S2, FOR_CLEARANCE_STATUS, TYPE_OF_MEDIUM, FORM_STATUS, ATTACHMENT_TYPE, APPFORM_TYPE, SUBMISSION_TYPE, ACTION_STATUS, PAYMENT_STATUS, USER_ROLES, USER_ROLE_LIST, PAYMENT_TYPE, APP_DECISION_STATUS, PAYMENT_TYPE_LIST, PAYMENT_STATUS_LIST, STATUSES, ROLES, ROLE_LIST, APPLICATION_STATUSES, FORM_TYPE, COMMENT_TYPE, DECISION_STATUS, SPECIAL_APPLICATION, APPLICATION_STAGE, YES_NO_OPTION, HOLIDAY_TYPE, ACCOUNT_TYPE, PAYMENT_MODE, MULTIMEDIA_MOVING, MULTIMEDIA_STATIC, REPORT_TYPE */

    /***/
    function Vv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENV", function () {
        return ENV;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function () {
        return ENDPOINTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMON_FUNCTION", function () {
        return COMMON_FUNCTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL_PATHS", function () {
        return URL_PATHS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SUCCESS_MESSAGES", function () {
        return SUCCESS_MESSAGES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function () {
        return ERROR_MESSAGES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS", function () {
        return APPLICATION_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_FOR_COMPLIANCE", function () {
        return APPLICATION_STATUS_FOR_COMPLIANCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_REVISION", function () {
        return APPLICATION_STATUS_REVISION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OTHER_STATUS", function () {
        return OTHER_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_S2", function () {
        return APPLICATION_STATUS_S2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOR_CLEARANCE_STATUS", function () {
        return FOR_CLEARANCE_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TYPE_OF_MEDIUM", function () {
        return TYPE_OF_MEDIUM;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FORM_STATUS", function () {
        return FORM_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE", function () {
        return ATTACHMENT_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPFORM_TYPE", function () {
        return APPFORM_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SUBMISSION_TYPE", function () {
        return SUBMISSION_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ACTION_STATUS", function () {
        return ACTION_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS", function () {
        return PAYMENT_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_ROLES", function () {
        return USER_ROLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_ROLE_LIST", function () {
        return USER_ROLE_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE", function () {
        return PAYMENT_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APP_DECISION_STATUS", function () {
        return APP_DECISION_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE_LIST", function () {
        return PAYMENT_TYPE_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_LIST", function () {
        return PAYMENT_STATUS_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STATUSES", function () {
        return STATUSES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROLES", function () {
        return ROLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROLE_LIST", function () {
        return ROLE_LIST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUSES", function () {
        return APPLICATION_STATUSES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FORM_TYPE", function () {
        return FORM_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMENT_TYPE", function () {
        return COMMENT_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DECISION_STATUS", function () {
        return DECISION_STATUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPECIAL_APPLICATION", function () {
        return SPECIAL_APPLICATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STAGE", function () {
        return APPLICATION_STAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YES_NO_OPTION", function () {
        return YES_NO_OPTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOLIDAY_TYPE", function () {
        return HOLIDAY_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ACCOUNT_TYPE", function () {
        return ACCOUNT_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE", function () {
        return PAYMENT_MODE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_MOVING", function () {
        return MULTIMEDIA_MOVING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_STATIC", function () {
        return MULTIMEDIA_STATIC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REPORT_TYPE", function () {
        return REPORT_TYPE;
      });
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      "AytR");

      var ENV = {
        currentEnv: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].environment
      };
      var ENDPOINTS = {
        api: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API,
        authentication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "authentication",
        // Type of Medium
        typeOfMedium: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums",
        typeOfMediumSingleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums/single-media",
        typeOfMediumMultiMediaMoving: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums/multi-media-moving",
        typeOfMediumMultiMediaStatic: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums/multi-media-static",
        singleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "single-media",
        multimediaTypes: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multimedia-types",
        applicationMultimedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-multimedia",
        applicationSingleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-single-media",
        mediumExecutionController: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-medium-executions",
        affiliation: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "members-affiliations",
        activeMembersAffiliation: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "members-affiliations/active",
        brand: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brands",
        approveBrand: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brands/approve",
        activeBrands: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brands/active",
        brandPenalties: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brand-penalties",
        product: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "products",
        productsByBrand: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "products/brand-id/",
        category: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "categories",
        categoriesByProduct: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "categories/category-id/",
        company: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "companies",
        approveCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "companies/approve",
        activeCompanies: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "companies/active",
        companyPenalties: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "company-penalties",
        typeOfReason: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-reason",
        rationale: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale",
        typeOfDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-documentation",
        applicationType: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-types",
        comment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "comment",
        commentS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "comment-s2",
        copyClaims: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "copy-claims",
        countries: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "countries",
        typeOfApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-types",
        holidays: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "holidays",
        dialects: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "dialects",
        screenerReviewerPairs: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "screener-reviewer-pairs",
        emailNotification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "email-notification",
        typeOfRationale: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-rationale",
        typeOfRationaleS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale-s2",
        noOfMultipleApplicationAllowed: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "number-of-multiple-applications-allowed",
        typeOfExecutions: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-executions",
        typeOfExecutionsByMedium: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-medium-executions/type-of-medium/",
        typeOfMainDocuments: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-main-documents",
        typeOfClearance: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-clearance",
        uploadingDocumentFileSize: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "uploding-document-file-size",
        announcements: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "announcements",
        activeAnnouncements: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "announcements/custom/search?page=1&size=1000&status=ACTIVE",
        s1AndS2FormExpirationPeriods: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "s1-s2-expiration-periods",
        s1FeesSettlementPeriod: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "s1-fees-settlement-period",
        s1IncompleteDecisionExpirationPeriod: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "s1-incomplete-decision-expiration-period",
        promissoryNotePeriods: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "promissory-note-periods",
        attachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents",
        attachmentDocumentByAppFormReference: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/app-form-reference/",
        attachmentDocumentByS2AppFormReference: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/s2/app-form-reference/",
        finalMeterialAttachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/final-material-attachment-reference",
        brandPenaltyAttachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/brand-penalty-attachment-reference",
        paymentAttachmentReference: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/payment-attachment-reference",
        downloadAttachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-files/image",
        supportiveDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "supporting-documents",
        payment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment",
        paymentMultiple: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment-multiple",
        paymentSpecial: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/payment-special-clearing-details/application-s2-id/",
        takeApplication: "take-application",
        paymentType: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment-types",
        paymentDetailsAccounting: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/payment-details/application-form-id/",
        paymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/payment-details/application-form-id/",
        individualScheduleOfFeesPaymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment/payment-details/application-form-id",
        multiplePaymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment-multiple/payment-multiple-details/multiple-application-id/",
        specialPaymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/payment-special-clearing-details/application-form-s2-id/",
        signature: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "signatures",
        admin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin",
        adminResendVerificationCode: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/resend/username",
        applicationReassignment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/application-form/reassignment",
        s2ApplicationReassignment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/application-form/reassignment",
        performanceMetrics: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "performance-metrics/app-form-reference",
        s1QrCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/code/check?code=",
        s2QrCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/code/check?code=",
        modifyApprovedS1ApplicationFormSingleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/modify-approved-s1-form-single-media?applicationFormId",
        modifyApprovedS1ApplicationFormMultimedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/modify-approved-s1-form-multimedia?applicationFormId",
        // S1 application
        applicationForm: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form",
        s1Application: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/",
        s1ApplicationForm: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/",
        applicationFormAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-form/",
        applicationFormPresentor: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/presentor/",
        applicationFormEncoder: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/",
        applicationFormAdSpecialist: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/",
        applicationFormScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/",
        applicationFormReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/",
        applicationFormCompliance: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/compliance/",
        ascRates: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "asc-rates",
        validateAscRates: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "asc-rates/validate/asc-rates",
        ascRatesSpecial: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "asc-rates-for-special-application",
        submitDecisionAndCommentScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/decision-comment/submit",
        submitDecisionAndCommentReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/decision-comment/submit",
        stampedMaterialAndDecisionForms: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "stamp-material-and-decision-forms/app-form-reference",
        getAllForReviewerAndScreenerDecisionAndComment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/for-decision-comment/reviewer-screener",
        getAllReturnedApplicationsForAdspe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/get-returned-apps",
        getAllScreenerReturnedApps: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/get-screener-returned-apps",
        getAllAdSpeReturnedApps: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/get-adspe-returned-apps",
        // Release and for release application
        getForReleaseApplicationsReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/applications/for-release",
        getReleaseApplicationsAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/release/application-form",
        getForReleaseApplicationAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/applications/for-release",
        getAdminSuperAdminForReleaseApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-form",
        // Manual Sending decision or stamped material
        s1ManualRelease: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/manual/release",
        s2ManualRelease: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/manual/release",
        // Application Request
        applicationRequests: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-requests",
        s1SpecialApplicationRequests: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/presentor/application-request/special",
        s1SpecialApplicationRequestsAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-request/special",
        s2SpecialClearingApplicationRequests: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/application-request/special-clearing",
        s2SpecialClearingApplicationRequestsAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/application-request/special-clearing",
        // Multiple Application
        multipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications",
        pendingMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications/for-approval",
        getMultipleApplicationByASCUser: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications/get-multiple-application-by-asc-user",
        getMultipleAppForms: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications/get/application-forms/multiple-application/group-id/",
        getMultipleAppFormsWithNoRejected: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications/get/no-rejected/application-forms/multiple-application/group-id/",
        reAssignScreenerForMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/multiple-application/re-assignment",
        reAssignReviewerForMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-screener/multiple-application/re-assignment",
        multipleApplicationReturnToAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/multiple-application/group-id/",
        multipleApplicationReturnToScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/multiple-application/group-id/",
        forwardMultipleAppFormToAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/forward-multiple-app-form",
        forwardMultipleAppFormToScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/forward-multiple-app-form",
        forwardMultipleAppFormToReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/forward-multiple-app-form",
        releaseMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/multiple-application/group-id/",
        // S2 application
        applicationFormS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form-s2",
        s2Application: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form-s2/",
        s2ApplicationForm: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/",
        s2ApplicationFormAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/application-form/",
        s2ApplicationFormPresentor: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/",
        s2ApplicationFormPresentorSave: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/save",
        s2ApplicationFormPresentorSubmit: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/submit/",
        s2ApplicationFormEncoder: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/",
        s2ApplicationFormEncoderList: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/applications",
        s2ApplicationFormEncoderVerify: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/verify",
        s2ApplicationFormAdSpeList: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/ad-specialist/applications",
        s2ApplicationFormAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/ad-specialist/",
        clearanceAndToa: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "clearance-and-toa-forms/app-form-reference",
        // TOA
        TOAApplicationFormPresentorSave: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/toa/presentor/save",
        TOAApplicationFormPresentorSubmit: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/toa/presentor/submit",
        // application request
        s2SpecialApplicationRequest: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-request/special",
        s1SpecialApplicationRequest: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/presentor/application-request/special",
        // Rejection
        s1ApplicationFormEncoderReject: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/reject/original",
        s1ApplicationFormEncoderRejectRevision: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/reject/revision",
        s1ApplicationFormEncoderRejectCompliance: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/reject/compliance",
        s2ApplicationFormEncoderReject: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/reject",
        s1ReasonOfRejection: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rejections/save/batch",
        s2ReasonOfRejection: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-s2-rejections/save/batch",
        // Rationale
        applicationRationale: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale",
        applicationRationaleS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale-s2",
        rationaleList: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale-list",
        rationaleListS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-s2-rationale-list",
        // account api
        roles: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "user-roles",
        addUserAccount: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/client-registration",
        updateUserAccount: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/profile",
        updatePassword: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/update-password",
        userAccount: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts",
        userPerRole: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/role/id/",
        userAccountType: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/account-type",
        userLogin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/username",
        existsByUsername: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/validate/username/",
        getPendingAccounts: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/pending",
        emailApproved: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/approve-account",
        accountVerification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/account-verification",
        forgotPassword: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/request/forgot-password/email",
        forgotPasswordVerification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/forgot-password-verification",
        newPasswordVerification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/verification-code",
        // email
        sendEmail: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "emails/send-verification",
        // Image
        loginImage: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "login-images",
        // global api
        regions: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "regions",
        provinces: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "provinces",
        cityMunicipalities: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "city-municipalities",
        barangays: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "barangays",
        // accounting
        scheduleOfFeesMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/monitoring",
        accountingPaymentApprove: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/approve",
        accountingPaymentForApprovals: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/for-approval",
        accountingRecompute: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/recompute",
        accountingReject: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/reject",
        officialReceipt: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "official-receipt",
        orPreparation: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/official-receipt",
        orPreparationRefCodeCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/official-receipt-paid/reference-code",
        orPreparationORNumberCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/official-receipt-in-used/official-receipt-no",
        availableReferenceCode: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/available/reference-code",
        availableReferenceCodeByCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "official-receipt/available/reference-code/company-id",
        paymentDetailsByAppformId: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment/application-form-id",
        scheduleOfFeesMultipleMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/multiple-appication/monitoring",
        paymentMultipleMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/monitoring",
        accountingMultiplePaymentApprove: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/approve",
        accountingMultiplePaymentForApprovals: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/for-approval",
        accountingRecomputeMultiple: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/recompute",
        accountingRejectMultiple: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/reject",
        scheduleOfFeesS2Special: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/special-clearing/for-payment",
        scheduleOfFeesSpecialMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/special-clearing/monitoring",
        accountingSpecialPaymentApprove: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-special-clearing/approve",
        accountingSpecialPaymentRecompute: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-special-clearing/recompute",
        accountingRejectSpecial: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-special-clearing/reject",
        accountingVoucherFundTransfer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/transfer",
        voucherFundForApproval: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/for-approval",
        voucherFundEnrollment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/enrollment",
        approveVocher: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/approve",
        voucherFundTransfer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "voucher-fund/transfer",
        voucherFundPayment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "vouchers/fund/",
        voucherMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/monitoring",
        voucher: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "vouchers",
        voucherReplenishmentsByCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "vouchers-fund-replenishment/company/id/",
        voucherAttachment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/voucher-attachment-reference",
        voucherSignatories: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "voucher-signatories",
        brandPenaltyForApproval: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-brand/for-approval",
        approveBrandPenalty: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-brand/payment/approve",
        penalizedBrandMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-brand/monitoring",
        // delinquentApplications: env.ASC_API + 'accounting/delinquent-applications',
        delinquentApplications: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/delinquent-applications",
        delinquentCompanies: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/delinquent-companies",
        approveDelinquentCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/delinquent-app-form/payment/approve",
        getAppFormsByCompanyId: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/delinquent/company/",
        penalizedCompanyMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-company/monitoring",
        // reports
        generateReports: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "reports/generate",
        validateReportsCollection: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "reports/collection-report",
        // Badge
        badgeCountByApplicationOwner: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/application-owner-id/",
        badgeCountByAscUser: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/account-id/",
        badgeCountByApplicationOwnerS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/s2/application-owner-id/",
        badgeCountByAscUserS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/s2/account-id/",
        // weekly calendar maintenance
        weeklyUserScheduleCustomSearch: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "weekly-user-schedule/custom/search",
        weeklyUserSchedule: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "weekly-user-schedule",
        weeklyScheduledUsers: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "weekly-scheduled-users"
      };
      var COMMON_FUNCTION = {
        SAVE: "save",
        UPDATE: "update",
        SUBMIT: "submit",
        SEARCH: "search",
        BATCH: "batch",
        APPLICATIONS: "applications",
        ACCEPT: "accept",
        REJECT: "reject",
        VERIFY: "verify",
        SCREEN: "screen",
        CANCEL: "cancel",
        DISAPPROVED: "disapproved",
        ACTIVE: "ACTIVE",
        INACTIVE: "INACTIVE",
        FOR_APPROVAL: "FOR_APPROVAL",
        APPROVED: "APPROVED"
      };
      var URL_PATHS = {
        LOGIN: "login",
        ASC: "asc",
        DASHBOARD: "dashboard",
        ANNOUNCEMENT: "announcement",
        // company
        COMPANY: "company",
        LIST_COMPANY: "lists",
        ADD_COMPANY: "add",
        UPDATE_COMPANY: "update",
        // applications
        APPLICATION: "application",
        S1_APPLICATION: "s1",
        S2_APPLICATION: "s2",
        APPLICATION_REASSIGNMENT: "reassignment",
        LIST_APPLICATION: "lists",
        LIST_MULTIPLE_APPLICATION: "multiple",
        LIST_SPECIAL_APPLICATION: "special",
        LIST_ASSIGNED_APPLICATION: "assigned-applications",
        LIST_FOR_RELEASE_APPLICATION: "for-release",
        RELEASED_APPLICATION: "released",
        ADD_APPLICATION: "add",
        UPDATE_APPLICATION: "update",
        ADD_MULTIPLE: "add/multiple",
        SCHEDULE_OF_FEES_SINGLE_APPLICATION: "single-application",
        SCHEDULE_OF_FEES_MULTIPLE_APPLICATIONS: "multiple-applications",
        SCHEDULE_OF_FEES_SPECIAL_APPLICATIONS: "special-applications",
        ACCOUNTS_PAYABLE: "accounts-payable",
        ACCOUNTS_RECEIVABLE: "accounts-receivable",
        // maintenance
        MAINTENANCE: "maintenance",
        BRANDS: "brands",
        TYPE_OF_REASON: "type-of-reason",
        TYPE_OF_MEDIUM: "type-of-medium",
        AFFILIATION: "affiliation",
        PAYMENT_TYPE: "payment-type",
        TYPE_OF_DOCUMENT: "type-of-document",
        CATEGORY: "category",
        PRODUCT: "product",
        TYPE_OF_APPLICATION: "type-of-application",
        ASC_RATES: "asc-rates",
        ASC_RATES_SPECIAL: "asc-rates-special",
        HOLIDAYS: "holidays",
        DIALECTS: "dialects",
        SCREENER_REVIEWER_PAIRS: "screener-reviewer-pairs",
        EMAIL_NOTIFICATION: "email-notification",
        TYPE_OF_EXECUTIONS: "type-of-executions",
        TYPE_OF_MAIN_DOCUMENTS: "type-of-main-documents",
        DOCUMENTS_SIZE: "document-size",
        ANNOUNCEMENT_CONTENT: "announcement-content",
        S1_S2_EXPIRATION_PERIODS: "s1-s2-expiration-periods",
        S1_FEES_SETTLEMENT_PERIOD: "s1-fees-settlement-period",
        S1_INCOMPLETE_DECISION_EXPIRATION_PERIOD: "s1-incomplete-decision-expiration-period",
        PROMISSORY_NOTE_PERIODS: "promissory-note-periods",
        QR_AND_BAR_CODE_CHECKER: "qr-and-bar-code-checker",
        NUMBER_OF_MULTIPLE_APPLICATION_ALLOWED: "number-of-multiple-application-allowed",
        BRAND_PENALTIES: "brand-penalties",
        COMPANY_PENALTIES: "company-penalties",
        TYPE_OF_RATIONAL: "type-of-rational",
        USER_ACCOUNT: "accounts",
        MEDIUM_EXECUTIONS_CONTROLLER: "medium-executions-controller",
        LOGIN_IMAGE: "login-image",
        WEEKLY_USER_SCHEDULE: "weekly-user-schedule",
        // account
        ACCOUNT: "account",
        USER_ROLE: "user-role",
        USER_REGISTRATION: "user-registration",
        UPDATE_USER: "user-update",
        USER_PROFILE: "user-profile",
        USER_LIST: "user-list",
        // accounting
        ACCOUNTING: "accounting",
        LIST_PAYMENT: "lists",
        ADD_PAYMENT: "add",
        UPDATE_PAYMENT: "update",
        UPLOAD_PAYMENT: "upload",
        VOUCHER_ENROLLMENT: "voucher-enrollment",
        VOUCHER_REPLENISHMENT: "voucher-replenishment",
        UPDATE_BRAND_PENALTY: "add-brand-penalty/update",
        LIST_BRAND_PENALTY: "list-brand-penalty",
        ADD_BRAND_PENALTY: "add-brand-penalty",
        VOUCHER_MONITORING: "voucher-monitoring",
        OR_PREPARATION: "or-preparation",
        ACCOUNTING_ACCOUNTS_RECEIVABLE: "accounts-receivable",
        PAYMENTS: "payments",
        ADD_PENALTY: "add-penalty",
        UPDATE_PENALTY: "add-penalty/update",
        REPORTS: "reports",
        ERROR: "result/error",
        SUCCESS: "result/success",
        HOME_PAGE: "asc/page/dashboard",
        ACCESS_DENIED: "access-denied",
        ACCOUNT_VERIFICATION: "account-verification",
        LANDING_PAGE: "login",
        PASSWORD_RESET: "password-verification/verification-code/:code/:username"
      };
      var SUCCESS_MESSAGES = {
        save: " successfully saved.",
        update: " successfully updated.",
        submit: "Successfully submitted."
      };
      var ERROR_MESSAGES = {
        save: " not saved.",
        update: " not updated",
        search: "No record found for ",
        under_maintenance: "Sorry, one of our service is under maintenance."
      }; // S1 APPLICATION STATUS

      var APPLICATION_STATUS = {
        SAVED: "SAVED",
        S1_APPLICATION_SUBMITTED: "S1_APPLICATION_SUBMITTED",
        S1_APPLICATION_CANCELLED: "S1_APPLICATION_CANCELLED",
        S1_APPLICATION_VERIFIED_BY_ENCODER: "S1_APPLICATION_VERIFIED_BY_ENCODER",
        S1_APPLICATION_REJECTED: "S1_APPLICATION_REJECTED",
        S1_APPLICATION_DISAPPROVED: "S1_APPLICATION_DISAPPROVED",
        S1_APPLICATION_IN_PROCESS: "S1_APPLICATION_IN_PROCESS",
        S1_APPLICATION_VERIFIED_BY_AD_SPE: "S1_APPLICATION_VERIFIED_BY_AD_SPE",
        S1_APPLICATION_SCREENED: "S1_APPLICATION_SCREENED",
        S1_APPLICATION_REVIEWED: "S1_APPLICATION_REVIEWED",
        APPROVED: "APPROVED",
        APPROVED_WITH_CAUTION: "APPROVED_WITH_CAUTION",
        DISAPPROVED: "DISAPPROVED",
        REFER_TO_PANEL: "REFER_TO_PANEL",
        SUBMITTED_REVISION: "SUBMITTED_REVISION",
        INCOMPLETE: "INCOMPLETE"
      };
      var APPLICATION_STATUS_FOR_COMPLIANCE = {
        INCOMPLETE: "INCOMPLETE",
        SUBMITTED_DOCUMENT_FOR_COMPLIANCE: "SUBMITTED_DOCUMENT_FOR_COMPLIANCE",
        COMPLIANCE_DOCUMENT_VERIFIED_BY_ENCODER: "COMPLIANCE_DOCUMENT_VERIFIED_BY_ENCODER",
        COMPLIANCE_DOCUMENT_FOR_REVIEW: "COMPLIANCE_DOCUMENT_FOR_REVIEW",
        COMPLIANCE_DOCUMENT_VERIFIED_BY_AD_SPE: "COMPLIANCE_DOCUMENT_VERIFIED_BY_AD_SPE",
        COMPLIANCE_DOCUMENT_REVIEWED_BY_SCREENER: "COMPLIANCE_DOCUMENT_REVIEWED_BY_SCREENER",
        COMPLIANCE_DECISION_FORM_HAS_BEEN_SENT: "COMPLIANCE_DECISION_FORM_HAS_BEEN_SENT",
        DISAPPROVED_DUE_TO_NON_COMPLIANCE: "DISAPPROVED_DUE_TO_NON_COMPLIANCE"
      };
      var APPLICATION_STATUS_REVISION = {
        SUBMITTED_REVISION: "SUBMITTED_REVISION",
        REVISION_REVIEW_IN_PROCESS: "REVISION_REVIEW_IN_PROCESS",
        REVISION_VERIFIED_BY_ENCODER: "REVISION_VERIFIED_BY_ENCODER",
        REVISION_VERIFIED_BY_AD_SPE: "REVISION_VERIFIED_BY_AD_SPE",
        REVISION_SCREENED: "REVISION_SCREENED",
        REVISION_DECISION_FORM_HAS_BEEN_SENT: "REVISION_DECISION_FORM_HAS_BEEN_SENT"
      };
      var OTHER_STATUS = {
        FOR_APPROVAL: "FOR_APPROVAL"
      }; // S2 APPLICATION STATUS

      var APPLICATION_STATUS_S2 = {
        S2_APPLICATION_APPLIED: "S2 APPLICATION APPLIED",
        S2_APPLICATION_SUBMITTED: "S2 APPLICATION SUBMITTED",
        S2_APPLICATION_CANCELLED: "S2 APPLICATION CANCELLED",
        S2_APPLICATION_VERIFIED_BY_ENCODER: "S2 APPLICATION VERIFIED BY ENCODER",
        S2_APPLICATION_REJECTED: "S2 APPLICATION REJECTED",
        S2_APPLICATION_DISAPPROVED: "S2 APPLICATION DISAPPROVED",
        S2_APPLICATION_IN_PROCESS: "S2 APPLICATION IN PROCESS",
        S2_APPLICATION_VERIFIED_BY_AD_SPE: "S2 APPLICATION VERIFIED BY AD SPE",
        // S2_APPLICATION_SCREENED: 'S2 APPLICATION SCREENED',
        // S2_APPLICATION_REVIEWED: 'S2 APPLICATION REVIEWED',
        APPROVED: "APPROVED",
        APPROVED_WITH_CAUTION: "APPROVED WITH CAUTION",
        DISAPPROVED: "DISAPPROVED",
        REFER_TO_PANEL: "REFER TO PANEL",
        SUBMITTED_REVISION: "SUBMITTED REVISION",
        INCOMPLETE: "INCOMPLETE"
      };
      var FOR_CLEARANCE_STATUS = {
        FOR_CLEARANCE_S2_APPLICATION: "FOR_CLEARANCE_S2_APPLICATION",
        FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_ENCODER: "FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_ENCODER",
        FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_AD_SPE: "FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_AD_SPE"
      };
      var TYPE_OF_MEDIUM = {
        SINGLE_MEDIA: "SINGLE MEDIA",
        MULTIMEDIA: "MULTIMEDIA",
        MULTIMEDIA_MOVING: "MULTIMEDIA-MOVING",
        MULTIMEDIA_STATIC: "MULTIMEDIA-STATIC",
        MOVING: "MOVING",
        STATIC: "STATIC"
      };
      var FORM_STATUS = {
        OPEN: "OPEN",
        LOCKED: "LOCKED"
      };
      var ATTACHMENT_TYPE = {
        MAIN: "MAIN",
        SUPPORTIVE: "SUPPORTIVE",
        PAYMENT: "PAYMENT",
        REVISION_LETTER: "REVISION_LETTER",
        FINAL_MATERIAL: "FINAL_MATERIAL",
        VOUCHER_FUND: "VOUCHER_FUND",
        BRAND_PENALTY_PAYMENT: "BRAND_PENALTY_PAYMENT"
      };
      var APPFORM_TYPE = {
        S1: "S1",
        S2: "S2",
        INDIVIDUAL: "INDIVIDUAL",
        MULTIPLE: "MULTIPLE",
        FOR_PRESENTATION: "FOR_PRESENTATION",
        SPECIAL: "SPECIAL"
      };
      var SUBMISSION_TYPE = {
        ORIGINAL: "ORIGINAL",
        REVISION: "REVISION",
        COMPLIANCE: "COMPLIANCE",
        TOA: "TOA"
      };
      var ACTION_STATUS = {
        ASSIGN_TO_ADSPE: "ASSIGN_TO_ADSPE",
        ASSIGN_TO_SCREENER: "ASSIGN_TO_SCREENER",
        ASSIGN_TO_REVIEWER: "ASSIGN_TO_REVIEWER",
        ASSIGN_TO_PRESENTOR: "ASSIGN_TO_PRESENTOR"
      };
      var PAYMENT_STATUS = {
        PAID: "PAID",
        UNPAID: "UNPAID",
        FOR_APPROVAL: "FOR_APPROVAL",
        FOR_PAYMENT: "FOR_PAYMENT"
      };
      var USER_ROLES = {
        ROLE_APPLICANT: "ROLE_APPLICANT",
        ROLE_ENCODER: "ROLE_ENCODER",
        ROLE_AD_SPECIALIST: "ROLE_AD_SPECIALIST",
        ROLE_SCREENER: "ROLE_SCREENER",
        ROLE_REVIEWER: "ROLE_REVIEWER",
        ROLE_ADMIN: "ROLE_ADMIN",
        ROLE_SUPER_ADMIN: "ROLE_SUPER_ADMIN",
        ROLE_ACCOUNTING: "ROLE_ACCOUNTING"
      };
      var USER_ROLE_LIST = ["ROLE_APPLICANT", "ROLE_ENCODER", "ROLE_AD_SPECIALIST", "ROLE_SCREENER", "ROLE_REVIEWER", "ROLE_ADMIN", "ROLE_SUPER_ADMIN", "ROLE_ACCOUNTING"];
      var PAYMENT_TYPE = {
        SCHEDULE_OF_FEES_INDIVIDUAL: "SCHEDULE OF FEES - INDIVIDUAL",
        SCHEDULE_OF_FEES_MULTIPLE: "SCHEDULE OF FEES - MULTIPLE",
        SCHEDULE_OF_FEES_SPECIAL: "SCHEDULE OF FEES - SPECIAL",
        DELINQUENT: "DELINQUENT",
        PENALIZED_BRANDS: "PENALIZED BRANDS",
        PENALIZED_COMPANY: "PENALIZED COMPANY",
        ACCOUNTS_RECEIVABLE: "ACCOUNTS RECEIVABLE"
      };
      var APP_DECISION_STATUS = {
        APPROVED: "APPROVED",
        INCOMPLETE: "INCOMPLETE",
        DISAPPROVED: "DISAPPROVED",
        APPROVED_WITH_CAUTION: "APPROVED_WITH_CAUTION"
      };
      /********************************* FOR LISTING ***************************/

      var PAYMENT_TYPE_LIST = [{
        type: "SCHEDULE OF FEES - INDIVIDUAL"
      }, {
        type: "SCHEDULE OF FEES - MULTIPLE"
      }, {
        type: "SCHEDULE OF FEES - SPECIAL"
      }, {
        type: "DELINQUENT"
      }, {
        type: "PENALIZED BRANDS"
      }, {
        type: "PENALIZED COMPANY"
      }];
      var PAYMENT_STATUS_LIST = [{
        type: "ALL"
      }, {
        type: "FOR_PAYMENT"
      }, {
        type: "FOR_APPROVAL"
      }, {
        type: "PAID"
      }, {
        type: "UNPAID"
      }];
      var STATUSES = [{
        status: "ACTIVE"
      }, {
        status: "INACTIVE"
      }];
      var ROLES = [{
        role: "ROLE_ADMIN",
        ascUser: true,
        disableFieldOnUpdate: true
      }, {
        role: "ROLE_SUPER_ADMIN",
        ascUser: true,
        disableFieldOnUpdate: true
      }, {
        role: "ROLE_AD_SPECIALIST",
        ascUser: true,
        disableFieldOnUpdate: true
      }, {
        role: "ROLE_SCREENER",
        ascUser: true,
        disableFieldOnUpdate: true
      }, {
        role: "ROLE_ENCODER",
        ascUser: true,
        disableFieldOnUpdate: false
      }, {
        role: "ROLE_REVIEWER",
        ascUser: true,
        disableFieldOnUpdate: true
      }, {
        role: "ROLE_ACCOUNTING",
        ascUser: true,
        disableFieldOnUpdate: true
      }, {
        role: "ROLE_APPLICANT",
        ascUser: false,
        disableFieldOnUpdate: true
      }];
      var ROLE_LIST = ROLES.map(function (res) {
        return res.role;
      });
      var APPLICATION_STATUSES = [{
        status: "APPROVED"
      }, {
        status: "DISAPPROVED"
      }, {
        status: "INCOMPLETE"
      }, {
        status: "RE_APPLY"
      }, {
        status: "PENDING"
      }, {
        status: "SENT"
      }, {
        status: "VERIFIED"
      }, {
        status: "OPEN"
      }, {
        status: "CLOSED"
      }];
      var FORM_TYPE = [{
        description: "INDIVIDUAL"
      }, {
        description: "MULTIPLE"
      }];
      var COMMENT_TYPE = [{
        description: "INTERNAL"
      }, {
        description: "EXTERNAL"
      }, {
        description: "OTHERS_FOR_EMAIL"
      }];
      var DECISION_STATUS = [{
        status: "APPROVED"
      }, {
        status: "INCOMPLETE"
      }, {
        status: "DISAPPROVED"
      }];
      var SPECIAL_APPLICATION = ["SPECIAL CLEARING", "SPECIAL SCREENING", "SPECIAL SCREENING AND CLEARING"];
      var APPLICATION_STAGE = {
        S1_APPLICATION: "S1-APPLICATION",
        S2_APPLICATION: "S2-APPLICATION"
      };
      var YES_NO_OPTION = ["Yes", "No"];
      var HOLIDAY_TYPE = [{
        type: "REGULAR"
      }, {
        type: "SPECIAL"
      }, {
        type: "SPECIAL_WORKING"
      }, {
        type: "SPECIAL_NON_WORKING"
      }, {
        type: "WEEKEND"
      }];
      var ACCOUNT_TYPE = {
        ASC_USER: "ASC_USER",
        APPLICANT: "APPLICANT"
      };
      var PAYMENT_MODE = {
        GCASH: "GCash",
        PAYMAYA: "PayMaya",
        BANK: "Bank",
        VOUCHER: "Voucher",
        PROMISORRY_NOTE: "Promisorry Note",
        CASH: "Cash",
        CREDIT_CARD: "Credit Card",
        CHECK: "Check"
      };
      var MULTIMEDIA_MOVING = [{
        id: 0,
        multimediaMovingMedium: "cinema",
        hasSelected: false
      }, {
        id: 1,
        multimediaMovingMedium: "collaterals",
        hasSelected: false
      }, {
        id: 2,
        multimediaMovingMedium: "digital video",
        hasSelected: false
      }, {
        id: 3,
        multimediaMovingMedium: "e-ooh",
        hasSelected: false
      }, {
        id: 4,
        multimediaMovingMedium: "television",
        hasSelected: false
      }];
      var MULTIMEDIA_STATIC = [{
        id: 0,
        multimediaStaticMedium: "collaterals",
        hasSelected: false,
        sizeLength: 0
      }, {
        id: 1,
        multimediaStaticMedium: "digital static",
        hasSelected: false,
        sizeLength: 0
      }, {
        id: 2,
        multimediaStaticMedium: "ooh",
        hasSelected: false,
        sizeLength: 0
      }, {
        id: 3,
        multimediaStaticMedium: "print",
        hasSelected: false,
        sizeLength: 0
      }];

      var REPORT_TYPE = /*@__PURE__*/function (REPORT_TYPE) {
        REPORT_TYPE["COLLECTION_REPORT"] = "COLLECTION REPORT";
        REPORT_TYPE["VAT_SUMMARY"] = "VAT SUMMARY";
        REPORT_TYPE["TAX_SUMMARY"] = "TAX SUMMARY";
        REPORT_TYPE["REPORT_PER_COMPANY"] = "REPORT PER COMPANY";
        REPORT_TYPE["REPORT_PER_AGENCY"] = "REPORT PER AGENCY";
        REPORT_TYPE["REPORT_PER_SCREENER"] = "REPORT PER SCREENER";
        REPORT_TYPE["REPORT_PER_MEDIUM"] = "REPORT PER MEDIUM";
        REPORT_TYPE["REPORT_PER_APPLICANT"] = "REPORT PER APPLICANT";
        return REPORT_TYPE;
      }({});
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
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        environment: "PROD",
        production: true,
        ASC_API: "https:asconlineapp.com/asc/",
        websocketUri: "https://asconlineapp.com/websocket"
      };
      /***/
    },

    /***/
    "B1bq":
    /*!***********************************************************!*\
      !*** ./src/app/core/services/socket/websocket.service.ts ***!
      \***********************************************************/

    /*! exports provided: WebSocketService */

    /***/
    function B1bq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebSocketService", function () {
        return WebSocketService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF");

      var WebSocketService = /*@__PURE__*/function () {
        var WebSocketService = /*#__PURE__*/function () {
          function WebSocketService(socket) {
            _classCallCheck(this, WebSocketService);

            this.socket = socket;
          }

          _createClass(WebSocketService, [{
            key: "listen",
            value: function listen(event) {
              var _this7 = this;

              return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
                _this7.socket.on(event, function (data) {
                  subscriber.next(data);
                });
              });
            }
          }, {
            key: "emit",
            value: function emit(event, data) {
              this.socket.emit(event, data);
            }
          }]);

          return WebSocketService;
        }();

        WebSocketService.ɵfac = function WebSocketService_Factory(t) {
          return new (t || WebSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]));
        };

        WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: WebSocketService,
          factory: WebSocketService.ɵfac,
          providedIn: 'root'
        });
        return WebSocketService;
      }();
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
    "CHq8":
    /*!************************************************************!*\
      !*** ./src/app/core/services/encr-decr-service.service.ts ***!
      \************************************************************/

    /*! exports provided: EncrDecrService */

    /***/
    function CHq8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EncrDecrService", function () {
        return EncrDecrService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! crypto-js */
      "NFKh");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);

      var EncrDecrService = /*@__PURE__*/function () {
        var EncrDecrService = /*#__PURE__*/function () {
          function EncrDecrService() {
            _classCallCheck(this, EncrDecrService);

            this.key = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse('++PJM618KDB23mjp7=+dk2#-BC789!!1');
            this.iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse('089pjm++kdb+2220');
          } // The set method is use for encrypt the value.


          _createClass(EncrDecrService, [{
            key: "set",
            value: function set(value) {
              var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(value.toString()), this.key, {
                keySize: 256,
                iv: this.iv,
                mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
                padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
              });
              return encrypted.toString();
            } // The get method is use for decrypt the value.

          }, {
            key: "get",
            value: function get(value) {
              var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(value.toString(), this.key, {
                keySize: 256,
                iv: this.iv,
                mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
                padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
              });
              return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
            }
          }]);

          return EncrDecrService;
        }();

        EncrDecrService.ɵfac = function EncrDecrService_Factory(t) {
          return new (t || EncrDecrService)();
        };

        EncrDecrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: EncrDecrService,
          factory: EncrDecrService.ɵfac,
          providedIn: 'root'
        });
        return EncrDecrService;
      }();
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
    "Iws0":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/common-services.service.ts ***!
      \**********************************************************/

    /*! exports provided: CommonServices */

    /***/
    function Iws0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonServices", function () {
        return CommonServices;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CommonServices = /*@__PURE__*/function () {
        var CommonServices = /*#__PURE__*/function () {
          function CommonServices() {
            _classCallCheck(this, CommonServices);

            this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          }

          _createClass(CommonServices, [{
            key: "sendClickEvent",
            value: function sendClickEvent() {
              this.subject.next();
            }
          }, {
            key: "getClickEvent",
            value: function getClickEvent() {
              return this.subject.asObservable();
            }
          }, {
            key: "toUpperCase",
            value: function toUpperCase(object, property, event) {
              if (object && event) {
                object[property] = event.toUpperCase();
              }
            }
          }]);

          return CommonServices;
        }();

        CommonServices.ɵfac = function CommonServices_Factory(t) {
          return new (t || CommonServices)();
        };

        CommonServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: CommonServices,
          factory: CommonServices.ɵfac,
          providedIn: 'root'
        });
        return CommonServices;
      }();
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
    "KXg1":
    /*!*****************************************************************************************!*\
      !*** ./src/app/shared/success-verification-page/success-verification-page.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SuccessVerificationPageComponent */

    /***/
    function KXg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageComponent", function () {
        return SuccessVerificationPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/constants */
      "9Vv1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SuccessVerificationPageComponent_div_1_h3_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your account has been verified succesfully.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SuccessVerificationPageComponent_div_1_h3_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your account has been already verified");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SuccessVerificationPageComponent_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SuccessVerificationPageComponent_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SuccessVerificationPageComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SuccessVerificationPageComponent_div_1_h3_5_Template, 2, 0, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SuccessVerificationPageComponent_div_1_h3_6_Template, 2, 0, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SuccessVerificationPageComponent_div_1_div_7_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SuccessVerificationPageComponent_div_1_div_8_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessVerificationPageComponent_div_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.goToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " GO TO LOGIN PAGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Need help?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "If you encounter some issues, don't hesitate to contact us on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isVerified);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isVerified);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isVerified);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isVerified);
        }
      }

      var SuccessVerificationPageComponent = /*@__PURE__*/function () {
        var SuccessVerificationPageComponent = /*#__PURE__*/function () {
          function SuccessVerificationPageComponent(router, route, apiService) {
            _classCallCheck(this, SuccessVerificationPageComponent);

            this.router = router;
            this.route = route;
            this.apiService = apiService;
            this.isVerified = false;
            this.showLandingPage = false;
          }

          _createClass(SuccessVerificationPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.verificationCode = this.route.snapshot.params.id;
              this.verifyAccount();
            }
          }, {
            key: "verifyAccount",
            value: function verifyAccount() {
              var _this8 = this;

              this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].accountVerification + "/".concat(this.verificationCode)).subscribe(function (res) {
                if (res === false) {
                  _this8.isVerified = true;
                  _this8.showLandingPage = true;
                } else {
                  _this8.showLandingPage = true;
                }
              });
            }
          }, {
            key: "goToLogin",
            value: function goToLogin() {
              this.router.navigateByUrl('/login');
            }
          }]);

          return SuccessVerificationPageComponent;
        }();

        SuccessVerificationPageComponent.ɵfac = function SuccessVerificationPageComponent_Factory(t) {
          return new (t || SuccessVerificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
        };

        SuccessVerificationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SuccessVerificationPageComponent,
          selectors: [["app-success-verification-page"]],
          decls: 2,
          vars: 1,
          consts: [["class", "content", 4, "ngIf"], [1, "content"], [1, "logo"], ["src", "../../../assets/images/logo.png", "alt", ""], [1, "page-message"], [4, "ngIf"], ["class", "check-icon animated rubberBand", 4, "ngIf"], [1, "button-content"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "help-content"], ["src", "../../../assets/images/social-media/facebook.png", "alt", ""], ["src", "../../../assets/images/social-media/gmail.png", "alt", ""], [1, "check-icon", "animated", "rubberBand"], ["src", "../../../assets/images/social-media/check.png", "alt", ""], ["src", "../../../assets/images/social-media/info.png", "alt", ""]],
          template: function SuccessVerificationPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuccessVerificationPageComponent_div_1_Template, 22, 4, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLandingPage);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
          styles: ["html[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: white;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: 10px 10px 7px -10px rgba(0, 0, 0, 0.35);\n  -webkit-box-shadow: 10px 10px 7px -10px rgba(0, 0, 0, 0.35);\n  -moz-box-shadow: 10px 10px 7px -10px rgba(0, 0, 0, 0.35);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n  padding: 2em 3em;\n}\n\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.content[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1em 0em 2em 0em;\n}\n\n.content[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 8em;\n  width: 8em;\n}\n\n.content[_ngcontent-%COMP%]   .page-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.content[_ngcontent-%COMP%]   .page-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #6d6d6d;\n}\n\n.content[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0px 6em;\n}\n\n.content[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: italic;\n  color: gray;\n}\n\n.content[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 4em;\n  width: 4em;\n  padding: 5px;\n}\n\n.content[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n@media (min-width: 877px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 3em 5em;\n  }\n  .content[_ngcontent-%COMP%]   .page-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n\n@media (min-width: 1230px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 3em 3em;\n  }\n  .content[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 12em;\n    width: 12em;\n  }\n  .content[_ngcontent-%COMP%]   .page-message[_ngcontent-%COMP%] {\n    padding: 0px 5em;\n  }\n  .content[_ngcontent-%COMP%]   .page-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media (min-width: 1300px) {\n  .content[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%] {\n    padding: 0px 15em;\n  }\n}\n\n@media (min-width: 1597px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 3em 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N1Y2Nlc3MtdmVyaWZpY2F0aW9uLXBhZ2Uvc3VjY2Vzcy12ZXJpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBR0E7RUFHSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtREFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLSTtFQUNJLGtCQUFBO0FBSFI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0FBSFI7O0FBSVE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUZaOztBQU1JO0VBRUksa0JBQUE7QUFMUjs7QUFNUTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7QUFOWjs7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjs7QUFVUTtFQUNJLFdBQUE7QUFSWjs7QUFhSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWFI7O0FBWVE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFWWjs7QUFZUTtFQUNJLGVBQUE7QUFWWjs7QUFpQkE7RUFDSTtJQUNJLGdCQUFBO0VBZE47RUFnQlU7SUFDSSxlQUFBO0VBZGQ7QUFDRjs7QUFzQkE7RUFDSTtJQUNJLGdCQUFBO0VBcEJOO0VBc0JVO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUFwQmQ7RUF1Qk07SUFDSSxnQkFBQTtFQXJCVjtFQXNCVTtJQUNJLGVBQUE7RUFwQmQ7QUFDRjs7QUEyQkE7RUFFUTtJQUNJLGlCQUFBO0VBMUJWO0FBQ0Y7O0FBK0JBO0VBQ0k7SUFDSSxpQkFBQTtFQTdCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N1Y2Nlc3MtdmVyaWZpY2F0aW9uLXBhZ2Uvc3VjY2Vzcy12ZXJpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcblxyXG4uY29udGVudHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hc2MtaW1hZ2Utc21hbGwucG5nJyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3OSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQ1KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNjLWljb24uaWNvXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggLTEwcHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtMTBweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggN3B4IC0xMHB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyZW0gM2VtO1xyXG4gICBcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2hlY2staWNvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDBlbSAyZW0gMGVtO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA4ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLW1lc3NhZ2V7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMmVtIDBlbSAwZW0gMGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHJnYigwLCAxNTMsIDApO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWNvbnRlbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA2ZW07XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuaGVscC1jb250ZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDRlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWc6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4NzdweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDVlbTtcclxuICAgICAgICAucGFnZS1tZXNzYWdle1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMzBweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDNlbTtcclxuICAgICAgICAuY2hlY2staWNvbntcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtbWVzc2FnZXtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDVlbTtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICAuYnV0dG9uLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1OTdweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDEwZW07XHJcbiAgICB9XHJcbn0iXX0= */"]
        });
        return SuccessVerificationPageComponent;
      }();
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
    "M0ag":
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /*! exports provided: AccessDeniedComponent, LayoutComponent, SuccessVerificationPageComponent, AngularMaterialModule, ENV, ENDPOINTS, COMMON_FUNCTION, URL_PATHS, SUCCESS_MESSAGES, ERROR_MESSAGES, APPLICATION_STATUS, APPLICATION_STATUS_FOR_COMPLIANCE, APPLICATION_STATUS_REVISION, OTHER_STATUS, APPLICATION_STATUS_S2, FOR_CLEARANCE_STATUS, TYPE_OF_MEDIUM, FORM_STATUS, ATTACHMENT_TYPE, APPFORM_TYPE, SUBMISSION_TYPE, ACTION_STATUS, PAYMENT_STATUS, USER_ROLES, USER_ROLE_LIST, PAYMENT_TYPE, APP_DECISION_STATUS, PAYMENT_TYPE_LIST, PAYMENT_STATUS_LIST, STATUSES, ROLES, ROLE_LIST, APPLICATION_STATUSES, FORM_TYPE, COMMENT_TYPE, DECISION_STATUS, SPECIAL_APPLICATION, APPLICATION_STAGE, YES_NO_OPTION, HOLIDAY_TYPE, ACCOUNT_TYPE, PAYMENT_MODE, MULTIMEDIA_MOVING, MULTIMEDIA_STATIC, REPORT_TYPE */

    /***/
    function M0ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./access-denied/access-denied.component */
      "zV6t");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function () {
        return _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_0__["AccessDeniedComponent"];
      });
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/layout.component */
      "0MCZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"];
      });
      /* harmony import */


      var _success_verification_page_success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./success-verification-page/success-verification-page.component */
      "KXg1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageComponent", function () {
        return _success_verification_page_success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageComponent"];
      });
      /* harmony import */


      var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils/angular-material.module */
      "ZN+y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
        return _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"];
      });
      /* harmony import */


      var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/constants */
      "9Vv1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ENV", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ENV"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "COMMON_FUNCTION", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "URL_PATHS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SUCCESS_MESSAGES", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["SUCCESS_MESSAGES"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGES"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_FOR_COMPLIANCE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS_FOR_COMPLIANCE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_REVISION", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS_REVISION"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OTHER_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["OTHER_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_S2", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS_S2"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FOR_CLEARANCE_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["FOR_CLEARANCE_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TYPE_OF_MEDIUM", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["TYPE_OF_MEDIUM"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FORM_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["FORM_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ATTACHMENT_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPFORM_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPFORM_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SUBMISSION_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["SUBMISSION_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ACTION_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "USER_ROLES", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "USER_ROLE_LIST", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE_LIST"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APP_DECISION_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APP_DECISION_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE_LIST", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_TYPE_LIST"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_LIST", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_STATUS_LIST"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "STATUSES", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["STATUSES"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ROLES", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ROLES"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ROLE_LIST", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ROLE_LIST"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUSES", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUSES"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FORM_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["FORM_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "COMMENT_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["COMMENT_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DECISION_STATUS", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["DECISION_STATUS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SPECIAL_APPLICATION", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["SPECIAL_APPLICATION"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "APPLICATION_STAGE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STAGE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "YES_NO_OPTION", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["YES_NO_OPTION"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HOLIDAY_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["HOLIDAY_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ACCOUNT_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_TYPE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_MOVING", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["MULTIMEDIA_MOVING"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_STATIC", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["MULTIMEDIA_STATIC"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "REPORT_TYPE", function () {
        return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["REPORT_TYPE"];
      });
      /***/

    },

    /***/
    "MJGS":
    /*!*******************************************************************!*\
      !*** ./src/app/core/services/authorization/auth-guard.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function MJGS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./token.service */
      "pPj3");

      var TOKEN_KEY = 'AuthToken';

      var AuthGuardService = /*@__PURE__*/function () {
        var AuthGuardService = /*#__PURE__*/function () {
          function AuthGuardService(router, tokenService) {
            _classCallCheck(this, AuthGuardService);

            this.router = router;
            this.tokenService = tokenService;
          }

          _createClass(AuthGuardService, [{
            key: "canActivate",
            value: function canActivate(route, state) {
              var token = this.tokenService.getUserLoginToken();

              if (token) {
                return true;
              }

              this.router.navigate(['/login'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
              return false;
            }
          }, {
            key: "canActivateChild",
            value: function canActivateChild(route, state) {
              var _a;

              var loggedInUser = (_a = this.tokenService.getUserLoginData()) === null || _a === void 0 ? void 0 : _a.user_role;

              if (_shared__WEBPACK_IMPORTED_MODULE_1__["USER_ROLE_LIST"].includes(loggedInUser)) {
                return true;
              } else {
                this.router.navigate(['/access-denied']);
                return false;
              }
            }
          }]);

          return AuthGuardService;
        }();

        AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
          return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]));
        };

        AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AuthGuardService,
          factory: AuthGuardService.ɵfac,
          providedIn: 'root'
        });
        return AuthGuardService;
      }();
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
    "RiBP":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/schedule-of-fees/single-application/modal-single-application/modal-single-application.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: ModalSingleApplicationComponent */

    /***/
    function RiBP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSingleApplicationComponent", function () {
        return ModalSingleApplicationComponent;
      });
      /* harmony import */


      var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../../../shared/utils/constants */
      "9Vv1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/application-single-media.model */
      "XLGj");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ModalSingleApplicationComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "object", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This browser does not support PDF!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.safeURLProofOfPayment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.safeURLProofOfPayment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function ModalSingleApplicationComponent_div_55_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, i_r3 == null ? null : i_r3.paymentDescription), " ");
        }
      }

      function ModalSingleApplicationComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalSingleApplicationComponent_div_55_mat_option_1_Template, 3, 4, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (i_r3 == null ? null : i_r3.status) === "ACTIVE" && (!ctx_r1.fromPayable || i_r3.paymentDescription.toUpperCase() !== "PROMISORRY NOTE"));
        }
      }

      function ModalSingleApplicationComponent_span_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please contact ASC admin to check the Maintenance of Fees.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var ModalSingleApplicationComponent = /*@__PURE__*/function () {
        var ModalSingleApplicationComponent = /*#__PURE__*/function () {
          function ModalSingleApplicationComponent(sanitizer, apiService, dataStorage, fileStorageService, sweetAlertService, router, spinner, dialogRef, data) {
            _classCallCheck(this, ModalSingleApplicationComponent);

            var _a, _b, _c, _d;

            this.sanitizer = sanitizer;
            this.apiService = apiService;
            this.dataStorage = dataStorage;
            this.fileStorageService = fileStorageService;
            this.sweetAlertService = sweetAlertService;
            this.router = router;
            this.spinner = spinner;
            this.dialogRef = dialogRef;
            this.data = data;
            this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_3__["S1Application"]();
            this.attachmentDocument = new _models__WEBPACK_IMPORTED_MODULE_3__["AttachmentDocument"]();
            this.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_5__["ApplicationSingleMedia"]();
            this.payment = new _models__WEBPACK_IMPORTED_MODULE_3__["Payment"]();
            this.paymentTypeList = [];
            this.attachmentDocuments = [];
            this.previewDocument = false;
            this.isSubmitted = false;
            this.typeOfMediumDisplay = '';

            if (data) {
              if (data['fromPayable']) {
                this.fromPayable = true;
              }

              if (data) {
                this.s1Application = data;
                console.log('S1', this.s1Application);

                switch (((_a = this.s1Application) === null || _a === void 0 ? void 0 : _a.refTypeOfMedium) || ((_d = (_c = (_b = this.payment) === null || _b === void 0 ? void 0 : _b.applicationFormS2) === null || _c === void 0 ? void 0 : _c.applicationForm) === null || _d === void 0 ? void 0 : _d.refTypeOfMedium)) {
                  case 'SINGLE MEDIA':
                    this.getApplicationSingleMedia();
                    break;

                  case 'MULTIMEDIA-MOVING':
                    this.getMultimediaMoving();
                    break;

                  case 'MULTIMEDIA-STATIC':
                    this.getMultimediaStatic();
                    break;

                  default:
                    break;
                }

                this.getPaymentDetails();
              }
            }
          }

          _createClass(ModalSingleApplicationComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.currentUser = this.dataStorage.getUserAccount();
              this.getPaymentList();
            }
          }, {
            key: "getPaymentDetails",
            value: function getPaymentDetails() {
              var _this9 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].paymentDetails + this.s1Application.id).subscribe(function (res) {
                _this9.paymentDetails = res;
                _this9.paymentDetails.vat = _this9.paymentDetails.vat.toFixed(2);
              });
            }
          }, {
            key: "getPaymentList",
            value: function getPaymentList() {
              var _this10 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].paymentType).subscribe(function (res) {
                _this10.paymentTypeList = res.responseData.data;

                if (_this10.currentUser.userRole.name === _shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["USER_ROLES"].ROLE_APPLICANT) {
                  var creditCardIndex = _this10.paymentTypeList.findIndex(function (element) {
                    return element.paymentDescription === 'Credit Card';
                  });

                  _this10.paymentTypeList.splice(creditCardIndex, 1);
                }
              });
            }
          }, {
            key: "selectFile",
            value: function selectFile(event) {
              var attachmentSize = event.target.files[0].size;

              if (event.target.files[0].type === 'application/pdf') {
                if (attachmentSize > 15000000) {
                  // 1MB = 1M
                  this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB.");
                  event.target.value = '';
                  return;
                } else {
                  var pdfURL = URL.createObjectURL(event.target.files[0]);
                  this.safeURLProofOfPayment = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
                  this.previewDocument = true; // env.showSpinner = true;

                  var reader = new FileReader();

                  var _event$target$files = _slicedToArray(event.target.files, 1),
                      file = _event$target$files[0];

                  reader.readAsDataURL(file);

                  reader.onload = function () {};
                }

                this.selectedFiles = event.target.files;
              } else {
                this.sweetAlertService.customErrorMessage('Attachment should be in PDF format only.');
                event.target.value = '';
                return;
              }
            }
          }, {
            key: "uploadDocument",
            value: function uploadDocument(s1Application) {
              var _this11 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to submit this PROOF OF PAYMENT?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this11.spinner.show();

                  var params = '';
                  params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_4__["ATTACHMENT_TYPE"].PAYMENT + '&submissionType=ORIGINAL';

                  _this11.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].attachmentDocument, _this11.selectedFiles.item(0), params).subscribe(function (res) {
                    var obj = res.responseData.data;
                    console.log(obj);
                    _this11.s1Application.paymentAttachmentReference = obj.paymentAttachmentReference;
                    _this11.payment.paymentAttachmentReference = obj.paymentAttachmentReference;
                    _this11.payment.amountDue = s1Application.amount;
                    _this11.payment.applicationForm = s1Application;
                    _this11.payment.appFormReference = s1Application.appFormReference;
                    _this11.payment.filename = obj.filename;

                    _this11.saveProofOfPayment();
                  }, function (err) {
                    _this11.spinner.hide();

                    _this11.sweetAlertService.error(err);
                  }, function () {
                    // actions after subscription
                    _this11.spinner.hide();
                  });
                }
              });
            }
          }, {
            key: "saveProofOfPayment",
            value: function saveProofOfPayment() {
              var _this12 = this;

              this.spinner.show();
              console.log('Saving payment...');
              this.payment.id = 0;
              this.payment.officialReceiptNo = '';
              this.payment.paymentMethod = null;
              console.log('PAYMENT : ', this.payment);
              this.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].applicationFormPresentor, "payment-type-id/").concat(this.paymentType.id, "/payment/submit"), this.payment).subscribe(function (res) {
                console.log('SAVED STATUS: ', res);

                if (res.responseData.data) {
                  _this12.safeURLProofOfPayment = _this12.sanitizer.bypassSecurityTrustResourceUrl(res.responseData.data.fileURL);
                  _this12.isSubmitted = true;

                  _this12.sweetAlertService.customSuccessMessage('Proof of payment successfully submitted.');

                  _this12.closeModal();
                } else {
                  _this12.sweetAlertService.customErrorMessage('Error saving payment.');
                }

                _this12.spinner.hide(); // this.previewDocument = true;


                _this12.selectedFiles = undefined;

                _this12.router.navigateByUrl('asc/page/application/single-application');
              }, function (err) {
                console.log(err);

                _this12.sweetAlertService.error(err);

                _this12.spinner.hide();
              }, function () {
                _this12.spinner.hide();
              });
            }
          }, {
            key: "closeModal",
            value: function closeModal() {
              this.dialogRef.close();
              this.router.navigate(['asc/page/application/single-application']);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {// this.s1Application = null;
            }
          }, {
            key: "getApplicationSingleMedia",
            value: function getApplicationSingleMedia() {
              var _this13 = this;

              var _a;

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].applicationSingleMedia, "app-form-reference/".concat((_a = this.s1Application) === null || _a === void 0 ? void 0 : _a.appFormReference)).subscribe(function (res) {
                var _a, _b, _c, _d;

                if (res.responseData.data.length > 0) {
                  _this13.applicationSingleMedia = res.responseData.data[0];
                  _this13.typeOfMediumDisplay = "".concat((_c = (_b = (_a = _this13.applicationSingleMedia) === null || _a === void 0 ? void 0 : _a.mediumExecution) === null || _b === void 0 ? void 0 : _b.typeOfMedium) === null || _c === void 0 ? void 0 : _c.description, " (").concat((_d = _this13.applicationSingleMedia) === null || _d === void 0 ? void 0 : _d.sizeLength, ")");
                } else {
                  _this13.typeOfMediumDisplay = '';
                }
              }, function (err) {
                _this13.typeOfMediumDisplay = '';
              });
            }
          }, {
            key: "getMultimediaStatic",
            value: function getMultimediaStatic() {
              var _this14 = this;

              var _a;

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].applicationMultimedia, "app-form-reference/".concat((_a = this.s1Application) === null || _a === void 0 ? void 0 : _a.appFormReference)).subscribe(function (res) {
                if (res.responseData.data.length > 0) {
                  var multimediaList = new Set(res.responseData.data.map(function (mappedList) {
                    var _a;

                    return "".concat((_a = mappedList === null || mappedList === void 0 ? void 0 : mappedList.typeOfMedium) === null || _a === void 0 ? void 0 : _a.description, " (").concat(mappedList === null || mappedList === void 0 ? void 0 : mappedList.multimediaSizeLength, ")");
                  }));
                  _this14.typeOfMediumDisplay = '';
                  var mediaCtrl = 1;

                  var _iterator = _createForOfIteratorHelper(multimediaList),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var media = _step.value;

                      if (mediaCtrl !== multimediaList.size) {
                        _this14.typeOfMediumDisplay += "".concat(media, ", ");
                        mediaCtrl++;
                      } else {
                        _this14.typeOfMediumDisplay += media;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                } else {
                  _this14.typeOfMediumDisplay = '';
                }
              }, function (err) {
                _this14.typeOfMediumDisplay = '';
              });
            }
          }, {
            key: "getMultimediaMoving",
            value: function getMultimediaMoving() {
              var _this15 = this;

              var _a;

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].applicationMultimedia, "app-form-reference/".concat((_a = this.s1Application) === null || _a === void 0 ? void 0 : _a.appFormReference)).subscribe(function (res) {
                if (res.responseData.data.length > 0) {
                  var multimediaList = new Set(res.responseData.data.map(function (mappedList) {
                    var _a;

                    return "".concat((_a = mappedList === null || mappedList === void 0 ? void 0 : mappedList.typeOfMedium) === null || _a === void 0 ? void 0 : _a.description, " (").concat(mappedList === null || mappedList === void 0 ? void 0 : mappedList.multimediaSizeLength, ")");
                  }));
                  _this15.typeOfMediumDisplay = '';
                  var mediaCtrl = 1;

                  var _iterator2 = _createForOfIteratorHelper(multimediaList),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var media = _step2.value;

                      if (mediaCtrl !== multimediaList.size) {
                        _this15.typeOfMediumDisplay += "".concat(media, ", ");
                        mediaCtrl++;
                      } else {
                        _this15.typeOfMediumDisplay += media;
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                } else {
                  _this15.typeOfMediumDisplay = '';
                }
              }, function (err) {
                _this15.typeOfMediumDisplay = '';
              });
            }
          }]);

          return ModalSingleApplicationComponent;
        }();

        ModalSingleApplicationComponent.ɵfac = function ModalSingleApplicationComponent_Factory(t) {
          return new (t || ModalSingleApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_9__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8));
        };

        ModalSingleApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ModalSingleApplicationComponent,
          selectors: [["app-modal-single-application"]],
          inputs: {
            s1Application: "s1Application"
          },
          decls: 69,
          vars: 27,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "row", "col-md-12", "mt-4"], [1, "col-md-6"], ["type", "file", "accept", ".pdf", 1, "file-upload", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [4, "ngIf"], [1, "col-md-3"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "readonly", "", 3, "value"], ["matInput", "", "name", "companyName", "readonly", "", 3, "value"], ["matInput", "", "name", "refTypeOfMedium", "readonly", "", 3, "value"], ["matInput", "", "name", "amount", "readonly", "", 1, "numbers-input", 3, "value"], ["matInput", "", "name", "amount", "readonly", "", 1, "numbers-input", "total", 3, "value"], [1, "required-field"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [4, "ngFor", "ngForOf"], [2, "margin-top", "2px"], ["matInput", "", "name", "remarks", 3, "ngModel", "ngModelChange"], [1, "row", "col-md-12"], [1, "col-md-10"], [1, "col-md-2", "text-end"], ["mat-raised-button", "", 1, "button-red", "m-0", 3, "disabled", "click"], [1, "material-icons", "color__white"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "400", 3, "data"], ["width", "100%", "height", "500", 3, "src"], ["name", "paymentType", 3, "value", 4, "ngIf"], ["name", "paymentType", 3, "value"]],
          template: function ModalSingleApplicationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "view_list");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Proof of Payment: \xA0\xA0\xA0");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "PDF file only!");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalSingleApplicationComponent_Template_input_ngModelChange_17_listener($event) {
                return ctx.attachment = $event;
              })("change", function ModalSingleApplicationComponent_Template_input_change_17_listener($event) {
                return ctx.selectFile($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ModalSingleApplicationComponent_div_18_Template, 6, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Reference Code");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Advertiser");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Ad Title - Medium (Length)");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "textarea", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Vatable Sales");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "VAT");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Total Sales (VAT Inclusive)");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Payment Mode ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "notification_important");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-select", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalSingleApplicationComponent_Template_mat_select_ngModelChange_54_listener($event) {
                return ctx.paymentType = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ModalSingleApplicationComponent_div_55_Template, 2, 1, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "hr", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Remarks");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "textarea", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModalSingleApplicationComponent_Template_textarea_ngModelChange_60_listener($event) {
                return ctx.payment.remarks = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ModalSingleApplicationComponent_span_63_Template, 3, 0, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSingleApplicationComponent_Template_button_click_65_listener() {
                return ctx.uploadDocument(ctx.s1Application);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "i", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "task_alt");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " SUBMIT ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fromPayable ? "Schedule of Fees - Settlement" : "Schedule of Fees - Individual Application");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.attachment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.previewDocument === true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s1Application == null ? null : ctx.s1Application.referenceCode);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s1Application == null ? null : ctx.s1Application.company == null ? null : ctx.s1Application.company.companyName);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.s1Application == null ? null : ctx.s1Application.adTitle) + " - " + ctx.typeOfMediumDisplay);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](37, 16, ctx.paymentDetails == null ? null : ctx.paymentDetails.basicRate, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](42, 19, ctx.paymentDetails == null ? null : ctx.paymentDetails.vat, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](47, 22, ctx.paymentDetails == null ? null : ctx.paymentDetails.amountDue, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paymentType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paymentTypeList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.payment.remarks);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentType && (ctx.paymentDetails == null ? null : ctx.paymentDetails.amountDue) === 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.paymentType || !ctx.previewDocument || (ctx.paymentDetails == null ? null : ctx.paymentDetails.amountDue) === 0);
            }
          },
          directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["UpperCasePipe"]],
          styles: ["span[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.numbers-input[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hcHBsaWNhdGlvbnMvc2NoZWR1bGUtb2YtZmVlcy9zaW5nbGUtYXBwbGljYXRpb24vbW9kYWwtc2luZ2xlLWFwcGxpY2F0aW9uL21vZGFsLXNpbmdsZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FwcGxpY2F0aW9ucy9zY2hlZHVsZS1vZi1mZWVzL3NpbmdsZS1hcHBsaWNhdGlvbi9tb2RhbC1zaW5nbGUtYXBwbGljYXRpb24vbW9kYWwtc2luZ2xlLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5udW1iZXJzLWlucHV0e1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnRvdGFse1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuIl19 */"]
        });
        return ModalSingleApplicationComponent;
      }();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
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
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_idle_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-idle/core */
      "+lv+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/utils/constants */
      "9Vv1");
      /* harmony import */


      var _core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/services/data.storage.service */
      "nBem");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/services/alert-message/sweet-alert.service */
      "4nSt");
      /* harmony import */


      var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-idle/keepalive */
      "FbN+");

      var AppComponent = /*@__PURE__*/function () {
        var AppComponent = /*#__PURE__*/function () {
          function AppComponent(dataStorage, router, sweetAlertService, idle, keepalive) {
            var _this16 = this;

            _classCallCheck(this, AppComponent);

            this.dataStorage = dataStorage;
            this.router = router;
            this.sweetAlertService = sweetAlertService;
            this.idle = idle;
            this.keepalive = keepalive;
            this.title = '';
            this.idleState = 'Not started.';
            this.timedOut = false;
            this.lastPing = null;
            this.displayWarningForTimeout = false;
            this.router.events.subscribe(function (event) {
              if (event.url !== '/login' && event.url !== '/' && event.url !== undefined) {
                // AUTO-LOGOUT AFTER 5mins of IDLE TIME
                // sets an idle timeout warning after 4 minutes and 30 seconds.
                var idleStart = 29 * 60 + 30;
                idle.setIdle(idleStart); // sets a timeout period of 30 seconds.
                // after 5 minutes of inactivity ( 29:30 idle + 30 seconds warning), the user will be considered timed out.

                idle.setTimeout(30); // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document

                idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_INTERRUPTSOURCES"]);
                idle.onIdleEnd.subscribe(function () {
                  _this16.reset();
                });
                idle.onTimeout.subscribe(function () {
                  _this16.sweetAlertService.sweetAlertMessage('info', 'Logout', 'You have been logged out due to inactivity.');

                  _this16.timedOut = true;

                  _this16.router.navigate(['/']);
                });
                idle.onIdleStart.subscribe(function () {
                  _this16.displayWarningForTimeout = true;
                });
                idle.onTimeoutWarning.subscribe(function (countdown) {
                  dataStorage.setIdleCountdown(countdown);
                  dataStorage.setIsIdleCountdownDisplayed(true);

                  if (!countdown) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                      title: 'Auto close alert!',
                      html: "You will time out in <b>".concat(countdown, "</b> seconds."),
                      timerProgressBar: true,
                      timer: countdown,
                      didOpen: function didOpen() {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
                        var b = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getHtmlContainer().querySelector('b');
                        countdown = setInterval(function () {
                          var _a;

                          b.textContent = (_a = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a === null || sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a === void 0 ? void 0 : sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.getTimerLeft()) === null || _a === void 0 ? void 0 : _a.toString();
                        }, 1000);
                      },
                      willClose: function willClose() {
                        clearInterval(countdown);
                      }
                    }).then(function (result) {
                      /* Read more about handling dismissals below */
                      if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.timer) {
                        console.log('I was closed by the timer');

                        _this16.sweetAlertService.sweetAlertMessage('info', 'Logout', 'You have been logged out due to inactivity.');
                      }
                    });
                  }
                }); // sets the ping interval to 60 seconds

                keepalive.interval(60);
                keepalive.onPing.subscribe(function () {
                  return _this16.lastPing = new Date();
                });

                _this16.reset();
              }
            });
          }

          _createClass(AppComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              console.log(_shared_utils_constants__WEBPACK_IMPORTED_MODULE_3__["ENV"].currentEnv, ' - OASC v2.1.2');
              this.currentUser = this.dataStorage.getUserAccount();
              this.title = 'ASC Online System';
            }
          }, {
            key: "reset",
            value: function reset() {
              this.idle.watch();
              this.timedOut = false;
              this.displayWarningForTimeout = false;
              this.dataStorage.setIsIdleCountdownDisplayed(false);
            }
          }, {
            key: "logout",
            value: function logout() {
              this.dataStorage.signOut();
              this.router.navigateByUrl('login');
              this.sweetAlertService.sweetAlertMessage('info', 'Logout', 'You have been logged out due to inactivity.');
            }
          }, {
            key: "onMove",
            value: function onMove() {
              this.reset();
            }
          }, {
            key: "onKeyPress",
            value: function onKeyPress() {
              this.reset();
            }
          }]);

          return AppComponent;
        }();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_1__["Idle"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_7__["Keepalive"]));
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          hostBindings: function AppComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler() {
                return ctx.onMove();
              })("keypress", function AppComponent_keypress_HostBindingHandler() {
                return ctx.onKeyPress();
              });
            }
          },
          decls: 3,
          vars: 1,
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
          styles: ["th.mat-header-cell,   td.mat-cell,   td.mat-footer-cell {\n  padding: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOzs7RUFHSSwwQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuXHJcbiAgICB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbiAgICB0ZC5tYXQtY2VsbCxcclxuICAgIHRkLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
        });
        return AppComponent;
      }();
      /***/

    },

    /***/
    "TMp0":
    /*!*******************************************************!*\
      !*** ./src/app/core/services/file.storage.service.ts ***!
      \*******************************************************/

    /*! exports provided: FileStorageService */

    /***/
    function TMp0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileStorageService", function () {
        return FileStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var FileStorageService = /*@__PURE__*/function () {
        var FileStorageService = /*#__PURE__*/function () {
          function FileStorageService(http) {
            _classCallCheck(this, FileStorageService);

            this.http = http;
          }

          _createClass(FileStorageService, [{
            key: "pushFileToStorage",
            value: function pushFileToStorage(endpoint, file, params) {
              var data = new FormData();
              data.append('file', file);
              return this.http.post(endpoint + params, data);
            }
          }, {
            key: "uploadImage",
            value: function uploadImage(endpoint, file) {
              var data = new FormData();
              data.append('file', file);
              return this.http.post(endpoint, data);
            }
          }, {
            key: "downloadFileToStorage",
            value: function downloadFileToStorage(filename, fileURL) {
              // const headers = new Headers({ 'Content-Type': 'application/pdf', responseType: 'blob' });
              // let headers = new HttpHeaders();
              // headers = headers.set('Accept', 'application/pdf');
              // return this.http.get(fileURL, { headers: headers, responseType: 'blob' });
              return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].downloadAttachmentDocument) + '/' + filename);
            }
          }]);

          return FileStorageService;
        }();

        FileStorageService.ɵfac = function FileStorageService_Factory(t) {
          return new (t || FileStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        };

        FileStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: FileStorageService,
          factory: FileStorageService.ɵfac,
          providedIn: 'root'
        });
        return FileStorageService;
      }();
      /***/

    },

    /***/
    "Uyvf":
    /*!*********************************************************!*\
      !*** ./src/app/core/models/applicationCountS2.model.ts ***!
      \*********************************************************/

    /*! exports provided: ApplicationCountS2 */

    /***/
    function Uyvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationCountS2", function () {
        return ApplicationCountS2;
      });

      var ApplicationCountS2 = /*#__PURE__*/_createClass(function ApplicationCountS2() {
        _classCallCheck(this, ApplicationCountS2);
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
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./core/services/encr-decr-service.service */
      "CHq8");
      /* harmony import */


      var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-idle/keepalive */
      "FbN+");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular2-moment */
      "5eXZ");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! environments/environment */
      "AytR");
      /* harmony import */


      var _modules_pages_applications_schedule_of_fees_single_application_modal_single_application_modal_single_application_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modules/pages/applications/schedule-of-fees/single-application/modal-single-application/modal-single-application.component */
      "RiBP"); // this includes the core NgIdleModule but includes keepalive providers for easy wireup
      // optional, provides moment-style pipes for date formatting


      var config = {
        url: environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].websocketUri,
        options: {}
      };

      var AppModule = /*@__PURE__*/function () {
        var AppModule = /*#__PURE__*/_createClass(function AppModule() {
          _classCallCheck(this, AppModule);
        });

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_9__["EncrDecrService"]],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_10__["NgIdleKeepaliveModule"].forRoot(), angular2_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["SocketIoModule"].forRoot(config)]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modules_pages_applications_schedule_of_fees_single_application_modal_single_application_modal_single_application_component__WEBPACK_IMPORTED_MODULE_14__["ModalSingleApplicationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_10__["NgIdleKeepaliveModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_11__["MomentModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["SocketIoModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZN+y":
    /*!*********************************************************!*\
      !*** ./src/app/shared/utils/angular-material.module.ts ***!
      \*********************************************************/

    /*! exports provided: AngularMaterialModule */

    /***/
    function ZNY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
        return AngularMaterialModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @candidosales/material-time-picker */
      "fvN+");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var ANGULAR_FORMS = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
      var MATERIAL_MODULES = [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_24__["MaterialTimePickerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"]];
      var PACKAGE_MODULES = [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__["NgSelectModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"]];

      var AngularMaterialModule = /*@__PURE__*/function () {
        var AngularMaterialModule = /*#__PURE__*/_createClass(function AngularMaterialModule() {
          _classCallCheck(this, AngularMaterialModule);
        });

        AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AngularMaterialModule
        });
        AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AngularMaterialModule_Factory(t) {
            return new (t || AngularMaterialModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ANGULAR_FORMS].concat(PACKAGE_MODULES, MATERIAL_MODULES), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__["NgSelectModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_24__["MaterialTimePickerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"]]
        });
        return AngularMaterialModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__["NgSelectModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_24__["MaterialTimePickerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__["NgSelectModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_24__["MaterialTimePickerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"]]
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
    "dJ3e":
    /*!****************************************!*\
      !*** ./src/app/core/services/index.ts ***!
      \****************************************/

    /*! exports provided: ApiService, DataStorageService, SweetAlertService, AnimateDigitService, AuthGuardService, FileStorageService, ValidateFieldService, CommonServices */

    /***/
    function dJ3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      "qc5V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"];
      });
      /* harmony import */


      var _data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data.storage.service */
      "nBem");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataStorageService", function () {
        return _data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"];
      });
      /* harmony import */


      var _alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert-message/sweet-alert.service */
      "4nSt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SweetAlertService", function () {
        return _alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__["SweetAlertService"];
      });
      /* harmony import */


      var _animation_animate_digit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./animation/animate-digit.service */
      "r78v");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AnimateDigitService", function () {
        return _animation_animate_digit_service__WEBPACK_IMPORTED_MODULE_3__["AnimateDigitService"];
      });
      /* harmony import */


      var _autentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./autentication/auth-guard.service */
      "yAsx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return _autentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"];
      });
      /* harmony import */


      var _file_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./file.storage.service */
      "TMp0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileStorageService", function () {
        return _file_storage_service__WEBPACK_IMPORTED_MODULE_5__["FileStorageService"];
      });
      /* harmony import */


      var _validate_field_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./validate-field.service */
      "r74M");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ValidateFieldService", function () {
        return _validate_field_service__WEBPACK_IMPORTED_MODULE_6__["ValidateFieldService"];
      });
      /* harmony import */


      var _common_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./common-services.service */
      "Iws0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommonServices", function () {
        return _common_services_service__WEBPACK_IMPORTED_MODULE_7__["CommonServices"];
      }); // export * from './address/address.service';

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
    "hlXp":
    /*!********************************************************!*\
      !*** ./src/app/core/models/application-count.model.ts ***!
      \********************************************************/

    /*! exports provided: ApplicationCount */

    /***/
    function hlXp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationCount", function () {
        return ApplicationCount;
      });

      var ApplicationCount = /*#__PURE__*/_createClass(function ApplicationCount() {
        _classCallCheck(this, ApplicationCount);
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
    "nBem":
    /*!*******************************************************!*\
      !*** ./src/app/core/services/data.storage.service.ts ***!
      \*******************************************************/

    /*! exports provided: DataStorageService */

    /***/
    function nBem(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataStorageService", function () {
        return DataStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataStorageService = /*@__PURE__*/function () {
        var DataStorageService = /*#__PURE__*/function () {
          function DataStorageService() {
            _classCallCheck(this, DataStorageService);
          }

          _createClass(DataStorageService, [{
            key: "saveUserAccountId",
            value: function saveUserAccountId(id) {
              sessionStorage.setItem('USER_ACCOUNT_ID', id);
            }
          }, {
            key: "getUserAccountId",
            value: function getUserAccountId() {
              return Number(sessionStorage.getItem('USER_ACCOUNT_ID'));
            }
          }, {
            key: "saveUserAccount",
            value: function saveUserAccount(account) {
              sessionStorage.setItem('USER_ACCOUNT', JSON.stringify(account));
            }
          }, {
            key: "getUserAccount",
            value: function getUserAccount() {
              return JSON.parse(sessionStorage.getItem('USER_ACCOUNT'));
            }
          }, {
            key: "saveUserRole",
            value: function saveUserRole(userRole) {
              sessionStorage.setItem('USER_ROLE', userRole);
            }
          }, {
            key: "getUserRole",
            value: function getUserRole() {
              return sessionStorage.getItem('USER_ROLE');
            }
          }, {
            key: "saveUserFirstname",
            value: function saveUserFirstname(name) {
              sessionStorage.setItem('USER_FIRST_NAME', name);
            }
          }, {
            key: "getUserFirstname",
            value: function getUserFirstname() {
              return sessionStorage.getItem('USER_FIRST_NAME');
            }
          }, {
            key: "saveUserAddress",
            value: function saveUserAddress(name) {
              sessionStorage.setItem('USER_ADDRESS', name);
            }
          }, {
            key: "getUserAddress",
            value: function getUserAddress() {
              return sessionStorage.getItem('USER_ADDRESS');
            }
          }, {
            key: "saveUserCompany",
            value: function saveUserCompany(company) {
              sessionStorage.setItem('USER_COMPANY', JSON.stringify(company));
            }
          }, {
            key: "getUserCompany",
            value: function getUserCompany() {
              return JSON.parse(sessionStorage.getItem('USER_COMPANY'));
            }
          }, {
            key: "setDisplayProgressbar",
            value: function setDisplayProgressbar(isShow) {
              sessionStorage.setItem('PROGRESS_BAR', '' + isShow);
            }
          }, {
            key: "getDisplayProgressbar",
            value: function getDisplayProgressbar() {
              return sessionStorage.getItem('PROGRESS_BAR');
            }
          }, {
            key: "setS1NewCompany",
            value: function setS1NewCompany(company) {
              sessionStorage.setItem('NEW_COMPANY', JSON.stringify(company));
            }
          }, {
            key: "getS1NewCompany",
            value: function getS1NewCompany() {
              return JSON.parse(sessionStorage.getItem('NEW_COMPANY'));
            }
          }, {
            key: "setS1NewBrand",
            value: function setS1NewBrand(brand) {
              sessionStorage.setItem('NEW_BRAND', JSON.stringify(brand));
            }
          }, {
            key: "getS1NewBrand",
            value: function getS1NewBrand() {
              return JSON.parse(sessionStorage.getItem('NEW_BRAND'));
            }
          }, {
            key: "setS1NewProduct",
            value: function setS1NewProduct(product) {
              sessionStorage.setItem('NEW_PRODUCT', JSON.stringify(product));
            }
          }, {
            key: "getS1NewProduct",
            value: function getS1NewProduct() {
              return JSON.parse(sessionStorage.getItem('NEW_PRODUCT'));
            }
          }, {
            key: "setDefaultCountry",
            value: function setDefaultCountry(country) {
              sessionStorage.setItem('DEFAULT_COUNTRY', JSON.stringify(country));
            }
          }, {
            key: "getDefaultCountry",
            value: function getDefaultCountry() {
              return JSON.parse(sessionStorage.getItem('DEFAULT_COUNTRY'));
            }
          }, {
            key: "setS1FormAndAppType",
            value: function setS1FormAndAppType(_ref) {
              var formType = _ref.formType,
                  appType = _ref.appType;
              sessionStorage.setItem('FORM_TYPE', formType);
              sessionStorage.setItem('APP_TYPE', JSON.stringify(appType));
            }
          }, {
            key: "getS1FormAndAppType",
            value: function getS1FormAndAppType() {
              var s1ApplicationDetails = {
                formType: sessionStorage.getItem('FORM_TYPE'),
                appType: JSON.parse(sessionStorage.getItem('APP_TYPE'))
              };
              return s1ApplicationDetails;
            }
          }, {
            key: "setNumberOfApplications",
            value: function setNumberOfApplications(numberOfApplications) {
              sessionStorage.setItem('NUMBER_OF_APPLICATIONS', numberOfApplications);
            }
          }, {
            key: "getNumberOfApplications",
            value: function getNumberOfApplications() {
              return Number(sessionStorage.getItem('NUMBER_OF_APPLICATIONS'));
            }
          }, {
            key: "setS1Application",
            value: function setS1Application(s1Application) {
              sessionStorage.setItem('S1_APPLICATION', JSON.stringify(s1Application));
            }
          }, {
            key: "getS1Application",
            value: function getS1Application() {
              return JSON.parse(sessionStorage.getItem('S1_APPLICATION'));
            }
          }, {
            key: "setMultipleS1Application",
            value: function setMultipleS1Application(multipleS1Application) {
              sessionStorage.setItem('MULTIPLE_S1_APPLICATIONS', JSON.stringify(multipleS1Application));
            }
          }, {
            key: "getMultipleS1Application",
            value: function getMultipleS1Application() {
              return JSON.parse(sessionStorage.getItem('MULTIPLE_S1_APPLICATIONS'));
            }
          }, {
            key: "setSpecialS1Application",
            value: function setSpecialS1Application(specialS1Application) {
              sessionStorage.setItem('SPECIAL_S1_APPLICATIONS', JSON.stringify(specialS1Application));
            }
          }, {
            key: "getSpecialS1Application",
            value: function getSpecialS1Application() {
              return JSON.parse(sessionStorage.getItem('SPECIAL_S1_APPLICATIONS'));
            }
          }, {
            key: "setAmount",
            value: function setAmount(amount) {
              sessionStorage.setItem('AMOUNT', JSON.stringify(amount));
            }
          }, {
            key: "getAmount",
            value: function getAmount() {
              return JSON.parse(sessionStorage.getItem('AMOUNT'));
            }
          }, {
            key: "setRequestFormAndAppType",
            value: function setRequestFormAndAppType(_ref2) {
              var formType = _ref2.formType,
                  appType = _ref2.appType;
              sessionStorage.setItem('FORM_TYPE', formType);
              sessionStorage.setItem('APP_TYPE', JSON.stringify(appType));
            }
          }, {
            key: "getRequestFormAndAppType",
            value: function getRequestFormAndAppType() {
              var s1ApplicationDetails = {
                formType: sessionStorage.getItem('FORM_TYPE'),
                appType: JSON.parse(sessionStorage.getItem('APP_TYPE'))
              };
              return s1ApplicationDetails;
            }
          }, {
            key: "setPayment",
            value: function setPayment(payment) {
              sessionStorage.setItem('PAYMENT', JSON.stringify(payment));
            }
          }, {
            key: "getPayment",
            value: function getPayment() {
              return JSON.parse(sessionStorage.getItem('PAYMENT'));
            }
          }, {
            key: "setDecisionStatus",
            value: function setDecisionStatus(decisionStatus) {
              sessionStorage.setItem('DECISIONSTATUS', JSON.stringify(decisionStatus));
            }
          }, {
            key: "getDecisionStatus",
            value: function getDecisionStatus() {
              return JSON.parse(sessionStorage.getItem('DECISIONSTATUS'));
            }
          }, {
            key: "setIsIdleCountdownDisplayed",
            value: function setIsIdleCountdownDisplayed(countdown) {
              sessionStorage.setItem('COUNTDOWN_DISPLAY', countdown);
            }
          }, {
            key: "getIsIdleCountdownDisplayed",
            value: function getIsIdleCountdownDisplayed() {
              return sessionStorage.getItem('COUNTDOWN_DISPLAY');
            }
          }, {
            key: "setIdleCountdown",
            value: function setIdleCountdown(countdown) {
              sessionStorage.setItem('COUNTDOWN', countdown);
            }
          }, {
            key: "getIdleCountdown",
            value: function getIdleCountdown() {
              return sessionStorage.getItem('COUNTDOWN');
            }
          }, {
            key: "signOut",
            value: function signOut() {
              // add all stored data here
              sessionStorage.removeItem('BEARER_TOKEN');
              sessionStorage.removeItem('LOGIN_INFO');
              sessionStorage.removeItem('USER_ACCOUNT');
              sessionStorage.removeItem('USER_ACCOUNT_ID');
              sessionStorage.removeItem('USER_ROLE');
              sessionStorage.removeItem('USER_FIRST_NAME');
              sessionStorage.removeItem('USER_ADDRESS');
              sessionStorage.removeItem('USER_COMPANY');
              sessionStorage.removeItem('PROGRESS_BAR');
              sessionStorage.removeItem('NEW_COMPANY');
              sessionStorage.removeItem('NEW_BRAND');
              sessionStorage.removeItem('NEW_PRODUCT');
              sessionStorage.removeItem('DEFAULT_COUNTRY');
              sessionStorage.removeItem('FORM_TYPE');
              sessionStorage.removeItem('APP_TYPE');
              sessionStorage.removeItem('NUMBER_OF_APPLICATIONS');
              sessionStorage.removeItem('S1_APPLICATION');
              sessionStorage.removeItem('MULTIPLE_S1_APPLICATION');
              sessionStorage.removeItem('SPECIAL_S1_APPLICATIONS');
              sessionStorage.removeItem('AMOUNT');
              sessionStorage.removeItem('PAYMENT');
              sessionStorage.removeItem('COUNTDOWN');
              sessionStorage.removeItem('COUNTDOWN_DISPLAY');
              sessionStorage.clear();
            }
          }]);

          return DataStorageService;
        }();

        DataStorageService.ɵfac = function DataStorageService_Factory(t) {
          return new (t || DataStorageService)();
        };

        DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: DataStorageService,
          factory: DataStorageService.ɵfac,
          providedIn: 'root'
        });
        return DataStorageService;
      }();
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
    "pPj3":
    /*!**************************************************************!*\
      !*** ./src/app/core/services/authorization/token.service.ts ***!
      \**************************************************************/

    /*! exports provided: TokenService */

    /***/
    function pPj3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TokenService = /*@__PURE__*/function () {
        var TokenService = /*#__PURE__*/function () {
          function TokenService() {
            _classCallCheck(this, TokenService);
          }

          _createClass(TokenService, [{
            key: "setUserLoginToken",
            value: function setUserLoginToken(token) {
              sessionStorage.setItem('BEARER_TOKEN', token);
            }
          }, {
            key: "getUserLoginToken",
            value: function getUserLoginToken() {
              return sessionStorage.getItem('BEARER_TOKEN');
            }
          }, {
            key: "setUserLoginData",
            value: function setUserLoginData(accessData) {
              sessionStorage.setItem('LOGIN_INFO', JSON.stringify(accessData));
            }
          }, {
            key: "getUserLoginData",
            value: function getUserLoginData() {
              return JSON.parse(sessionStorage.getItem('LOGIN_INFO'));
            }
          }]);

          return TokenService;
        }();

        TokenService.ɵfac = function TokenService_Factory(t) {
          return new (t || TokenService)();
        };

        TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: TokenService,
          factory: TokenService.ɵfac,
          providedIn: 'root'
        });
        return TokenService;
      }();
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
    "qc5V":
    /*!**********************************************!*\
      !*** ./src/app/core/services/api.service.ts ***!
      \**********************************************/

    /*! exports provided: ApiService */

    /***/
    function qc5V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*@__PURE__*/function () {
        var ApiService = /*#__PURE__*/function () {
          function ApiService(http) {
            _classCallCheck(this, ApiService);

            this.http = http;
          }

          _createClass(ApiService, [{
            key: "save",
            value: function save(endpoint, object) {
              return this.http.post("".concat(endpoint), object);
            }
          }, {
            key: "update",
            value: function update(endpoint, object) {
              return this.http.put("".concat(endpoint), object);
            }
          }, {
            key: "insert",
            value: function insert(endpoint, object, isNewEntry) {
              if (isNewEntry) return this.http.post("".concat(endpoint), object);else return this.http.put("".concat(endpoint), object);
            }
          }, {
            key: "findAll",
            value: function findAll(endpoint) {
              return this.http.get("".concat(endpoint));
            }
          }, {
            key: "findById",
            value: function findById(endpoint, id) {
              return this.http.get("".concat(endpoint, "/id/").concat(id));
            }
          }, {
            key: "findByParam",
            value: function findByParam(endpoint, param) {
              // return this.http.get(`${endpoint}/custom/search?${param}`);
              return this.http.get("".concat(endpoint, "/").concat(param));
            }
          }, {
            key: "deleteById",
            value: function deleteById(endpoint, id) {
              return this.http["delete"]("".concat(endpoint, "/id/").concat(id));
            }
          }, {
            key: "printReport",
            value: function printReport(endpoint, param) {
              return this.http.post(endpoint, param, {
                observe: 'body',
                responseType: 'blob'
              });
            }
          }]);

          return ApiService;
        }();

        ApiService.ɵfac = function ApiService_Factory(t) {
          return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        };

        ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ApiService,
          factory: ApiService.ɵfac,
          providedIn: 'root'
        });
        return ApiService;
      }();
      /***/

    },

    /***/
    "r74M":
    /*!*********************************************************!*\
      !*** ./src/app/core/services/validate-field.service.ts ***!
      \*********************************************************/

    /*! exports provided: ValidateFieldService */

    /***/
    function r74M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateFieldService", function () {
        return ValidateFieldService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ValidateFieldService = /*@__PURE__*/function () {
        var ValidateFieldService = /*#__PURE__*/function () {
          function ValidateFieldService() {
            _classCallCheck(this, ValidateFieldService);
          }

          _createClass(ValidateFieldService, [{
            key: "numbersOnly",
            value: function numbersOnly(event) {
              // numbers only and allows select all, tab, cut, copy, paste and backspace
              return event.key >= 0 && event.key <= 9 || // num 0-9
              event.keyCode === 8 || // backspace
              event.keyCode === 9 || // tab
              event.ctrlKey === true && (event.keyCode === 65 || // select all
              event.keyCode === 67 || // copy
              event.keyCode === 88 || // cut
              event.keyCode === 8) // clear from right to left
              || event.key === '.'; // period;
            }
          }, {
            key: "float",
            value: function float(event) {
              // numbers only and allows select all = 65, tab = 9, cut = 88, copy = 67, paste = 86,
              // backspace = 8, period = 190, and decimal = 110
              return event.key >= 0 && event.key <= 9 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 190 || event.keyCode === 110 || event.ctrlKey === true && (event.keyCode === 65 || event.keyCode === 67 || event.keyCode === 88 || event.keyCode === 86 || event.keyCode === 8);
            }
          }]);

          return ValidateFieldService;
        }();

        ValidateFieldService.ɵfac = function ValidateFieldService_Factory(t) {
          return new (t || ValidateFieldService)();
        };

        ValidateFieldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ValidateFieldService,
          factory: ValidateFieldService.ɵfac,
          providedIn: 'root'
        });
        return ValidateFieldService;
      }();
      /***/

    },

    /***/
    "r78v":
    /*!******************************************************************!*\
      !*** ./src/app/core/services/animation/animate-digit.service.ts ***!
      \******************************************************************/

    /*! exports provided: AnimateDigitService */

    /***/
    function r78v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimateDigitService", function () {
        return AnimateDigitService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AnimateDigitService = /*@__PURE__*/function () {
        var AnimateDigitService = /*#__PURE__*/function () {
          function AnimateDigitService() {
            _classCallCheck(this, AnimateDigitService);

            this.steps = 12;
          }

          _createClass(AnimateDigitService, [{
            key: "counterFunc",
            value: function counterFunc(endValue, durationMs, element) {
              var _this17 = this;

              var stepCount = Math.abs(durationMs / this.steps);
              var valueIncrement = (endValue - 0) / stepCount;
              var sinValueIncrement = Math.PI / stepCount;
              var currentValue = 0;
              var currentSinValue = 0;

              var step = function step() {
                currentSinValue += sinValueIncrement;
                currentValue += valueIncrement * Math.pow(Math.sin(currentSinValue), 2) * 2;
                element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

                if (currentSinValue < Math.PI) {
                  window.requestAnimationFrame(step);
                } else {
                  element.nativeElement.textContent = _this17.numberWithCommas(endValue);
                }
              };

              step();
            }
          }, {
            key: "numberWithCommas",
            value: function numberWithCommas(num) {
              return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          }]);

          return AnimateDigitService;
        }();

        AnimateDigitService.ɵfac = function AnimateDigitService_Factory(t) {
          return new (t || AnimateDigitService)();
        };

        AnimateDigitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AnimateDigitService,
          factory: AnimateDigitService.ɵfac,
          providedIn: 'root'
        });
        return AnimateDigitService;
      }();
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
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _core_services_authorization_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/services/authorization/auth-guard.service */
      "MJGS");

      var routes = [{
        path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ASC,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shared-layout-layout-module */
          "shared-layout-layout-module").then(__webpack_require__.bind(null,
          /*! ./shared/layout/layout.module */
          "pV/B")).then(function (m) {
            return m.LayoutModule;
          });
        },
        canActivate: [_core_services_authorization_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        canActivateChild: [_core_services_authorization_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LANDING_PAGE,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-pages-landing-page-landing-page-module */
          [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-list-user-list-module"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-role-user-role-module"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-pages-landing-page-landing-page-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/pages/landing-page/landing-page.module */
          "FTG2")).then(function (m) {
            return m.LandingPageModule;
          });
        }
      }, {
        path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].PASSWORD_RESET,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module */
          "modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module").then(__webpack_require__.bind(null,
          /*! ./modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.module */
          "0Qv6")).then(function (m) {
            return m.ResetPasswordLandingPageModule;
          });
        }
      }, {
        path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ACCESS_DENIED,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shared-access-denied-access-denied-module */
          "access-denied-access-denied-module").then(__webpack_require__.bind(null,
          /*! ./shared/access-denied/access-denied.module */
          "ahAP")).then(function (m) {
            return m.AccessDeniedModule;
          });
        }
      }, {
        path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ACCOUNT_VERIFICATION,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | shared-success-verification-page-success-verification-page-module */
          "success-verification-page-success-verification-page-module").then(__webpack_require__.bind(null,
          /*! ./shared/success-verification-page/success-verification-page.module */
          "lbkY")).then(function (m) {
            return m.SuccessVerificationPageModule;
          });
        }
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LANDING_PAGE
      }, {
        path: '**',
        redirectTo: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LANDING_PAGE
      }];

      var AppRoutingModule = /*@__PURE__*/function () {
        var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        });

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "x25a":
    /*!****************************************!*\
      !*** ./src/app/core/models/counter.ts ***!
      \****************************************/

    /*! exports provided: BadgeCounnter */

    /***/
    function x25a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeCounnter", function () {
        return BadgeCounnter;
      });

      var BadgeCounnter = /*#__PURE__*/_createClass(function BadgeCounnter() {
        _classCallCheck(this, BadgeCounnter);

        this.countOriginal = 0;
        this.countRevision = 0;
        this.countCompliance = 0;
        this.countToa = 0;
        this.countTotalApplications = 0;
        this.countTotalMultipleApplications = 0;
        this.countTotalSpecialApplications = 0;
        this.countScreenerDecisionComment = 0;
        this.countReviewerDecisionComment = 0;
        this.countTotalScreenerAndReviewerDecisionComment = 0;
        this.countTotalReleased = 0;
        this.countTotalForRelease = 0;
        this.countTotalAssignedApplication = 0;
        this.countTotalApplicationByAssignedUser = 0;
        this.countTotalSpecialClearingRequest = 0;
        this.countTotalOngoingAppeal = 0;
        this.countForPaymentAccounting = 0;
        this.returnedApplications = 0;
        this.screenedApplications = 0;
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

    },

    /***/
    "yAsx":
    /*!*******************************************************************!*\
      !*** ./src/app/core/services/autentication/auth-guard.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function yAsx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthGuardService = /*@__PURE__*/function () {
        var AuthGuardService = /*#__PURE__*/_createClass(function AuthGuardService() {
          _classCallCheck(this, AuthGuardService);
        });

        AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
          return new (t || AuthGuardService)();
        };

        AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AuthGuardService,
          factory: AuthGuardService.ɵfac,
          providedIn: 'root'
        });
        return AuthGuardService;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zV6t":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/access-denied/access-denied.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AccessDeniedComponent */

    /***/
    function zV6t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function () {
        return AccessDeniedComponent;
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


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AccessDeniedComponent = /*@__PURE__*/function () {
        var AccessDeniedComponent = /*#__PURE__*/function () {
          function AccessDeniedComponent(router) {
            _classCallCheck(this, AccessDeniedComponent);

            this.router = router;
          }

          _createClass(AccessDeniedComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "goToLogin",
            value: function goToLogin() {
              // add logout function here
              this.router.navigateByUrl('/login');
            }
          }]);

          return AccessDeniedComponent;
        }();

        AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) {
          return new (t || AccessDeniedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        };

        AccessDeniedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AccessDeniedComponent,
          selectors: [["app-access-denied"]],
          decls: 19,
          vars: 0,
          consts: [["src", "../../../../assets/images/logo.png", "alt", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["routerLink", "/asc/page/dashboard", 1, "btn", "btn-link"]],
          template: function AccessDeniedComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lock");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Access Denied");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You don't have permission to access this page. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Contact an administrator to get permission or go to the home page ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " and browse other pages. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessDeniedComponent_Template_button_click_15_listener() {
                return ctx.goToLogin();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login as a different user ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Go to Homepage");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
          styles: ["div[_ngcontent-%COMP%] {\n  text-align: center;\n  position: fixed;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  line-height: 2;\n  margin-bottom: 1em;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\nbody[_ngcontent-%COMP%] {\n  color: #bf2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAjYmYyYzJjO1xyXG59Il19 */"]
        });
        return AccessDeniedComponent;
      }();
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map