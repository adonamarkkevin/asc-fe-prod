(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "+dOn":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/payment-status/payment-status.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentStatusComponent", function() { return PaymentStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-status.component.html */ "XZB5");
/* harmony import */ var _payment_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-status.component.scss */ "/67x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "dJ3e");





// import { ChartOptions } from '../no-of-application-status/no-of-application-status.component';
// import { ChartComponent } from 'ng-apexcharts';
let PaymentStatusComponent = class PaymentStatusComponent {
    // @ViewChild('chart') chart: ChartComponent;
    // public chartOptions: Partial<ChartOptions>;
    constructor(animateDigitService) {
        this.animateDigitService = animateDigitService;
        this.currentDate = new Date();
        // temporary static value start
        this.noOfPaidApplications = Math.floor(Math.random() * 100000);
        this.noOfUnpaidApplications = Math.floor(Math.random() * 100000);
        this.previousMonthValuePaid = -12;
        this.previousMonthValueUnpaid = 17;
        // temporary static value end
        this.duration = 1000;
        // this.chartOptions = {
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
    ngOnInit() {
        this.noOfTotalApplications = this.noOfPaidApplications + this.noOfUnpaidApplications;
    }
    ngAfterViewInit() {
        if (this.noOfPaidApplications || this.noOfUnpaidApplications) {
            this.animateCount();
        }
    }
    ngOnChanges(changes) {
        if (changes['noOfPaidApplications'] || changes['noOfUnpaidApplications']) {
            this.animateCount();
        }
    }
    animateCount() {
        this.animateDigitService.counterFunc(this.noOfPaidApplications, this.duration, this.animateCountPaid);
        this.animateDigitService.counterFunc(this.noOfUnpaidApplications, this.duration, this.animateCountUnpaid);
        this.animateDigitService.counterFunc(this.noOfTotalApplications, this.duration, this.animateCountTotal);
    }
};
PaymentStatusComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AnimateDigitService"] }
];
PaymentStatusComponent.propDecorators = {
    animateCountPaid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['noOfPaidApplications',] }],
    animateCountUnpaid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['noOfUnpaidApplications',] }],
    animateCountTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['noOfTotalApplications',] }]
};
PaymentStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-status',
        template: _raw_loader_payment_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentStatusComponent);



/***/ }),

