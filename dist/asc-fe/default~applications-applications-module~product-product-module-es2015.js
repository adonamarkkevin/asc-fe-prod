(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~product-product-module"],{

/***/ "y6m7":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/product/product.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");



















function ProductComponent_mat_option_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5.description, " ");
    }
}
function ProductComponent_mat_option_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.product == null ? null : ctx_r1.product.brand == null ? null : ctx_r1.product.brand.description, " ");
    }
}
function ProductComponent_mat_option_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.description, " ");
    }
}
function ProductComponent_mat_form_field_28_mat_option_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r8.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r8.status, " ");
    }
}
function ProductComponent_mat_form_field_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_mat_form_field_28_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.product.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductComponent_mat_form_field_28_mat_option_4_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.isFromModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.statusList);
    }
}
function ProductComponent_ng_container_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function ProductComponent_ng_container_31_Template_app_form_list_selectInListFunction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.getProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.dataSource)("displayedColumns", ctx_r4.displayedColumns)("hidden", ctx_r4.isFromModal);
    }
}
let ProductComponent = /*@__PURE__*/ (() => {
    class ProductComponent {
        constructor(apiService, formBuilder, sweetAlertService, dataStorage, dialogRef, data) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dataStorage = dataStorage;
            this.dialogRef = dialogRef;
            this.data = data;
            this.displayedColumns = ['brand', 'productDescription', 'category', 'status'];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]];
            this.product = new _models__WEBPACK_IMPORTED_MODULE_5__["Product"]();
            this.productList = [];
            this.brandList = [];
            this.categoryList = [];
            this.isFromModal = false;
            this.showApproveRejectButton = false;
            this.isShowApproveDisapproveButtonByAdmin = false;
            this.userRole = '';
            this.userRole = this.dataStorage.getUserRole();
            if (data) {
                if (data.dataForModal) {
                    const dataFromModal = data.dataForModal;
                    console.log(dataFromModal);
                    this.isFromModal = dataFromModal.isFromModal;
                    this.showApproveRejectButton = dataFromModal.isUpdate;
                    if (dataFromModal.isUpdate) {
                        this.product = dataFromModal.product;
                    }
                    else {
                        this.product.brand = dataFromModal.brand;
                    }
                }
            }
        }
        ngOnInit() {
            if (!this.isFromModal) {
                this.getList();
            }
            this.setFormValidator();
            this.getDropdownList();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].product).subscribe((res) => {
                this.productList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        getDropdownList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].activeBrands).subscribe((res) => {
                this.brandList = res.responseData.data;
            });
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category).subscribe((res) => {
                this.categoryList = res.responseData.data;
                this.categoryList = res.responseData.data.filter((category) => category.status === _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE);
            });
        }
        save() {
            if (this.isFromModal) {
                this.product.status = _shared__WEBPACK_IMPORTED_MODULE_4__["OTHER_STATUS"].FOR_APPROVAL;
            }
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].product, this.product).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                    this.dataStorage.setS1NewProduct(res.responseData.data);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                if (this.isFromModal) {
                    this.dialogRef.close(this.dataStorage.getS1NewProduct());
                }
                else {
                    this.resetFormValidator();
                    this.getList();
                }
            });
        }
        getProduct() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].product, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.product = res.responseData.data;
                    this.isShowApproveDisapproveButtonByAdmin = this.product.status === 'FOR_APPROVAL' ?
                        true : false;
                }
            });
        }
        update() {
            var _a, _b;
            if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.dataForModal) === null || _b === void 0 ? void 0 : _b.currentStatus) === _shared__WEBPACK_IMPORTED_MODULE_4__["OTHER_STATUS"].FOR_APPROVAL && this.product.status !== _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].APPROVED) {
                this.product.status = _shared__WEBPACK_IMPORTED_MODULE_4__["OTHER_STATUS"].FOR_APPROVAL;
            }
            else if (this.product.status === _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].APPROVED) {
                this.product.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            }
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].product, this.product).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                    if (this.product.status !== _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].DISAPPROVED.toUpperCase() &&
                        this.product.status !== _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].INACTIVE.toUpperCase()) {
                        this.dataStorage.setS1NewProduct(res.responseData.data);
                    }
                    else {
                        this.dataStorage.setS1NewProduct(new _models__WEBPACK_IMPORTED_MODULE_5__["Product"]());
                    }
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                if (this.isFromModal) {
                    this.dialogRef.close(this.dataStorage.getS1NewProduct());
                }
                else {
                    this.resetFormValidator();
                    this.getList();
                }
            });
        }
        setFormValidator() {
            this.product.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            this.productForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                status: [''],
                brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        }
        resetFormValidator() {
            this.product = new _models__WEBPACK_IMPORTED_MODULE_5__["Product"]();
            this.isShowApproveDisapproveButtonByAdmin = false;
            this.product.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            this.productForm.markAsUntouched();
            this.productForm.markAsPristine();
        }
        compareCategory(value, selected) {
            if (value && selected) {
                return value.description === selected.description;
            }
        }
        compareBrand(value, selected) {
            if (value && selected) {
                return value.description === selected.description;
            }
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this product?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].product, this.product.id).subscribe(() => {
                        this.sweetAlertService.customSuccessMessage('Product successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
        approve() {
            this.product.status = 'APPROVED';
            this.update();
        }
        reject() {
            this.product.status = 'DISAPPROVED';
            this.update();
        }
    }
    ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"], 8)); };
    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], viewQuery: function ProductComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 32, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], ["name", "brand", "formControlName", "brand", 3, "ngModel", "compareWith", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["appearance", "outline", 1, "col-md-10"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["name", "category", "formControlName", "category", 3, "ngModel", "compareWith", "ngModelChange"], ["class", "col-md-2", "appearance", "outline", 3, "hidden", 4, "ngIf"], [3, "showApproveRejectButton", "isFromModal", "childObject", "childForm", "isShowApproveDisapproveButton", "saveFunction", "updateFunction", "approveFunction", "rejectFunction", "cancelFunction", "closeModalFunction", "deleteFunction"], [3, "value"], ["appearance", "outline", 1, "col-md-2", 3, "hidden"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "dataSource", "displayedColumns", "hidden", "selectInListFunction"]], template: function ProductComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Product ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Brand ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.product.brand = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductComponent_mat_option_14_Template, 2, 1, "mat-option", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Product ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_input_ngModelChange_20_listener($event) { return ctx.product.description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Category ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.product.category = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductComponent_mat_option_27_Template, 2, 2, "mat-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductComponent_mat_form_field_28_Template, 5, 3, "mat-form-field", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-form-action-buttons", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function ProductComponent_Template_app_form_action_buttons_saveFunction_29_listener() { return ctx.save(); })("updateFunction", function ProductComponent_Template_app_form_action_buttons_updateFunction_29_listener() { return ctx.update(); })("approveFunction", function ProductComponent_Template_app_form_action_buttons_approveFunction_29_listener() { return ctx.approve(); })("rejectFunction", function ProductComponent_Template_app_form_action_buttons_rejectFunction_29_listener() { return ctx.reject(); })("cancelFunction", function ProductComponent_Template_app_form_action_buttons_cancelFunction_29_listener() { return ctx.resetFormValidator(); })("closeModalFunction", function ProductComponent_Template_app_form_action_buttons_closeModalFunction_29_listener() { return ctx.resetFormValidator(); })("deleteFunction", function ProductComponent_Template_app_form_action_buttons_deleteFunction_29_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductComponent_ng_container_31_Template, 2, 3, "ng-container", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.brand)("compareWith", ctx.compareBrand)("disabled", ctx.isFromModal);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brandList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFromModal);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.category)("compareWith", ctx.compareCategory);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userRole === "ROLE_ADMIN" || ctx.userRole === "ROLE_SUPER_ADMIN" || ctx.userRole === "ROLE_ENCODER") && ctx.product.id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showApproveRejectButton", ctx.showApproveRejectButton)("isFromModal", ctx.isFromModal)("childObject", ctx.product)("childForm", ctx.productForm)("isShowApproveDisapproveButton", ctx.isShowApproveDisapproveButtonByAdmin);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showApproveRejectButton && !ctx.isFromModal || ctx.userRole === "ROLE_ADMIN" || ctx.userRole === "ROLE_SUPER_ADMIN");
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__["FormListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ProductComponent;
})();



/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~product-product-module-es2015.js.map