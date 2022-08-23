(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"], {
    /***/
    "Fy8O":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/pages/company/company-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CompanyRoutingModule */

    /***/
    function Fy8O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function () {
        return CompanyRoutingModule;
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


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var routes = [{
        path: '',
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_COMPANY,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | list-company-list-company-module */
            [__webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("list-company-list-company-module")]).then(__webpack_require__.bind(null,
            /*! ./list-company/list-company.module */
            "lsCb")).then(function (m) {
              return m.ListCompanyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_COMPANY,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-company-add-company-module */
            [__webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("add-company-add-company-module")]).then(__webpack_require__.bind(null,
            /*! ./add-company/add-company.module */
            "mXdJ")).then(function (m) {
              return m.AddCompanyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].UPDATE_COMPANY + '/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-company-add-company-module */
            [__webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("add-company-add-company-module")]).then(__webpack_require__.bind(null,
            /*! ./add-company/add-company.module */
            "mXdJ")).then(function (m) {
              return m.AddCompanyModule;
            });
          }
        }]
      }];

      var CompanyRoutingModule = /*#__PURE__*/_createClass(function CompanyRoutingModule() {
        _classCallCheck(this, CompanyRoutingModule);
      });

      CompanyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompanyRoutingModule);
      /***/
    },

    /***/
    "vKeY":
    /*!*********************************************************!*\
      !*** ./src/app/modules/pages/company/company.module.ts ***!
      \*********************************************************/

    /*! exports provided: CompanyModule */

    /***/
    function vKeY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyModule", function () {
        return CompanyModule;
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


      var _company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-routing.module */
      "Fy8O");

      ;

      var CompanyModule = /*#__PURE__*/_createClass(function CompanyModule() {
        _classCallCheck(this, CompanyModule);
      });

      CompanyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"]]
      })], CompanyModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=company-company-module-es5.js.map