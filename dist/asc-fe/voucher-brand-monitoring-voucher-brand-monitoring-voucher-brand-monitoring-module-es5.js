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


      var _voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voucher-brand-monitoring.component */
      "nGGm");

      var routes = [{
        path: '',
        component: _voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["VoucherBrandMonitoringComponent"]
      }];

      var VoucherBrandMonitoringRoutingModule = /*#__PURE__*/_createClass(function VoucherBrandMonitoringRoutingModule() {
        _classCallCheck(this, VoucherBrandMonitoringRoutingModule);
      });

      VoucherBrandMonitoringRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VoucherBrandMonitoringRoutingModule);
      /***/
    },

    /***/
    "Dh6P":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring.component.scss ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dh6P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy92b3VjaGVyLWJyYW5kLW1vbml0b3Jpbmcvdm91Y2hlci1icmFuZC1tb25pdG9yaW5nL3ZvdWNoZXItYnJhbmQtbW9uaXRvcmluZy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "P1i6":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring.component.html ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P1i6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    <mat-icon>view_list</mat-icon> {{title}}\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <br>\r\n\r\n        <div class=\"col-md-12\" fxLayout fxLayoutAlign=\"center center\">\r\n\r\n            <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n\r\n                <input matInput type=\"text\" placeholder=\"Company Name\">\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"mat-elevation-z8 fields\">\r\n            <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                <ng-container matColumnDef=\"brand\">\r\n                    <th mat-header-cell *matHeaderCellDef> Brand Name </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\"> {{ element?.brand?.description }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"amount\">\r\n                    <th mat-header-cell *matHeaderCellDef > Amount</th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{ element?.amount}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"remarks\">\r\n                    <th mat-header-cell *matHeaderCellDef > Remarks</th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{ element?.remarks}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef > Status</th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{ element?.status}}</td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n                No record found.\r\n            </div>\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n        </div>\r\n        <br>\r\n    </div>";
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


      var _voucher_brand_monitoring_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voucher-brand-monitoring-routing.module */
      "8Y7v");
      /* harmony import */


      var _voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./voucher-brand-monitoring.component */
      "nGGm");
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

      var VoucherBrandMonitoringModule = /*#__PURE__*/_createClass(function VoucherBrandMonitoringModule() {
        _classCallCheck(this, VoucherBrandMonitoringModule);
      });

      VoucherBrandMonitoringModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_voucher_brand_monitoring_component__WEBPACK_IMPORTED_MODULE_4__["VoucherBrandMonitoringComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _voucher_brand_monitoring_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherBrandMonitoringRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"]]
      })], VoucherBrandMonitoringModule);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_voucher_brand_monitoring_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./voucher-brand-monitoring.component.html */
      "P1i6");
      /* harmony import */


      var _voucher_brand_monitoring_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./voucher-brand-monitoring.component.scss */
      "Dh6P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");

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
            this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].voucherMonitoring, "?page=1&size=30")).subscribe(function (data) {
              _this.voucherList = data.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.voucherList);
              _this.dataSource.paginator = _this.paginator;
              _this.dataSource.sort = _this.sort;
            });
          }
        }, {
          key: "getBrandPenaltyMonitoring",
          value: function getBrandPenaltyMonitoring() {
            var _this2 = this;

            console.log('BRAND MONITORING');
            this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].penalizedBrandMonitoring, "/monitoring?page=1&size=30")).subscribe(function (data) {
              _this2.brandPenalizedList = data.data;
              _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this2.brandPenalizedList);
              _this2.dataSource.paginator = _this2.paginator;
              _this2.dataSource.sort = _this2.sort;
            });
          }
        }]);

        return VoucherBrandMonitoringComponent;
      }();

      VoucherBrandMonitoringComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_11__["FileStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      };

      VoucherBrandMonitoringComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
            "static": false
          }]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], {
            "static": false
          }]
        }]
      };
      VoucherBrandMonitoringComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-voucher-brand-monitoring',
        template: _raw_loader_voucher_brand_monitoring_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_voucher_brand_monitoring_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VoucherBrandMonitoringComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module-es5.js.map