(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["s1-and-s2-form-expiration-period-s1-and-s2-form-expiration-period-module"],{

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

/***/ "7Zr9":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriodModule", function() { return S1AndS2FormExpirationPeriodModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _s1_and_s2_form_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period-routing.module */ "pkD9");
/* harmony import */ var _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period.component */ "Kuzo");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let S1AndS2FormExpirationPeriodModule = /*@__PURE__*/ (() => {
    class S1AndS2FormExpirationPeriodModule {
    }
    S1AndS2FormExpirationPeriodModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: S1AndS2FormExpirationPeriodModule });
    S1AndS2FormExpirationPeriodModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function S1AndS2FormExpirationPeriodModule_Factory(t) { return new (t || S1AndS2FormExpirationPeriodModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _s1_and_s2_form_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_2__["S1AndS2FormExpirationPeriodRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"],
            ]] });
    return S1AndS2FormExpirationPeriodModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](S1AndS2FormExpirationPeriodModule, { declarations: [_s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_3__["S1AndS2FormExpirationPeriodComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _s1_and_s2_form_expiration_period_routing_module__WEBPACK_IMPORTED_MODULE_2__["S1AndS2FormExpirationPeriodRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_4__["FragmentsModule"]] });
})();



/***/ }),

/***/ "Kuzo":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriodComponent", function() { return S1AndS2FormExpirationPeriodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/s1-and-s2-form-expiration-period.model */ "zL5c");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");















let S1AndS2FormExpirationPeriodComponent = /*@__PURE__*/ (() => {
    class S1AndS2FormExpirationPeriodComponent {
        constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.validateFieldService = validateFieldService;
            this.displayedColumns = ['s1ExpNoOfYears', 's2ExpNoOfYears'];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]];
            this.s1AndS2FormExpirationPeriod = new app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_5__["S1AndS2FormExpirationPeriod"]();
            this.s1AndS2FormExpirationPeriodList = [];
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].s1AndS2FormExpirationPeriods).subscribe((res) => {
                this.s1AndS2FormExpirationPeriodList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        save() {
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.s1AndS2FormExpirationPeriod).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                if (!Number(this.s1AndS2FormExpirationPeriod.s1ExpNoOfYears)
                    || !Number(this.s1AndS2FormExpirationPeriod.s2ExpNoOfYears)) {
                    err.error.message = 'Please enter numeric values only';
                }
                else {
                    err.error.message = 'Default expiration values have already been set. Select the entry to update the record';
                }
                this.sweetAlertService.error(err);
            }, () => {
                this.resetFormValidator(),
                    this.getList();
            });
        }
        getS1AndS2FormExpirationPeriod() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.s1AndS2FormExpirationPeriod = res.responseData.data;
                    console.log(res);
                }
            });
        }
        update() {
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.s1AndS2FormExpirationPeriod).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                this.resetFormValidator();
                this.getList();
            });
        }
        setFormValidator() {
            this.s1AndS2FormExpirationPeriodForm = this.formBuilder.group({
                s1ExpNoOfYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                s2ExpNoOfYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        resetFormValidator() {
            this.s1AndS2FormExpirationPeriod = new app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_5__["S1AndS2FormExpirationPeriod"]();
            this.s1AndS2FormExpirationPeriodForm.markAsUntouched();
            this.s1AndS2FormExpirationPeriodForm.markAsPristine();
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this S1 and S2 form expiration period?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].s1AndS2FormExpirationPeriods, this.s1AndS2FormExpirationPeriod.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('S1 and S2 form expiration period successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    S1AndS2FormExpirationPeriodComponent.??fac = function S1AndS2FormExpirationPeriodComponent_Factory(t) { return new (t || S1AndS2FormExpirationPeriodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_8__["ValidateFieldService"])); };
    S1AndS2FormExpirationPeriodComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: S1AndS2FormExpirationPeriodComponent, selectors: [["app-s1-and-s2-form-expiration-period"]], viewQuery: function S1AndS2FormExpirationPeriodComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 24, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "s1ExpNoOfYears", "formControlName", "s1ExpNoOfYears", 3, "ngModel", "ngModelChange", "keydown"], ["matInput", "", "name", "s2ExpNoOfYears", "formControlName", "s2ExpNoOfYears", 3, "ngModel", "ngModelChange", "keydown"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"]], template: function S1AndS2FormExpirationPeriodComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " S1 and S2 Form Expiration Period ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "S1 Expiration No Of Years ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function S1AndS2FormExpirationPeriodComponent_Template_input_ngModelChange_14_listener($event) { return ctx.s1AndS2FormExpirationPeriod.s1ExpNoOfYears = $event; })("keydown", function S1AndS2FormExpirationPeriodComponent_Template_input_keydown_14_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "S2 Expiration No Of Years ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function S1AndS2FormExpirationPeriodComponent_Template_input_ngModelChange_20_listener($event) { return ctx.s1AndS2FormExpirationPeriod.s2ExpNoOfYears = $event; })("keydown", function S1AndS2FormExpirationPeriodComponent_Template_input_keydown_20_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "app-form-action-buttons", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function S1AndS2FormExpirationPeriodComponent_Template_app_form_action_buttons_saveFunction_21_listener() { return ctx.save(); })("updateFunction", function S1AndS2FormExpirationPeriodComponent_Template_app_form_action_buttons_updateFunction_21_listener() { return ctx.update(); })("cancelFunction", function S1AndS2FormExpirationPeriodComponent_Template_app_form_action_buttons_cancelFunction_21_listener() { return ctx.resetFormValidator(); })("deleteFunction", function S1AndS2FormExpirationPeriodComponent_Template_app_form_action_buttons_deleteFunction_21_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "app-form-list", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function S1AndS2FormExpirationPeriodComponent_Template_app_form_list_selectInListFunction_23_listener() { return ctx.getS1AndS2FormExpirationPeriod(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.s1AndS2FormExpirationPeriodForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.s1AndS2FormExpirationPeriod.s1ExpNoOfYears);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.s1AndS2FormExpirationPeriod.s2ExpNoOfYears);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.s1AndS2FormExpirationPeriod)("childForm", ctx.s1AndS2FormExpirationPeriodForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__["FormListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvczEtYW5kLXMyLWZvcm0tZXhwaXJhdGlvbi1wZXJpb2QvczEtYW5kLXMyLWZvcm0tZXhwaXJhdGlvbi1wZXJpb2QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return S1AndS2FormExpirationPeriodComponent;
})();



/***/ }),

/***/ "pkD9":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/s1-and-s2-form-expiration-period/s1-and-s2-form-expiration-period-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriodRoutingModule", function() { return S1AndS2FormExpirationPeriodRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s1-and-s2-form-expiration-period.component */ "Kuzo");





const routes = [
    {
        path: '',
        component: _s1_and_s2_form_expiration_period_component__WEBPACK_IMPORTED_MODULE_2__["S1AndS2FormExpirationPeriodComponent"]
    }
];
let S1AndS2FormExpirationPeriodRoutingModule = /*@__PURE__*/ (() => {
    class S1AndS2FormExpirationPeriodRoutingModule {
    }
    S1AndS2FormExpirationPeriodRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: S1AndS2FormExpirationPeriodRoutingModule });
    S1AndS2FormExpirationPeriodRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function S1AndS2FormExpirationPeriodRoutingModule_Factory(t) { return new (t || S1AndS2FormExpirationPeriodRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return S1AndS2FormExpirationPeriodRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](S1AndS2FormExpirationPeriodRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=s1-and-s2-form-expiration-period-s1-and-s2-form-expiration-period-module-es2015.js.map