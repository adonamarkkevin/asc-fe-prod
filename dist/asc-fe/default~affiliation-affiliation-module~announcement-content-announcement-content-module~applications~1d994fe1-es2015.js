(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"],{

/***/ "+TpJ":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/fragments/request-for-special-clearing/request-for-special-clearing.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RequestForSpecialClearingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForSpecialClearingComponent", function() { return RequestForSpecialClearingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_application_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/models/application-request.model */ "an1Z");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function RequestForSpecialClearingComponent_td_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
}
function RequestForSpecialClearingComponent_td_7_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, ctx_r10.applicationRequest == null ? null : ctx_r10.applicationRequest.status == null ? null : ctx_r10.applicationRequest.status.replaceAll("_", " ")));
    }
}
function RequestForSpecialClearingComponent_td_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RequestForSpecialClearingComponent_td_7_span_1_Template, 4, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r1.applicationRequest == null ? null : ctx_r1.applicationRequest.status) != undefined);
    }
}
function RequestForSpecialClearingComponent_td_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RequestForSpecialClearingComponent_td_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.proceedToS2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Proceed to S2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx_r2.applicationRequest == null ? null : ctx_r2.applicationRequest.submitApplicationForm);
    }
}
function RequestForSpecialClearingComponent_mat_panel_title_58_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "label_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " \u00A0Presentor Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
}
function RequestForSpecialClearingComponent_div_59_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r4.s1Application == null ? null : ctx_r4.s1Application.company == null ? null : ctx_r4.s1Application.company.companyName);
    }
}
function RequestForSpecialClearingComponent_div_60_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r5.s1Application == null ? null : ctx_r5.s1Application.company == null ? null : ctx_r5.s1Application.company.completeAddress);
    }
}
function RequestForSpecialClearingComponent_div_61_mat_form_field_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name of Applicant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", (ctx_r13.s1Application == null ? null : ctx_r13.s1Application.applicationOwner == null ? null : ctx_r13.s1Application.applicationOwner.firstName) + " " + (ctx_r13.s1Application == null ? null : ctx_r13.s1Application.applicationOwner == null ? null : ctx_r13.s1Application.applicationOwner.lastName));
    }
}
function RequestForSpecialClearingComponent_div_61_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RequestForSpecialClearingComponent_div_61_mat_form_field_1_Template, 4, 1, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.s1Application.id != null);
    }
}
function RequestForSpecialClearingComponent_div_62_mat_form_field_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r14.s1Application == null ? null : ctx_r14.s1Application.applicationOwner == null ? null : ctx_r14.s1Application.applicationOwner.mobileNumber);
    }
}
function RequestForSpecialClearingComponent_div_62_mat_form_field_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Telephone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r15.s1Application == null ? null : ctx_r15.s1Application.company == null ? null : ctx_r15.s1Application.company.companyTelephoneNo);
    }
}
function RequestForSpecialClearingComponent_div_62_mat_form_field_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r16.s1Application == null ? null : ctx_r16.s1Application.applicationOwner == null ? null : ctx_r16.s1Application.applicationOwner.username);
    }
}
function RequestForSpecialClearingComponent_div_62_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, RequestForSpecialClearingComponent_div_62_mat_form_field_1_Template, 4, 1, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, RequestForSpecialClearingComponent_div_62_mat_form_field_2_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, RequestForSpecialClearingComponent_div_62_mat_form_field_3_Template, 4, 1, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.s1Application.id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.s1Application.id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.s1Application.id != null);
    }
}
function RequestForSpecialClearingComponent_div_80_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RequestForSpecialClearingComponent_div_80_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.submitRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RequestForSpecialClearingComponent_div_80_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r19.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
}
function RequestForSpecialClearingComponent_div_81_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RequestForSpecialClearingComponent_div_81_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r20.onApproveOrDisapprove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "thumb_up_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Approve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RequestForSpecialClearingComponent_div_81_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r22.onApproveOrDisapprove("DISAPPROVED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "thumb_down_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Disapprove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
}
let RequestForSpecialClearingComponent = /*@__PURE__*/ (() => {
    class RequestForSpecialClearingComponent {
        constructor(apiService, dataStorage, sweetAlertService, router, dialogRef, data) {
            this.apiService = apiService;
            this.dataStorage = dataStorage;
            this.sweetAlertService = sweetAlertService;
            this.router = router;
            this.dialogRef = dialogRef;
            this.data = data;
            this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_2__["S1Application"]();
            this.s2Application = new _models__WEBPACK_IMPORTED_MODULE_2__["S2Application"]();
            this.applicationRequest = new app_core_models_application_request_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationRequest"]();
        }
        ngOnInit() {
            this.applicationRequest = this.data.applicationRequest;
            this.s1Application = this.applicationRequest.applicationForm;
            this.currentUser = this.dataStorage.getUserAccount();
            this.setApplicationRequest();
        }
        // static id to select special clearing application type.
        setApplicationRequest() {
            this.applicationRequest.hasSpecialClearing = true;
            this.applicationRequest.applicationType = this.s1Application.applicationType;
            this.applicationRequest.adTitle = this.s1Application.adTitle;
            this.applicationRequest.applicationOwner = this.currentUser;
            this.applicationRequest.brand = this.s1Application.brand;
            this.applicationRequest.product = this.s1Application.product;
            // this.applicationRequest.category = this.s1Application.category;
            this.applicationRequest.company = this.s1Application.company;
            this.applicationRequest.formType = this.s1Application.formType;
            // this.applicationRequest.membersAffiliation = this.s1Application.membersAffiliation;
            this.applicationRequest.submitApplicationForm = false;
            this.applicationRequest.tagLine = this.s1Application.tagLine;
            this.applicationRequest.applicationForm = this.s1Application;
        }
        onApproveOrDisapprove(status = "APPROVED") {
            const displayStatus = status === "APPROVED" ? "approve" : "disapprove";
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: `Are you sure you want to ${displayStatus} this application?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm",
            }).then((result) => {
                if (result.value) {
                    const endpointExtension = status === "APPROVED" ? "/approve" : "/disapprove";
                    // this.s1Application.actionDate = new Date();
                    this.s1Application.actionBy = this.currentUser.username;
                    this.apiService
                        .save(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].applicationRequests}${endpointExtension}/${this.applicationRequest.id}`, this.applicationRequest)
                        .subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage(`Application successfully ${status.toLowerCase()}.`);
                        this.router.navigate(["asc/page/application/s2/special"]);
                    }, (err) => {
                        err.error.message = _shared__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGES"].under_maintenance;
                        this.sweetAlertService.error(err);
                    }, () => {
                        this.dialogRef.close(this.s1Application);
                    });
                }
            });
        }
        submitRequest() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: "Are you sure you want to submit request?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm",
            }).then((result) => {
                if (result.value) {
                    this.apiService
                        .save(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].applicationRequests, this.applicationRequest)
                        .subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage("Request has been submit successfully.");
                        this.router.navigate(["asc/page/application/s2/special"]);
                        this.dialogRef.close();
                    }, (err) => {
                        err.error.message = _shared__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGES"].under_maintenance;
                        this.sweetAlertService.error(err);
                    });
                    this.dialogRef.close();
                }
            });
        }
        proceedToS2() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: "Are you sure you want to apply this application to S2?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm",
            }).then((result) => {
                if (result.value) {
                    this.s2Application.specialClearing = true;
                    this.s2Application.applicationRequest = this.applicationRequest;
                    this.s2Application.applicationForm = this.s1Application;
                    this.s2Application.submissionType = _shared__WEBPACK_IMPORTED_MODULE_3__["SUBMISSION_TYPE"].ORIGINAL; // this.s2Application.applicationForm.submissionType;
                    this.s2Application.internalStatus = "SAVED";
                    this.s2Application.externalStatus = "SAVED";
                    console.log("View S2:", this.s2Application);
                    this.apiService
                        .save(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s2ApplicationFormPresentorSave, this.s2Application)
                        .subscribe((res) => {
                        this.router.navigate([
                            "asc/page/application/s2/update",
                            res.responseData.data.id,
                        ]);
                        this.dialogRef.close();
                    }, (err) => { });
                }
            });
        }
    }
    RequestForSpecialClearingComponent.??fac = function RequestForSpecialClearingComponent_Factory(t) { return new (t || RequestForSpecialClearingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
    RequestForSpecialClearingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RequestForSpecialClearingComponent, selectors: [["app-request-for-special-clearing"]], decls: 82, vars: 21, consts: [[1, "container-fluid"], [1, "row", "title"], [1, "col-md-12"], [4, "ngIf"], ["class", "no-border", 3, "hidden", 4, "ngIf"], [1, "no-border"], [1, "row"], ["appearance", "outline", 1, "col-md-2"], ["appearance", "outline", 1, "col-md-4"], [1, "material-icons", "color__white"], ["appearance", "outline", 1, "col-md-6"], ["matInput", "", "readonly", "", 3, "value"], ["class", "row", 4, "ngIf"], [1, "no-border", 3, "hidden"], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "click"], ["appearance", "outline", 1, "col-md-7"], ["appearance", "outline", 1, "col-md-11"], ["class", "col-md-8", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-8"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["class", "col-md-3", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-3"], ["mat-raised-button", "", 1, "button-red", 3, "click"], ["mat-dialog-actions", ""], ["align", "end", 1, "dialog-button-content"], [1, "confirm", 3, "click"], [1, "warn", 3, "click"]], template: function RequestForSpecialClearingComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, RequestForSpecialClearingComponent_td_6_Template, 3, 0, "td", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, RequestForSpecialClearingComponent_td_7_Template, 2, 1, "td", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, RequestForSpecialClearingComponent_td_8_Template, 5, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "td", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Form Type: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Application Type:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "uppercase");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "i", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "label_important");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " \u00A0Client Information ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Company Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Company Membership Affiliation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Brand");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Product");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Category");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, RequestForSpecialClearingComponent_mat_panel_title_58_Template, 4, 0, "mat-panel-title", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, RequestForSpecialClearingComponent_div_59_Template, 5, 1, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, RequestForSpecialClearingComponent_div_60_Template, 5, 1, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, RequestForSpecialClearingComponent_div_61_Template, 2, 1, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, RequestForSpecialClearingComponent_div_62_Template, 4, 3, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "i", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "label_important");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " \u00A0Material Information ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Ad Title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Tag Line");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, RequestForSpecialClearingComponent_div_80_Template, 10, 0, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, RequestForSpecialClearingComponent_div_81_Template, 11, 0, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.applicationRequest == null ? null : ctx.applicationRequest.status) != undefined);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.applicationRequest == null ? null : ctx.applicationRequest.status) != undefined);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.applicationRequest == null ? null : ctx.applicationRequest.status) === "APPROVED" && (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) == "ROLE_APPLICANT");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.s1Application == null ? null : ctx.s1Application.formType.replaceAll("_", " "));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](27, 19, ctx.s1Application == null ? null : ctx.s1Application.applicationType == null ? null : ctx.s1Application.applicationType.description.replaceAll("_", " ")));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.company == null ? null : ctx.s1Application.company.companyName);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.company == null ? null : ctx.s1Application.company.membersAffiliation == null ? null : ctx.s1Application.company.membersAffiliation.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.brand == null ? null : ctx.s1Application.brand.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.product == null ? null : ctx.s1Application.product.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.product == null ? null : ctx.s1Application.product.category == null ? null : ctx.s1Application.product.category.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) === "ROLE_SUPER_ADMIN");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.adTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.s1Application == null ? null : ctx.s1Application.tagLine);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.applicationRequest == null ? null : ctx.applicationRequest.status) === undefined);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.applicationRequest == null ? null : ctx.applicationRequest.status) === "FOR_APPROVAL" && ((ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) == "ROLE_ADMIN" || (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) == "ROLE_SUPER_ADMIN"));
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: ["mat-panel-title[_ngcontent-%COMP%] {\n  background-color: #b90000;\n  margin: 20px 0px;\n  color: white;\n  padding: 10px;\n  font-weight: 600;\n}\n\n\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 7px;\n  font: 500 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  width: 31%;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #ff5252;\n  color: white;\n  border: 1px solid white;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(even) {\n  color: #ff5252;\n  border: 1px solid #0000001f;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 0px !important;\n  padding: 0px !important;\n  width: 5px;\n  height: 5px !important;\n}\n\n.dialog-button-content[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  text-align: center;\n}\n\n.dialog-button-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  border: none;\n  padding: 5px 10px 5px 5px;\n  margin: 0px 5px;\n  font-weight: 500;\n  border-radius: 5px;\n}\n\n.dialog-button-content[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.dialog-button-content[_ngcontent-%COMP%]   .caution[_ngcontent-%COMP%] {\n  background-color: #dfd000;\n  color: black;\n}\n\n.dialog-button-content[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%] {\n  background-color: #449bff;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.button-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvcmVxdWVzdC1mb3Itc3BlY2lhbC1jbGVhcmluZy9yZXF1ZXN0LWZvci1zcGVjaWFsLWNsZWFyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQSw2QkFBQTs7QUFFRTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtFQUNBLFVBQUE7QUFETjs7QUFJRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRk47O0FBS0U7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUFITjs7QUFPQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUpGOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUxGOztBQU9FO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTE47O0FBUUU7RUFDSSxxQkFBQTtBQU5OOztBQVNFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBUE47O0FBVUU7RUFDSSx5QkFBQTtBQVJOOztBQVlBO0VBQ0UsV0FBQTtBQVRGOztBQVlBO0VBQ0UsaUJBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhZ21lbnRzL3JlcXVlc3QtZm9yLXNwZWNpYWwtY2xlYXJpbmcvcmVxdWVzdC1mb3Itc3BlY2lhbC1jbGVhcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYW5lbC10aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDAsIDApO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLyogdGFibGUgZm9yIHN0YXR1cyBkaXNwbGF5ICovXHJcbnRhYmxlIHRyIHtcclxuICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICBmb250OiA1MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB3aWR0aDogMzElO1xyXG4gIH1cclxuXHJcbiAgdGQ6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgdGQ6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgY29sb3I6ICNmZjUyNTI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxZjtcclxuICB9XHJcbn1cclxuXHJcbi5uby1ib3JkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGJ1dHRvblxyXG4uZGlhbG9nLWJ1dHRvbi1jb250ZW50IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLndhcm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuY2F1dGlvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIwOCwgMCk7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAuY29uZmlybSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMTU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });
    return RequestForSpecialClearingComponent;
})();



/***/ }),

