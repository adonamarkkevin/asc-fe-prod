(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e"],{

/***/ "3swC":
/*!********************************************!*\
  !*** ./src/app/modules/fragments/index.ts ***!
  \********************************************/
/*! exports provided: FormActionButtonsComponent, FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function() { return _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__["FormActionButtonsComponent"]; });

/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-list/form-list.component */ "DeKZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__["FormListComponent"]; });






/***/ }),

/***/ "B0iI":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/user-account/user-account-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: UserAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountRoutingModule", function() { return UserAccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-account.component */ "ea/y");





const routes = [
    {
        path: '',
        component: _user_account_component__WEBPACK_IMPORTED_MODULE_2__["UserAccountComponent"]
    }
];
let UserAccountRoutingModule = /*@__PURE__*/ (() => {
    class UserAccountRoutingModule {
    }
    UserAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserAccountRoutingModule });
    UserAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserAccountRoutingModule_Factory(t) { return new (t || UserAccountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserAccountRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "Pwem":
/*!*************************************************!*\
  !*** ./src/app/core/models/eSignature.model.ts ***!
  \*************************************************/
/*! exports provided: ESignature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESignature", function() { return ESignature; });
class ESignature {
}



/***/ }),

/***/ "ea/y":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/user-account/user-account.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/eSignature.model */ "Pwem");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../company/add-company/add-company.component */ "9hFf");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");