/***/ "/67x":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/payment-status/payment-status.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-left: 0;\n}\n\n.paid {\n  grid-area: paid;\n}\n\n.unpaid {\n  grid-area: unpaid;\n}\n\n.total {\n  grid-area: total;\n}\n\n.card-container {\n  display: grid;\n  grid-template-areas: \"total chart\";\n  padding-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvcGF5bWVudC1zdGF0dXMvcGF5bWVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2Rhc2hib2FyZC9wYXltZW50LXN0YXR1cy9wYXltZW50LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIC8vICAgZGlzcGxheTogZ3JpZDtcclxuICAvLyAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYWlkIHVucGFpZCB0b3RhbCc7XHJcbiAgLy8gICBncmlkLWdhcDogMmVtO1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIC8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICAvLyAgIC8vIHBhZGRpbmc6IDAgMTBweDtcclxuICAvLyAgIC8vICAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnBhaWQge1xyXG4gIGdyaWQtYXJlYTogcGFpZDtcclxufVxyXG5cclxuLnVucGFpZCB7XHJcbiAgZ3JpZC1hcmVhOiB1bnBhaWQ7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgZ3JpZC1hcmVhOiB0b3RhbDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0b3RhbCBjaGFydCc7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "8I/T":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .dashboard-card-title,\n::ng-deep .dashboard-card-remark {\n  color: rgba(0, 0, 0, 0.54) !important;\n}\n::ng-deep .dashboard-card-value {\n  font-size: 2em;\n}\n::ng-deep .higher {\n  color: #64d590;\n}\n::ng-deep .lower {\n  color: #e97e78;\n}\n::ng-deep .higher,\n::ng-deep .lower {\n  font-size: 1.2em;\n  font-weight: 500;\n}\n.payment-status {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFOztFQUVFLHFDQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0FBSko7QUFPRTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFTQTtFQUNFLGVBQUE7QUFORiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcblxyXG4gIC5kYXNoYm9hcmQtY2FyZC10aXRsZSxcclxuICAuZGFzaGJvYXJkLWNhcmQtcmVtYXJrIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWNhcmQtdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICAuaGlnaGVyIHtcclxuICAgIGNvbG9yOiAjNjRkNTkwO1xyXG4gIH1cclxuXHJcbiAgLmxvd2VyIHtcclxuICAgIGNvbG9yOiAjZTk3ZTc4O1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hlcixcclxuICAubG93ZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGF5bWVudC1zdGF0dXMge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "Bn2E":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/no-of-application/no-of-application.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <mat-card class=\"mat-elevation-z5\">\r\n        <mat-card-content class=\"dashboard-card\">\r\n          <span class=\"dashboard-card-title\">\r\n            S1 Applications\r\n          </span>\r\n          <br><br>\r\n          <div #noOfS1Applications class=\"dashboard-card-value\">\r\n            <span class=\"dashboard-card-value\">\r\n              {{ noOfS1Applications }}\r\n            </span>\r\n        </div>\r\n        <br><br>\r\n        <span class=\"dashboard-card-remark\">\r\n            <span [ngClass]=\"previousMonthValueS1 >= 0 ? 'higher' : 'lower'\">{{ previousMonthValueS1 + '%' }} </span>\r\n            Since last month\r\n          </span>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <mat-card class=\"mat-elevation-z5\">\r\n        <mat-card-content class=\"dashboard-card\">\r\n          <span class=\"dashboard-card-title\">\r\n            S2 Applications\r\n          </span>\r\n          <br><br>\r\n          <div #noOfS2Applications class=\"dashboard-card-value\">\r\n            <span>\r\n              {{ noOfS2Applications }}\r\n            </span>\r\n          </div>\r\n          <br><br>\r\n          <span class=\"dashboard-card-remark\">\r\n            <span [ngClass]=\"previousMonthValueS2 >= 0 ? 'higher' : 'lower'\">{{ previousMonthValueS2 + '%' }} </span>\r\n            Since last month\r\n          </span>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "K6nR":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/no-of-application-status/no-of-application-status.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>assessment</mat-icon> Application Status\r\n        </mat-label>\r\n        <hr>\r\n      </div>\r\n      <!-- <div class=\"col-md-12\">\r\n        <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [dataLabels]=\"chartOptions.dataLabels\"\r\n          [plotOptions]=\"chartOptions.plotOptions\" [yaxis]=\"chartOptions.yaxis\" [xaxis]=\"chartOptions.xaxis\"\r\n          [fill]=\"chartOptions.fill\" [title]=\"chartOptions.title\"></apx-chart>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "MijW":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "UEiX");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "Y6K1");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _no_of_application_no_of_application_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-of-application/no-of-application.component */ "mium");
/* harmony import */ var _no_of_application_status_no_of_application_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./no-of-application-status/no-of-application-status.component */ "YmJ9");
/* harmony import */ var _payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-status/payment-status.component */ "+dOn");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");










let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            _no_of_application_no_of_application_component__WEBPACK_IMPORTED_MODULE_6__["NoOfApplicationComponent"],
            _no_of_application_status_no_of_application_status_component__WEBPACK_IMPORTED_MODULE_7__["NoOfApplicationStatusComponent"],
            _payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_8__["PaymentStatusComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ]
    })
], DashboardModule);



/***/ }),

/***/ "UEiX":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/dashboard-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "Y6K1");




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "VZX+":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/no-of-application-status/no-of-application-status.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  max-width: 100%;\n  margin: 1.75em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvbm8tb2YtYXBwbGljYXRpb24tc3RhdHVzL25vLW9mLWFwcGxpY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kYXNoYm9hcmQvbm8tb2YtYXBwbGljYXRpb24tc3RhdHVzL25vLW9mLWFwcGxpY2F0aW9uLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxLjc1ZW0gIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "WNwr":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <app-no-of-application></app-no-of-application>\r\n    </div>\r\n    <div class=\"col-md-6 payment-status\">\r\n      <app-payment-status></app-payment-status>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <app-no-of-application-status></app-no-of-application-status>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "XZB5":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/payment-status/payment-status.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <mat-card class=\"mat-elevation-z5\">\r\n        <mat-card-content class=\"dashboard-card\">\r\n          <span class=\"dashboard-card-title\">\r\n            Paid Applications\r\n          </span>\r\n          <br><br>\r\n          <div #noOfPaidApplications class=\"dashboard-card-value\">\r\n            <span class=\"dashboard-card-value\">\r\n              {{ noOfPaidApplications }}\r\n            </span>\r\n          </div>\r\n          <br><br>\r\n          <span class=\"dashboard-card-remark\">\r\n            <!-- <span [ngClass]=\"previousMonthValuePaid >= 0 ? 'higher' : 'lower'\">{{ previousMonthValuePaid + '%' }} </span> -->\r\n            <!-- Since last month -->\r\n          </span>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <mat-card class=\"mat-elevation-z5\">\r\n        <mat-card-content class=\"dashboard-card\">\r\n          <span class=\"dashboard-card-title\">\r\n            Unpaid Applications\r\n          </span>\r\n          <br><br>\r\n          <div #noOfUnpaidApplications class=\"dashboard-card-value\">\r\n            <span>\r\n              {{ noOfUnpaidApplications }}\r\n            </span>\r\n          </div>\r\n          <br><br>\r\n          <span class=\"dashboard-card-remark\">\r\n            <!-- <span [ngClass]=\"previousMonthValueUnpaid >= 0 ? 'higher' : 'lower'\">{{ previousMonthValueUnpaid + '%' }} </span> -->\r\n            <!-- Since last month -->\r\n          </span>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <mat-card class=\"mat-elevation-z5 card-container\">\r\n        <div class=\"col-md-3 total\">\r\n          <mat-card-content class=\"dashboard-card\">\r\n            <span class=\"dashboard-card-title\">\r\n              Total Applications\r\n            </span>\r\n            <br><br>\r\n            <div #noOfTotalApplications class=\"dashboard-card-value\">\r\n              <span>\r\n                {{ noOfTotalApplications }}\r\n              </span>\r\n            </div>\r\n          </mat-card-content>\r\n        </div>\r\n        <div class=\"col-md-3 chart\">\r\n          <!-- <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [dataLabels]=\"chartOptions.dataLabels\"\r\n            [plotOptions]=\"chartOptions.plotOptions\" [yaxis]=\"chartOptions.yaxis\"\r\n            [fill]=\"chartOptions.fill\"\r\n            [xaxis]=\"chartOptions.xaxis\"></apx-chart> -->\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Y6K1":
/*!****************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "WNwr");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "8I/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);



/***/ }),