/***/ "+iQW":
/*!*************************************************************!*\
  !*** ./src/app/core/models/screener-reviewer-pair.model.ts ***!
  \*************************************************************/
/*! exports provided: ScreenerReviewerPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPair", function() { return ScreenerReviewerPair; });
class ScreenerReviewerPair {
}



/***/ }),

/***/ "/RNn":
/*!*************************************************************************!*\
  !*** ./src/app/core/models/numberOfMultipleApplicationAllowed.model.ts ***!
  \*************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowed", function() { return NumberOfMultipleApplicationAllowed; });
class NumberOfMultipleApplicationAllowed {
}



/***/ }),

/***/ "/sqU":
/*!************************************************************!*\
  !*** ./src/app/core/models/application-rejection.model.ts ***!
  \************************************************************/
/*! exports provided: ApplicationRejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRejection", function() { return ApplicationRejection; });
/* harmony import */ var _type_of_reason_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-of-reason.model */ "50w+");

class ApplicationRejection {
    constructor() {
        this.typeOfReason = new _type_of_reason_model__WEBPACK_IMPORTED_MODULE_0__["TypeOfReason"]();
    }
}



/***/ }),

/***/ "1T39":
/*!************************************************************!*\
  !*** ./src/app/core/models/type-of-main-document.model.ts ***!
  \************************************************************/
/*! exports provided: TypeOfMainDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMainDocument", function() { return TypeOfMainDocument; });
class TypeOfMainDocument {
}



/***/ }),

/***/ "2CCT":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/fragments/reject-disapproved-reason/reject-disapproved-reason.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RejectDisapprovedReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectDisapprovedReasonComponent", function() { return RejectDisapprovedReasonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_application_rejection_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/models/application-rejection.model */ "/sqU");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


















const _c0 = ["selectReason"];
function RejectDisapprovedReasonComponent_mat_label_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.errMsg);
    }
}
function RejectDisapprovedReasonComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r5.reason, " ");
    }
}
function RejectDisapprovedReasonComponent_table_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "label_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RejectDisapprovedReasonComponent_table_18_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const i_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.removeReason(i_r6.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r6.reason, " ");
    }
}
function RejectDisapprovedReasonComponent_div_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "REMARKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RejectDisapprovedReasonComponent_div_19_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.remarks);
    }
}
let RejectDisapprovedReasonComponent = /*@__PURE__*/ (() => {
    class RejectDisapprovedReasonComponent {
        constructor(apiService, sweetAlertService, router, dataStorage, spinner, dialogRef, data) {
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.router = router;
            this.dataStorage = dataStorage;
            this.spinner = spinner;
            this.dialogRef = dialogRef;
            this.data = data;
            this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_2__["S1Application"]();
            this.s2Application = new _models__WEBPACK_IMPORTED_MODULE_2__["S2Application"]();
            this.applicationRejection = new app_core_models_application_rejection_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationRejection"]();
            this.typeOfReason = new _models__WEBPACK_IMPORTED_MODULE_2__["TypeOfReason"]();
            this.applicationRejectionList = [];
            this.typeOfReasonList = [];
            this.selectedReasonList = [];
        }
        ngOnInit() {
            this.getTypeOfReasonsList();
            this.s1Application = this.data.s1Application;
            this.s2Application = this.data.s2Application;
            this.ascUser = this.data.ascUser;
            this.action = this.data.action;
            this.status = this.data.status;
            this.headerTitle = this.action;
            this.currentUser = this.dataStorage.getUserAccount();
        }
        getTypeOfReasonsList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfReason).subscribe((res) => {
                this.typeOfReasonList = res.responseData.data;
                console.log('reasons => ', this.typeOfReasonList);
            });
        }
        setRejectionData() {
            let endpoint;
            if (this.data.applicationStage === 's1') {
                this.applicationRejection.applicationForm = this.s1Application;
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s1ReasonOfRejection;
            }
            else {
                this.applicationRejection.applicationS2 = this.s2Application;
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s2ReasonOfRejection;
            }
            this.applicationRejection.actionBy = this.currentUser;
            this.applicationRejection.actionDate = new Date();
            this.applicationRejection.typeOfReason = this.typeOfReason;
            this.applicationRejectionList.push(this.applicationRejection);
            this.applicationRejection = new app_core_models_application_rejection_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationRejection"]();
        }
        selectedReason(data) {
            const isExist = this.selectedReasonList.filter(reason => reason.id === data.id);
            if (isExist.length === 0) {
                this.selectedReasonList.push(data);
                this.typeOfReason = data;
                this.setRejectionData();
                this.errMsg = '';
            }
            else {
                this.errMsg = 'The selected reason is already added.';
            }
            this.mySelectReason.nativeElement = '';
        }
        checkOthersReason() {
            return this.selectedReasonList.filter(e => e.id === 4).length ? true : false;
        }
        removeReason(id) {
            const index = this.selectedReasonList.findIndex(srl => srl.id === id);
            this.selectedReasonList.splice(index, 1);
        }
        cancel() {
            this.dialogRef.close();
        }
        submitRejectionDisapproved() {
            // console.log('PARAMETER', this.ascUser, this.action, this.status);
            let msg;
            let endpointReason;
            let endpointReject;
            let swalMsg = 'Application has been rejected/disapproved successfully.';
            let applicationForm;
            let navigateToList;
            if (this.status === _shared__WEBPACK_IMPORTED_MODULE_3__["APPLICATION_STATUS"].S1_APPLICATION_REJECTED || this.status === _shared__WEBPACK_IMPORTED_MODULE_3__["APPLICATION_STATUS_S2"].S2_APPLICATION_REJECTED) {
                msg = _shared__WEBPACK_IMPORTED_MODULE_3__["COMMON_FUNCTION"].REJECT;
                swalMsg = 'Application has been rejected successfully.';
            }
            else if (this.status === _shared__WEBPACK_IMPORTED_MODULE_3__["APPLICATION_STATUS"].S1_APPLICATION_DISAPPROVED ||
                this.status === _shared__WEBPACK_IMPORTED_MODULE_3__["APPLICATION_STATUS_S2"].S2_APPLICATION_DISAPPROVED) {
                msg = _shared__WEBPACK_IMPORTED_MODULE_3__["COMMON_FUNCTION"].DISAPPROVED;
                swalMsg = 'Application has been disapproved.';
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Are you sure you want to ' + msg + ' this application?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.spinner.show();
                    if (this.data.applicationStage === 's1') {
                        applicationForm = this.s1Application;
                        navigateToList = 'asc/page/application/s1/lists';
                        endpointReason = _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s1ReasonOfRejection;
                        endpointReject = this.s1Application.submissionType === _shared__WEBPACK_IMPORTED_MODULE_3__["SUBMISSION_TYPE"].ORIGINAL
                            ? this.s1Application.decisionStatus === _shared__WEBPACK_IMPORTED_MODULE_3__["APP_DECISION_STATUS"].INCOMPLETE
                                ? _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s1ApplicationFormEncoderRejectCompliance : _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s1ApplicationFormEncoderReject
                            : _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s1ApplicationFormEncoderRejectRevision;
                    }
                    else {
                        applicationForm = this.s2Application;
                        navigateToList = 'asc/page/application/s2/lists';
                        endpointReason = _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s2ReasonOfRejection;
                        endpointReject = _shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].s2ApplicationFormEncoderReject;
                    }
                    console.info('apllicationRejectionList => ', this.applicationRejectionList);
                    // this.spinner.hide();
                    this.applicationRejectionList.filter(e => {
                        if (e.typeOfReason.id === 4) {
                            e.remarks = this.remarks;
                        }
                    });
                    this.apiService.save(endpointReason, this.applicationRejectionList).subscribe((res) => {
                        this.apiService.save(endpointReject, applicationForm).subscribe((res1) => {
                            this.s1Application = res1.responseData.data;
                            // Forward Multiple Application
                            if (this.s1Application.submissionType === _shared__WEBPACK_IMPORTED_MODULE_3__["SUBMISSION_TYPE"].ORIGINAL &&
                                this.data.applicationStage === 's1' && this.s1Application.multipleApplication &&
                                this.s1Application.multipleApplication.actualNumberOfApplicationForm ===
                                    this.s1Application.multipleApplication.countVerifiedApplicationForm &&
                                this.s1Application.internalStatus !== _shared__WEBPACK_IMPORTED_MODULE_3__["APPLICATION_STATUS"].S1_APPLICATION_REVIEWED) {
                                this.forwardMultipleAppsTo();
                            }
                            else {
                                this.spinner.hide();
                                this.sweetAlertService.customSuccessMessage(swalMsg);
                                this.dialogRef.close();
                                this.router.navigateByUrl(navigateToList);
                            }
                        });
                    });
                }
            });
        }
        forwardMultipleAppsTo() {
            console.log('forwardMultipleAppsTo');
            console.log(this.s1Application);
            this.s1Application.multipleApplication.assignedEncoder = this.s1Application.assignedEncoder;
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].forwardMultipleAppFormToAdSpe, this.s1Application.multipleApplication).subscribe((res) => {
                console.log(res);
                this.spinner.hide();
                this.sweetAlertService.customSuccessMessage('Multiple application successfully forwarded to the next user.');
                this.dialogRef.close();
                this.router.navigateByUrl('asc/page/application/s1/lists');
            }, (err) => {
                this.spinner.hide();
                this.sweetAlertService.error(err);
            }, () => {
                this.spinner.hide();
            });
        }
    }
    RejectDisapprovedReasonComponent.??fac = function RejectDisapprovedReasonComponent_Factory(t) { return new (t || RejectDisapprovedReasonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    RejectDisapprovedReasonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RejectDisapprovedReasonComponent, selectors: [["app-reject-disapproved-reason"]], viewQuery: function RejectDisapprovedReasonComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.mySelectReason = _t.first);
            }
        }, decls: 31, vars: 5, consts: [[1, "container-fluid"], [1, "material-icons"], [1, "row"], ["class", "errMsg", 4, "ngIf"], ["appearance", "outline", 1, "col-md-12"], [3, "selectionChange"], ["selectReason", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col", "list-content"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "button-content"], [1, "col"], ["mat-raised-button", "", 1, "button-red", 3, "disabled", "click"], [1, "material-icons", "color__white"], ["mat-raised-button", "", 1, "button-red", 3, "click"], [1, "errMsg"], [3, "value"], [1, "reason-description"], [1, "material-icons", 3, "click"], ["matInput", "", "name", "remarks", 3, "ngModel", "ngModelChange"]], template: function RejectDisapprovedReasonComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "report_problem");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Reasons for rejection");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, RejectDisapprovedReasonComponent_mat_label_7_Template, 2, 1, "mat-label", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Select Reason:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-select", 5, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function RejectDisapprovedReasonComponent_Template_mat_select_selectionChange_11_listener($event) { return ctx.selectedReason($event.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, RejectDisapprovedReasonComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Selected Reasons:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, RejectDisapprovedReasonComponent_table_18_Template, 9, 1, "table", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, RejectDisapprovedReasonComponent_div_19_Template, 5, 1, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RejectDisapprovedReasonComponent_Template_button_click_22_listener() { return ctx.submitRejectionDisapproved(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "verified");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Submit Rejection ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RejectDisapprovedReasonComponent_Template_button_click_27_listener() { return ctx.cancel(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Cancel ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errMsg);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.typeOfReasonList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.selectedReasonList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.checkOthersReason());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.selectedReasonList.length === 0);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\nh1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ad0000;\n}\n.list-content[_ngcontent-%COMP%] {\n  border: solid 1px #b6b6b6;\n  border-radius: 5px;\n  margin: 12px;\n  min-height: 5em;\n  max-height: 10em;\n  overflow: auto;\n  padding: 10px 10px;\n}\n.list-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #a00000;\n  text-align: end;\n  font-size: 20px;\n  vertical-align: middle;\n}\n.list-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .reason-description[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.list-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.list-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.button-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.errMsg[_ngcontent-%COMP%] {\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvcmVqZWN0LWRpc2FwcHJvdmVkLXJlYXNvbi9yZWplY3QtZGlzYXBwcm92ZWQtcmVhc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQU1JO0VBQ0ksV0FBQTtBQUhSO0FBT0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhZ21lbnRzL3JlamVjdC1kaXNhcHByb3ZlZC1yZWFzb24vcmVqZWN0LWRpc2FwcHJvdmVkLXJlYXNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBjb2xvcjogcmdiKDE3MywgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGlzdC1jb250ZW50e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogNWVtO1xyXG4gICAgbWF4LWhlaWdodDogMTBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnJlYXNvbi1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyTXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iXX0= */"] });
    return RejectDisapprovedReasonComponent;
})();



/***/ }),

/***/ "2yZ1":
/*!***************************************************!*\
  !*** ./src/app/core/models/rationale-s2.model.ts ***!
  \***************************************************/
/*! exports provided: RationaleS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationaleS2", function() { return RationaleS2; });
class RationaleS2 {
}



/***/ }),

/***/ "551E":
/*!************************************************!*\
  !*** ./src/app/core/models/rationale.model.ts ***!
  \************************************************/
/*! exports provided: Rationale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rationale", function() { return Rationale; });
class Rationale {
}



/***/ }),

/***/ "7Tf7":
/*!*******************************************************!*\
  !*** ./src/app/modules/fragments/fragments.module.ts ***!
  \*******************************************************/
/*! exports provided: FragmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsModule", function() { return FragmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-list/form-list.component */ "DeKZ");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _fragments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fragments-routing.module */ "GE5f");
/* harmony import */ var _reject_disapproved_reason_reject_disapproved_reason_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reject-disapproved-reason/reject-disapproved-reason.component */ "2CCT");
/* harmony import */ var _request_for_special_clearing_request_for_special_clearing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-for-special-clearing/request-for-special-clearing.component */ "+TpJ");
/* harmony import */ var _incomplete_disapproved_rationale_incomplete_disapproved_rationale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./incomplete-disapproved-rationale/incomplete-disapproved-rationale.component */ "CDuV");










let FragmentsModule = /*@__PURE__*/ (() => {
    class FragmentsModule {
    }
    FragmentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: FragmentsModule });
    FragmentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function FragmentsModule_Factory(t) { return new (t || FragmentsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fragments_routing_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            ]] });
    return FragmentsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FragmentsModule, { declarations: [_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_2__["FormActionButtonsComponent"],
            _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"],
            _reject_disapproved_reason_reject_disapproved_reason_component__WEBPACK_IMPORTED_MODULE_6__["RejectDisapprovedReasonComponent"],
            _request_for_special_clearing_request_for_special_clearing_component__WEBPACK_IMPORTED_MODULE_7__["RequestForSpecialClearingComponent"],
            _incomplete_disapproved_rationale_incomplete_disapproved_rationale_component__WEBPACK_IMPORTED_MODULE_8__["IncompleteDisapprovedRationaleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fragments_routing_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]], exports: [_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_2__["FormActionButtonsComponent"],
            _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"]] });
})();



/***/ }),

