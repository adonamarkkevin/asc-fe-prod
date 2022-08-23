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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-of-application-type-of-application-module"], {
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
    "4Xm8":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xm8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1hcHBsaWNhdGlvbi90eXBlLW9mLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "G3MP":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-application/type-of-application.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G3MP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<br>\r\n<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n             Type of Application\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"typeOfApplicationForm\">\r\n        <div class=\"row\">\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Description <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.description\" name=\"description\" formControlName=\"description\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Sequence Number <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.sequenceNo\" name=\"sequenceNo\" formControlName=\"sequenceNo\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfApplication.id\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"typeOfApplication.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i.status}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Clearing Release Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.clearingReleaseTime\" name=\"clearingReleaseTime\"\r\n              formControlName=\"clearingReleaseTime\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Decision Release Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.decisionReleaseTime\" name=\"decisionReleaseTime\"\r\n              formControlName=\"decisionReleaseTime\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Submission Start Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.submissionStartTime\" name=\"submissionStartTime\"\r\n              formControlName=\"submissionStartTime\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Submission End Time <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"typeOfApplication.submissionEndTime\" name=\"submissionEndTime\"\r\n              formControlName=\"submissionEndTime\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"typeOfApplication\" [childForm]=\"typeOfApplicationForm\" (saveFunction)=\"save()\"\r\n        (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n          (selectInListFunction)=\"getTypeOfApplication()\"></app-form-list>\r\n    </div>\r\n  </form>\r\n";
      /***/
    },

    /***/
    "nRib":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TypeOfApplicationModule */

    /***/
    function nRib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplicationModule", function () {
        return TypeOfApplicationModule;
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


      var _type_of_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./type-of-application-routing.module */
      "ncxP");
      /* harmony import */


      var _type_of_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./type-of-application.component */
      "ws1B");
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


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var TypeOfApplicationModule = /*#__PURE__*/_createClass(function TypeOfApplicationModule() {
        _classCallCheck(this, TypeOfApplicationModule);
      });

      TypeOfApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_type_of_application_component__WEBPACK_IMPORTED_MODULE_4__["TypeOfApplicationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _type_of_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeOfApplicationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], TypeOfApplicationModule);
      /***/
    },

    /***/
    "ncxP":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: TypeOfApplicationRoutingModule */

    /***/
    function ncxP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplicationRoutingModule", function () {
        return TypeOfApplicationRoutingModule;
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


      var _type_of_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./type-of-application.component */
      "ws1B");

      var routes = [{
        path: '',
        component: _type_of_application_component__WEBPACK_IMPORTED_MODULE_3__["TypeOfApplicationComponent"]
      }];

      var TypeOfApplicationRoutingModule = /*#__PURE__*/_createClass(function TypeOfApplicationRoutingModule() {
        _classCallCheck(this, TypeOfApplicationRoutingModule);
      });

      TypeOfApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TypeOfApplicationRoutingModule);
      /***/
    },

    /***/
    "ws1B":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-application/type-of-application.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: TypeOfApplicationComponent */

    /***/
    function ws1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplicationComponent", function () {
        return TypeOfApplicationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_type_of_application_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./type-of-application.component.html */
      "G3MP");
      /* harmony import */


      var _type_of_application_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./type-of-application.component.scss */
      "4Xm8");
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


      var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var TypeOfApplicationComponent = /*#__PURE__*/function () {
        function TypeOfApplicationComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, TypeOfApplicationComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['description', 'clearingReleaseTime', 'decisionReleaseTime', 'submissionStartTime', 'submissionEndTime'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_9__["STATUSES"]);
          this.typeOfApplication = new _models__WEBPACK_IMPORTED_MODULE_7__["TypeOfApplication"]();
          this.typeOfApplicationList = [];
          this.formTypeList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_9__["FORM_TYPE"]);
        }

        _createClass(TypeOfApplicationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType).subscribe(function (res) {
              console.log(res.responseData.data);
              _this.typeOfApplicationList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.typeOfApplication).subscribe(function (res) {
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
          key: "getTypeOfApplication",
          value: function getTypeOfApplication() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.typeOfApplication = res.responseData.data;
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            // this.typeOfApplication.modifiedBy = "J. Dela Cruz";
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, this.typeOfApplication).subscribe(function (res) {
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
            formType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            this.typeOfApplication.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfApplicationForm = this.formBuilder.group({
              // formType: ['', Validators.required],
              clearingReleaseTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              decisionReleaseTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              sequenceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              submissionEndTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              submissionStartTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.typeOfApplication = new _models__WEBPACK_IMPORTED_MODULE_7__["TypeOfApplication"]();
            this.typeOfApplication.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfApplicationForm.markAsUntouched();
            this.typeOfApplicationForm.markAsPristine();
          }
        }, {
          key: "compareFormType",
          value: function compareFormType(value, selected) {
            if (value && selected) {
              return value.description === selected;
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this type of application?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].applicationType, _this5.typeOfApplication.id).subscribe(function () {
                  _this5.sweetAlertService.customSuccessMessage('Type of application successfully deleted.');

                  _this5.resetFormValidator();

                  _this5.getList();
                });
              }
            });
          }
        }]);

        return TypeOfApplicationComponent;
      }();

      TypeOfApplicationComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }];
      };

      TypeOfApplicationComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      TypeOfApplicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-application',
        template: _raw_loader_type_of_application_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_application_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TypeOfApplicationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=type-of-application-type-of-application-module-es5.js.map