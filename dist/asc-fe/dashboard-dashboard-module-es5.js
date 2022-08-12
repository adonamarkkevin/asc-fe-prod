(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "+dOn":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/dashboard/payment-status/payment-status.component.ts ***!
      \************************************************************************************/

    /*! exports provided: PaymentStatusComponent */

    /***/
    function dOn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentStatusComponent", function () {
        return PaymentStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var _c0 = ["noOfPaidApplications"];
      var _c1 = ["noOfUnpaidApplications"];
      var _c2 = ["noOfTotalApplications"]; // import { ChartOptions } from '../no-of-application-status/no-of-application-status.component';
      // import { ChartComponent } from 'ng-apexcharts';

      var PaymentStatusComponent = /*@__PURE__*/function () {
        var PaymentStatusComponent = /*#__PURE__*/function () {
          // @ViewChild('chart') chart: ChartComponent;
          // public chartOptions: Partial<ChartOptions>;
          function PaymentStatusComponent(animateDigitService) {
            _classCallCheck(this, PaymentStatusComponent);

            this.animateDigitService = animateDigitService;
            this.currentDate = new Date(); // temporary static value start

            this.noOfPaidApplications = Math.floor(Math.random() * 100000);
            this.noOfUnpaidApplications = Math.floor(Math.random() * 100000);
            this.previousMonthValuePaid = -12;
            this.previousMonthValueUnpaid = 17; // temporary static value end

            this.duration = 1000; // this.chartOptions = {
            //   series: [
            //     {
            //       name: 'Paid',
            //       data: [this.noOfPaidApplications],
            //       color: '#00e396'
            //     },
            //     {
            //       name: 'Unpaid',
            //       data: [this.noOfUnpaidApplications],
            //       color: '#E91E63'
            //     }
            //   ],
            //   chart: {
            //     type: 'bar',
            //     height: 110,
            //     width: 100
            //   },
            //   plotOptions: {
            //     bar: {
            //       horizontal: false,
            //       columnWidth: '50%',
            //       // endingShape: 'rounded'
            //     }
            //   },
            //   dataLabels: {
            //     enabled: false
            //   },
            //   // stroke: {
            //   //   show: true,
            //   //   width: 2,
            //   //   colors: ['transparent']
            //   // },
            //   xaxis: {
            //     categories: [
            //       ''
            //     ],
            //     labels: {
            //       show: false
            //     }
            //   },
            //   yaxis: {
            //     title: {
            //       text: ''
            //     },
            //     labels: {
            //       show: false
            //     }
            //   },
            //   fill: {
            //     opacity: 1,
            //     colors: ['#00e396', '#E91E63']
            //   }
            // };
          }

          _createClass(PaymentStatusComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.noOfTotalApplications = this.noOfPaidApplications + this.noOfUnpaidApplications;
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              if (this.noOfPaidApplications || this.noOfUnpaidApplications) {
                this.animateCount();
              }
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes['noOfPaidApplications'] || changes['noOfUnpaidApplications']) {
                this.animateCount();
              }
            }
          }, {
            key: "animateCount",
            value: function animateCount() {
              this.animateDigitService.counterFunc(this.noOfPaidApplications, this.duration, this.animateCountPaid);
              this.animateDigitService.counterFunc(this.noOfUnpaidApplications, this.duration, this.animateCountUnpaid);
              this.animateDigitService.counterFunc(this.noOfTotalApplications, this.duration, this.animateCountTotal);
            }
          }]);

          return PaymentStatusComponent;
        }();

        PaymentStatusComponent.ɵfac = function PaymentStatusComponent_Factory(t) {
          return new (t || PaymentStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AnimateDigitService"]));
        };

        PaymentStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PaymentStatusComponent,
          selectors: [["app-payment-status"]],
          viewQuery: function PaymentStatusComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animateCountPaid = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animateCountUnpaid = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animateCountTotal = _t.first);
            }
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 43,
          vars: 3,
          consts: [[1, "container"], [1, "row"], [1, "col-md-3"], [1, "mat-elevation-z5"], [1, "dashboard-card"], [1, "dashboard-card-title"], [1, "dashboard-card-value"], ["noOfPaidApplications", ""], [1, "dashboard-card-remark"], ["noOfUnpaidApplications", ""], [1, "col-md-6"], [1, "mat-elevation-z5", "card-container"], [1, "col-md-3", "total"], ["noOfTotalApplications", ""], [1, "col-md-3", "chart"]],
          template: function PaymentStatusComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Paid Applications ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Unpaid Applications ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-content", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Total Applications ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6, 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r0, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r1, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r2, " ");
            }
          },
          directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
          styles: [".container[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.paid[_ngcontent-%COMP%] {\n  grid-area: paid;\n}\n\n.unpaid[_ngcontent-%COMP%] {\n  grid-area: unpaid;\n}\n\n.total[_ngcontent-%COMP%] {\n  grid-area: total;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"total chart\";\n  padding-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvcGF5bWVudC1zdGF0dXMvcGF5bWVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2Rhc2hib2FyZC9wYXltZW50LXN0YXR1cy9wYXltZW50LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAvLyAgIGRpc3BsYXk6IGdyaWQ7XG4gIC8vICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3BhaWQgdW5wYWlkIHRvdGFsJztcbiAgLy8gICBncmlkLWdhcDogMmVtO1xuICAvLyAgIHBhZGRpbmctbGVmdDogMDtcbiAgLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICAvLyAgIC8vIHBhZGRpbmc6IDAgMTBweDtcbiAgLy8gICAvLyAgIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ucGFpZCB7XG4gIGdyaWQtYXJlYTogcGFpZDtcbn1cblxuLnVucGFpZCB7XG4gIGdyaWQtYXJlYTogdW5wYWlkO1xufVxuXG4udG90YWwge1xuICBncmlkLWFyZWE6IHRvdGFsO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndG90YWwgY2hhcnQnO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuIl19 */"]
        });
        return PaymentStatusComponent;
      }();
      /***/

    },

    /***/
    "MijW":
    /*!*************************************************************!*\
      !*** ./src/app/modules/pages/dashboard/dashboard.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function MijW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "UEiX");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "Y6K1");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _no_of_application_no_of_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./no-of-application/no-of-application.component */
      "mium");
      /* harmony import */


      var _no_of_application_status_no_of_application_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./no-of-application-status/no-of-application-status.component */
      "YmJ9");
      /* harmony import */


      var _payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./payment-status/payment-status.component */
      "+dOn");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "PCNd");

      var DashboardModule = /*@__PURE__*/function () {
        var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
          _classCallCheck(this, DashboardModule);
        });

        DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: DashboardModule
        });
        DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function DashboardModule_Factory(t) {
            return new (t || DashboardModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]]
        });
        return DashboardModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _no_of_application_no_of_application_component__WEBPACK_IMPORTED_MODULE_5__["NoOfApplicationComponent"], _no_of_application_status_no_of_application_status_component__WEBPACK_IMPORTED_MODULE_6__["NoOfApplicationStatusComponent"], _payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_7__["PaymentStatusComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "UEiX":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/pages/dashboard/dashboard-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function UEiX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component */
      "Y6K1");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }];

      var DashboardRoutingModule = /*@__PURE__*/function () {
        var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
          _classCallCheck(this, DashboardRoutingModule);
        });

        DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: DashboardRoutingModule
        });
        DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function DashboardRoutingModule_Factory(t) {
            return new (t || DashboardRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return DashboardRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Y6K1":
    /*!****************************************************************!*\
      !*** ./src/app/modules/pages/dashboard/dashboard.component.ts ***!
      \****************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Y6K1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _no_of_application_no_of_application_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./no-of-application/no-of-application.component */
      "mium");
      /* harmony import */


      var _payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payment-status/payment-status.component */
      "+dOn");
      /* harmony import */


      var _no_of_application_status_no_of_application_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./no-of-application-status/no-of-application-status.component */
      "YmJ9");

      var DashboardComponent = /*@__PURE__*/function () {
        var DashboardComponent = /*#__PURE__*/function () {
          function DashboardComponent() {
            _classCallCheck(this, DashboardComponent);
          }

          _createClass(DashboardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return DashboardComponent;
        }();

        DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
          return new (t || DashboardComponent)();
        };

        DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DashboardComponent,
          selectors: [["app-dashboard"]],
          decls: 8,
          vars: 0,
          consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "col-md-6", "payment-status"], [1, "col-md-12"]],
          template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-no-of-application");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-payment-status");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-no-of-application-status");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_no_of_application_no_of_application_component__WEBPACK_IMPORTED_MODULE_1__["NoOfApplicationComponent"], _payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_2__["PaymentStatusComponent"], _no_of_application_status_no_of_application_status_component__WEBPACK_IMPORTED_MODULE_3__["NoOfApplicationStatusComponent"]],
          styles: [".dashboard-card-title,   .dashboard-card-remark {\n  color: rgba(0, 0, 0, 0.54) !important;\n}\n  .dashboard-card-value {\n  font-size: 2em;\n}\n  .higher {\n  color: #64d590;\n}\n  .lower {\n  color: #e97e78;\n}\n  .higher,   .lower {\n  font-size: 1.2em;\n  font-weight: 500;\n}\n.payment-status[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFOztFQUVFLHFDQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0FBSko7QUFPRTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFTQTtFQUNFLGVBQUE7QUFORiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG5cbiAgLmRhc2hib2FyZC1jYXJkLXRpdGxlLFxuICAuZGFzaGJvYXJkLWNhcmQtcmVtYXJrIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRhc2hib2FyZC1jYXJkLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIC5oaWdoZXIge1xuICAgIGNvbG9yOiAjNjRkNTkwO1xuICB9XG5cbiAgLmxvd2VyIHtcbiAgICBjb2xvcjogI2U5N2U3ODtcbiAgfVxuXG4gIC5oaWdoZXIsXG4gIC5sb3dlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5wYXltZW50LXN0YXR1cyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn0iXX0= */"]
        });
        return DashboardComponent;
      }();
      /***/

    },

    /***/
    "YmJ9":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/pages/dashboard/no-of-application-status/no-of-application-status.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: NoOfApplicationStatusComponent */

    /***/
    function YmJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoOfApplicationStatusComponent", function () {
        return NoOfApplicationStatusComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN"); // export type ChartOptions = {
      //   series: ApexAxisChartSeries;
      //   chart: ApexChart;
      //   dataLabels: ApexDataLabels;
      //   plotOptions: ApexPlotOptions;
      //   yaxis: ApexYAxis;
      //   xaxis: ApexXAxis;
      //   fill: ApexFill;
      //   title: ApexTitleSubtitle;
      // };


      var NoOfApplicationStatusComponent = /*@__PURE__*/function () {
        var NoOfApplicationStatusComponent = /*#__PURE__*/function () {
          // @ViewChild('chart') chart: ChartComponent;
          // public chartOptions: Partial<ChartOptions>;
          function NoOfApplicationStatusComponent() {
            _classCallCheck(this, NoOfApplicationStatusComponent);

            this.runChart();
          }

          _createClass(NoOfApplicationStatusComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "runChart",
            value: function runChart() {//   this.chartOptions = {
              //     series: [
              //       {
              //         name: 'Applications',
              //         data: [
              //           // temporary data
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000),
              //           Math.floor(Math.random() * 100000)
              //         ]
              //       }
              //     ],
              //     chart: {
              //       height: 350,
              //       type: 'bar'
              //     },
              //     plotOptions: {
              //       bar: {
              //         dataLabels: {
              //           position: 'top' // top, center, bottom
              //         }
              //       }
              //     },
              //     dataLabels: {
              //       enabled: true,
              //       formatter: function (val) {
              //         return val + '';
              //       },
              //       offsetY: -20,
              //       style: {
              //         fontSize: '12px',
              //         colors: ['#304758']
              //       }
              //     },
              //     xaxis: {
              //       categories: [
              //         ...APPLICATION_STATUSES.map((stat) => {
              //           return stat.status.replace('_', ' ');
              //         })
              //       ],
              //       position: 'top',
              //       labels: {
              //         offsetY: -18
              //       },
              //       axisBorder: {
              //         show: false
              //       },
              //       axisTicks: {
              //         show: false
              //       },
              //       crosshairs: {
              //         fill: {
              //           type: 'gradient',
              //           gradient: {
              //             colorFrom: '#D8E3F0',
              //             colorTo: '#BED1E6',
              //             stops: [0, 100],
              //             opacityFrom: 0.4,
              //             opacityTo: 0.5
              //           }
              //         }
              //       },
              //       tooltip: {
              //         enabled: true,
              //         offsetY: -35
              //       }
              //     },
              //     fill: {
              //       type: 'gradient',
              //       gradient: {
              //         shade: 'light',
              //         type: 'horizontal',
              //         shadeIntensity: 0.25,
              //         gradientToColors: undefined,
              //         inverseColors: true,
              //         opacityFrom: 1,
              //         opacityTo: 1,
              //         stops: [0, 50, 75, 100]
              //       }
              //     },
              //     yaxis: {
              //       axisBorder: {
              //         show: false
              //       },
              //       axisTicks: {
              //         show: false
              //       },
              //       labels: {
              //         show: false,
              //         formatter: function (val) {
              //           // return val;
              //           return val + '';
              //         }
              //       }
              //     },
              //     title: {
              //       text: '_',
              //       offsetY: 320,
              //       align: 'center',
              //       style: {
              //         color: '#FFF'
              //       }
              //     }
              //   };
            }
          }]);

          return NoOfApplicationStatusComponent;
        }();

        NoOfApplicationStatusComponent.ɵfac = function NoOfApplicationStatusComponent_Factory(t) {
          return new (t || NoOfApplicationStatusComponent)();
        };

        NoOfApplicationStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NoOfApplicationStatusComponent,
          selectors: [["app-no-of-application-status"]],
          decls: 9,
          vars: 0,
          consts: [[1, "container"], [1, "row"], [1, "col-md-12", "title"]],
          template: function NoOfApplicationStatusComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "assessment");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Application Status ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
          styles: ["form[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 1.75em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvbm8tb2YtYXBwbGljYXRpb24tc3RhdHVzL25vLW9mLWFwcGxpY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvbm8tb2YtYXBwbGljYXRpb24tc3RhdHVzL25vLW9mLWFwcGxpY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEuNzVlbSAhaW1wb3J0YW50O1xufSJdfQ== */"]
        });
        return NoOfApplicationStatusComponent;
      }();
      /***/

    },

    /***/
    "mium":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/pages/dashboard/no-of-application/no-of-application.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: NoOfApplicationComponent */

    /***/
    function mium(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoOfApplicationComponent", function () {
        return NoOfApplicationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["noOfS1Applications"];
      var _c1 = ["noOfS2Applications"];

      var NoOfApplicationComponent = /*@__PURE__*/function () {
        var NoOfApplicationComponent = /*#__PURE__*/function () {
          function NoOfApplicationComponent(animateDigitService) {
            _classCallCheck(this, NoOfApplicationComponent);

            this.animateDigitService = animateDigitService; // temporary static value start

            this.noOfS1Applications = Math.floor(Math.random() * 100000);
            this.noOfS2Applications = Math.floor(Math.random() * 100000);
            this.previousMonthValueS1 = Math.ceil(Math.random() * 100) * (Math.round(Math.random()) ? 1 : -1);
            this.previousMonthValueS2 = Math.ceil(Math.random() * 100) * (Math.round(Math.random()) ? 1 : -1); // temporary static value end

            this.duration = 1000;
            this.steps = 12;
          }

          _createClass(NoOfApplicationComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              if (this.noOfS1Applications || this.noOfS2Applications) {
                this.animateCount();
              }
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes["noOfS1Applications"] || changes["noOfS2Applications"]) {
                this.animateCount();
              }
            }
          }, {
            key: "animateCount",
            value: function animateCount() {
              this.animateDigitService.counterFunc(this.noOfS1Applications, this.duration, this.animateCountS1);
              this.animateDigitService.counterFunc(this.noOfS2Applications, this.duration, this.animateCountS2);
            }
          }]);

          return NoOfApplicationComponent;
        }();

        NoOfApplicationComponent.ɵfac = function NoOfApplicationComponent_Factory(t) {
          return new (t || NoOfApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AnimateDigitService"]));
        };

        NoOfApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NoOfApplicationComponent,
          selectors: [["app-no-of-application"]],
          viewQuery: function NoOfApplicationComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animateCountS1 = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animateCountS2 = _t.first);
            }
          },
          inputs: {
            steps: "steps"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 36,
          vars: 6,
          consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "mat-elevation-z5"], [1, "dashboard-card"], [1, "dashboard-card-title"], [1, "dashboard-card-value"], ["noOfS1Applications", ""], [1, "dashboard-card-remark"], [3, "ngClass"], ["noOfS2Applications", ""]],
          template: function NoOfApplicationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " S1 Applications ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Since last month ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " S2 Applications ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Since last month ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r0, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.previousMonthValueS1 >= 0 ? "higher" : "lower");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.previousMonthValueS1 + "%", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r1, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.previousMonthValueS2 >= 0 ? "higher" : "lower");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.previousMonthValueS2 + "%", " ");
            }
          },
          directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaGJvYXJkL25vLW9mLWFwcGxpY2F0aW9uL25vLW9mLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
        });
        return NoOfApplicationComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map