/***/ "BFeN":
/*!*****************************************************************!*\
  !*** ./src/app/core/models/application-rationale-list.model.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationRationaleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRationaleList", function() { return ApplicationRationaleList; });
class ApplicationRationaleList {
}



/***/ }),

/***/ "CDuV":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/incomplete-disapproved-rationale/incomplete-disapproved-rationale.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: IncompleteDisapprovedRationaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompleteDisapprovedRationaleComponent", function() { return IncompleteDisapprovedRationaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_application_rationale_list_s2_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/models/application-rationale-list-s2.model */ "yzT2");
/* harmony import */ var app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/models/application-rationale-list.model */ "BFeN");
/* harmony import */ var app_core_models_rationale_s2_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/rationale-s2.model */ "2yZ1");
/* harmony import */ var app_core_models_rationale_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/models/rationale.model */ "551E");
/* harmony import */ var app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/models/type-of-rational.model */ "Do+y");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");





















function IncompleteDisapprovedRationaleComponent_mat_option_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r2)("matTooltip", i_r2.rationale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r2.rationale, " ");
    }
}
function IncompleteDisapprovedRationaleComponent_table_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "label_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function IncompleteDisapprovedRationaleComponent_table_20_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const i_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.removeRationale(i_r3.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r3 == null ? null : i_r3.typeOfRationale == null ? null : i_r3.typeOfRationale.rationale, " ");
    }
}
let IncompleteDisapprovedRationaleComponent = /*@__PURE__*/ (() => {
    class IncompleteDisapprovedRationaleComponent {
        constructor(apiService, sweetAlertService, router, dataStorage, spinner, dialogRef, data) {
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.router = router;
            this.dataStorage = dataStorage;
            this.spinner = spinner;
            this.dialogRef = dialogRef;
            this.data = data;
            this.rationale = new app_core_models_rationale_model__WEBPACK_IMPORTED_MODULE_6__["Rationale"]();
            this.rationaleS2 = new app_core_models_rationale_s2_model__WEBPACK_IMPORTED_MODULE_5__["RationaleS2"]();
            this.typeOfRational = new app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_7__["TypeOfRational"]();
            this.applicationRationaleList = new app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationRationaleList"]();
            this.applicationRationaleListS2 = new app_core_models_application_rationale_list_s2_model__WEBPACK_IMPORTED_MODULE_3__["ApplicationS2RationaleList"]();
            this.rationaleList = [];
            this.selectedRationaleList = [];
            this.submissionType = '';
            this.isOther = false;
            this.otherDescription = '';
            if (data.applicationStage === 's1') {
                this.submissionType = data.s1Application.submissionType;
            }
            else {
                this.submissionType = data.s2Application.submissionType;
            }
        }
        ngOnInit() {
            this.getRationale();
            this.currentUser = this.dataStorage.getUserAccount();
            console.log('ksahkjakj', this.data);
        }
        getRationale() {
            let endpoint;
            let submissionTypeForm;
            if (this.data.applicationStage === 's1') {
                submissionTypeForm = this.data.s1Application.submissionType;
                this.rationale.applicationForm = this.data.s1Application;
            }
            else {
                submissionTypeForm = this.data.s2Application.submissionType;
                this.rationale.applicationFormS2 = this.data.s2Application;
            }
            if (submissionTypeForm === _shared__WEBPACK_IMPORTED_MODULE_2__["SUBMISSION_TYPE"].ORIGINAL) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].typeOfRationale;
            }
            else if (submissionTypeForm === _shared__WEBPACK_IMPORTED_MODULE_2__["SUBMISSION_TYPE"].REVISION) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].typeOfRationale + '/category/FOR_COMPLIANCE';
            }
            else if (submissionTypeForm === _shared__WEBPACK_IMPORTED_MODULE_2__["SUBMISSION_TYPE"].COMPLIANCE ||
                this.data.s1Application.decisionStatus === _shared__WEBPACK_IMPORTED_MODULE_2__["APP_DECISION_STATUS"].INCOMPLETE) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].typeOfRationale + '/category/FOR_INCOMPLETE_DECISION';
            }
            else if (this.data.s1Application.hasToa) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].typeOfRationale + '/category/FOR_TOA_APPLICATION';
            }
            this.apiService.findAll(endpoint).subscribe((res) => {
                this.rationaleList = res.responseData.data;
                console.log(this.rationaleList);
            });
        }
        selectRationale(data) {
            let list = [];
            if (this.data.applicationStage === 's1') {
                this.applicationRationaleList.typeOfRationale = data;
                this.selectedRationaleList.push(this.applicationRationaleList);
                this.applicationRationaleList = new app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationRationaleList"]();
            }
            else {
                this.applicationRationaleList.typeOfRationale = data;
                this.selectedRationaleList.push(this.applicationRationaleList);
                this.applicationRationaleList = new app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_4__["ApplicationRationaleList"]();
            }
            console.log(this.selectedRationaleList);
        }
        removeRationale(id) {
            const index = this.selectedRationaleList.findIndex(srl => srl.id === id);
            this.selectedRationaleList.splice(index, 1);
        }
        submitRationale() {
            let endpoint;
            let swalMessage;
            let activeModel;
            this.spinner.show();
            if (this.data.applicationStage === 's1') {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].applicationRationale;
                swalMessage = 'S1 application rationale has been saved!';
            }
            else {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].applicationRationaleS2;
                swalMessage = 'S2 application rationale has been saved!';
                this.rationale.id = 0;
            }
            this.rationale.applicationRationaleLists = this.selectedRationaleList;
            this.rationale.actionDate = new Date();
            this.rationale.actionBy = this.currentUser;
            this.rationale.others = this.otherDescription;
            console.log('save rationale', this.rationale);
            this.apiService.save(endpoint, this.rationale).subscribe((res) => {
                this.spinner.hide();
                this.sweetAlertService.customSuccessMessage(swalMessage);
                this.dialogRef.close(res);
            }, (err) => {
                console.log(err);
            });
        }
        cancel() {
            this.dialogRef.close();
        }
    }
    IncompleteDisapprovedRationaleComponent.??fac = function IncompleteDisapprovedRationaleComponent_Factory(t) { return new (t || IncompleteDisapprovedRationaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    IncompleteDisapprovedRationaleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: IncompleteDisapprovedRationaleComponent, selectors: [["app-incomplete-disapproved-rationale"]], decls: 32, vars: 4, consts: [[1, "container-fluid"], [1, "material-icons"], [1, "row"], ["appearance", "outline", 1, "col-md-12"], [1, "mat-select-value-text", 3, "selectionChange"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "col", "list-content"], [4, "ngFor", "ngForOf"], [1, "row", "button-content"], [1, "col"], ["mat-raised-button", "", 1, "button-red", 3, "disabled", "click"], [1, "material-icons", "color__white"], ["mat-raised-button", "", 1, "button-red", 3, "click"], [3, "value", "matTooltip"], [1, "reason-description"], [1, "material-icons", 3, "click"]], template: function IncompleteDisapprovedRationaleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "info");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Add Rationale");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Select Rationale:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectionChange", function IncompleteDisapprovedRationaleComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.selectRationale($event.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, IncompleteDisapprovedRationaleComponent_mat_option_11_Template, 2, 3, "mat-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "OTHER, PLEASE SPECIFY:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "textarea", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function IncompleteDisapprovedRationaleComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.otherDescription = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Selected Rationale:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, IncompleteDisapprovedRationaleComponent_table_20_Template, 9, 1, "table", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function IncompleteDisapprovedRationaleComponent_Template_button_click_23_listener() { return ctx.submitRationale(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "i", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "verified");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Submit Rationale ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function IncompleteDisapprovedRationaleComponent_Template_button_click_28_listener() { return ctx.cancel(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "i", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Cancel ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.rationaleList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.otherDescription);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.selectedRationaleList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.selectedRationaleList.length === 0 && !ctx.otherDescription);
            }
        }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\nh1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ad0000;\n}\n.list-content[_ngcontent-%COMP%] {\n  border: solid 1px #b6b6b6;\n  border-radius: 5px;\n  margin: 12px;\n  min-height: 5em;\n  max-height: 10em;\n  overflow: auto;\n  padding: 10px 10px;\n}\n.list-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #a00000;\n  text-align: end;\n  font-size: 20px;\n  vertical-align: middle;\n}\n.list-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.list-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .reason-description[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.list-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.list-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.button-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.errMsg[_ngcontent-%COMP%] {\n  color: red;\n  font-style: italic;\n}\n  .mat-select-value-text {\n  word-wrap: break-word;\n  white-space: normal;\n}\n  mat-option.mat-option {\n  overflow-wrap: break-word;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mat-option-text.mat-option-text[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvaW5jb21wbGV0ZS1kaXNhcHByb3ZlZC1yYXRpb25hbGUvaW5jb21wbGV0ZS1kaXNhcHByb3ZlZC1yYXRpb25hbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUdJO0VBQ0ksZUFBQTtBQURSO0FBTUk7RUFDSSxXQUFBO0FBSFI7QUFPQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFRQTtFQU9JLHlCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBWko7QUFlRTtFQUNFLG1CQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZyYWdtZW50cy9pbmNvbXBsZXRlLWRpc2FwcHJvdmVkLXJhdGlvbmFsZS9pbmNvbXBsZXRlLWRpc2FwcHJvdmVkLXJhdGlvbmFsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBjb2xvcjogcmdiKDE3MywgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGlzdC1jb250ZW50e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogNWVtO1xyXG4gICAgbWF4LWhlaWdodDogMTBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnJlYXNvbi1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyTXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIC8vIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1vcHRpb24ubWF0LW9wdGlvbiB7XHJcbiAgICAvLyBtYXJnaW46IDByZW0gMDtcclxuICAgIC8vIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAvLyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAvLyAvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIC8vIHdpZHRoOiAxMHJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtb3B0aW9uLXRleHQubWF0LW9wdGlvbi10ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4iXX0= */"] });
    return IncompleteDisapprovedRationaleComponent;
})();



/***/ }),

/***/ "DeKZ":
/*!********************************************************************!*\
  !*** ./src/app/modules/fragments/form-list/form-list.component.ts ***!
  \********************************************************************/
/*! exports provided: FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return FormListComponent; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/api.service */ "qc5V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/services/alert-message/sweet-alert.service */ "4nSt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















