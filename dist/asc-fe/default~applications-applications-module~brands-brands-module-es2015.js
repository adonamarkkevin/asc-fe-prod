(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~brands-brands-module"],{

/***/ "vcPs":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/brands/brands.component.ts ***!
  \**********************************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");




















function BrandsComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r5.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5.status, " ");
    }
}
function BrandsComponent_mat_form_field_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrandsComponent_mat_form_field_17_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.brand.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrandsComponent_mat_form_field_17_mat_option_4_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isFromModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.brand.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusList);
    }
}
function BrandsComponent_mat_form_field_18_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
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
function BrandsComponent_mat_form_field_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Penalty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrandsComponent_mat_form_field_18_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.brand.penalty = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrandsComponent_mat_form_field_18_mat_option_4_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.isFromModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.brand.penalty)("compareWith", ctx_r1.compareBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.yesNoList);
    }
}
function BrandsComponent_form_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Penalty Fee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function BrandsComponent_ng_container_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function BrandsComponent_ng_container_22_Template_app_form_list_selectInListFunction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r3.dataSource)("displayedColumns", ctx_r3.displayedColumns)("hidden", ctx_r3.isFromModal);
    }
}
let BrandsComponent = /*@__PURE__*/ (() => {
    class BrandsComponent {
        constructor(apiService, formBuilder, sweetAlertService, dataStorage, dialogRef, data) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dataStorage = dataStorage;
            this.dialogRef = dialogRef;
            this.data = data;
            this.displayedColumns = ['brandDesc', 'penalty', 'status'];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_1__["STATUSES"]];
            this.yesNoList = [..._shared__WEBPACK_IMPORTED_MODULE_1__["YES_NO_OPTION"]];
            this.brand = new _models__WEBPACK_IMPORTED_MODULE_2__["Brand"]();
            this.brandList = [];
            // productList = [];
            // categoryList = [];
            this.statusNoDisplay = ['FOR_APPROVAL', 'DISAPPROVED', 'APPROVED'];
            this.isFromModal = false;
            this.showApproveRejectButton = false;
            this.isShowApproveDisapproveButtonByAdmin = false;
            this.userRole = '';
            this.userRole = this.dataStorage.getUserRole();
            if (data) {
                if (data.dataForModal) {
                    const dataFromModal = data.dataForModal;
                    this.isFromModal = dataFromModal.isFromModal;
                    this.showApproveRejectButton = dataFromModal.isUpdate;
                    if (dataFromModal.isUpdate) {
                        this.brand = dataFromModal.brand;
                    }
                }
            }
        }
        ngOnInit() {
            if (this.userRole !== _shared__WEBPACK_IMPORTED_MODULE_1__["USER_ROLES"].ROLE_APPLICANT) {
                this.getList();
            }
            this.setFormValidator();
            // this.getProductList();
            // this.getCategoryList();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].brand).subscribe((res) => {
                console.log(res.responseData.data);
                this.brandList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        save(endpoint) {
            if (this.isFromModal) {
                this.brand.status = 'FOR_APPROVAL';
            }
            if (!endpoint) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].brand;
            }
            this.brand.penalty = this.setBrand(this.brand.penalty);
            this.apiService.save(endpoint, this.brand).subscribe((res) => {
                if (res) {
                    this.sweetAlertService.success(res);
                    this.dataStorage.setS1NewBrand(res.responseData.data);
                }
                if (this.isFromModal) {
                    this.dialogRef.close(this.dataStorage.getS1NewBrand());
                }
                else {
                    this.resetFormValidator();
                    this.getList();
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
            });
        }
        getBrand() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].brand, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.brand = res.responseData.data;
                    // const removeStatusDisplay = this.statusNoDisplay.includes(this.brand.status);
                    // this.isFromModal = removeStatusDisplay;
                    this.showApproveRejectButton = this.brand.status === 'FOR_APPROVAL';
                    this.isShowApproveDisapproveButtonByAdmin = this.brand.status === 'FOR_APPROVAL' ?
                        true : false;
                }
            });
        }
        // getProductList() {
        //   this.apiService.findAll(ENDPOINTS.product).subscribe((res: any) => {
        //     this.productList = res.responseData.data.filter((product) => product.status === COMMON_FUNCTION.ACTIVE);
        //   });
        // }
        // getCategoryList(): void {
        //   this.apiService.findAll(ENDPOINTS.category).subscribe((res: any) => {
        //     this.categoryList = res.responseData.data;
        //   });
        // }
        update(endpoint) {
            if (!endpoint) {
                endpoint = _shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].brand;
            }
            this.brand.penalty = this.setBrand(this.brand.penalty);
            this.apiService.update(endpoint, this.brand).subscribe((res) => {
                if (res) {
                    this.sweetAlertService.success(res);
                    this.dataStorage.setS1NewBrand(res.responseData.data);
                }
                if (this.isFromModal) {
                    this.dialogRef.close(this.dataStorage.getS1NewBrand());
                }
                else {
                    this.resetFormValidator();
                    this.getList();
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
            });
        }
        setFormValidator() {
            if (!this.isFromModal) {
                this.brand.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
            }
            this.brandForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                // product: ['', Validators.required],
                // category: ['', Validators.required],
                status: [''],
                penalty: [''],
            });
        }
        resetFormValidator() {
            this.brand = new _models__WEBPACK_IMPORTED_MODULE_2__["Brand"]();
            this.isShowApproveDisapproveButtonByAdmin = false;
            if (!this.isFromModal) {
                this.brand.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
            }
            else {
                this.showApproveRejectButton = false;
                this.isFromModal = false;
            }
            this.brandForm.markAsUntouched();
            this.brandForm.markAsPristine();
        }
        // compareProduct(value: any, selected: any): boolean {
        //   if (value && selected) {
        //     return value.description === selected.description;
        //   }
        // }
        // compareCategory(value: any, selected: any): boolean {
        //   if (value && selected) {
        //     return value.description === selected.description;
        //   }
        // }
        approve() {
            this.brand.status = 'APPROVED';
            this.save(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].approveBrand);
        }
        reject() {
            this.brand.status = 'DISAPPROVED';
            this.update('');
        }
        closeModal() {
            this.dialogRef.close(this.dataStorage.getS1NewBrand());
        }
        setBrand(brandParam) {
            return brandParam === 'Yes' ? true : false;
        }
        compareBrand(value, selected) {
            if (value) {
                return value === (selected ? 'Yes' : 'No');
            }
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                text: 'Are you sure you want to delete this brand?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].brand, this.brand.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('Brand successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"], 8)); };
    BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-brands"]], viewQuery: function BrandsComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 23, vars: 11, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-10"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["class", "col-md-2", "appearance", "outline", 3, "hidden", 4, "ngIf"], [4, "ngIf"], [3, "showApproveRejectButton", "isFromModal", "childObject", "childForm", "isShowApproveDisapproveButton", "saveFunction", "updateFunction", "approveFunction", "rejectFunction", "cancelFunction", "deleteFunction"], ["appearance", "outline", 1, "col-md-2", 3, "hidden"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "penalty", "formControlName", "penalty", 3, "ngModel", "compareWith", "ngModelChange"], ["appearance", "outline", 1, "col-md-8"], ["matInput", ""], ["appearance", "outline", 1, "col-md-4"], [3, "dataSource", "displayedColumns", "hidden", "selectInListFunction"]], template: function BrandsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "turned_in");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Brand ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brand ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrandsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.brand.description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BrandsComponent_mat_form_field_17_Template, 5, 3, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BrandsComponent_mat_form_field_18_Template, 5, 4, "mat-form-field", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BrandsComponent_form_19_Template, 14, 0, "form", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-form-action-buttons", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function BrandsComponent_Template_app_form_action_buttons_saveFunction_20_listener() { return ctx.save(""); })("updateFunction", function BrandsComponent_Template_app_form_action_buttons_updateFunction_20_listener() { return ctx.update(""); })("approveFunction", function BrandsComponent_Template_app_form_action_buttons_approveFunction_20_listener() { return ctx.approve(); })("rejectFunction", function BrandsComponent_Template_app_form_action_buttons_rejectFunction_20_listener() { return ctx.reject(); })("cancelFunction", function BrandsComponent_Template_app_form_action_buttons_cancelFunction_20_listener() { return ctx.resetFormValidator(); })("deleteFunction", function BrandsComponent_Template_app_form_action_buttons_deleteFunction_20_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BrandsComponent_ng_container_22_Template, 2, 3, "ng-container", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.brandForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.brand.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userRole === "ROLE_ADMIN" || ctx.userRole === "ROLE_SUPER_ADMIN" || ctx.userRole === "ROLE_ENCODER") && ctx.brand.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userRole === "ROLE_ADMIN" || ctx.userRole === "ROLE_SUPER_ADMIN" || ctx.userRole === "ROLE_ENCODER") && ctx.brand.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userRole === "ROLE_ACCOUNTING");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showApproveRejectButton", ctx.showApproveRejectButton)("isFromModal", ctx.isFromModal)("childObject", ctx.brand)("childForm", ctx.brandForm)("isShowApproveDisapproveButton", ctx.isShowApproveDisapproveButtonByAdmin);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showApproveRejectButton && !ctx.isFromModal || ctx.userRole === "ROLE_ADMIN" || ctx.userRole === "ROLE_SUPER_ADMIN");
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__["FormListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return BrandsComponent;
})();



/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~brands-brands-module-es2015.js.map