/***/ "YmJ9":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/no-of-application-status/no-of-application-status.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: NoOfApplicationStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOfApplicationStatusComponent", function() { return NoOfApplicationStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_no_of_application_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./no-of-application-status.component.html */ "K6nR");
/* harmony import */ var _no_of_application_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-of-application-status.component.scss */ "VZX+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   yaxis: ApexYAxis;
//   xaxis: ApexXAxis;
//   fill: ApexFill;
//   title: ApexTitleSubtitle;
// };
let NoOfApplicationStatusComponent = class NoOfApplicationStatusComponent {
    // @ViewChild('chart') chart: ChartComponent;
    // public chartOptions: Partial<ChartOptions>;
    constructor() {
        this.runChart();
    }
    ngOnInit() {
    }
    runChart() {
        //   this.chartOptions = {
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
};
NoOfApplicationStatusComponent.ctorParameters = () => [];
NoOfApplicationStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-no-of-application-status',
        template: _raw_loader_no_of_application_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_no_of_application_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoOfApplicationStatusComponent);



/***/ }),

/***/ "e2Gx":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/no-of-application/no-of-application.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaGJvYXJkL25vLW9mLWFwcGxpY2F0aW9uL25vLW9mLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "mium":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/no-of-application/no-of-application.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NoOfApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOfApplicationComponent", function() { return NoOfApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_no_of_application_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./no-of-application.component.html */ "Bn2E");
/* harmony import */ var _no_of_application_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-of-application.component.scss */ "e2Gx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "dJ3e");





let NoOfApplicationComponent = class NoOfApplicationComponent {
    constructor(animateDigitService) {
        this.animateDigitService = animateDigitService;
        // temporary static value start
        this.noOfS1Applications = Math.floor(Math.random() * 100000);
        this.noOfS2Applications = Math.floor(Math.random() * 100000);
        this.previousMonthValueS1 = Math.ceil(Math.random() * 100) * (Math.round(Math.random()) ? 1 : -1);
        this.previousMonthValueS2 = Math.ceil(Math.random() * 100) * (Math.round(Math.random()) ? 1 : -1);
        // temporary static value end
        this.duration = 1000;
        this.steps = 12;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.noOfS1Applications || this.noOfS2Applications) {
            this.animateCount();
        }
    }
    ngOnChanges(changes) {
        if (changes["noOfS1Applications"] || changes["noOfS2Applications"]) {
            this.animateCount();
        }
    }
    animateCount() {
        this.animateDigitService.counterFunc(this.noOfS1Applications, this.duration, this.animateCountS1);
        this.animateDigitService.counterFunc(this.noOfS2Applications, this.duration, this.animateCountS2);
    }
};
NoOfApplicationComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AnimateDigitService"] }
];
NoOfApplicationComponent.propDecorators = {
    steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    animateCountS1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["noOfS1Applications",] }],
    animateCountS2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["noOfS2Applications",] }]
};
NoOfApplicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-no-of-application',
        template: _raw_loader_no_of_application_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_no_of_application_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoOfApplicationComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map