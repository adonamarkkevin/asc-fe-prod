(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module"], {
    /***/
    "8Y7v":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring-routing.module.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: VoucherBrandMonitoringRoutingModule */

    /***/
    function Y7v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherBrandMonitoringRoutingModule", function () {
        return VoucherBrandMonitoringRoutingModule;
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


      var _voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./voucher-brand-monitoring.component */
      "nGGm");

      var routes = [{
        path: '',
        component: _voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_2__["VoucherBrandMonitoringComponent"]
      }];

      var VoucherBrandMonitoringRoutingModule = /*@__PURE__*/function () {
        var VoucherBrandMonitoringRoutingModule = /*#__PURE__*/_createClass(function VoucherBrandMonitoringRoutingModule() {
          _classCallCheck(this, VoucherBrandMonitoringRoutingModule);
        });

        VoucherBrandMonitoringRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: VoucherBrandMonitoringRoutingModule
        });
        VoucherBrandMonitoringRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function VoucherBrandMonitoringRoutingModule_Factory(t) {
            return new (t || VoucherBrandMonitoringRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return VoucherBrandMonitoringRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](VoucherBrandMonitoringRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "PaDb":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring.module.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: VoucherBrandMonitoringModule */

    /***/
    function PaDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherBrandMonitoringModule", function () {
        return VoucherBrandMonitoringModule;
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


      var _voucher_brand_monitoring_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./voucher-brand-monitoring-routing.module */
      "8Y7v");
      /* harmony import */


      var _voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voucher-brand-monitoring.component */
      "nGGm");
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

      var VoucherBrandMonitoringModule = /*@__PURE__*/function () {
        var VoucherBrandMonitoringModule = /*#__PURE__*/_createClass(function VoucherBrandMonitoringModule() {
          _classCallCheck(this, VoucherBrandMonitoringModule);
        });

        VoucherBrandMonitoringModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: VoucherBrandMonitoringModule
        });
        VoucherBrandMonitoringModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function VoucherBrandMonitoringModule_Factory(t) {
            return new (t || VoucherBrandMonitoringModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _voucher_brand_monitoring_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoucherBrandMonitoringRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]]
        });
        return VoucherBrandMonitoringModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](VoucherBrandMonitoringModule, {
          declarations: [_voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["VoucherBrandMonitoringComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _voucher_brand_monitoring_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoucherBrandMonitoringRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "nGGm":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: VoucherBrandMonitoringComponent */

    /***/
    function nGGm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherBrandMonitoringComponent", function () {
        return VoucherBrandMonitoringComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function VoucherBrandMonitoringComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Brand Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function VoucherBrandMonitoringComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r10 == null ? null : element_r10.brand == null ? null : element_r10.brand.description, "");
        }
      }

      function VoucherBrandMonitoringComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function VoucherBrandMonitoringComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r12 == null ? null : element_r12.amount);
        }
      }

      function VoucherBrandMonitoringComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function VoucherBrandMonitoringComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r14 == null ? null : element_r14.remarks);
        }
      }

      function VoucherBrandMonitoringComponent_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function VoucherBrandMonitoringComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r16 == null ? null : element_r16.status);
        }
      }

      function VoucherBrandMonitoringComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 20);
        }
      }

      function VoucherBrandMonitoringComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 21);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var VoucherBrandMonitoringComponent = /*@__PURE__*/function () {
        var VoucherBrandMonitoringComponent = /*#__PURE__*/function () {
          function VoucherBrandMonitoringComponent(router, apiService, sweetAlertService, sanitizer, fileStorageService, route) {
            _classCallCheck(this, VoucherBrandMonitoringComponent);

            this.router = router;
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.sanitizer = sanitizer;
            this.fileStorageService = fileStorageService;
            this.route = route;
            this.displayedColumns = ['brand', 'amount', 'remarks', 'status'];
            this.companyList = [];
            this.brandPenalizedList = [];
            this.voucherList = [];
          }

          _createClass(VoucherBrandMonitoringComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.brandPenalty = String(this.route.snapshot.paramMap.get('brand'));

              if (this.brandPenalty !== undefined) {
                console.log('+++++++', this.brandPenalty);
                this.title = 'Brand Penalty Monitoring';
                this.getBrandPenaltyMonitoring();
              } else {
                console.log('-----', this.brandPenalty);
                this.title = 'Voucher Penalty Monitoring';
                this.getVocherMonitoring();
              }
            }
          }, {
            key: "getVocherMonitoring",
            value: function getVocherMonitoring() {
              var _this = this;

              console.log('VOUCHER MONITORING');
              this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].voucherMonitoring, "?page=1&size=30")).subscribe(function (data) {
                _this.voucherList = data.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.voucherList);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
              });
            }
          }, {
            key: "getBrandPenaltyMonitoring",
            value: function getBrandPenaltyMonitoring() {
              var _this2 = this;

              console.log('BRAND MONITORING');
              this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].penalizedBrandMonitoring, "/monitoring?page=1&size=30")).subscribe(function (data) {
                _this2.brandPenalizedList = data.data;
                _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this2.brandPenalizedList);
                _this2.dataSource.paginator = _this2.paginator;
                _this2.dataSource.sort = _this2.sort;
              });
            }
          }]);

          return VoucherBrandMonitoringComponent;
        }();

        VoucherBrandMonitoringComponent.??fac = function VoucherBrandMonitoringComponent_Factory(t) {
          return new (t || VoucherBrandMonitoringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_8__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
        };

        VoucherBrandMonitoringComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: VoucherBrandMonitoringComponent,
          selectors: [["app-voucher-brand-monitoring"]],
          viewQuery: function VoucherBrandMonitoringComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
            }
          },
          decls: 33,
          vars: 7,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], ["fxLayout", "", "fxLayoutAlign", "center center", 1, "col-md-12"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "type", "text", "placeholder", "Company Name"], [1, "mat-elevation-z8", "fields"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "brand"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "remarks"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
          template: function VoucherBrandMonitoringComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "view_list");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](15, 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, VoucherBrandMonitoringComponent_th_16_Template, 2, 0, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, VoucherBrandMonitoringComponent_td_17_Template, 2, 1, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](18, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, VoucherBrandMonitoringComponent_th_19_Template, 2, 0, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, VoucherBrandMonitoringComponent_td_20_Template, 2, 1, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](21, 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, VoucherBrandMonitoringComponent_th_22_Template, 2, 0, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, VoucherBrandMonitoringComponent_td_23_Template, 2, 1, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](24, 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, VoucherBrandMonitoringComponent_th_25_Template, 2, 0, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, VoucherBrandMonitoringComponent_td_26_Template, 2, 1, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, VoucherBrandMonitoringComponent_tr_27_Template, 1, 0, "tr", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, VoucherBrandMonitoringComponent_tr_28_Template, 1, 0, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " No record found. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "mat-paginator", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.title, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.dataSource && (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy92b3VjaGVyLWJyYW5kLW1vbml0b3Jpbmcvdm91Y2hlci1icmFuZC1tb25pdG9yaW5nL3ZvdWNoZXItYnJhbmQtbW9uaXRvcmluZy5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return VoucherBrandMonitoringComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module-es5.js.map