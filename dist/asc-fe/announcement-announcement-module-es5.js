(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-announcement-module"], {
    /***/
    "7SPu":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pages/announcement/announcement.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AnnouncementModule */

    /***/
    function SPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementModule", function () {
        return AnnouncementModule;
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


      var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./announcement-routing.module */
      "WzRN");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _announcement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./announcement.component */
      "TYrq");

      var AnnouncementModule = /*#__PURE__*/_createClass(function AnnouncementModule() {
        _classCallCheck(this, AnnouncementModule);
      });

      AnnouncementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_announcement_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _announcement_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnouncementRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]]
      })], AnnouncementModule);
      /***/
    },

    /***/
    "ARQH":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/announcement/announcement.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ARQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>announcement</mat-icon> Announcements\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"announcement-content\" *ngFor=\"let announcement of announcementListFilter\">\r\n\r\n      <div class=\"announcement-title\">\r\n        <h3>\r\n          <span class=\"material-icons\">campaign</span><a [href]=\"announcement?.link\" (click)=\"countView(announcement);\" target=\"_blank\">{{announcement?.title}}</a>\r\n          <p><span class=\"material-icons\">event_available</span>{{announcement.postingDate| date:'fullDate'}}</p>\r\n          <p><span class=\"material-icons\">visibility</span> {{announcement.counter}}&nbsp;&nbsp;&nbsp; <label style=\"color: black; font-weight: 800;\">|</label> &nbsp;&nbsp;&nbsp;</p> \r\n        </h3>\r\n      </div>\r\n      <div class=\"announcement-details\">\r\n        <p>{{announcement?.details}}</p>\r\n      </div>\r\n\r\n      <div class=\"link-content\">\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"no-announcements\" *ngIf=\"announcementList.length==0\">No announcements.</div>\r\n\r\n\r\n    <hr>\r\n    <mat-paginator \r\n              (page)=\"onPageChange($event)\"\r\n              [length]=\"announcementListFilter.length\"\r\n              [pageSize]=\"5\"\r\n              [pageSizeOptions]=\"[5, 10, 25]\">\r\n</mat-paginator>\r\n  </div>\r\n \r\n\r\n<!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\r\n</form>\r\n";
      /***/
    },

    /***/
    "TYrq":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/pages/announcement/announcement.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AnnouncementComponent */

    /***/
    function TYrq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function () {
        return AnnouncementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_announcement_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./announcement.component.html */
      "ARQH");
      /* harmony import */


      var _announcement_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./announcement.component.scss */
      "dBfk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/core/models/announcement.model */
      "dszm");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var AnnouncementComponent = /*#__PURE__*/function () {
        function AnnouncementComponent(apiService, spinner) {
          _classCallCheck(this, AnnouncementComponent);

          this.apiService = apiService;
          this.spinner = spinner;
          this.announcement = new app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_7__["Announcement"]();
          this.announcementList = [];
          this.announcementListFilter = [];
          this.viewCounter = 0;
        }

        _createClass(AnnouncementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAnnouncementList();
          }
        }, {
          key: "getAnnouncementList",
          value: function getAnnouncementList() {
            var _this = this;

            this.spinner.show();
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].activeAnnouncements).subscribe(function (res) {
              if (res.data) {
                _this.announcement = res.data;
                _this.announcementList = res.data;
                _this.announcementListFilter = _this.announcementList.slice(0 * 5, 0 * 5 + 5);
                setTimeout(function () {
                  _this.spinner.hide();
                }, 1);
              }
            });
          }
        }, {
          key: "countView",
          value: function countView(data) {
            this.announcement = data;
            data.counter++;
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].announcements, this.announcement).subscribe(function (res) {});
          }
        }, {
          key: "onPageChange",
          value: function onPageChange($event) {
            this.announcementListFilter = this.announcementList.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
          }
        }]);

        return AnnouncementComponent;
      }();

      AnnouncementComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
        }];
      };

      AnnouncementComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
            "static": false
          }]
        }]
      };
      AnnouncementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-announcement',
        template: _raw_loader_announcement_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_announcement_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AnnouncementComponent);
      /***/
    },

    /***/
    "WzRN":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/announcement/announcement-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AnnouncementRoutingModule */

    /***/
    function WzRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementRoutingModule", function () {
        return AnnouncementRoutingModule;
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


      var _announcement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./announcement.component */
      "TYrq");

      var routes = [{
        path: '',
        component: _announcement_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementComponent"]
      }];

      var AnnouncementRoutingModule = /*#__PURE__*/_createClass(function AnnouncementRoutingModule() {
        _classCallCheck(this, AnnouncementRoutingModule);
      });

      AnnouncementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnnouncementRoutingModule);
      /***/
    },

    /***/
    "dBfk":
    /*!************************************************************************!*\
      !*** ./src/app/modules/pages/announcement/announcement.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function dBfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".announcement-content {\n  border-radius: 10px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  background: #fff3f3;\n  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;\n  margin: 15px 0px;\n}\n.announcement-content .material-icons {\n  padding-right: 10px;\n}\n.announcement-content .announcement-title h3 {\n  font-weight: 700;\n}\n.announcement-content .announcement-title p {\n  float: right;\n  margin: auto;\n  font-weight: 600;\n  font-size: 12px;\n  vertical-align: middle;\n  color: green;\n}\n.announcement-content .announcement-title p .material-icons {\n  font-size: 15px;\n  padding-right: 10px;\n}\n.announcement-content span {\n  color: #910000;\n  font-size: 50px;\n}\n.no-announcements {\n  color: gray;\n  font-style: italic;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3REFBQTtFQUVBLGdCQUFBO0FBQUo7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFHTztFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRFg7QUFFVztFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFmO0FBS0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhSO0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFubm91bmNlbWVudC1jb250ZW50e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYzZjM7XHJcbiAgICBib3gtc2hhZG93OiAgNXB4IDVweCAxMHB4ICNiNWI1YjUsXHJcbiAgICAgICAgICAgICAgICAtNXB4IC01cHggMTBweCAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmFubm91bmNlbWVudC10aXRsZXtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgcHtcclxuICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ1LCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uby1hbm5vdW5jZW1lbnRzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "dszm":
    /*!***************************************************!*\
      !*** ./src/app/core/models/announcement.model.ts ***!
      \***************************************************/

    /*! exports provided: Announcement */

    /***/
    function dszm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Announcement", function () {
        return Announcement;
      });

      var Announcement = /*#__PURE__*/_createClass(function Announcement() {
        _classCallCheck(this, Announcement);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=announcement-announcement-module-es5.js.map