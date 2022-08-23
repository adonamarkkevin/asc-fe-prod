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


      var _login_images_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-images-routing.module */
      "qZBF");
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
      /* harmony import */


      var _login_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login-images.component */
      "oufF");

      var LoginImagesModule = /*#__PURE__*/_createClass(function LoginImagesModule() {
        _classCallCheck(this, LoginImagesModule);
      });

      LoginImagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_images_component__WEBPACK_IMPORTED_MODULE_8__["LoginImagesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_images_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginImagesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
      })], LoginImagesModule);
      /***/
    },

    /***/
    "M2jv":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/login-images/login-images.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M2jv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Login Image\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <form [formGroup]=\"loginImageForm\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8\" appearance=\"outline\">\r\n            <mat-label>Filename:  </mat-label>\r\n            <br>\r\n            <input #docInput matInput [value]=\"loginImage?.originalFilename\" *ngIf=\"loginImage?.originalFilename\" disabled>\r\n\r\n            <input #docFile class=\"file-upload\" type=\"file\" accept=\"image/jpg, image/jpeg\" (change)=\"selectFile($event)\" [hidden]=\"loginImage?.originalFilename\"/>\r\n          </div>\r\n          <div class=\"col-md-12\"><br></div>\r\n          <div class=\"col-md-7\" appearance=\"outline\">\r\n            <button mat-raised-button\r\n              *ngIf=\"loginImage?.originalFilename\"\r\n              class=\"button-red button-right\" (click)=\"viewDocument(loginImage)\">\r\n              <i class=\"material-icons color__white\">open_in_new</i> VIEW IMAGE\r\n            </button>\r\n          </div>\r\n        </div><br>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"loginImage\" [childForm]=\"loginImageForm\" (saveFunction)=\"save()\"\r\n      (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\">\r\n    </app-form-action-buttons>\r\n\r\n    <div class=\"col-md-12\"><hr></div>\r\n    <div class=\"col-md-12\"><br></div>\r\n\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"viewLoginImageList()\"></app-form-list>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</form>\r\n";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_images_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-images.component.html */
      "M2jv");
      /* harmony import */


      var _login_images_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-images.component.scss */
      "wMpq");
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/core/models/login-image.model */
      "VjNL");
      /* harmony import */


      var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/core/services/date.service */
      "HMc/");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);

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
          this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
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

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage).subscribe(function (res) {
              _this.loginImageList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
              text: 'Are you sure you want to upload this image?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this2.spinner.show();

                _this2.fileStorageService.uploadImage(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage + "?displayed=true", _this2.selectedFile).subscribe(function (res) {
                  _this2.uploadedLoginImage = res.responseData.data;

                  _this2.hideSpinner();

                  _this2.selectedFile = null;
                  _this2.isShowUploadButton = false;
                  _this2.loginImage.originalFilename = null;

                  _this2.sweetAlertService.customSuccessMessage('Image successfully uploaded.');

                  _this2.getLoginImageList();

                  _this2.myDocInput.nativeElement.value = '';
                  _this2.myDocFile.nativeElement.value = '';
                  _this2.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
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

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage, this.formListComponent.idForUpdate).subscribe(function (res) {
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

            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
              text: 'Are you sure you want to delete this login image?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              _this4.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage, _this4.formListComponent.idForUpdate).subscribe(function (res) {
                _this4.myDocInput.nativeElement.value = '';
                _this4.myDocFile.nativeElement.value = '';

                _this4.sweetAlertService.customSuccessMessage('Login image successfully deleted.');

                _this4.getLoginImageList();

                _this4.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
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
            this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
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

      LoginImagesComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }, {
          type: app_core_services_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]
        }, {
          type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__["FileStorageService"]
        }];
      };

      LoginImagesComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_7__["FormListComponent"]]
        }],
        myDocInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['docInput']
        }],
        myDocFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['docFile']
        }]
      };
      LoginImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-images',
        template: _raw_loader_login_images_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_images_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginImagesComponent);
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


      var _login_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-images.component */
      "oufF");

      var routes = [{
        path: '',
        component: _login_images_component__WEBPACK_IMPORTED_MODULE_3__["LoginImagesComponent"]
      }];

      var LoginImagesRoutingModule = /*#__PURE__*/_createClass(function LoginImagesRoutingModule() {
        _classCallCheck(this, LoginImagesRoutingModule);
      });

      LoginImagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginImagesRoutingModule);
      /***/
    },

    /***/
    "wMpq":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/login-images/login-images.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function wMpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbG9naW4taW1hZ2VzL2xvZ2luLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-images-login-images-module-es5.js.map