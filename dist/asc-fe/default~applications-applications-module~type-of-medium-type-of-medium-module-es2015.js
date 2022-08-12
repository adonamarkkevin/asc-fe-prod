(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~type-of-medium-type-of-medium-module"],{

/***/ "cIBp":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium/type-of-medium.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TypeOfMediumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumComponent", function() { return TypeOfMediumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _type_of_main_document_type_of_main_document_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type-of-main-document/type-of-main-document.component */ "rJNo");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















function TypeOfMediumComponent_mat_option_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.typeOfMainDocument, " ");
    }
}
function TypeOfMediumComponent_mat_option_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5.clearanceType, " ");
    }
}
function TypeOfMediumComponent_mat_form_field_31_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r7.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7.status, " ");
    }
}
function TypeOfMediumComponent_mat_form_field_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_mat_form_field_31_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.typeOfMedium.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TypeOfMediumComponent_mat_form_field_31_mat_option_4_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.typeOfMedium.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.statusList);
    }
}
function TypeOfMediumComponent_b_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.warningMsg, "");
    }
}
let TypeOfMediumComponent = /*@__PURE__*/ (() => {
    class TypeOfMediumComponent {
        constructor(apiService, formBuilder, sweetAlertService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['typeOfMainDocumentObject', 'description', 'enabledFields', 'status'];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]];
            this.typeOfMedium = new _models__WEBPACK_IMPORTED_MODULE_1__["TypeOfMedium"]();
            this.typeOfMediumList = [];
            this.typeOfMainDocumentList = [];
            this.typeOfClearanceList = [];
            this.warningMsg = '';
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
            this.initValue();
        }
        initValue() {
            this.typeOfMedium.executionEnable = false;
            this.typeOfMedium.languageEnable = false;
            this.typeOfMedium.lengthEnable = false;
            this.typeOfMedium.multimedia = false;
            this.typeOfMedium.multimediaMoving = false;
            this.typeOfMedium.multimediaStatic = false;
            this.typeOfMedium.othersEnable = false;
            this.typeOfMedium.singlemedia = false;
            this.typeOfMedium.sizeLengthEnable = false;
            this.typeOfMedium.widthEnable = false;
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMedium).subscribe((res) => {
                this.typeOfMediumList = res.responseData.data;
                this.typeOfMediumList.map(val => {
                    val.enabledFields = '';
                    val.enabledFields = val.executionEnable ? val.enabledFields + 'Execution, ' : val.enabledFields;
                    val.enabledFields = val.languageEnable ? val.enabledFields + 'Language, ' : val.enabledFields;
                    val.enabledFields = val.lengthEnable ? val.enabledFields + 'Length, ' : val.enabledFields;
                    val.enabledFields = val.multimedia ? val.enabledFields + 'Multimedia, ' : val.enabledFields;
                    val.enabledFields = val.multimediaMoving ? val.enabledFields + 'Multimedia Moving, ' : val.enabledFields;
                    val.enabledFields = val.multimediaStatic ? val.enabledFields + 'Multimedia Static, ' : val.enabledFields;
                    val.enabledFields = val.singlemedia ? val.enabledFields + 'Single Media, ' : val.enabledFields;
                    val.enabledFields = val.sizeLengthEnable ? val.enabledFields + 'Size Length, ' : val.enabledFields;
                    val.enabledFields = val.widthEnable ? val.enabledFields + 'Width, ' : val.enabledFields;
                    val.enabledFields = val.othersEnable ? val.enabledFields + 'Others' : val.enabledFields;
                    // will remove excess comma and space
                    val.enabledFields = val.enabledFields.endsWith(' ')
                        ? val.enabledFields.substring(0, val.enabledFields.length - 2) : val.enabledFields;
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
                this.getTypeOfMainDocumentList();
                this.getTypeOfClearanceList();
            });
        }
        getTypeOfMainDocumentList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMainDocuments).subscribe((res) => {
                this.typeOfMainDocumentList = res.responseData.data;
            });
        }
        getTypeOfClearanceList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfClearance).subscribe((res) => {
                this.typeOfClearanceList = res.responseData.data;
                console.log(this.typeOfClearanceList);
            });
        }
        validateInput() {
            this.warningMsg = '';
            if (!this.typeOfMedium.singlemedia && !this.typeOfMedium.multimedia) {
                this.warningMsg = 'Please toggle Single Media and/or Multimedia';
            }
            else if (this.typeOfMedium.multimedia && (!this.typeOfMedium.multimediaMoving && !this.typeOfMedium.multimediaStatic)) {
                this.warningMsg = 'Please toggle Moving and/or Static';
            }
            else if (this.typeOfMedium.singlemedia && !this.typeOfMedium.multimedia &&
                (this.typeOfMedium.multimediaMoving || this.typeOfMedium.multimediaStatic)) {
                this.warningMsg = 'Moving or Static is for Multimedia only';
            }
        }
        save() {
            this.validateInput();
            if (!this.warningMsg) {
                this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMedium, this.typeOfMedium).subscribe((res) => {
                    if (res !== undefined) {
                        this.sweetAlertService.success(res);
                    }
                }, (err) => {
                    console.log(err);
                    this.sweetAlertService.error(err);
                }, () => {
                    // actions after subscription
                    this.resetFormValidator();
                    this.getList();
                });
            }
        }
        getTypeOfMedium() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMedium, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.typeOfMedium = res.responseData.data;
                }
            });
        }
        update() {
            this.validateInput();
            if (!this.warningMsg) {
                this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMedium, this.typeOfMedium).subscribe((res) => {
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
        }
        setFormValidator() {
            this.typeOfMedium.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfMediumForm = this.formBuilder.group({
                typeOfMainDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                medium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                status: [''],
                executionEnable: [''],
                languageEnable: [''],
                lengthEnable: [''],
                multimedia: [''],
                multimediaMoving: [''],
                multimediaStatic: [''],
                othersEnable: [''],
                singlemedia: [''],
                sizeLengthEnable: [''],
                widthEnable: [''],
                typeOfClearance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        resetFormValidator() {
            this.typeOfMedium = new _models__WEBPACK_IMPORTED_MODULE_1__["TypeOfMedium"]();
            this.typeOfMedium.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfMediumForm.markAsUntouched();
            this.typeOfMediumForm.markAsPristine();
        }
        compareTypeOfMainDocument(value, selected) {
            if (value && selected) {
                return value.typeOfMainDocument === selected.typeOfMainDocument;
            }
        }
        compareTypeOfClearance(value, selected) {
            if (value && selected) {
                return value.clearanceType === selected.clearanceType;
            }
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                text: 'Are you sure you want to delete this type of medium?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMedium, this.typeOfMedium.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('Type of medium successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    TypeOfMediumComponent.ɵfac = function TypeOfMediumComponent_Factory(t) { return new (t || TypeOfMediumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"])); };
    TypeOfMediumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypeOfMediumComponent, selectors: [["app-type-of-medium"]], viewQuery: function TypeOfMediumComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_type_of_main_document_type_of_main_document_component__WEBPACK_IMPORTED_MODULE_6__["TypeOfMainDocumentComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeOfMainDocument = _t.first);
            }
        }, decls: 79, vars: 34, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["name", "typeOfMainDocument", "formControlName", "typeOfMainDocument", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "medium", "formControlName", "medium", 3, "ngModel", "ngModelChange"], ["name", "typeOfClearance", "formControlName", "typeOfClearance", 3, "ngModel", "compareWith", "ngModelChange"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["class", "row warningMsg", 4, "ngIf"], [1, "col-md-3"], ["color", "warn", "formControlName", "singlemedia", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "multimedia", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "multimediaMoving", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "multimediaStatic", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "executionEnable", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "languageEnable", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "lengthEnable", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "othersEnable", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "sizeLengthEnable", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "widthEnable", 1, "col-md-4", 3, "ngModel", "checked", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"], ["appearance", "outline", 1, "col-md-4"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [1, "row", "warningMsg"], [1, "warning-msg"], [1, "material-icons"]], template: function TypeOfMediumComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "devices_other");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Type of Medium ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type Of Main Document ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.typeOfMedium.typeOfMainDocument = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TypeOfMediumComponent_mat_option_17_Template, 2, 2, "mat-option", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Type of Medium ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_input_ngModelChange_23_listener($event) { return ctx.typeOfMedium.description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Type Of Clearance ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.typeOfMedium.typeOfClearance = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TypeOfMediumComponent_mat_option_30_Template, 2, 2, "mat-option", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TypeOfMediumComponent_mat_form_field_31_Template, 5, 2, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TypeOfMediumComponent_b_32_Template, 5, 1, "b", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-slide-toggle", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_36_listener($event) { return ctx.typeOfMedium.singlemedia = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Single Media");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-slide-toggle", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_39_listener($event) { return ctx.typeOfMedium.multimedia = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Multimedia");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-slide-toggle", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_45_listener($event) { return ctx.typeOfMedium.multimediaMoving = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Multimedia Moving");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-slide-toggle", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_48_listener($event) { return ctx.typeOfMedium.multimediaStatic = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Multimedia Static");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-slide-toggle", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_54_listener($event) { return ctx.typeOfMedium.executionEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Execution Enable");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-slide-toggle", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_57_listener($event) { return ctx.typeOfMedium.languageEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Language Enable");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-slide-toggle", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_62_listener($event) { return ctx.typeOfMedium.lengthEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Length Enable");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-slide-toggle", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_65_listener($event) { return ctx.typeOfMedium.othersEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Others Enable");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-slide-toggle", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_70_listener($event) { return ctx.typeOfMedium.sizeLengthEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Size Length Enable");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-slide-toggle", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMediumComponent_Template_mat_slide_toggle_ngModelChange_73_listener($event) { return ctx.typeOfMedium.widthEnable = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Width Enable");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "app-form-action-buttons", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function TypeOfMediumComponent_Template_app_form_action_buttons_saveFunction_76_listener() { return ctx.save(); })("updateFunction", function TypeOfMediumComponent_Template_app_form_action_buttons_updateFunction_76_listener() { return ctx.update(); })("cancelFunction", function TypeOfMediumComponent_Template_app_form_action_buttons_cancelFunction_76_listener() { return ctx.resetFormValidator(); })("deleteFunction", function TypeOfMediumComponent_Template_app_form_action_buttons_deleteFunction_76_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "app-form-list", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function TypeOfMediumComponent_Template_app_form_list_selectInListFunction_78_listener() { return ctx.getTypeOfMedium(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.typeOfMediumForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.typeOfMainDocument)("compareWith", ctx.compareTypeOfMainDocument);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeOfMainDocumentList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.typeOfClearance)("compareWith", ctx.compareTypeOfClearance);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typeOfClearanceList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeOfMedium.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warningMsg);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.singlemedia)("checked", ctx.typeOfMedium.singlemedia);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.multimedia)("checked", ctx.typeOfMedium.multimedia);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.multimediaMoving)("checked", ctx.typeOfMedium.multimediaMoving);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.multimediaStatic)("checked", ctx.typeOfMedium.multimediaStatic);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.executionEnable)("checked", ctx.typeOfMedium.executionEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.languageEnable)("checked", ctx.typeOfMedium.languageEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.lengthEnable)("checked", ctx.typeOfMedium.lengthEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.othersEnable)("checked", ctx.typeOfMedium.othersEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.sizeLengthEnable)("checked", ctx.typeOfMedium.sizeLengthEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeOfMedium.widthEnable)("checked", ctx.typeOfMedium.widthEnable);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.typeOfMedium)("childForm", ctx.typeOfMediumForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: [".warningMsg[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS90eXBlLW9mLW1lZGl1bS90eXBlLW9mLW1lZGl1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS90eXBlLW9mLW1lZGl1bS90eXBlLW9mLW1lZGl1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nTXNne1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
    return TypeOfMediumComponent;
})();



/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~type-of-medium-type-of-medium-module-es2015.js.map