const _c0 = ["myTemplate"];
const _c1 = ["signatoryEdit"];
function FormListComponent_th_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Email Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_4_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r234); const element_r232 = ctx.$implicit; const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r233.getObject(element_r232 == null ? null : element_r232.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r232 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r232 == null ? null : element_r232.emailCode, " ");
    }
}
function FormListComponent_th_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Subject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_7_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r237); const element_r235 = ctx.$implicit; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r236.getObject(element_r235 == null ? null : element_r235.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r235 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r235 == null ? null : element_r235.subject, " ");
    }
}
function FormListComponent_th_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_10_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r240); const element_r238 = ctx.$implicit; const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r239.getObject(element_r238 == null ? null : element_r238.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r238 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r238 == null ? null : element_r238.category == null ? null : element_r238.category.description, " ");
    }
}
function FormListComponent_th_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type Of Main Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_13_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r243); const element_r241 = ctx.$implicit; const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r242.getObject(element_r241 == null ? null : element_r241.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r241 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r241 == null ? null : element_r241.typeOfMainDocument, " ");
    }
}
function FormListComponent_th_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type Of Main Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_16_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r246); const element_r244 = ctx.$implicit; const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r245.getObject(element_r244 == null ? null : element_r244.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r244 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r244 == null ? null : element_r244.typeOfMainDocument == null ? null : element_r244.typeOfMainDocument.typeOfMainDocument, " ");
    }
}
function FormListComponent_th_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Number Of Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_19_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r249); const element_r247 = ctx.$implicit; const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r248.getObject(element_r247 == null ? null : element_r247.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r247 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r247 == null ? null : element_r247.noOfHours, " ");
    }
}
function FormListComponent_th_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Number Of Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_22_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r252); const element_r250 = ctx.$implicit; const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r251.getObject(element_r250 == null ? null : element_r250.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r250 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r250 == null ? null : element_r250.noOfDays, " ");
    }
}
function FormListComponent_th_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Number Of Working Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_25_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r255); const element_r253 = ctx.$implicit; const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r254.getObject(element_r253 == null ? null : element_r253.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r253 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r253 == null ? null : element_r253.noOfWorkingDays, " ");
    }
}
function FormListComponent_th_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type of Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_28_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r258); const element_r256 = ctx.$implicit; const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r257.getObject(element_r256 == null ? null : element_r256.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r256 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r256 == null ? null : element_r256.typeOfMedium, " ");
    }
}
function FormListComponent_th_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type of Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_31_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r261); const element_r259 = ctx.$implicit; const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r260.getObject(element_r259 == null ? null : element_r259.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r259 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r259 == null ? null : element_r259.typeOfMedium == null ? null : element_r259.typeOfMedium.description, " ");
    }
}
function FormListComponent_th_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Reason ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_34_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r264); const element_r262 = ctx.$implicit; const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r263.getObject(element_r262 == null ? null : element_r262.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r262 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r262 == null ? null : element_r262.reason, " ");
    }
}
function FormListComponent_th_36_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_37_Template(rf, ctx) {
    if (rf & 1) {
        const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_37_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r267); const element_r265 = ctx.$implicit; const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r266.getObject(element_r265 == null ? null : element_r265.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r265 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r265 == null ? null : element_r265.description, " ");
    }
}
function FormListComponent_th_39_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Body ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_40_Template(rf, ctx) {
    if (rf & 1) {
        const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_40_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r270); const element_r268 = ctx.$implicit; const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r269.getObject(element_r268 == null ? null : element_r268.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r268 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", element_r268 == null ? null : element_r268.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
    }
}
function FormListComponent_th_42_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Dialect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_43_Template(rf, ctx) {
    if (rf & 1) {
        const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_43_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r273); const element_r271 = ctx.$implicit; const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r272.getObject(element_r271 == null ? null : element_r271.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r271 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r271 == null ? null : element_r271.dialect, " ");
    }
}
function FormListComponent_th_45_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Application Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_46_Template(rf, ctx) {
    if (rf & 1) {
        const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_46_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r276); const element_r274 = ctx.$implicit; const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r275.getObject(element_r274 == null ? null : element_r274.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r274 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r274 == null ? null : element_r274.applicationType, " ");
    }
}
function FormListComponent_th_48_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Length From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_49_Template(rf, ctx) {
    if (rf & 1) {
        const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_49_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r279); const element_r277 = ctx.$implicit; const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r278.getObject(element_r277 == null ? null : element_r277.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r277 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r277 == null ? null : element_r277.lengthFrom, " ");
    }
}
function FormListComponent_th_51_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Length To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_52_Template(rf, ctx) {
    if (rf & 1) {
        const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_52_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r282); const element_r280 = ctx.$implicit; const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r281.getObject(element_r280 == null ? null : element_r280.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r280 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r280 == null ? null : element_r280.lengthTo, " ");
    }
}
function FormListComponent_th_54_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Offline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_55_Template(rf, ctx) {
    if (rf & 1) {
        const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_55_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r285); const element_r283 = ctx.$implicit; const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r284.getObject(element_r283 == null ? null : element_r283.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r283 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r283 == null ? null : element_r283.memberOffline, " ");
    }
}
function FormListComponent_th_57_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_58_Template(rf, ctx) {
    if (rf & 1) {
        const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_58_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r288); const element_r286 = ctx.$implicit; const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r287.getObject(element_r286 == null ? null : element_r286.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r286 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r286 == null ? null : element_r286.memberOnline, " ");
    }
}
function FormListComponent_th_60_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Non Member Offline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_61_Template(rf, ctx) {
    if (rf & 1) {
        const _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_61_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r291); const element_r289 = ctx.$implicit; const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r290.getObject(element_r289 == null ? null : element_r289.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r289 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r289 == null ? null : element_r289.nonMemberOffline, " ");
    }
}
function FormListComponent_th_63_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Non Member Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_64_Template(rf, ctx) {
    if (rf & 1) {
        const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_64_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r294); const element_r292 = ctx.$implicit; const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r293.getObject(element_r292 == null ? null : element_r292.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r292 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r292 == null ? null : element_r292.nonMemberOnline, " ");
    }
}
function FormListComponent_th_66_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Screener Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_67_Template(rf, ctx) {
    if (rf & 1) {
        const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_67_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r297); const element_r295 = ctx.$implicit; const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r296.getObject(element_r295 == null ? null : element_r295.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r295 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r295 == null ? null : element_r295.screener == null ? null : element_r295.screener.firstName, " ", element_r295 == null ? null : element_r295.screener == null ? null : element_r295.screener.lastName, " ");
    }
}
function FormListComponent_th_69_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Reviewer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_70_Template(rf, ctx) {
    if (rf & 1) {
        const _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_70_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r300); const element_r298 = ctx.$implicit; const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r299.getObject(element_r298 == null ? null : element_r298.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r298 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r298 == null ? null : element_r298.reviewer == null ? null : element_r298.reviewer.firstName, " ", element_r298 == null ? null : element_r298.reviewer == null ? null : element_r298.reviewer.lastName, " ");
    }
}
function FormListComponent_th_72_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Holiday Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_73_Template(rf, ctx) {
    if (rf & 1) {
        const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_73_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r303); const element_r301 = ctx.$implicit; const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r302.getObject(element_r301 == null ? null : element_r301.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r301 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r301 == null ? null : element_r301.holidayName, " ");
    }
}
function FormListComponent_th_75_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Holiday Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_76_Template(rf, ctx) {
    if (rf & 1) {
        const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_76_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r306); const element_r304 = ctx.$implicit; const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r305.getObject(element_r304 == null ? null : element_r304.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r304 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r304 == null ? null : element_r304.holidayDate, "MM/dd/yyyy"), " ");
    }
}
function FormListComponent_th_78_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Holiday Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_79_Template(rf, ctx) {
    if (rf & 1) {
        const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_79_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r309); const element_r307 = ctx.$implicit; const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r308.getObject(element_r307 == null ? null : element_r307.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r307 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r307 == null ? null : element_r307.holidayType == null ? null : element_r307.holidayType.replaceAll("_", " "), " ");
    }
}
function FormListComponent_th_81_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type Of Execution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_82_Template(rf, ctx) {
    if (rf & 1) {
        const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_82_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r312); const element_r310 = ctx.$implicit; const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r311.getObject(element_r310 == null ? null : element_r310.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r310 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r310 == null ? null : element_r310.typeOfExecution, " ");
    }
}
function FormListComponent_th_84_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type Of Execution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_85_Template(rf, ctx) {
    if (rf & 1) {
        const _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_85_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r315); const element_r313 = ctx.$implicit; const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r314.getObject(element_r313 == null ? null : element_r313.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r313 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r313 == null ? null : element_r313.typeOfExecution == null ? null : element_r313.typeOfExecution.typeOfExecution, " ");
    }
}
function FormListComponent_th_87_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " LIVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_88_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_88_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_88_Template(rf, ctx) {
    if (rf & 1) {
        const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_88_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r320); const element_r316 = ctx.$implicit; const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r319.getObject(element_r316 == null ? null : element_r316.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_88_i_1_Template, 2, 0, "i", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_88_i_2_Template, 2, 0, "i", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r316 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r316 == null ? null : element_r316.supportingAttachmentReference);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r316 == null ? null : element_r316.supportingAttachmentReference));
    }
}
function FormListComponent_th_90_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Landing Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_91_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_91_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_91_Template(rf, ctx) {
    if (rf & 1) {
        const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_91_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r325); const element_r321 = ctx.$implicit; const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r324.getObject(element_r321 == null ? null : element_r321.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_91_i_1_Template, 2, 0, "i", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_91_i_2_Template, 2, 0, "i", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r321 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r321 == null ? null : element_r321.supportingAttachmentReference);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r321 == null ? null : element_r321.supportingAttachmentReference));
    }
}
function FormListComponent_th_93_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Apply for S2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_94_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_94_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_94_Template(rf, ctx) {
    if (rf & 1) {
        const _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_94_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r330); const element_r326 = ctx.$implicit; const ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r329.getObject(element_r326 == null ? null : element_r326.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_94_i_1_Template, 2, 0, "i", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_94_i_2_Template, 2, 0, "i", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r326 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r326 == null ? null : element_r326.live));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r326 == null ? null : element_r326.live);
    }
}
function FormListComponent_th_96_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Apply for TOA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_97_i_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_97_i_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_97_Template(rf, ctx) {
    if (rf & 1) {
        const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_97_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r335); const element_r331 = ctx.$implicit; const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r334.getObject(element_r331 == null ? null : element_r331.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_97_i_1_Template, 2, 0, "i", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_97_i_2_Template, 2, 0, "i", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r331 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r331 == null ? null : element_r331.applyForToa);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r331 == null ? null : element_r331.applyForToa));
    }
}
function FormListComponent_th_99_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Payment Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_100_Template(rf, ctx) {
    if (rf & 1) {
        const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_100_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r338); const element_r336 = ctx.$implicit; const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r337.getObject(element_r336 == null ? null : element_r336.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r336 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r336 == null ? null : element_r336.paymentDescription, " ");
    }
}
function FormListComponent_th_102_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_103_Template(rf, ctx) {
    if (rf & 1) {
        const _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_103_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r341); const element_r339 = ctx.$implicit; const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r340.getObject(element_r339 == null ? null : element_r339.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r339 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r339 == null ? null : element_r339.description, " ");
    }
}
function FormListComponent_th_105_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_106_Template(rf, ctx) {
    if (rf & 1) {
        const _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_106_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r344); const element_r342 = ctx.$implicit; const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r343.getObject(element_r342 == null ? null : element_r342.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r342 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r342 == null ? null : element_r342.product == null ? null : element_r342.product.description, " ");
    }
}
function FormListComponent_th_108_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_109_Template(rf, ctx) {
    if (rf & 1) {
        const _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_109_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r347); const element_r345 = ctx.$implicit; const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r346.getObject(element_r345 == null ? null : element_r345.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r345 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r345 == null ? null : element_r345.description, " ");
    }
}
function FormListComponent_th_111_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_112_Template(rf, ctx) {
    if (rf & 1) {
        const _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_112_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r350); const element_r348 = ctx.$implicit; const ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r349.getObject(element_r348 == null ? null : element_r348.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r348 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r348 == null ? null : element_r348.brand == null ? null : element_r348.brand.description, " ");
    }
}
function FormListComponent_th_114_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_115_Template(rf, ctx) {
    if (rf & 1) {
        const _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_115_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r353); const element_r351 = ctx.$implicit; const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r352.getObject(element_r351 == null ? null : element_r351.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r351 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r351 == null ? null : element_r351.title, " ");
    }
}
function FormListComponent_th_117_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_118_Template(rf, ctx) {
    if (rf & 1) {
        const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_118_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r356); const element_r354 = ctx.$implicit; const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r355.getObject(element_r354 == null ? null : element_r354.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r354 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r354 == null ? null : element_r354.details, " ");
    }
}
function FormListComponent_th_120_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Number Of Views ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_121_Template(rf, ctx) {
    if (rf & 1) {
        const _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_121_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r359); const element_r357 = ctx.$implicit; const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r358.getObject(element_r357 == null ? null : element_r357.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r357 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r357 == null ? null : element_r357.noOfView, " ");
    }
}
function FormListComponent_th_123_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Minimum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_124_Template(rf, ctx) {
    if (rf & 1) {
        const _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_124_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r362); const element_r360 = ctx.$implicit; const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r361.getObject(element_r360 == null ? null : element_r360.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r360 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r360 == null ? null : element_r360.minimum, " ");
    }
}
function FormListComponent_th_126_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Maximum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_127_Template(rf, ctx) {
    if (rf & 1) {
        const _r365 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_127_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r365); const element_r363 = ctx.$implicit; const ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r364.getObject(element_r363 == null ? null : element_r363.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r363 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r363 == null ? null : element_r363.maximum, " ");
    }
}
function FormListComponent_th_129_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Posting Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_130_Template(rf, ctx) {
    if (rf & 1) {
        const _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_130_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r368); const element_r366 = ctx.$implicit; const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r367.getObject(element_r366 == null ? null : element_r366.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r366 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r366 == null ? null : element_r366.postingDate, "MM/dd/yyyy"), " ");
    }
}
function FormListComponent_th_132_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " S1 Expiration No Of Years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_133_Template(rf, ctx) {
    if (rf & 1) {
        const _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_133_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r371); const element_r369 = ctx.$implicit; const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r370.getObject(element_r369 == null ? null : element_r369.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r369 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r369 == null ? null : element_r369.s1ExpNoOfYears, " ");
    }
}
function FormListComponent_th_135_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " S2 Expiration No Of Years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_136_Template(rf, ctx) {
    if (rf & 1) {
        const _r374 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_136_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r374); const element_r372 = ctx.$implicit; const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r373.getObject(element_r372 == null ? null : element_r372.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r372 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r372 == null ? null : element_r372.s2ExpNoOfYears, " ");
    }
}
function FormListComponent_th_138_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Reference Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_139_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r375 == null ? null : element_r375.referenceCode, " ");
    }
}
function FormListComponent_td_139_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r375 == null ? null : element_r375.applicationForm == null ? null : element_r375.applicationForm.referenceCode, " ");
    }
}
function FormListComponent_td_139_Template(rf, ctx) {
    if (rf & 1) {
        const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_139_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r381); const element_r375 = ctx.$implicit; const ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r380.getObject(element_r375 == null ? null : element_r375.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_139_span_1_Template, 2, 1, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_139_span_2_Template, 2, 1, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r375 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r375 == null ? null : element_r375.referenceCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r375 == null ? null : element_r375.applicationForm == null ? null : element_r375.applicationForm.referenceCode);
    }
}
function FormListComponent_th_141_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " AD Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_142_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r382 == null ? null : element_r382.adTitle, " ");
    }
}
function FormListComponent_td_142_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r382 == null ? null : element_r382.applicationForm == null ? null : element_r382.applicationForm.adTitle, " ");
    }
}
function FormListComponent_td_142_Template(rf, ctx) {
    if (rf & 1) {
        const _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_142_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r388); const element_r382 = ctx.$implicit; const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r387.getObject(element_r382 == null ? null : element_r382.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_142_span_1_Template, 2, 1, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_142_span_2_Template, 2, 1, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r382 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r382 == null ? null : element_r382.adTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r382 == null ? null : element_r382.applicationForm == null ? null : element_r382.applicationForm.adTitle);
    }
}
function FormListComponent_th_144_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " AD Specialist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_145_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r389 == null ? null : element_r389.assignedAdSpecialist == null ? null : element_r389.assignedAdSpecialist.firstName, " ", element_r389 == null ? null : element_r389.assignedAdSpecialist == null ? null : element_r389.assignedAdSpecialist.lastName, " ");
    }
}
function FormListComponent_td_145_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_145_Template(rf, ctx) {
    if (rf & 1) {
        const _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_145_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r394); const element_r389 = ctx.$implicit; const ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r393.getObject(element_r389 == null ? null : element_r389.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_145_span_1_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_145_span_2_Template, 2, 0, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r389 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r389 == null ? null : element_r389.assignedAdSpecialist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r389 == null ? null : element_r389.assignedAdSpecialist));
    }
}
function FormListComponent_th_147_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Evaluator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_148_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r395 == null ? null : element_r395.assignedEncoder == null ? null : element_r395.assignedEncoder.firstName, " ", element_r395 == null ? null : element_r395.assignedEncoder == null ? null : element_r395.assignedEncoder.lastName, " ");
    }
}
function FormListComponent_td_148_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_148_Template(rf, ctx) {
    if (rf & 1) {
        const _r400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_148_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r400); const element_r395 = ctx.$implicit; const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r399.getObject(element_r395 == null ? null : element_r395.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_148_span_1_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_148_span_2_Template, 2, 0, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r395 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r395 == null ? null : element_r395.assignedEncoder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r395 == null ? null : element_r395.assignedEncoder) && !(element_r395 == null ? null : element_r395.applicationForm == null ? null : element_r395.applicationForm.assignedEncoder));
    }
}
function FormListComponent_th_150_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Reviewer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_151_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r401 == null ? null : element_r401.assignedReviewer == null ? null : element_r401.assignedReviewer.firstName, " ", element_r401 == null ? null : element_r401.assignedReviewer == null ? null : element_r401.assignedReviewer.lastName, " ");
    }
}
function FormListComponent_td_151_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_151_Template(rf, ctx) {
    if (rf & 1) {
        const _r406 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_151_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r406); const element_r401 = ctx.$implicit; const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r405.getObject(element_r401 == null ? null : element_r401.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_151_span_1_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_151_span_2_Template, 2, 0, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r401 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r401 == null ? null : element_r401.assignedReviewer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r401 == null ? null : element_r401.assignedReviewer));
    }
}
function FormListComponent_th_153_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Screener ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_154_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r407 == null ? null : element_r407.assignedScreener == null ? null : element_r407.assignedScreener.firstName, " ", element_r407 == null ? null : element_r407.assignedScreener == null ? null : element_r407.assignedScreener.lastName, " ");
    }
}
function FormListComponent_td_154_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_154_Template(rf, ctx) {
    if (rf & 1) {
        const _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_154_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r412); const element_r407 = ctx.$implicit; const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r411.getObject(element_r407 == null ? null : element_r407.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_154_span_1_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_154_span_2_Template, 2, 0, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r407 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r407 == null ? null : element_r407.assignedScreener);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r407 == null ? null : element_r407.assignedScreener));
    }
}
function FormListComponent_th_156_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Current Assigned User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_157_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r413 == null ? null : element_r413.assignedUser == null ? null : element_r413.assignedUser.firstName, " ", element_r413 == null ? null : element_r413.assignedUser == null ? null : element_r413.assignedUser.lastName, " ");
    }
}
function FormListComponent_td_157_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " N/A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_157_Template(rf, ctx) {
    if (rf & 1) {
        const _r418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_157_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r418); const element_r413 = ctx.$implicit; const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r417.getObject(element_r413 == null ? null : element_r413.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_157_span_1_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_157_span_2_Template, 2, 0, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r413 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r413 == null ? null : element_r413.assignedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(element_r413 == null ? null : element_r413.assignedUser));
    }
}
function FormListComponent_th_159_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Application Owner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_160_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r419 == null ? null : element_r419.applicationOwner == null ? null : element_r419.applicationOwner.firstName, " ", element_r419 == null ? null : element_r419.applicationOwner == null ? null : element_r419.applicationOwner.lastName, " ");
    }
}
function FormListComponent_td_160_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", element_r419 == null ? null : element_r419.applicationForm == null ? null : element_r419.applicationForm.applicationOwner == null ? null : element_r419.applicationForm.applicationOwner.firstName, " ", element_r419 == null ? null : element_r419.applicationForm == null ? null : element_r419.applicationForm.applicationOwner == null ? null : element_r419.applicationForm.applicationOwner.lastName, " ");
    }
}
function FormListComponent_td_160_Template(rf, ctx) {
    if (rf & 1) {
        const _r425 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_160_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r425); const element_r419 = ctx.$implicit; const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r424.getObject(element_r419 == null ? null : element_r419.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormListComponent_td_160_span_1_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormListComponent_td_160_span_2_Template, 2, 2, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r419 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r419 == null ? null : element_r419.applicationOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", element_r419 == null ? null : element_r419.applicationForm == null ? null : element_r419.applicationForm.applicationOwner);
    }
}
function FormListComponent_th_162_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Last Modified By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_163_Template(rf, ctx) {
    if (rf & 1) {
        const _r428 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_163_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r428); const element_r426 = ctx.$implicit; const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r427.getObject(element_r426 == null ? null : element_r426.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r426 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r426 == null ? null : element_r426.modifiedBy) ? element_r426 == null ? null : element_r426.modifiedBy : element_r426 == null ? null : element_r426.createdBy, " ");
    }
}
function FormListComponent_th_165_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Last Modified Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_166_Template(rf, ctx) {
    if (rf & 1) {
        const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_166_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r431); const element_r429 = ctx.$implicit; const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r430.getObject(element_r429 == null ? null : element_r429.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r429 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r429 == null ? null : element_r429.modifiedDate) ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r429 == null ? null : element_r429.modifiedDate, "MM/dd/yyyy hh:mm a") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](3, 4, element_r429 == null ? null : element_r429.createdDate, "MM/dd/yyyy hh:mm a"), " ");
    }
}
function FormListComponent_th_168_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member's Affiliation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_169_Template(rf, ctx) {
    if (rf & 1) {
        const _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_169_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r434); const element_r432 = ctx.$implicit; const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r433.getObject(element_r432 == null ? null : element_r432.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r432 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r432 == null ? null : element_r432.description, " ");
    }
}
function FormListComponent_th_171_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_172_Template(rf, ctx) {
    if (rf & 1) {
        const _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_172_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r437); const element_r435 = ctx.$implicit; const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r436.getObject(element_r435 == null ? null : element_r435.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r435 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r435 == null ? null : element_r435.member) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_174_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_175_Template(rf, ctx) {
    if (rf & 1) {
        const _r440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_175_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r440); const element_r438 = ctx.$implicit; const ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r439.getObject(element_r438 == null ? null : element_r438.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r438 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r438 == null ? null : element_r438.description, " ");
    }
}
function FormListComponent_th_177_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Penalty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_178_Template(rf, ctx) {
    if (rf & 1) {
        const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_178_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r443); const element_r441 = ctx.$implicit; const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r442.getObject(element_r441 == null ? null : element_r441.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r441 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r441 == null ? null : element_r441.penalty) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_180_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type of Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_181_Template(rf, ctx) {
    if (rf & 1) {
        const _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_181_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r446); const element_r444 = ctx.$implicit; const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r445.getObject(element_r444 == null ? null : element_r444.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r444 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r444 == null ? null : element_r444.description, " ");
    }
}
function FormListComponent_th_183_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Date Of Launch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_184_Template(rf, ctx) {
    if (rf & 1) {
        const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_184_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r449); const element_r447 = ctx.$implicit; const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r448.getObject(element_r447 == null ? null : element_r447.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r447 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r447 == null ? null : element_r447.dateOfLaunchEnable) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_186_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Expiration Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_187_Template(rf, ctx) {
    if (rf & 1) {
        const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_187_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r452); const element_r450 = ctx.$implicit; const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r451.getObject(element_r450 == null ? null : element_r450.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r450 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r450 == null ? null : element_r450.expiresOnEnable) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_189_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Basis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_190_Template(rf, ctx) {
    if (rf & 1) {
        const _r455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_190_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r455); const element_r453 = ctx.$implicit; const ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r454.getObject(element_r453 == null ? null : element_r453.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r453 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r453 == null ? null : element_r453.basedOnEnable) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_192_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Variant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_193_Template(rf, ctx) {
    if (rf & 1) {
        const _r458 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_193_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r458); const element_r456 = ctx.$implicit; const ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r457.getObject(element_r456 == null ? null : element_r456.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r456 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r456 == null ? null : element_r456.variantEnable) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_195_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Remarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_196_Template(rf, ctx) {
    if (rf & 1) {
        const _r461 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_196_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r461); const element_r459 = ctx.$implicit; const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r460.getObject(element_r459 == null ? null : element_r459.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r459 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r459 == null ? null : element_r459.remarksEnable) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_198_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_199_Template(rf, ctx) {
    if (rf & 1) {
        const _r464 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_199_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r464); const element_r462 = ctx.$implicit; const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r463.getObject(element_r462 == null ? null : element_r462.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r462 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r462 == null ? null : element_r462.inputEnable) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_201_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_202_Template(rf, ctx) {
    if (rf & 1) {
        const _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_202_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r467); const element_r465 = ctx.$implicit; const ctx_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r466.getObject(element_r465 == null ? null : element_r465.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r465 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r465 == null ? null : element_r465.amount) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_204_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Bank Branch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_205_Template(rf, ctx) {
    if (rf & 1) {
        const _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_205_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r470); const element_r468 = ctx.$implicit; const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r469.getObject(element_r468 == null ? null : element_r468.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r468 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r468 == null ? null : element_r468.bankBranch) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_207_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Bank Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_208_Template(rf, ctx) {
    if (rf & 1) {
        const _r473 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_208_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r473); const element_r471 = ctx.$implicit; const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r472.getObject(element_r471 == null ? null : element_r471.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r471 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r471 == null ? null : element_r471.bankName) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_210_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Control No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_211_Template(rf, ctx) {
    if (rf & 1) {
        const _r476 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_211_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r476); const element_r474 = ctx.$implicit; const ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r475.getObject(element_r474 == null ? null : element_r474.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r474 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r474 == null ? null : element_r474.controlNo) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_213_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Fund Transfer Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_214_Template(rf, ctx) {
    if (rf & 1) {
        const _r479 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_214_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r479); const element_r477 = ctx.$implicit; const ctx_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r478.getObject(element_r477 == null ? null : element_r477.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r477 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r477 == null ? null : element_r477.fundTransferDate) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_216_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Promisorry Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_217_Template(rf, ctx) {
    if (rf & 1) {
        const _r482 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_217_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r482); const element_r480 = ctx.$implicit; const ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r481.getObject(element_r480 == null ? null : element_r480.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r480 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r480 == null ? null : element_r480.promisorryDate) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_219_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Has Reference No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_220_Template(rf, ctx) {
    if (rf & 1) {
        const _r485 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_220_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r485); const element_r483 = ctx.$implicit; const ctx_r484 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r484.getObject(element_r483 == null ? null : element_r483.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r483 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", (element_r483 == null ? null : element_r483.referenceNo) ? "Yes" : "No", " ");
    }
}
function FormListComponent_th_222_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Enabled Fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_223_Template(rf, ctx) {
    if (rf & 1) {
        const _r488 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_223_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r488); const element_r486 = ctx.$implicit; const ctx_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r487.getObject(element_r486 == null ? null : element_r486.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r486 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r486 == null ? null : element_r486.enabledFields, " ");
    }
}
function FormListComponent_th_225_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_226_Template(rf, ctx) {
    if (rf & 1) {
        const _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_226_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r491); const element_r489 = ctx.$implicit; const ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r490.getObject(element_r489 == null ? null : element_r489.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r489 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r489 == null ? null : element_r489.status == null ? null : element_r489.status.replaceAll("_", " "), " ");
    }
}
function FormListComponent_th_228_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_229_Template(rf, ctx) {
    if (rf & 1) {
        const _r494 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_229_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r494); const element_r492 = ctx.$implicit; const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r493.getObject(element_r492 == null ? null : element_r492.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r492 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r492 == null ? null : element_r492.brand == null ? null : element_r492.brand.description, " ");
    }
}
function FormListComponent_th_231_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_232_Template(rf, ctx) {
    if (rf & 1) {
        const _r497 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_232_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r497); const element_r495 = ctx.$implicit; const ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r496.getObject(element_r495 == null ? null : element_r495.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r495 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r495 == null ? null : element_r495.amount, "1.2-2"), " ");
    }
}
function FormListComponent_th_234_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Penalty Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_235_Template(rf, ctx) {
    if (rf & 1) {
        const _r500 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_235_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r500); const element_r498 = ctx.$implicit; const ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r499.getObject(element_r498 == null ? null : element_r498.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r498 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r498 == null ? null : element_r498.penaltyDate, "fullDate"), " ");
    }
}
function FormListComponent_th_237_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
const _c2 = function (a0) { return { "background-color": a0 }; };
function FormListComponent_td_238_Template(rf, ctx) {
    if (rf & 1) {
        const _r503 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_238_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r503); const element_r501 = ctx.$implicit; const ctx_r502 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r502.getObject(element_r501 == null ? null : element_r501.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r501 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](2, _c2, (element_r501 == null ? null : element_r501.status) === "ACTIVE" ? "white" : "#ffbebe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r501 == null ? null : element_r501.company == null ? null : element_r501.company.companyName, " ");
    }
}
function FormListComponent_th_240_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Penalty Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_241_Template(rf, ctx) {
    if (rf & 1) {
        const _r506 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_241_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r506); const element_r504 = ctx.$implicit; const ctx_r505 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r505.getObject(element_r504 == null ? null : element_r504.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r504 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r504 == null ? null : element_r504.penaltyAmount, "1.2-2"), " ");
    }
}
function FormListComponent_th_243_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Document Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_244_Template(rf, ctx) {
    if (rf & 1) {
        const _r509 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_244_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r509); const element_r507 = ctx.$implicit; const ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r508.getObject(element_r507 == null ? null : element_r507.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r507 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r507.id, " ");
    }
}
function FormListComponent_th_246_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Document size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_247_Template(rf, ctx) {
    if (rf & 1) {
        const _r512 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_247_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r512); const element_r510 = ctx.$implicit; const ctx_r511 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r511.getObject(element_r510 == null ? null : element_r510.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r510 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r510.fileSize, " ");
    }
}
function FormListComponent_th_249_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Clearing Release Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_250_Template(rf, ctx) {
    if (rf & 1) {
        const _r515 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_250_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r515); const element_r513 = ctx.$implicit; const ctx_r514 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r514.getObject(element_r513 == null ? null : element_r513.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r513 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r513.clearingReleaseTime, " ");
    }
}
function FormListComponent_th_252_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Decision Release Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_253_Template(rf, ctx) {
    if (rf & 1) {
        const _r518 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_253_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r518); const element_r516 = ctx.$implicit; const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r517.getObject(element_r516 == null ? null : element_r516.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r516 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r516.decisionReleaseTime, " ");
    }
}
function FormListComponent_th_255_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Submission Start Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_256_Template(rf, ctx) {
    if (rf & 1) {
        const _r521 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_256_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r521); const element_r519 = ctx.$implicit; const ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r520.getObject(element_r519 == null ? null : element_r519.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r519 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r519.submissionStartTime, " ");
    }
}
function FormListComponent_th_258_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Submission End Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_259_Template(rf, ctx) {
    if (rf & 1) {
        const _r524 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_259_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r524); const element_r522 = ctx.$implicit; const ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r523.getObject(element_r522 == null ? null : element_r522.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r522 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r522.submissionEndTime, " ");
    }
}
function FormListComponent_th_261_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Rationale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_262_Template(rf, ctx) {
    if (rf & 1) {
        const _r527 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_262_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r527); const element_r525 = ctx.$implicit; const ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r526.getObject(element_r525 == null ? null : element_r525.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r525 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r525.rationale, " ");
    }
}
function FormListComponent_th_264_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Rationale Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_265_Template(rf, ctx) {
    if (rf & 1) {
        const _r530 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_265_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r530); const element_r528 = ctx.$implicit; const ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r529.getObject(element_r528 == null ? null : element_r528.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r528 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, element_r528.rationaleCategory.replaceAll("_", " ")), " ");
    }
}
function FormListComponent_th_267_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Firstname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_268_Template(rf, ctx) {
    if (rf & 1) {
        const _r533 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_268_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r533); const element_r531 = ctx.$implicit; const ctx_r532 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r532.getObject(element_r531 == null ? null : element_r531.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r531 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r531.firstName, " ");
    }
}
function FormListComponent_th_270_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Lastname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_271_Template(rf, ctx) {
    if (rf & 1) {
        const _r536 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_271_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r536); const element_r534 = ctx.$implicit; const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r535.getObject(element_r534 == null ? null : element_r534.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r534 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r534.lastName, " ");
    }
}
function FormListComponent_th_273_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_274_Template(rf, ctx) {
    if (rf & 1) {
        const _r539 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_274_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r539); const element_r537 = ctx.$implicit; const ctx_r538 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r538.getObject(element_r537 == null ? null : element_r537.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r537 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r537 == null ? null : element_r537.mobileNumber, " ");
    }
}
function FormListComponent_th_276_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_277_Template(rf, ctx) {
    if (rf & 1) {
        const _r542 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_277_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r542); const element_r540 = ctx.$implicit; const ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r541.getObject(element_r540 == null ? null : element_r540.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r540 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r540 == null ? null : element_r540.username, " ");
    }
}
function FormListComponent_th_279_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_280_Template(rf, ctx) {
    if (rf & 1) {
        const _r545 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_280_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r545); const element_r543 = ctx.$implicit; const ctx_r544 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r544.getObject(element_r543 == null ? null : element_r543.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r543 = ctx.$implicit;
        var tmp_0_0 = null;
        var tmp_0_1 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r543 == null ? null : element_r543.userRole == null ? null : element_r543.userRole.name == null ? null : (tmp_0_0 = element_r543.userRole.name.replaceAll("ROLE_", "")) == null ? null : (tmp_0_1 = tmp_0_0.replace("_", " ")) == null ? null : tmp_0_1.replace("ENCODER", "EVALUATOR"), " ");
    }
}
function FormListComponent_th_282_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type of Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_283_Template(rf, ctx) {
    if (rf & 1) {
        const _r548 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_283_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r548); const element_r546 = ctx.$implicit; const ctx_r547 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r547.getObject(element_r546 == null ? null : element_r546.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r546 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r546 == null ? null : element_r546.typeOfMedium == null ? null : element_r546.typeOfMedium.description, " ");
    }
}
function FormListComponent_th_285_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type of Execution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_286_Template(rf, ctx) {
    if (rf & 1) {
        const _r551 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_286_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r551); const element_r549 = ctx.$implicit; const ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r550.getObject(element_r549 == null ? null : element_r549.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r549 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r549 == null ? null : element_r549.typeOfExecution == null ? null : element_r549.typeOfExecution.typeOfExecution, " ");
    }
}
function FormListComponent_th_288_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_289_Template(rf, ctx) {
    if (rf & 1) {
        const _r554 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_289_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r554); const element_r552 = ctx.$implicit; const ctx_r553 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r553.getObject(element_r552 == null ? null : element_r552.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r552 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r552 == null ? null : element_r552.company == null ? null : element_r552.company.companyName, " ");
    }
}
function FormListComponent_th_291_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Fund Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_292_Template(rf, ctx) {
    if (rf & 1) {
        const _r557 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_292_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r557); const element_r555 = ctx.$implicit; const ctx_r556 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r556.getObject(element_r555 == null ? null : element_r555.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r555 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r555 == null ? null : element_r555.fundAmount, "1.2-2"), " ");
    }
}
function FormListComponent_th_294_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Voucher Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_295_Template(rf, ctx) {
    if (rf & 1) {
        const _r560 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_295_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r560); const element_r558 = ctx.$implicit; const ctx_r559 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r559.getObject(element_r558 == null ? null : element_r558.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r558 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r558 == null ? null : element_r558.voucherDate, "shortDate"), " ");
    }
}
function FormListComponent_th_297_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Signatories Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_298_Template(rf, ctx) {
    if (rf & 1) {
        const _r563 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_298_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r563); const element_r561 = ctx.$implicit; const ctx_r562 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r562.getObject(element_r561 == null ? null : element_r561.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r561 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r561 == null ? null : element_r561.name, " ");
    }
}
function FormListComponent_th_300_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_301_Template(rf, ctx) {
    if (rf & 1) {
        const _r566 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_301_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r566); const element_r564 = ctx.$implicit; const ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r565.getObject(element_r564 == null ? null : element_r564.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r564 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r564 == null ? null : element_r564.position, " ");
    }
}
function FormListComponent_th_303_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Amount Transferred ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_304_Template(rf, ctx) {
    if (rf & 1) {
        const _r569 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_304_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r569); const element_r567 = ctx.$implicit; const ctx_r568 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r568.getObject(element_r567 == null ? null : element_r567.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r567 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r567 == null ? null : element_r567.amountTransfered, "1.2-2"), " ");
    }
}
function FormListComponent_th_306_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Transferred Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_307_Template(rf, ctx) {
    if (rf & 1) {
        const _r572 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_307_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r572); const element_r570 = ctx.$implicit; const ctx_r571 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r571.getObject(element_r570 == null ? null : element_r570.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r570 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, element_r570 == null ? null : element_r570.transferedDate, "shortDate"), " ");
    }
}
function FormListComponent_th_309_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Official Receipt No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_310_Template(rf, ctx) {
    if (rf & 1) {
        const _r575 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_310_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r575); const element_r573 = ctx.$implicit; const ctx_r574 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r574.getObject(element_r573 == null ? null : element_r573.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r573 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r573 == null ? null : element_r573.officialReceiptNo, " ");
    }
}
function FormListComponent_th_312_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Type Of Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_313_Template(rf, ctx) {
    if (rf & 1) {
        const _r578 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_313_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r578); const element_r576 = ctx.$implicit; const ctx_r577 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r577.getObject(element_r576 == null ? null : element_r576.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r576 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r576 == null ? null : element_r576.typeOfMedium == null ? null : element_r576.typeOfMedium.description, " ");
    }
}
function FormListComponent_th_315_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Official Receipt No References");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_316_Template(rf, ctx) {
    if (rf & 1) {
        const _r581 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_316_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r581); const element_r579 = ctx.$implicit; const ctx_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r580.getObject(element_r579 == null ? null : element_r579.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r579 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r579 == null ? null : element_r579.officialReceiptReferencesValue, " ");
    }
}
function FormListComponent_th_318_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " File");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_319_Template(rf, ctx) {
    if (rf & 1) {
        const _r584 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_319_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r584); const element_r582 = ctx.$implicit; const ctx_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r583.getObject(element_r582 == null ? null : element_r582.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r582 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r582 == null ? null : element_r582.file, " ");
    }
}
function FormListComponent_th_321_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " File name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_322_Template(rf, ctx) {
    if (rf & 1) {
        const _r587 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_322_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r587); const element_r585 = ctx.$implicit; const ctx_r586 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r586.getObject(element_r585 == null ? null : element_r585.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r585 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r585 == null ? null : element_r585.fileName, " ");
    }
}
function FormListComponent_th_324_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " File Extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_325_Template(rf, ctx) {
    if (rf & 1) {
        const _r590 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_325_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r590); const element_r588 = ctx.$implicit; const ctx_r589 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r589.getObject(element_r588 == null ? null : element_r588.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r588 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r588 == null ? null : element_r588.fileExtension, " ");
    }
}
function FormListComponent_th_327_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Document Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_328_Template(rf, ctx) {
    if (rf & 1) {
        const _r593 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_328_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r593); const element_r591 = ctx.$implicit; const ctx_r592 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r592.getObject(element_r591 == null ? null : element_r591.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r591 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r591 == null ? null : element_r591.documentFormat, " ");
    }
}
function FormListComponent_th_330_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Display Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_331_Template(rf, ctx) {
    if (rf & 1) {
        const _r596 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_331_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r596); const element_r594 = ctx.$implicit; const ctx_r595 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r595.getObject(element_r594 == null ? null : element_r594.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r594 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r594 == null ? null : element_r594.displayed, " ");
    }
}
function FormListComponent_th_333_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " File URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_334_Template(rf, ctx) {
    if (rf & 1) {
        const _r599 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_334_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r599); const element_r597 = ctx.$implicit; const ctx_r598 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r598.getObject(element_r597 == null ? null : element_r597.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r597 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r597 == null ? null : element_r597.fileURL, " ");
    }
}
function FormListComponent_th_336_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Original Filename");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_337_Template(rf, ctx) {
    if (rf & 1) {
        const _r602 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_337_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r602); const element_r600 = ctx.$implicit; const ctx_r601 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r601.getObject(element_r600 == null ? null : element_r600.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const element_r600 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r600 == null ? null : element_r600.originalFilename, " ");
    }
}
function FormListComponent_th_339_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_340_Template(rf, ctx) {
    if (rf & 1) {
        const _r605 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_340_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r605); const element_r603 = ctx.$implicit; const ctx_r604 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r604.deleteObject(element_r603 == null ? null : element_r603.id, element_r603); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_th_342_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_td_343_Template(rf, ctx) {
    if (rf & 1) {
        const _r608 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_343_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r608); const element_r606 = ctx.$implicit; const ctx_r607 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r607.openEditModal(element_r606 == null ? null : element_r606.id, element_r606); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_td_343_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r608); const element_r606 = ctx.$implicit; const ctx_r609 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r609.deleteObject(element_r606 == null ? null : element_r606.id, element_r606); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
function FormListComponent_tr_344_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 143);
    }
}
function FormListComponent_tr_345_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 144);
    }
}
function FormListComponent_ng_template_349_Template(rf, ctx) {
    if (rf & 1) {
        const _r612 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Edit Signatories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-form-field", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Signatory Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FormListComponent_ng_template_349_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r612); const ctx_r611 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r611.signatory.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-form-field", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "input", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FormListComponent_ng_template_349_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r612); const ctx_r613 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r613.signatory.position = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_ng_template_349_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r612); const ctx_r614 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r614.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormListComponent_ng_template_349_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r612); const ctx_r615 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r615.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r231.signatory.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r231.signatory.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r231.signatory.name || !ctx_r231.signatory.position);
    }
}
const _c3 = function () { return [10, 20, 30]; };
let FormListComponent = /*@__PURE__*/ (() => {
    class FormListComponent {
        constructor(dialog, api, spinner, alert) {
            this.dialog = dialog;
            this.api = api;
            this.spinner = spinner;
            this.alert = alert;
            this.displayedColumns = '';
            this.selectInListFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.deleteInListFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.updateListFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.idForUpdate = 0;
            this.idForDelete = 0;
            this.getVoucherRef = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.signatory = {};
            this.signatoryRef = {};
        }
        ngOnInit() {
        }
        ngAfterViewInit() {
            if (this.dataSource) {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        }
        getObject(id) {
            this.idForUpdate = id;
            this.selectInListFunction.emit();
        }
        deleteObject(id, obj = '') {
            this.idForDelete = id;
            this.elementObject = obj;
            this.deleteInListFunction.emit(obj);
        }
        openEditModal(id, obj) {
            this.signatory = JSON.parse(JSON.stringify(obj));
            this.signatoryRef = obj;
            this.dialog.open(this.signatoryEditModal, {
                disableClose: true,
                width: '350px',
                data: obj
            });
        }
        updateObject() {
            if (this.signatoryRef.id === undefined) {
                let data = this.dataSource.data;
                data.splice(this.dataSource.data.findIndex(r => r === this.signatoryRef), 1, this.signatory);
                this.updateListFunction.emit(data);
            }
            else {
                this.updateListFunction.emit(this.signatory);
            }
            this.dialog.closeAll();
        }
        closeModal() {
            this.dialog.closeAll();
        }
        viewHistory(data) {
            console.log('data', data);
            // this.spinner.show()
            this.api.findByParam(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].voucherAttachment, data === null || data === void 0 ? void 0 : data.voucherAttachmentReference).subscribe(res => {
                var _a, _b, _c, _d;
                if (!((_b = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.fileURL)) {
                    this.alert.customErrorMessage("No Available file");
                }
                window.open((_d = (_c = res === null || res === void 0 ? void 0 : res.responseData) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.fileURL);
            }, error => {
                this.alert.customErrorMessage("No Available File");
            });
        }
    }
    FormListComponent.??fac = function FormListComponent_Factory(t) { return new (t || FormListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"])); };
    FormListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FormListComponent, selectors: [["app-form-list"]], viewQuery: function FormListComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.paginator = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.sort = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.table = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.customModal = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.signatoryEditModal = _t.first);
            }
        }, inputs: { dataSource: "dataSource", displayedColumns: "displayedColumns" }, outputs: { selectInListFunction: "selectInListFunction", deleteInListFunction: "deleteInListFunction", updateListFunction: "updateListFunction", idForUpdate: "idForUpdate", idForDelete: "idForDelete", elementObject: "elementObject", getVoucherRef: "getVoucherRef" }, decls: 351, vars: 6, consts: [[1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "emailCode"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "subject"], ["matColumnDef", "category"], ["matColumnDef", "typeOfMainDocument"], ["matColumnDef", "typeOfMainDocumentObject"], ["matColumnDef", "noOfHours"], ["matColumnDef", "noOfDays"], ["matColumnDef", "noOfWorkingDays"], ["matColumnDef", "typeOfMedium"], ["matColumnDef", "typeOfMediumObj"], ["matColumnDef", "reason"], ["matColumnDef", "description"], ["matColumnDef", "body"], ["matColumnDef", "dialect"], ["matColumnDef", "applicationType"], ["matColumnDef", "lengthFrom"], ["matColumnDef", "lengthTo"], ["matColumnDef", "memberOffline"], ["matColumnDef", "memberOnline"], ["matColumnDef", "nonMemberOffline"], ["matColumnDef", "nonMemberOnline"], ["matColumnDef", "screenerName"], ["matColumnDef", "reviewerName"], ["matColumnDef", "holidayName"], ["matColumnDef", "holidayDate"], ["matColumnDef", "holidayType"], ["matColumnDef", "typeOfExecution"], ["matColumnDef", "typeOfExecutionObj"], ["matColumnDef", "live"], ["matColumnDef", "landingPage"], ["matColumnDef", "applyForS2"], ["matColumnDef", "applyForTOA"], ["matColumnDef", "paymentDescription"], ["matColumnDef", "categoryDescription"], ["matColumnDef", "product"], ["matColumnDef", "productDescription"], ["matColumnDef", "brand"], ["matColumnDef", "title"], ["matColumnDef", "details"], ["matColumnDef", "noOfView"], ["matColumnDef", "minimum"], ["matColumnDef", "maximum"], ["matColumnDef", "postingDate"], ["matColumnDef", "s1ExpNoOfYears"], ["matColumnDef", "s2ExpNoOfYears"], ["matColumnDef", "referenceCode"], ["matColumnDef", "adTitle"], ["matColumnDef", "assignedAdSpecialist"], ["matColumnDef", "assignedEncoder"], ["matColumnDef", "assignedReviewer"], ["matColumnDef", "assignedScreener"], ["matColumnDef", "assignedUser"], ["matColumnDef", "applicationOwner"], ["matColumnDef", "lastModifiedBy"], ["matColumnDef", "lastModifiedDate"], ["matColumnDef", "affiliationDesc"], ["matColumnDef", "member"], ["matColumnDef", "brandDesc"], ["matColumnDef", "penalty"], ["matColumnDef", "typeOfDocumentDesc"], ["matColumnDef", "dateOfLaunchEnable"], ["matColumnDef", "expiresOnEnable"], ["matColumnDef", "basedOnEnable"], ["matColumnDef", "variantEnable"], ["matColumnDef", "remarksEnable"], ["matColumnDef", "inputEnable"], ["matColumnDef", "amount"], ["matColumnDef", "bankBranch"], ["matColumnDef", "bankName"], ["matColumnDef", "controlNo"], ["matColumnDef", "fundTransferDate"], ["matColumnDef", "promisorryDate"], ["matColumnDef", "referenceNo"], ["matColumnDef", "enabledFields"], ["matColumnDef", "status"], ["matColumnDef", "brandDescription"], ["matColumnDef", "brandPenaltyAmount"], ["matColumnDef", "penaltyDate"], ["matColumnDef", "companyDescription"], ["mat-cell", "", 3, "ngStyle", "click", 4, "matCellDef"], ["matColumnDef", "companyPenaltyAmount"], ["matColumnDef", "id"], ["matColumnDef", "size"], ["matColumnDef", "clearingReleaseTime"], ["matColumnDef", "decisionReleaseTime"], ["matColumnDef", "submissionStartTime"], ["matColumnDef", "submissionEndTime"], ["matColumnDef", "rationale"], ["mat-cell", "", "style", "width: 78%;", 3, "click", 4, "matCellDef"], ["matColumnDef", "rationaleCategory"], ["matColumnDef", "firstName"], ["matColumnDef", "lastName"], ["matColumnDef", "mobileNumber"], ["matColumnDef", "emailAddress"], ["matColumnDef", "userRole"], ["matColumnDef", "typeOfMediumController"], ["matColumnDef", "typeOfExecutionController"], ["matColumnDef", "company"], ["matColumnDef", "fundAmount"], ["matColumnDef", "voucherDate"], ["matColumnDef", "name"], ["matColumnDef", "position"], ["matColumnDef", "amountTransfered"], ["matColumnDef", "transferedDate"], ["matColumnDef", "officialReceiptNo"], ["matColumnDef", "typeOfMediumDescription"], ["matColumnDef", "officialReceiptReferences"], ["matColumnDef", "file"], ["matColumnDef", "fileName"], ["matColumnDef", "fileExtension"], ["matColumnDef", "documentFormat"], ["matColumnDef", "displayed"], ["matColumnDef", "fileURL"], ["matColumnDef", "originalFilename"], ["matColumnDef", "deleteIcon"], ["mat-cell", "", "matTooltip", "Cancel OR", 3, "click", 4, "matCellDef"], ["matColumnDef", "voucherActionItems"], ["mat-header-cell", "", "class", "action-items", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "action-items", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["signatoryEdit", ""], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], [3, "innerHTML"], ["class", "material-icons", 4, "ngIf"], ["class", "material-icons cancel", 4, "ngIf"], [1, "material-icons"], [1, "material-icons", "cancel"], [4, "ngIf"], ["mat-cell", "", 3, "ngStyle", "click"], ["mat-cell", "", 2, "width", "78%", 3, "click"], ["mat-cell", "", "matTooltip", "Cancel OR", 3, "click"], ["mat-header-cell", "", 1, "action-items"], ["mat-cell", "", 1, "action-items"], ["tooltip", "Edit", 1, "material-icons", 3, "click"], ["tooltip", "Delete", 1, "material-icons", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill", 1, "w-100"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 1, "justify-content-center"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "mat-raised-button", "button-red", 3, "disabled", "click"]], template: function FormListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "table", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](2, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, FormListComponent_th_3_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, FormListComponent_td_4_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](5, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, FormListComponent_th_6_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, FormListComponent_td_7_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](8, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, FormListComponent_th_9_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, FormListComponent_td_10_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](11, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, FormListComponent_th_12_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, FormListComponent_td_13_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](14, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, FormListComponent_th_15_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, FormListComponent_td_16_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](17, 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, FormListComponent_th_18_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, FormListComponent_td_19_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](20, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, FormListComponent_th_21_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, FormListComponent_td_22_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](23, 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, FormListComponent_th_24_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, FormListComponent_td_25_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](26, 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, FormListComponent_th_27_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, FormListComponent_td_28_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](29, 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, FormListComponent_th_30_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, FormListComponent_td_31_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](32, 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, FormListComponent_th_33_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, FormListComponent_td_34_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](35, 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](36, FormListComponent_th_36_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](37, FormListComponent_td_37_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](38, 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, FormListComponent_th_39_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, FormListComponent_td_40_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](41, 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, FormListComponent_th_42_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](43, FormListComponent_td_43_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](44, 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, FormListComponent_th_45_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, FormListComponent_td_46_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](47, 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, FormListComponent_th_48_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](49, FormListComponent_td_49_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](50, 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](51, FormListComponent_th_51_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](52, FormListComponent_td_52_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](53, 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](54, FormListComponent_th_54_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](55, FormListComponent_td_55_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](56, 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](57, FormListComponent_th_57_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](58, FormListComponent_td_58_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](59, 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](60, FormListComponent_th_60_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](61, FormListComponent_td_61_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](62, 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](63, FormListComponent_th_63_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](64, FormListComponent_td_64_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](65, 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](66, FormListComponent_th_66_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](67, FormListComponent_td_67_Template, 2, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](68, 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](69, FormListComponent_th_69_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](70, FormListComponent_td_70_Template, 2, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](71, 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](72, FormListComponent_th_72_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](73, FormListComponent_td_73_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](74, 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](75, FormListComponent_th_75_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](76, FormListComponent_td_76_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](77, 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](78, FormListComponent_th_78_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](79, FormListComponent_td_79_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](80, 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](81, FormListComponent_th_81_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](82, FormListComponent_td_82_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](83, 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](84, FormListComponent_th_84_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](85, FormListComponent_td_85_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](86, 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](87, FormListComponent_th_87_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](88, FormListComponent_td_88_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](89, 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](90, FormListComponent_th_90_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](91, FormListComponent_td_91_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](92, 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](93, FormListComponent_th_93_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](94, FormListComponent_td_94_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](95, 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](96, FormListComponent_th_96_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](97, FormListComponent_td_97_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](98, 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](99, FormListComponent_th_99_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](100, FormListComponent_td_100_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](101, 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](102, FormListComponent_th_102_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](103, FormListComponent_td_103_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](104, 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](105, FormListComponent_th_105_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](106, FormListComponent_td_106_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](107, 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](108, FormListComponent_th_108_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](109, FormListComponent_td_109_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](110, 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](111, FormListComponent_th_111_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](112, FormListComponent_td_112_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](113, 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](114, FormListComponent_th_114_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](115, FormListComponent_td_115_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](116, 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](117, FormListComponent_th_117_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](118, FormListComponent_td_118_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](119, 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](120, FormListComponent_th_120_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](121, FormListComponent_td_121_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](122, 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](123, FormListComponent_th_123_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](124, FormListComponent_td_124_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](125, 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](126, FormListComponent_th_126_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](127, FormListComponent_td_127_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](128, 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](129, FormListComponent_th_129_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](130, FormListComponent_td_130_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](131, 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](132, FormListComponent_th_132_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](133, FormListComponent_td_133_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](134, 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](135, FormListComponent_th_135_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](136, FormListComponent_td_136_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](137, 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](138, FormListComponent_th_138_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](139, FormListComponent_td_139_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](140, 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](141, FormListComponent_th_141_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](142, FormListComponent_td_142_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](143, 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](144, FormListComponent_th_144_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](145, FormListComponent_td_145_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](146, 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](147, FormListComponent_th_147_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](148, FormListComponent_td_148_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](149, 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](150, FormListComponent_th_150_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](151, FormListComponent_td_151_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](152, 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](153, FormListComponent_th_153_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](154, FormListComponent_td_154_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](155, 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](156, FormListComponent_th_156_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](157, FormListComponent_td_157_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](158, 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](159, FormListComponent_th_159_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](160, FormListComponent_td_160_Template, 3, 2, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](161, 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](162, FormListComponent_th_162_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](163, FormListComponent_td_163_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](164, 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](165, FormListComponent_th_165_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](166, FormListComponent_td_166_Template, 4, 7, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](167, 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](168, FormListComponent_th_168_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](169, FormListComponent_td_169_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](170, 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](171, FormListComponent_th_171_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](172, FormListComponent_td_172_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](173, 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](174, FormListComponent_th_174_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](175, FormListComponent_td_175_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](176, 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](177, FormListComponent_th_177_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](178, FormListComponent_td_178_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](179, 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](180, FormListComponent_th_180_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](181, FormListComponent_td_181_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](182, 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](183, FormListComponent_th_183_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](184, FormListComponent_td_184_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](185, 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](186, FormListComponent_th_186_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](187, FormListComponent_td_187_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](188, 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](189, FormListComponent_th_189_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](190, FormListComponent_td_190_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](191, 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](192, FormListComponent_th_192_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](193, FormListComponent_td_193_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](194, 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](195, FormListComponent_th_195_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](196, FormListComponent_td_196_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](197, 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](198, FormListComponent_th_198_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](199, FormListComponent_td_199_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](200, 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](201, FormListComponent_th_201_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](202, FormListComponent_td_202_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](203, 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](204, FormListComponent_th_204_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](205, FormListComponent_td_205_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](206, 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](207, FormListComponent_th_207_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](208, FormListComponent_td_208_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](209, 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](210, FormListComponent_th_210_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](211, FormListComponent_td_211_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](212, 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](213, FormListComponent_th_213_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](214, FormListComponent_td_214_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](215, 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](216, FormListComponent_th_216_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](217, FormListComponent_td_217_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](218, 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](219, FormListComponent_th_219_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](220, FormListComponent_td_220_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](221, 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](222, FormListComponent_th_222_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](223, FormListComponent_td_223_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](224, 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](225, FormListComponent_th_225_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](226, FormListComponent_td_226_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](227, 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](228, FormListComponent_th_228_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](229, FormListComponent_td_229_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](230, 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](231, FormListComponent_th_231_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](232, FormListComponent_td_232_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](233, 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](234, FormListComponent_th_234_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](235, FormListComponent_td_235_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](236, 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](237, FormListComponent_th_237_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](238, FormListComponent_td_238_Template, 2, 4, "td", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](239, 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](240, FormListComponent_th_240_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](241, FormListComponent_td_241_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](242, 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](243, FormListComponent_th_243_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](244, FormListComponent_td_244_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](245, 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](246, FormListComponent_th_246_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](247, FormListComponent_td_247_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](248, 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](249, FormListComponent_th_249_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](250, FormListComponent_td_250_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](251, 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](252, FormListComponent_th_252_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](253, FormListComponent_td_253_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](254, 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](255, FormListComponent_th_255_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](256, FormListComponent_td_256_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](257, 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](258, FormListComponent_th_258_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](259, FormListComponent_td_259_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](260, 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](261, FormListComponent_th_261_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](262, FormListComponent_td_262_Template, 2, 1, "td", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](263, 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](264, FormListComponent_th_264_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](265, FormListComponent_td_265_Template, 3, 3, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](266, 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](267, FormListComponent_th_267_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](268, FormListComponent_td_268_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](269, 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](270, FormListComponent_th_270_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](271, FormListComponent_td_271_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](272, 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](273, FormListComponent_th_273_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](274, FormListComponent_td_274_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](275, 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](276, FormListComponent_th_276_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](277, FormListComponent_td_277_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](278, 98);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](279, FormListComponent_th_279_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](280, FormListComponent_td_280_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](281, 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](282, FormListComponent_th_282_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](283, FormListComponent_td_283_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](284, 100);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](285, FormListComponent_th_285_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](286, FormListComponent_td_286_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](287, 101);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](288, FormListComponent_th_288_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](289, FormListComponent_td_289_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](290, 102);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](291, FormListComponent_th_291_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](292, FormListComponent_td_292_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](293, 103);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](294, FormListComponent_th_294_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](295, FormListComponent_td_295_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](296, 104);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](297, FormListComponent_th_297_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](298, FormListComponent_td_298_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](299, 105);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](300, FormListComponent_th_300_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](301, FormListComponent_td_301_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](302, 106);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](303, FormListComponent_th_303_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](304, FormListComponent_td_304_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](305, 107);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](306, FormListComponent_th_306_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](307, FormListComponent_td_307_Template, 3, 4, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](308, 108);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](309, FormListComponent_th_309_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](310, FormListComponent_td_310_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](311, 109);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](312, FormListComponent_th_312_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](313, FormListComponent_td_313_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](314, 110);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](315, FormListComponent_th_315_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](316, FormListComponent_td_316_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](317, 111);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](318, FormListComponent_th_318_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](319, FormListComponent_td_319_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](320, 112);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](321, FormListComponent_th_321_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](322, FormListComponent_td_322_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](323, 113);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](324, FormListComponent_th_324_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](325, FormListComponent_td_325_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](326, 114);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](327, FormListComponent_th_327_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](328, FormListComponent_td_328_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](329, 115);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](330, FormListComponent_th_330_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](331, FormListComponent_td_331_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](332, 116);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](333, FormListComponent_th_333_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](334, FormListComponent_td_334_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](335, 117);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](336, FormListComponent_th_336_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](337, FormListComponent_td_337_Template, 2, 1, "td", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](338, 118);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](339, FormListComponent_th_339_Template, 2, 0, "th", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](340, FormListComponent_td_340_Template, 3, 0, "td", 119);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](341, 120);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](342, FormListComponent_th_342_Template, 2, 0, "th", 121);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](343, FormListComponent_td_343_Template, 5, 0, "td", 122);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](344, FormListComponent_tr_344_Template, 1, 0, "tr", 123);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](345, FormListComponent_tr_345_Template, 1, 0, "tr", 124);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "div", 125);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](347, " No record found. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](348, "mat-paginator", 126);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](349, FormListComponent_ng_template_349_Template, 16, 3, "ng-template", null, 127, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx.dataSource);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](343);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx.dataSource && (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](5, _c3));
            }
        }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: [".cancel[_ngcontent-%COMP%] {\n  color: gray !important;\n  text-align: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #ad0000;\n}\n\n.action-items[_ngcontent-%COMP%] {\n  width: 120px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWx7XHJcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgY29sb3I6IHJnYigxNzMsIDAsIDApO1xyXG59XHJcblxyXG4uYWN0aW9uLWl0ZW1zIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
    return FormListComponent;
})();



