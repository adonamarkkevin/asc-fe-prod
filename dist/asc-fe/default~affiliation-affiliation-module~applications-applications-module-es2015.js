(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~affiliation-affiliation-module~applications-applications-module"],{

/***/ "Y9a5":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/affiliation/affiliation.component.ts ***!
  \********************************************************************************/
/*! exports provided: AffiliationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliationComponent", function() { return AffiliationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function AffiliationComponent_mat_option_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r2, " ");
    }
}
function AffiliationComponent_mat_form_field_22_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r4.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r4.status, " ");
    }
}
function AffiliationComponent_mat_form_field_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AffiliationComponent_mat_form_field_22_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.affiliation.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AffiliationComponent_mat_form_field_22_mat_option_4_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.affiliation.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.statusList);
    }
}
let AffiliationComponent = /*@__PURE__*/ (() => {
    class AffiliationComponent {
        constructor(apiService, formBuilder, sweetAlertService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['affiliationDesc', 'member', 'status'];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_1__["STATUSES"]];
            this.yesNoList = [..._shared__WEBPACK_IMPORTED_MODULE_1__["YES_NO_OPTION"]];
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_4__["Affiliation"]();
            this.affiliationList = [];
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation).subscribe((res) => {
                this.affiliationList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        save() {
            if (this.affiliation.member.toString() === 'No') {
                this.affiliation.member = this.setValue(this.affiliation.member);
            }
            this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.affiliation).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                this.resetFormValidator();
                this.getList();
            });
        }
        getAffiliation() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.affiliation = res.responseData.data;
                }
            });
        }
        confirmUpdate() {
            if (this.affiliation.status === 'INACTIVE') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    text: `Admin should manually change the company's membership affiliation value to its equivalent non member value. Continue?`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                }).then((result) => {
                    if (result.value) {
                        this.update();
                    }
                });
            }
            else {
                this.update();
            }
        }
        update() {
            this.affiliation.member = this.setValue(this.affiliation.member);
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.affiliation).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                this.resetFormValidator();
                this.getList();
            });
        }
        setFormValidator() {
            this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
            this.affiliation.member = true;
            this.affiliationForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                member: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: [''],
            });
        }
        resetFormValidator() {
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_4__["Affiliation"]();
            this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
            this.affiliation.member = true;
            this.affiliationForm.markAsUntouched();
            this.affiliationForm.markAsPristine();
        }
        setValue(param) {
            return param === 'Yes' || param === true ? true : false;
        }
        compareMember(value, selected) {
            if (value) {
                return value === (selected ? 'Yes' : 'No');
            }
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this brand?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.affiliation.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('Affiliation successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    AffiliationComponent.??fac = function AffiliationComponent_Factory(t) { return new (t || AffiliationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"])); };
    AffiliationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AffiliationComponent, selectors: [["app-affiliation"]], viewQuery: function AffiliationComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 26, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "col-md-4"], ["name", "member", "formControlName", "member", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"]], template: function AffiliationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "groups");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Member's Affiliation ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Member's Affiliation ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AffiliationComponent_Template_input_ngModelChange_16_listener($event) { return ctx.affiliation.description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Member");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AffiliationComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.affiliation.member = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AffiliationComponent_mat_option_21_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, AffiliationComponent_mat_form_field_22_Template, 5, 2, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "app-form-action-buttons", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function AffiliationComponent_Template_app_form_action_buttons_saveFunction_23_listener() { return ctx.save(); })("updateFunction", function AffiliationComponent_Template_app_form_action_buttons_updateFunction_23_listener() { return ctx.confirmUpdate(); })("cancelFunction", function AffiliationComponent_Template_app_form_action_buttons_cancelFunction_23_listener() { return ctx.resetFormValidator(); })("deleteFunction", function AffiliationComponent_Template_app_form_action_buttons_deleteFunction_23_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "app-form-list", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function AffiliationComponent_Template_app_form_list_selectInListFunction_25_listener() { return ctx.getAffiliation(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.affiliationForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.affiliation.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.affiliation.member)("compareWith", ctx.compareMember);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.yesNoList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.affiliation.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.affiliation)("childForm", ctx.affiliationForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYWZmaWxpYXRpb24vYWZmaWxpYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return AffiliationComponent;
})();



/***/ })

}]);
//# sourceMappingURL=default~affiliation-affiliation-module~applications-applications-module-es2015.js.map