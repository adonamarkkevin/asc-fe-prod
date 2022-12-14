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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./announcement-routing.module */
      "WzRN");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _announcement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./announcement.component */
      "TYrq");

      var AnnouncementModule = /*@__PURE__*/function () {
        var AnnouncementModule = /*#__PURE__*/_createClass(function AnnouncementModule() {
          _classCallCheck(this, AnnouncementModule);
        });

        AnnouncementModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AnnouncementModule
        });
        AnnouncementModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AnnouncementModule_Factory(t) {
            return new (t || AnnouncementModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _announcement_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnnouncementRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]]]
        });
        return AnnouncementModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AnnouncementModule, {
          declarations: [_announcement_component__WEBPACK_IMPORTED_MODULE_4__["AnnouncementComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _announcement_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnnouncementRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]]
        });
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/core/models/announcement.model */
      "dszm");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AnnouncementComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "campaign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnnouncementComponent_div_9_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var announcement_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.countView(announcement_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "event_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var announcement_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", announcement_r2 == null ? null : announcement_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](announcement_r2 == null ? null : announcement_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 5, announcement_r2.postingDate, "fullDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", announcement_r2.counter, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](announcement_r2 == null ? null : announcement_r2.details);
        }
      }

      function AnnouncementComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "No announcements.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25];
      };

      var AnnouncementComponent = /*@__PURE__*/function () {
        var AnnouncementComponent = /*#__PURE__*/function () {
          function AnnouncementComponent(apiService, spinner) {
            _classCallCheck(this, AnnouncementComponent);

            this.apiService = apiService;
            this.spinner = spinner;
            this.announcement = new app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_3__["Announcement"]();
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
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].activeAnnouncements).subscribe(function (res) {
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
              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].announcements, this.announcement).subscribe(function (res) {});
            }
          }, {
            key: "onPageChange",
            value: function onPageChange($event) {
              this.announcementListFilter = this.announcementList.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
            }
          }]);

          return AnnouncementComponent;
        }();

        AnnouncementComponent.??fac = function AnnouncementComponent_Factory(t) {
          return new (t || AnnouncementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]));
        };

        AnnouncementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: AnnouncementComponent,
          selectors: [["app-announcement"]],
          viewQuery: function AnnouncementComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
            }
          },
          decls: 13,
          vars: 6,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], ["class", "announcement-content", 4, "ngFor", "ngForOf"], ["class", "no-announcements", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "announcement-content"], [1, "announcement-title"], [1, "material-icons"], ["target", "_blank", 3, "href", "click"], [2, "color", "black", "font-weight", "800"], [1, "announcement-details"], [1, "link-content"], [1, "no-announcements"]],
          template: function AnnouncementComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "announcement");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Announcements ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AnnouncementComponent_div_9_Template, 23, 8, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, AnnouncementComponent_div_10_Template, 2, 0, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-paginator", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function AnnouncementComponent_Template_mat_paginator_page_12_listener($event) {
                return ctx.onPageChange($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.announcementListFilter);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.announcementList.length == 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("length", ctx.announcementListFilter.length)("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
          styles: [".announcement-content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  background: #fff3f3;\n  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;\n  margin: 15px 0px;\n}\n.announcement-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  margin: auto;\n  font-weight: 600;\n  font-size: 12px;\n  vertical-align: middle;\n  color: green;\n}\n.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-right: 10px;\n}\n.announcement-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #910000;\n  font-size: 50px;\n}\n.no-announcements[_ngcontent-%COMP%] {\n  color: gray;\n  font-style: italic;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3REFBQTtFQUVBLGdCQUFBO0FBQUo7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFHTztFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRFg7QUFFVztFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFmO0FBS0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhSO0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFubm91bmNlbWVudC1jb250ZW50e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYzZjM7XHJcbiAgICBib3gtc2hhZG93OiAgNXB4IDVweCAxMHB4ICNiNWI1YjUsXHJcbiAgICAgICAgICAgICAgICAtNXB4IC01cHggMTBweCAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmFubm91bmNlbWVudC10aXRsZXtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgcHtcclxuICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ1LCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uby1hbm5vdW5jZW1lbnRzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"]
        });
        return AnnouncementComponent;
      }();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _announcement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./announcement.component */
      "TYrq");

      var routes = [{
        path: '',
        component: _announcement_component__WEBPACK_IMPORTED_MODULE_2__["AnnouncementComponent"]
      }];

      var AnnouncementRoutingModule = /*@__PURE__*/function () {
        var AnnouncementRoutingModule = /*#__PURE__*/_createClass(function AnnouncementRoutingModule() {
          _classCallCheck(this, AnnouncementRoutingModule);
        });

        AnnouncementRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: AnnouncementRoutingModule
        });
        AnnouncementRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function AnnouncementRoutingModule_Factory(t) {
            return new (t || AnnouncementRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AnnouncementRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AnnouncementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
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