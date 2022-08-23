(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~product-product-module"],{

/***/ "XoiW":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/product/product.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Product\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"productForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label> Brand </mat-label>\r\n          <mat-select [(ngModel)]=\"product.brand\" name=\"brand\" formControlName=\"brand\" [compareWith]=\"compareBrand\"\r\n            [disabled]=\"isFromModal\">\r\n            <mat-option *ngFor=\"let i of brandList\" [value]=\"i\">\r\n              {{i.description}}\r\n            </mat-option>\r\n            <mat-option *ngIf=\"isFromModal\">\r\n              {{ product?.brand?.description }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-10\" appearance=\"outline\">\r\n          <mat-label>Product <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"product.description\" name=\"description\" formControlName=\"description\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Category <span class=\"required-field\">*</span></mat-label>\r\n          <mat-select [(ngModel)]=\"product.category\" name=\"category\" formControlName=\"category\"\r\n            [compareWith]=\"compareCategory\">\r\n            <mat-option *ngFor=\"let i of categoryList\" [value]=\"i\">\r\n              {{i.description}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-2\" appearance=\"outline\" [hidden]=\"isFromModal\"\r\n          *ngIf=\"(userRole === 'ROLE_ADMIN' || userRole === 'ROLE_SUPER_ADMIN' || userRole === 'ROLE_ENCODER') && product.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"product.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [showApproveRejectButton]=\"showApproveRejectButton\" [isFromModal]=\"isFromModal\"\r\n      [childObject]=\"product\" [childForm]=\"productForm\" (saveFunction)=\"save()\" (updateFunction)=\"update()\"\r\n      (approveFunction)=\"approve()\" (rejectFunction)=\"reject()\" (cancelFunction)=\"resetFormValidator()\"\r\n      (closeModalFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\" [isShowApproveDisapproveButton]=\"isShowApproveDisapproveButtonByAdmin\">\r\n    </app-form-action-buttons>\r\n    <br>\r\n    <ng-container\r\n      *ngIf=\"(!showApproveRejectButton && !isFromModal) || userRole === 'ROLE_ADMIN' || userRole === 'ROLE_SUPER_ADMIN' \">\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n        (selectInListFunction)=\"getProduct()\" [hidden]=\"isFromModal\"></app-form-list>\r\n    </ng-container>\r\n\r\n  </div>\r\n</form>\r\n\r\n\r\n<!-- <form>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n            Product\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"productForm\">\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                <mat-label>Category</mat-label>\r\n                <mat-select [(ngModel)]=\"product.category\" name=\"category\" formControlName=\"category\">\r\n                  <mat-option *ngFor=\"let i of categoryList\" [value]=\"i\">\r\n                    {{i.description}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n            <mat-label>Description: <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"product.description\" name=\"description\" formControlName=\"description\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"product.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i.status}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n\r\n      <app-form-action-buttons [childObject]=\"product\" [childForm]=\"productForm\" (saveFunction)=\"save()\"\r\n        (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"></app-form-action-buttons>\r\n      <br> -->\r\n<!-- <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n        (selectInListFunction)=\"getProduct)\"></app-form-list> -->\r\n\r\n<!-- </div>\r\n  </form> -->");

/***/ }),

/***/ "mPYB":
/*!**************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/product/product.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "y6m7":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/product/product.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.component.html */ "XoiW");
/* harmony import */ var _product_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component.scss */ "mPYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");












let ProductComponent = class ProductComponent {
    constructor(apiService, formBuilder, sweetAlertService, dataStorage, dialogRef, data) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.dataStorage = dataStorage;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['brand', 'productDescription', 'category', 'status'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.product = new _models__WEBPACK_IMPORTED_MODULE_9__["Product"]();
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
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].product).subscribe((res) => {
            this.productList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
        });
    }
    getDropdownList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].activeBrands).subscribe((res) => {
            this.brandList = res.responseData.data;
        });
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category).subscribe((res) => {
            this.categoryList = res.responseData.data;
            this.categoryList = res.responseData.data.filter((category) => category.status === _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE);
        });
    }
    save() {
        if (this.isFromModal) {
            this.product.status = _shared__WEBPACK_IMPORTED_MODULE_8__["OTHER_STATUS"].FOR_APPROVAL;
        }
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].product, this.product).subscribe((res) => {
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
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].product, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.product = res.responseData.data;
                this.isShowApproveDisapproveButtonByAdmin = this.product.status === 'FOR_APPROVAL' ?
                    true : false;
            }
        });
    }
    update() {
        var _a, _b;
        if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.dataForModal) === null || _b === void 0 ? void 0 : _b.currentStatus) === _shared__WEBPACK_IMPORTED_MODULE_8__["OTHER_STATUS"].FOR_APPROVAL && this.product.status !== _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].APPROVED) {
            this.product.status = _shared__WEBPACK_IMPORTED_MODULE_8__["OTHER_STATUS"].FOR_APPROVAL;
        }
        else if (this.product.status === _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].APPROVED) {
            this.product.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        }
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].product, this.product).subscribe((res) => {
            if (res !== undefined) {
                this.sweetAlertService.success(res);
                if (this.product.status !== _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].DISAPPROVED.toUpperCase() &&
                    this.product.status !== _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].INACTIVE.toUpperCase()) {
                    this.dataStorage.setS1NewProduct(res.responseData.data);
                }
                else {
                    this.dataStorage.setS1NewProduct(new _models__WEBPACK_IMPORTED_MODULE_9__["Product"]());
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
        this.product.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.productForm = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [''],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    resetFormValidator() {
        this.product = new _models__WEBPACK_IMPORTED_MODULE_9__["Product"]();
        this.isShowApproveDisapproveButtonByAdmin = false;
        this.product.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to delete this product?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].product, this.product.id).subscribe(() => {
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
};
ProductComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"],] }] }
];
ProductComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"],] }]
};
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductComponent);



/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~product-product-module-es2015.js.map