/***/ }),

/***/ "Do+y":
/*!*******************************************************!*\
  !*** ./src/app/core/models/type-of-rational.model.ts ***!
  \*******************************************************/
/*! exports provided: TypeOfRational */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfRational", function() { return TypeOfRational; });
class TypeOfRational {
}



/***/ }),

/***/ "FnPy":
/*!*********************************************************!*\
  !*** ./src/app/core/models/email-notification.model.ts ***!
  \*********************************************************/
/*! exports provided: EmailNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNotification", function() { return EmailNotification; });
class EmailNotification {
}



/***/ }),

/***/ "GE5f":
/*!***************************************************************!*\
  !*** ./src/app/modules/fragments/fragments-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FragmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsRoutingModule", function() { return FragmentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
let FragmentsRoutingModule = /*@__PURE__*/ (() => {
    class FragmentsRoutingModule {
    }
    FragmentsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: FragmentsRoutingModule });
    FragmentsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function FragmentsRoutingModule_Factory(t) { return new (t || FragmentsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FragmentsRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FragmentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "HNJZ":
/*!*******************************************************!*\
  !*** ./src/app/core/models/asc-rate-special.model.ts ***!
  \*******************************************************/
/*! exports provided: AscRateSpecial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscRateSpecial", function() { return AscRateSpecial; });
class AscRateSpecial {
}



/***/ }),

