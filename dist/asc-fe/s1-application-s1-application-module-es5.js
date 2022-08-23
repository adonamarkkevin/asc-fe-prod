(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s1-application-s1-application-module"], {
    /***/
    "4JiT":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/s1-application/s1-application-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: S1ApplicationRoutingModule */

    /***/
    function JiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1ApplicationRoutingModule", function () {
        return S1ApplicationRoutingModule;
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
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s1-application-list-s1-application-module */
            "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s1-application/list-s1-application.module */
            "Em3A")).then(function (m) {
              return m.ListS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_MULTIPLE_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s1-application-list-s1-application-module */
            "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s1-application/list-s1-application.module */
            "Em3A")).then(function (m) {
              return m.ListS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_SPECIAL_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s1-application-list-s1-application-module */
            "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s1-application/list-s1-application.module */
            "Em3A")).then(function (m) {
              return m.ListS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_ASSIGNED_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s1-application-list-s1-application-module */
            "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s1-application/list-s1-application.module */
            "Em3A")).then(function (m) {
              return m.ListS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_FOR_RELEASE_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s1-application-list-s1-application-module */
            "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s1-application/list-s1-application.module */
            "Em3A")).then(function (m) {
              return m.ListS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].RELEASED_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s1-application-list-s1-application-module */
            "list-s1-application-list-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s1-application/list-s1-application.module */
            "Em3A")).then(function (m) {
              return m.ListS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-s1-application-add-s1-application-module */
            "add-s1-application-add-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./add-s1-application/add-s1-application.module */
            "Zikp")).then(function (m) {
              return m.AddS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].UPDATE_APPLICATION + '/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-s1-application-add-s1-application-module */
            "add-s1-application-add-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./add-s1-application/add-s1-application.module */
            "Zikp")).then(function (m) {
              return m.AddS1ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_MULTIPLE + '/:multipleId/:nextSequence',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-s1-application-add-s1-application-module */
            "add-s1-application-add-s1-application-module").then(__webpack_require__.bind(null,
            /*! ./add-s1-application/add-s1-application.module */
            "Zikp")).then(function (m) {
              return m.AddS1ApplicationModule;
            });
          }
        }]
      }];

      var S1ApplicationRoutingModule = /*#__PURE__*/_createClass(function S1ApplicationRoutingModule() {
        _classCallCheck(this, S1ApplicationRoutingModule);
      });

      S1ApplicationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], S1ApplicationRoutingModule);
      /***/
    },

    /***/
    "J91h":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/s1-application/s1-application.module.ts ***!
      \************************************************************************************/

    /*! exports provided: S1ApplicationModule */

    /***/
    function J91h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1ApplicationModule", function () {
        return S1ApplicationModule;
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


      var _s1_application_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./s1-application-routing.module */
      "4JiT");
      /* harmony import */


      var _maintenance_brands_brands_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../maintenance/brands/brands.module */
      "EES/");
      /* harmony import */


      var _maintenance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @maintenance */
      "u+D7");
      /* harmony import */


      var _maintenance_product_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../maintenance/product/product.module */
      "px5W");

      var S1ApplicationModule = /*#__PURE__*/_createClass(function S1ApplicationModule() {
        _classCallCheck(this, S1ApplicationModule);
      });

      S1ApplicationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _s1_application_routing_module__WEBPACK_IMPORTED_MODULE_3__["S1ApplicationRoutingModule"], _maintenance_brands_brands_module__WEBPACK_IMPORTED_MODULE_4__["BrandsModule"], _maintenance_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"]],
        entryComponents: [_maintenance__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"], _maintenance__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]]
      })], S1ApplicationModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=s1-application-s1-application-module-es5.js.map