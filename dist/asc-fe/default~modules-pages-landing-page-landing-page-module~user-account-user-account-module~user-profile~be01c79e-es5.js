(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e"], {
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
    "B0iI":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/user-account/user-account-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: UserAccountRoutingModule */

    /***/
    function B0iI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccountRoutingModule", function () {
        return UserAccountRoutingModule;
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


      var _user_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-account.component */
      "ea/y");

      var routes = [{
        path: '',
        component: _user_account_component__WEBPACK_IMPORTED_MODULE_2__["UserAccountComponent"]
      }];

      var UserAccountRoutingModule = /*@__PURE__*/function () {
        var UserAccountRoutingModule = /*#__PURE__*/_createClass(function UserAccountRoutingModule() {
          _classCallCheck(this, UserAccountRoutingModule);
        });

        UserAccountRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: UserAccountRoutingModule
        });
        UserAccountRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function UserAccountRoutingModule_Factory(t) {
            return new (t || UserAccountRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return UserAccountRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserAccountRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Pwem":
    /*!*************************************************!*\
      !*** ./src/app/core/models/eSignature.model.ts ***!
      \*************************************************/

    /*! exports provided: ESignature */

    /***/
    function Pwem(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESignature", function () {
        return ESignature;
      });

      var ESignature = /*#__PURE__*/_createClass(function ESignature() {
        _classCallCheck(this, ESignature);
      });
      /***/

    },

    /***/
    "ea/y":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/user-account/user-account.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: UserAccountComponent */

    /***/
    function eaY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function () {
        return UserAccountComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/core/models/eSignature.model */
      "Pwem");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../company/add-company/add-company.component */
      "9hFf");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");

      var _c0 = ["stepper"];
      var _c1 = ["selectFileButton"];

      function UserAccountComponent_mat_tab_group_9_mat_form_field_35_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r14 = ctx.$implicit;
          var tmp_1_0 = null;
          var tmp_1_1 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r14 == null ? null : i_r14.name == null ? null : (tmp_1_0 = i_r14.name.replaceAll("ROLE_", "")) == null ? null : (tmp_1_1 = tmp_1_0.replace("_", " ")) == null ? null : tmp_1_1.replace("ENCODER", "EVALUATOR"), " ");
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_form_field_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " User Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_mat_form_field_35_Template_mat_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r15.userAccount.userRole = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserAccountComponent_mat_tab_group_9_mat_form_field_35_mat_option_6_Template, 2, 2, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.userAccount.userRole)("compareWith", ctx_r3.compareUserRole)("disabled", (ctx_r3.userAccount == null ? null : ctx_r3.userAccount.userRole == null ? null : ctx_r3.userAccount.userRole.name) == "ROLE_APPLICANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.userRoleList);
        }
      }

      function UserAccountComponent_mat_tab_group_9_button_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_button_37_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r17.resendEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Resend Email Verification ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_div_38_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r20.companyName, " ");
        }
      }

      function UserAccountComponent_mat_tab_group_9_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "label_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Company Information: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_div_38_Template_mat_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r21.userAccount.company = $event;
          })("selectionChange", function UserAccountComponent_mat_tab_group_9_div_38_Template_mat_select_selectionChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r23.getSelectedCompany($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_div_38_Template_mat_option_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r24.openCompanyComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Add New Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserAccountComponent_mat_tab_group_9_div_38_mat_option_15_Template, 2, 2, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Member Affiliation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Company Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Telephone Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Alternative Telephone Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Contact Person: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Contact Person Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.userAccount.company)("compareWith", ctx_r5.compareCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.companyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.membersAffiliation == null ? null : ctx_r5.userAccount.company.membersAffiliation.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.companyMobileNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.companyTelephoneNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.companyTelephoneNo2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.contactPersonName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.contactPersonEmail);
        }
      }

      function UserAccountComponent_mat_tab_group_9_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "error_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Note: Proceed to Account Information to complete adding of ASC user.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_button_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_button_41_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r25.insert(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "offline_pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " UPDATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !(ctx_r7.userInfo == null ? null : ctx_r7.userInfo.valid));
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_input_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "input", 59, 60);
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r27.eSign.originalFilename);
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_input_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 61, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UserAccountComponent_mat_tab_group_9_mat_tab_43_input_18_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r35.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r37.deleteESignature();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " DELETE E-SIGNATURE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r39.viewDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "open_in_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " VIEW DOCUMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r41.uploadSignature();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " UPLOAD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r31.safeURLSignature || !ctx_r31.isShowUploadButton);
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "object", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "iframe", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This browser does not support PDF!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx_r32.safeURLSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r32.safeURLSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);
        }
      }

      function UserAccountComponent_mat_tab_group_9_mat_tab_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-tab", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " \xA0Upload e-Signature ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Filename: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, UserAccountComponent_mat_tab_group_9_mat_tab_43_input_17_Template, 2, 1, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, UserAccountComponent_mat_tab_group_9_mat_tab_43_input_18_Template, 2, 0, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_mat_tab_43_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r43.eSign.signatureAttachmentReference = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, UserAccountComponent_mat_tab_group_9_mat_tab_43_button_22_Template, 4, 0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, UserAccountComponent_mat_tab_group_9_mat_tab_43_button_23_Template, 4, 0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, UserAccountComponent_mat_tab_group_9_mat_tab_43_button_25_Template, 4, 1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, UserAccountComponent_mat_tab_group_9_mat_tab_43_div_27_Template, 6, 2, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r8.eSignature);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.eSign.originalFilename);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r8.eSign.originalFilename);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r8.eSign.signatureAttachmentReference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.eSign == null ? null : ctx_r8.eSign.fileURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.eSign == null ? null : ctx_r8.eSign.signatureAttachmentReference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.isShowUploadButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.previewDocument == true && (ctx_r8.userAccount == null ? null : ctx_r8.userAccount.signatureAttachmentReference));
        }
      }

      function UserAccountComponent_mat_tab_group_9_ng_template_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Account Information");
        }
      }

      function UserAccountComponent_mat_tab_group_9_p_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Password must contain lower,upper case letter and number. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_p_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Password not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_mat_tab_group_9_button_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_button_86_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r45.insert(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "offline_pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " SAVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !(ctx_r12.userInfo == null ? null : ctx_r12.userInfo.valid) || !(ctx_r12.accountInfo == null ? null : ctx_r12.accountInfo.valid) || !(ctx_r12.userAccount == null ? null : ctx_r12.userAccount.userRole) || !(ctx_r12.userAccount == null ? null : ctx_r12.userAccount.password) || !ctx_r12.confirmPasswords);
        }
      }

      function UserAccountComponent_mat_tab_group_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-tab-group", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "label_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Personal Information: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Given name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r47.userAccount.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Middle name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r49.userAccount.middleName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Last name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r50.userAccount.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Mobile Number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r51.userAccount.mobileNumber = $event;
          })("keydown", function UserAccountComponent_mat_tab_group_9_Template_input_keydown_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r52.validateFieldService.numbersOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, UserAccountComponent_mat_tab_group_9_mat_form_field_35_Template, 7, 4, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, UserAccountComponent_mat_tab_group_9_button_37_Template, 4, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, UserAccountComponent_mat_tab_group_9_div_38_Template, 45, 9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, UserAccountComponent_mat_tab_group_9_div_39_Template, 5, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, UserAccountComponent_mat_tab_group_9_button_41_Template, 4, 1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, UserAccountComponent_mat_tab_group_9_mat_tab_43_Template, 30, 8, "mat-tab", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-tab", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, UserAccountComponent_mat_tab_group_9_ng_template_46_Template, 1, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "label_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Account Information: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Email Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r53.userAccount.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r54.userAccount.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_Template_button_click_68_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r55.hidePassword = !ctx_r55.hidePassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, UserAccountComponent_mat_tab_group_9_p_71_Template, 4, 0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Confirm Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_79_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r56.confirmPasswords = $event;
          })("keyup", function UserAccountComponent_mat_tab_group_9_Template_input_keyup_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r57.confirmPassword(ctx_r57.confirmPasswords);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r58.hideConfirmPassword = !ctx_r58.hideConfirmPassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](83, UserAccountComponent_mat_tab_group_9_p_83_Template, 4, 0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, UserAccountComponent_mat_tab_group_9_button_86_Template, 4, 1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserAccountComponent_mat_tab_group_9_Template_button_click_87_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r59.updateCredentials();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "offline_pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " UPDATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.userInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.userAccount.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.userAccount.middleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.userAccount.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.userAccount.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.currentUserRole === "ROLE_SUPER_ADMIN" || ctx_r0.currentUserRole === "ROLE_ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.firstName) != undefined && (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.status) === "VERIFICATION_SENT" && (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.accountType) === "APPLICANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.userRole == null ? null : ctx_r0.userAccount.userRole.name) == "ROLE_APPLICANT" && !ctx_r0.isAscUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.userRole == null ? null : ctx_r0.userAccount.userRole.name) !== "ROLE_APPLICANT" && (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.accountInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.userAccount.username)("readonly", ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx_r0.hidePassword ? "password" : "text")("ngModel", ctx_r0.userAccount.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hidePassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.hidePassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.accountInfo.get("password").dirty && ctx_r0.accountInfo.controls["password"].errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx_r0.hideConfirmPassword ? "password" : "text")("ngModel", ctx_r0.confirmPasswords);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hideConfirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.hideConfirmPassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.accountInfo.get("confirmPasswords").dirty && !ctx_r0.passwordMatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !(ctx_r0.accountInfo == null ? null : ctx_r0.accountInfo.valid))("hidden", !(ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));
        }
      }

      function UserAccountComponent_mat_tab_group_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-tab-group", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedTabChange", function UserAccountComponent_mat_tab_group_13_Template_mat_tab_group_selectedTabChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r60.changeTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-tab", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-tab", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserAccountComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-form-list", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function UserAccountComponent_span_15_Template_app_form_list_selectInListFunction_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r62.viewUserInformation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx_r2.dataSource)("displayedColumns", ctx_r2.displayedColumns);
        }
      }

      var UserAccountComponent = /*@__PURE__*/function () {
        var UserAccountComponent = /*#__PURE__*/function () {
          //isUpdateAscUser: boolean;
          function UserAccountComponent(apiService, formBuilder, sweetAlertService, dataStorageService, validateFieldService, router, fileStorageService, spinner, sanitizer, dialog, dialogRef, data) {
            _classCallCheck(this, UserAccountComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dataStorageService = dataStorageService;
            this.validateFieldService = validateFieldService;
            this.router = router;
            this.fileStorageService = fileStorageService;
            this.spinner = spinner;
            this.sanitizer = sanitizer;
            this.dialog = dialog;
            this.dialogRef = dialogRef;
            this.data = data;
            this.displayedColumns = ['firstName', 'lastName', 'companyDescription', 'emailAddress', 'mobileNumber', 'status'];
            this.currentTab = "NONASC";
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_7__["Company"]();
            this.userRole = new _models__WEBPACK_IMPORTED_MODULE_7__["UserRole"]();
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_7__["Affiliation"]();
            this.eSign = new app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_9__["ESignature"]();
            this.userAccountList = [];
            this.userRoleList = [];
            this.companyList = [];
            this.affiliationList = [];
            this.displayTable = false;
            this.isShowUploadButton = false;
            this.previewDocument = false;
            this.passwordMatch = false;
            this.hidePassword = true;
            this.hideConfirmPassword = true;
            this.isFromUserProfile = false;

            if (data) {
              this.isFromUserProfile = data.isFromProfile;
              this.userAccount = data.userAccount;
              this.viewUserInformation();
            }
          }

          _createClass(UserAccountComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.setFormValidator();
              this.getUserPerTypeList();
              this.getMaintenanceList(); // alert(this.isFromUserProfile)

              this.currentUserRole = this.dataStorageService.getUserRole();
            }
          }, {
            key: "save",
            value: function save() {
              var _this = this;

              this.userAccount.username = this.userAccount.username.toLowerCase();

              if (this.currentUserRole === 'ROLE_SUPER_ADMIN' || this.currentUserRole === 'ROLE_ADMIN') {
                this.userAccount.company = null;
              } // this.apiService.save(ENDPOINTS.addUserAccount, this.userAccount).subscribe(


              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, this.userAccount).subscribe(function (res) {
                if (res !== undefined) {
                  _this.sweetAlertService.customSuccessMessage('Account has been created successfully.');

                  var evt = {
                    index: null
                  };

                  if (_this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                    evt.index = 0;
                  } else {
                    evt.index = 1;
                  }

                  _this.accountInfo.reset();

                  if (_this.isFromUserProfile) {
                    _this.dialog.closeAll();
                  }
                }
              }, function (err) {
                var _a;

                _this.sweetAlertService.customErrorMessage(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err.error);

                console.log('ERROR:::', err);
              }, function () {
                _this.resetFormValidator();

                if (_this.currentTab == "NONASC") _this.getUserPerTypeList();else if (_this.currentTab == "ASC") _this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                _this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this2 = this;

              console.log('update');
              var endpoint = this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT ? _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount : _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updateUserAccount;
              this.apiService.update(endpoint, this.userAccount).subscribe(function (res) {
                if (res !== undefined) {
                  // this.updateCredentials();
                  _this2.sweetAlertService.customSuccessMessage('Account was successfully updated');

                  var evt = {
                    index: null
                  };
                  console.log(_this2.userAccount);

                  if (_this2.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                    evt.index = 0;
                  } else {
                    evt.index = 1;
                  } // this.changeTab(evt);


                  _this2.accountInfo.reset();

                  if (_this2.isFromUserProfile) {
                    _this2.dialog.closeAll();
                  }
                }
              }, function (err) {
                console.log(err);

                _this2.sweetAlertService.error(err);
              }, function () {
                if (_this2.currentTab == "NONASC") _this2.getUserPerTypeList();else if (_this2.currentTab == "ASC") _this2.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                _this2.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();

                _this2.resetFormValidator();
              });
            }
          }, {
            key: "insert",
            value: function insert(isNewEntry) {
              var _this3 = this;

              this.userAccount.username = this.userAccount.username.toLowerCase();

              if (this.currentUserRole === 'ROLE_SUPER_ADMIN' || this.currentUserRole === 'ROLE_ADMIN') {
                this.userAccount.company = null;
              } // this.apiService.save(ENDPOINTS.addUserAccount, this.userAccount).subscribe(


              this.apiService.insert(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, this.userAccount, isNewEntry).subscribe(function (res) {
                if (res !== undefined) {
                  _this3.sweetAlertService.customSuccessMessage(isNewEntry ? 'Account has been created successfully.' : 'Account was successfully updated');

                  var evt = {
                    index: null
                  };

                  if (_this3.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                    evt.index = 0;
                  } else {
                    evt.index = 1;
                  }

                  _this3.accountInfo.reset();

                  if (_this3.isFromUserProfile) {
                    _this3.dialog.closeAll();
                  }
                }
              }, function (err) {
                var _a;

                _this3.sweetAlertService.customErrorMessage(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err.error);

                console.log('ERROR:::', err);
              }, function () {
                _this3.resetFormValidator();

                if (_this3.currentTab == "NONASC") _this3.getUserPerTypeList();else if (_this3.currentTab == "ASC") _this3.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                _this3.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
              });
            }
          }, {
            key: "updateCredentials",
            value: function updateCredentials() {
              var _this4 = this;

              var updatedAccount = {
                password: this.userAccount.password,
                username: this.userAccount.username,
                userRole: this.userAccount.userRole
              };
              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updatePassword, updatedAccount).subscribe(function (res) {
                if (res !== undefined) {
                  _this4.sweetAlertService.success(res);

                  var evt = {
                    index: null
                  };

                  if (_this4.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                    evt.index = 0;
                  } else {
                    evt.index = 1;
                  }

                  _this4.changeTab(evt);

                  _this4.accountInfo.reset();
                }
              });
            }
          }, {
            key: "delete",
            value: function _delete() {}
          }, {
            key: "getSelectedCompany",
            value: function getSelectedCompany(i) {
              var _this5 = this;

              if (i) {
                this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].company, i.value.id).subscribe(function (res) {
                  _this5.company = res.responseData.data;
                });
              }
            }
          }, {
            key: "getUserPerTypeList",
            value: function getUserPerTypeList() {
              var _this6 = this;

              var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'APPLICANT';
              this.spinner.show();
              this.displayTable = false;
              this.isAscUser = type !== 'APPLICANT';
              this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccountType, "/").concat(type)).subscribe(function (res) {
                _this6.userAccountList = res.responseData.data;
                _this6.displayTable = true;

                _this6.spinner.hide();

                _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data); // this.dataSource.paginator = this.formListComponent.paginator;
                // this.dataSource.sort = this.formListComponent.sort;
              });
            }
          }, {
            key: "getMaintenanceList",
            value: function getMaintenanceList() {
              var _this7 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
                _this7.companyList = res.responseData.data;
              }, function (err) {});
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeMembersAffiliation).subscribe(function (res) {
                _this7.affiliationList = res.responseData.data;
              }, function (err) {});
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].roles).subscribe(function (res) {
                _this7.userRoleList = res.responseData.data;
              }, function (err) {});
            }
          }, {
            key: "compareMembersAffiliation",
            value: function compareMembersAffiliation(value, selected) {
              if (value && selected) {
                return value.description === selected.description;
              }
            }
          }, {
            key: "compareCompany",
            value: function compareCompany(value, selected) {
              if (value && selected) {
                return value.id === selected.id;
              }
            }
          }, {
            key: "compareUserRole",
            value: function compareUserRole(value, selected) {
              if (value && selected) {
                return value.id === selected.id;
              }
            }
          }, {
            key: "confirmPassword",
            value: function confirmPassword(password) {
              if (this.userAccount.password === password) {
                this.passwordMatch = true;
              } else {
                this.passwordMatch = false;
              }
            } // get password() {
            //   let password = this.accountInfo.controls["password"].value;
            //   if (password === null || password === '' || password === undefined) {
            //     this.accountInfo.controls['password'].clearValidators();
            //     this.accountInfo.controls["confirmPasswords"].clearValidators();
            //   } else {
            //     this.accountInfo.controls['password'].setValidators([Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), Validators.minLength(8)]);
            //     this.accountInfo.controls["confirmPasswords"].setValidators([Validators.required]);
            //   }
            //   this.accountInfo.controls['password'].updateValueAndValidity();
            //   this.accountInfo.controls['confirmPasswords'].updateValueAndValidity();
            //   return this.accountInfo.controls["password"].value
            // }

          }, {
            key: "viewUserInformation",
            value: function viewUserInformation() {
              var _this8 = this;

              var _a; // if (this.isAscUser || this.userAccount.id) {
              //   this.stepper.selectedIndex = 0;
              // }


              var accountId = ((_a = this.formListComponent) === null || _a === void 0 ? void 0 : _a.idForUpdate) ? this.formListComponent.idForUpdate : this.userAccount.id;
              this.eSign.signatureAttachmentReference = null;
              this.eSign.fileURL = null;
              this.eSign.originalFilename = null;
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, accountId).subscribe(function (res) {
                _this8.userAccount = res.responseData.data;
                _this8.company = res.responseData.data.company;
                _this8.affiliation = _this8.userAccount.company.membersAffiliation;
                _this8.userRole = _this8.userAccount.userRole;

                if (_this8.userAccount.signatureAttachmentReference) {
                  _this8.getEsignature();
                } else {
                  _this8.selectFileButton.nativeElement.value = '';
                }
              });
            }
          }, {
            key: "openCompanyComponent",
            value: function openCompanyComponent() {
              var _this9 = this;

              var dialogRef = this.dialog.open(_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_11__["AddCompanyComponent"], {
                width: '80%',
                height: '85%',
                data: {
                  isFromModal: true,
                  isUserRegistration: true
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed', result);

                if (result) {
                  _this9.company = result;
                }

                _this9.getUserPerTypeList();
              });
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.userInfo = this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                middleName: [''],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                userRole: [''],
                company: ['']
              });
              this.eSignature = this.formBuilder.group({
                eSignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });

              if (!this.isFromUserProfile) {
                this.accountInfo = this.formBuilder.group({
                  userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                  // userRole: ['', Validators.required],
                  userRole: [''],
                  password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                  confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                });
              } else {
                this.accountInfo = this.formBuilder.group({
                  userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                  password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                  confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                });
              }

              this.userAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                userInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                companyInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                eSignature: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                accountInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
              this.company = new _models__WEBPACK_IMPORTED_MODULE_7__["Company"]();
              this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_7__["Affiliation"]();
              this.previewDocument = false;
              this.userAccountForm.markAsUntouched();
              this.userAccountForm.markAsPristine();
              this.dialog.closeAll();

              if (this.isFromUserProfile) {
                this.dialog.closeAll();
              } else {
                this.router.navigate(['asc/page/maintenance/accounts']);
              }
            }
          }, {
            key: "changeTab",
            value: function changeTab(evt) {
              this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
              this.resetFormValidator();

              if (evt.index === 0) {
                this.currentTab = "NONASC"; //     this.isUpdateAscUser = false;

                this.getUserPerTypeList();
                this.displayedColumns = ['firstName', 'lastName', 'companyDescription', 'emailAddress', 'mobileNumber', 'status'];
              } else if (evt.index === 1) {
                this.currentTab = "ASC"; //     this.isUpdateAscUser = true;

                this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                this.displayedColumns = ['firstName', 'lastName', 'userRole', 'emailAddress', 'status'];
              }
            }
          }, {
            key: "selectFile",
            value: function selectFile(event) {
              this.isShowUploadButton = false;

              if (event.target.files[0]) {
                this.fileSize = event.target.files[0].size;

                if (this.fileSize > 15000000) {
                  this.sweetAlertService.customErrorMessage("Attachments total file size should not exceed 15MB.");
                  event.target.value = '';
                  return;
                } else {
                  this.isShowUploadButton = true;
                  var fileURL = URL.createObjectURL(event.target.files[0]);
                  this.previewDocument = true;
                  this.safeURLSignature = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                  var reader = new FileReader();

                  var _event$target$files = _slicedToArray(event.target.files, 1),
                      file = _event$target$files[0];

                  reader.readAsDataURL(file);

                  reader.onload = function () {};

                  this.selectedFile = event.target.files[0];
                }
              }
            }
          }, {
            key: "viewDocument",
            value: function viewDocument() {
              if (this.uploadedSignatureFile) {
                window.open(this.uploadedSignatureFile.fileURL);
              } else {
                window.open(this.eSign.fileURL);
              }
            }
          }, {
            key: "uploadSignature",
            value: function uploadSignature() {
              var _this10 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to upload this as e-Signature?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                var _a;

                if (result.value) {
                  _this10.spinner.show(); // TODO: CHANGE ATTACHMENT TYPE WHEN SIGNATURE IS AVAILABLE IN BE


                  var accountId = ((_a = _this10.formListComponent) === null || _a === void 0 ? void 0 : _a.idForUpdate) ? _this10.formListComponent.idForUpdate : _this10.userAccount.id;
                  var params = "?accountId=".concat(accountId);

                  _this10.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].signature, _this10.selectedFile, params).subscribe(function (res) {
                    _this10.uploadedSignatureFile = res.responseData.data;

                    _this10.addToESignature(_this10.uploadedSignatureFile);

                    _this10.userAccount.signatureAttachmentReference = _this10.uploadedSignatureFile.signatureAttachmentReference;

                    _this10.updateUserSignatureReference();

                    _this10.hideSpinner();

                    _this10.sweetAlertService.customSuccessMessage('Signature successfully uploaded.');

                    _this10.selectedFile = null;

                    _this10.getEsignature();

                    _this10.isShowUploadButton = false;
                  }, function (err) {
                    _this10.hideSpinner();

                    _this10.sweetAlertService.error(err);
                  }, function () {
                    _this10.hideSpinner();
                  });
                } else {
                  _this10.selectedFile = null;
                }
              });
            }
          }, {
            key: "updateUserSignatureReference",
            value: function updateUserSignatureReference() {
              var endpoint = this.isAscUser ? _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount : _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updateUserAccount;
              this.apiService.update(endpoint, this.userAccount).subscribe(function (res) {
                console.log(res);
              });
            }
          }, {
            key: "addToESignature",
            value: function addToESignature(obj) {
              this.eSign.signatureAttachmentReference = obj.signatureAttachmentReference;
              this.eSign.id = obj.id;
              this.eSign.originalFilename = obj.originalFilename;
              this.eSign.filename = obj.filename;
              this.eSign.fileExtension = obj.fileExtension;
              this.eSign.fileURL = obj.fileURL;
              this.eSign.accountId = obj.accountId;
              this.eSign.documentFormat = obj.documentFormat;
            }
          }, {
            key: "hideSpinner",
            value: function hideSpinner() {
              var _this11 = this;

              setTimeout(function () {
                _this11.spinner.hide();
              }, 1);
            }
          }, {
            key: "getEsignature",
            value: function getEsignature() {
              var _this12 = this;

              var _a;

              var accountId = ((_a = this.formListComponent) === null || _a === void 0 ? void 0 : _a.idForUpdate) ? this.formListComponent.idForUpdate : this.userAccount.id;
              this.spinner.show();
              this.apiService.findByParam("".concat(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].signature, "/account-id"), accountId).subscribe(function (res) {
                var _a;

                if (res) {
                  _this12.eSign = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
                }

                _this12.hideSpinner();
              }, function (err) {
                _this12.hideSpinner();

                console.error(err);
              });
            }
          }, {
            key: "resendEmail",
            value: function resendEmail() {
              var _this13 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].adminResendVerificationCode + "/".concat(this.userAccount.username), this.userAccount).subscribe(function (res) {
                _this13.sweetAlertService.customSuccessMessage('Email verification has been sent');
              });
            }
          }, {
            key: "deleteESignature",
            value: function deleteESignature() {
              var _this14 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to upload this as e-Signature?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                var _a;

                if (result.value) {
                  _this14.spinner.show();

                  _this14.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].signature, (_a = _this14.eSign) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (res) {
                    _this14.eSign = new app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_9__["ESignature"]();
                    _this14.previewDocument = false;

                    _this14.spinner.hide();
                  }, function (err) {
                    return _this14.spinner.hide();
                  });
                }
              });
            }
          }]);

          return UserAccountComponent;
        }();

        UserAccountComponent.??fac = function UserAccountComponent_Factory(t) {
          return new (t || UserAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_12__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_12__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_12__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_13__["ValidateFieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8));
        };

        UserAccountComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: UserAccountComponent,
          selectors: [["app-user-account"]],
          viewQuery: function UserAccountComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.stepper = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.selectFileButton = _t.first);
            }
          },
          decls: 16,
          vars: 3,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "material-icons"], ["dynamicHeight", "", 4, "ngIf"], [1, "container"], ["mat-align-tabs", "start", 3, "selectedTabChange", 4, "ngIf"], [4, "ngIf"], ["dynamicHeight", ""], ["label", "User Details"], [3, "formGroup"], [1, "fields"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "firstName", "formControlName", "firstName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "middleName", "formControlName", "middleName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "lastName", "formControlName", "lastName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "mobileNumber", "placeholder", "09xxxxxxxxx", "formControlName", "mobileNumber", "maxlength", "11", 3, "ngModel", "ngModelChange", "keydown"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["class", "col", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["class", "fields", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["label", "E-Signature", 4, "ngIf"], ["label", "Account Information"], ["matStepLabel", ""], [1, "row", "fields"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "name", "userName", "formControlName", "userName", "type", "email", 3, "ngModel", "readonly", "ngModelChange"], [1, "row", "col-md-6"], ["appearance", "outline"], ["matInput", "", "name", "password", "formControlName", "password", 3, "type", "ngModel", "ngModelChange"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["class", "badge", 4, "ngIf"], ["matInput", "", "name", "confirmPasswords", "formControlName", "confirmPasswords", 3, "type", "ngModel", "ngModelChange", "keyup"], [1, "col-md-12"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], [1, "material-icons", "color__white"], ["name", "userRole", "formControlName", "userRole", "matNativeControl", "", 3, "ngModel", "compareWith", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "warn", 1, "col", 3, "click"], ["name", "company", "formControlName", "company", "matNativeControl", "", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "click"], [1, "badge", "bg-success", "dd"], ["matInput", "", "name", "membersAffiliation", "readonly", "", 3, "value"], ["matInput", "", "name", "companyMobileNo", "readonly", "", 3, "value"], ["matInput", "", "name", "companyTelephoneNo", "readonly", "", 3, "value"], ["matInput", "", "name", "companyTelephoneNo2", "readonly", "", 3, "value"], ["matInput", "", "name", "contactPersonName", "readonly", "", 3, "value"], ["matInput", "", "name", "contactPersonEmail", "readonly", "", 3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["label", "E-Signature"], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], ["class", "file-upload", "type", "file", "accept", "image/*", 3, "change", 4, "ngIf"], ["type", "hidden", "formControlName", "eSignature", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "class", "button-red button-right", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-red button-right", 3, "disabled", "click", 4, "ngIf"], ["class", "row col-md-12", "appearance", "outline", 4, "ngIf"], ["matInput", "", "disabled", "", 3, "value"], ["selectFileButton", ""], ["type", "file", "accept", "image/*", 1, "file-upload", 3, "change"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "click"], [1, "material-icons", "add-document", "color__white"], [1, "material-icons", "add-document"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "disabled", "click"], ["appearance", "outline", 1, "row", "col-md-12"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "400", 3, "data"], ["width", "100%", "height", "400", 3, "src"], [1, "badge"], ["mat-align-tabs", "start", 3, "selectedTabChange"], ["label", "Non ASC users"], ["label", "ASC users"], [3, "dataSource", "displayedColumns", "selectInListFunction"]],
          template: function UserAccountComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "badge");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " User Account ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, UserAccountComponent_mat_tab_group_9_Template, 91, 29, "mat-tab-group", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, UserAccountComponent_mat_tab_group_13_Template, 3, 0, "mat-tab-group", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserAccountComponent_span_15_Template, 2, 2, "span", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isAscUser || ctx.userAccount.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isFromUserProfile);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isFromUserProfile && ctx.displayTable);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_27__["FormListComponent"]],
          styles: [".container-fluid[_ngcontent-%COMP%]     .mat-step-header .mat-step-icon {\n  background-color: #850000;\n}\n.container-fluid[_ngcontent-%COMP%]     .mat-step-header .mat-step-icon-selected {\n  background-color: #348f00;\n  zoom: 1.8;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  color: #9c0000;\n}\n.container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: gray;\n  font-size: 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  font-size: 15px;\n  color: red;\n}\n.container-fluid[_ngcontent-%COMP%]   .dd[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 15px;\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n}\n.requiredIcon[_ngcontent-%COMP%]     .ng-placeholder::after {\n  font-family: \"Material Icons\";\n  color: #850000;\n  content: \"notification_important\";\n}\nbody[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n  background-color: red;\n}\n  .mat-tab-label .mat-tab-label-content {\n  font-weight: bold;\n}\n.fields[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\nh4[_ngcontent-%COMP%] {\n  margin: 16px 0px 16px -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UseUJBQUE7QUFGSjtBQU1FO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMTjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7QUFUSjtBQVlFO0VBR0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVpKO0FBZUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQW9CQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBakJGO0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBakJGO0FBMkJFO0VBQ0UsaUJBQUE7QUF4Qko7QUE2QkE7RUFDRSxpQkFBQTtBQTFCRjtBQTZCQTtFQUNFLDJCQUFBO0FBMUJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgLy8gcGFkZGluZzogMTBweCA0MHB4O1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAwLCAwKTtcclxuXHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDE0MywgMCk7XHJcbiAgICB6b29tOiAxLjg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHJnYigxNTYsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICAvLyAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuZGQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm5nLXNlbGVjdCB7fVxyXG5cclxuLnJlcXVpcmVkSWNvbiA6Om5nLWRlZXAgLm5nLXBsYWNlaG9sZGVyOjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICBjb2xvcjogIzg1MDAwMDtcclxuICBjb250ZW50OiBcIm5vdGlmaWNhdGlvbl9pbXBvcnRhbnRcIjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICBtYXQtdGFiLWdyb3VwIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmE2YTIgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmZpZWxkcyB7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICBtYXJnaW46IDE2cHggMHB4IDE2cHggLTEwcHg7XHJcbn1cclxuIl19 */"]
        });
        return UserAccountComponent;
      }();
      /***/

    },

    /***/
    "gaza":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/user-account/user-account.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: UserAccountModule */

    /***/
    function gaza(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccountModule", function () {
        return UserAccountModule;
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


      var _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-account-routing.module */
      "B0iI");
      /* harmony import */


      var _user_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-account.component */
      "ea/y");
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

      var UserAccountModule = /*@__PURE__*/function () {
        var UserAccountModule = /*#__PURE__*/_createClass(function UserAccountModule() {
          _classCallCheck(this, UserAccountModule);
        });

        UserAccountModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: UserAccountModule
        });
        UserAccountModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function UserAccountModule_Factory(t) {
            return new (t || UserAccountModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return UserAccountModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserAccountModule, {
          declarations: [_user_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e-es5.js.map