(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-layout-layout-module"], {
    /***/
    "6EaX":
    /*!**********************************************************!*\
      !*** ./src/app/shared/layout/header/header.component.ts ***!
      \**********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function EaX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "LN7W");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "SEOW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @services */
      "dJ3e");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(dataStorage, router, cd) {
          _classCallCheck(this, HeaderComponent);

          this.dataStorage = dataStorage;
          this.router = router;
          this.cd = cd;
          this.userRole = '';
          this.userFirstName = '';
          this.countdown = '';
          this.isCountdownDisplayed = false;
          this.todayDate = new Date();
          this.showProgressBar = this.dataStorage.getDisplayProgressbar();
          this.userRole = this.dataStorage.getUserRole();
          this.userFirstName = this.dataStorage.getUserFirstname();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataStorage.setDisplayProgressbar(false); // default

            this.setSystemTime();
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.showProgressBar = this.dataStorage.getDisplayProgressbar();
            this.countdown = this.dataStorage.getIdleCountdown();
            this.isCountdownDisplayed = this.dataStorage.getIsIdleCountdownDisplayed() === 'true';
            this.cd.detectChanges();
          }
        }, {
          key: "setSystemTime",
          value: function setSystemTime() {
            var _this = this;

            // updates displayed time every second
            setInterval(function () {
              _this.todayDate = new Date();
            }, 1000);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.dataStorage.signOut();
            this.router.navigateByUrl('login');
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "BJ44":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/footer/footer.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BJ44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"footerContainer\">\r\n    <span>Ad Standards Council - Screening System - v2.0<br>\r\n       &copy; 2022. Ad Standards Council</span>\r\n</div>\r\n";
      /***/
    },

    /***/
    "LN7W":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/header/header.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LN7W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"custom-container\">\r\n  <span *ngIf=\"showProgressBar==='true'\" class=\"progress-bar\">\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </span>\r\n  <div class=\"row header mx-0\">\r\n    <div class=\"col asc-logo\">\r\n      <img src=\"../../../../assets/images/asc-logo.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"col search-bar px-0\" style=\"padding:0;\">\r\n      <p><b>{{todayDate | date:'hh:mm:ss aa'}}</b></p>\r\n      <p>{{todayDate | date:'fullDate'}}</p>\r\n      <span *ngIf=\"isCountdownDisplayed\" class=\"idle-message\">\r\n        <b>\r\n          You will be logged out in {{countdown}} seconds!\r\n        </b>\r\n      </span>\r\n      <!-- <mat-form-field class=\"header-search\" appearance=\"outline\">\r\n        <mat-label>Search Application Reference Code</mat-label>\r\n        <input type=\"tel\" matInput placeholder=\"Search\">\r\n        <mat-icon matSuffix>search</mat-icon>\r\n      </mat-form-field> -->\r\n    </div>\r\n\r\n    <div class=\"col user-badge\">\r\n\r\n      <span>\r\n        <button class=\"avatar\" [matMenuTriggerFor]=\"userProfile\">\r\n          <img src=\"../../../../assets/images/user-profile-default.png\" alt=\"\">\r\n        </button>\r\n        <br>\r\n        <label class=\"username\">Hi {{ userFirstName | titlecase }}!</label>\r\n        <mat-menu #userProfile=\"matMenu\">\r\n          <div class=\"mat-menu-content\">\r\n            <div class=\"avatar-content\">\r\n              <img src=\"../../../../assets/images/user-profile-default.png\" alt=\"\"><br><br>\r\n            </div>\r\n            <div class=\"avatar-details\">\r\n              <p class=\"company-name\"><b>Ad Standard Council</b></p>\r\n              <p>{{ userRole?.replace('_',' ').replaceAll('ROLE ', '')?.replace('ENCODER', 'EVALUATOR') | uppercase }}</p>\r\n              <hr>\r\n            </div>\r\n            <button mat-menu-item [routerLink]=\"['/asc/page/account/user-profile']\">\r\n              <mat-icon>arrow_right</mat-icon>View Profile\r\n            </button>\r\n            <button mat-menu-item (click)=\"logout()\">\r\n              <mat-icon>arrow_right</mat-icon>Logout\r\n            </button>\r\n          </div>\r\n\r\n        </mat-menu>\r\n      </span>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "LkUc":
    /*!********************************************************!*\
      !*** ./src/app/shared/layout/layout-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: LayoutRoutingModule */

    /***/
    function LkUc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
        return LayoutRoutingModule;
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


      var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout.component */
      "0MCZ");

      var routes = [{
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]
      }, {
        path: 'access-denied',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | access-denied-access-denied-module */
          "access-denied-access-denied-module").then(__webpack_require__.bind(null,
          /*! ../access-denied/access-denied.module */
          "ahAP")).then(function (m) {
            return m.AccessDeniedModule;
          });
        }
      }, {
        path: 'success-verification-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | success-verification-page-success-verification-page-module */
          "success-verification-page-success-verification-page-module").then(__webpack_require__.bind(null,
          /*! ../success-verification-page/success-verification-page.module */
          "lbkY")).then(function (m) {
            return m.SuccessVerificationPageModule;
          });
        }
      }, {
        path: 'page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-pages-pages-module */
          "modules-pages-pages-module").then(__webpack_require__.bind(null,
          /*! ../../modules/pages/pages.module */
          "/HDY")).then(function (m) {
            return m.PagesModule;
          });
        }
      }];

      var LayoutRoutingModule = /*#__PURE__*/_createClass(function LayoutRoutingModule() {
        _classCallCheck(this, LayoutRoutingModule);
      });

      LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LayoutRoutingModule);
      /***/
    },

    /***/
    "OzxB":
    /*!************************************************************!*\
      !*** ./src/app/shared/layout/footer/footer.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function OzxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footerContainer {\n  text-align: right;\n  padding: 5px;\n  background-color: #c5140c;\n  color: white;\n  box-shadow: -2px -2px 10px 0 rgba(0, 0, 0, 0.25);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyQ29udGFpbmVye1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjZjFlY2VjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDIwLCAxMik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IC0ycHggLTJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjUlKTtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "SEOW":
    /*!************************************************************!*\
      !*** ./src/app/shared/layout/header/header.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function SEOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  background: #f1ecec;\n  box-shadow: 3px 3px 16px 0 rgba(0, 0, 0, 0.25);\n  position: relative;\n  top: 0;\n  height: 10vh;\n}\n\n.custom-container {\n  background: #ffffff;\n  width: 100%;\n}\n\n.custom-container .header {\n  padding: 6px;\n  border-bottom: solid 4px #f53e35;\n}\n\n.custom-container .header .asc-logo {\n  padding: 3px 20px;\n  width: 300px;\n  text-align: left;\n}\n\n.custom-container .header .asc-logo img {\n  height: 4.7rem;\n  width: 200px;\n}\n\n.custom-container .header .search-bar {\n  margin: auto;\n  border: red;\n  text-align: center;\n  line-height: 5px;\n  margin-top: 30px;\n}\n\n.custom-container .header .search-bar p {\n  color: gray;\n  font-weight: 500;\n}\n\n.custom-container .header .search-bar p b {\n  color: #720000;\n  font-weight: 800;\n  font-size: 40px;\n}\n\n.custom-container .header .user-badge {\n  margin: auto;\n}\n\n.custom-container .header .user-badge span {\n  text-align: center;\n  float: right;\n}\n\n.custom-container .header .user-badge span .avatar {\n  padding: 0px;\n  margin: 0px;\n  width: 3.3em;\n  border: none;\n}\n\n.custom-container .header .user-badge span .avatar img {\n  height: 3em;\n  width: 100%;\n  border-radius: 50%;\n  color: white;\n}\n\n.mat-menu-content {\n  padding: 10px;\n  margin: 0px;\n}\n\n.mat-menu-content .avatar-content {\n  padding: 0px 70px 5px 70px;\n}\n\n.mat-menu-content .avatar-content img {\n  border-radius: 50%;\n  height: 3.3em;\n  width: 3.3em;\n}\n\n.mat-menu-content .avatar-details {\n  text-align: center;\n  padding-bottom: 10px;\n  color: #c5140c;\n}\n\n.mat-menu-content .avatar-details hr {\n  height: 2px;\n}\n\n.mat-menu-content .avatar-details p {\n  font-size: 12px;\n  line-height: 5px;\n}\n\n.mat-menu-content .avatar-details p.company-name {\n  font-size: 15px;\n}\n\n.mat-menu-content button {\n  font-weight: 500;\n}\n\nspan {\n  margin-right: 1em;\n}\n\n::ng-deep .search-bar .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  padding: 0 !important;\n  background: white;\n  border-radius: 6px;\n}\n\n.username {\n  color: #c5140c;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.progress-bar {\n  display: contents;\n}\n\n.idle-message {\n  color: red;\n  font-weight: bold;\n  letter-spacing: 3px;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBQ0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUFNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFFUjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ047O0FBQU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFEUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHVjs7QUFFSTtFQUNDLFlBQUE7QUFBTDs7QUFDTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVWOztBQURVO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFHWjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBRkY7O0FBSUU7RUFFRSwwQkFBQTtBQUhKOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUZOOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFLSTtFQUNFLFdBQUE7QUFITjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUhOOztBQUlNO0VBQ0UsZUFBQTtBQUZSOztBQU9FO0VBQ0UsZ0JBQUE7QUFMSjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBWUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGlCQUFBO0FBVkY7O0FBYUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFWRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMWVjZWM7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNnB4IDAgcmdiKDAgMCAwIC8gMjUlKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLmN1c3RvbS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxNnB4IDAgcmdiKDAgMCAwIC8gMjUlKTsgLy8gcmVtb3ZlZCBieSBqY3AgLSB1bmVjZXNzYXJ5IHNoYWRvdyBibG9ja2luZyB0aGUgZGlzcGxheVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCByZ2IoMjQ1LCA2MiwgNTMpO1xyXG4gICAgLmFzYy1sb2dve1xyXG4gICAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiA0LjdyZW07XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYm9yZGVyOiByZWQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgcHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGJ7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDExNCwgMCwgMCk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWJhZGdlIHtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgLmF2YXRhcntcclxuICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMuM2VtO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1tZW51LWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjIzLCAyMjMsIDAuMzcpO1xyXG4gIC5hdmF0YXItY29udGVudHtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHggNzBweCA1cHggNzBweDtcclxuICAgIGltZ3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDMuM2VtO1xyXG4gICAgICB3aWR0aDogMy4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLWRldGFpbHN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMTk3LCAyMCwgMTIpO1xyXG4gICAgaHJ7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gICAgICAmLmNvbXBhbnktbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gIH1cclxufVxyXG5cclxuc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5zZWFyY2gtYmFyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIGNvbG9yOiByZ2IoMTk3LCAyMCwgMTIpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLmlkbGUtbWVzc2FnZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59Il19 */";
      /***/
    },

    /***/
    "XhcP":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js ***!
      \*************************************************************************/

    /*! exports provided: MAT_DRAWER_DEFAULT_AUTOSIZE, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule, matDrawerAnimations, throwMatDuplicatedDrawerError, ɵangular_material_src_material_sidenav_sidenav_a */

    /***/
    function XhcP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function () {
        return MAT_DRAWER_DEFAULT_AUTOSIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function () {
        return MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDrawer", function () {
        return MatDrawer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function () {
        return MatDrawerContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function () {
        return MatDrawerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenav", function () {
        return MatSidenav;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function () {
        return MatSidenavContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function () {
        return MatSidenavContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function () {
        return MatSidenavModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function () {
        return matDrawerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function () {
        return throwMatDuplicatedDrawerError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_sidenav_sidenav_a", function () {
        return MAT_DRAWER_CONTAINER;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material drawers.
       * @docs-private
       */


      var _c0 = ["*"];

      function MatDrawerContainer_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2._onBackdropClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
        }
      }

      function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
      var _c2 = ["mat-drawer", "mat-drawer-content", "*"];

      function MatSidenavContainer_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2._onBackdropClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
        }
      }

      function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c3 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
      var _c4 = ["mat-sidenav", "mat-sidenav-content", "*"];
      var _c5 = ".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n";
      var matDrawerAnimations = {
        /** Animation that slides a drawer in and out. */
        transformDrawer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
        // 1. Having a transform can cause elements with ripples or an animated
        //    transform to shift around in Chrome with an RTL layout (see #10023).
        // 2. 3d transforms causes text to appear blurry on IE and Edge.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          'transform': 'none',
          'visibility': 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
          // Avoids the shadow showing up when closed in SSR.
          'box-shadow': 'none',
          'visibility': 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
      };
      /**
       * Throws an exception when two MatDrawer are matching the same position.
       * @docs-private
       */

      function throwMatDuplicatedDrawerError(position) {
        throw Error("A drawer was already declared for 'position=\"".concat(position, "\"'"));
      }
      /** Configures whether drawers should use auto sizing by default. */


      var MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_DRAWER_DEFAULT_AUTOSIZE', {
        providedIn: 'root',
        factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
      });
      /**
       * Used to provide a drawer container to a drawer while avoiding circular references.
       * @docs-private
       */

      var MAT_DRAWER_CONTAINER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_DRAWER_CONTAINER');
      /** @docs-private */

      function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
        return false;
      }

      var MatDrawerContent = /*#__PURE__*/function (_angular_cdk_scrollin) {
        _inherits(MatDrawerContent, _angular_cdk_scrollin);

        var _super = _createSuper(MatDrawerContent);

        function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
          var _this2;

          _classCallCheck(this, MatDrawerContent);

          _this2 = _super.call(this, elementRef, scrollDispatcher, ngZone);
          _this2._changeDetectorRef = _changeDetectorRef;
          _this2._container = _container;
          return _this2;
        }

        _createClass(MatDrawerContent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this3 = this;

            this._container._contentMarginChanges.subscribe(function () {
              _this3._changeDetectorRef.markForCheck();
            });
          }
        }]);

        return MatDrawerContent;
      }(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]);

      MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) {
        return new (t || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatDrawerContainer;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
      };

      MatDrawerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatDrawerContent,
        selectors: [["mat-drawer-content"]],
        hostAttrs: [1, "mat-drawer-content"],
        hostVars: 4,
        hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatDrawerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatDrawerContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: MatDrawerContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatDrawerContainer;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDrawerContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-drawer-content',
            template: '<ng-content></ng-content>',
            host: {
              'class': 'mat-drawer-content',
              '[style.margin-left.px]': '_container._contentMargins.left',
              '[style.margin-right.px]': '_container._contentMargins.right'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: MatDrawerContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
                return MatDrawerContainer;
              })]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }];
        }, null);
      })();
      /**
       * This component corresponds to a drawer that can be opened on the drawer container.
       */


      var MatDrawer = /*#__PURE__*/function () {
        function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc, _container) {
          var _this4 = this;

          _classCallCheck(this, MatDrawer);

          this._elementRef = _elementRef;
          this._focusTrapFactory = _focusTrapFactory;
          this._focusMonitor = _focusMonitor;
          this._platform = _platform;
          this._ngZone = _ngZone;
          this._doc = _doc;
          this._container = _container;
          this._elementFocusedBeforeDrawerWasOpened = null;
          /** Whether the drawer is initialized. Used for disabling the initial animation. */

          this._enableAnimations = false;
          this._position = 'start';
          this._mode = 'over';
          this._disableClose = false;
          this._opened = false;
          /** Emits whenever the drawer has started animating. */

          this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits whenever the drawer is done animating. */

          this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Current state of the sidenav animation. */
          // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
          // metadata is not inherited by child classes, instead the host binding data is defined in a way
          // that can be inherited.
          // tslint:disable:no-host-decorator-in-concrete

          this._animationState = 'void';
          /** Event emitted when the drawer open state is changed. */

          this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
          new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](
          /* isAsync */
          true);
          /** Event emitted when the drawer has been opened. */

          this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {}));
          /** Event emitted when the drawer has started opening. */

          this.openedStart = this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (e) {
            return e.fromState !== e.toState && e.toState.indexOf('open') === 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(undefined));
          /** Event emitted when the drawer has been closed. */

          this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {}));
          /** Event emitted when the drawer has started closing. */

          this.closedStart = this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (e) {
            return e.fromState !== e.toState && e.toState === 'void';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mapTo"])(undefined));
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Event emitted when the drawer's position changes. */
          // tslint:disable-next-line:no-output-on-prefix

          this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * An observable that emits when the drawer mode changes. This is used by the drawer container to
           * to know when to when the mode changes so it can adapt the margins on the content.
           */

          this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.openedChange.subscribe(function (opened) {
            if (opened) {
              if (_this4._doc) {
                _this4._elementFocusedBeforeDrawerWasOpened = _this4._doc.activeElement;
              }

              _this4._takeFocus();
            } else if (_this4._isFocusWithinDrawer()) {
              _this4._restoreFocus();
            }
          });
          /**
           * Listen to `keydown` events outside the zone so that change detection is not run every
           * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
           * and we don't have close disabled.
           */

          this._ngZone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this4._elementRef.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
              return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !_this4.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this4._destroyed)).subscribe(function (event) {
              return _this4._ngZone.run(function () {
                _this4.close();

                event.stopPropagation();
                event.preventDefault();
              });
            });
          }); // We need a Subject with distinctUntilChanged, because the `done` event
          // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


          this._animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            var fromState = event.fromState,
                toState = event.toState;

            if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
              _this4.openedChange.emit(_this4._opened);
            }
          });
        }
        /** The side that the drawer is attached to. */


        _createClass(MatDrawer, [{
          key: "position",
          get: function get() {
            return this._position;
          },
          set: function set(value) {
            // Make sure we have a valid value.
            value = value === 'end' ? 'end' : 'start';

            if (value != this._position) {
              this._position = value;
              this.onPositionChanged.emit();
            }
          }
          /** Mode of the drawer; one of 'over', 'push' or 'side'. */

        }, {
          key: "mode",
          get: function get() {
            return this._mode;
          },
          set: function set(value) {
            this._mode = value;

            this._updateFocusTrapState();

            this._modeChanged.next();
          }
          /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */

        }, {
          key: "disableClose",
          get: function get() {
            return this._disableClose;
          },
          set: function set(value) {
            this._disableClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the drawer should focus the first focusable element automatically when opened.
           * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
           * enabled, focus will be moved into the sidenav in `side` mode as well.
           */

        }, {
          key: "autoFocus",
          get: function get() {
            var value = this._autoFocus; // Note that usually we disable auto focusing in `side` mode, because we don't know how the
            // sidenav is being used, but in some cases it still makes sense to do it. If the consumer
            // explicitly enabled `autoFocus`, we take it as them always wanting to enable it.

            return value == null ? this.mode !== 'side' : value;
          },
          set: function set(value) {
            this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the drawer is opened. We overload this because we trigger an event when it
           * starts or end.
           */

        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(value) {
            this.toggle(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value));
          }
          /**
           * Moves focus into the drawer. Note that this works even if
           * the focus trap is disabled in `side` mode.
           */

        }, {
          key: "_takeFocus",
          value: function _takeFocus() {
            var _this5 = this;

            if (!this.autoFocus || !this._focusTrap) {
              return;
            }

            this._focusTrap.focusInitialElementWhenReady().then(function (hasMovedFocus) {
              // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
              // still works. We need to check that `focus` is a function due to Universal.
              if (!hasMovedFocus && typeof _this5._elementRef.nativeElement.focus === 'function') {
                _this5._elementRef.nativeElement.focus();
              }
            });
          }
          /**
           * Restores focus to the element that was originally focused when the drawer opened.
           * If no element was focused at that time, the focus will be restored to the drawer.
           */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            if (!this.autoFocus) {
              return;
            } // Note that we don't check via `instanceof HTMLElement` so that we can cover SVGs as well.


            if (this._elementFocusedBeforeDrawerWasOpened) {
              this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
            } else {
              this._elementRef.nativeElement.blur();
            }

            this._elementFocusedBeforeDrawerWasOpened = null;
            this._openedVia = null;
          }
          /** Whether focus is currently within the drawer. */

        }, {
          key: "_isFocusWithinDrawer",
          value: function _isFocusWithinDrawer() {
            var _a;

            var activeEl = (_a = this._doc) === null || _a === void 0 ? void 0 : _a.activeElement;
            return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

            this._updateFocusTrapState();
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // Enable the animations after the lifecycle hooks have run, in order to avoid animating
            // drawers that are open by default. When we're on the server, we shouldn't enable the
            // animations, because we don't want the drawer to animate the first time the user sees
            // the page.
            if (this._platform.isBrowser) {
              this._enableAnimations = true;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._focusTrap) {
              this._focusTrap.destroy();
            }

            this._animationStarted.complete();

            this._animationEnd.complete();

            this._modeChanged.complete();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Open the drawer.
           * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
           * Used for focus management after the sidenav is closed.
           */

        }, {
          key: "open",
          value: function open(openedVia) {
            return this.toggle(true, openedVia);
          }
          /** Close the drawer. */

        }, {
          key: "close",
          value: function close() {
            return this.toggle(false);
          }
          /** Closes the drawer with context that the backdrop was clicked. */

        }, {
          key: "_closeViaBackdropClick",
          value: function _closeViaBackdropClick() {
            // If the drawer is closed upon a backdrop click, we always want to restore focus. We
            // don't need to check whether focus is currently in the drawer, as clicking on the
            // backdrop causes blurring of the active element.
            return this._setOpen(
            /* isOpen */
            false,
            /* restoreFocus */
            true);
          }
          /**
           * Toggle this drawer.
           * @param isOpen Whether the drawer should be open.
           * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
           * Used for focus management after the sidenav is closed.
           */

        }, {
          key: "toggle",
          value: function toggle() {
            var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.opened;
            var openedVia = arguments.length > 1 ? arguments[1] : undefined;
            // If the focus is currently inside the drawer content and we are closing the drawer,
            // restore the focus to the initially focused element (when the drawer opened).
            return this._setOpen(isOpen,
            /* restoreFocus */
            !isOpen && this._isFocusWithinDrawer(), openedVia);
          }
          /**
           * Toggles the opened state of the drawer.
           * @param isOpen Whether the drawer should open or close.
           * @param restoreFocus Whether focus should be restored on close.
           * @param openedVia Focus origin that can be optionally set when opening a drawer. The
           *   origin will be used later when focus is restored on drawer close.
           */

        }, {
          key: "_setOpen",
          value: function _setOpen(isOpen, restoreFocus) {
            var _this6 = this;

            var openedVia = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'program';
            this._opened = isOpen;

            if (isOpen) {
              this._animationState = this._enableAnimations ? 'open' : 'open-instant';
              this._openedVia = openedVia;
            } else {
              this._animationState = 'void';

              if (restoreFocus) {
                this._restoreFocus();
              }
            }

            this._updateFocusTrapState();

            return new Promise(function (resolve) {
              _this6.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (open) {
                return resolve(open ? 'open' : 'close');
              });
            });
          }
        }, {
          key: "_getWidth",
          value: function _getWidth() {
            return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
          }
          /** Updates the enabled state of the focus trap. */

        }, {
          key: "_updateFocusTrapState",
          value: function _updateFocusTrapState() {
            if (this._focusTrap) {
              // The focus trap is only enabled when the drawer is open in any mode other than side.
              this._focusTrap.enabled = this.opened && this.mode !== 'side';
            }
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_animationStartListener",
          value: function _animationStartListener(event) {
            this._animationStarted.next(event);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_animationDoneListener",
          value: function _animationDoneListener(event) {
            this._animationEnd.next(event);
          }
        }]);

        return MatDrawer;
      }();

      MatDrawer.ɵfac = function MatDrawer_Factory(t) {
        return new (t || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
      };

      MatDrawer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatDrawer,
        selectors: [["mat-drawer"]],
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
        hostVars: 12,
        hostBindings: function MatDrawer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
              return ctx._animationStartListener($event);
            })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
              return ctx._animationDoneListener($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@transform", ctx._animationState);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
          }
        },
        inputs: {
          position: "position",
          mode: "mode",
          disableClose: "disableClose",
          autoFocus: "autoFocus",
          opened: "opened"
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          openedStart: "openedStart",
          _closedStream: "closed",
          closedStart: "closedStart",
          onPositionChanged: "positionChanged"
        },
        exportAs: ["matDrawer"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-drawer-inner-container"]],
        template: function MatDrawer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2,
        data: {
          animation: [matDrawerAnimations.transformDrawer]
        },
        changeDetection: 0
      });

      MatDrawer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: MatDrawerContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_DRAWER_CONTAINER]
          }]
        }];
      };

      MatDrawer.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _animationState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['@transform']
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['opened']
        }],
        openedStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['closed']
        }],
        closedStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onPositionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['positionChanged']
        }],
        _animationStartListener: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['@transform.start', ['$event']]
        }],
        _animationDoneListener: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['@transform.done', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDrawer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-drawer',
            exportAs: 'matDrawer',
            template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
            animations: [matDrawerAnimations.transformDrawer],
            host: {
              'class': 'mat-drawer',
              // must prevent the browser from aligning text based on value
              '[attr.align]': 'null',
              '[class.mat-drawer-end]': 'position === "end"',
              '[class.mat-drawer-over]': 'mode === "over"',
              '[class.mat-drawer-push]': 'mode === "push"',
              '[class.mat-drawer-side]': 'mode === "side"',
              '[class.mat-drawer-opened]': 'opened',
              'tabIndex': '-1'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: MatDrawerContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_DRAWER_CONTAINER]
            }]
          }];
        }, {
          _animationState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['@transform']
          }],
          openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['opened']
          }],
          openedStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['closed']
          }],
          closedStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          onPositionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['positionChanged']
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disableClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _animationStartListener: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['@transform.start', ['$event']]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _animationDoneListener: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['@transform.done', ['$event']]
          }]
        });
      })();
      /**
       * `<mat-drawer-container>` component.
       *
       * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
       * and coordinates the backdrop and content styling.
       */


      var MatDrawerContainer = /*#__PURE__*/function () {
        function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler) {
          var _this7 = this;

          var defaultAutosize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

          var _animationMode = arguments.length > 6 ? arguments[6] : undefined;

          _classCallCheck(this, MatDrawerContainer);

          this._dir = _dir;
          this._element = _element;
          this._ngZone = _ngZone;
          this._changeDetectorRef = _changeDetectorRef;
          this._animationMode = _animationMode;
          /** Drawers that belong to this container. */

          this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
          /** Event emitted when the drawer backdrop is clicked. */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits on every ngDoCheck. Used for debouncing reflows. */

          this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /**
           * Margins to be applied to the content. These are used to push / shrink the drawer content when a
           * drawer is open. We use margin rather than transform even for push mode because transform breaks
           * fixed position elements inside of the transformed element.
           */

          this._contentMargins = {
            left: null,
            right: null
          };
          this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"](); // If a `Dir` directive exists up the tree, listen direction changes
          // and update the left/right properties to point to the proper start/end.

          if (_dir) {
            _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this7._validateDrawers();

              _this7.updateContentMargins();
            });
          } // Since the minimum width of the sidenav depends on the viewport width,
          // we need to recompute the margins if the viewport changes.


          viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
            return _this7.updateContentMargins();
          });
          this._autosize = defaultAutosize;
        }
        /** The drawer child with the `start` position. */


        _createClass(MatDrawerContainer, [{
          key: "start",
          get: function get() {
            return this._start;
          }
          /** The drawer child with the `end` position. */

        }, {
          key: "end",
          get: function get() {
            return this._end;
          }
          /**
           * Whether to automatically resize the container whenever
           * the size of any of its drawers changes.
           *
           * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
           * the drawers on every change detection cycle. Can be configured globally via the
           * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
           */

        }, {
          key: "autosize",
          get: function get() {
            return this._autosize;
          },
          set: function set(value) {
            this._autosize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the drawer container should have a backdrop while one of the sidenavs is open.
           * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
           * mode as well.
           */

        }, {
          key: "hasBackdrop",
          get: function get() {
            if (this._backdropOverride == null) {
              return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
            }

            return this._backdropOverride;
          },
          set: function set(value) {
            this._backdropOverride = value == null ? null : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          }
          /** Reference to the CdkScrollable instance that wraps the scrollable content. */

        }, {
          key: "scrollable",
          get: function get() {
            return this._userContent || this._content;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this8 = this;

            this._allDrawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allDrawers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (drawer) {
              _this8._drawers.reset(drawer.filter(function (item) {
                return !item._container || item._container === _this8;
              }));

              _this8._drawers.notifyOnChanges();
            });

            this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null)).subscribe(function () {
              _this8._validateDrawers();

              _this8._drawers.forEach(function (drawer) {
                _this8._watchDrawerToggle(drawer);

                _this8._watchDrawerPosition(drawer);

                _this8._watchDrawerMode(drawer);
              });

              if (!_this8._drawers.length || _this8._isDrawerOpen(_this8._start) || _this8._isDrawerOpen(_this8._end)) {
                _this8.updateContentMargins();
              }

              _this8._changeDetectorRef.markForCheck();
            }); // Avoid hitting the NgZone through the debounce timeout.


            this._ngZone.runOutsideAngular(function () {
              _this8._doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(10), // Arbitrary debounce time, less than a frame at 60fps
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this8._destroyed)).subscribe(function () {
                return _this8.updateContentMargins();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._contentMarginChanges.complete();

            this._doCheckSubject.complete();

            this._drawers.destroy();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Calls `open` of both start and end drawers */

        }, {
          key: "open",
          value: function open() {
            this._drawers.forEach(function (drawer) {
              return drawer.open();
            });
          }
          /** Calls `close` of both start and end drawers */

        }, {
          key: "close",
          value: function close() {
            this._drawers.forEach(function (drawer) {
              return drawer.close();
            });
          }
          /**
           * Recalculates and updates the inline styles for the content. Note that this should be used
           * sparingly, because it causes a reflow.
           */

        }, {
          key: "updateContentMargins",
          value: function updateContentMargins() {
            var _this9 = this;

            // 1. For drawers in `over` mode, they don't affect the content.
            // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
            //    left margin (for left drawer) or right margin (for right the drawer).
            // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
            //    adding to the left or right margin and simultaneously subtracting the same amount of
            //    margin from the other side.
            var left = 0;
            var right = 0;

            if (this._left && this._left.opened) {
              if (this._left.mode == 'side') {
                left += this._left._getWidth();
              } else if (this._left.mode == 'push') {
                var width = this._left._getWidth();

                left += width;
                right -= width;
              }
            }

            if (this._right && this._right.opened) {
              if (this._right.mode == 'side') {
                right += this._right._getWidth();
              } else if (this._right.mode == 'push') {
                var _width = this._right._getWidth();

                right += _width;
                left -= _width;
              }
            } // If either `right` or `left` is zero, don't set a style to the element. This
            // allows users to specify a custom size via CSS class in SSR scenarios where the
            // measured widths will always be zero. Note that we reset to `null` here, rather
            // than below, in order to ensure that the types in the `if` below are consistent.


            left = left || null;
            right = right || null;

            if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
              this._contentMargins = {
                left: left,
                right: right
              }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
              // to do it only when something changed, otherwise we can end up hitting the zone too often.

              this._ngZone.run(function () {
                return _this9._contentMarginChanges.next(_this9._contentMargins);
              });
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            var _this10 = this;

            // If users opted into autosizing, do a check every change detection cycle.
            if (this._autosize && this._isPushed()) {
              // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
              this._ngZone.runOutsideAngular(function () {
                return _this10._doCheckSubject.next();
              });
            }
          }
          /**
           * Subscribes to drawer events in order to set a class on the main container element when the
           * drawer is open and the backdrop is visible. This ensures any overflow on the container element
           * is properly hidden.
           */

        }, {
          key: "_watchDrawerToggle",
          value: function _watchDrawerToggle(drawer) {
            var _this11 = this;

            drawer._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) {
              return event.fromState !== event.toState;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(function (event) {
              // Set the transition class on the container so that the animations occur. This should not
              // be set initially because animations should only be triggered via a change in state.
              if (event.toState !== 'open-instant' && _this11._animationMode !== 'NoopAnimations') {
                _this11._element.nativeElement.classList.add('mat-drawer-transition');
              }

              _this11.updateContentMargins();

              _this11._changeDetectorRef.markForCheck();
            });

            if (drawer.mode !== 'side') {
              drawer.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(function () {
                return _this11._setContainerClass(drawer.opened);
              });
            }
          }
          /**
           * Subscribes to drawer onPositionChanged event in order to
           * re-validate drawers when the position changes.
           */

        }, {
          key: "_watchDrawerPosition",
          value: function _watchDrawerPosition(drawer) {
            var _this12 = this;

            if (!drawer) {
              return;
            } // NOTE: We need to wait for the microtask queue to be empty before validating,
            // since both drawers may be swapping positions at the same time.


            drawer.onPositionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(function () {
              _this12._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function () {
                _this12._validateDrawers();
              });
            });
          }
          /** Subscribes to changes in drawer mode so we can run change detection. */

        }, {
          key: "_watchDrawerMode",
          value: function _watchDrawerMode(drawer) {
            var _this13 = this;

            if (drawer) {
              drawer._modeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._drawers.changes, this._destroyed))).subscribe(function () {
                _this13.updateContentMargins();

                _this13._changeDetectorRef.markForCheck();
              });
            }
          }
          /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */

        }, {
          key: "_setContainerClass",
          value: function _setContainerClass(isAdd) {
            var classList = this._element.nativeElement.classList;
            var className = 'mat-drawer-container-has-open';

            if (isAdd) {
              classList.add(className);
            } else {
              classList.remove(className);
            }
          }
          /** Validate the state of the drawer children components. */

        }, {
          key: "_validateDrawers",
          value: function _validateDrawers() {
            var _this14 = this;

            this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

            this._drawers.forEach(function (drawer) {
              if (drawer.position == 'end') {
                if (_this14._end != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                  throwMatDuplicatedDrawerError('end');
                }

                _this14._end = drawer;
              } else {
                if (_this14._start != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                  throwMatDuplicatedDrawerError('start');
                }

                _this14._start = drawer;
              }
            });

            this._right = this._left = null; // Detect if we're LTR or RTL.

            if (this._dir && this._dir.value === 'rtl') {
              this._left = this._end;
              this._right = this._start;
            } else {
              this._left = this._start;
              this._right = this._end;
            }
          }
          /** Whether the container is being pushed to the side by one of the drawers. */

        }, {
          key: "_isPushed",
          value: function _isPushed() {
            return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
          }
        }, {
          key: "_onBackdropClicked",
          value: function _onBackdropClicked() {
            this.backdropClick.emit();

            this._closeModalDrawersViaBackdrop();
          }
        }, {
          key: "_closeModalDrawersViaBackdrop",
          value: function _closeModalDrawersViaBackdrop() {
            var _this15 = this;

            // Close all open drawers where closing is not disabled and the mode is not `side`.
            [this._start, this._end].filter(function (drawer) {
              return drawer && !drawer.disableClose && _this15._canHaveBackdrop(drawer);
            }).forEach(function (drawer) {
              return drawer._closeViaBackdropClick();
            });
          }
        }, {
          key: "_isShowingBackdrop",
          value: function _isShowingBackdrop() {
            return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
          }
        }, {
          key: "_canHaveBackdrop",
          value: function _canHaveBackdrop(drawer) {
            return drawer.mode !== 'side' || !!this._backdropOverride;
          }
        }, {
          key: "_isDrawerOpen",
          value: function _isDrawerOpen(drawer) {
            return drawer != null && drawer.opened;
          }
        }]);

        return MatDrawerContainer;
      }();

      MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) {
        return new (t || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatDrawerContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatDrawerContainer,
        selectors: [["mat-drawer-container"]],
        contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatDrawer, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
          }
        },
        viewQuery: function MatDrawerContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatDrawerContent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
          }
        },
        hostAttrs: [1, "mat-drawer-container"],
        hostVars: 2,
        hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
          }
        },
        inputs: {
          autosize: "autosize",
          hasBackdrop: "hasBackdrop"
        },
        outputs: {
          backdropClick: "backdropClick"
        },
        exportAs: ["matDrawerContainer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatDrawerContainer
        }])],
        ngContentSelectors: _c2,
        decls: 4,
        vars: 2,
        consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
        template: function MatDrawerContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._content);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatDrawerContent],
        styles: [_c5],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDrawerContainer.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatDrawerContainer.propDecorators = {
        _allDrawers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatDrawer, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatDrawerContent]
        }],
        _userContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [MatDrawerContent]
        }],
        autosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDrawerContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-drawer-container',
            exportAs: 'matDrawerContainer',
            template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-drawer\"></ng-content>\n\n<ng-content select=\"mat-drawer-content\">\n</ng-content>\n<mat-drawer-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-drawer-content>\n",
            host: {
              'class': 'mat-drawer-container',
              '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            providers: [{
              provide: MAT_DRAWER_CONTAINER,
              useExisting: MatDrawerContainer
            }],
            styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          autosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _allDrawers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatDrawer, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }],
          _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatDrawerContent]
          }],
          _userContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [MatDrawerContent]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSidenavContent = /*#__PURE__*/function (_MatDrawerContent) {
        _inherits(MatSidenavContent, _MatDrawerContent);

        var _super2 = _createSuper(MatSidenavContent);

        function MatSidenavContent(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
          _classCallCheck(this, MatSidenavContent);

          return _super2.call(this, changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
        }

        return _createClass(MatSidenavContent);
      }(MatDrawerContent);

      MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) {
        return new (t || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatSidenavContainer;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
      };

      MatSidenavContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatSidenavContent,
        selectors: [["mat-sidenav-content"]],
        hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
        hostVars: 4,
        hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatSidenavContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatSidenavContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: MatSidenavContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatSidenavContainer;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenavContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-sidenav-content',
            template: '<ng-content></ng-content>',
            host: {
              'class': 'mat-drawer-content mat-sidenav-content',
              '[style.margin-left.px]': '_container._contentMargins.left',
              '[style.margin-right.px]': '_container._contentMargins.right'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: MatSidenavContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
                return MatSidenavContainer;
              })]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
          }];
        }, null);
      })();

      var MatSidenav = /*#__PURE__*/function (_MatDrawer) {
        _inherits(MatSidenav, _MatDrawer);

        var _super3 = _createSuper(MatSidenav);

        function MatSidenav() {
          var _this16;

          _classCallCheck(this, MatSidenav);

          _this16 = _super3.apply(this, arguments);
          _this16._fixedInViewport = false;
          _this16._fixedTopGap = 0;
          _this16._fixedBottomGap = 0;
          return _this16;
        }
        /** Whether the sidenav is fixed in the viewport. */


        _createClass(MatSidenav, [{
          key: "fixedInViewport",
          get: function get() {
            return this._fixedInViewport;
          },
          set: function set(value) {
            this._fixedInViewport = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
          }
          /**
           * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
           * mode.
           */

        }, {
          key: "fixedTopGap",
          get: function get() {
            return this._fixedTopGap;
          },
          set: function set(value) {
            this._fixedTopGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
          }
          /**
           * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
           * fixed mode.
           */

        }, {
          key: "fixedBottomGap",
          get: function get() {
            return this._fixedBottomGap;
          },
          set: function set(value) {
            this._fixedBottomGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
          }
        }]);

        return MatSidenav;
      }(MatDrawer);

      MatSidenav.ɵfac = function MatSidenav_Factory(t) {
        return ɵMatSidenav_BaseFactory(t || MatSidenav);
      };

      MatSidenav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatSidenav,
        selectors: [["mat-sidenav"]],
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
        hostVars: 17,
        hostBindings: function MatSidenav_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
          }
        },
        inputs: {
          fixedInViewport: "fixedInViewport",
          fixedTopGap: "fixedTopGap",
          fixedBottomGap: "fixedBottomGap"
        },
        exportAs: ["matSidenav"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-drawer-inner-container"]],
        template: function MatSidenav_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2,
        data: {
          animation: [matDrawerAnimations.transformDrawer]
        },
        changeDetection: 0
      });
      MatSidenav.propDecorators = {
        fixedInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fixedTopGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fixedBottomGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ɵMatSidenav_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatSidenav);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenav, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-sidenav',
            exportAs: 'matSidenav',
            template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
            animations: [matDrawerAnimations.transformDrawer],
            host: {
              'class': 'mat-drawer mat-sidenav',
              'tabIndex': '-1',
              // must prevent the browser from aligning text based on value
              '[attr.align]': 'null',
              '[class.mat-drawer-end]': 'position === "end"',
              '[class.mat-drawer-over]': 'mode === "over"',
              '[class.mat-drawer-push]': 'mode === "push"',
              '[class.mat-drawer-side]': 'mode === "side"',
              '[class.mat-drawer-opened]': 'opened',
              '[class.mat-sidenav-fixed]': 'fixedInViewport',
              '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
              '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], null, {
          fixedInViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          fixedTopGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          fixedBottomGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var MatSidenavContainer = /*#__PURE__*/function (_MatDrawerContainer) {
        _inherits(MatSidenavContainer, _MatDrawerContainer);

        var _super4 = _createSuper(MatSidenavContainer);

        function MatSidenavContainer() {
          _classCallCheck(this, MatSidenavContainer);

          return _super4.apply(this, arguments);
        }

        return _createClass(MatSidenavContainer);
      }(MatDrawerContainer);

      MatSidenavContainer.ɵfac = function MatSidenavContainer_Factory(t) {
        return ɵMatSidenavContainer_BaseFactory(t || MatSidenavContainer);
      };

      MatSidenavContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatSidenavContainer,
        selectors: [["mat-sidenav-container"]],
        contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatSidenav, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
          }
        },
        hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
        hostVars: 2,
        hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
          }
        },
        exportAs: ["matSidenavContainer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatSidenavContainer
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 2,
        consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], ["cdkScrollable", "", 4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"], ["cdkScrollable", ""]],
        template: function MatSidenavContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._content);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatSidenavContent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]],
        styles: [_c5],
        encapsulation: 2,
        changeDetection: 0
      });
      MatSidenavContainer.propDecorators = {
        _allDrawers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatSidenav, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatSidenavContent]
        }]
      };

      var ɵMatSidenavContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatSidenavContainer);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenavContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-sidenav-container',
            exportAs: 'matSidenavContainer',
            template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-sidenav\"></ng-content>\n\n<ng-content select=\"mat-sidenav-content\">\n</ng-content>\n<mat-sidenav-content *ngIf=\"!_content\" cdkScrollable>\n  <ng-content></ng-content>\n</mat-sidenav-content>\n",
            host: {
              'class': 'mat-drawer-container mat-sidenav-container',
              '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            providers: [{
              provide: MAT_DRAWER_CONTAINER,
              useExisting: MatSidenavContainer
            }],
            styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
          }]
        }], null, {
          _allDrawers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatSidenav, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }],
          _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatSidenavContent]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSidenavModule = /*#__PURE__*/_createClass(function MatSidenavModule() {
        _classCallCheck(this, MatSidenavModule);
      });

      MatSidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatSidenavModule
      });
      MatSidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatSidenavModule_Factory(t) {
          return new (t || MatSidenavModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSidenavModule, {
          declarations: function declarations() {
            return [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenavModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
            declarations: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=sidenav.js.map

      /***/

    },

    /***/
    "pV/B":
    /*!************************************************!*\
      !*** ./src/app/shared/layout/layout.module.ts ***!
      \************************************************/

    /*! exports provided: LayoutModule */

    /***/
    function pVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
        return LayoutModule;
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


      var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout-routing.module */
      "LkUc");
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layout.component */
      "0MCZ");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./header/header.component */
      "6EaX");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./footer/footer.component */
      "r7Ig");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../utils/angular-material.module */
      "ZN+y");

      var COMPONENTS = [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]];

      var LayoutModule = /*#__PURE__*/_createClass(function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      });

      LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [].concat(COMPONENTS),
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"]],
        exports: [].concat(COMPONENTS)
      })], LayoutModule);
      /***/
    },

    /***/
    "r7Ig":
    /*!**********************************************************!*\
      !*** ./src/app/shared/layout/footer/footer.component.ts ***!
      \**********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function r7Ig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "BJ44");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.scss */
      "OzxB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shared-layout-layout-module-es5.js.map