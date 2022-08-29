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


      var app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/company-penalties.model */
      "fJLi");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CompanyPenaltiesComponent_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.companyName, " ");
        }
      }

      var CompanyPenaltiesComponent = /*@__PURE__*/function () {
        var CompanyPenaltiesComponent = /*#__PURE__*/function () {
          function CompanyPenaltiesComponent(apiService, formBuilder, sweetAlertService, datepipe) {
            _classCallCheck(this, CompanyPenaltiesComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.datepipe = datepipe; // displayedColumns: string[] = ['companyDescription', 'companyPenaltyAmount', 'deleteIcon'];

            this.displayedColumns = ['companyDescription', 'companyPenaltyAmount'];
            this.companyPenalties = new app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_5__["CompanyPenalties"]();
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

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].companyPenalties).subscribe(function (res) {
                if (res) {
                  _this.companyPenaltiesList = res.responseData.data;
                  _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                  _this.dataSource.paginator = _this.formListComponent.paginator;
                  _this.dataSource.sort = _this.formListComponent.sort;
                }
              });
            }
          }, {
            key: "getCompanyPenalties",
            value: function getCompanyPenalties() {
              var _this2 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].companyPenalties, this.formListComponent.idForUpdate).subscribe(function (res) {
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

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
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
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].companyPenalties, this.companyPenalties).subscribe(function (res) {
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

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].companyPenalties, this.companyPenalties).subscribe(function (res) {
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
                company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                penaltyAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.companyPenalties = new app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_5__["CompanyPenalties"]();
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

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this company penalty?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].companyPenalties, _this6.companyPenalties.id).subscribe(function () {
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

        CompanyPenaltiesComponent.ɵfac = function CompanyPenaltiesComponent_Factory(t) {
          return new (t || CompanyPenaltiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]));
        };

        CompanyPenaltiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CompanyPenaltiesComponent,
          selectors: [["app-company-penalties"]],
          viewQuery: function CompanyPenaltiesComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 28,
          vars: 9,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["name", "company", "formControlName", "company", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "penaltyAmount", "formControlName", "penaltyAmount", 3, "ngModel", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"]],
          template: function CompanyPenaltiesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "turned_in");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Company Penalties ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Company ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyPenaltiesComponent_Template_mat_select_ngModelChange_16_listener($event) {
                return ctx.companyPenalties.company = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanyPenaltiesComponent_mat_option_17_Template, 2, 2, "mat-option", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Penalty Amount ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyPenaltiesComponent_Template_input_ngModelChange_23_listener($event) {
                return ctx.companyPenalties.penaltyAmount = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-form-action-buttons", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function CompanyPenaltiesComponent_Template_app_form_action_buttons_saveFunction_25_listener() {
                return ctx.save();
              })("updateFunction", function CompanyPenaltiesComponent_Template_app_form_action_buttons_updateFunction_25_listener() {
                return ctx.update();
              })("cancelFunction", function CompanyPenaltiesComponent_Template_app_form_action_buttons_cancelFunction_25_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function CompanyPenaltiesComponent_Template_app_form_action_buttons_deleteFunction_25_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-form-list", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function CompanyPenaltiesComponent_Template_app_form_list_selectInListFunction_27_listener() {
                return ctx.getCompanyPenalties();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.companyPenaltiesForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.companyPenalties.company)("compareWith", ctx.compareCompanyPenalties);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.companyPenalties.penaltyAmount);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.companyPenalties)("childForm", ctx.companyPenaltiesForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvY29tcGFueS1wZW5hbHRpZXMvY29tcGFueS1wZW5hbHRpZXMuY29tcG9uZW50LnNjc3MifQ== */"]
        });
        return CompanyPenaltiesComponent;
      }();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _company_penalties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-penalties.component */
      "AF0P");

      var routes = [{
        path: '',
        component: _company_penalties_component__WEBPACK_IMPORTED_MODULE_2__["CompanyPenaltiesComponent"]
      }];

      var CompanyPenaltiesRoutingModule = /*@__PURE__*/function () {
        var CompanyPenaltiesRoutingModule = /*#__PURE__*/_createClass(function CompanyPenaltiesRoutingModule() {
          _classCallCheck(this, CompanyPenaltiesRoutingModule);
        });

        CompanyPenaltiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CompanyPenaltiesRoutingModule
        });
        CompanyPenaltiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CompanyPenaltiesRoutingModule_Factory(t) {
            return new (t || CompanyPenaltiesRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CompanyPenaltiesRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyPenaltiesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _company_penalties_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-penalties-routing.module */
      "CMYt");
      /* harmony import */


      var _company_penalties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-penalties.component */
      "AF0P");
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

      var CompanyPenaltiesModule = /*@__PURE__*/function () {
        var CompanyPenaltiesModule = /*#__PURE__*/_createClass(function CompanyPenaltiesModule() {
          _classCallCheck(this, CompanyPenaltiesModule);
        });

        CompanyPenaltiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CompanyPenaltiesModule
        });
        CompanyPenaltiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CompanyPenaltiesModule_Factory(t) {
            return new (t || CompanyPenaltiesModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_penalties_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyPenaltiesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return CompanyPenaltiesModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyPenaltiesModule, {
          declarations: [_company_penalties_component__WEBPACK_IMPORTED_MODULE_3__["CompanyPenaltiesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_penalties_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyPenaltiesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=company-penalties-company-penalties-module-es5.js.map