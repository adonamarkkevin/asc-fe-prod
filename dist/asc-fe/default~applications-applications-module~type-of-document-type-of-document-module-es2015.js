(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~type-of-document-type-of-document-module"],{

/***/ "0uvy":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-document/type-of-document.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypeOfDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocumentComponent", function() { return TypeOfDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function TypeOfDocumentComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r2.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2.status, " ");
    }
}
function TypeOfDocumentComponent_mat_form_field_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_mat_form_field_17_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.typeOfDocument.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TypeOfDocumentComponent_mat_form_field_17_mat_option_4_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.typeOfDocument.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusList);
    }
}
let TypeOfDocumentComponent = /*@__PURE__*/ (() => {
    class TypeOfDocumentComponent {
        constructor(apiService, formBuilder, sweetAlertService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['typeOfDocumentDesc', 'dateOfLaunchEnable', 'expiresOnEnable', 'basedOnEnable', 'variantEnable', 'remarksEnable', 'inputEnable', 'status'];
            this.typeOfDocument = new _models__WEBPACK_IMPORTED_MODULE_2__["TypeOfDocument"]();
            this.typeOfDocumentList = [];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_3__["STATUSES"]];
            this.isChecked = false;
            this.hasInput = false;
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument).subscribe((res) => {
                this.typeOfDocumentList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        isExistingDocument() {
            const data = this.typeOfDocumentList.filter((document) => {
                var _a, _b, _c;
                return ((_a = document === null || document === void 0 ? void 0 : document.description) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_c = (_b = this.typeOfDocument) === null || _b === void 0 ? void 0 : _b.description) === null || _c === void 0 ? void 0 : _c.toLowerCase());
            });
            return (data === null || data === void 0 ? void 0 : data.length) > 0;
        }
        save() {
            if (this.isExistingDocument()) {
                return this.sweetAlertService.customErrorMessage('Document already exists', 2);
            }
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.typeOfDocument).subscribe((res) => {
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
        getTypeOfDocument() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.typeOfDocument = res.responseData.data;
                }
            });
        }
        update() {
            if (this.isExistingDocument()) {
                return this.sweetAlertService.customErrorMessage('Document already exists', 2);
            }
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.typeOfDocument).subscribe((res) => {
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
        setCheckboxValue() {
            this.isChecked = !this.isChecked;
        }
        setFormValidator() {
            this.typeOfDocument.status = _shared__WEBPACK_IMPORTED_MODULE_3__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfDocumentForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dateOfLaunchEnable: [''],
                expiresOnEnable: [''],
                basedOnEnable: [''],
                variantEnable: [''],
                remarksEnable: [''],
                inputEnable: [''],
                status: [''],
            });
        }
        resetFormValidator() {
            this.typeOfDocument = new _models__WEBPACK_IMPORTED_MODULE_2__["TypeOfDocument"]();
            this.typeOfDocument.status = _shared__WEBPACK_IMPORTED_MODULE_3__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfDocumentForm.markAsUntouched();
            this.typeOfDocumentForm.markAsPristine();
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this type of document?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.typeOfDocument.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('Type of document successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    TypeOfDocumentComponent.ɵfac = function TypeOfDocumentComponent_Factory(t) { return new (t || TypeOfDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"])); };
    TypeOfDocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypeOfDocumentComponent, selectors: [["app-type-of-document"]], viewQuery: function TypeOfDocumentComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 42, vars: 19, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["color", "warn", "formControlName", "dateOfLaunchEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "expiresOnEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "basedOnEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "variantEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "remarksEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "inputEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["appearance", "outline", 1, "col-md-4"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function TypeOfDocumentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "file_present");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Type of Document ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type of Document:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_input_ngModelChange_16_listener($event) { return ctx.typeOfDocument.description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TypeOfDocumentComponent_mat_form_field_17_Template, 5, 2, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-slide-toggle", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_19_listener($event) { return ctx.typeOfDocument.dateOfLaunchEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Has Date of Launch");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-slide-toggle", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) { return ctx.typeOfDocument.expiresOnEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Has Expiration Date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-slide-toggle", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_26_listener($event) { return ctx.typeOfDocument.basedOnEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Has Basis");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-slide-toggle", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_29_listener($event) { return ctx.typeOfDocument.variantEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Has Variant");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-slide-toggle", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_33_listener($event) { return ctx.typeOfDocument.remarksEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Has Remarks");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-slide-toggle", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_36_listener($event) { return ctx.typeOfDocument.inputEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Has Input");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-form-action-buttons", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_saveFunction_39_listener() { return ctx.save(); })("updateFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_updateFunction_39_listener() { return ctx.update(); })("cancelFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_cancelFunction_39_listener() { return ctx.resetFormValidator(); })("deleteFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_deleteFunction_39_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-form-list", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function TypeOfDocumentComponent_Template_app_form_list_selectInListFunction_41_listener() { return ctx.getTypeOfDocument(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.typeOfDocumentForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeOfDocument.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.dateOfLaunchEnable)("checked", ctx.typeOfDocument.dateOfLaunchEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.expiresOnEnable)("checked", ctx.typeOfDocument.expiresOnEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.basedOnEnable)("checked", ctx.typeOfDocument.basedOnEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.variantEnable)("checked", ctx.typeOfDocument.variantEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.remarksEnable)("checked", ctx.typeOfDocument.remarksEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfDocument.inputEnable)("checked", ctx.typeOfDocument.inputEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.typeOfDocument)("childForm", ctx.typeOfDocumentForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__["FormListComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1kb2N1bWVudC90eXBlLW9mLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TypeOfDocumentComponent;
})();



/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~type-of-document-type-of-document-module-es2015.js.map