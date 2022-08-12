(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-voucher-company-voucher-fund-company-voucher-fund-module"], {
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

    },

    /***/
    "8/m5":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund-routing.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: CompanyVoucherFundRoutingModule */

    /***/
    function m5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherFundRoutingModule", function () {
        return CompanyVoucherFundRoutingModule;
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


      var _company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-voucher-fund.component */
      "FBay");

      var routes = [{
        path: '',
        component: _company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherFundComponent"]
      }];

      var CompanyVoucherFundRoutingModule = /*@__PURE__*/function () {
        var CompanyVoucherFundRoutingModule = /*#__PURE__*/_createClass(function CompanyVoucherFundRoutingModule() {
          _classCallCheck(this, CompanyVoucherFundRoutingModule);
        });

        CompanyVoucherFundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CompanyVoucherFundRoutingModule
        });
        CompanyVoucherFundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CompanyVoucherFundRoutingModule_Factory(t) {
            return new (t || CompanyVoucherFundRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CompanyVoucherFundRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyVoucherFundRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "C+gi":
    /*!************************************************************!*\
      !*** ./src/app/core/models/voucher-replenishment.model.ts ***!
      \************************************************************/

    /*! exports provided: VoucherReplenishment */

    /***/
    function CGi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherReplenishment", function () {
        return VoucherReplenishment;
      });

      var VoucherReplenishment = /*#__PURE__*/_createClass(function VoucherReplenishment() {
        _classCallCheck(this, VoucherReplenishment);
      });
      /***/

    },

    /***/
    "FBay":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: CompanyVoucherFundComponent */

    /***/
    function FBay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherFundComponent", function () {
        return CompanyVoucherFundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_voucher_replenishment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/core/models/voucher-replenishment.model */
      "C+gi");
      /* harmony import */


      var app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/core/models/voucher.model */
      "Inok");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var _core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../core/services/data.storage.service */
      "nBem");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CompanyVoucherFundComponent_div_17_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "object", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This browser does not support PDF!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function CompanyVoucherFundComponent_div_17_mat_form_field_20_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyVoucherFundComponent_div_17_mat_form_field_20_mat_option_4_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var i_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r7.getCompanyDetails(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.companyName, " ");
        }
      }

      function CompanyVoucherFundComponent_div_17_mat_form_field_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Company Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherFundComponent_div_17_mat_form_field_20_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.voucherReplenishment.company = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyVoucherFundComponent_div_17_mat_form_field_20_mat_option_4_Template, 2, 2, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.voucherReplenishment.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.companyList);
        }
      }

      function CompanyVoucherFundComponent_div_17_mat_form_field_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.company.companyName);
        }
      }

      function CompanyVoucherFundComponent_div_17_mat_form_field_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remaining Voucher Balance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.remainingVoucherBalance);
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function CompanyVoucherFundComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Company Information ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Voucher: \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PDF file only!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherFundComponent_div_17_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.attachment = $event;
          })("change", function CompanyVoucherFundComponent_div_17_Template_input_change_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CompanyVoucherFundComponent_div_17_div_16_Template, 6, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CompanyVoucherFundComponent_div_17_mat_form_field_20_Template, 5, 2, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompanyVoucherFundComponent_div_17_mat_form_field_21_Template, 4, 1, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CompanyVoucherFundComponent_div_17_mat_form_field_22_Template, 4, 1, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Amount Transferred ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherFundComponent_div_17_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.voucherReplenishment.amountTransfered = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyVoucherFundComponent_div_17_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.uploadVoucher();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " SUBMIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-form-list", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.attachment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.attachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.voucherReplenishmentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.process === "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.voucherReplenishment.amountTransfered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.attachment || !(ctx_r0.voucherReplenishment == null ? null : ctx_r0.voucherReplenishment.amountTransfered));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSourceReplenishments)("displayedColumns", ctx_r0.displayedReplenishmentColumns);
        }
      }

      var CompanyVoucherFundComponent = /*@__PURE__*/function () {
        var CompanyVoucherFundComponent = /*#__PURE__*/function () {
          function CompanyVoucherFundComponent(formBuilder, router, apiService, sweetAlertService, sanitizer, fileStorageService, dataStorage) {
            _classCallCheck(this, CompanyVoucherFundComponent);

            this.formBuilder = formBuilder;
            this.router = router;
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.sanitizer = sanitizer;
            this.fileStorageService = fileStorageService;
            this.dataStorage = dataStorage;
            this.displayedColumns = ['company', 'fundAmount', 'voucherDate'];
            this.displayedReplenishmentColumns = ['transferedDate', 'amountTransfered', 'status'];
            this.voucherReplenishment = new app_core_models_voucher_replenishment_model__WEBPACK_IMPORTED_MODULE_6__["VoucherReplenishment"]();
            this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_7__["Voucher"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_4__["Company"]();
            this.voucherReplenishmentList = [];
            this.companyList = [];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["STATUSES"]);
            this.currentDate = new Date(); // safeURLVoucherReplenishment: any;

            this.previewDocument = false;
            this.process = 'save';
            this.remainingVoucherBalance = 0;
          }

          _createClass(CompanyVoucherFundComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.currentUser = this.dataStorage.getUserAccount();
              this.setFormValidator();
              this.getCompanyList();
              this.getVoucherTrasnferList();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.voucherReplenishment.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
              this.voucherReplenishmentForm = this.formBuilder.group({
                amountTransfered: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                transferedDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.voucherReplenishment = new app_core_models_voucher_replenishment_model__WEBPACK_IMPORTED_MODULE_6__["VoucherReplenishment"]();
              this.voucherReplenishment.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
              this.voucherReplenishmentForm.markAsUntouched();
              this.voucherReplenishmentForm.markAsPristine();
            }
          }, {
            key: "getCompanyList",
            value: function getCompanyList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].company).subscribe(function (res) {
                _this.companyList = res.responseData.data;
              });
            }
          }, {
            key: "getCompanyDetails",
            value: function getCompanyDetails(res) {
              this.company = res;
            }
          }, {
            key: "getVoucherTrasnferDetails",
            value: function getVoucherTrasnferDetails() {
              var _this2 = this;

              this.process = 'update';
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucher, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  // this.voucherReplenishment.company = res.responseData.data.company.companyName;
                  _this2.company = res.responseData.data.company;
                  _this2.voucher.voucherAttachmentReference = res.responseData.data.voucherAttachmentReference;
                  _this2.voucherReplenishment.company = _this2.company;
                  _this2.remainingVoucherBalance = res.responseData.data.fundAmount; // this.voucherReplenishment.amountTransfered = 0;

                  _this2.voucherReplenishment.transferedDate = res.responseData.data.voucherDate;
                  _this2.voucherReplenishment.status = res.responseData.data.status;

                  _this2.getVoucherTrasnferList();

                  _this2.viewAttachmentFile();

                  _this2.getCompanyReplenishmentList();

                  _this2.previewDocument = true;
                }
              });
            }
          }, {
            key: "viewAttachmentFile",
            value: function viewAttachmentFile() {
              var _this3 = this;

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, "voucher-attachment-reference/" + this.voucher.voucherAttachmentReference).subscribe(function (res1) {
                if (res1) {
                  _this3.attachmentDocument = res1.responseData.data;
                  _this3.safeURL = _this3.sanitizer.bypassSecurityTrustResourceUrl(_this3.attachmentDocument.fileURL);
                }
              }, function (err) {
                _this3.attachmentDocument = [];
              });
            }
          }, {
            key: "getVoucherTrasnferList",
            value: function getVoucherTrasnferList() {
              var _this4 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucher).subscribe(function (res) {
                _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this4.dataSource.paginator = _this4.formListComponent.paginator;
                _this4.dataSource.sort = _this4.formListComponent.sort;
              });
            }
          }, {
            key: "getCompanyReplenishmentList",
            value: function getCompanyReplenishmentList() {
              var _this5 = this;

              var _a;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherReplenishmentsByCompany + ((_a = this.company) === null || _a === void 0 ? void 0 : _a.id)).subscribe(function (res) {
                _this5.dataSourceReplenishments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this5.dataSourceReplenishments.paginator = _this5.formListComponent.paginator;
                _this5.dataSourceReplenishments.sort = _this5.formListComponent.sort;
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
                  this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
                  this.previewDocument = true;
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
            key: "uploadVoucher",
            value: function uploadVoucher() {
              var _this6 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                text: 'Are you sure you want to submit this VOUCHER?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  if (_this6.process === 'update') {
                    _this6.saveVoucherReplenishment();
                  } else {
                    _this6.dataStorage.setDisplayProgressbar(true);

                    var params = '';
                    params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["ATTACHMENT_TYPE"].VOUCHER_FUND + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["SUBMISSION_TYPE"].ORIGINAL;

                    _this6.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, _this6.selectedFiles.item(0), params).subscribe(function (res) {
                      var obj = res.responseData.data;
                      _this6.voucherReplenishment.voucherAttachmentReference = obj.voucherAttachmentReference;
                      _this6.voucherReplenishment.company = _this6.company; // this.voucher.voucherSignatories = this.signatoriesList;

                      console.log('VOUCHER REPLENISHMENT', _this6.voucherReplenishment);

                      _this6.saveVoucherReplenishment();

                      _this6.selectedFiles = undefined;
                    }, function (err) {
                      _this6.sweetAlertService.error(err);
                    }, function () {
                      _this6.dataStorage.setDisplayProgressbar(false);
                    });
                  }
                }
              });
            }
          }, {
            key: "saveVoucherReplenishment",
            value: function saveVoucherReplenishment() {
              var _this7 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].accountingVoucherFundTransfer, this.voucherReplenishment).subscribe(function (res) {
                console.log(res);

                _this7.sweetAlertService.success(res);

                _this7.setFormValidator();

                _this7.getVoucherTrasnferList();

                _this7.resetFormValidator();

                _this7.process = 'save';
                _this7.previewDocument = false;
                _this7.attachment = null;

                _this7.router.navigateByUrl('asc/page/accounting/voucher-replenishment');
              }, function (err) {
                console.log(err);

                _this7.sweetAlertService.error(err);
              });
            }
          }, {
            key: "compareStatus",
            value: function compareStatus(value, selected) {
              if (value && selected) {
                return value === selected;
              }
            }
          }]);

          return CompanyVoucherFundComponent;
        }();

        CompanyVoucherFundComponent.ɵfac = function CompanyVoucherFundComponent_Factory(t) {
          return new (t || CompanyVoucherFundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_13__["DataStorageService"]));
        };

        CompanyVoucherFundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CompanyVoucherFundComponent,
          selectors: [["app-company-voucher-fund"]],
          viewQuery: function CompanyVoucherFundComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          inputs: {
            safeURL: "safeURL"
          },
          decls: 18,
          vars: 3,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "col-md-12"], [1, "material-icons"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["class", "container-fluid", 4, "ngIf"], [1, "col-md-12", "information-title"], [1, "row", "col-md-12"], [1, "row", "col-md-5"], ["type", "file", "accept", ".pdf", 1, "file-upload", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [4, "ngIf"], [1, "row", "col-md-7"], [3, "formGroup"], ["class", "col-md-12", "appearance", "outline", 4, "ngIf"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "amountTransfered", "formControlName", "amountTransfered", "type", "number", 3, "ngModel", "ngModelChange"], [1, "col-md-10"], [1, "col-md-2"], ["mat-raised-button", "", 1, "button-red", 3, "disabled", "click"], [1, "material-icons", "color__white"], [3, "dataSource", "displayedColumns"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "500", 3, "data"], ["width", "100%", "height", "500", 3, "src"], ["appearance", "outline", 1, "col-md-12"], ["name", "company", "formControlName", "company", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["matInput", "", "readonly", "", 3, "value"], ["matInput", "", "name", "remainingVoucherBalance", "formControlName", "remainingVoucherBalance", "type", "number", "readonly", "", 3, "value"]],
          template: function CompanyVoucherFundComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "view_list");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Voucher Replenishment ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "error_outline");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Note: Select enrolled voucher to add fund or view amount replenishments made.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-form-list", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function CompanyVoucherFundComponent_Template_app_form_list_selectInListFunction_15_listener() {
                return ctx.getVoucherTrasnferDetails();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyVoucherFundComponent_div_17_Template, 42, 12, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole.name) === "ROLE_APPLICANT" || (ctx.currentUser == null ? null : ctx.currentUser.userRole.name) === "ROLE_ACCOUNTING" && ctx.previewDocument === true);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__["FormListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"]],
          styles: [".button-green[_ngcontent-%COMP%] {\n  background-color: green;\n  color: white;\n}\n\n.information-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2NvbXBhbnktdm91Y2hlci9jb21wYW55LXZvdWNoZXItZnVuZC9jb21wYW55LXZvdWNoZXItZnVuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9jb21wYW55LXZvdWNoZXIvY29tcGFueS12b3VjaGVyLWZ1bmQvY29tcGFueS12b3VjaGVyLWZ1bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyZWVue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmluZm9ybWF0aW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59Il19 */"]
        });
        return CompanyVoucherFundComponent;
      }();
      /***/

    },

    /***/
    "O0vE":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund.module.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CompanyVoucherFundModule */

    /***/
    function O0vE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherFundModule", function () {
        return CompanyVoucherFundModule;
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


      var _company_voucher_fund_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-voucher-fund-routing.module */
      "8/m5");
      /* harmony import */


      var _company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-voucher-fund.component */
      "FBay");
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


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");

      var CompanyVoucherFundModule = /*@__PURE__*/function () {
        var CompanyVoucherFundModule = /*#__PURE__*/_createClass(function CompanyVoucherFundModule() {
          _classCallCheck(this, CompanyVoucherFundModule);
        });

        CompanyVoucherFundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CompanyVoucherFundModule
        });
        CompanyVoucherFundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CompanyVoucherFundModule_Factory(t) {
            return new (t || CompanyVoucherFundModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_voucher_fund_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherFundRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return CompanyVoucherFundModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyVoucherFundModule, {
          declarations: [_company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherFundComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_voucher_fund_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherFundRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=company-voucher-company-voucher-fund-company-voucher-fund-module-es5.js.map