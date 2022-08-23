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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s1-fees-settlement-period-s1-fees-settlement-period-module"], {
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
    "BmMj":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/s1-fees-settlement-period/s1-fees-settlement-period.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BmMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    S1 Fees Settlement Period\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"s1FeeSettlementPeriodForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Number of Hours <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"s1FeeSettlementPeriod.noOfHours\" name=\"noOfHours\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"noOfHours\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Number of Days <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"s1FeeSettlementPeriod.noOfDays\" name=\"noOfDays\"\r\n                        (keydown)=\"validateFieldService.numbersOnly($event)\" formControlName=\"noOfDays\">\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"s1FeeSettlementPeriod\" [childForm]=\"s1FeeSettlementPeriodForm\"\r\n            (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"\r\n            (deleteFunction)=\"delete()\">\r\n        </app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getS1FeeSettlementPeriod()\"></app-form-list>\r\n\r\n    </div>\r\n</form>";
      /***/
    },

    /***/
    "IXEc":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/s1-fees-settlement-period/s1-fees-settlement-period.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: S1FeesSettlementPeriodComponent */

    /***/
    function IXEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1FeesSettlementPeriodComponent", function () {
        return S1FeesSettlementPeriodComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_s1_fees_settlement_period_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./s1-fees-settlement-period.component.html */
      "BmMj");
      /* harmony import */


      var _s1_fees_settlement_period_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./s1-fees-settlement-period.component.scss */
      "clal");
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


      var app_core_models_s1_settlement_or_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/core/models/s1-settlement-or-expiration-period.model */
      "ZJcX");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var S1FeesSettlementPeriodComponent = /*#__PURE__*/function () {
        function S1FeesSettlementPeriodComponent(apiService, formBuilder, sweetAlertService, validateFieldService) {
          _classCallCheck(this, S1FeesSettlementPeriodComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.validateFieldService = validateFieldService;
          this.displayedColumns = ['noOfHours', 'noOfDays'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]);
          this.s1FeeSettlementPeriod = new app_core_models_s1_settlement_or_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__["S1SettlementOrExpirationPeriod"]();
          this.s1FeeSettlementPeriodList = [];
        }

        _createClass(S1FeesSettlementPeriodComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1FeesSettlementPeriod).subscribe(function (res) {
              _this.s1FeeSettlementPeriodList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1FeesSettlementPeriod, this.s1FeeSettlementPeriod).subscribe(function (res) {
              if (res !== undefined) {
                _this2.sweetAlertService.success(res);
              }
            }, function (err) {
              if (!Number(_this2.s1FeeSettlementPeriod.noOfDays) || !Number(_this2.s1FeeSettlementPeriod.noOfHours)) {
                err.error.message = 'Please enter numeric values only';
              } else {
                err.error.message = 'Default Number of hours and days have already been set. Select the entry to update the record';
              }

              _this2.sweetAlertService.error(err);
            }, function () {
              _this2.resetFormValidator(), _this2.getList();
            });
          }
        }, {
          key: "getS1FeeSettlementPeriod",
          value: function getS1FeeSettlementPeriod() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1FeesSettlementPeriod, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.s1FeeSettlementPeriod = res.responseData.data;
                console.log(res);
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1FeesSettlementPeriod, this.s1FeeSettlementPeriod).subscribe(function (res) {
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
            this.s1FeeSettlementPeriodForm = this.formBuilder.group({
              noOfHours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              noOfDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.s1FeeSettlementPeriod = new app_core_models_s1_settlement_or_expiration_period_model__WEBPACK_IMPORTED_MODULE_9__["S1SettlementOrExpirationPeriod"]();
            this.s1FeeSettlementPeriodForm.markAsUntouched();
            this.s1FeeSettlementPeriodForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              text: 'Are you sure you want to delete this S1 fees settlement period?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1FeesSettlementPeriod, _this5.s1FeeSettlementPeriod.id).subscribe(function () {
                  _this5.sweetAlertService.customSuccessMessage('S1 fees settlement period successfully deleted.');

                  _this5.resetFormValidator();

                  _this5.getList();
                });
              }
            });
          }
        }]);

        return S1FeesSettlementPeriodComponent;
      }();

      S1FeesSettlementPeriodComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]
        }, {
          type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"]
        }];
      };

      S1FeesSettlementPeriodComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      S1FeesSettlementPeriodComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-s1-fees-settlement-period',
        template: _raw_loader_s1_fees_settlement_period_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_s1_fees_settlement_period_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], S1FeesSettlementPeriodComponent);
      /***/
    },

    /***/
    "YJnU":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/s1-fees-settlement-period/s1-fees-settlement-period-routing.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: S1FeesSettlementPeriodRoutingModule */

    /***/
    function YJnU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1FeesSettlementPeriodRoutingModule", function () {
        return S1FeesSettlementPeriodRoutingModule;
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


      var _s1_fees_settlement_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./s1-fees-settlement-period.component */
      "IXEc");

      var routes = [{
        path: '',
        component: _s1_fees_settlement_period_component__WEBPACK_IMPORTED_MODULE_3__["S1FeesSettlementPeriodComponent"]
      }];

      var S1FeesSettlementPeriodRoutingModule = /*#__PURE__*/_createClass(function S1FeesSettlementPeriodRoutingModule() {
        _classCallCheck(this, S1FeesSettlementPeriodRoutingModule);
      });

      S1FeesSettlementPeriodRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], S1FeesSettlementPeriodRoutingModule);
      /***/
    },

    /***/
    "clal":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/s1-fees-settlement-period/s1-fees-settlement-period.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function clal(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvczEtZmVlcy1zZXR0bGVtZW50LXBlcmlvZC9zMS1mZWVzLXNldHRsZW1lbnQtcGVyaW9kLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "d0AD":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/s1-fees-settlement-period/s1-fees-settlement-period.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: S1FeesSettlementPeriodModule */

    /***/
    function d0AD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1FeesSettlementPeriodModule", function () {
        return S1FeesSettlementPeriodModule;
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


      var _s1_fees_settlement_period_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./s1-fees-settlement-period-routing.module */
      "YJnU");
      /* harmony import */


      var _s1_fees_settlement_period_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./s1-fees-settlement-period.component */
      "IXEc");
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

      var S1FeesSettlementPeriodModule = /*#__PURE__*/_createClass(function S1FeesSettlementPeriodModule() {
        _classCallCheck(this, S1FeesSettlementPeriodModule);
      });

      S1FeesSettlementPeriodModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_s1_fees_settlement_period_component__WEBPACK_IMPORTED_MODULE_4__["S1FeesSettlementPeriodComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _s1_fees_settlement_period_routing_module__WEBPACK_IMPORTED_MODULE_3__["S1FeesSettlementPeriodRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"]]
      })], S1FeesSettlementPeriodModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=s1-fees-settlement-period-s1-fees-settlement-period-module-es5.js.map