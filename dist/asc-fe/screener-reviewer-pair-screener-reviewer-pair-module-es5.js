(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screener-reviewer-pair-screener-reviewer-pair-module"], {
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
    "Ei2c":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ScreenerReviewerPairComponent */

    /***/
    function Ei2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairComponent", function () {
        return ScreenerReviewerPairComponent;
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


      var app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/screener-reviewer-pair.model */
      "+iQW");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ScreenerReviewerPairComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", i_r2 == null ? null : i_r2.firstName, " ", i_r2 == null ? null : i_r2.lastName, " ");
        }
      }

      function ScreenerReviewerPairComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", i_r3 == null ? null : i_r3.firstName, " ", i_r3 == null ? null : i_r3.lastName, " ");
        }
      }

      var ScreenerReviewerPairComponent = /*@__PURE__*/function () {
        var ScreenerReviewerPairComponent = /*#__PURE__*/function () {
          function ScreenerReviewerPairComponent(apiService, formBuilder, sweetAlertService) {
            _classCallCheck(this, ScreenerReviewerPairComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['screenerName', 'reviewerName'];
            this.screenerList = [];
            this.reviewerList = [];
            this.screenerReviewerPair = new app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_5__["ScreenerReviewerPair"]();
            this.screenerReviewerPairList = [];
          }

          _createClass(ScreenerReviewerPairComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getList();
              this.setFormValidator();
              this.getScreenerAndReviewerForList();
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs).subscribe(function (res) {
                _this.screenerReviewerPairList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
              this.getScreenerAndReviewerForList();
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair).subscribe(function (res) {
                if (res !== undefined) {
                  console.log(res);

                  _this2.sweetAlertService.success(res);
                }
              }, function (err) {
                _this2.sweetAlertService.error(err);
              }, function () {
                _this2.resetFormValidator(), _this2.getList();

                _this2.getScreenerAndReviewerForList();
              });
            }
          }, {
            key: "getScreenerReviewerPair",
            value: function getScreenerReviewerPair() {
              var _this3 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this3.screenerReviewerPair = res.responseData.data;
                  console.log(_this3.screenerReviewerPair);
                  console.log(_this3.screenerList.filter(function (res1) {
                    return res1.username === _this3.screenerReviewerPair.screener.username;
                  })[0]);
                  console.log(_this3.screenerReviewerPair.screener);
                }
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this4 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair).subscribe(function (res) {
                if (res !== undefined) {
                  _this4.sweetAlertService.success(res);
                }
              }, function (err) {
                _this4.sweetAlertService.error(err);
              }, function () {
                _this4.resetFormValidator();

                _this4.getList();

                _this4.getScreenerAndReviewerForList();
              });
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.screenerReviewerPairForm = this.formBuilder.group({
                screenerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                reviewerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.screenerReviewerPair = new app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_5__["ScreenerReviewerPair"]();
              this.screenerReviewerPairForm.markAsUntouched();
              this.screenerReviewerPairForm.markAsPristine();
            }
          }, {
            key: "getScreenerAndReviewerForList",
            value: function getScreenerAndReviewerForList() {
              var _this5 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].userAccount).subscribe(function (res) {
                _this5.screenerList = res.responseData.data.filter(function (account) {
                  return account.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"].ROLE_SCREENER && account.status === _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
                });
                _this5.reviewerList = res.responseData.data.filter(function (account) {
                  return account.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"].ROLE_REVIEWER && account.status === _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
                });
              });
            }
          }, {
            key: "compareUser",
            value: function compareUser(value, selected) {
              if (value && selected) {
                return value.username === selected.username;
              }
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this6 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this screener reviewer pairing?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, _this6.screenerReviewerPair.id).subscribe(function () {
                    _this6.sweetAlertService.customSuccessMessage('Screener reviewer pairing successfully deleted.');

                    _this6.resetFormValidator();

                    _this6.getList();
                  });
                }
              });
            }
          }]);

          return ScreenerReviewerPairComponent;
        }();

        ScreenerReviewerPairComponent.??fac = function ScreenerReviewerPairComponent_Factory(t) {
          return new (t || ScreenerReviewerPairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]));
        };

        ScreenerReviewerPairComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: ScreenerReviewerPairComponent,
          selectors: [["app-screener-reviewer-pair"]],
          viewQuery: function ScreenerReviewerPairComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 22,
          vars: 11,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], ["name", "screenerName", "formControlName", "screenerName", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "reviewerName", "formControlName", "reviewerName", 3, "ngModel", "compareWith", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"]],
          template: function ScreenerReviewerPairComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Screener-Reviewer Pair ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Screener Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-select", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ScreenerReviewerPairComponent_Template_mat_select_ngModelChange_12_listener($event) {
                return ctx.screenerReviewerPair.screener = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ScreenerReviewerPairComponent_mat_option_13_Template, 2, 3, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Reviewer Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-select", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ScreenerReviewerPairComponent_Template_mat_select_ngModelChange_17_listener($event) {
                return ctx.screenerReviewerPair.reviewer = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ScreenerReviewerPairComponent_mat_option_18_Template, 2, 3, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "app-form-action-buttons", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_saveFunction_19_listener() {
                return ctx.save();
              })("updateFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_updateFunction_19_listener() {
                return ctx.update();
              })("cancelFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_cancelFunction_19_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_deleteFunction_19_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "app-form-list", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function ScreenerReviewerPairComponent_Template_app_form_list_selectInListFunction_21_listener() {
                return ctx.getScreenerReviewerPair();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.screenerReviewerPairForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.screenerReviewerPair.screener)("compareWith", ctx.compareUser);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.screenerList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.screenerReviewerPair.reviewer)("compareWith", ctx.compareUser);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.reviewerList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.screenerReviewerPair)("childForm", ctx.screenerReviewerPairForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2Uvc2NyZWVuZXItcmV2aWV3ZXItcGFpci9zY3JlZW5lci1yZXZpZXdlci1wYWlyLmNvbXBvbmVudC5zY3NzIn0= */"]
        });
        return ScreenerReviewerPairComponent;
      }();
      /***/

    },

    /***/
    "L/mX":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ScreenerReviewerPairModule */

    /***/
    function LMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairModule", function () {
        return ScreenerReviewerPairModule;
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


      var _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./screener-reviewer-pair-routing.module */
      "T61r");
      /* harmony import */


      var _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./screener-reviewer-pair.component */
      "Ei2c");
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

      var ScreenerReviewerPairModule = /*@__PURE__*/function () {
        var ScreenerReviewerPairModule = /*#__PURE__*/_createClass(function ScreenerReviewerPairModule() {
          _classCallCheck(this, ScreenerReviewerPairModule);
        });

        ScreenerReviewerPairModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: ScreenerReviewerPairModule
        });
        ScreenerReviewerPairModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function ScreenerReviewerPairModule_Factory(t) {
            return new (t || ScreenerReviewerPairModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScreenerReviewerPairRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"]]]
        });
        return ScreenerReviewerPairModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ScreenerReviewerPairModule, {
          declarations: [_screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_3__["ScreenerReviewerPairComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScreenerReviewerPairRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "T61r":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ScreenerReviewerPairRoutingModule */

    /***/
    function T61r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairRoutingModule", function () {
        return ScreenerReviewerPairRoutingModule;
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


      var _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./screener-reviewer-pair.component */
      "Ei2c");

      var routes = [{
        path: '',
        component: _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_2__["ScreenerReviewerPairComponent"]
      }];

      var ScreenerReviewerPairRoutingModule = /*@__PURE__*/function () {
        var ScreenerReviewerPairRoutingModule = /*#__PURE__*/_createClass(function ScreenerReviewerPairRoutingModule() {
          _classCallCheck(this, ScreenerReviewerPairRoutingModule);
        });

        ScreenerReviewerPairRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: ScreenerReviewerPairRoutingModule
        });
        ScreenerReviewerPairRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function ScreenerReviewerPairRoutingModule_Factory(t) {
            return new (t || ScreenerReviewerPairRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return ScreenerReviewerPairRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ScreenerReviewerPairRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=screener-reviewer-pair-screener-reviewer-pair-module-es5.js.map