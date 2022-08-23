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


      var _user_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-registration.component */
      "Jsen");

      var routes = [{
        path: '',
        component: _user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"]
      }];

      var UserRegistrationRoutingModule = /*#__PURE__*/_createClass(function UserRegistrationRoutingModule() {
        _classCallCheck(this, UserRegistrationRoutingModule);
      });

      UserRegistrationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserRegistrationRoutingModule);
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


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var routes = [{
        path: '',
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_COMPANY,
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
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_COMPANY,
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
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].UPDATE_COMPANY + '/:id',
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

      var CompanyRoutingModule = /*#__PURE__*/_createClass(function CompanyRoutingModule() {
        _classCallCheck(this, CompanyRoutingModule);
      });

      CompanyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompanyRoutingModule);
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


      var _add_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-company.component */
      "9hFf");

      var routes = [{
        path: '',
        component: _add_company_component__WEBPACK_IMPORTED_MODULE_3__["AddCompanyComponent"]
      }];

      var AddCompanyRoutingModule = /*#__PURE__*/_createClass(function AddCompanyRoutingModule() {
        _classCallCheck(this, AddCompanyRoutingModule);
      });

      AddCompanyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddCompanyRoutingModule);
      /***/
    },

    /***/
    "Jqmd":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-registration/user-registration.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jqmd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container-fluid {\n  padding: 10px 40px;\n}\n.container-fluid ::ng-deep .mat-step-header .mat-step-icon {\n  background-color: #850000;\n}\n.container-fluid ::ng-deep .mat-step-header .mat-step-icon-selected {\n  background-color: #348f00;\n  zoom: 1.8;\n}\n.container-fluid .title {\n  padding-left: 10px;\n}\n.container-fluid .title mat-label {\n  font-size: 25px;\n  font-weight: 600;\n  color: #9c0000;\n}\n.container-fluid label {\n  font-size: 12px;\n  font-weight: 600;\n}\n.container-fluid p {\n  font-weight: 400;\n  color: gray;\n  font-size: 12px;\n}\n.container-fluid .button-content {\n  text-align: center;\n}\n.container-fluid .badge {\n  margin-top: -15px;\n  font-size: 12px;\n  color: red;\n}\n.container-fluid .dd {\n  float: left;\n  font-size: 15px;\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n}\n.requiredIcon ::ng-deep .ng-placeholder::after {\n  font-family: \"Material Icons\";\n  color: #850000;\n  content: \"notification_important\";\n}\nbody {\n  max-height: 150px;\n  overflow-y: scroll;\n  background-color: red;\n}\n.message-body {\n  padding: 20px 30px;\n}\n.form {\n  background-color: red;\n}\nmat-hint {\n  color: red;\n  font-weight: 500;\n  font-size: 1.25em;\n}\n.credential-creation {\n  padding-bottom: 50px !important;\n}\n::ng-deep .mat-horizontal-stepper-header {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7QUFDUjtBQUdJO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FBRFI7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFEWjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUlJO0VBR0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUpSO0FBT0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQWNBO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUFYSjtBQWNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBWEo7QUFjQTtFQUNJLGtCQUFBO0FBWEo7QUFjQTtFQUNJLHFCQUFBO0FBWEo7QUFrQkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWZKO0FBa0JBO0VBQ0ksK0JBQUE7QUFmSjtBQWtCQTtFQUNJLCtCQUFBO0FBZkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnQvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDAsIDApO1xyXG5cclxuICAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTQzLCAwKTtcclxuICAgICAgICB6b29tOiAxLjg7XHJcbiAgICAgfVxyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWF0LWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTU2LCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLWNvbnRlbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJhZGdle1xyXG4gICAgICAvLyAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC8vIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIC8vIG1heC13aWR0aDogMTBweDtcclxuICAgIH1cclxuICAgIC5kZHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG59XHJcbi8vIG5nLXNlbGVjdHtcclxuXHJcblxyXG4vLyB9XHJcblxyXG4ucmVxdWlyZWRJY29uIDo6bmctZGVlcCAubmctcGxhY2Vob2xkZXI6OmFmdGVye1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICAgIGNvbG9yOiAjODUwMDAwO1xyXG4gICAgY29udGVudDogXCJub3RpZmljYXRpb25faW1wb3J0YW50XCI7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm9keXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4vLyAgIH1cclxuXHJcbm1hdC1oaW50IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbn1cclxuXHJcbi5jcmVkZW50aWFsLWNyZWF0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_registration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-registration.component.html */
      "dw2r");
      /* harmony import */


      var _user_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-registration.component.scss */
      "Jqmd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _company__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @company */
      "zeqK");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var _core_models_email_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../core/models/email.model */
      "5ZJz");

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

          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_13__["STATUSES"]);
          this.company = new _models__WEBPACK_IMPORTED_MODULE_11__["Company"]();
          this.userRole = new _models__WEBPACK_IMPORTED_MODULE_11__["UserRole"]();
          this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_11__["Affiliation"]();
          this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_11__["UserAccount"]();
          this.email = new _core_models_email_model__WEBPACK_IMPORTED_MODULE_15__["Email"]();
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
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_11__["UserAccount"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_11__["Company"]();
            this.registerStatus = '';
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
              _this.companyList = res.responseData.data;
              console.log(_this.companyList);
            });
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].activeMembersAffiliation).subscribe(function (res) {
              _this.affiliationList = res.responseData.data;
            });
          }
        }, {
          key: "viewUserInformation",
          value: function viewUserInformation() {
            var _this2 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].userAccount, this.id).subscribe(function (res) {
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
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].company, i.value.id).subscribe(function (res) {
                _this3.company = res.responseData.data;
                _this3.userAccount.company = res.responseData.data;
              });
            }
          }
        }, {
          key: "openCompanyComponent",
          value: function openCompanyComponent() {
            var _this4 = this;

            var dialogRef = this.dialog.open(_company__WEBPACK_IMPORTED_MODULE_10__["AddCompanyComponent"], {
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
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].addUserAccount, this.userAccount).subscribe(function (res) {
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

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].updateUserAccount, this.userAccount).subscribe(function (res) {
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
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "setFormValidator2",
          value: function setFormValidator2() {
            this.acceptTerms = this.formBuilder.group({
              acceptTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.userInfo = this.formBuilder.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              middleName: [''],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.companyInfo = this.formBuilder.group({
              company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
              userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
              confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.userAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              acceptTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
              userInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
              companyInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
              accountInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
            });
          }
        }, {
          key: "checkProcessStatus",
          value: function checkProcessStatus() {
            var _this7 = this;

            if (this.dataStorage.getUserAccount().id !== 0) {
              this.process = 'UPDATE';
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].userAccount, this.dataStorage.getUserAccount().id).subscribe(function (res) {
                _this7.userAccount = res.responseData.data;

                _this7.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_13__["ENDPOINTS"].company, _this7.userAccount.company.id).subscribe(function (res1) {
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
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_11__["UserAccount"]();
            this.userAccountForm.markAsUntouched();
            this.userAccountForm.markAsPristine();
          }
        }]);

        return UserRegistrationComponent;
      }();

      UserRegistrationComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_12__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_12__["SweetAlertService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_12__["DataStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_14__["ValidateFieldService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      UserRegistrationComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
            "static": false
          }]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], {
            "static": false
          }]
        }]
      };
      UserRegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-registration',
        template: _raw_loader_user_registration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserRegistrationComponent);
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-registration-routing.module */
      "3v23");
      /* harmony import */


      var _user_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-registration.component */
      "Jsen");
      /* harmony import */


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var UserRegistrationModule = /*#__PURE__*/_createClass(function UserRegistrationModule() {
        _classCallCheck(this, UserRegistrationModule);
      });

      UserRegistrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_registration_component__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]],
        exports: [_user_registration_component__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationComponent"]]
      })], UserRegistrationModule);
      /***/
    },

    /***/
    "dw2r":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/account/user-registration/user-registration.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dw2r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\"><br>\r\n    <div class=\"col-md-12 title\" *ngIf=\"!isUpdate\">\r\n      <mat-label>\r\n        Account Registration\r\n        <p> <i style=\"color: red;\"><i class=\"material-icons\" style=\"color: red;\">error_outline</i> All fields with\r\n          <span class=\"required-field\">*</span> are required,\r\n          </i> <i>Please provide all required\r\n            details to register.</i></p>\r\n        <p></p>\r\n      </mat-label>\r\n    </div>\r\n    <div class=\"col-md-12 title\" *ngIf=\"isUpdate\">\r\n      <mat-label>\r\n        Update Account\r\n      </mat-label>\r\n      <button class=\"button-right button-red\" mat-raised-button [routerLink]=\"['/asc/page/account/user-list']\">\r\n        <mat-icon>list</mat-icon> VIEW USER LIST\r\n      </button>\r\n      <p>Please provide all required details.</p>\r\n    </div>\r\n\r\n\r\n    <mat-horizontal-stepper linear #stepper>\r\n\r\n      <mat-step [stepControl]=\"acceptTerms\" *ngIf=\"isRegistration\">\r\n        <form [formGroup]=\"acceptTerms\">\r\n          <ng-template matStepLabel> Privacy Notice</ng-template>\r\n          <h4>\r\n            <mat-icon>label_important</mat-icon> Terms and Agreements\r\n          </h4>\r\n          <div class=\"row message-body\">\r\n            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\r\n              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\r\n              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\r\n              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\r\n              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\"\r\n              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\r\n              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit\r\n              amet..\", comes from a line in section 1.10.32.\r\n\r\n              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections\r\n              1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact\r\n              original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>\r\n          </div>\r\n          <div class=\"row\">\r\n            <section class=\"example-section\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"userAccount.acceptTerms\" name=\"acceptTerms\"\r\n                formControlName=\"acceptTerms\">\r\n                Accept Terms and Agreement\r\n              </mat-checkbox>\r\n            </section>\r\n          </div><br>\r\n          <div>\r\n            <button mat-raised-button color=\"primary\" matStepperNext\r\n              *ngIf=\"userAccount.acceptTerms === true\">Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"userInfo\">\r\n        <form [formGroup]=\"userInfo\">\r\n          <ng-template matStepLabel>Personal Information</ng-template>\r\n          <div class=\"row fields\">\r\n            <h4>\r\n              <mat-icon>label_important</mat-icon> Personal Information:\r\n            </h4>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Given name:  <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.firstName\" name=\"firstName\" formControlName=\"firstName\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Middle name: <span class=\"required-field\">\r\n                    <!-- <mat-icon>notification_important</mat-icon> -->\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.middleName\" name=\"middleName\" formControlName=\"middleName\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Last name:  <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.lastName\" name=\"lastName\" formControlName=\"lastName\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Mobile Number: <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.mobileNumber\" name=\"mobileNumber\" placeholder=\"09xxxxxxxxx\"\r\n                  formControlName=\"mobileNumber\" (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"11\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"companyInfo\"\r\n        *ngIf=\"userAccount?.userRole?.name=='ROLE_APPLICANT'||registerStatus==='Register'\">\r\n        <form [formGroup]=\"companyInfo\">\r\n          <ng-template matStepLabel>Company Information</ng-template>\r\n          <div class=\"row fields\">\r\n            <h4>\r\n              <mat-icon>label_important</mat-icon> Company Information:\r\n            </h4>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label> Company  <span class=\"required-field\">*</span>\r\n                  <span class=\"badge rounded-pill bg-warning\" *ngIf=\"userAccount?.company?.status === 'FOR_APPROVAL'\">\r\n                    For Approval\r\n                  </span>\r\n                  <span class=\"badge rounded-pill bg-danger\" *ngIf=\"userAccount?.company?.delinquent \">\r\n                    With Penalty\r\n                  </span>\r\n                </mat-label>\r\n                <mat-select [(ngModel)]=\"userAccount.company\" name=\"company\" [compareWith]=\"compareCompany\"\r\n                  formControlName=\"company\" matNativeControl (selectionChange)=\"getSelectedCompany($event)\">\r\n                  <mat-option (click)=\"openCompanyComponent()\">\r\n                    <span class=\"badge bg-success dd\">Add New Company</span>\r\n                  </mat-option>\r\n                  <mat-option *ngFor=\"let i of companyList\" [value]=\"i\">\r\n                    {{i.companyName}}\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-10\" appearance=\"outline\">\r\n                <mat-label> Member Affiliation</mat-label>\r\n                <input matInput [value]=\"company?.membersAffiliation?.description\" name=\"membersAffiliation\"\r\n                  formControlName=\"membersAffiliation\" readonly>\r\n              </mat-form-field>\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Company Number: </mat-label>\r\n                <input matInput [(ngModel)]=\"company.companyMobileNo\" name=\"companyMobileNo\"\r\n                  formControlName=\"companyMobileNo\" readonly>\r\n              </mat-form-field> -->\r\n\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Telephone Number: </mat-label>\r\n                <input matInput [value]=\"company?.companyTelephoneNo\" name=\"companyTelephoneNo\"\r\n                  formControlName=\"companyTelephoneNo\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                <mat-label> Alternate Telephone Number: </mat-label>\r\n                <input matInput [(ngModel)]=\"company.companyTelephoneNo2\" name=\"companyTelephoneNo2\"\r\n                  formControlName=\"companyTelephoneNo2\" readonly>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                <mat-label> Contact Person: </mat-label>\r\n                <input matInput [(ngModel)]=\"company.contactPersonName\" name=\"contactPersonName\"\r\n                  formControlName=\"contactPersonName\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                <mat-label> Company Email Address: </mat-label>\r\n                <input matInput [(ngModel)]=\"company.contactPersonEmail\" name=\"contactPersonEmail\"\r\n                  formControlName=\"contactPersonEmail\" readonly>\r\n              </mat-form-field> -->\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button mat-raised-button matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n\r\n      <mat-step [stepControl]=\"accountInfo\">\r\n        <form [formGroup]=\"accountInfo\">\r\n          <ng-template matStepLabel>Account Information</ng-template>\r\n          <div class=\"row fields\">\r\n            <h4>\r\n              <mat-icon>label_important</mat-icon> Account Information:\r\n            </h4>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label> Email Address:  <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.username\" name=\"userName\" formControlName=\"userName\"\r\n                  [readonly]=\"process === 'UPDATE'\" type=\"email\" pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\r\n              </mat-form-field>\r\n              <p *ngIf=\"accountInfo.get('userName').dirty && accountInfo.controls['userName'].errors\" class=\"badge\">\r\n                <mat-icon>warning</mat-icon>\r\n                Please provide a valid email address.\r\n              </p>\r\n            </div>\r\n            <div\r\n              [ngClass]=\"accountInfo.get('password').dirty && accountInfo.controls['password'].errors ? 'row credential-creation' : 'row' \">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Password:  <span class=\"required-field\">*</span>\r\n                </mat-label>\r\n                <input matInput [type]=\"hidePassword ? 'password' : 'text'\" [(ngModel)]=\"userAccount.password\"\r\n                  name=\"password\" formControlName=\"password\" (keyup)=\"confirmPassword(confirmPasswords)\">\r\n                <button type=\"button\" mat-icon-button matSuffix (click)=\"hidePassword = !hidePassword\"\r\n                  [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidePassword\">\r\n                  <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </button>\r\n                <mat-hint *ngIf=\"accountInfo.get('password').dirty && accountInfo.controls['password'].errors\">\r\n                  <mat-icon>warning</mat-icon>\r\n                  Password must be at least 8 characters long and must contain a number, lower case and upper case\r\n                  characters.\r\n                </mat-hint>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Confirm Password:\r\n                  <span class=\"required-field\">*</span>\r\n                </mat-label>\r\n                <input matInput [type]=\"hideConfirmPassword ? 'password' : 'text'\" [(ngModel)]=\"confirmPasswords\"\r\n                  name=\"confirmPasswords\" formControlName=\"confirmPasswords\"\r\n                  (keyup)=\"confirmPassword(confirmPasswords)\">\r\n                <button type=\"button\" mat-icon-button matSuffix (click)=\"hideConfirmPassword = !hideConfirmPassword\"\r\n                  [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideConfirmPassword\">\r\n                  <mat-icon>{{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </button>\r\n                <mat-hint *ngIf=\"accountInfo.get('confirmPasswords').dirty && !passwordMatch\">\r\n                  <mat-icon>warning</mat-icon>\r\n                  Password does not match\r\n                </mat-hint>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <mat-hint *ngIf=\"(accountInfo.valid || passwordMatch) && userAccount.acceptTerms===false\">\r\n             <p><i style=\"color: red;\"> <mat-icon>warning</mat-icon>Need to Accept Terms and Agreement!</i></p>\r\n            </mat-hint>\r\n            <button mat-raised-button color=\"primary\" *ngIf=\"!isUpdate\" (click)=\"save()\"\r\n              [disabled]=\"(!accountInfo.valid || !passwordMatch) || userAccount.acceptTerms===false\">Register</button>\r\n            <button mat-raised-button color=\"primary\" *ngIf=\"isUpdate\" (click)=\"update()\"\r\n              [disabled]=\"!accountInfo.valid || !passwordMatch\">Update</button>\r\n            <button mat-raised-button matStepperPrevious>Back</button>\r\n            <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </div>\r\n</form>";
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


      var _add_company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-company-routing.module */
      "H6Pz");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _add_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-company.component */
      "9hFf");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddCompanyModule = /*#__PURE__*/_createClass(function AddCompanyModule() {
        _classCallCheck(this, AddCompanyModule);
      });

      AddCompanyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_company_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddCompanyRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
      })], AddCompanyModule);
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


      var _company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-routing.module */
      "Fy8O");

      ;

      var CompanyModule = /*#__PURE__*/_createClass(function CompanyModule() {
        _classCallCheck(this, CompanyModule);
      });

      CompanyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"]]
      })], CompanyModule);
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