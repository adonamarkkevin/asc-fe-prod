(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-pages-module"], {
    /***/
    "/HDY":
    /*!***********************************************!*\
      !*** ./src/app/modules/pages/pages.module.ts ***!
      \***********************************************/

    /*! exports provided: PagesModule */

    /***/
    function HDY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
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


      var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @pages */
      "PXec");
      /* harmony import */


      var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages-routing.module */
      "FRbf");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/layout/layout.module */
      "pV/B");

      var PagesModule = /*@__PURE__*/function () {
        var PagesModule = /*#__PURE__*/_createClass(function PagesModule() {
          _classCallCheck(this, PagesModule);
        });

        PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PagesModule
        });
        PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PagesModule_Factory(t) {
            return new (t || PagesModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]]]
        });
        return PagesModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
          declarations: [_pages__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _shared_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]]
        });
      })();
      /***/

    },

    /***/
    "FRbf":
    /*!*******************************************************!*\
      !*** ./src/app/modules/pages/pages-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PagesRoutingModule */

    /***/
    function FRbf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
        return PagesRoutingModule;
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


      var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @pages */
      "PXec");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var routes = [{
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].APPLICATION,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | applications-applications-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"), __webpack_require__.e("default~applications-applications-module~email-notification-email-notification-module"), __webpack_require__.e("default~applications-applications-module~weekly-user-schedule-weekly-user-schedule-module"), __webpack_require__.e("default~add-payment-add-payment-module~applications-applications-module"), __webpack_require__.e("default~applications-applications-module~type-of-medium-type-of-medium-module"), __webpack_require__.e("default~applications-applications-module~asc-rates-asc-rates-module"), __webpack_require__.e("default~applications-applications-module~brands-brands-module"), __webpack_require__.e("default~applications-applications-module~product-product-module"), __webpack_require__.e("default~applications-applications-module~list-payment-list-payment-module"), __webpack_require__.e("default~applications-applications-module~type-of-document-type-of-document-module"), __webpack_require__.e("default~applications-applications-module~payment-type-payment-type-module"), __webpack_require__.e("default~affiliation-affiliation-module~applications-applications-module"), __webpack_require__.e("default~applications-applications-module~category-category-module"), __webpack_require__.e("default~applications-applications-module~type-of-reason-type-of-reason-module"), __webpack_require__.e("common"), __webpack_require__.e("applications-applications-module")]).then(__webpack_require__.bind(null,
            /*! ./applications/applications.module */
            "C7lX")).then(function (m) {
              return m.ApplicationsModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].COMPANY,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | company-company-module */
            "company-company-module").then(__webpack_require__.bind(null,
            /*! ./company/company.module */
            "vKeY")).then(function (m) {
              return m.CompanyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].DASHBOARD,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dashboard-dashboard-module */
            "dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./dashboard/dashboard.module */
            "MijW")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].MAINTENANCE,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | maintenance-maintenance-module */
            "maintenance-maintenance-module").then(__webpack_require__.bind(null,
            /*! ./maintenance/maintenance.module */
            "Ilh0")).then(function (m) {
              return m.MaintenanceModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ACCOUNT,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | account-account-module */
            "common").then(__webpack_require__.bind(null,
            /*! ./account/account.module */
            "iUXy")).then(function (m) {
              return m.AccountModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ANNOUNCEMENT,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | announcement-announcement-module */
            "announcement-announcement-module").then(__webpack_require__.bind(null,
            /*! ./announcement/announcement.module */
            "7SPu")).then(function (m) {
              return m.AnnouncementModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ACCOUNTING,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | accounting-accounting-module */
            "common").then(__webpack_require__.bind(null,
            /*! ./accounting/accounting.module */
            "tlev")).then(function (m) {
              return m.AccountingModule;
            });
          }
        }]
      }];

      var PagesRoutingModule = /*@__PURE__*/function () {
        var PagesRoutingModule = /*#__PURE__*/_createClass(function PagesRoutingModule() {
          _classCallCheck(this, PagesRoutingModule);
        });

        PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: PagesRoutingModule
        });
        PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function PagesRoutingModule_Factory(t) {
            return new (t || PagesRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return PagesRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SharedModule = /*@__PURE__*/function () {
        var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
          _classCallCheck(this, SharedModule);
        });

        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SharedModule
        });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return SharedModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "PXec":
    /*!****************************************!*\
      !*** ./src/app/modules/pages/index.ts ***!
      \****************************************/

    /*! exports provided: PagesComponent */

    /***/
    function PXec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages.component */
      "xPeN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
        return _pages_component__WEBPACK_IMPORTED_MODULE_0__["PagesComponent"];
      }); // moved to tsconfig.json
      // export * from './account';
      // export * from './applications';
      // export * from './company';
      // export * from './dashboard';
      // export * from './landing-page';
      // export * from './maintenance';

      /***/

    },

    /***/
    "xPeN":
    /*!**************************************************!*\
      !*** ./src/app/modules/pages/pages.component.ts ***!
      \**************************************************/

    /*! exports provided: PagesComponent */

    /***/
    function xPeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
        return PagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/layout/layout.component */
      "0MCZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PagesComponent = /*@__PURE__*/function () {
        var PagesComponent = /*#__PURE__*/function () {
          function PagesComponent() {
            _classCallCheck(this, PagesComponent);
          }

          _createClass(PagesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return PagesComponent;
        }();

        PagesComponent.ɵfac = function PagesComponent_Factory(t) {
          return new (t || PagesComponent)();
        };

        PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PagesComponent,
          selectors: [["app-pages"]],
          decls: 2,
          vars: 0,
          template: function PagesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */"]
        });
        return PagesComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-pages-pages-module-es5.js.map