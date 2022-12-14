(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["number-of-multiple-application-allowed-number-of-multiple-application-allowed-module"],{

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

/***/ "DJTD":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed-routing.module.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowedRoutingModule", function() { return NumberOfMultipleApplicationAllowedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-of-multiple-application-allowed.component */ "Ft7N");





const routes = [
    {
        path: '',
        component: _number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_2__["NumberOfMultipleApplicationAllowedComponent"]
    }
];
let NumberOfMultipleApplicationAllowedRoutingModule = /*@__PURE__*/ (() => {
    class NumberOfMultipleApplicationAllowedRoutingModule {
    }
    NumberOfMultipleApplicationAllowedRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: NumberOfMultipleApplicationAllowedRoutingModule });
    NumberOfMultipleApplicationAllowedRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function NumberOfMultipleApplicationAllowedRoutingModule_Factory(t) { return new (t || NumberOfMultipleApplicationAllowedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return NumberOfMultipleApplicationAllowedRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NumberOfMultipleApplicationAllowedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "Ft7N":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowedComponent", function() { return NumberOfMultipleApplicationAllowedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/numberOfMultipleApplicationAllowed.model */ "/RNn");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");














let NumberOfMultipleApplicationAllowedComponent = /*@__PURE__*/ (() => {
    class NumberOfMultipleApplicationAllowedComponent {
        constructor(apiService, formBuilder, sweetAlertService, validateFieldService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.validateFieldService = validateFieldService;
            this.displayedColumns = ['minimum', 'maximum'];
            this.numberOfMultipleApplicationAllowed = new app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_5__["NumberOfMultipleApplicationAllowed"]();
            this.numberOfMultipleApplicationAllowedList = [];
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].noOfMultipleApplicationAllowed).subscribe((res) => {
                this.numberOfMultipleApplicationAllowed = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        save() {
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].noOfMultipleApplicationAllowed, this.numberOfMultipleApplicationAllowed).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                err.error.message = 'Please enter numeric values only';
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                this.resetFormValidator();
                this.getList();
            });
        }
        update() {
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].noOfMultipleApplicationAllowed, this.numberOfMultipleApplicationAllowed).subscribe((res) => {
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
        getNumberOfMultipleApplicationAllowed() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].noOfMultipleApplicationAllowed, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.numberOfMultipleApplicationAllowed = res.responseData.data;
                }
            });
        }
        setFormValidator() {
            this.numberOfMultipleApplicationAllowedForm = this.formBuilder.group({
                minimum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                maximum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        resetFormValidator() {
            this.numberOfMultipleApplicationAllowed = new app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_5__["NumberOfMultipleApplicationAllowed"]();
            this.numberOfMultipleApplicationAllowedForm.markAsUntouched();
            this.numberOfMultipleApplicationAllowedForm.markAsPristine();
        }
    }
    NumberOfMultipleApplicationAllowedComponent.??fac = function NumberOfMultipleApplicationAllowedComponent_Factory(t) { return new (t || NumberOfMultipleApplicationAllowedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_7__["ValidateFieldService"])); };
    NumberOfMultipleApplicationAllowedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NumberOfMultipleApplicationAllowedComponent, selectors: [["app-number-of-multiple-application-allowed"]], viewQuery: function NumberOfMultipleApplicationAllowedComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 29, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [1, "material-icons"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "minimum", "formControlName", "minimum", "maxlength", "5", 3, "ngModel", "ngModelChange", "keydown"], ["matInput", "", "name", "maximum", "formControlName", "maximum", "maxlength", "5", 3, "ngModel", "ngModelChange", "keydown"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"]], template: function NumberOfMultipleApplicationAllowedComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "filter_9_plus");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Number of Multiple Application Allowed ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "MINIMUM: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NumberOfMultipleApplicationAllowedComponent_Template_input_ngModelChange_17_listener($event) { return ctx.numberOfMultipleApplicationAllowed.minimum = $event; })("keydown", function NumberOfMultipleApplicationAllowedComponent_Template_input_keydown_17_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-form-field", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "MAXIMUM: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NumberOfMultipleApplicationAllowedComponent_Template_input_ngModelChange_23_listener($event) { return ctx.numberOfMultipleApplicationAllowed.maximum = $event; })("keydown", function NumberOfMultipleApplicationAllowedComponent_Template_input_keydown_23_listener($event) { return ctx.validateFieldService.numbersOnly($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "app-form-action-buttons", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function NumberOfMultipleApplicationAllowedComponent_Template_app_form_action_buttons_saveFunction_24_listener() { return ctx.save(); })("updateFunction", function NumberOfMultipleApplicationAllowedComponent_Template_app_form_action_buttons_updateFunction_24_listener() { return ctx.update(); })("cancelFunction", function NumberOfMultipleApplicationAllowedComponent_Template_app_form_action_buttons_cancelFunction_24_listener() { return ctx.resetFormValidator(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "app-form-list", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function NumberOfMultipleApplicationAllowedComponent_Template_app_form_list_selectInListFunction_28_listener() { return ctx.getNumberOfMultipleApplicationAllowed(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.numberOfMultipleApplicationAllowedForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.numberOfMultipleApplicationAllowed.minimum);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.numberOfMultipleApplicationAllowed.maximum);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.numberOfMultipleApplicationAllowed)("childForm", ctx.numberOfMultipleApplicationAllowedForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_10__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_11__["FormListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbnVtYmVyLW9mLW11bHRpcGxlLWFwcGxpY2F0aW9uLWFsbG93ZWQvbnVtYmVyLW9mLW11bHRpcGxlLWFwcGxpY2F0aW9uLWFsbG93ZWQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NumberOfMultipleApplicationAllowedComponent;
})();



/***/ }),

/***/ "rRfx":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/number-of-multiple-application-allowed/number-of-multiple-application-allowed.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowedModule", function() { return NumberOfMultipleApplicationAllowedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _number_of_multiple_application_allowed_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-of-multiple-application-allowed-routing.module */ "DJTD");
/* harmony import */ var _number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number-of-multiple-application-allowed.component */ "Ft7N");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");









let NumberOfMultipleApplicationAllowedModule = /*@__PURE__*/ (() => {
    class NumberOfMultipleApplicationAllowedModule {
    }
    NumberOfMultipleApplicationAllowedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: NumberOfMultipleApplicationAllowedModule });
    NumberOfMultipleApplicationAllowedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function NumberOfMultipleApplicationAllowedModule_Factory(t) { return new (t || NumberOfMultipleApplicationAllowedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _number_of_multiple_application_allowed_routing_module__WEBPACK_IMPORTED_MODULE_2__["NumberOfMultipleApplicationAllowedRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"],
            ]] });
    return NumberOfMultipleApplicationAllowedModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NumberOfMultipleApplicationAllowedModule, { declarations: [_number_of_multiple_application_allowed_component__WEBPACK_IMPORTED_MODULE_3__["NumberOfMultipleApplicationAllowedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _number_of_multiple_application_allowed_routing_module__WEBPACK_IMPORTED_MODULE_2__["NumberOfMultipleApplicationAllowedRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=number-of-multiple-application-allowed-number-of-multiple-application-allowed-module-es2015.js.map