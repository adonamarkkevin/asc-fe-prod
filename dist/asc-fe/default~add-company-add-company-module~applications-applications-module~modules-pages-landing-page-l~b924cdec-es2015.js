(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"],{

/***/ "9hFf":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/company/add-company/add-company.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _core_services_address_address_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/address/address.service */ "n4+4");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















const _c0 = function () { return ["/asc/page/company/lists"]; };
function AddCompanyComponent_button_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " VIEW COMPANIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
}
function AddCompanyComponent_mat_option_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7.description, " ");
    }
}
function AddCompanyComponent_mat_form_field_66_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r9, " ");
    }
}
function AddCompanyComponent_mat_form_field_66_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delinquent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_mat_form_field_66_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.company.delinquent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddCompanyComponent_mat_form_field_66_mat_option_4_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.company.delinquent)("compareWith", ctx_r2.compareDelinquent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.yesNoList);
    }
}
function AddCompanyComponent_mat_form_field_67_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r13.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r13 == null ? null : i_r13.status == null ? null : i_r13.status.replace("_", " "), " ");
    }
}
function AddCompanyComponent_mat_form_field_67_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_mat_form_field_67_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.company.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddCompanyComponent_mat_form_field_67_mat_option_4_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.company.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.statusList);
    }
}
function AddCompanyComponent_mat_option_78_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r16 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r16.code, " - ", i_r16.name, " ");
    }
}
function AddCompanyComponent_div_87_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_87_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.save(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SAVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.companyForm.valid);
    }
}
function AddCompanyComponent_div_87_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_87_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.update(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "task_alt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPDATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r18.companyForm.valid);
    }
}
function AddCompanyComponent_div_87_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_87_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " APPROVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function AddCompanyComponent_div_87_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_87_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.reject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "unpublished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " REJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function AddCompanyComponent_div_87_button_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_87_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r21.company == null ? null : ctx_r21.company.id) ? "cancel" : "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r21.company == null ? null : ctx_r21.company.id) ? "CANCEL" : "RESET", " ");
    }
}
function AddCompanyComponent_div_87_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_87_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CLOSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function AddCompanyComponent_div_87_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddCompanyComponent_div_87_button_2_Template, 4, 1, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddCompanyComponent_div_87_button_3_Template, 4, 1, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddCompanyComponent_div_87_button_4_Template, 4, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddCompanyComponent_div_87_button_5_Template, 4, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddCompanyComponent_div_87_button_6_Template, 4, 2, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddCompanyComponent_div_87_button_7_Template, 4, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r5.company == null ? null : ctx_r5.company.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.company == null ? null : ctx_r5.company.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isFromModal && ctx_r5.showApproveRejectButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isFromModal && ctx_r5.showApproveRejectButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.company == null ? null : ctx_r5.company.id) || (ctx_r5.company == null ? null : ctx_r5.company.companyName) || (ctx_r5.company == null ? null : ctx_r5.company.companyTelephoneNo) || (ctx_r5.company == null ? null : ctx_r5.company.companyTin));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isFromModal);
    }
}
function AddCompanyComponent_div_88_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_88_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.update(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "task_alt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPDATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r35.companyForm.valid);
    }
}
function AddCompanyComponent_div_88_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_88_button_1_Template, 4, 1, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_88_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " APPROVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_88_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.reject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "unpublished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " REJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_div_88_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " CLOSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.company == null ? null : ctx_r6.company.id);
    }
}
let AddCompanyComponent = /*@__PURE__*/ (() => {
    class AddCompanyComponent {
        constructor(apiService, addressService, formBuilder, dataStorage, sweetAlertService, validateFieldService, route, router, matDialog, dialogRef, data) {
            this.apiService = apiService;
            this.addressService = addressService;
            this.formBuilder = formBuilder;
            this.dataStorage = dataStorage;
            this.sweetAlertService = sweetAlertService;
            this.validateFieldService = validateFieldService;
            this.route = route;
            this.router = router;
            this.matDialog = matDialog;
            this.dialogRef = dialogRef;
            this.data = data;
            this.displayedColumns = ['companyName', 'companyTelephoneNo', 'companyFaxNo', 'companyTin', 'address'];
            this.countryList = [];
            this.companyList = [];
            this.affiliationList = [];
            this.regionsList = [];
            this.provinceList = [];
            this.cityMunicipalityList = [];
            this.barangayList = [];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_1__["STATUSES"]];
            this.yesNoList = [..._shared__WEBPACK_IMPORTED_MODULE_1__["YES_NO_OPTION"]];
            this.company = new _models__WEBPACK_IMPORTED_MODULE_2__["Company"]();
            this.todayDate = new Date();
            this.notForeignAddress = true;
            this.isFromModal = false;
            this.isUserRegistration = false;
            this.showApproveRejectButton = false;
            if (data) {
                if (data.dataForModal) {
                    const dataFromModal = data.dataForModal;
                    this.isFromModal = dataFromModal.isFromModal;
                    this.showApproveRejectButton = dataFromModal.isUpdate;
                    if (dataFromModal.isUpdate) {
                        this.company = dataFromModal.company;
                    }
                    else {
                        this.company.country = dataFromModal.country;
                    }
                }
                this.isUserRegistration = data.isUserRegistration;
            }
            const additionalStatus = [
                {
                    status: 'APPROVED'
                }, {
                    status: 'DISAPPROVED'
                }, {
                    status: 'FOR_APPROVAL'
                }
            ];
            this.statusList.push(...additionalStatus);
        }
        ngOnInit() {
            this.currentUser = this.dataStorage.getUserAccount();
            this.setFormValidator();
            this.getCountries();
            this.getAffiliationList();
            this.id = Number(this.route.snapshot.paramMap.get('id'));
            if (this.id !== 0) {
                this.viewApplication();
            }
        }
        viewApplication() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].company, this.id).subscribe((res) => {
                this.company = res.responseData.data;
                this.getAffiliationList();
            });
        }
        getCountries() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].countries).subscribe((res) => {
                this.countryList = res.responseData.data;
            });
        }
        getAffiliationList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].activeMembersAffiliation).subscribe((res) => {
                this.affiliationList = res.responseData.data;
            });
        }
        save(endpoint) {
            if (!endpoint) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].company;
            }
            if (this.currentUser && (this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_1__["USER_ROLES"].ROLE_ADMIN || this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_1__["USER_ROLES"].ROLE_SUPER_ADMIN)) {
                this.company.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
            }
            else {
                this.company.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].FOR_APPROVAL;
            }
            // if(this.notForeignAddress){
            //   this.company.country = 'PHIL'
            // }
            if (this.isFromModal) {
                this.company.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].FOR_APPROVAL;
            }
            this.company.delinquent = this.setDelinquent(this.company.delinquent);
            this.apiService.save(endpoint, this.company).subscribe((res) => {
                if (res !== undefined) {
                    this.id = res.responseData.data.id;
                    this.company = res.responseData.data;
                    this.sweetAlertService.customSuccessMessage('Company successfully saved.');
                    if (this.isFromModal) {
                        this.dialogRef.close(this.company);
                    }
                    if (this.isUserRegistration) {
                        this.dialogRef.close(this.company);
                    }
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                // this.resetFormValidator();
                if (!this.isFromModal && !this.isUserRegistration) {
                    this.router.navigate(['asc/page/company/update/', this.id]);
                }
            });
        }
        getCompany(id) {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].company, id).subscribe((res) => {
                if (res) {
                    this.company = res.responseData.data;
                    // this.addressService.getBarangay(res.responseData.data.barangayId).subscribe(
                    //   (res: any) => {
                    // this.company.region = res.responseData.data.cityMunicipalityDto.provinceDto.regionDto.regionId;
                    // this.company.province = res.responseData.data.cityMunicipalityDto.provinceDto.provinceId;
                    // this.company.cityMunicipality = res.responseData.data.cityMunicipalityDto.cityMunicipalityId;
                    // this.company.barangay = res.responseData.data.barangayId;
                    // this.getProvinces();
                    // this.getCityMunicipalities();
                    // this.getBarangays();
                    // });
                }
            });
        }
        update(endpoint) {
            if (!endpoint) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].company;
            }
            this.company.delinquent = this.setDelinquent(this.company.delinquent);
            if (this.company.status === 'APPROVED') {
                this.company.status = 'ACTIVE';
            }
            this.apiService.update(endpoint, this.company).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                this.cancel();
                if (this.isFromModal) {
                    this.dialogRef.close(this.company);
                }
            });
        }
        setFormValidator() {
            // if(this.notForeignAddress){
            //   this.companyForm = this.formBuilder.group({
            //     companyName: ['', Validators.required],
            //     companyTelephoneNo: ['', Validators.required],
            //     companyFaxNo: ['', Validators.required],
            //     membersAffiliation: ['', Validators.required],
            //     companyTin: ['', Validators.required],
            //     // region: ['', Validators.required],
            //     // province: ['', Validators.required],
            //     // cityMunicipality: ['', Validators.required],
            //     // barangay: ['', Validators.required],
            //     completeAddress: ['', Validators.required]
            //   });
            // }else{
            //   this.companyForm = this.formBuilder.group({
            //     companyName: ['', Validators.required],
            //     companyTelephoneNo: ['', Validators.required],
            //     companyFaxNo: ['', Validators.required],
            //     membersAffiliation: ['', Validators.required],
            //     companyTin: ['', Validators.required],
            //     country: ['', Validators.required],
            //     foreignAddress: ['', Validators.required]
            //   });
            // }
            this.companyForm = this.formBuilder.group({
                companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                companyMobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                companyTelephoneNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                companyTelephoneNo2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                // companyFaxNo: ['', Validators.required],
                membersAffiliation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                contactPersonName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                contactPersonEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                companyTin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                completeAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                voucherFund: [''],
                status: [''],
                delinquent: ['']
            });
        }
        cancel() {
            if (!this.isFromModal) {
                if (this.company.id) {
                    this.router.navigate(['/asc/page/company/lists']);
                }
                else {
                    this.company = new _models__WEBPACK_IMPORTED_MODULE_2__["Company"]();
                    this.companyForm.markAsUntouched();
                    this.companyForm.markAsPristine();
                }
            }
        }
        // getRegions() {
        //   this.addressService.getRegions().subscribe(
        //     (res: any) => {
        //       this.regionsList = res;
        //     });
        // }
        // getProvinces() {
        //   this.addressService.getProvinces(this.company.region.regionId).subscribe(
        //     (res: any) => {
        //       this.provinceList = res.responseData.data;
        //     });
        // }
        // getCityMunicipalities() {
        //   this.addressService.getCityMunicipalities(this.company.province.provinceId).subscribe(
        //     (res: any) => {
        //       this.cityMunicipalityList = res.responseData.data;
        //     });
        // }
        // getBarangays() {
        //   this.addressService.getBarangays(this.company.cityMunicipality.cityMunicipalityId).subscribe(
        //     (res: any) => {
        //       this.barangayList = res.responseData.data;
        //     });
        // }
        isForeignAddress() {
            this.notForeignAddress = !this.notForeignAddress;
            // this.setFormValidator();
        }
        compareMembersAffiliation(value, selected) {
            if (value && selected) {
                return value.description === selected.description;
            }
        }
        compareCountry(value, selected) {
            if (value && selected) {
                return value.id === selected.id;
            }
        }
        compareDelinquent(value, selected) {
            if (value) {
                return value === (selected ? 'Yes' : 'No');
            }
        }
        approve() {
            this.company.status = 'APPROVED';
            this.save(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].approveCompany);
        }
        reject() {
            this.company.status = 'DISAPPROVED';
            this.update('');
        }
        closeModal() {
            this.dialogRef.close();
        }
        setDelinquent(delinquentVal) {
            return delinquentVal === 'Yes' ? true : false;
        }
    }
    AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_address_address_service__WEBPACK_IMPORTED_MODULE_9__["AddressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_10__["ValidateFieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"], 8)); };
    AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["app-add-company"]], viewQuery: function AddCompanyComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            }
        }, decls: 89, vars: 20, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], ["class", "button-right", "mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], [3, "formGroup"], [1, "row", "fields"], ["appearance", "outline", 1, "col-md-7"], [1, "required-field"], ["matInput", "", "name", "companyName", "formControlName", "companyName", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "col-md-5"], ["name", "membersAffiliation", "formControlName", "membersAffiliation", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-3"], ["matInput", "", "name", "companyMobileNo", "placeholder", "09xxxxxxxxx", "formControlName", "companyMobileNo", "maxlength", "11", 3, "ngModel", "ngModelChange", "keydown"], ["matInput", "", "name", "companyTelephoneNo", "formControlName", "companyTelephoneNo", "maxlength", "11", 3, "ngModel", "ngModelChange", "keydown"], ["matInput", "", "name", "companyTelephoneNo2", "formControlName", "companyTelephoneNo2", "maxlength", "11", 3, "ngModel", "ngModelChange", "keydown"], ["matInput", "", "name", "companyTin", "formControlName", "companyTin", 3, "ngModel", "ngModelChange", "keydown"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "name", "contactPersonName", "formControlName", "contactPersonName", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "contactPersonEmail", "email", "", "formControlName", "contactPersonEmail", 3, "ngModel", "ngModelChange"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-4"], ["name", "country", "formControlName", "country", "matNativeControl", "", "required", "", 3, "ngModel", "compareWith", "ngModelChange"], ["appearance", "outline", 1, "col-md-8"], ["matInput", "", "name", "completeAddress", "formControlName", "completeAddress", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "button-right", 3, "routerLink"], [3, "value"], ["name", "delinquent", "formControlName", "delinquent", 3, "ngModel", "compareWith", "ngModelChange"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-red", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", 1, "button-red", 3, "click"], [1, "material-icons", "color__white"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function AddCompanyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "apartment");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Company ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddCompanyComponent_button_8_Template, 4, 2, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "label_important");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Company Information ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_22_listener($event) { return ctx.company.companyName = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Member Affiliation ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.company.membersAffiliation = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddCompanyComponent_mat_option_29_Template, 2, 2, "mat-option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mobile Number ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_35_listener($event) { return ctx.company.companyMobileNo = $event; })("keydown", function AddCompanyComponent_Template_input_keydown_35_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Telephone Number ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_41_listener($event) { return ctx.company.companyTelephoneNo = $event; })("keydown", function AddCompanyComponent_Template_input_keydown_41_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Alternate Telephone Number ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_47_listener($event) { return ctx.company.companyTelephoneNo2 = $event; })("keydown", function AddCompanyComponent_Template_input_keydown_47_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "TIN ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_53_listener($event) { return ctx.company.companyTin = $event; })("keydown", function AddCompanyComponent_Template_input_keydown_53_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Accounting Representative: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_59_listener($event) { return ctx.company.contactPersonName = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Representative's Email Address: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_input_ngModelChange_65_listener($event) { return ctx.company.contactPersonEmail = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AddCompanyComponent_mat_form_field_66_Template, 5, 3, "mat-form-field", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AddCompanyComponent_mat_form_field_67_Template, 5, 2, "mat-form-field", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "label_important");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Country ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-select", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_mat_select_ngModelChange_77_listener($event) { return ctx.company.country = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AddCompanyComponent_mat_option_78_Template, 2, 3, "mat-option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Company Address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "textarea", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCompanyComponent_Template_textarea_ngModelChange_84_listener($event) { return ctx.company.completeAddress = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AddCompanyComponent_div_87_Template, 8, 6, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AddCompanyComponent_div_88_Template, 14, 1, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFromModal && !ctx.isUserRegistration);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.companyForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyName);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.membersAffiliation)("compareWith", ctx.compareMembersAffiliation);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.affiliationList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyMobileNo);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyTelephoneNo);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyTelephoneNo2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.companyTin);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.contactPersonName);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.contactPersonEmail);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ENCODER") && !ctx.isUserRegistration);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ENCODER") && ctx.company.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.country)("compareWith", ctx.compareCountry);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.company.completeAddress);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFromModal || !ctx.showApproveRejectButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFromModal && ctx.showApproveRejectButton);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvY29tcGFueS9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AddCompanyComponent;
})();



/***/ }),

/***/ "n4+4":
/*!**********************************************************!*\
  !*** ./src/app/core/services/address/address.service.ts ***!
  \**********************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let AddressService = /*@__PURE__*/ (() => {
    class AddressService {
        constructor(http) {
            this.http = http;
        }
        getRegions() {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].regions}`);
        }
        getProvinces(regionId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].provinces}/region-id/${regionId}`);
        }
        getCityMunicipalities(provinceId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].cityMunicipalities}/province-id/${provinceId}`);
        }
        getBarangays(cityMunicipalityId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].barangays}/city-municipality-id/${cityMunicipalityId}`);
        }
        getBarangay(barangayId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].barangays}/barangay-id/${barangayId}`);
        }
    }
    AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    AddressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });
    return AddressService;
})();



/***/ })

}]);
//# sourceMappingURL=default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec-es2015.js.map