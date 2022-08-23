(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"], {
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
    "H1a7":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-main-document/type-of-main-document.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H1a7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1tYWluLWRvY3VtZW50L3R5cGUtb2YtbWFpbi1kb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KncL":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-main-document/type-of-main-document.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KncL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\" *ngIf=\"maintenanceType === 'type-of-main-documents'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Type Of Main Document\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"typeOfMainDocumentForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Type Of Main Document <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"typeOfMainDocument.typeOfMainDocument\" name=\"typeOfMainDocument\"\r\n            formControlName=\"typeOfMainDocument\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfMainDocument.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"typeOfMainDocument.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"typeOfMainDocument\" [childForm]=\"typeOfMainDocumentForm\"\r\n      (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"\r\n      (deleteFunction)=\"delete()\">\r\n    </app-form-action-buttons>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getTypeOfMainDocument()\"></app-form-list>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"container-fluid\" *ngIf=\"maintenanceType === 'document-size'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Document File Size\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"uploadingDocumentFileSizeForm\" *ngIf=\"uploadingDocumentFileSize.id\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n          <mat-label>Size <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"uploadingDocumentFileSize.fileSize\" type=\"number\" name=\"fileSize\"\r\n            formControlName=\"fileSize\" [disabled]=\"true\">\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n    <app-form-action-buttons [childObject]=\"uploadingDocumentFileSize\" [childForm]=\"uploadingDocumentFileSizeForm\"\r\n      (updateFunction)=\"updateUploadingDocumentFileSize()\" (cancelFunction)=\"resetFormValidator()\">\r\n    </app-form-action-buttons>\r\n    <br>\r\n\r\n    <app-form-list [dataSource]=\"dataSource1\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getuploadingDocumentFileSize()\"></app-form-list>\r\n  </div>\r\n</form>";
      /***/
    },

    /***/
    "rJNo":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-main-document/type-of-main-document.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TypeOfMainDocumentComponent */

    /***/
    function rJNo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMainDocumentComponent", function () {
        return TypeOfMainDocumentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_type_of_main_document_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./type-of-main-document.component.html */
      "KncL");
      /* harmony import */


      var _type_of_main_document_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./type-of-main-document.component.scss */
      "H1a7");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
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


      var app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/core/models/type-of-main-document.model */
      "1T39");
      /* harmony import */


      var app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/core/models/uploading-document-file-size-model */
      "bq+u");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);

      var TypeOfMainDocumentComponent = /*#__PURE__*/function () {
        function TypeOfMainDocumentComponent(apiService, formBuilder, sweetAlertService, route) {
          _classCallCheck(this, TypeOfMainDocumentComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.route = route;
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_9__["STATUSES"]);
          this.typeOfMainDocument = new app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_10__["TypeOfMainDocument"]();
          this.uploadingDocumentFileSize = new app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_11__["UploadingDocumentFileSize"]();
          this.typeOfMainDocumentList = [];
        }

        _createClass(TypeOfMainDocumentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.maintenanceType = this.route.parent.snapshot.url[0].path;

            if (this.maintenanceType === 'type-of-main-documents') {
              this.displayedColumns = ['typeOfMainDocument', 'status'];
              this.getList();
            } else {
              this.displayedColumns = ['size'];
              this.getAllFileSize();
            }

            this.setFormValidator();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.maintenanceType = null;
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfMainDocuments).subscribe(function (res) {
              _this.typeOfMainDocumentList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfMainDocuments, this.typeOfMainDocument).subscribe(function (res) {
              if (res !== undefined) {
                _this2.sweetAlertService.success(res);
              }
            }, function (err) {
              _this2.sweetAlertService.error(err);
            }, function () {
              _this2.resetFormValidator(), _this2.getList();
            });
          }
        }, {
          key: "getTypeOfMainDocument",
          value: function getTypeOfMainDocument() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfMainDocuments, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.typeOfMainDocument = res.responseData.data;
                console.log(res);
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfMainDocuments, this.typeOfMainDocument).subscribe(function (res) {
              if (res !== undefined) {
                _this4.sweetAlertService.success(res);
              }
            }, function (err) {
              _this4.sweetAlertService.error(err);
            }, function () {
              _this4.resetFormValidator();

              _this4.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            if (this.maintenanceType === 'type-of-main-documents') {
              this.typeOfMainDocument.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
              this.typeOfMainDocumentForm = this.formBuilder.group({
                typeOfMainDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                status: ['']
              });
            } else {
              this.uploadingDocumentFileSizeForm = this.formBuilder.group({
                // id: ['',],
                fileSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
            }
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            if (this.maintenanceType === 'type-of-main-documents') {
              this.typeOfMainDocument = new app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_10__["TypeOfMainDocument"]();
              this.typeOfMainDocument.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
              this.typeOfMainDocumentForm.markAsUntouched();
              this.typeOfMainDocumentForm.markAsPristine();
            } else {
              this.uploadingDocumentFileSize = new app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_11__["UploadingDocumentFileSize"]();
              this.uploadingDocumentFileSizeForm.markAsUntouched();
              this.uploadingDocumentFileSizeForm.markAsPristine();
            }
          } //START OF FILE SIZE CONTROLLER

        }, {
          key: "getAllFileSize",
          value: function getAllFileSize() {
            var _this5 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].uploadingDocumentFileSize).subscribe(function (res) {
              _this5.uploadingDocumentFileSize = res.responseData.data;
              _this5.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this5.dataSource1.paginator = _this5.formListComponent.paginator;
              _this5.dataSource1.sort = _this5.formListComponent.sort;
            });
          }
        }, {
          key: "getuploadingDocumentFileSize",
          value: function getuploadingDocumentFileSize() {
            var _this6 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].uploadingDocumentFileSize, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this6.uploadingDocumentFileSize = res.responseData.data;
                console.log(_this6.uploadingDocumentFileSize);
              }
            });
          }
        }, {
          key: "updateUploadingDocumentFileSize",
          value: function updateUploadingDocumentFileSize() {
            var _this7 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].uploadingDocumentFileSize, this.uploadingDocumentFileSize).subscribe(function (res) {
              if (res !== undefined) {
                _this7.sweetAlertService.success(res);
              }
            }, function (err) {
              _this7.sweetAlertService.error(err);
            }, function () {
              _this7.resetFormValidator(), _this7.getAllFileSize();
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this8 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
              text: 'Are you sure you want to delete this type of main document?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this8.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfMainDocuments, _this8.typeOfMainDocument.id).subscribe(function () {
                  _this8.sweetAlertService.customSuccessMessage('Type of main document successfully deleted.');

                  _this8.resetFormValidator();

                  _this8.getList();
                });
              }
            });
          }
        }]);

        return TypeOfMainDocumentComponent;
      }();

      TypeOfMainDocumentComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      TypeOfMainDocumentComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_7__["FormListComponent"]]
        }]
      };
      TypeOfMainDocumentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-main-document',
        template: _raw_loader_type_of_main_document_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_main_document_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TypeOfMainDocumentComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac-es5.js.map