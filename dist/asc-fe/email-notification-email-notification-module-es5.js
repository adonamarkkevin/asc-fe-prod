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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-notification-email-notification-module"], {
    /***/
    "2Ur+":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/email-notification/email-notification.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: EmailNotificationModule */

    /***/
    function Ur(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailNotificationModule", function () {
        return EmailNotificationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../applications/editor/lib/angular-editor.module */
      "ylsH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./email-notification-routing.module */
      "eZ6q");
      /* harmony import */


      var _email_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./email-notification.component */
      "xz3X");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EmailNotificationModule = /*#__PURE__*/_createClass(function EmailNotificationModule() {
        _classCallCheck(this, EmailNotificationModule);
      });

      EmailNotificationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_notification_component__WEBPACK_IMPORTED_MODULE_5__["EmailNotificationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmailNotificationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsModule"], _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_1__["CustomAngularEditorModule"]]
      })], EmailNotificationModule);
      /***/
    },

    /***/
    "34od":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/email-notification/email-notification.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvZW1haWwtbm90aWZpY2F0aW9uL2VtYWlsLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
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

    },

    /***/
    "Demc":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/email-notification/email-notification.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Demc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    Email Notification\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"emailNotificationForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Email Code <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"emailNotification.emailCode\" name=\"emailCode\"\r\n                        formControlName=\"emailCode\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Subject</mat-label>\r\n                    <input matInput [(ngModel)]=\"emailNotification.subject\" name=\"subject\" formControlName=\"subject\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Status</mat-label>\r\n                    <mat-select [(ngModel)]=\"emailNotification.status\" name=\"status\" formControlName=\"status\">\r\n                        <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                            {{i.status}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Description</mat-label>\r\n                    <textarea matInput [(ngModel)]=\"emailNotification.description\" name=\"description\" formControlName=\"description\"></textarea>\r\n                </mat-form-field>\r\n\r\n                <div class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Body</mat-label>\r\n                    <angular-editor \r\n                        [(ngModel)]=\"emailNotification.body\" \r\n                        [config]=\"editorConfig\" \r\n                        name=\"body\"\r\n                        formControlName=\"body\">\r\n                    </angular-editor><br>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"emailNotification\" [childForm]=\"emailNotificationForm\"\r\n            (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"\r\n            (deleteFunction)=\"delete()\">\r\n        </app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getEmailNotification()\"></app-form-list>\r\n\r\n    </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "eZ6q":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/email-notification/email-notification-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: EmailNotificationRoutingModule */

    /***/
    function eZ6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailNotificationRoutingModule", function () {
        return EmailNotificationRoutingModule;
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


      var _email_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email-notification.component */
      "xz3X");

      var routes = [{
        path: '',
        component: _email_notification_component__WEBPACK_IMPORTED_MODULE_3__["EmailNotificationComponent"]
      }];

      var EmailNotificationRoutingModule = /*#__PURE__*/_createClass(function EmailNotificationRoutingModule() {
        _classCallCheck(this, EmailNotificationRoutingModule);
      });

      EmailNotificationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmailNotificationRoutingModule);
      /***/
    },

    /***/
    "xz3X":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/email-notification/email-notification.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: EmailNotificationComponent */

    /***/
    function xz3X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailNotificationComponent", function () {
        return EmailNotificationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_email_notification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./email-notification.component.html */
      "Demc");
      /* harmony import */


      var _email_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email-notification.component.scss */
      "34od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/core/models/email-notification.model */
      "FnPy");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var EmailNotificationComponent = /*#__PURE__*/function () {
        function EmailNotificationComponent(apiService, formBuilder, sweetAlertService, spinner) {
          _classCallCheck(this, EmailNotificationComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.spinner = spinner;
          this.displayedColumns = ['emailCode', 'subject', 'description', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]);
          this.emailNotification = new app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_9__["EmailNotification"]();
          this.emailNotificationList = [];
          this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '15em',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'no',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter email body message here...',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            defaultFontSize: '',
            fonts: [{
              "class": 'arial',
              name: 'Arial'
            }, {
              "class": 'times-new-roman',
              name: 'Times New Roman'
            }, {
              "class": 'calibri',
              name: 'Calibri'
            }, {
              "class": 'comic-sans-ms',
              name: 'Comic Sans MS'
            }],
            customClasses: [{
              name: 'quote',
              "class": 'quote'
            }, {
              name: 'redText',
              "class": 'redText'
            }, {
              name: 'titleText',
              "class": 'titleText',
              tag: 'h1'
            }],
            uploadUrl: 'v1/image',
            // upload: (file: File) => { ... }
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [['link', 'unlink', 'insertImage', 'insertVideo']]
          };
        }

        _createClass(EmailNotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].emailNotification).subscribe(function (res) {
              _this.emailNotificationList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.spinner.show();
            console.log(this.emailNotification);
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].emailNotification, this.emailNotification).subscribe(function (res) {
              if (res !== undefined) {
                _this2.spinner.hide();

                _this2.sweetAlertService.success(res);
              }
            }, function (err) {
              _this2.spinner.hide();

              _this2.sweetAlertService.error(err);
            }, function () {
              _this2.spinner.hide();

              _this2.resetFormValidator(), _this2.getList();
            });
          }
        }, {
          key: "getEmailNotification",
          value: function getEmailNotification() {
            var _this3 = this;

            this.spinner.show();
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].emailNotification, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.emailNotification = res.responseData.data;
                console.log(res);

                _this3.spinner.hide();
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            this.spinner.show();
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].emailNotification, this.emailNotification).subscribe(function (res) {
              if (res !== undefined) {
                _this4.spinner.hide();

                _this4.sweetAlertService.success(res);
              }
            }, function (err) {
              _this4.spinner.hide();

              _this4.sweetAlertService.error(err);
            }, function () {
              _this4.spinner.hide();

              _this4.resetFormValidator();

              _this4.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.emailNotification.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
            this.emailNotificationForm = this.formBuilder.group({
              emailCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.emailNotification = new app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_9__["EmailNotification"]();
            this.emailNotification.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
            this.emailNotificationForm.markAsUntouched();
            this.emailNotificationForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              text: 'Are you sure you want to delete this email notification?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.spinner.show();

                _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].emailNotification, _this5.emailNotification.id).subscribe(function () {
                  _this5.spinner.hide();

                  _this5.sweetAlertService.customSuccessMessage('Email notification successfully deleted.');

                  _this5.resetFormValidator();

                  _this5.getList();
                });
              }
            });
          }
        }]);

        return EmailNotificationComponent;
      }();

      EmailNotificationComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]
        }];
      };

      EmailNotificationComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      EmailNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-email-notification',
        template: _raw_loader_email_notification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_notification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmailNotificationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=email-notification-email-notification-module-es5.js.map