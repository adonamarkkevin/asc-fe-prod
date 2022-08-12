(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "gxz3":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "ic0y");





const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    }
];
let ReportsRoutingModule = /*@__PURE__*/ (() => {
    class ReportsRoutingModule {
    }
    ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
    ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ReportsRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "ic0y":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/models/payment-method.model */ "piSE");
/* harmony import */ var app_core_models_report_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/models/report.model */ "za27");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function ReportsComponent_div_7_mat_option_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_7_mat_option_22_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.setReportType(i_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10.name, " ");
    }
}
function ReportsComponent_div_7_mat_form_field_23_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_7_mat_form_field_23_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.setPaymentType(i_r14.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r14 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r14.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r14.paymentDescription, " ");
    }
}
function ReportsComponent_div_7_mat_form_field_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_7_mat_form_field_23_mat_option_4_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.paymentTypeList);
    }
}
function ReportsComponent_div_7_mat_form_field_24_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const company_r18 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r18.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r18.companyName, " ");
    }
}
function ReportsComponent_div_7_mat_form_field_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_7_mat_form_field_24_mat_option_4_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.activeCompanyList);
    }
}
function ReportsComponent_div_7_mat_form_field_25_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const applicant_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", applicant_r20.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", applicant_r20.name, " ");
    }
}
function ReportsComponent_div_7_mat_form_field_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Applicant:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_7_mat_form_field_25_mat_option_4_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.applicants);
    }
}
function ReportsComponent_div_7_mat_form_field_26_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const screener_r22 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", screener_r22.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", screener_r22.name, " ");
    }
}
function ReportsComponent_div_7_mat_form_field_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Screener:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_7_mat_form_field_26_mat_option_4_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.screeners);
    }
}
function ReportsComponent_div_7_mat_form_field_27_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const medium_r24 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", medium_r24.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", medium_r24 == null ? null : medium_r24.description, " ");
    }
}
function ReportsComponent_div_7_mat_form_field_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mediums:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_7_mat_form_field_27_mat_option_4_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.typeOfMediums);
    }
}
function ReportsComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date Start:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.dateFrome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_7_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.dateTo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker", 8, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Report Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_7_Template_mat_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.reportType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReportsComponent_div_7_mat_option_22_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportsComponent_div_7_mat_form_field_23_Template, 5, 1, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReportsComponent_div_7_mat_form_field_24_Template, 5, 1, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReportsComponent_div_7_mat_form_field_25_Template, 5, 1, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportsComponent_div_7_mat_form_field_26_Template, 5, 1, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReportsComponent_div_7_mat_form_field_27_Template, 5, 1, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_7_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.generateReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "task_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " GENERATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx_r0.dateFrome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3)("ngModel", ctx_r0.dateTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.reportType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reportTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedReportType !== ctx_r0.reportTypes.VAT_SUMMARY && ctx_r0.selectedReportType !== ctx_r0.reportTypes.TAX_SUMMARY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedReportType === ctx_r0.reportTypes.COLLECTION_REPORT || ctx_r0.selectedReportType === ctx_r0.reportTypes.REPORT_PER_COMPANY || ctx_r0.selectedReportType === ctx_r0.reportTypes.REPORT_PER_AGENCY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedReportType === ctx_r0.reportTypes.COLLECTION_REPORT || ctx_r0.selectedReportType === ctx_r0.reportTypes.REPORT_PER_APPLICANT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedReportType === ctx_r0.reportTypes.COLLECTION_REPORT || ctx_r0.selectedReportType === ctx_r0.reportTypes.REPORT_PER_SCREENER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedReportType === ctx_r0.reportTypes.REPORT_PER_MEDIUM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx_r0.reportForm.controls["dateFrom"] == null ? null : ctx_r0.reportForm.controls["dateFrom"].errors == null ? null : ctx_r0.reportForm.controls["dateFrom"].errors.required) || (ctx_r0.reportForm.controls["dateTo"] == null ? null : ctx_r0.reportForm.controls["dateTo"].errors == null ? null : ctx_r0.reportForm.controls["dateTo"].errors.required) || (ctx_r0.reportForm.controls["reportType"] == null ? null : ctx_r0.reportForm.controls["reportType"].errors == null ? null : ctx_r0.reportForm.controls["reportType"].errors.required) || !ctx_r0.isPaymentTypeRequired);
    }
}
function ReportsComponent_div_8_mat_option_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_8_mat_option_21_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const i_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.setReportType(i_r33.filename); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r33 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r33.filename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r33.name, " ");
    }
}
function ReportsComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date Start:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_8_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.dateFrome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_8_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.dateTo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker", 8, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Report Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_8_Template_mat_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.reportType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReportsComponent_div_8_mat_option_21_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_div_8_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.generateReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "task_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " GENERATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.newReportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r30)("ngModel", ctx_r1.dateFrome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r31)("ngModel", ctx_r1.dateTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.reportType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.newReportTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx_r1.newReportForm.controls["dateFrom"] == null ? null : ctx_r1.newReportForm.controls["dateFrom"].errors == null ? null : ctx_r1.newReportForm.controls["dateFrom"].errors.required) || (ctx_r1.newReportForm.controls["reportType"] == null ? null : ctx_r1.newReportForm.controls["reportType"].errors == null ? null : ctx_r1.newReportForm.controls["reportType"].errors.required));
    }
}
let ReportsComponent = /*@__PURE__*/ (() => {
    class ReportsComponent {
        constructor(dataStorage, apiService, formBuilder, sweetAlertService, datepipe, spinner) {
            this.dataStorage = dataStorage;
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.datepipe = datepipe;
            this.spinner = spinner;
            this.report = new app_core_models_report_model__WEBPACK_IMPORTED_MODULE_4__["Report"]();
            this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_3__["PaymentMethod"]();
            this.reportTypes = _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"];
            this.reportTypeList = [
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].COLLECTION_REPORT, filename: 'Collection_Report' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].VAT_SUMMARY, filename: 'VAT_TAX_Summary' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].TAX_SUMMARY, filename: 'VAT_TAX_Summary' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_COMPANY, filename: 'Per_Company' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_AGENCY, filename: 'Per_Agency' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_SCREENER, filename: 'Per_Screener' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_MEDIUM, filename: 'Per_Type_Of_Medium' },
                { name: _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_APPLICANT, filename: 'Per_Applicant' }
            ];
            this.applicants = [];
            this.screeners = [];
            this.newReportTypeList = [
                { name: 'Application Per Decision', filename: 'Application_Per_Decision' },
                { name: 'Screeners Productivity', filename: 'Screeners_Productivity' },
                { name: 'Ad Specialists-Encoders', filename: 'Ad_Specialists-Encoders' },
                { name: 'Top 20 Agencies', filename: 'Top_20_Agencies' },
                { name: 'Top 20 Categories(by Decision)', filename: 'Top_20_Categories(by_Decision)' },
                { name: 'Top 5 Categories Disapproval', filename: 'Top_5_Categories_Disapproval' },
                { name: 'Top 5 Agencies Disapproval', filename: 'Top_5_Agencies_Disapproval' },
                { name: 'Decision Per Type of medium', filename: 'Decision_per_type_of_medium' },
                { name: 'Top 20 Clients(with Medium)', filename: 'Top_20_Clients(with_Medium)' },
                { name: 'Top 20 Categories(with Medium)', filename: 'Top_20_Categories(with_Medium)' },
                { name: 'Top 20 Clients', filename: 'Top_20_Clients' },
                { name: 'Top 20 Agencies(with client)', filename: 'Top_20_Agencies(with_client)' }
            ];
            this.paymentTypeList = [];
            this.activeCompanyList = [];
            this.isPaymentTypeRequired = true;
            this.paymentTypeAll = {
                "id": 0,
                "paymentDescription": "All",
            };
        }
        ngOnInit() {
            this.currentUser = this.dataStorage.getUserAccount();
            this.setFormValidator();
            this.getPaymentType();
            this.getActiveCompanies();
            console.log(this.currentUser.userRole.name);
            this.getApplicants();
            this.getScreeners();
            this.getTypeOfMediums();
        }
        ngOnDestroy() {
        }
        getApplicants() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].userAccountType + '/APPLICANT').subscribe((res) => {
                var _c, _d, _e;
                // console.log('applicants', res.responseData.data);
                this.applicants.push({ name: 'ALL', id: 0 });
                if (((_c = res === null || res === void 0 ? void 0 : res.responseData) === null || _c === void 0 ? void 0 : _c.data) && ((_e = (_d = res === null || res === void 0 ? void 0 : res.responseData) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.length)) {
                    res.responseData.data.filter(e => {
                        this.applicants.push({ name: `${e.firstName} ${e.middleName} ${e.lastName}`, id: e.id });
                    });
                }
            });
        }
        setFormValidator() {
            if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
                this.reportForm = this.formBuilder.group({
                    reportType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    paymentType: [0],
                    company: [0],
                    applicant: [0],
                    screener: [0],
                    medium: [0],
                    dateFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    dateTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                });
            }
            else {
                this.newReportForm = this.formBuilder.group({
                    reportType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    dateFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    dateTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
                });
            }
        }
        getPaymentType() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentType).subscribe((res) => {
                this.paymentTypeList = res.responseData.data;
                this.paymentTypeList.unshift(this.paymentTypeAll);
            });
        }
        getScreeners() {
            this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].userPerRole}${8}`).subscribe(screener => {
                var _c, _d, _e;
                this.screeners.push({ name: 'ALL', id: 0 });
                if (((_c = screener === null || screener === void 0 ? void 0 : screener.responseData) === null || _c === void 0 ? void 0 : _c.data) && ((_e = (_d = screener === null || screener === void 0 ? void 0 : screener.responseData) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.length)) {
                    screener.responseData.data.filter(e => {
                        this.screeners.push({ name: `${e.firstName} ${e.middleName} ${e.lastName}`, id: e.id });
                    });
                }
            });
        }
        getTypeOfMediums() {
            this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].typeOfMedium}`).subscribe(response => {
                this.typeOfMediums = response.responseData.data;
                this.typeOfMediums.unshift({ description: 'ALL', id: 0 });
            });
        }
        getActiveCompanies() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].activeCompanies).subscribe(res => {
                this.activeCompanyList = res.responseData.data;
                this.activeCompanyList.push({
                    "id": 0,
                    "companyName": "All",
                });
                this.activeCompanyList.sort((_a, _b) => {
                    return (_a.id - _b.id);
                });
            });
        }
        setReportType(res) {
            if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
                this.selectedReportType = res.name;
                if (this.selectedReportType === 'Collection Report') {
                    this.isPaymentTypeRequired = false;
                }
                else {
                    this.reportForm.get('paymentType').patchValue(0);
                    this.isPaymentTypeRequired = true;
                    this.selectedPaymentType = 0;
                }
            }
            else {
                this.selectedReportType = res;
            }
        }
        setPaymentType(id) {
            this.isPaymentTypeRequired = true;
            this.selectedPaymentType = id;
        }
        generateReport() {
            this.spinner.show();
            this.report.format = 'xlsx';
            console.log('selected ', this.selectedReportType);
            if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
                this.report.filename = 'VAT_TAX_Summary';
                this.report.module = 'Report';
                this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'reportType': this.reportType.filename };
                let valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}`;
                if (this.selectedReportType === 'Collection Report') {
                    this.report.filename = 'Collection_Report';
                    valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                    this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
                }
                else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_COMPANY) {
                    this.report.filename = 'Per_Company';
                    valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                    this.report.params = { 'companyId': this.reportForm.get('company').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
                }
                else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_AGENCY) {
                    this.report.filename = 'Per_Agency';
                    valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                    this.report.params = { 'agencyId': this.reportForm.get('company').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
                }
                else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_SCREENER) {
                    this.report.filename = 'Per_Screener';
                    valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                    this.report.params = { 'screenerId': this.reportForm.get('screener').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
                }
                else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_APPLICANT) {
                    this.report.filename = 'Per_Applicant';
                    valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                    this.report.params = { 'applicantId': this.reportForm.get('applicant').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
                }
                else if (this.selectedReportType === _shared__WEBPACK_IMPORTED_MODULE_2__["REPORT_TYPE"].REPORT_PER_MEDIUM) {
                    this.report.filename = 'Per_Type_Of_Medium';
                    valdationReportEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].validateReportsCollection + `/date-from/${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'yyyy-MM-dd').toString()}/date-to/${this.datepipe.transform(this.reportForm.get('dateTo').value, 'yyyy-MM-dd').toString()}/payment-type-id/${this.selectedPaymentType}`;
                    this.report.params = { 'typeOfMediumId': this.reportForm.get('medium').value, 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'paymentTypeId': this.selectedPaymentType };
                }
                else if (this.selectedReportType === 'VAT Summary') {
                    this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'reportType': 'vat' };
                }
                else if (this.selectedReportType === 'TAX Summary') {
                    this.report.params = { 'dateFrom': `${this.datepipe.transform(this.reportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`, 'dateTo': `${this.datepipe.transform(this.reportForm.get('dateTo').value, 'MM/dd/yyyy')}`, 'reportType': 'wtax' };
                }
                this.apiService.findAll(valdationReportEndpoint).subscribe((data) => {
                    if (data.length > 0) {
                        this.printReport(this.report);
                    }
                    else {
                        this.sweetAlertService.customErrorMessage('No Record found on date ranged');
                        this.spinner.hide();
                    }
                });
            }
            else {
                this.report.filename = this.selectedReportType;
                let dateFrom = `${this.datepipe.transform(this.newReportForm.get('dateFrom').value, 'MM/dd/yyyy').toString()}`;
                let dateTo = `${this.datepipe.transform(this.newReportForm.get('dateTo').value, 'MM/dd/yyyy')}`;
                this.report.module = 'AppData';
                this.report.params = { 'dateFrom': dateFrom, 'dateTo': dateTo };
                this.printReport(this.report);
            }
        }
        printReport(report) {
            this.apiService.printReport(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].generateReports, report).subscribe((data) => {
                const newBlob = new Blob([(data)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const downloadURL = URL.createObjectURL(newBlob);
                var anchor = document.createElement('a');
                anchor.download = this.selectedReportType + '.xlsx';
                anchor.href = downloadURL;
                anchor.click();
                if (this.currentUser.userRole.name === 'ROLE_ACCOUNTING') {
                    this.reportForm.reset();
                    this.reportForm.patchValue({
                        paymentType: 0,
                        company: 0,
                        applicant: 0,
                        screener: 0,
                        medium: 0,
                    });
                }
                else {
                    this.newReportForm.reset();
                }
                this.selectedReportType = null;
                this.sweetAlertService.customSuccessMessage('Successfully Generated!');
                this.spinner.hide();
            }, (err) => {
                // console.log(err);
                this.spinner.hide();
                this.sweetAlertService.customErrorMessage('No Record found on date ranged');
            });
        }
    }
    ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"])); };
    ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], decls: 9, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [4, "ngIf"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "placeholder", "Date", "readonly", "", "name", "dateFrom", "readonly", "", "formControlName", "dateFrom", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["color", "warn", "disabled", "false"], ["dateFrom", ""], ["matInput", "", "placeholder", "Date", "readonly", "", "name", "dateTo", "formControlName", "dateTo", 3, "matDatepicker", "ngModel", "ngModelChange"], ["Date", ""], ["name", "reportType", "formControlName", "reportType", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], [1, "col-md-9"], [1, "col-md-3"], ["mat-raised-button", "", 1, "button-red", 3, "disabled", "click"], [1, "material-icons", "color__white"], [3, "value", "click"], ["name", "paymentType", "formControlName", "paymentType"], ["name", "company", "formControlName", "company"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "applicant", "formControlName", "applicant"], ["name", "company", "formControlName", "screener"], ["name", "medium", "formControlName", "medium"]], template: function ReportsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Reports ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReportsComponent_div_7_Template, 37, 15, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReportsComponent_div_8_Template, 31, 10, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.userRole.name === "ROLE_ACCOUNTING");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.userRole.name === "ROLE_SUPER_ADMIN" || ctx.currentUser.userRole.name === "ROLE_ADMIN");
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ReportsComponent;
})();



/***/ }),

/***/ "piSE":
/*!*****************************************************!*\
  !*** ./src/app/core/models/payment-method.model.ts ***!
  \*****************************************************/
/*! exports provided: PaymentMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return PaymentMethod; });
class PaymentMethod {
}



/***/ }),

/***/ "qZlX":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/accounting/reports/reports.module.ts ***!
  \********************************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "gxz3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.component */ "ic0y");








let ReportsModule = /*@__PURE__*/ (() => {
    class ReportsModule {
    }
    ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsModule });
    ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            ]] });
    return ReportsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es2015.js.map