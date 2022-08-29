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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-images-login-images-module"], {
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
    "98s5":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/login-images/login-images.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: LoginImagesModule */

    /***/
    function s5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginImagesModule", function () {
        return LoginImagesModule;
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


      var _login_images_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-images-routing.module */
      "qZBF");
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


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _login_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login-images.component */
      "oufF");

      var LoginImagesModule = /*@__PURE__*/function () {
        var LoginImagesModule = /*#__PURE__*/_createClass(function LoginImagesModule() {
          _classCallCheck(this, LoginImagesModule);
        });

        LoginImagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LoginImagesModule
        });
        LoginImagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LoginImagesModule_Factory(t) {
            return new (t || LoginImagesModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_images_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginImagesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsModule"]]]
        });
        return LoginImagesModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginImagesModule, {
          declarations: [_login_images_component__WEBPACK_IMPORTED_MODULE_7__["LoginImagesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_images_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginImagesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "oufF":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/login-images/login-images.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: LoginImagesComponent */

    /***/
    function oufF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginImagesComponent", function () {
        return LoginImagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/core/models/login-image.model */
      "VjNL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/services/date.service */
      "HMc/");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["docInput"];
      var _c1 = ["docFile"];

      function LoginImagesComponent_input_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 13, 14);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.loginImage == null ? null : ctx_r0.loginImage.originalFilename);
        }
      }

      function LoginImagesComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginImagesComponent_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.viewDocument(ctx_r4.loginImage);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "open_in_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " VIEW IMAGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginImagesComponent = /*@__PURE__*/function () {
        var LoginImagesComponent = /*#__PURE__*/function () {
          function LoginImagesComponent(apiService, formBuilder, sweetAlertService, dateService, sanitizer, spinner, fileStorageService) {
            _classCallCheck(this, LoginImagesComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dateService = dateService;
            this.sanitizer = sanitizer;
            this.spinner = spinner;
            this.fileStorageService = fileStorageService;
            this.displayedColumns = ['originalFilename', 'fileURL', 'fileExtension'];
            this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
            this.loginImageList = [];
            this.isShowUploadButton = false;
          }

          _createClass(LoginImagesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.setFormValidator();
              this.getLoginImageList();
            }
          }, {
            key: "getLoginImageList",
            value: function getLoginImageList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage).subscribe(function (res) {
                _this.loginImageList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.responseData.data);
              });
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Are you sure you want to upload this image?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this2.spinner.show();

                  _this2.fileStorageService.uploadImage(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage + "?displayed=true", _this2.selectedFile).subscribe(function (res) {
                    _this2.uploadedLoginImage = res.responseData.data;

                    _this2.hideSpinner();

                    _this2.selectedFile = null;
                    _this2.isShowUploadButton = false;
                    _this2.loginImage.originalFilename = null;

                    _this2.sweetAlertService.customSuccessMessage('Image successfully uploaded.');

                    _this2.getLoginImageList();

                    _this2.myDocInput.nativeElement.value = '';
                    _this2.myDocFile.nativeElement.value = '';
                    _this2.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
                  }, function (err) {
                    _this2.hideSpinner();

                    _this2.sweetAlertService.error(err);
                  }, function () {
                    _this2.hideSpinner();
                  });
                } else {
                  _this2.selectedFile = null;
                }
              });
            }
          }, {
            key: "viewLoginImageList",
            value: function viewLoginImageList() {
              var _this3 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage, this.formListComponent.idForUpdate).subscribe(function (res) {
                var _a;

                _this3.loginImage = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
              });
            }
          }, {
            key: "viewDocument",
            value: function viewDocument(obj) {
              window.open(obj.fileURL);
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this4 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Are you sure you want to delete this login image?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                _this4.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage, _this4.formListComponent.idForUpdate).subscribe(function (res) {
                  _this4.myDocInput.nativeElement.value = '';
                  _this4.myDocFile.nativeElement.value = '';

                  _this4.sweetAlertService.customSuccessMessage('Login image successfully deleted.');

                  _this4.getLoginImageList();

                  _this4.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
                });
              });
            }
          }, {
            key: "selectFile",
            value: function selectFile(event) {
              if (event.target.files[0]) {
                this.fileSize = event.target.files[0].size;
                var fileURL = URL.createObjectURL(event.target.files[0]);
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                var reader = new FileReader();

                var _event$target$files = _slicedToArray(event.target.files, 1),
                    file = _event$target$files[0];

                reader.readAsDataURL(file);

                reader.onload = function () {};

                this.selectedFile = event.target.files[0];
              }
            }
          }, {
            key: "compareImageLogin",
            value: function compareImageLogin(value, selected) {
              if (value && selected) {
                return value.id === selected.id;
              }
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.loginImageForm = this.formBuilder.group({
                originalFileName: [''],
                displayed: ['']
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
            }
          }, {
            key: "hideSpinner",
            value: function hideSpinner() {
              var _this5 = this;

              setTimeout(function () {
                _this5.spinner.hide();
              }, 1);
            }
          }]);

          return LoginImagesComponent;
        }();

        LoginImagesComponent.ɵfac = function LoginImagesComponent_Factory(t) {
          return new (t || LoginImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_11__["FileStorageService"]));
        };

        LoginImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LoginImagesComponent,
          selectors: [["app-login-images"]],
          viewQuery: function LoginImagesComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_2__["FormListComponent"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDocInput = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDocFile = _t.first);
            }
          },
          decls: 27,
          vars: 8,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], ["type", "file", "accept", "image/jpg, image/jpeg", 1, "file-upload", 3, "hidden", "change"], ["docFile", ""], [1, "col-md-12"], ["appearance", "outline", 1, "col-md-7"], ["mat-raised-button", "", "class", "button-red button-right", 3, "click", 4, "ngIf"], [3, "childObject", "childForm", "saveFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["matInput", "", "disabled", "", 3, "value"], ["docInput", ""], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "click"], [1, "material-icons", "color__white"]],
          template: function LoginImagesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login Image ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filename: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginImagesComponent_input_13_Template, 2, 1, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginImagesComponent_Template_input_change_14_listener($event) {
                return ctx.selectFile($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginImagesComponent_button_19_Template, 4, 0, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-form-action-buttons", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function LoginImagesComponent_Template_app_form_action_buttons_saveFunction_21_listener() {
                return ctx.save();
              })("cancelFunction", function LoginImagesComponent_Template_app_form_action_buttons_cancelFunction_21_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function LoginImagesComponent_Template_app_form_action_buttons_deleteFunction_21_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-form-list", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function LoginImagesComponent_Template_app_form_list_selectInListFunction_26_listener() {
                return ctx.viewLoginImageList();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginImageForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginImage == null ? null : ctx.loginImage.originalFilename);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loginImage == null ? null : ctx.loginImage.originalFilename);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginImage == null ? null : ctx.loginImage.originalFilename);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.loginImage)("childForm", ctx.loginImageForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__["FormListComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbG9naW4taW1hZ2VzL2xvZ2luLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return LoginImagesComponent;
      }();
      /***/

    },

    /***/
    "qZBF":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/login-images/login-images-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: LoginImagesRoutingModule */

    /***/
    function qZBF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginImagesRoutingModule", function () {
        return LoginImagesRoutingModule;
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


      var _login_images_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-images.component */
      "oufF");

      var routes = [{
        path: '',
        component: _login_images_component__WEBPACK_IMPORTED_MODULE_2__["LoginImagesComponent"]
      }];

      var LoginImagesRoutingModule = /*@__PURE__*/function () {
        var LoginImagesRoutingModule = /*#__PURE__*/_createClass(function LoginImagesRoutingModule() {
          _classCallCheck(this, LoginImagesRoutingModule);
        });

        LoginImagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LoginImagesRoutingModule
        });
        LoginImagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LoginImagesRoutingModule_Factory(t) {
            return new (t || LoginImagesRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return LoginImagesRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginImagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=login-images-login-images-module-es5.js.map