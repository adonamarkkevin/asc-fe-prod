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


      var _user_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-account.component */
      "ea/y");

      var routes = [{
        path: '',
        component: _user_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"]
      }];

      var UserAccountRoutingModule = /*#__PURE__*/_createClass(function UserAccountRoutingModule() {
        _classCallCheck(this, UserAccountRoutingModule);
      });

      UserAccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserAccountRoutingModule);
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
    "YuNm":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/user-account/user-account.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YuNm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <span class=\"material-icons\">badge</span> User Account\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <mat-tab-group dynamicHeight *ngIf=\"isAscUser || userAccount.id\">\r\n      <!-- 1 -->\r\n      <mat-tab label=\"User Details\">\r\n        <form [formGroup]=\"userInfo\">\r\n          <div class=\"fields\">\r\n            <h4>\r\n              <mat-icon>label_important</mat-icon> Personal Information:\r\n            </h4>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Given name: <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.firstName\" name=\"firstName\" formControlName=\"firstName\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Middle name: </mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.middleName\" name=\"middleName\" formControlName=\"middleName\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Last name: <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.lastName\" name=\"lastName\" formControlName=\"lastName\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Mobile Number: <mat-icon>notification_important</mat-icon></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.mobileNumber\" name=\"mobileNumber\" placeholder=\"09xxxxxxxxx\"\r\n                  formControlName=\"mobileNumber\" (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"11\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\"\r\n              *ngIf=\"currentUserRole==='ROLE_SUPER_ADMIN' || currentUserRole==='ROLE_ADMIN'\">\r\n                <mat-label> User Role <mat-icon>notification_important</mat-icon>\r\n                </mat-label>\r\n                <mat-select [(ngModel)]=\"userAccount.userRole\" name=\"userRole\" [compareWith]=\"compareUserRole\"\r\n                  formControlName=\"userRole\" matNativeControl [disabled]=\"userAccount?.userRole?.name=='ROLE_APPLICANT'\">\r\n                  <mat-option *ngFor=\"let i of userRoleList\" [value]=\"i\">\r\n                    {{ i?.name?.replaceAll('ROLE_', '')?.replace('_', ' ')?.replace('ENCODER', 'EVALUATOR') }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n              <button class=\"col\" mat-raised-button color=\"warn\" *ngIf=\"userAccount?.firstName != undefined\r\n              && userAccount?.status === 'VERIFICATION_SENT' && userAccount?.accountType === 'APPLICANT'\" (click)=\"resendEmail()\">\r\n              <span class=\"material-icons\">mail</span> Resend Email Verification\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"fields\" *ngIf=\"userAccount?.userRole?.name=='ROLE_APPLICANT' && !isAscUser\">\r\n            <h4>\r\n              <mat-icon>label_important</mat-icon> Company Information:\r\n            </h4>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label> Company <mat-icon>notification_important</mat-icon>\r\n                </mat-label>\r\n                <mat-select [(ngModel)]=\"userAccount.company\" name=\"company\" [compareWith]=\"compareCompany\"\r\n                  formControlName=\"company\" matNativeControl (selectionChange)=\"getSelectedCompany($event)\">\r\n                  <mat-option (click)=\"openCompanyComponent()\">\r\n                    <span class=\"badge bg-success dd\">Add New Company</span>\r\n                  </mat-option>\r\n                  <mat-option *ngFor=\"let i of companyList\" [value]=\"i\">\r\n                    {{i.companyName}}\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Member Affiliation</mat-label>\r\n                <input matInput [value]=\"userAccount?.company?.membersAffiliation?.description\"\r\n                  name=\"membersAffiliation\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Company Number: <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [value]=\"userAccount?.company?.companyMobileNo\" name=\"companyMobileNo\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Telephone Number: </mat-label>\r\n                <input matInput [value]=\"userAccount?.company?.companyTelephoneNo\" name=\"companyTelephoneNo\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Alternative Telephone Number: </mat-label>\r\n                <input matInput [value]=\"userAccount?.company?.companyTelephoneNo2\" name=\"companyTelephoneNo2\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Contact Person: </mat-label>\r\n                <input matInput [value]=\"userAccount?.company?.contactPersonName\" name=\"contactPersonName\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label> Contact Person Email: </mat-label>\r\n                <input matInput [value]=\"userAccount?.company?.contactPersonEmail\" name=\"contactPersonEmail\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\" *ngIf=\"!userAccount?.id\">\r\n            <b><b class=\"material-icons\">error_outline</b> Note: Proceed to Account Information to complete adding of ASC user.</b>\r\n          </div>\r\n\r\n          <div class=\"container\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"insert(false)\" [disabled]=\"!userInfo?.valid\" *ngIf=\"userAccount?.id\"><i class=\"material-icons color__white\">offline_pin</i> UPDATE</button>\r\n              <br>\r\n          </div>\r\n        </form>\r\n      </mat-tab>\r\n\r\n      <!-- 2 -->\r\n      <mat-tab label=\"E-Signature\" *ngIf=\"userAccount?.userRole?.name !== 'ROLE_APPLICANT' && userAccount?.id\">\r\n        <form [formGroup]=\"eSignature\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" appearance=\"outline\">\r\n\r\n              <div class=\"row fields\">\r\n                <h4>\r\n                  <i class=\"material-icons\">upload</i> &nbsp;Upload e-Signature\r\n                </h4>\r\n                <br>\r\n\r\n                <div class=\"col-md-12\" appearance=\"outline\">\r\n                  <mat-label>Filename:  <mat-icon>notification_important</mat-icon></mat-label>\r\n                  <br>\r\n                  <br>\r\n                  <input #selectFileButton matInput [value]=\"eSign.originalFilename\" disabled\r\n                    *ngIf=\"eSign.originalFilename\">\r\n                  <input #selectFileButton class=\"file-upload\" type=\"file\" *ngIf=\"!eSign.originalFilename\" accept=\"image/*\"\r\n                    (change)=\"selectFile($event)\">\r\n                  <input type=\"hidden\" [(ngModel)]=\"eSign.signatureAttachmentReference\" formControlName=\"eSignature\">\r\n                  <br>\r\n                </div>\r\n                <div class=\"col-md-12\" appearance=\"outline\">\r\n\r\n                  <button mat-raised-button class=\"button-red button-right\" (click)=\"deleteESignature()\"\r\n                    *ngIf=\"eSign?.fileURL\">\r\n                    <i class=\"material-icons add-document color__white\">delete</i> DELETE E-SIGNATURE\r\n                  </button>\r\n\r\n                  <button mat-raised-button class=\"button-red button-right\" (click)=\"viewDocument()\"\r\n                    *ngIf=\"eSign?.signatureAttachmentReference\">\r\n                    <i class=\"material-icons add-document\">open_in_new</i> VIEW DOCUMENT\r\n                  </button>\r\n\r\n\r\n                  &nbsp; &nbsp;\r\n\r\n                  <button mat-raised-button class=\"button-red button-right\" (click)=\"uploadSignature()\"\r\n                    [disabled]=\"!safeURLSignature || !isShowUploadButton\" *ngIf=\"isShowUploadButton\">\r\n                    <i class=\"material-icons add-document color__white\">upload</i> UPLOAD\r\n                  </button>\r\n\r\n                  <br>\r\n                  <div class=\"row col-md-12\" appearance=\"outline\" *ngIf=\"previewDocument==true && (\r\n                          userAccount?.signatureAttachmentReference\r\n                        )\">\r\n                    <div class=\"file-upload\">\r\n                      <object [data]=\"safeURLSignature\" type=\"application/pdf\" width=\"100%\" height=\"400\">\r\n                        <iframe [src]=\"safeURLSignature\" width=\"100%\" height=\"400\">\r\n                          <p>This browser does not support PDF!</p>\r\n                        </iframe>\r\n                      </object>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\"><br></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </mat-tab>\r\n\r\n      <!-- 3 -->\r\n      <mat-tab label=\"Account Information\">\r\n        <form [formGroup]=\"accountInfo\">\r\n          <ng-template matStepLabel>Account Information</ng-template>\r\n          <div class=\"row fields\">\r\n            <h4>\r\n              <mat-icon>label_important</mat-icon> Account Information:\r\n            </h4>\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                <mat-label> Email Address: <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span></mat-label>\r\n                <input matInput [(ngModel)]=\"userAccount.username\" name=\"userName\" formControlName=\"userName\"\r\n                  type=\"email\" [readonly]=\"userAccount?.id\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row col-md-6\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label> Password:\r\n                  <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span>\r\n                </mat-label>\r\n                <input matInput [type]=\"hidePassword ? 'password' : 'text'\" [(ngModel)]=\"userAccount.password\"\r\n                  name=\"password\" formControlName=\"password\">\r\n                <button type=\"button\" mat-icon-button matSuffix (click)=\"hidePassword = !hidePassword\"\r\n                  [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hidePassword\">\r\n                  <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </button>\r\n              </mat-form-field>\r\n              <p *ngIf=\"accountInfo.get('password').dirty && accountInfo.controls['password'].errors\" class=\"badge\">\r\n                <mat-icon>warning</mat-icon>\r\n                Password must contain lower,upper case letter and number.\r\n              </p>\r\n            </div>\r\n            <div class=\"row col-md-6\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label> Confirm Password:\r\n                  <span class=\"required-field\">\r\n                    <mat-icon>notification_important</mat-icon>\r\n                  </span>\r\n                </mat-label>\r\n                <input matInput [type]=\"hideConfirmPassword ? 'password' : 'text'\" [(ngModel)]=\"confirmPasswords\"\r\n                  name=\"confirmPasswords\" formControlName=\"confirmPasswords\"\r\n                  (keyup)=\"confirmPassword(confirmPasswords)\">\r\n                <button type=\"button\" mat-icon-button matSuffix (click)=\"hideConfirmPassword = !hideConfirmPassword\"\r\n                  [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideConfirmPassword\">\r\n                  <mat-icon>{{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </button>\r\n              </mat-form-field>\r\n              <p *ngIf=\"accountInfo.get('confirmPasswords').dirty && !passwordMatch\" class=\"badge\">\r\n                <mat-icon>warning</mat-icon>\r\n                Password not match\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"insert(true)\" [disabled]=\"!userInfo?.valid || !accountInfo?.valid || !userAccount?.userRole || !userAccount?.password || !confirmPasswords\"\r\n            *ngIf=\"!userAccount?.id\"><i class=\"material-icons color__white\">offline_pin</i> SAVE</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"updateCredentials()\" [disabled]=\"!accountInfo?.valid\" [hidden]=\"!userAccount?.id\"><i class=\"material-icons color__white\">offline_pin</i> UPDATE</button>  \r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n    <div class=\"row\">\r\n      <br>\r\n      <div class=\"container\">\r\n        <mat-tab-group mat-align-tabs=\"start\" (selectedTabChange)=\"changeTab($event)\" *ngIf=\"!isFromUserProfile\">\r\n          <!-- displayed columns will be changed in changeTab() -->\r\n          <mat-tab label=\"Non ASC users\">\r\n\r\n          </mat-tab>\r\n          <mat-tab label=\"ASC users\">\r\n\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n        <br>\r\n        <span *ngIf=\"!isFromUserProfile && displayTable\">\r\n          <app-form-list [dataSource]=\"dataSource\"\r\n            [displayedColumns]=\"displayedColumns\" (selectInListFunction)=\"viewUserInformation()\">\r\n          </app-form-list>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-account.component.html */
      "YuNm");
      /* harmony import */


      var _user_account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-account.component.scss */
      "oYL1");
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/core/models/eSignature.model */
      "Pwem");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_19__);
      /* harmony import */


      var _company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../company/add-company/add-company.component */
      "9hFf");

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
          this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_12__["UserAccount"]();
          this.company = new _models__WEBPACK_IMPORTED_MODULE_12__["Company"]();
          this.userRole = new _models__WEBPACK_IMPORTED_MODULE_12__["UserRole"]();
          this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_12__["Affiliation"]();
          this.eSign = new app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_15__["ESignature"]();
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


            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].userAccount, this.userAccount).subscribe(function (res) {
              if (res !== undefined) {
                _this.sweetAlertService.customSuccessMessage('Account has been created successfully.');

                var evt = {
                  index: null
                };

                if (_this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_14__["USER_ROLES"].ROLE_APPLICANT) {
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

              if (_this.currentTab == "NONASC") _this.getUserPerTypeList();else if (_this.currentTab == "ASC") _this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_14__["ACCOUNT_TYPE"].ASC_USER);
              _this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_12__["UserAccount"]();
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            console.log('update');
            var endpoint = this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_14__["USER_ROLES"].ROLE_APPLICANT ? _shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].userAccount : _shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].updateUserAccount;
            this.apiService.update(endpoint, this.userAccount).subscribe(function (res) {
              if (res !== undefined) {
                // this.updateCredentials();
                _this2.sweetAlertService.customSuccessMessage('Account was successfully updated');

                var evt = {
                  index: null
                };
                console.log(_this2.userAccount);

                if (_this2.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_14__["USER_ROLES"].ROLE_APPLICANT) {
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
              if (_this2.currentTab == "NONASC") _this2.getUserPerTypeList();else if (_this2.currentTab == "ASC") _this2.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_14__["ACCOUNT_TYPE"].ASC_USER);
              _this2.userAccount = new _models__WEBPACK_IMPORTED_MODULE_12__["UserAccount"]();

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


            this.apiService.insert(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].userAccount, this.userAccount, isNewEntry).subscribe(function (res) {
              if (res !== undefined) {
                _this3.sweetAlertService.customSuccessMessage(isNewEntry ? 'Account has been created successfully.' : 'Account was successfully updated');

                var evt = {
                  index: null
                };

                if (_this3.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_14__["USER_ROLES"].ROLE_APPLICANT) {
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

              if (_this3.currentTab == "NONASC") _this3.getUserPerTypeList();else if (_this3.currentTab == "ASC") _this3.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_14__["ACCOUNT_TYPE"].ASC_USER);
              _this3.userAccount = new _models__WEBPACK_IMPORTED_MODULE_12__["UserAccount"]();
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
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].updatePassword, updatedAccount).subscribe(function (res) {
              if (res !== undefined) {
                _this4.sweetAlertService.success(res);

                var evt = {
                  index: null
                };

                if (_this4.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_14__["USER_ROLES"].ROLE_APPLICANT) {
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
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].company, i.value.id).subscribe(function (res) {
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
            this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].userAccountType, "/").concat(type)).subscribe(function (res) {
              _this6.userAccountList = res.responseData.data;
              _this6.displayTable = true;

              _this6.spinner.hide();

              _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.responseData.data); // this.dataSource.paginator = this.formListComponent.paginator;
              // this.dataSource.sort = this.formListComponent.sort;
            });
          }
        }, {
          key: "getMaintenanceList",
          value: function getMaintenanceList() {
            var _this7 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
              _this7.companyList = res.responseData.data;
            }, function (err) {});
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].activeMembersAffiliation).subscribe(function (res) {
              _this7.affiliationList = res.responseData.data;
            }, function (err) {});
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].roles).subscribe(function (res) {
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
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].userAccount, accountId).subscribe(function (res) {
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

            var dialogRef = this.dialog.open(_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_20__["AddCompanyComponent"], {
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
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              middleName: [''],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              userRole: [''],
              company: ['']
            });
            this.eSignature = this.formBuilder.group({
              eSignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });

            if (!this.isFromUserProfile) {
              this.accountInfo = this.formBuilder.group({
                userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                // userRole: ['', Validators.required],
                userRole: [''],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
                confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
            } else {
              this.accountInfo = this.formBuilder.group({
                userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
            }

            this.userAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              userInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
              companyInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
              eSignature: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
              accountInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_12__["UserAccount"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_12__["Company"]();
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_12__["Affiliation"]();
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
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_12__["UserAccount"]();
            this.resetFormValidator();

            if (evt.index === 0) {
              this.currentTab = "NONASC"; //     this.isUpdateAscUser = false;

              this.getUserPerTypeList();
              this.displayedColumns = ['firstName', 'lastName', 'companyDescription', 'emailAddress', 'mobileNumber', 'status'];
            } else if (evt.index === 1) {
              this.currentTab = "ASC"; //     this.isUpdateAscUser = true;

              this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_14__["ACCOUNT_TYPE"].ASC_USER);
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

            sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
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

                _this10.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].signature, _this10.selectedFile, params).subscribe(function (res) {
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
            var endpoint = this.isAscUser ? _shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].userAccount : _shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].updateUserAccount;
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
            this.apiService.findByParam("".concat(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].signature, "/account-id"), accountId).subscribe(function (res) {
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

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].adminResendVerificationCode + "/".concat(this.userAccount.username), this.userAccount).subscribe(function (res) {
              _this13.sweetAlertService.customSuccessMessage('Email verification has been sent');
            });
          }
        }, {
          key: "deleteESignature",
          value: function deleteESignature() {
            var _this14 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
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

                _this14.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_14__["ENDPOINTS"].signature, (_a = _this14.eSign) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (res) {
                  _this14.eSign = new app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_15__["ESignature"]();
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

      UserAccountComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_13__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_13__["SweetAlertService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_13__["DataStorageService"]
        }, {
          type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_17__["ValidateFieldService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_16__["FileStorageService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
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

      UserAccountComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_11__["FormListComponent"]]
        }],
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
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['stepper']
        }],
        selectFileButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['selectFileButton', {
            "static": false
          }]
        }]
      };
      UserAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-account',
        template: _raw_loader_user_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserAccountComponent);
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


      var _user_account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-account-routing.module */
      "B0iI");
      /* harmony import */


      var _user_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-account.component */
      "ea/y");
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


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");

      var UserAccountModule = /*#__PURE__*/_createClass(function UserAccountModule() {
        _classCallCheck(this, UserAccountModule);
      });

      UserAccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_account_component__WEBPACK_IMPORTED_MODULE_4__["UserAccountComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_account_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserAccountRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], UserAccountModule);
      /***/
    },

    /***/
    "oYL1":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/user-account/user-account.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function oYL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container-fluid ::ng-deep .mat-step-header .mat-step-icon {\n  background-color: #850000;\n}\n.container-fluid ::ng-deep .mat-step-header .mat-step-icon-selected {\n  background-color: #348f00;\n  zoom: 1.8;\n}\n.container-fluid .title {\n  padding-left: 10px;\n}\n.container-fluid .title mat-label {\n  font-size: 25px;\n  font-weight: 600;\n  color: #9c0000;\n}\n.container-fluid label {\n  font-size: 12px;\n  font-weight: 600;\n}\n.container-fluid p {\n  font-weight: 400;\n  color: gray;\n  font-size: 12px;\n}\n.container-fluid .button-content {\n  text-align: center;\n}\n.container-fluid .badge {\n  margin-top: -15px;\n  font-size: 15px;\n  color: red;\n}\n.container-fluid .dd {\n  float: left;\n  font-size: 15px;\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n}\n.requiredIcon ::ng-deep .ng-placeholder::after {\n  font-family: \"Material Icons\";\n  color: #850000;\n  content: \"notification_important\";\n}\nbody {\n  max-height: 150px;\n  overflow-y: scroll;\n  background-color: red;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-weight: bold;\n}\n.fields {\n  padding: 0px 10px;\n}\nh4 {\n  margin: 16px 0px 16px -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UseUJBQUE7QUFGSjtBQU1FO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMTjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7QUFUSjtBQVlFO0VBR0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVpKO0FBZUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQW9CQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBakJGO0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBakJGO0FBMkJFO0VBQ0UsaUJBQUE7QUF4Qko7QUE2QkE7RUFDRSxpQkFBQTtBQTFCRjtBQTZCQTtFQUNFLDJCQUFBO0FBMUJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgLy8gcGFkZGluZzogMTBweCA0MHB4O1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAwLCAwKTtcclxuXHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDE0MywgMCk7XHJcbiAgICB6b29tOiAxLjg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHJnYigxNTYsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICAvLyAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuZGQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm5nLXNlbGVjdCB7fVxyXG5cclxuLnJlcXVpcmVkSWNvbiA6Om5nLWRlZXAgLm5nLXBsYWNlaG9sZGVyOjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICBjb2xvcjogIzg1MDAwMDtcclxuICBjb250ZW50OiBcIm5vdGlmaWNhdGlvbl9pbXBvcnRhbnRcIjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICBtYXQtdGFiLWdyb3VwIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmE2YTIgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmZpZWxkcyB7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICBtYXJnaW46IDE2cHggMHB4IDE2cHggLTEwcHg7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e-es5.js.map