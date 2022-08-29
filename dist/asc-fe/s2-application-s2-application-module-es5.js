(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s2-application-s2-application-module"], {
    /***/
    "A0SB":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/s2-application/s2-application.module.ts ***!
      \************************************************************************************/

    /*! exports provided: S2ApplicationModule */

    /***/
    function A0SB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S2ApplicationModule", function () {
        return S2ApplicationModule;
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


      var _s2_application_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./s2-application-routing.module */
      "qegO");

      var S2ApplicationModule = /*@__PURE__*/function () {
        var S2ApplicationModule = /*#__PURE__*/_createClass(function S2ApplicationModule() {
          _classCallCheck(this, S2ApplicationModule);
        });

        S2ApplicationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: S2ApplicationModule
        });
        S2ApplicationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function S2ApplicationModule_Factory(t) {
            return new (t || S2ApplicationModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _s2_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["S2ApplicationRoutingModule"]]]
        });
        return S2ApplicationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](S2ApplicationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _s2_application_routing_module__WEBPACK_IMPORTED_MODULE_2__["S2ApplicationRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "qegO":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/pages/applications/s2-application/s2-application-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: S2ApplicationRoutingModule */

    /***/
    function qegO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S2ApplicationRoutingModule", function () {
        return S2ApplicationRoutingModule;
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


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var routes = [{
        path: '',
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s2-application-list-s2-application-module */
            "list-s2-application-list-s2-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s2-application/list-s2-application.module */
            "INgm")).then(function (m) {
              return m.ListS2ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].LIST_SPECIAL_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-s2-application-list-s2-application-module */
            "list-s2-application-list-s2-application-module").then(__webpack_require__.bind(null,
            /*! ./list-s2-application/list-s2-application.module */
            "INgm")).then(function (m) {
              return m.ListS2ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].ADD_APPLICATION,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-s2-application-add-s2-application-module */
            "add-s2-application-add-s2-application-module").then(__webpack_require__.bind(null,
            /*! ./add-s2-application/add-s2-application.module */
            "ZZAo")).then(function (m) {
              return m.AddS2ApplicationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].UPDATE_APPLICATION + '/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-s2-application-add-s2-application-module */
            "add-s2-application-add-s2-application-module").then(__webpack_require__.bind(null,
            /*! ./add-s2-application/add-s2-application.module */
            "ZZAo")).then(function (m) {
              return m.AddS2ApplicationModule;
            });
          }
        }]
      }];

      var S2ApplicationRoutingModule = /*@__PURE__*/function () {
        var S2ApplicationRoutingModule = /*#__PURE__*/_createClass(function S2ApplicationRoutingModule() {
          _classCallCheck(this, S2ApplicationRoutingModule);
        });

        S2ApplicationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: S2ApplicationRoutingModule
        });
        S2ApplicationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function S2ApplicationRoutingModule_Factory(t) {
            return new (t || S2ApplicationRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return S2ApplicationRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](S2ApplicationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=s2-application-s2-application-module-es5.js.map