(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~brands-brands-module"], {
    /***/
    "HWxb":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/brands/brands.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HWxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>turned_in</mat-icon> Brand\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"brandForm\">\r\n\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-10\" appearance=\"outline\">\r\n          <mat-label>Brand <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"brand.description\" name=\"description\" formControlName=\"description\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-2\" appearance=\"outline\" [hidden]=\"isFromModal\"\r\n        *ngIf=\"(userRole === 'ROLE_ADMIN' || userRole === 'ROLE_SUPER_ADMIN' || userRole === 'ROLE_ENCODER') && brand.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"brand.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Product <span class=\"required-field\">*</span></mat-label>\r\n          <mat-select [(ngModel)]=\"brand.product\" name=\"product\" formControlName=\"product\"\r\n            [compareWith]=\"compareProduct\">\r\n            <mat-option *ngFor=\"let i of productList\" [value]=\"i\">\r\n              {{i.description}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field> -->\r\n\r\n        <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Category <span class=\"required-field\">*</span></mat-label>\r\n          <mat-select [(ngModel)]=\"brand.category\" name=\"category\" formControlName=\"category\"\r\n            [compareWith]=\"compareCategory\">\r\n            <mat-option *ngFor=\"let i of categoryList\" [value]=\"i\">\r\n              {{i.description}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-2\" appearance=\"outline\" [hidden]=\"isFromModal\"\r\n         *ngIf=\"(userRole === 'ROLE_ADMIN' || userRole === 'ROLE_SUPER_ADMIN' || userRole === 'ROLE_ENCODER') && brand.id\">\r\n          <mat-label>Penalty</mat-label>\r\n          <mat-select [(ngModel)]=\"brand.penalty\" name=\"penalty\" formControlName=\"penalty\"\r\n            [compareWith]=\"compareBrand\">\r\n            <mat-option *ngFor=\"let i of yesNoList\" [value]=\"i\">\r\n              {{ i }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <form *ngIf=\"userRole==='ROLE_ACCOUNTING'\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Brand <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput  >\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n          <mat-label>Penalty Fee <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput >\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [showApproveRejectButton]=\"showApproveRejectButton\" [isFromModal]=\"isFromModal\"\r\n      [childObject]=\"brand\" [childForm]=\"brandForm\" (saveFunction)=\"save('')\" (updateFunction)=\"update('')\"\r\n      (approveFunction)=\"approve()\" (rejectFunction)=\"reject()\" (cancelFunction)=\"resetFormValidator()\"\r\n      (deleteFunction)=\"delete()\" [isShowApproveDisapproveButton]=\"isShowApproveDisapproveButtonByAdmin\">\r\n    </app-form-action-buttons>\r\n    <br>\r\n    <ng-container *ngIf=\"(!showApproveRejectButton && !isFromModal) || userRole === 'ROLE_ADMIN' || userRole === 'ROLE_SUPER_ADMIN'\">\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n        (selectInListFunction)=\"getBrand()\" [hidden]=\"isFromModal\">\r\n      </app-form-list>\r\n    </ng-container>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "RErg":
    /*!************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brands/brands.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function RErg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "vcPs":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brands/brands.component.ts ***!
      \**********************************************************************/

    /*! exports provided: BrandsComponent */

    /***/
    function vcPs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandsComponent", function () {
        return BrandsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brands_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brands.component.html */
      "HWxb");
      /* harmony import */


      var _brands_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brands.component.scss */
      "RErg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var BrandsComponent = /*#__PURE__*/function () {
        function BrandsComponent(apiService, formBuilder, sweetAlertService, dataStorage, dialogRef, data) {
          _classCallCheck(this, BrandsComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.dataStorage = dataStorage;
          this.dialogRef = dialogRef;
          this.data = data;
          this.displayedColumns = ['brandDesc', 'penalty', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["STATUSES"]);
          this.yesNoList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["YES_NO_OPTION"]);
          this.brand = new _models__WEBPACK_IMPORTED_MODULE_6__["Brand"]();
          this.brandList = []; // productList = [];
          // categoryList = [];

          this.statusNoDisplay = ['FOR_APPROVAL', 'DISAPPROVED', 'APPROVED'];
          this.isFromModal = false;
          this.showApproveRejectButton = false;
          this.isShowApproveDisapproveButtonByAdmin = false;
          this.userRole = '';
          this.userRole = this.dataStorage.getUserRole();

          if (data) {
            if (data.dataForModal) {
              var dataFromModal = data.dataForModal;
              this.isFromModal = dataFromModal.isFromModal;
              this.showApproveRejectButton = dataFromModal.isUpdate;

              if (dataFromModal.isUpdate) {
                this.brand = dataFromModal.brand;
              }
            }
          }
        }

        _createClass(BrandsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.userRole !== _shared__WEBPACK_IMPORTED_MODULE_5__["USER_ROLES"].ROLE_APPLICANT) {
              this.getList();
            }

            this.setFormValidator(); // this.getProductList();
            // this.getCategoryList();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand).subscribe(function (res) {
              console.log(res.responseData.data);
              _this.brandList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save(endpoint) {
            var _this2 = this;

            if (this.isFromModal) {
              this.brand.status = 'FOR_APPROVAL';
            }

            if (!endpoint) {
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand;
            }

            this.brand.penalty = this.setBrand(this.brand.penalty);
            this.apiService.save(endpoint, this.brand).subscribe(function (res) {
              if (res) {
                _this2.sweetAlertService.success(res);

                _this2.dataStorage.setS1NewBrand(res.responseData.data);
              }

              if (_this2.isFromModal) {
                _this2.dialogRef.close(_this2.dataStorage.getS1NewBrand());
              } else {
                _this2.resetFormValidator();

                _this2.getList();
              }
            }, function (err) {
              _this2.sweetAlertService.error(err);
            }, function () {// actions after subscription
            });
          }
        }, {
          key: "getBrand",
          value: function getBrand() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.brand = res.responseData.data; // const removeStatusDisplay = this.statusNoDisplay.includes(this.brand.status);
                // this.isFromModal = removeStatusDisplay;

                _this3.showApproveRejectButton = _this3.brand.status === 'FOR_APPROVAL';
                _this3.isShowApproveDisapproveButtonByAdmin = _this3.brand.status === 'FOR_APPROVAL' ? true : false;
              }
            });
          } // getProductList() {
          //   this.apiService.findAll(ENDPOINTS.product).subscribe((res: any) => {
          //     this.productList = res.responseData.data.filter((product) => product.status === COMMON_FUNCTION.ACTIVE);
          //   });
          // }
          // getCategoryList(): void {
          //   this.apiService.findAll(ENDPOINTS.category).subscribe((res: any) => {
          //     this.categoryList = res.responseData.data;
          //   });
          // }

        }, {
          key: "update",
          value: function update(endpoint) {
            var _this4 = this;

            if (!endpoint) {
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand;
            }

            this.brand.penalty = this.setBrand(this.brand.penalty);
            this.apiService.update(endpoint, this.brand).subscribe(function (res) {
              if (res) {
                _this4.sweetAlertService.success(res);

                _this4.dataStorage.setS1NewBrand(res.responseData.data);
              }

              if (_this4.isFromModal) {
                _this4.dialogRef.close(_this4.dataStorage.getS1NewBrand());
              } else {
                _this4.resetFormValidator();

                _this4.getList();
              }
            }, function (err) {
              _this4.sweetAlertService.error(err);
            }, function () {// actions after subscription
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            if (!this.isFromModal) {
              this.brand.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            }

            this.brandForm = this.formBuilder.group({
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              // product: ['', Validators.required],
              // category: ['', Validators.required],
              status: [''],
              penalty: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.brand = new _models__WEBPACK_IMPORTED_MODULE_6__["Brand"]();
            this.isShowApproveDisapproveButtonByAdmin = false;

            if (!this.isFromModal) {
              this.brand.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            } else {
              this.showApproveRejectButton = false;
              this.isFromModal = false;
            }

            this.brandForm.markAsUntouched();
            this.brandForm.markAsPristine();
          } // compareProduct(value: any, selected: any): boolean {
          //   if (value && selected) {
          //     return value.description === selected.description;
          //   }
          // }
          // compareCategory(value: any, selected: any): boolean {
          //   if (value && selected) {
          //     return value.description === selected.description;
          //   }
          // }

        }, {
          key: "approve",
          value: function approve() {
            this.brand.status = 'APPROVED';
            this.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].approveBrand);
          }
        }, {
          key: "reject",
          value: function reject() {
            this.brand.status = 'DISAPPROVED';
            this.update('');
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close(this.dataStorage.getS1NewBrand());
          }
        }, {
          key: "setBrand",
          value: function setBrand(brandParam) {
            return brandParam === 'Yes' ? true : false;
          }
        }, {
          key: "compareBrand",
          value: function compareBrand(value, selected) {
            if (value) {
              return value === (selected ? 'Yes' : 'No');
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              text: 'Are you sure you want to delete this brand?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand, _this5.brand.id).subscribe(function () {
                  _this5.sweetAlertService.customSuccessMessage('Brand successfully deleted.');

                  _this5.resetFormValidator();

                  _this5.getList();
                });
              }
            });
          }
        }]);

        return BrandsComponent;
      }();

      BrandsComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["SweetAlertService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      BrandsComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_9__["FormListComponent"]]
        }]
      };
      BrandsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-brands',
        template: _raw_loader_brands_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brands_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BrandsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~applications-applications-module~brands-brands-module-es5.js.map