/***/ "Ql0k":
/*!******************************************************************!*\
  !*** ./src/app/core/models/medium-execution-controller.model.ts ***!
  \******************************************************************/
/*! exports provided: MediumExecutionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumExecutionController", function() { return MediumExecutionController; });
class MediumExecutionController {
}



/***/ }),

/***/ "QvPK":
/*!*************************************************************!*\
  !*** ./src/app/core/models/promissory-note-period.model.ts ***!
  \*************************************************************/
/*! exports provided: PromissoryNotePeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriod", function() { return PromissoryNotePeriod; });
class PromissoryNotePeriod {
}



/***/ }),

/***/ "SM/z":
/*!**********************************************!*\
  !*** ./src/app/core/models/dialect.model.ts ***!
  \**********************************************/
/*! exports provided: Dialect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialect", function() { return Dialect; });
class Dialect {
}



/***/ }),

/***/ "TPGS":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/fragments/form-action-buttons/form-action-buttons.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FormActionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function() { return FormActionButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/models/announcement.model */ "dszm");
/* harmony import */ var app_core_models_asc_rate_special_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/models/asc-rate-special.model */ "HNJZ");
/* harmony import */ var app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/models/brand-penalties.model */ "nOv4");
/* harmony import */ var app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/company-penalties.model */ "fJLi");
/* harmony import */ var app_core_models_dialect_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/models/dialect.model */ "SM/z");
/* harmony import */ var app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/models/email-notification.model */ "FnPy");
/* harmony import */ var app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/models/holiday.model */ "lflh");
/* harmony import */ var app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/login-image.model */ "VjNL");
/* harmony import */ var app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/models/medium-execution-controller.model */ "Ql0k");
/* harmony import */ var app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/models/numberOfMultipleApplicationAllowed.model */ "/RNn");
/* harmony import */ var app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/promissory-note-period.model */ "QvPK");
/* harmony import */ var app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/models/qrAndBarCodeChecker.model */ "s7wx");
/* harmony import */ var app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/models/s1-and-s2-form-expiration-period.model */ "zL5c");
/* harmony import */ var app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/models/screener-reviewer-pair.model */ "+iQW");
/* harmony import */ var app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/core/models/type-of-main-document.model */ "1T39");
/* harmony import */ var app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/core/models/type-of-medium-execution.model */ "XP8G");
/* harmony import */ var app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/core/models/type-of-rational.model */ "Do+y");
/* harmony import */ var app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/core/models/uploading-document-file-size-model */ "bq+u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");























