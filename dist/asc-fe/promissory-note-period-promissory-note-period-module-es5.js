(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["promissory-note-period-promissory-note-period-module"], {
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
    "59d7":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: PromissoryNotePeriodComponent */

    /***/
    function d7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriodComponent", function () {
        return PromissoryNotePeriodComponent;
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


      var app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/promissory-note-period.model */
      "QvPK");
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


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");

      var PromissoryNotePeriodComponent = /*@__PURE__*/function () {
        var PromissoryNotePeriodComponent = /*#__PURE__*/function () {
          function PromissoryNotePeriodComponent(apiService, formBuilder, sweetAlertService, validateFieldService) {
            _classCallCheck(this, PromissoryNotePeriodComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.validateFieldService = validateFieldService;
            this.displayedColumns = ['noOfDays'];
            this.promissoryNotePeriod = new app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_5__["PromissoryNotePeriod"]();
            this.promissoryNotePeriodList = [];
          }

          _createClass(PromissoryNotePeriodComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getList();
              this.setFormValidator();
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].promissoryNotePeriods).subscribe(function (res) {
                _this.promissoryNotePeriodList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].promissoryNotePeriods, this.promissoryNotePeriod).subscribe(function (res) {
                if (res !== undefined) {
                  _this2.sweetAlertService.success(res);
                }
              }, function (err) {
                if (!Number(_this2.promissoryNotePeriod.noOfDays)) {
                  err.error.message = 'Please enter numeric values only';
                } else {
                  err.error.message = 'Default Promissory Note Period have already been set. Select the entry to update the record';
                }

                _this2.sweetAlertService.error(err);
              }, function () {
                _this2.resetFormValidator(), _this2.getList();
              });
            }
          }, {
            key: "getPromissoryNotePeriod",
            value: function getPromissoryNotePeriod() {
              var _this3 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].promissoryNotePeriods, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this3.promissoryNotePeriod = res.responseData.data;
                  console.log(res);
                }
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this4 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].promissoryNotePeriods, this.promissoryNotePeriod).subscribe(function (res) {
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
              this.promissoryNotePeriodForm = this.formBuilder.group({
                noOfDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.promissoryNotePeriod = new app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_5__["PromissoryNotePeriod"]();
              this.promissoryNotePeriodForm.markAsUntouched();
              this.promissoryNotePeriodForm.markAsPristine();
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this5 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this promissory note period?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].promissoryNotePeriods, _this5.promissoryNotePeriod.id).subscribe(function () {
                    _this5.sweetAlertService.customSuccessMessage('Promissory note period successfully deleted.');

                    _this5.resetFormValidator();

                    _this5.getList();
                  });
                }
              });
            }
          }]);

          return PromissoryNotePeriodComponent;
        }();

        PromissoryNotePeriodComponent.??fac = function PromissoryNotePeriodComponent_Factory(t) {
          return new (t || PromissoryNotePeriodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_8__["ValidateFieldService"]));
        };

        PromissoryNotePeriodComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: PromissoryNotePeriodComponent,
          selectors: [["app-promissory-note-period"]],
          viewQuery: function PromissoryNotePeriodComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 18,
          vars: 6,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "noOfDays", "formControlName", "noOfDays", 3, "ngModel", "ngModelChange", "keydown"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"]],
          template: function PromissoryNotePeriodComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Promissory Note Period ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Number of Days ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PromissoryNotePeriodComponent_Template_input_ngModelChange_14_listener($event) {
                return ctx.promissoryNotePeriod.noOfDays = $event;
              })("keydown", function PromissoryNotePeriodComponent_Template_input_keydown_14_listener($event) {
                return ctx.validateFieldService.numbersOnly($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "app-form-action-buttons", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function PromissoryNotePeriodComponent_Template_app_form_action_buttons_saveFunction_15_listener() {
                return ctx.save();
              })("updateFunction", function PromissoryNotePeriodComponent_Template_app_form_action_buttons_updateFunction_15_listener() {
                return ctx.update();
              })("cancelFunction", function PromissoryNotePeriodComponent_Template_app_form_action_buttons_cancelFunction_15_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function PromissoryNotePeriodComponent_Template_app_form_action_buttons_deleteFunction_15_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "app-form-list", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function PromissoryNotePeriodComponent_Template_app_form_list_selectInListFunction_17_listener() {
                return ctx.getPromissoryNotePeriod();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.promissoryNotePeriodForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.promissoryNotePeriod.noOfDays);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.promissoryNotePeriod)("childForm", ctx.promissoryNotePeriodForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__["FormListComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcHJvbWlzc29yeS1ub3RlLXBlcmlvZC9wcm9taXNzb3J5LW5vdGUtcGVyaW9kLmNvbXBvbmVudC5zY3NzIn0= */"]
        });
        return PromissoryNotePeriodComponent;
      }();
      /***/

    },

    /***/
    "RX6L":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: PromissoryNotePeriodRoutingModule */

    /***/
    function RX6L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriodRoutingModule", function () {
        return PromissoryNotePeriodRoutingModule;
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


      var _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./promissory-note-period.component */
      "59d7");

      var routes = [{
        path: '',
        component: _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_2__["PromissoryNotePeriodComponent"]
      }];

      var PromissoryNotePeriodRoutingModule = /*@__PURE__*/function () {
        var PromissoryNotePeriodRoutingModule = /*#__PURE__*/_createClass(function PromissoryNotePeriodRoutingModule() {
          _classCallCheck(this, PromissoryNotePeriodRoutingModule);
        });

        PromissoryNotePeriodRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: PromissoryNotePeriodRoutingModule
        });
        PromissoryNotePeriodRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function PromissoryNotePeriodRoutingModule_Factory(t) {
            return new (t || PromissoryNotePeriodRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return PromissoryNotePeriodRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PromissoryNotePeriodRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "V+jx":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/promissory-note-period/promissory-note-period.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: PromissoryNotePeriodModule */

    /***/
    function VJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriodModule", function () {
        return PromissoryNotePeriodModule;
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


      var _promissory_note_period_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./promissory-note-period-routing.module */
      "RX6L");
      /* harmony import */


      var _promissory_note_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./promissory-note-period.component */
      "59d7");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PromissoryNotePeriodModule = /*@__PURE__*/function () {
        var PromissoryNotePeriodModule = /*#__PURE__*/_createClass(function PromissoryNotePeriodModule() {
          _classCallCheck(this, PromissoryNotePeriodModule);
        });

        PromissoryNotePeriodModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: PromissoryNotePeriodModule
        });
        PromissoryNotePeriodModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function PromissoryNotePeriodModule_Factory(t) {
            return new (t || PromissoryNotePeriodModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _promissory_note_period_routing_module__WEBPACK_IMPORTED_MODULE_2__["PromissoryNotePeriodRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"]]]
        });
        return PromissoryNotePeriodModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PromissoryNotePeriodModule, {
          declarations: [_promissory_note_period_component__WEBPACK_IMPORTED_MODULE_3__["PromissoryNotePeriodComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _promissory_note_period_routing_module__WEBPACK_IMPORTED_MODULE_2__["PromissoryNotePeriodRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=promissory-note-period-promissory-note-period-module-es5.js.map