const _c0 = ["stepper"];
const _c1 = ["selectFileButton"];
function UserAccountComponent_mat_tab_group_9_mat_form_field_35_mat_option_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r14 = ctx.$implicit;
        var tmp_1_0 = null;
        var tmp_1_1 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r14 == null ? null : i_r14.name == null ? null : (tmp_1_0 = i_r14.name.replaceAll("ROLE_", "")) == null ? null : (tmp_1_1 = tmp_1_0.replace("_", " ")) == null ? null : tmp_1_1.replace("ENCODER", "EVALUATOR"), " ");
    }
}
function UserAccountComponent_mat_tab_group_9_mat_form_field_35_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " User Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_mat_form_field_35_Template_mat_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.userAccount.userRole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountComponent_mat_tab_group_9_mat_form_field_35_mat_option_6_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.userAccount.userRole)("compareWith", ctx_r3.compareUserRole)("disabled", (ctx_r3.userAccount == null ? null : ctx_r3.userAccount.userRole == null ? null : ctx_r3.userAccount.userRole.name) == "ROLE_APPLICANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.userRoleList);
    }
}
function UserAccountComponent_mat_tab_group_9_button_37_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.resendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Resend Email Verification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_div_38_mat_option_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r20 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r20.companyName, " ");
    }
}
function UserAccountComponent_mat_tab_group_9_div_38_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "label_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Company Information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_div_38_Template_mat_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.userAccount.company = $event; })("selectionChange", function UserAccountComponent_mat_tab_group_9_div_38_Template_mat_select_selectionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.getSelectedCompany($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_div_38_Template_mat_option_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.openCompanyComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add New Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserAccountComponent_mat_tab_group_9_div_38_mat_option_15_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Member Affiliation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Company Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Telephone Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Alternative Telephone Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Contact Person: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Contact Person Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.userAccount.company)("compareWith", ctx_r5.compareCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.companyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.membersAffiliation == null ? null : ctx_r5.userAccount.company.membersAffiliation.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.companyMobileNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.companyTelephoneNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.companyTelephoneNo2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.contactPersonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.userAccount == null ? null : ctx_r5.userAccount.company == null ? null : ctx_r5.userAccount.company.contactPersonEmail);
    }
}
function UserAccountComponent_mat_tab_group_9_div_39_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Note: Proceed to Account Information to complete adding of ASC user.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_button_41_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.insert(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "offline_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r7.userInfo == null ? null : ctx_r7.userInfo.valid));
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_input_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 59, 60);
    }
    if (rf & 2) {
        const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.eSign.originalFilename);
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_input_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 61, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserAccountComponent_mat_tab_group_9_mat_tab_43_input_18_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.deleteESignature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " DELETE E-SIGNATURE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.viewDocument(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " VIEW DOCUMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_mat_tab_43_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.uploadSignature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPLOAD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r31.safeURLSignature || !ctx_r31.isShowUploadButton);
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_div_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "object", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iframe", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This browser does not support PDF!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r32.safeURLSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r32.safeURLSignature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    }
}
function UserAccountComponent_mat_tab_group_9_mat_tab_43_Template(rf, ctx) {
    if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0Upload e-Signature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Filename: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserAccountComponent_mat_tab_group_9_mat_tab_43_input_17_Template, 2, 1, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserAccountComponent_mat_tab_group_9_mat_tab_43_input_18_Template, 2, 0, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_mat_tab_43_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.eSign.signatureAttachmentReference = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserAccountComponent_mat_tab_group_9_mat_tab_43_button_22_Template, 4, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserAccountComponent_mat_tab_group_9_mat_tab_43_button_23_Template, 4, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserAccountComponent_mat_tab_group_9_mat_tab_43_button_25_Template, 4, 1, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserAccountComponent_mat_tab_group_9_mat_tab_43_div_27_Template, 6, 2, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.eSignature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.eSign.originalFilename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.eSign.originalFilename);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.eSign.signatureAttachmentReference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.eSign == null ? null : ctx_r8.eSign.fileURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.eSign == null ? null : ctx_r8.eSign.signatureAttachmentReference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isShowUploadButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.previewDocument == true && (ctx_r8.userAccount == null ? null : ctx_r8.userAccount.signatureAttachmentReference));
    }
}
function UserAccountComponent_mat_tab_group_9_ng_template_46_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Account Information");
    }
}
function UserAccountComponent_mat_tab_group_9_p_71_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Password must contain lower,upper case letter and number. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_p_83_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Password not match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_mat_tab_group_9_button_86_Template(rf, ctx) {
    if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_button_86_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.insert(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "offline_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r12.userInfo == null ? null : ctx_r12.userInfo.valid) || !(ctx_r12.accountInfo == null ? null : ctx_r12.accountInfo.valid) || !(ctx_r12.userAccount == null ? null : ctx_r12.userAccount.userRole) || !(ctx_r12.userAccount == null ? null : ctx_r12.userAccount.password) || !ctx_r12.confirmPasswords);
    }
}
function UserAccountComponent_mat_tab_group_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "label_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Personal Information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Given name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.userAccount.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Middle name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.userAccount.middleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Last name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.userAccount.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Mobile Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.userAccount.mobileNumber = $event; })("keydown", function UserAccountComponent_mat_tab_group_9_Template_input_keydown_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.validateFieldService.numbersOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserAccountComponent_mat_tab_group_9_mat_form_field_35_Template, 7, 4, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserAccountComponent_mat_tab_group_9_button_37_Template, 4, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserAccountComponent_mat_tab_group_9_div_38_Template, 45, 9, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UserAccountComponent_mat_tab_group_9_div_39_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UserAccountComponent_mat_tab_group_9_button_41_Template, 4, 1, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserAccountComponent_mat_tab_group_9_mat_tab_43_Template, 30, 8, "mat-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserAccountComponent_mat_tab_group_9_ng_template_46_Template, 1, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "label_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Account Information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Email Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.userAccount.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.userAccount.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.hidePassword = !ctx_r55.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, UserAccountComponent_mat_tab_group_9_p_71_Template, 4, 0, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Confirm Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserAccountComponent_mat_tab_group_9_Template_input_ngModelChange_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.confirmPasswords = $event; })("keyup", function UserAccountComponent_mat_tab_group_9_Template_input_keyup_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.confirmPassword(ctx_r57.confirmPasswords); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.hideConfirmPassword = !ctx_r58.hideConfirmPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, UserAccountComponent_mat_tab_group_9_p_83_Template, 4, 0, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, UserAccountComponent_mat_tab_group_9_button_86_Template, 4, 1, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAccountComponent_mat_tab_group_9_Template_button_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.updateCredentials(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "offline_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.userInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userAccount.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userAccount.middleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userAccount.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userAccount.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUserRole === "ROLE_SUPER_ADMIN" || ctx_r0.currentUserRole === "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.firstName) != undefined && (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.status) === "VERIFICATION_SENT" && (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.accountType) === "APPLICANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.userRole == null ? null : ctx_r0.userAccount.userRole.name) == "ROLE_APPLICANT" && !ctx_r0.isAscUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.userRole == null ? null : ctx_r0.userAccount.userRole.name) !== "ROLE_APPLICANT" && (ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.accountInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userAccount.username)("readonly", ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.hidePassword ? "password" : "text")("ngModel", ctx_r0.userAccount.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.accountInfo.get("password").dirty && ctx_r0.accountInfo.controls["password"].errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.hideConfirmPassword ? "password" : "text")("ngModel", ctx_r0.confirmPasswords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r0.hideConfirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hideConfirmPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.accountInfo.get("confirmPasswords").dirty && !ctx_r0.passwordMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r0.accountInfo == null ? null : ctx_r0.accountInfo.valid))("hidden", !(ctx_r0.userAccount == null ? null : ctx_r0.userAccount.id));
    }
}
function UserAccountComponent_mat_tab_group_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function UserAccountComponent_mat_tab_group_13_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-tab", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-tab", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function UserAccountComponent_span_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-list", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function UserAccountComponent_span_15_Template_app_form_list_selectInListFunction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.viewUserInformation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.dataSource)("displayedColumns", ctx_r2.displayedColumns);
    }
}
let UserAccountComponent = /*@__PURE__*/ (() => {
    class UserAccountComponent {
        //isUpdateAscUser: boolean;
        constructor(apiService, formBuilder, sweetAlertService, dataStorageService, validateFieldService, router, fileStorageService, spinner, sanitizer, dialog, dialogRef, data) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dataStorageService = dataStorageService;
            this.validateFieldService = validateFieldService;
            this.router = router;
            this.fileStorageService = fileStorageService;
            this.spinner = spinner;
            this.sanitizer = sanitizer;
            this.dialog = dialog;
            this.dialogRef = dialogRef;
            this.data = data;
            this.displayedColumns = [
                'firstName',
                'lastName',
                'companyDescription',
                'emailAddress',
                'mobileNumber',
                'status'
            ];
            this.currentTab = "NONASC";
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_7__["Company"]();
            this.userRole = new _models__WEBPACK_IMPORTED_MODULE_7__["UserRole"]();
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_7__["Affiliation"]();
            this.eSign = new app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_9__["ESignature"]();
            this.userAccountList = [];
            this.userRoleList = [];
            this.companyList = [];
            this.affiliationList = [];
            this.displayTable = false;
            this.isShowUploadButton = false;
            this.previewDocument = false;
            this.passwordMatch = false;
            this.hidePassword = true;
            this.hideConfirmPassword = true;
            this.isFromUserProfile = false;
            if (data) {
                this.isFromUserProfile = data.isFromProfile;
                this.userAccount = data.userAccount;
                this.viewUserInformation();
            }
        }
        ngOnInit() {
            this.setFormValidator();
            this.getUserPerTypeList();
            this.getMaintenanceList();
            // alert(this.isFromUserProfile)
            this.currentUserRole = this.dataStorageService.getUserRole();
        }
        save() {
            this.userAccount.username = this.userAccount.username.toLowerCase();
            if (this.currentUserRole === 'ROLE_SUPER_ADMIN' || this.currentUserRole === 'ROLE_ADMIN') {
                this.userAccount.company = null;
            }
            // this.apiService.save(ENDPOINTS.addUserAccount, this.userAccount).subscribe(
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, this.userAccount).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.customSuccessMessage('Account has been created successfully.');
                    const evt = { index: null };
                    if (this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                        evt.index = 0;
                    }
                    else {
                        evt.index = 1;
                    }
                    this.accountInfo.reset();
                    if (this.isFromUserProfile) {
                        this.dialog.closeAll();
                    }
                }
            }, (err) => {
                var _a;
                this.sweetAlertService.customErrorMessage(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err.error);
                console.log('ERROR:::', err);
            }, () => {
                this.resetFormValidator();
                if (this.currentTab == "NONASC")
                    this.getUserPerTypeList();
                else if (this.currentTab == "ASC")
                    this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            });
        }
        update() {
            console.log('update');
            const endpoint = this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT ? _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount : _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updateUserAccount;
            this.apiService.update(endpoint, this.userAccount).subscribe((res) => {
                if (res !== undefined) {
                    // this.updateCredentials();
                    this.sweetAlertService.customSuccessMessage('Account was successfully updated');
                    const evt = { index: null };
                    console.log(this.userAccount);
                    if (this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                        evt.index = 0;
                    }
                    else {
                        evt.index = 1;
                    }
                    // this.changeTab(evt);
                    this.accountInfo.reset();
                    if (this.isFromUserProfile) {
                        this.dialog.closeAll();
                    }
                }
            }, (err) => {
                console.log(err);
                this.sweetAlertService.error(err);
            }, () => {
                if (this.currentTab == "NONASC")
                    this.getUserPerTypeList();
                else if (this.currentTab == "ASC")
                    this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
                this.resetFormValidator();
            });
        }
        insert(isNewEntry) {
            this.userAccount.username = this.userAccount.username.toLowerCase();
            if (this.currentUserRole === 'ROLE_SUPER_ADMIN' || this.currentUserRole === 'ROLE_ADMIN') {
                this.userAccount.company = null;
            }
            // this.apiService.save(ENDPOINTS.addUserAccount, this.userAccount).subscribe(
            this.apiService.insert(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, this.userAccount, isNewEntry).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.customSuccessMessage(isNewEntry ? 'Account has been created successfully.' : 'Account was successfully updated');
                    const evt = { index: null };
                    if (this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                        evt.index = 0;
                    }
                    else {
                        evt.index = 1;
                    }
                    this.accountInfo.reset();
                    if (this.isFromUserProfile) {
                        this.dialog.closeAll();
                    }
                }
            }, (err) => {
                var _a;
                this.sweetAlertService.customErrorMessage(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err.error);
                console.log('ERROR:::', err);
            }, () => {
                this.resetFormValidator();
                if (this.currentTab == "NONASC")
                    this.getUserPerTypeList();
                else if (this.currentTab == "ASC")
                    this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            });
        }
        updateCredentials() {
            const updatedAccount = {
                password: this.userAccount.password,
                username: this.userAccount.username,
                userRole: this.userAccount.userRole
            };
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updatePassword, updatedAccount).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                    const evt = { index: null };
                    if (this.userAccount.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_APPLICANT) {
                        evt.index = 0;
                    }
                    else {
                        evt.index = 1;
                    }
                    this.changeTab(evt);
                    this.accountInfo.reset();
                }
            });
        }
        delete() {
        }
        getSelectedCompany(i) {
            if (i) {
                this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].company, i.value.id).subscribe((res) => {
                    this.company = res.responseData.data;
                });
            }
        }
        getUserPerTypeList(type = 'APPLICANT') {
            this.spinner.show();
            this.displayTable = false;
            this.isAscUser = type !== 'APPLICANT';
            this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccountType}/${type}`).subscribe((res) => {
                this.userAccountList = res.responseData.data;
                this.displayTable = true;
                this.spinner.hide();
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
                // this.dataSource.paginator = this.formListComponent.paginator;
                // this.dataSource.sort = this.formListComponent.sort;
            });
        }
        getMaintenanceList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeCompanies).subscribe((res) => {
                this.companyList = res.responseData.data;
            }, (err) => {
            });
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeMembersAffiliation).subscribe((res) => {
                this.affiliationList = res.responseData.data;
            }, (err) => {
            });
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].roles).subscribe((res) => {
                this.userRoleList = res.responseData.data;
            }, (err) => {
            });
        }
        compareMembersAffiliation(value, selected) {
            if (value && selected) {
                return value.description === selected.description;
            }
        }
        compareCompany(value, selected) {
            if (value && selected) {
                return value.id === selected.id;
            }
        }
        compareUserRole(value, selected) {
            if (value && selected) {
                return value.id === selected.id;
            }
        }
        confirmPassword(password) {
            if (this.userAccount.password === password) {
                this.passwordMatch = true;
            }
            else {
                this.passwordMatch = false;
            }
        }
        // get password() {
        //   let password = this.accountInfo.controls["password"].value;
        //   if (password === null || password === '' || password === undefined) {
        //     this.accountInfo.controls['password'].clearValidators();
        //     this.accountInfo.controls["confirmPasswords"].clearValidators();
        //   } else {
        //     this.accountInfo.controls['password'].setValidators([Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), Validators.minLength(8)]);
        //     this.accountInfo.controls["confirmPasswords"].setValidators([Validators.required]);
        //   }
        //   this.accountInfo.controls['password'].updateValueAndValidity();
        //   this.accountInfo.controls['confirmPasswords'].updateValueAndValidity();
        //   return this.accountInfo.controls["password"].value
        // }
        viewUserInformation() {
            var _a;
            // if (this.isAscUser || this.userAccount.id) {
            //   this.stepper.selectedIndex = 0;
            // }
            const accountId = ((_a = this.formListComponent) === null || _a === void 0 ? void 0 : _a.idForUpdate) ?
                this.formListComponent.idForUpdate : this.userAccount.id;
            this.eSign.signatureAttachmentReference = null;
            this.eSign.fileURL = null;
            this.eSign.originalFilename = null;
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount, accountId).subscribe((res) => {
                this.userAccount = res.responseData.data;
                this.company = res.responseData.data.company;
                this.affiliation = this.userAccount.company.membersAffiliation;
                this.userRole = this.userAccount.userRole;
                if (this.userAccount.signatureAttachmentReference) {
                    this.getEsignature();
                }
                else {
                    this.selectFileButton.nativeElement.value = '';
                }
            });
        }
        openCompanyComponent() {
            const dialogRef = this.dialog.open(_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_11__["AddCompanyComponent"], {
                width: '80%',
                height: '85%',
                data: {
                    isFromModal: true,
                    isUserRegistration: true
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed', result);
                if (result) {
                    this.company = result;
                }
                this.getUserPerTypeList();
            });
        }
        setFormValidator() {
            this.userInfo = this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                middleName: [''],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                userRole: [''],
                company: [''],
            });
            this.eSignature = this.formBuilder.group({
                eSignature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
            if (!this.isFromUserProfile) {
                this.accountInfo = this.formBuilder.group({
                    userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                    // userRole: ['', Validators.required],
                    userRole: [''],
                    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                    confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
            else {
                this.accountInfo = this.formBuilder.group({
                    userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
                    password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    confirmPasswords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
            this.userAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                userInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                companyInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                eSignature: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                accountInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            });
        }
        resetFormValidator() {
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_7__["Company"]();
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_7__["Affiliation"]();
            this.previewDocument = false;
            this.userAccountForm.markAsUntouched();
            this.userAccountForm.markAsPristine();
            this.dialog.closeAll();
            if (this.isFromUserProfile) {
                this.dialog.closeAll();
            }
            else {
                this.router.navigate(['asc/page/maintenance/accounts']);
            }
        }
        changeTab(evt) {
            this.userAccount = new _models__WEBPACK_IMPORTED_MODULE_7__["UserAccount"]();
            this.resetFormValidator();
            if (evt.index === 0) {
                this.currentTab = "NONASC";
                //     this.isUpdateAscUser = false;
                this.getUserPerTypeList();
                this.displayedColumns = [
                    'firstName',
                    'lastName',
                    'companyDescription',
                    'emailAddress',
                    'mobileNumber',
                    'status'
                ];
            }
            else if (evt.index === 1) {
                this.currentTab = "ASC";
                //     this.isUpdateAscUser = true;
                this.getUserPerTypeList(_shared__WEBPACK_IMPORTED_MODULE_8__["ACCOUNT_TYPE"].ASC_USER);
                this.displayedColumns = [
                    'firstName',
                    'lastName',
                    'userRole',
                    'emailAddress',
                    'status'
                ];
            }
        }
        selectFile(event) {
            this.isShowUploadButton = false;
            if (event.target.files[0]) {
                this.fileSize = event.target.files[0].size;
                if (this.fileSize > 15000000) {
                    this.sweetAlertService.customErrorMessage(`Attachments total file size should not exceed 15MB.`);
                    event.target.value = '';
                    return;
                }
                else {
                    this.isShowUploadButton = true;
                    const fileURL = URL.createObjectURL(event.target.files[0]);
                    this.previewDocument = true;
                    this.safeURLSignature = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                    const reader = new FileReader();
                    const [file] = event.target.files;
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                    };
                    this.selectedFile = event.target.files[0];
                }
            }
        }
        viewDocument() {
            if (this.uploadedSignatureFile) {
                window.open(this.uploadedSignatureFile.fileURL);
            }
            else {
                window.open(this.eSign.fileURL);
            }
        }
        uploadSignature() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to upload this as e-Signature?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                var _a;
                if (result.value) {
                    this.spinner.show();
                    // TODO: CHANGE ATTACHMENT TYPE WHEN SIGNATURE IS AVAILABLE IN BE
                    const accountId = ((_a = this.formListComponent) === null || _a === void 0 ? void 0 : _a.idForUpdate) ?
                        this.formListComponent.idForUpdate : this.userAccount.id;
                    const params = `?accountId=${accountId}`;
                    this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].signature, this.selectedFile, params)
                        .subscribe((res) => {
                        this.uploadedSignatureFile = res.responseData.data;
                        this.addToESignature(this.uploadedSignatureFile);
                        this.userAccount.signatureAttachmentReference = this.uploadedSignatureFile.signatureAttachmentReference;
                        this.updateUserSignatureReference();
                        this.hideSpinner();
                        this.sweetAlertService.customSuccessMessage('Signature successfully uploaded.');
                        this.selectedFile = null;
                        this.getEsignature();
                        this.isShowUploadButton = false;
                    }, (err) => {
                        this.hideSpinner();
                        this.sweetAlertService.error(err);
                    }, () => {
                        this.hideSpinner();
                    });
                }
                else {
                    this.selectedFile = null;
                }
            });
        }
        updateUserSignatureReference() {
            const endpoint = this.isAscUser ? _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount : _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].updateUserAccount;
            this.apiService.update(endpoint, this.userAccount).subscribe((res) => {
                console.log(res);
            });
        }
        addToESignature(obj) {
            this.eSign.signatureAttachmentReference = obj.signatureAttachmentReference;
            this.eSign.id = obj.id;
            this.eSign.originalFilename = obj.originalFilename;
            this.eSign.filename = obj.filename;
            this.eSign.fileExtension = obj.fileExtension;
            this.eSign.fileURL = obj.fileURL;
            this.eSign.accountId = obj.accountId;
            this.eSign.documentFormat = obj.documentFormat;
        }
        hideSpinner() {
            setTimeout(() => {
                this.spinner.hide();
            }, 1);
        }
        getEsignature() {
            var _a;
            const accountId = ((_a = this.formListComponent) === null || _a === void 0 ? void 0 : _a.idForUpdate) ?
                this.formListComponent.idForUpdate : this.userAccount.id;
            this.spinner.show();
            this.apiService.findByParam(`${_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].signature}/account-id`, accountId).subscribe((res) => {
                var _a;
                if (res) {
                    this.eSign = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
                }
                this.hideSpinner();
            }, (err) => {
                this.hideSpinner();
                console.error(err);
            });
        }
        resendEmail() {
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].adminResendVerificationCode + `/${this.userAccount.username}`, this.userAccount).subscribe((res) => {
                this.sweetAlertService.customSuccessMessage('Email verification has been sent');
            });
        }
        deleteESignature() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: 'Are you sure you want to upload this as e-Signature?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                var _a;
                if (result.value) {
                    this.spinner.show();
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].signature, (_a = this.eSign) === null || _a === void 0 ? void 0 : _a.id).subscribe(res => {
                        this.eSign = new app_core_models_eSignature_model__WEBPACK_IMPORTED_MODULE_9__["ESignature"]();
                        this.previewDocument = false;
                        this.spinner.hide();
                    }, err => this.spinner.hide());
                }
            });
        }
    }
    UserAccountComponent.ɵfac = function UserAccountComponent_Factory(t) { return new (t || UserAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_12__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_12__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_12__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_13__["ValidateFieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8)); };
    UserAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAccountComponent, selectors: [["app-user-account"]], viewQuery: function UserAccountComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectFileButton = _t.first);
            }
        }, decls: 16, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "material-icons"], ["dynamicHeight", "", 4, "ngIf"], [1, "container"], ["mat-align-tabs", "start", 3, "selectedTabChange", 4, "ngIf"], [4, "ngIf"], ["dynamicHeight", ""], ["label", "User Details"], [3, "formGroup"], [1, "fields"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "firstName", "formControlName", "firstName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "middleName", "formControlName", "middleName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "lastName", "formControlName", "lastName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "mobileNumber", "placeholder", "09xxxxxxxxx", "formControlName", "mobileNumber", "maxlength", "11", 3, "ngModel", "ngModelChange", "keydown"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["class", "col", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["class", "fields", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["label", "E-Signature", 4, "ngIf"], ["label", "Account Information"], ["matStepLabel", ""], [1, "row", "fields"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "name", "userName", "formControlName", "userName", "type", "email", 3, "ngModel", "readonly", "ngModelChange"], [1, "row", "col-md-6"], ["appearance", "outline"], ["matInput", "", "name", "password", "formControlName", "password", 3, "type", "ngModel", "ngModelChange"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["class", "badge", 4, "ngIf"], ["matInput", "", "name", "confirmPasswords", "formControlName", "confirmPasswords", 3, "type", "ngModel", "ngModelChange", "keyup"], [1, "col-md-12"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "hidden", "click"], [1, "material-icons", "color__white"], ["name", "userRole", "formControlName", "userRole", "matNativeControl", "", 3, "ngModel", "compareWith", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "warn", 1, "col", 3, "click"], ["name", "company", "formControlName", "company", "matNativeControl", "", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "click"], [1, "badge", "bg-success", "dd"], ["matInput", "", "name", "membersAffiliation", "readonly", "", 3, "value"], ["matInput", "", "name", "companyMobileNo", "readonly", "", 3, "value"], ["matInput", "", "name", "companyTelephoneNo", "readonly", "", 3, "value"], ["matInput", "", "name", "companyTelephoneNo2", "readonly", "", 3, "value"], ["matInput", "", "name", "contactPersonName", "readonly", "", 3, "value"], ["matInput", "", "name", "contactPersonEmail", "readonly", "", 3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["label", "E-Signature"], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], ["class", "file-upload", "type", "file", "accept", "image/*", 3, "change", 4, "ngIf"], ["type", "hidden", "formControlName", "eSignature", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "class", "button-red button-right", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-red button-right", 3, "disabled", "click", 4, "ngIf"], ["class", "row col-md-12", "appearance", "outline", 4, "ngIf"], ["matInput", "", "disabled", "", 3, "value"], ["selectFileButton", ""], ["type", "file", "accept", "image/*", 1, "file-upload", 3, "change"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "click"], [1, "material-icons", "add-document", "color__white"], [1, "material-icons", "add-document"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "disabled", "click"], ["appearance", "outline", 1, "row", "col-md-12"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "400", 3, "data"], ["width", "100%", "height", "400", 3, "src"], [1, "badge"], ["mat-align-tabs", "start", 3, "selectedTabChange"], ["label", "Non ASC users"], ["label", "ASC users"], [3, "dataSource", "displayedColumns", "selectInListFunction"]], template: function UserAccountComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "badge");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " User Account ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserAccountComponent_mat_tab_group_9_Template, 91, 29, "mat-tab-group", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserAccountComponent_mat_tab_group_13_Template, 3, 0, "mat-tab-group", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserAccountComponent_span_15_Template, 2, 2, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAscUser || ctx.userAccount.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFromUserProfile);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFromUserProfile && ctx.displayTable);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_27__["FormListComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]     .mat-step-header .mat-step-icon {\n  background-color: #850000;\n}\n.container-fluid[_ngcontent-%COMP%]     .mat-step-header .mat-step-icon-selected {\n  background-color: #348f00;\n  zoom: 1.8;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  color: #9c0000;\n}\n.container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: gray;\n  font-size: 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  font-size: 15px;\n  color: red;\n}\n.container-fluid[_ngcontent-%COMP%]   .dd[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 15px;\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n}\n.requiredIcon[_ngcontent-%COMP%]     .ng-placeholder::after {\n  font-family: \"Material Icons\";\n  color: #850000;\n  content: \"notification_important\";\n}\nbody[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: scroll;\n  background-color: red;\n}\n  .mat-tab-label .mat-tab-label-content {\n  font-weight: bold;\n}\n.fields[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\nh4[_ngcontent-%COMP%] {\n  margin: 16px 0px 16px -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UseUJBQUE7QUFGSjtBQU1FO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMTjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7QUFUSjtBQVlFO0VBR0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVpKO0FBZUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQW9CQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBakJGO0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBakJGO0FBMkJFO0VBQ0UsaUJBQUE7QUF4Qko7QUE2QkE7RUFDRSxpQkFBQTtBQTFCRjtBQTZCQTtFQUNFLDJCQUFBO0FBMUJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgLy8gcGFkZGluZzogMTBweCA0MHB4O1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAwLCAwKTtcclxuXHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDE0MywgMCk7XHJcbiAgICB6b29tOiAxLjg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHJnYigxNTYsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICAvLyAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuZGQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm5nLXNlbGVjdCB7fVxyXG5cclxuLnJlcXVpcmVkSWNvbiA6Om5nLWRlZXAgLm5nLXBsYWNlaG9sZGVyOjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcclxuICBjb2xvcjogIzg1MDAwMDtcclxuICBjb250ZW50OiBcIm5vdGlmaWNhdGlvbl9pbXBvcnRhbnRcIjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICBtYXQtdGFiLWdyb3VwIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmE2YTIgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmZpZWxkcyB7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICBtYXJnaW46IDE2cHggMHB4IDE2cHggLTEwcHg7XHJcbn1cclxuIl19 */"] });
    return UserAccountComponent;
})();



/***/ }),

/***/ "gaza":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/user-account/user-account.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-account-routing.module */ "B0iI");
/* harmony import */ var _user_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-account.component */ "ea/y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let UserAccountModule = /*@__PURE__*/ (() => {
    class UserAccountModule {
    }
    UserAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserAccountModule });
    UserAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserAccountModule_Factory(t) { return new (t || UserAccountModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]
            ]] });
    return UserAccountModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserAccountModule, { declarations: [_user_account_component__WEBPACK_IMPORTED_MODULE_3__["UserAccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserAccountRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e-es2015.js.map