(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-penalties-company-penalties-module"], {
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
    "AF0P":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/company-penalties/company-penalties.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CompanyPenaltiesComponent */

    /***/
    function AF0P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyPenaltiesComponent", function () {
        return CompanyPenaltiesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_company_penalties_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./company-penalties.component.html */
      "SqLI");
      /* harmony import */


      var _company_penalties_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-penalties.component.scss */
      "Q+RH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
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


      var app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/core/models/company-penalties.model */
      "fJLi");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var CompanyPenaltiesComponent = /*#__PURE__*/function () {
        function CompanyPenaltiesComponent(apiService, formBuilder, sweetAlertService, datepipe) {
          _classCallCheck(this, CompanyPenaltiesComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.datepipe = datepipe; // displayedColumns: string[] = ['companyDescription', 'companyPenaltyAmount', 'deleteIcon'];

          this.displayedColumns = ['companyDescription', 'companyPenaltyAmount'];
          this.companyPenalties = new app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_10__["CompanyPenalties"]();
          this.companyPenaltiesList = [];
          this.companyList = [];
        }

        _createClass(CompanyPenaltiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormValidator();
            this.getCompanyList();
            this.getCompanyPenaltiesList();
          }
        }, {
          key: "getCompanyPenaltiesList",
          value: function getCompanyPenaltiesList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].companyPenalties).subscribe(function (res) {
              if (res) {
                _this.companyPenaltiesList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              }
            });
          }
        }, {
          key: "getCompanyPenalties",
          value: function getCompanyPenalties() {
            var _this2 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].companyPenalties, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this2.companyPenalties = res.responseData.data;
                console.log(_this2.companyPenalties);
              }
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this3 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
              if (res) {
                _this3.companyList = res.responseData.data;
              }
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this4 = this;

            this.formatDate();
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].companyPenalties, this.companyPenalties).subscribe(function (res) {
              if (res) {
                _this4.sweetAlertService.success(res);
              } else {
                _this4.sweetAlertService.error(res);
              }

              _this4.getCompanyPenaltiesList();

              _this4.resetFormValidator();
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this5 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].companyPenalties, this.companyPenalties).subscribe(function (res) {
              if (res) {
                _this5.sweetAlertService.success(res);
              } else {
                _this5.sweetAlertService.error(res);
              }

              _this5.getCompanyPenaltiesList();

              _this5.resetFormValidator();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.companyPenaltiesForm = this.formBuilder.group({
              company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              penaltyAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.companyPenalties = new app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_10__["CompanyPenalties"]();
            this.companyPenaltiesForm.markAsUntouched();
            this.companyPenaltiesForm.markAsPristine();
          }
        }, {
          key: "compareCompanyPenalties",
          value: function compareCompanyPenalties(value, selected) {
            if (value && selected) {
              return value.description === selected.description;
            }
          }
        }, {
          key: "formatDate",
          value: function formatDate() {
            // this.brandPenalties.penaltyDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd')
            this.datepipe.transform(this.companyPenalties.penaltyDate, 'yyyy-MM-dd');
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this6 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              text: 'Are you sure you want to delete this company penalty?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].companyPenalties, _this6.companyPenalties.id).subscribe(function () {
                  _this6.sweetAlertService.customSuccessMessage('Company penalty successfully deleted.');

                  _this6.resetFormValidator();

                  _this6.getCompanyList();

                  _this6.getCompanyPenaltiesList();
                });
              }
            });
          }
        }]);

        return CompanyPenaltiesComponent;
      }();

      CompanyPenaltiesComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      CompanyPenaltiesComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_7__["FormListComponent"]]
        }]
      };
      CompanyPenaltiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-company-penalties',
        template: _raw_loader_company_penalties_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_penalties_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CompanyPenaltiesComponent);
      /***/
    },

    /***/
    "CMYt":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/company-penalties/company-penalties-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: CompanyPenaltiesRoutingModule */

    /***/
    function CMYt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyPenaltiesRoutingModule", function () {
        return CompanyPenaltiesRoutingModule;
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


      var _company_penalties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-penalties.component */
      "AF0P");

      var routes = [{
        path: '',
        component: _company_penalties_component__WEBPACK_IMPORTED_MODULE_3__["CompanyPenaltiesComponent"]
      }];

      var CompanyPenaltiesRoutingModule = /*#__PURE__*/_createClass(function CompanyPenaltiesRoutingModule() {
        _classCallCheck(this, CompanyPenaltiesRoutingModule);
      });

      CompanyPenaltiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompanyPenaltiesRoutingModule);
      /***/
    },

    /***/
    "Q+RH":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/company-penalties/company-penalties.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvY29tcGFueS1wZW5hbHRpZXMvY29tcGFueS1wZW5hbHRpZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "SqLI":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/company-penalties/company-penalties.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SqLI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n            <mat-icon>turned_in</mat-icon> Company Penalties\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"companyPenaltiesForm\">\r\n\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Company <span class=\"required-field\">*</span></mat-label>\r\n            <mat-select [(ngModel)]=\"companyPenalties.company\" name=\"company\" formControlName=\"company\" [compareWith]=\"compareCompanyPenalties\">\r\n              <mat-option *ngFor=\"let i of companyList\" [value]=\"i\">\r\n                {{i.companyName}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Penalty Amount <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"companyPenalties.penaltyAmount\" name=\"penaltyAmount\" formControlName=\"penaltyAmount\">\r\n        </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Choose date penalty</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" readonly [(ngModel)]=\"brandPenalties.penaltyDate\" name=\"penaltyDate\"\r\n              formControlName=\"penaltyDate\" (dateChange)=\"test()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker disabled=\"false\" color=\"warn\"></mat-datepicker>\r\n          </mat-form-field> -->\r\n        </div>\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"companyPenalties\" [childForm]=\"companyPenaltiesForm\" (saveFunction)=\"save()\" (updateFunction)=\"update()\"\r\n              (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\">\r\n      </app-form-action-buttons>\r\n      <br>\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n          (selectInListFunction)=\"getCompanyPenalties()\">\r\n          <!-- (deleteInListFunction)=\"delete()\" -->\r\n      </app-form-list>\r\n\r\n    </div>\r\n  </form>\r\n";
      /***/
    },

    /***/
    "uZqy":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/company-penalties/company-penalties.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CompanyPenaltiesModule */

    /***/
    function uZqy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyPenaltiesModule", function () {
        return CompanyPenaltiesModule;
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


      var _company_penalties_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-penalties-routing.module */
      "CMYt");
      /* harmony import */


      var _company_penalties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./company-penalties.component */
      "AF0P");
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

      var CompanyPenaltiesModule = /*#__PURE__*/_createClass(function CompanyPenaltiesModule() {
        _classCallCheck(this, CompanyPenaltiesModule);
      });

      CompanyPenaltiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_penalties_component__WEBPACK_IMPORTED_MODULE_4__["CompanyPenaltiesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_penalties_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyPenaltiesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], CompanyPenaltiesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=company-penalties-company-penalties-module-es5.js.map