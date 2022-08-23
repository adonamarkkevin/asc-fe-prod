(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"], {
    /***/
    "0iV7":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/company/list-company/list-company.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iV7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>apartment</mat-icon> Company\r\n        </mat-label>\r\n\r\n        <button class=\"button-right\" mat-raised-button color=\"primary\" [routerLink]=\"['/asc/page/company/add']\">\r\n          <mat-icon>add</mat-icon> ADD COMPANY\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"col-md-5\" fxLayout fxLayoutAlign=\"center center\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"mat-elevation-z8 fields\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"companyName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Company Name </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\"> {{ element?.companyName }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"membersAffiliation\">\r\n          <th mat-header-cell *matHeaderCellDef > Members Affiliation </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.membersAffiliation?.description }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"companyTelephoneNo\">\r\n          <th mat-header-cell *matHeaderCellDef > Telephone Number </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.companyTelephoneNo }} </td>\r\n        </ng-container>\r\n\r\n        <!-- <ng-container matColumnDef=\"companyFaxNo\">\r\n          <th mat-header-cell *matHeaderCellDef > Fax Number</th>\r\n          <td mat-cell *matCellDef=\"let element\"\r\n          (click)=\"viewCompany(element)\">\r\n            {{ element?.companyFaxNo }}\r\n          </td>\r\n        </ng-container> -->\r\n\r\n        <ng-container matColumnDef=\"companyTin\">\r\n          <th mat-header-cell *matHeaderCellDef > TIN </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.companyTin }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"country\">\r\n          <th mat-header-cell *matHeaderCellDef > Country </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.country?.name }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"completeAddress\">\r\n          <th mat-header-cell *matHeaderCellDef > Address </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.completeAddress }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"delinquent\">\r\n          <th mat-header-cell *matHeaderCellDef> Delinquent </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.delinquent ? 'Yes' : 'No' }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef > Status </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"viewCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            {{ element?.status?.replaceAll('_', ' ') }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"action\">\r\n          <th mat-header-cell *matHeaderCellDef > Action </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"deleteCompany(element)\" [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n            <span class=\"material-icons\" matTooltip=\"Delete\">delete</span>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n        No record found.\r\n      </div>\r\n      <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n";
      /***/
    },

    /***/
    "3LH6":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/pages/company/list-company/list-company-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ListCompanyRoutingModule */

    /***/
    function LH6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListCompanyRoutingModule", function () {
        return ListCompanyRoutingModule;
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


      var _list_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-company.component */
      "OD7C");

      var routes = [{
        path: '',
        component: _list_company_component__WEBPACK_IMPORTED_MODULE_3__["ListCompanyComponent"]
      }];

      var ListCompanyRoutingModule = /*#__PURE__*/_createClass(function ListCompanyRoutingModule() {
        _classCallCheck(this, ListCompanyRoutingModule);
      });

      ListCompanyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListCompanyRoutingModule);
      /***/
    },

    /***/
    "KO+Q":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/pages/company/list-company/list-company.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function KOQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvY29tcGFueS9saXN0LWNvbXBhbnkvbGlzdC1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "OD7C":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/pages/company/list-company/list-company.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ListCompanyComponent */

    /***/
    function OD7C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListCompanyComponent", function () {
        return ListCompanyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_company_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-company.component.html */
      "0iV7");
      /* harmony import */


      var _list_company_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-company.component.scss */
      "KO+Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_address_address_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/services/address/address.service */
      "n4+4");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var ListCompanyComponent = /*#__PURE__*/function () {
        function ListCompanyComponent(apiService, addressService, sweetAlertService, router) {
          var _this = this;

          _classCallCheck(this, ListCompanyComponent);

          this.apiService = apiService;
          this.addressService = addressService;
          this.sweetAlertService = sweetAlertService;
          this.router = router;
          this.displayedColumns = ['companyName', 'membersAffiliation', 'companyTelephoneNo', 'companyTin', 'country', 'completeAddress', 'delinquent', 'status', 'action'];
          this.companyList = [];
          this.regionsList = [];
          this.provinceList = [];
          this.cityMunicipalityList = [];
          this.barangayList = [];

          this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
          };
        }

        _createClass(ListCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// this.dataSource.sort = this.sort;
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this2 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].company).subscribe(function (res) {
              // res.responseData.data.forEach(element => {
              // this.addressService.getBarangay(element.barangay.barangayId).subscribe(
              //   (res: any) => {
              //     console.log(res.responseData.data);
              //     element.address = res.responseData.data.cityMunicipality.province.region.regionName + " - " +
              //       res.responseData.data.barangayName + " " +
              //       res.responseData.data.cityMunicipality.cityMunicipalityName + ", " +
              //       res.responseData.data.cityMunicipality.province.provinceName;
              //   });
              // });
              _this2.companyList = res.responseData.data;
              _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.responseData.data);
              _this2.dataSource.paginator = _this2.paginator;
              _this2.dataSource.sort = _this2.sort;
            });
          }
        }, {
          key: "viewCompany",
          value: function viewCompany(data) {
            this.router.navigate(['asc/page/company/update/', data.id]);
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(companyParam) {
            var _this3 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              text: 'Are you sure you want to delete this company?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this3.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].company, companyParam.id).subscribe(function () {
                  _this3.sweetAlertService.customSuccessMessage('Company successfully deleted.');

                  _this3.getList();
                });
              }
            });
          }
        }]);

        return ListCompanyComponent;
      }();

      ListCompanyComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _core_services_address_address_service__WEBPACK_IMPORTED_MODULE_10__["AddressService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["SweetAlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      ListCompanyComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], {
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
      ListCompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-company',
        template: _raw_loader_list_company_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_company_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListCompanyComponent);
      /***/
    },

    /***/
    "lsCb":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/company/list-company/list-company.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ListCompanyModule */

    /***/
    function lsCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListCompanyModule", function () {
        return ListCompanyModule;
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


      var _list_company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-company-routing.module */
      "3LH6");
      /* harmony import */


      var _list_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list-company.component */
      "OD7C");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var ListCompanyModule = /*#__PURE__*/_createClass(function ListCompanyModule() {
        _classCallCheck(this, ListCompanyModule);
      });

      ListCompanyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_company_component__WEBPACK_IMPORTED_MODULE_4__["ListCompanyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _list_company_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListCompanyRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
      })], ListCompanyModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00-es5.js.map