function FormActionButtonsComponent_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " SAVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r0.childForm.valid);
    }
}
function FormActionButtonsComponent_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.validate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " VALIDATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r1.childForm.valid);
    }
}
function FormActionButtonsComponent_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "task_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " UPDATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r2.childForm.valid);
    }
}
function FormActionButtonsComponent_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " DELETE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx_r3.isHideDeleteButton)("disabled", !ctx_r3.childForm.valid);
    }
}
function FormActionButtonsComponent_button_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.resetFormValidator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (ctx_r4.childObject == null ? null : ctx_r4.childObject.id) ? "cancel" : "refresh", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (ctx_r4.childObject == null ? null : ctx_r4.childObject.id) ? "CANCEL" : "RESET", " ");
    }
}
function FormActionButtonsComponent_ng_container_7_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_ng_container_7_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r17.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " CLOSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
}
function FormActionButtonsComponent_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r19.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " APPROVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormActionButtonsComponent_ng_container_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r21.reject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "unpublished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " REJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, FormActionButtonsComponent_ng_container_7_button_9_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.isFromModal && ctx_r5.showApproveRejectButton);
    }
}
let FormActionButtonsComponent = /*@__PURE__*/ (() => {
    class FormActionButtonsComponent {
        constructor() {
            this.isFromModal = false;
            this.showApproveRejectButton = false;
            this.saveFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.validateFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.updateFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.deleteFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.cancelFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.closeModalFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.approveFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.rejectFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.isHideSaveButton = false;
            this.isShowApproveDisapproveButton = false;
            this.isHideDeleteButton = false;
            this.isHideUpdateButton = false;
            this.isShowValidateButton = false;
        }
        ngOnInit() {
            // hides the save button if class of childObject is email notification
            this.isHideSaveButton = this.childObject instanceof app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_7__["EmailNotification"]
                || this.childObject instanceof app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_19__["UploadingDocumentFileSize"]
                || this.childObject instanceof app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_13__["QrAndBarCodeChecker"]
                || this.childObject instanceof app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_11__["NumberOfMultipleApplicationAllowed"]
                || this.childObject instanceof app_core_models_asc_rate_special_model__WEBPACK_IMPORTED_MODULE_3__["AscRateSpecial"];
            this.isHideUpdateButton = this.childObject instanceof app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_9__["LoginImage"];
            this.isHideDeleteButton = this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Category"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Product"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Brand"]
                || this.childObject instanceof app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_4__["BrandPenalties"]
                || this.childObject instanceof app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_5__["CompanyPenalties"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["Affiliation"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["TypeOfMedium"]
                || this.childObject instanceof app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_17__["TypeOfMediumExecution"]
                || this.childObject instanceof app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_10__["MediumExecutionController"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["TypeOfReason"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["TypeOfDocument"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["PaymentType"]
                || this.childObject instanceof app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_8__["Holiday"]
                || this.childObject instanceof app_core_models_dialect_model__WEBPACK_IMPORTED_MODULE_6__["Dialect"]
                || this.childObject instanceof app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_15__["ScreenerReviewerPair"]
                || this.childObject instanceof app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_7__["EmailNotification"]
                || this.childObject instanceof app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_16__["TypeOfMainDocument"]
                || this.childObject instanceof app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_2__["Announcement"]
                || this.childObject instanceof app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_14__["S1AndS2FormExpirationPeriod"]
                || this.childObject instanceof app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_12__["PromissoryNotePeriod"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["AscRate"]
                || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_1__["TypeOfApplication"]
                || this.childObject instanceof app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_18__["TypeOfRational"]
                || this.childObject instanceof app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_9__["LoginImage"];
            this.isShowValidateButton = this.childObject instanceof app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_13__["QrAndBarCodeChecker"];
        }
        save() {
            this.saveFunction.emit(this.childObject);
        }
        validate() {
            this.validateFunction.emit(this.childObject);
        }
        update() {
            this.updateFunction.emit(this.childObject);
        }
        delete() {
            this.deleteFunction.emit(this.childObject);
        }
        approve() {
            this.approveFunction.emit();
        }
        reject() {
            this.rejectFunction.emit();
        }
        closeModal() {
            this.closeModalFunction.emit();
        }
        resetFormValidator() {
            this.cancelFunction.emit();
        }
    }
    FormActionButtonsComponent.??fac = function FormActionButtonsComponent_Factory(t) { return new (t || FormActionButtonsComponent)(); };
    FormActionButtonsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FormActionButtonsComponent, selectors: [["app-form-action-buttons"]], inputs: { isFromModal: "isFromModal", showApproveRejectButton: "showApproveRejectButton", childObject: "childObject", childForm: "childForm", isHideSaveButton: "isHideSaveButton", isShowApproveDisapproveButton: "isShowApproveDisapproveButton" }, outputs: { saveFunction: "saveFunction", validateFunction: "validateFunction", updateFunction: "updateFunction", deleteFunction: "deleteFunction", cancelFunction: "cancelFunction", closeModalFunction: "closeModalFunction", approveFunction: "approveFunction", rejectFunction: "rejectFunction" }, decls: 8, vars: 6, consts: [[1, "row"], [1, "col-md-12"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-red", 3, "hidden", "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons", "color__white"], ["mat-raised-button", "", 1, "button-red", 3, "hidden", "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 1, "button-red", 3, "click"], ["mat-raised-button", "", "class", "button-red", 3, "click", 4, "ngIf"]], template: function FormActionButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, FormActionButtonsComponent_button_2_Template, 4, 1, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, FormActionButtonsComponent_button_3_Template, 4, 1, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FormActionButtonsComponent_button_4_Template, 4, 1, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, FormActionButtonsComponent_button_5_Template, 4, 2, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, FormActionButtonsComponent_button_6_Template, 4, 2, "button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, FormActionButtonsComponent_ng_container_7_Template, 10, 1, "ng-container", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.childObject == null ? null : ctx.childObject.id) && !ctx.isHideSaveButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.childObject == null ? null : ctx.childObject.id) && ctx.isShowValidateButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.childObject == null ? null : ctx.childObject.id) && !ctx.isHideUpdateButton);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.childObject == null ? null : ctx.childObject.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ((ctx.childObject == null ? null : ctx.childObject.id) || (ctx.childObject == null ? null : ctx.childObject.description) || (ctx.childObject == null ? null : ctx.childObject.paymentDescription) || (ctx.childObject == null ? null : ctx.childObject.typeOfMedium) || (ctx.childObject == null ? null : ctx.childObject.reason)) && !ctx.isFromModal);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isFromModal && ctx.showApproveRejectButton || ctx.isShowApproveDisapproveButton);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhZ21lbnRzL2Zvcm0tYWN0aW9uLWJ1dHRvbnMvZm9ybS1hY3Rpb24tYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FormActionButtonsComponent;
})();



/***/ }),

/***/ "VjNL":
/*!**************************************************!*\
  !*** ./src/app/core/models/login-image.model.ts ***!
  \**************************************************/
/*! exports provided: LoginImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginImage", function() { return LoginImage; });
class LoginImage {
}



/***/ }),

/***/ "XP8G":
/*!***************************************************************!*\
  !*** ./src/app/core/models/type-of-medium-execution.model.ts ***!
  \***************************************************************/
/*! exports provided: TypeOfMediumExecution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumExecution", function() { return TypeOfMediumExecution; });
class TypeOfMediumExecution {
}



/***/ }),

