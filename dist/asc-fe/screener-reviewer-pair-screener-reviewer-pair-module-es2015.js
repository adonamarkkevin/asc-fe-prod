(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screener-reviewer-pair-screener-reviewer-pair-module"],{

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

/***/ "Ei2c":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ScreenerReviewerPairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairComponent", function() { return ScreenerReviewerPairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/screener-reviewer-pair.model */ "+iQW");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function ScreenerReviewerPairComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r2 == null ? null : i_r2.firstName, " ", i_r2 == null ? null : i_r2.lastName, " ");
    }
}
function ScreenerReviewerPairComponent_mat_option_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r3 == null ? null : i_r3.firstName, " ", i_r3 == null ? null : i_r3.lastName, " ");
    }
}
let ScreenerReviewerPairComponent = /*@__PURE__*/ (() => {
    class ScreenerReviewerPairComponent {
        constructor(apiService, formBuilder, sweetAlertService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['screenerName', 'reviewerName'];
            this.screenerList = [];
            this.reviewerList = [];
            this.screenerReviewerPair = new app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_5__["ScreenerReviewerPair"]();
            this.screenerReviewerPairList = [];
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
            this.getScreenerAndReviewerForList();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs).subscribe((res) => {
                this.screenerReviewerPairList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
            this.getScreenerAndReviewerForList();
        }
        save() {
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair).subscribe((res) => {
                if (res !== undefined) {
                    console.log(res);
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                this.resetFormValidator(),
                    this.getList();
                this.getScreenerAndReviewerForList();
            });
        }
        getScreenerReviewerPair() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.screenerReviewerPair = res.responseData.data;
                    console.log(this.screenerReviewerPair);
                    console.log(this.screenerList.filter((res1) => res1.username === this.screenerReviewerPair.screener.username)[0]);
                    console.log(this.screenerReviewerPair.screener);
                }
            });
        }
        update() {
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                this.resetFormValidator();
                this.getList();
                this.getScreenerAndReviewerForList();
            });
        }
        setFormValidator() {
            this.screenerReviewerPairForm = this.formBuilder.group({
                screenerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                reviewerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        resetFormValidator() {
            this.screenerReviewerPair = new app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_5__["ScreenerReviewerPair"]();
            this.screenerReviewerPairForm.markAsUntouched();
            this.screenerReviewerPairForm.markAsPristine();
        }
        getScreenerAndReviewerForList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].userAccount).subscribe((res) => {
                this.screenerList = res.responseData.data.filter((account) => account.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"].ROLE_SCREENER && account.status === _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE);
                this.reviewerList = res.responseData.data.filter((account) => account.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"].ROLE_REVIEWER && account.status === _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE);
            });
        }
        compareUser(value, selected) {
            if (value && selected) {
                return value.username === selected.username;
            }
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this screener reviewer pairing?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('Screener reviewer pairing successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    ScreenerReviewerPairComponent.ɵfac = function ScreenerReviewerPairComponent_Factory(t) { return new (t || ScreenerReviewerPairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"])); };
    ScreenerReviewerPairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScreenerReviewerPairComponent, selectors: [["app-screener-reviewer-pair"]], viewQuery: function ScreenerReviewerPairComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 22, vars: 11, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], ["name", "screenerName", "formControlName", "screenerName", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "reviewerName", "formControlName", "reviewerName", 3, "ngModel", "compareWith", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"]], template: function ScreenerReviewerPairComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Screener-Reviewer Pair ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Screener Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScreenerReviewerPairComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.screenerReviewerPair.screener = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ScreenerReviewerPairComponent_mat_option_13_Template, 2, 3, "mat-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reviewer Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScreenerReviewerPairComponent_Template_mat_select_ngModelChange_17_listener($event) { return ctx.screenerReviewerPair.reviewer = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ScreenerReviewerPairComponent_mat_option_18_Template, 2, 3, "mat-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-form-action-buttons", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_saveFunction_19_listener() { return ctx.save(); })("updateFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_updateFunction_19_listener() { return ctx.update(); })("cancelFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_cancelFunction_19_listener() { return ctx.resetFormValidator(); })("deleteFunction", function ScreenerReviewerPairComponent_Template_app_form_action_buttons_deleteFunction_19_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-form-list", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function ScreenerReviewerPairComponent_Template_app_form_list_selectInListFunction_21_listener() { return ctx.getScreenerReviewerPair(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.screenerReviewerPairForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.screenerReviewerPair.screener)("compareWith", ctx.compareUser);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screenerList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.screenerReviewerPair.reviewer)("compareWith", ctx.compareUser);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewerList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.screenerReviewerPair)("childForm", ctx.screenerReviewerPairForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2Uvc2NyZWVuZXItcmV2aWV3ZXItcGFpci9zY3JlZW5lci1yZXZpZXdlci1wYWlyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ScreenerReviewerPairComponent;
})();



/***/ }),

/***/ "L/mX":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ScreenerReviewerPairModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairModule", function() { return ScreenerReviewerPairModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screener-reviewer-pair-routing.module */ "T61r");
/* harmony import */ var _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screener-reviewer-pair.component */ "Ei2c");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let ScreenerReviewerPairModule = /*@__PURE__*/ (() => {
    class ScreenerReviewerPairModule {
    }
    ScreenerReviewerPairModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScreenerReviewerPairModule });
    ScreenerReviewerPairModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScreenerReviewerPairModule_Factory(t) { return new (t || ScreenerReviewerPairModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScreenerReviewerPairRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"],
            ]] });
    return ScreenerReviewerPairModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScreenerReviewerPairModule, { declarations: [_screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_3__["ScreenerReviewerPairComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScreenerReviewerPairRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"]] });
})();



/***/ }),

/***/ "T61r":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ScreenerReviewerPairRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairRoutingModule", function() { return ScreenerReviewerPairRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screener-reviewer-pair.component */ "Ei2c");





const routes = [
    {
        path: '',
        component: _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_2__["ScreenerReviewerPairComponent"]
    }
];
let ScreenerReviewerPairRoutingModule = /*@__PURE__*/ (() => {
    class ScreenerReviewerPairRoutingModule {
    }
    ScreenerReviewerPairRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScreenerReviewerPairRoutingModule });
    ScreenerReviewerPairRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScreenerReviewerPairRoutingModule_Factory(t) { return new (t || ScreenerReviewerPairRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ScreenerReviewerPairRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScreenerReviewerPairRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=screener-reviewer-pair-screener-reviewer-pair-module-es2015.js.map