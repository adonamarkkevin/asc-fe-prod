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


      var _brand_penalties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brand-penalties.component */
      "bmhz");

      var routes = [{
        path: '',
        component: _brand_penalties_component__WEBPACK_IMPORTED_MODULE_3__["BrandPenaltiesComponent"]
      }];

      var BrandPenaltiesRoutingModule = /*#__PURE__*/_createClass(function BrandPenaltiesRoutingModule() {
        _classCallCheck(this, BrandPenaltiesRoutingModule);
      });

      BrandPenaltiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BrandPenaltiesRoutingModule);
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
    "Feg1":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/brand-penalties/brand-penalties.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Feg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n            <mat-icon>turned_in</mat-icon> Brand Penalties\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"brandPenaltiesForm\">\r\n\r\n        <div class=\"row\">\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Brand <span class=\"required-field\">*</span></mat-label>\r\n            <mat-select [(ngModel)]=\"brandPenalties.brand\" name=\"brand\" formControlName=\"brand\" [compareWith]=\"compareBrandPenalties\">\r\n              <mat-option *ngFor=\"let i of brandList\" [value]=\"i\">\r\n                {{i.description}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Penalty Amount <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"brandPenalties.amount\" name=\"amount\" formControlName=\"amount\">\r\n        </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Choose date penalty</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" readonly [(ngModel)]=\"brandPenalties.penaltyDate\" name=\"penaltyDate\"\r\n              formControlName=\"penaltyDate\" (dateChange)=\"test()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker disabled=\"false\" color=\"warn\"></mat-datepicker>\r\n          </mat-form-field> -->\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"brandPenalties\" [childForm]=\"brandPenaltiesForm\" (saveFunction)=\"save()\" (updateFunction)=\"update()\"\r\n              (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\">\r\n      </app-form-action-buttons>\r\n      <br>\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n          (selectInListFunction)=\"getBrandPenalties()\">\r\n      </app-form-list>\r\n\r\n    </div>\r\n  </form>\r\n";
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


      var _brand_penalties_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brand-penalties-routing.module */
      "2FAk");
      /* harmony import */


      var _brand_penalties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./brand-penalties.component */
      "bmhz");
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

      var BrandPenaltiesModule = /*#__PURE__*/_createClass(function BrandPenaltiesModule() {
        _classCallCheck(this, BrandPenaltiesModule);
      });

      BrandPenaltiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_brand_penalties_component__WEBPACK_IMPORTED_MODULE_4__["BrandPenaltiesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _brand_penalties_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrandPenaltiesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], BrandPenaltiesModule);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brand_penalties_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brand-penalties.component.html */
      "Feg1");
      /* harmony import */


      var _brand_penalties_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand-penalties.component.scss */
      "sFGR");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/models/brand-penalties.model */
      "nOv4");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);

      var BrandPenaltiesComponent = /*#__PURE__*/function () {
        function BrandPenaltiesComponent(router, apiService, formBuilder, sweetAlertService, datepipe) {
          _classCallCheck(this, BrandPenaltiesComponent);

          this.router = router;
          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.datepipe = datepipe; // displayedColumns: string[] = ['brandDescription', 'brandPenaltyAmount', 'deleteIcon'];

          this.displayedColumns = ['brandDescription', 'brandPenaltyAmount'];
          this.brandPenalties = new app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_12__["BrandPenalties"]();
          this.brand = new _models__WEBPACK_IMPORTED_MODULE_9__["Brand"]();
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

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties).subscribe(function (res) {
              if (res) {
                _this.brandPenaltiesList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
                _this.brand = new _models__WEBPACK_IMPORTED_MODULE_9__["Brand"]();
                _this.brand = _this.brandPenalties.brand;

                if (_this.brand) {
                  _this.brand.penalty = false;
                  var withPenalty = _this.brandPenaltiesList.filter(function (filteredPenalties) {
                    var _a, _b;

                    return ((_a = filteredPenalties === null || filteredPenalties === void 0 ? void 0 : filteredPenalties.brand) === null || _a === void 0 ? void 0 : _a.id) === ((_b = _this.brand) === null || _b === void 0 ? void 0 : _b.id);
                  }).length === 0;

                  if (withPenalty) {
                    _this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brand, _this.brand).subscribe();
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

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this2.brandPenalties = res.responseData.data;
              }
            });
          }
        }, {
          key: "getBrandList",
          value: function getBrandList() {
            var _this3 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].activeBrands).subscribe(function (res) {
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
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, this.brandPenalties).subscribe(function (res) {
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

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, this.brandPenalties).subscribe(function (res) {
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
              brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.brandPenalties = new app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_12__["BrandPenalties"]();
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

            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
              text: 'Are you sure you want to delete this brand penalty?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, _this6.brandPenalties.id).subscribe(function () {
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

      BrandPenaltiesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      BrandPenaltiesComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_8__["FormListComponent"]]
        }]
      };
      BrandPenaltiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-brand-penalties',
        template: _raw_loader_brand_penalties_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brand_penalties_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BrandPenaltiesComponent);
      /***/
    },

    /***/
    "sFGR":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brand-penalties/brand-penalties.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function sFGR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYnJhbmQtcGVuYWx0aWVzL2JyYW5kLXBlbmFsdGllcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=brand-penalties-brand-penalties-module-es5.js.map