/***/ "bq+u":
/*!*******************************************************************!*\
  !*** ./src/app/core/models/uploading-document-file-size-model.ts ***!
  \*******************************************************************/
/*! exports provided: UploadingDocumentFileSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadingDocumentFileSize", function() { return UploadingDocumentFileSize; });
class UploadingDocumentFileSize {
}



/***/ }),

/***/ "dszm":
/*!***************************************************!*\
  !*** ./src/app/core/models/announcement.model.ts ***!
  \***************************************************/
/*! exports provided: Announcement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Announcement", function() { return Announcement; });
class Announcement {
}



/***/ }),

/***/ "fJLi":
/*!********************************************************!*\
  !*** ./src/app/core/models/company-penalties.model.ts ***!
  \********************************************************/
/*! exports provided: CompanyPenalties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPenalties", function() { return CompanyPenalties; });
class CompanyPenalties {
}



/***/ }),

/***/ "lflh":
/*!**********************************************!*\
  !*** ./src/app/core/models/holiday.model.ts ***!
  \**********************************************/
/*! exports provided: Holiday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holiday", function() { return Holiday; });
class Holiday {
}



/***/ }),

/***/ "nOv4":
/*!******************************************************!*\
  !*** ./src/app/core/models/brand-penalties.model.ts ***!
  \******************************************************/
/*! exports provided: BrandPenalties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPenalties", function() { return BrandPenalties; });
class BrandPenalties {
}



/***/ }),

/***/ "s7wx":
/*!**********************************************************!*\
  !*** ./src/app/core/models/qrAndBarCodeChecker.model.ts ***!
  \**********************************************************/
/*! exports provided: QrAndBarCodeChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrAndBarCodeChecker", function() { return QrAndBarCodeChecker; });
class QrAndBarCodeChecker {
}



/***/ }),

/***/ "yzT2":
/*!********************************************************************!*\
  !*** ./src/app/core/models/application-rationale-list-s2.model.ts ***!
  \********************************************************************/
/*! exports provided: ApplicationS2RationaleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationS2RationaleList", function() { return ApplicationS2RationaleList; });
class ApplicationS2RationaleList {
}



/***/ }),

/***/ "zL5c":
/*!***********************************************************************!*\
  !*** ./src/app/core/models/s1-and-s2-form-expiration-period.model.ts ***!
  \***********************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriod", function() { return S1AndS2FormExpirationPeriod; });
class S1AndS2FormExpirationPeriod {
}



/***/ })

}]);
//# sourceMappingURL=default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1-es2015.js.map