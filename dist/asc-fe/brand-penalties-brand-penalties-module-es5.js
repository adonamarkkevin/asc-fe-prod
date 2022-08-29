(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-penalties-brand-penalties-module"], {
    /***/
    "2FAk":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brand-penalties/brand-penalties-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: BrandPenaltiesRoutingModule */

    /***/
    function FAk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandPenaltiesRoutingModule", function () {
        return BrandPenaltiesRoutingModule;
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


      var _brand_penalties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand-penalties.component */
      "bmhz");

      var routes = [{
        path: '',
        component: _brand_penalties_component__WEBPACK_IMPORTED_MODULE_2__["BrandPenaltiesComponent"]
      }];

      var BrandPenaltiesRoutingModule = /*@__PURE__*/function () {
        var BrandPenaltiesRoutingModule = /*#__PURE__*/_createClass(function BrandPenaltiesRoutingModule() {
          _classCallCheck(this, BrandPenaltiesRoutingModule);
        });

        BrandPenaltiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: BrandPenaltiesRoutingModule
        });
        BrandPenaltiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function BrandPenaltiesRoutingModule_Factory(t) {
            return new (t || BrandPenaltiesRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return BrandPenaltiesRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BrandPenaltiesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
    "LSHe":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brand-penalties/brand-penalties.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: BrandPenaltiesModule */

    /***/
    function LSHe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandPenaltiesModule", function () {
        return BrandPenaltiesModule;
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


      var _brand_penalties_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand-penalties-routing.module */
      "2FAk");
      /* harmony import */


      var _brand_penalties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brand-penalties.component */
      "bmhz");
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

      var BrandPenaltiesModule = /*@__PURE__*/function () {
        var BrandPenaltiesModule = /*#__PURE__*/_createClass(function BrandPenaltiesModule() {
          _classCallCheck(this, BrandPenaltiesModule);
        });

        BrandPenaltiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: BrandPenaltiesModule
        });
        BrandPenaltiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function BrandPenaltiesModule_Factory(t) {
            return new (t || BrandPenaltiesModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _brand_penalties_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrandPenaltiesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return BrandPenaltiesModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BrandPenaltiesModule, {
          declarations: [_brand_penalties_component__WEBPACK_IMPORTED_MODULE_3__["BrandPenaltiesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _brand_penalties_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrandPenaltiesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "bmhz":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brand-penalties/brand-penalties.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: BrandPenaltiesComponent */

    /***/
    function bmhz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandPenaltiesComponent", function () {
        return BrandPenaltiesComponent;
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


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/core/models/brand-penalties.model */
      "nOv4");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function BrandPenaltiesComponent_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.description, " ");
        }
      }

      var BrandPenaltiesComponent = /*@__PURE__*/function () {
        var BrandPenaltiesComponent = /*#__PURE__*/function () {
          function BrandPenaltiesComponent(router, apiService, formBuilder, sweetAlertService, datepipe) {
            _classCallCheck(this, BrandPenaltiesComponent);

            this.router = router;
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.datepipe = datepipe; // displayedColumns: string[] = ['brandDescription', 'brandPenaltyAmount', 'deleteIcon'];

            this.displayedColumns = ['brandDescription', 'brandPenaltyAmount'];
            this.brandPenalties = new app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_6__["BrandPenalties"]();
            this.brand = new _models__WEBPACK_IMPORTED_MODULE_4__["Brand"]();
            this.brandPenaltiesList = [];
            this.brandList = [];
          }

          _createClass(BrandPenaltiesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.setFormValidator();
              this.getBrandList();
              this.getBrandPenaltiesList();
            }
          }, {
            key: "getBrandPenaltiesList",
            value: function getBrandPenaltiesList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties).subscribe(function (res) {
                if (res) {
                  _this.brandPenaltiesList = res.responseData.data;
                  _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                  _this.dataSource.paginator = _this.formListComponent.paginator;
                  _this.dataSource.sort = _this.formListComponent.sort;
                  _this.brand = new _models__WEBPACK_IMPORTED_MODULE_4__["Brand"]();
                  _this.brand = _this.brandPenalties.brand;

                  if (_this.brand) {
                    _this.brand.penalty = false;
                    var withPenalty = _this.brandPenaltiesList.filter(function (filteredPenalties) {
                      var _a, _b;

                      return ((_a = filteredPenalties === null || filteredPenalties === void 0 ? void 0 : filteredPenalties.brand) === null || _a === void 0 ? void 0 : _a.id) === ((_b = _this.brand) === null || _b === void 0 ? void 0 : _b.id);
                    }).length === 0;

                    if (withPenalty) {
                      _this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand, _this.brand).subscribe();
                    }
                  }
                }
              }, function (err) {
                console.log(err);
              }, function () {
                _this.resetFormValidator();
              });
            }
          }, {
            key: "getBrandPenalties",
            value: function getBrandPenalties() {
              var _this2 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this2.brandPenalties = res.responseData.data;
                }
              });
            }
          }, {
            key: "getBrandList",
            value: function getBrandList() {
              var _this3 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].activeBrands).subscribe(function (res) {
                if (res) {
                  _this3.brandList = res.responseData.data;
                }
              });
            }
          }, {
            key: "save",
            value: function save() {
              var _this4 = this;

              this.formatDate();
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, this.brandPenalties).subscribe(function (res) {
                if (res) {
                  _this4.sweetAlertService.success(res);

                  _this4.router.navigate(['asc/page/maintenance/brand-penalties']);
                } else {
                  _this4.sweetAlertService.error(res);
                }

                _this4.getBrandPenaltiesList();
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this5 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, this.brandPenalties).subscribe(function (res) {
                if (res) {
                  _this5.sweetAlertService.success(res);

                  _this5.router.navigate(['asc/page/maintenance/brand-penalties']);
                } else {
                  _this5.sweetAlertService.error(res);
                }

                _this5.getBrandPenaltiesList();
              });
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.brandPenaltiesForm = this.formBuilder.group({
                brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.brandPenalties = new app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_6__["BrandPenalties"]();
              this.brandPenaltiesForm.markAsUntouched();
              this.brandPenaltiesForm.markAsPristine();
            }
          }, {
            key: "compareBrandPenalties",
            value: function compareBrandPenalties(value, selected) {
              if (value && selected) {
                return value.description === selected.description;
              }
            }
          }, {
            key: "formatDate",
            value: function formatDate() {
              // this.brandPenalties.penaltyDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd')
              this.datepipe.transform(this.brandPenalties.penaltyDate, 'yyyy-MM-dd');
            }
          }, {
            key: "test",
            value: function test() {
              alert(this.brandPenalties.penaltyDate);
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this6 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                text: 'Are you sure you want to delete this brand penalty?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, _this6.brandPenalties.id).subscribe(function () {
                    _this6.sweetAlertService.customSuccessMessage('Brand penalty successfully deleted.');

                    _this6.getBrandList();

                    _this6.getBrandPenaltiesList();
                  });
                }
              });
            }
          }]);

          return BrandPenaltiesComponent;
        }();

        BrandPenaltiesComponent.ɵfac = function BrandPenaltiesComponent_Factory(t) {
          return new (t || BrandPenaltiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]));
        };

        BrandPenaltiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: BrandPenaltiesComponent,
          selectors: [["app-brand-penalties"]],
          viewQuery: function BrandPenaltiesComponent_Query(rf, ctx) {
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
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["name", "brand", "formControlName", "brand", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "amount", "formControlName", "amount", 3, "ngModel", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"]],
          template: function BrandPenaltiesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "turned_in");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Brand Penalties ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brand ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrandPenaltiesComponent_Template_mat_select_ngModelChange_16_listener($event) {
                return ctx.brandPenalties.brand = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BrandPenaltiesComponent_mat_option_17_Template, 2, 2, "mat-option", 7);

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

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrandPenaltiesComponent_Template_input_ngModelChange_23_listener($event) {
                return ctx.brandPenalties.amount = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-form-action-buttons", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function BrandPenaltiesComponent_Template_app_form_action_buttons_saveFunction_25_listener() {
                return ctx.save();
              })("updateFunction", function BrandPenaltiesComponent_Template_app_form_action_buttons_updateFunction_25_listener() {
                return ctx.update();
              })("cancelFunction", function BrandPenaltiesComponent_Template_app_form_action_buttons_cancelFunction_25_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function BrandPenaltiesComponent_Template_app_form_action_buttons_deleteFunction_25_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-form-list", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function BrandPenaltiesComponent_Template_app_form_list_selectInListFunction_27_listener() {
                return ctx.getBrandPenalties();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.brandPenaltiesForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.brandPenalties.brand)("compareWith", ctx.compareBrandPenalties);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brandList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.brandPenalties.amount);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.brandPenalties)("childForm", ctx.brandPenaltiesForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYnJhbmQtcGVuYWx0aWVzL2JyYW5kLXBlbmFsdGllcy5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return BrandPenaltiesComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=brand-penalties-brand-penalties-module-es5.js.map