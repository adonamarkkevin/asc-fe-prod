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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186"], {
    /***/
    "3v23":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-registration/user-registration-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: UserRegistrationRoutingModule */

    /***/
    function v23(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationRoutingModule", function () {
        return UserRegistrationRoutingModule;
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


      var _user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-registration.component */
      "Jsen");

      var routes = [{
        path: '',
        component: _user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"]
      }];

      var UserRegistrationRoutingModule = /*@__PURE__*/function () {
        var UserRegistrationRoutingModule = /*#__PURE__*/_createClass(function UserRegistrationRoutingModule() {
          _classCallCheck(this, UserRegistrationRoutingModule);
        });

        UserRegistrationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: UserRegistrationRoutingModule
        });
        UserRegistrationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function UserRegistrationRoutingModule_Factory(t) {
            return new (t || UserRegistrationRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return UserRegistrationRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserRegistrationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "5ZJz":
    /*!********************************************!*\
      !*** ./src/app/core/models/email.model.ts ***!
      \********************************************/

    /*! exports provided: Email */

    /***/
    function ZJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Email", function () {
        return Email;
      });

      var Email = /*#__PURE__*/_createClass(function Email() {
        _classCallCheck(this, Email);
      });
      /***/

    },

    /***/
    "Fy8O":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/pages/company/company-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CompanyRoutingModule */

    /***/
    function Fy8O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function () {
        return CompanyRoutingModule;
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

      var routes = [{
        path: '',
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_COMPANY,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | list-company-list-company-module */
            [__webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("list-company-list-company-module")]).then(__webpack_require__.bind(null,
            /*! ./list-company/list-company.module */
            "lsCb")).then(function (m) {
              return m.ListCompanyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ADD_COMPANY,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-company-add-company-module */
            [__webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("add-company-add-company-module")]).then(__webpack_require__.bind(null,
            /*! ./add-company/add-company.module */
            "mXdJ")).then(function (m) {
              return m.AddCompanyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].UPDATE_COMPANY + '/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-company-add-company-module */
            [__webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("add-company-add-company-module")]).then(__webpack_require__.bind(null,
            /*! ./add-company/add-company.module */
            "mXdJ")).then(function (m) {
              return m.AddCompanyModule;
            });
          }
        }]
      }];

      var CompanyRoutingModule = /*@__PURE__*/function () {
        var CompanyRoutingModule = /*#__PURE__*/_createClass(function CompanyRoutingModule() {
          _classCallCheck(this, CompanyRoutingModule);
        });

        CompanyRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: CompanyRoutingModule
        });
        CompanyRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function CompanyRoutingModule_Factory(t) {
            return new (t || CompanyRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CompanyRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CompanyRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

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
    "Jsen":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-registration/user-registration.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: UserRegistrationComponent */

    /***/
    function Jsen(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function () {
        return UserRegistrationComponent;
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


      var _company__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @company */
      "zeqK");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _core_models_email_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/models/email.model */
      "5ZJz");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function UserRegistrationComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Account Registration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "error_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " All fields with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " are required, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Please provide all required details to register.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/asc/page/account/user-list"];
      };

      function UserRegistrationComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Update Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " VIEW USER LIST ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Please provide all required details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      }

      function UserRegistrationComponent_mat_step_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Privacy Notice");
        }
      }

      function UserRegistrationComponent_mat_step_7_button_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_mat_step_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-step", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserRegistrationComponent_mat_step_7_ng_template_2_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "label_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Terms and Agreements ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "section", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-checkbox", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_mat_step_7_Template_mat_checkbox_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.userAccount.acceptTerms = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Accept Terms and Agreement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, UserRegistrationComponent_mat_step_7_button_16_Template, 2, 0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx_r3.acceptTerms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r3.acceptTerms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r3.userAccount.acceptTerms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.userAccount.acceptTerms === true);
        }
      }

      function UserRegistrationComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Personal Information");
        }
      }

      function UserRegistrationComponent_mat_step_47_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Company Information");
        }
      }

      function UserRegistrationComponent_mat_step_47_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " For Approval ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_mat_step_47_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " With Penalty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_mat_step_47_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r21.companyName, " ");
        }
      }

      function UserRegistrationComponent_mat_step_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-step", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserRegistrationComponent_mat_step_47_ng_template_2_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "label_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Company Information: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, UserRegistrationComponent_mat_step_47_span_14_Template, 2, 0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserRegistrationComponent_mat_step_47_span_15_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_mat_step_47_Template_mat_select_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.userAccount.company = $event;
          })("selectionChange", function UserRegistrationComponent_mat_step_47_Template_mat_select_selectionChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.getSelectedCompany($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRegistrationComponent_mat_step_47_Template_mat_option_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r25.openCompanyComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Add New Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, UserRegistrationComponent_mat_step_47_mat_option_20_Template, 2, 2, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Member Affiliation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx_r5.companyInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r5.companyInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.status) === "FOR_APPROVAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.delinquent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.userAccount.company)("compareWith", ctx_r5.compareCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.companyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.company == null ? null : ctx_r5.company.membersAffiliation == null ? null : ctx_r5.company.membersAffiliation.description);
        }
      }

      function UserRegistrationComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Account Information");
        }
      }

      function UserRegistrationComponent_p_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Please provide a valid email address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_mat_hint_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Password must be at least 8 characters long and must contain a number, lower case and upper case characters. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_mat_hint_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Password does not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_mat_hint_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Need to Accept Terms and Agreement!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRegistrationComponent_button_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRegistrationComponent_button_87_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r11.accountInfo.valid || !ctx_r11.passwordMatch || ctx_r11.userAccount.acceptTerms === false);
        }
      }

      function UserRegistrationComponent_button_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRegistrationComponent_button_88_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r12.accountInfo.valid || !ctx_r12.passwordMatch);
        }
      }

      var UserRegistrationComponent = /*@__PURE__*/function () {
        var UserRegistrationComponent = /*#__PURE__*/function () {
          function UserRegistrationComponent(apiService, formBuilder, sweetAlertService, dataStorage, router, route, dialog, validateFieldService, // @Inject(MAT_DIALOG_DATA) public data: any,
          dialogRef, data) {
            _classCallCheck(this, UserRegistrationComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dataStorage = dataStorage;
            this.router = router;
            this.route = route;
            this.dialog = dialog;
            this.validateFieldService = validateFieldService;
            this.dialogRef = dialogRef;
            this.data = data; // displayedColumns: string[] = ['name', 'status'];

            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]);
            this.company = new _models__WEBPACK_IMPORTED_MODULE_7__["Company"]();
            this.userRole = new _models__WEBPACK_IMPORTED_MODULE_7__["UserRole"]();
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_7__["Affiliation"]();
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            this.email = new _core_models_email_model__WEBPACK_IMPORTED_MODULE_9__["Email"]();
            this.userAccountList = [];
            this.userRoleList = [];
            this.companyList = [];
            this.affiliationList = [];
            this.dropDownDatasource = [];
            this.passwordMatch = false;
            this.process = 'SAVED';
            this.hidePassword = true;
            this.hideConfirmPassword = true;
            this.isUpdate = false;
            this.registerStatus = '';
            this.confirmPasswords = '';
            this.isRegistration = false; // Status for first time register
            // this.registerStatus = data.status;
            // this.registerStatus = 'Registered';

            if (data.isRegister === true) {
              this.isRegistration = true;
            }
          }

          _createClass(UserRegistrationComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.registerStatus = this.data.status;
              this.getList(); // this.checkProcessStatus();

              this.setFormValidator2();
              this.id = Number(this.route.snapshot.paramMap.get('id'));

              if (this.id !== 0) {
                this.isUpdate = true;
                this.viewUserInformation();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              // this.dataStorage.saveUserAccountId(0);
              this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
              this.company = new _models__WEBPACK_IMPORTED_MODULE_7__["Company"]();
              this.registerStatus = '';
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
                _this.companyList = res.responseData.data;
                console.log(_this.companyList);
              });
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeMembersAffiliation).subscribe(function (res) {
                _this.affiliationList = res.responseData.data;
              });
            }
          }, {
            key: "viewUserInformation",
            value: function viewUserInformation() {
              var _this2 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, this.id).subscribe(function (res) {
                _this2.userAccount = res.responseData.data;
                _this2.company = res.responseData.data.company; // this.affiliation = this.company.membersAffiliation;
                // console.log(this.userAccount);
              });
            }
          }, {
            key: "getSelectedCompany",
            value: function getSelectedCompany(i) {
              var _this3 = this;

              if (i) {
                this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].company, i.value.id).subscribe(function (res) {
                  _this3.company = res.responseData.data;
                  _this3.userAccount.company = res.responseData.data;
                });
              }
            }
          }, {
            key: "openCompanyComponent",
            value: function openCompanyComponent() {
              var _this4 = this;

              var dialogRef = this.dialog.open(_company__WEBPACK_IMPORTED_MODULE_6__["AddCompanyComponent"], {
                width: '80%',
                height: '85%',
                data: {
                  isFromModal: true,
                  isUserRegistration: true
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed', result);

                _this4.getList();

                if (result) {
                  _this4.company = result;
                  _this4.userAccount.company = result;
                }
              });
            }
          }, {
            key: "confirmPassword",
            value: function confirmPassword(password) {
              if (this.userAccount.password === password) {
                this.passwordMatch = true;
              } else {
                this.passwordMatch = false;
              }
            }
          }, {
            key: "save",
            value: function save() {
              var _this5 = this;

              this.userAccount.username = this.userAccount.username.toLowerCase();
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].addUserAccount, this.userAccount).subscribe(function (res) {
                if (res !== undefined) {
                  // this.sweetAlertService.success(res);
                  _this5.sweetAlertService.customSuccessMessage('Your account was successfully created. Please check your email for verification.');

                  _this5.dialog.closeAll();
                }
              }, function (err) {
                _this5.sweetAlertService.error(err);

                console.log('ERROR:::', err);
              }, function () {
                // actions after subscription
                _this5.resetFormValidator();

                _this5.getList(); // this.dialogRef.close();

              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this6 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updateUserAccount, this.userAccount).subscribe(function (res) {
                if (res !== undefined) {
                  _this6.sweetAlertService.success(res);

                  _this6.router.navigate(['/asc/page/account/user-list']);
                }
              }, function (err) {
                console.log(err);

                _this6.sweetAlertService.error(err);
              }, function () {
                // actions after subscription
                _this6.resetFormValidator();

                _this6.getList();
              });
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.userAccountForm = this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "setFormValidator2",
            value: function setFormValidator2() {
              this.acceptTerms = this.formBuilder.group({
                acceptTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
              this.userInfo = this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                middleName: [''],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
              this.companyInfo = this.formBuilder.group({
                company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                companyAddress: [''],
                companyMobileNo: [''],
                companyTelephoneNo: [''],
                companyTelephoneNo2: [''],
                companyFaxNumber: [''],
                contactPersonName: [''],
                contactPersonEmail: [''],
                membersAffiliation: ['']
              });
              this.accountInfo = this.formBuilder.group({
                userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
              this.userAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                acceptTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                userInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                companyInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                accountInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
              });
            }
          }, {
            key: "checkProcessStatus",
            value: function checkProcessStatus() {
              var _this7 = this;

              if (this.dataStorage.getUserAccount().id !== 0) {
                this.process = 'UPDATE';
                this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, this.dataStorage.getUserAccount().id).subscribe(function (res) {
                  _this7.userAccount = res.responseData.data;

                  _this7.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].company, _this7.userAccount.company.id).subscribe(function (res1) {
                    _this7.company = res1.responseData.data;
                  });
                });
              }
            }
          }, {
            key: "applyFilter",
            value: function applyFilter(event) {
              var filterValue = event.target.value; // this.companyList.filter = filterValue.trim().toLowerCase();
              // this.companyList = this.companyList.filter(cl => cl.companyName === event);
            }
          }, {
            key: "compareMembersAffiliation",
            value: function compareMembersAffiliation(value, selected) {
              // return value.description === selected.description;
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
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
              this.userAccountForm.markAsUntouched();
              this.userAccountForm.markAsPristine();
            }
          }]);

          return UserRegistrationComponent;
        }();

        UserRegistrationComponent.??fac = function UserRegistrationComponent_Factory(t) {
          return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_12__["ValidateFieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8));
        };

        UserRegistrationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: UserRegistrationComponent,
          selectors: [["app-user-registration"]],
          viewQuery: function UserRegistrationComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
            }
          },
          decls: 93,
          vars: 31,
          consts: [[1, "container-fluid"], ["class", "col-md-12 title", 4, "ngIf"], ["linear", ""], ["stepper", ""], [3, "stepControl", 4, "ngIf"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "row", "fields"], [1, "row"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "firstName", "formControlName", "firstName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "middleName", "formControlName", "middleName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "lastName", "formControlName", "lastName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "mobileNumber", "placeholder", "09xxxxxxxxx", "formControlName", "mobileNumber", "maxlength", "11", 3, "ngModel", "ngModelChange", "keydown"], ["mat-raised-button", "", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "name", "userName", "formControlName", "userName", "type", "email", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 3, "ngModel", "readonly", "ngModelChange"], ["class", "badge", 4, "ngIf"], [3, "ngClass"], ["matInput", "", "name", "password", "formControlName", "password", 3, "type", "ngModel", "ngModelChange", "keyup"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "name", "confirmPasswords", "formControlName", "confirmPasswords", 3, "type", "ngModel", "ngModelChange", "keyup"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-md-12", "title"], [2, "color", "red"], [1, "material-icons", 2, "color", "red"], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "routerLink"], [1, "row", "message-body"], [1, "example-section"], ["name", "acceptTerms", "formControlName", "acceptTerms", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 4, "ngIf"], ["class", "badge rounded-pill bg-warning", 4, "ngIf"], ["class", "badge rounded-pill bg-danger", 4, "ngIf"], ["name", "company", "formControlName", "company", "matNativeControl", "", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "click"], [1, "badge", "bg-success", "dd"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-10"], ["matInput", "", "name", "membersAffiliation", "formControlName", "membersAffiliation", "readonly", "", 3, "value"], [1, "badge", "rounded-pill", "bg-warning"], [1, "badge", "rounded-pill", "bg-danger"], [3, "value"], [1, "badge"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
          template: function UserRegistrationComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UserRegistrationComponent_div_3_Template, 14, 0, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UserRegistrationComponent_div_4_Template, 9, 2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-horizontal-stepper", 2, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, UserRegistrationComponent_mat_step_7_Template, 17, 4, "mat-step", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-step", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UserRegistrationComponent_ng_template_10_Template, 1, 0, "ng-template", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "label_important");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Personal Information: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Given name: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_22_listener($event) {
                return ctx.userAccount.firstName = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Middle name: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_27_listener($event) {
                return ctx.userAccount.middleName = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Last name: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_34_listener($event) {
                return ctx.userAccount.lastName = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Mobile Number: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_40_listener($event) {
                return ctx.userAccount.mobileNumber = $event;
              })("keydown", function UserRegistrationComponent_Template_input_keydown_40_listener($event) {
                return ctx.validateFieldService.numbersOnly($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Back");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, UserRegistrationComponent_mat_step_47_Template, 31, 8, "mat-step", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-step", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "form", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, UserRegistrationComponent_ng_template_50_Template, 1, 0, "ng-template", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "label_important");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Account Information: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-form-field", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Email Address: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "input", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_62_listener($event) {
                return ctx.userAccount.username = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, UserRegistrationComponent_p_63_Template, 4, 0, "p", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Password: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "input", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_70_listener($event) {
                return ctx.userAccount.password = $event;
              })("keyup", function UserRegistrationComponent_Template_input_keyup_70_listener() {
                return ctx.confirmPassword(ctx.confirmPasswords);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "button", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRegistrationComponent_Template_button_click_71_listener() {
                return ctx.hidePassword = !ctx.hidePassword;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, UserRegistrationComponent_mat_hint_74_Template, 4, 0, "mat-hint", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Confirm Password: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "input", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_80_listener($event) {
                return ctx.confirmPasswords = $event;
              })("keyup", function UserRegistrationComponent_Template_input_keyup_80_listener() {
                return ctx.confirmPassword(ctx.confirmPasswords);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRegistrationComponent_Template_button_click_81_listener() {
                return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, UserRegistrationComponent_mat_hint_84_Template, 4, 0, "mat-hint", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, UserRegistrationComponent_mat_hint_86_Template, 6, 0, "mat-hint", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, UserRegistrationComponent_button_87_Template, 2, 1, "button", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](88, UserRegistrationComponent_button_88_Template, 2, 1, "button", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Back");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRegistrationComponent_Template_button_click_91_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

                var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);

                return _r2.reset();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Reset");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isUpdate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isUpdate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isRegistration);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.userInfo);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.userInfo);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userAccount.firstName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userAccount.middleName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userAccount.lastName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userAccount.mobileNumber);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.userAccount == null ? null : ctx.userAccount.userRole == null ? null : ctx.userAccount.userRole.name) == "ROLE_APPLICANT" || ctx.registerStatus === "Register");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.accountInfo);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.accountInfo);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userAccount.username)("readonly", ctx.process === "UPDATE");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.accountInfo.get("userName").dirty && ctx.accountInfo.controls["userName"].errors);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.accountInfo.get("password").dirty && ctx.accountInfo.controls["password"].errors ? "row credential-creation" : "row");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hidePassword ? "password" : "text")("ngModel", ctx.userAccount.password);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.accountInfo.get("password").dirty && ctx.accountInfo.controls["password"].errors);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hideConfirmPassword ? "password" : "text")("ngModel", ctx.confirmPasswords);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hideConfirmPassword);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.hideConfirmPassword ? "visibility_off" : "visibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.accountInfo.get("confirmPasswords").dirty && !ctx.passwordMatch);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.accountInfo.valid || ctx.passwordMatch) && ctx.userAccount.acceptTerms === false);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isUpdate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isUpdate);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"]],
          styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n}\n.container-fluid[_ngcontent-%COMP%]     .mat-step-header .mat-step-icon {\n  background-color: #850000;\n}\n.container-fluid[_ngcontent-%COMP%]     .mat-step-header .mat-step-icon-selected {\n  background-color: #348f00;\n  zoom: 1.8;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  color: #9c0000;\n}\n.container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: gray;\n  font-size: 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  font-size: 12px;\n  color: red;\n}\n.container-fluid[_ngcontent-%COMP%]   .dd[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 15px;\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n}\n.requiredIcon[_ngcontent-%COMP%]     .ng-placeholder::after {\n  font-family: \"Material Icons\";\n  color: #850000;\n  content: \"notification_important\";\n}\nbody[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n  background-color: red;\n}\n.message-body[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.form[_ngcontent-%COMP%] {\n  background-color: red;\n}\nmat-hint[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 500;\n  font-size: 1.25em;\n}\n.credential-creation[_ngcontent-%COMP%] {\n  padding-bottom: 50px !important;\n}\n  .mat-horizontal-stepper-header {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7QUFDUjtBQUdJO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FBRFI7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFEWjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUlJO0VBR0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUpSO0FBT0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQWNBO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUFYSjtBQWNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBWEo7QUFjQTtFQUNJLGtCQUFBO0FBWEo7QUFjQTtFQUNJLHFCQUFBO0FBWEo7QUFrQkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWZKO0FBa0JBO0VBQ0ksK0JBQUE7QUFmSjtBQWtCQTtFQUNJLCtCQUFBO0FBZkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnQvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDAsIDApO1xyXG5cclxuICAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTQzLCAwKTtcclxuICAgICAgICB6b29tOiAxLjg7XHJcbiAgICAgfVxyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWF0LWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTU2LCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLWNvbnRlbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJhZGdle1xyXG4gICAgICAvLyAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC8vIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIC8vIG1heC13aWR0aDogMTBweDtcclxuICAgIH1cclxuICAgIC5kZHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG59XHJcbi8vIG5nLXNlbGVjdHtcclxuXHJcblxyXG4vLyB9XHJcblxyXG4ucmVxdWlyZWRJY29uIDo6bmctZGVlcCAubmctcGxhY2Vob2xkZXI6OmFmdGVye1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICAgIGNvbG9yOiAjODUwMDAwO1xyXG4gICAgY29udGVudDogXCJub3RpZmljYXRpb25faW1wb3J0YW50XCI7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm9keXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4vLyAgIH1cclxuXHJcbm1hdC1oaW50IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5jcmVkZW50aWFsLWNyZWF0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */"]
        });
        return UserRegistrationComponent;
      }();
      /***/

    },

    /***/
    "LHvS":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-registration/user-registration.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: UserRegistrationModule */

    /***/
    function LHvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationModule", function () {
        return UserRegistrationModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-registration-routing.module */
      "3v23");
      /* harmony import */


      var _user_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-registration.component */
      "Jsen");
      /* harmony import */


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var UserRegistrationModule = /*@__PURE__*/function () {
        var UserRegistrationModule = /*#__PURE__*/_createClass(function UserRegistrationModule() {
          _classCallCheck(this, UserRegistrationModule);
        });

        UserRegistrationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: UserRegistrationModule
        });
        UserRegistrationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function UserRegistrationModule_Factory(t) {
            return new (t || UserRegistrationModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return UserRegistrationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserRegistrationModule, {
          declarations: [_user_registration_component__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]],
          exports: [_user_registration_component__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationComponent"]]
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

    },

    /***/
    "vKeY":
    /*!*********************************************************!*\
      !*** ./src/app/modules/pages/company/company.module.ts ***!
      \*********************************************************/

    /*! exports provided: CompanyModule */

    /***/
    function vKeY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyModule", function () {
        return CompanyModule;
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


      var _company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-routing.module */
      "Fy8O");

      ;

      var CompanyModule = /*@__PURE__*/function () {
        var CompanyModule = /*#__PURE__*/_createClass(function CompanyModule() {
          _classCallCheck(this, CompanyModule);
        });

        CompanyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: CompanyModule
        });
        CompanyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function CompanyModule_Factory(t) {
            return new (t || CompanyModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"]]]
        });
        return CompanyModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CompanyModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "zeqK":
    /*!************************************************!*\
      !*** ./src/app/modules/pages/company/index.ts ***!
      \************************************************/

    /*! exports provided: CompanyModule, AddCompanyComponent, AddCompanyModule, ListCompanyComponent, ListCompanyModule */

    /***/
    function zeqK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _company_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./company.module */
      "vKeY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CompanyModule", function () {
        return _company_module__WEBPACK_IMPORTED_MODULE_0__["CompanyModule"];
      });
      /* harmony import */


      var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-company/add-company.component */
      "9hFf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
        return _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_1__["AddCompanyComponent"];
      });
      /* harmony import */


      var _add_company_add_company_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-company/add-company.module */
      "mXdJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyModule", function () {
        return _add_company_add_company_module__WEBPACK_IMPORTED_MODULE_2__["AddCompanyModule"];
      });
      /* harmony import */


      var _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-company/list-company.component */
      "OD7C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ListCompanyComponent", function () {
        return _list_company_list_company_component__WEBPACK_IMPORTED_MODULE_3__["ListCompanyComponent"];
      });
      /* harmony import */


      var _list_company_list_company_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list-company/list-company.module */
      "lsCb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ListCompanyModule", function () {
        return _list_company_list_company_module__WEBPACK_IMPORTED_MODULE_4__["ListCompanyModule"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186-es5.js.map