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


      var _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../applications/editor/lib/angular-editor.module */
      "ylsH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email-notification-routing.module */
      "eZ6q");
      /* harmony import */


      var _email_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./email-notification.component */
      "xz3X");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EmailNotificationModule = /*@__PURE__*/function () {
        var EmailNotificationModule = /*#__PURE__*/_createClass(function EmailNotificationModule() {
          _classCallCheck(this, EmailNotificationModule);
        });

        EmailNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: EmailNotificationModule
        });
        EmailNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function EmailNotificationModule_Factory(t) {
            return new (t || EmailNotificationModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailNotificationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"], _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_0__["CustomAngularEditorModule"]]]
        });
        return EmailNotificationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailNotificationModule, {
          declarations: [_email_notification_component__WEBPACK_IMPORTED_MODULE_4__["EmailNotificationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailNotificationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"], _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_0__["CustomAngularEditorModule"]]
        });
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _email_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email-notification.component */
      "xz3X");

      var routes = [{
        path: '',
        component: _email_notification_component__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationComponent"]
      }];

      var EmailNotificationRoutingModule = /*@__PURE__*/function () {
        var EmailNotificationRoutingModule = /*#__PURE__*/_createClass(function EmailNotificationRoutingModule() {
          _classCallCheck(this, EmailNotificationRoutingModule);
        });

        EmailNotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: EmailNotificationRoutingModule
        });
        EmailNotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function EmailNotificationRoutingModule_Factory(t) {
            return new (t || EmailNotificationRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return EmailNotificationRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailNotificationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
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


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/email-notification.model */
      "FnPy");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _applications_editor_lib_angular_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../applications/editor/lib/angular-editor.component */
      "BcYv");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function EmailNotificationComponent_mat_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r1.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.status, " ");
        }
      }

      var EmailNotificationComponent = /*@__PURE__*/function () {
        var EmailNotificationComponent = /*#__PURE__*/function () {
          function EmailNotificationComponent(apiService, formBuilder, sweetAlertService, spinner) {
            _classCallCheck(this, EmailNotificationComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.spinner = spinner;
            this.displayedColumns = ['emailCode', 'subject', 'description', 'status'];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]);
            this.emailNotification = new app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_5__["EmailNotification"]();
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

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification).subscribe(function (res) {
                _this.emailNotificationList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
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
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.emailNotification).subscribe(function (res) {
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
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.formListComponent.idForUpdate).subscribe(function (res) {
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
              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.emailNotification).subscribe(function (res) {
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
              this.emailNotification.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
              this.emailNotificationForm = this.formBuilder.group({
                emailCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                status: ['']
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.emailNotification = new app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_5__["EmailNotification"]();
              this.emailNotification.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
              this.emailNotificationForm.markAsUntouched();
              this.emailNotificationForm.markAsPristine();
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this5 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this email notification?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this5.spinner.show();

                  _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, _this5.emailNotification.id).subscribe(function () {
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

        EmailNotificationComponent.ɵfac = function EmailNotificationComponent_Factory(t) {
          return new (t || EmailNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]));
        };

        EmailNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: EmailNotificationComponent,
          selectors: [["app-email-notification"]],
          viewQuery: function EmailNotificationComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 36,
          vars: 12,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-4"], [1, "required-field"], ["matInput", "", "name", "emailCode", "formControlName", "emailCode", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "subject", "formControlName", "subject", 3, "ngModel", "ngModelChange"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["name", "body", "formControlName", "body", 3, "ngModel", "config", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"]],
          template: function EmailNotificationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Email Notification ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email Code ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailNotificationComponent_Template_input_ngModelChange_14_listener($event) {
                return ctx.emailNotification.emailCode = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Subject");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailNotificationComponent_Template_input_ngModelChange_18_listener($event) {
                return ctx.emailNotification.subject = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Status");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailNotificationComponent_Template_mat_select_ngModelChange_22_listener($event) {
                return ctx.emailNotification.status = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EmailNotificationComponent_mat_option_23_Template, 2, 2, "mat-option", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailNotificationComponent_Template_textarea_ngModelChange_27_listener($event) {
                return ctx.emailNotification.description = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "angular-editor", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailNotificationComponent_Template_angular_editor_ngModelChange_31_listener($event) {
                return ctx.emailNotification.body = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-form-action-buttons", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function EmailNotificationComponent_Template_app_form_action_buttons_saveFunction_33_listener() {
                return ctx.save();
              })("updateFunction", function EmailNotificationComponent_Template_app_form_action_buttons_updateFunction_33_listener() {
                return ctx.update();
              })("cancelFunction", function EmailNotificationComponent_Template_app_form_action_buttons_cancelFunction_33_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function EmailNotificationComponent_Template_app_form_action_buttons_deleteFunction_33_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-form-list", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function EmailNotificationComponent_Template_app_form_list_selectInListFunction_35_listener() {
                return ctx.getEmailNotification();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.emailNotificationForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailNotification.emailCode);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailNotification.subject);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailNotification.status);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statusList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailNotification.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailNotification.body)("config", ctx.editorConfig);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.emailNotification)("childForm", ctx.emailNotificationForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _applications_editor_lib_angular_editor_component__WEBPACK_IMPORTED_MODULE_13__["AngularEditorComponent"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvZW1haWwtbm90aWZpY2F0aW9uL2VtYWlsLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return EmailNotificationComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=email-notification-email-notification-module-es5.js.map