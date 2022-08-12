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

        AnnouncementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AnnouncementModule
        });
        AnnouncementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AnnouncementModule_Factory(t) {
            return new (t || AnnouncementModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _announcement_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnnouncementRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]]]
        });
        return AnnouncementModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnnouncementModule, {
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
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "campaign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnnouncementComponent_div_9_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var announcement_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.countView(announcement_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "event_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var announcement_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", announcement_r2 == null ? null : announcement_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r2 == null ? null : announcement_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, announcement_r2.postingDate, "fullDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", announcement_r2.counter, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r2 == null ? null : announcement_r2.details);
        }
      }

      function AnnouncementComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No announcements.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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

        AnnouncementComponent.ɵfac = function AnnouncementComponent_Factory(t) {
          return new (t || AnnouncementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]));
        };

        AnnouncementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AnnouncementComponent,
          selectors: [["app-announcement"]],
          viewQuery: function AnnouncementComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            }
          },
          decls: 13,
          vars: 6,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], ["class", "announcement-content", 4, "ngFor", "ngForOf"], ["class", "no-announcements", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "announcement-content"], [1, "announcement-title"], [1, "material-icons"], ["target", "_blank", 3, "href", "click"], [2, "color", "black", "font-weight", "800"], [1, "announcement-details"], [1, "link-content"], [1, "no-announcements"]],
          template: function AnnouncementComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "announcement");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Announcements ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnnouncementComponent_div_9_Template, 23, 8, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnnouncementComponent_div_10_Template, 2, 0, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-paginator", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AnnouncementComponent_Template_mat_paginator_page_12_listener($event) {
                return ctx.onPageChange($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcementListFilter);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.announcementList.length == 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.announcementListFilter.length)("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
          styles: [".announcement-content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  background: #fff3f3;\n  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;\n  margin: 15px 0px;\n}\n.announcement-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  margin: auto;\n  font-weight: 600;\n  font-size: 12px;\n  vertical-align: middle;\n  color: green;\n}\n.announcement-content[_ngcontent-%COMP%]   .announcement-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-right: 10px;\n}\n.announcement-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #910000;\n  font-size: 50px;\n}\n.no-announcements[_ngcontent-%COMP%] {\n  color: gray;\n  font-style: italic;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3REFBQTtFQUVBLGdCQUFBO0FBQUo7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFHTztFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRFg7QUFFVztFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFmO0FBS0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhSO0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFubm91bmNlbWVudC1jb250ZW50e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmM2YzO1xuICAgIGJveC1zaGFkb3c6ICA1cHggNXB4IDEwcHggI2I1YjViNSxcbiAgICAgICAgICAgICAgICAtNXB4IC01cHggMTBweCAjZmZmZmZmO1xuICAgIG1hcmdpbjogMTVweCAwcHg7XG4gICAgLm1hdGVyaWFsLWljb25ze1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuYW5ub3VuY2VtZW50LXRpdGxle1xuICAgICAgICBoM3tcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgIHB7XG4gICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgLm1hdGVyaWFsLWljb25ze1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogcmdiKDE0NSwgMCwgMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG59XG5cbi5uby1hbm5vdW5jZW1lbnRzIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"]
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

        AnnouncementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AnnouncementRoutingModule
        });
        AnnouncementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AnnouncementRoutingModule_Factory(t) {
            return new (t || AnnouncementRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AnnouncementRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnnouncementRoutingModule, {
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