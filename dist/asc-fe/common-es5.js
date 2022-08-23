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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0lHG":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/affiliation/affiliation.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function lHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYWZmaWxpYXRpb24vYWZmaWxpYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "0uvy":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-document/type-of-document.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: TypeOfDocumentComponent */

    /***/
    function uvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfDocumentComponent", function () {
        return TypeOfDocumentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_type_of_document_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./type-of-document.component.html */
      "bnN7");
      /* harmony import */


      var _type_of_document_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./type-of-document.component.scss */
      "O3Ch");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var TypeOfDocumentComponent = /*#__PURE__*/function () {
        function TypeOfDocumentComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, TypeOfDocumentComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['typeOfDocumentDesc', 'dateOfLaunchEnable', 'expiresOnEnable', 'basedOnEnable', 'variantEnable', 'remarksEnable', 'inputEnable', 'status'];
          this.typeOfDocument = new _models__WEBPACK_IMPORTED_MODULE_5__["TypeOfDocument"]();
          this.typeOfDocumentList = [];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_6__["STATUSES"]);
          this.isChecked = false;
          this.hasInput = false;
        }

        _createClass(TypeOfDocumentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfDocument).subscribe(function (res) {
              _this.typeOfDocumentList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfDocument, this.typeOfDocument).subscribe(function (res) {
              if (res !== undefined) {
                _this2.sweetAlertService.success(res);
              }
            }, function (err) {
              _this2.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this2.resetFormValidator();

              _this2.getList();
            });
          }
        }, {
          key: "getTypeOfDocument",
          value: function getTypeOfDocument() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfDocument, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.typeOfDocument = res.responseData.data;
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfDocument, this.typeOfDocument).subscribe(function (res) {
              if (res !== undefined) {
                _this4.sweetAlertService.success(res);
              }
            }, function (err) {
              _this4.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this4.resetFormValidator();

              _this4.getList();
            });
          }
        }, {
          key: "setCheckboxValue",
          value: function setCheckboxValue() {
            this.isChecked = !this.isChecked;
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.typeOfDocument.status = _shared__WEBPACK_IMPORTED_MODULE_6__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfDocumentForm = this.formBuilder.group({
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              dateOfLaunchEnable: [''],
              expiresOnEnable: [''],
              basedOnEnable: [''],
              variantEnable: [''],
              remarksEnable: [''],
              inputEnable: [''],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.typeOfDocument = new _models__WEBPACK_IMPORTED_MODULE_5__["TypeOfDocument"]();
            this.typeOfDocument.status = _shared__WEBPACK_IMPORTED_MODULE_6__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfDocumentForm.markAsUntouched();
            this.typeOfDocumentForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this type of document?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfDocument, _this5.typeOfDocument.id).subscribe(function () {
                  _this5.sweetAlertService.customSuccessMessage('Type of document successfully deleted.');

                  _this5.resetFormValidator();

                  _this5.getList();
                });
              }
            });
          }
        }]);

        return TypeOfDocumentComponent;
      }();

      TypeOfDocumentComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }];
      };

      TypeOfDocumentComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_9__["FormListComponent"]]
        }]
      };
      TypeOfDocumentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-document',
        template: _raw_loader_type_of_document_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_document_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TypeOfDocumentComponent);
      /***/
    },

    /***/
    "1kjv":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/category/category.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CategoryComponent */

    /***/
    function kjv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
        return CategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category.component.html */
      "kQwJ");
      /* harmony import */


      var _category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category.component.scss */
      "nw/W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var CategoryComponent = /*#__PURE__*/function () {
        function CategoryComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, CategoryComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['categoryDescription', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]);
          this.category = new _models__WEBPACK_IMPORTED_MODULE_9__["Category"]();
          this.categoryList = [];
          this.isExist = false;
        }

        _createClass(CategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator(); // this.getProductList();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this6 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category).subscribe(function (res) {
              _this6.categoryList = res.responseData.data;
              _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this6.dataSource.paginator = _this6.formListComponent.paginator;
              _this6.dataSource.sort = _this6.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this7 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category, this.category).subscribe(function (res) {
              if (res !== undefined) {
                _this7.sweetAlertService.success(res);
              }
            }, function (err) {
              _this7.sweetAlertService.error(err);
            }, function () {
              _this7.resetFormValidator(), _this7.getList();
            });
          } // not in used

        }, {
          key: "checkCategoryIfExisting",
          value: function checkCategoryIfExisting(categoryName) {
            var _this8 = this;

            var category = [];
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category).subscribe(function (res) {
              category = res.responseData.data;
              category = category.filter(function (cn) {
                return cn.description === categoryName;
              });

              if (category.length > 0) {
                _this8.sweetAlertService.customErrorMessage('Category name already exist.');
              } else {
                if (_this8.category.id > 0) {
                  _this8.update();
                } else {
                  _this8.save();
                }
              }
            });
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this9 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this9.category = res.responseData.data;
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this10 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category, this.category).subscribe(function (res) {
              if (res !== undefined) {
                _this10.sweetAlertService.success(res);
              }
            }, function (err) {
              _this10.sweetAlertService.error(err);
            }, function () {
              _this10.resetFormValidator();

              _this10.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.category.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
            this.categoryForm = this.formBuilder.group({
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.category = new _models__WEBPACK_IMPORTED_MODULE_9__["Category"]();
            this.category.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
            this.categoryForm.markAsUntouched();
            this.categoryForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this11 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this company?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this11.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].category, _this11.category.id).subscribe(function () {
                  _this11.sweetAlertService.customSuccessMessage('Category successfully deleted.');

                  _this11.resetFormValidator();

                  _this11.getList();
                }, function (err) {
                  _this11.sweetAlertService.error(err);
                }, function () {
                  _this11.resetFormValidator();

                  _this11.getList();
                });
              }
            });
          }
        }]);

        return CategoryComponent;
      }();

      CategoryComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]
        }];
      };

      CategoryComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryComponent);
      /***/
    },

    /***/
    "223Z":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/affiliation/affiliation.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>groups</mat-icon> Member's Affiliation\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"affiliationForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Member's Affiliation <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"affiliation.description\" name=\"description\" formControlName=\"description\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n          <mat-label>Member</mat-label>\r\n          <mat-select [(ngModel)]=\"affiliation.member\" name=\"member\" formControlName=\"member\"\r\n            [compareWith]=\"compareMember\">\r\n            <mat-option *ngFor=\"let i of yesNoList\" [value]=\"i\">\r\n              {{ i }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"affiliation.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"affiliation.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"affiliation\" [childForm]=\"affiliationForm\" (saveFunction)=\"save()\"\r\n      (updateFunction)=\"confirmUpdate()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getAffiliation()\"></app-form-list>\r\n\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "5iOt":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/list-payment/list-payment.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ListPaymentComponent */

    /***/
    function iOt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPaymentComponent", function () {
        return ListPaymentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_payment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-payment.component.html */
      "YEDN");
      /* harmony import */


      var _list_payment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-payment.component.scss */
      "JqyX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ListPaymentComponent = /*#__PURE__*/function () {
        function ListPaymentComponent(router, apiService) {
          var _this12 = this;

          _classCallCheck(this, ListPaymentComponent);

          this.router = router;
          this.apiService = apiService;
          this.displayedColumns = ['referenceCode', 'typeOfApplication', 'brand', 'typeOfMedium', 'companyName', 'paymentStatus'];
          this.paymentList = [];
          this.pageSize = 10;
          this.pageNo = 0;
          this.currentPage = 1;
          this.totalItems = 0;
          this.pageSizeOptions = [10, 20, 50];

          this.doFilter = function (value) {
            _this12.dataSource.filter = value.trim().toLocaleLowerCase();
          };
        }

        _createClass(ListPaymentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getS1PaymentList();
          }
        }, {
          key: "getS1PaymentList",
          value: function getS1PaymentList() {
            var _this13 = this;

            var endpoint = "?page=".concat(this.currentPage, "&size=").concat(this.pageSize);
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].accountingPaymentForApprovals + endpoint).subscribe(function (res) {
              _this13.paymentList = res.responseData.data;
              console.log('payment list:: ', _this13.paymentList);
              _this13.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this13.paymentList); // this.dataSource.paginator = this.paginator;

              _this13.dataSource.sort = _this13.sort;
            });
            console.log('Whuy', this.paymentList);
          }
        }, {
          key: "pageEvents",
          value: function pageEvents(event) {
            this.pageSize = event.pageSize;

            if (event.pageIndex > this.pageNo) {
              this.pageNo++;
            } else {
              this.pageNo--;
            }

            if (event.pageSize > event.length) {
              this.pageNo = 0;
            }

            this.getS1PaymentList();
          }
        }, {
          key: "getPaymentDetails",
          value: function getPaymentDetails(id) {
            this.router.navigate(['asc/page/accounting/update/', id]);
          }
        }]);

        return ListPaymentComponent;
      }();

      ListPaymentComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }];
      };

      ListPaymentComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
            "static": false
          }]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], {
            "static": false
          }]
        }]
      };
      ListPaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-payment',
        template: _raw_loader_list_payment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_payment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListPaymentComponent);
      /***/
    },

    /***/
    "6+jk":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/pages/account/account-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AccountRoutingModule */

    /***/
    function jk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
        return AccountRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].USER_ROLE,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-role-user-role-module */
            [__webpack_require__.e("common"), __webpack_require__.e("user-role-user-role-module")]).then(__webpack_require__.bind(null,
            /*! ./user-role/user-role.module */
            "Hfcq")).then(function (m) {
              return m.UserRoleModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].USER_REGISTRATION,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-registration-user-registration-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186")]).then(__webpack_require__.bind(null,
            /*! ./user-registration/user-registration.module */
            "LHvS")).then(function (m) {
              return m.UserRegistrationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].UPDATE_USER + '/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-registration-user-registration-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186")]).then(__webpack_require__.bind(null,
            /*! ./user-registration/user-registration.module */
            "LHvS")).then(function (m) {
              return m.UserRegistrationModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].USER_PROFILE,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-profile-user-profile-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module")]).then(__webpack_require__.bind(null,
            /*! ./user-profile/user-profile.module */
            "kZWL")).then(function (m) {
              return m.UserProfileModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_2__["URL_PATHS"].USER_LIST,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | user-list-user-list-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-list-user-list-module"), __webpack_require__.e("user-list-user-list-module")]).then(__webpack_require__.bind(null,
            /*! ./user-list/user-list.module */
            "YOJv")).then(function (m) {
              return m.UserListModule;
            });
          }
        }]
      }];

      var AccountRoutingModule = /*#__PURE__*/_createClass(function AccountRoutingModule() {
        _classCallCheck(this, AccountRoutingModule);
      });

      AccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], AccountRoutingModule);
      /***/
    },

    /***/
    "BovY":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/product/product-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProductRoutingModule */

    /***/
    function BovY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function () {
        return ProductRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product.component */
      "y6m7");

      var routes = [{
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
      }];

      var ProductRoutingModule = /*#__PURE__*/_createClass(function ProductRoutingModule() {
        _classCallCheck(this, ProductRoutingModule);
      });

      ProductRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductRoutingModule);
      /***/
    },

    /***/
    "EES/":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brands/brands.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BrandsModule */

    /***/
    function EES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandsModule", function () {
        return BrandsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _brands_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brands-routing.module */
      "xava");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./brands.component */
      "vcPs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var BrandsModule = /*#__PURE__*/_createClass(function BrandsModule() {
        _classCallCheck(this, BrandsModule);
      });

      BrandsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_brands_component__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _brands_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrandsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], BrandsModule);
      /***/
    },

    /***/
    "EJAF":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/payment-type/payment-type.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EJAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>payment</mat-icon> Payment Type\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"paymentTypeForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Payment Description: <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"paymentType.paymentDescription\" name=\"paymentDescription\"\r\n            formControlName=\"paymentDescription\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"paymentType.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"paymentType.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.amount\" [checked]=\"paymentType.amount\" color=\"warn\"\r\n          formControlName=\"amount\"><b>Has Amount</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.bankBranch\" [checked]=\"paymentType.bankBranch\"\r\n          color=\"warn\" formControlName=\"bankBranch\"><b>Has Bank Branch</b>\r\n        </mat-slide-toggle>\r\n        <br>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.bankName\" [checked]=\"paymentType.bankName\"\r\n          color=\"warn\" formControlName=\"bankName\"><b>Has Bank Name</b></mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.controlNo\" [checked]=\"paymentType.controlNo\"\r\n          color=\"warn\" formControlName=\"controlNo\"><b>Has Control Number</b>\r\n        </mat-slide-toggle>\r\n        <br>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.fundTransferDate\"\r\n          [checked]=\"paymentType.fundTransferDate\" color=\"warn\" formControlName=\"fundTransferDate\"><b>Has Fund Transfer\r\n            Date</b></mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.promisorryDate\"\r\n          [checked]=\"paymentType.promisorryDate\" color=\"warn\" formControlName=\"promisorryDate\"><b>Has Promisorry\r\n            Date</b></mat-slide-toggle>\r\n        <br>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"paymentType.referenceNo\" [checked]=\"paymentType.referenceNo\"\r\n          color=\"warn\" formControlName=\"referenceNo\"><b>Has Reference No\r\n          </b></mat-slide-toggle>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"paymentType\" [childForm]=\"paymentTypeForm\" (saveFunction)=\"save()\"\r\n      (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getPaymentType()\"></app-form-list>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "HMc/":
    /*!***********************************************!*\
      !*** ./src/app/core/services/date.service.ts ***!
      \***********************************************/

    /*! exports provided: DateService */

    /***/
    function HMc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DateService = /*#__PURE__*/function () {
        function DateService(datepipe) {
          _classCallCheck(this, DateService);

          this.datepipe = datepipe;
        }

        _createClass(DateService, [{
          key: "setDate",
          value: function setDate(value) {
            if (!value) return null;
            return new Date(this.datepipe.transform(value, 'yyyy-MM-dd'));
          }
        }]);

        return DateService;
      }();

      DateService.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        }];
      };

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "Hfcq":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role.module.ts ***!
      \*********************************************************************/

    /*! exports provided: UserRoleModule */

    /***/
    function Hfcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleModule", function () {
        return UserRoleModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_role_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-role-routing.module */
      "VtJi");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _user_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-role.component */
      "Yv2Y");

      var UserRoleModule = /*#__PURE__*/_createClass(function UserRoleModule() {
        _classCallCheck(this, UserRoleModule);
      });

      UserRoleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_role_component__WEBPACK_IMPORTED_MODULE_7__["UserRoleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_role_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoleRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]
      })], UserRoleModule);
      /***/
    },

    /***/
    "Hjha":
    /*!********************************************************!*\
      !*** ./src/app/core/models/type-of-execution.model.ts ***!
      \********************************************************/

    /*! exports provided: TypeOfExecution */

    /***/
    function Hjha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfExecution", function () {
        return TypeOfExecution;
      });

      var TypeOfExecution = /*#__PURE__*/_createClass(function TypeOfExecution() {
        _classCallCheck(this, TypeOfExecution);
      });
      /***/

    },

    /***/
    "Inok":
    /*!**********************************************!*\
      !*** ./src/app/core/models/voucher.model.ts ***!
      \**********************************************/

    /*! exports provided: Voucher */

    /***/
    function Inok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Voucher", function () {
        return Voucher;
      });

      var Voucher = /*#__PURE__*/_createClass(function Voucher() {
        _classCallCheck(this, Voucher);
      });
      /***/

    },

    /***/
    "JqyX":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/list-payment/list-payment.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function JqyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9saXN0LXBheW1lbnQvbGlzdC1wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Ncx4":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/payment-type/payment-type.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ncx4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvcGF5bWVudC10eXBlL3BheW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "O1SJ":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/list-payment/list-payment.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ListPaymentModule */

    /***/
    function O1SJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPaymentModule", function () {
        return ListPaymentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _list_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-payment-routing.module */
      "xKaw");
      /* harmony import */


      var _list_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list-payment.component */
      "5iOt");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var ListPaymentModule = /*#__PURE__*/_createClass(function ListPaymentModule() {
        _classCallCheck(this, ListPaymentModule);
      });

      ListPaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_payment_component__WEBPACK_IMPORTED_MODULE_4__["ListPaymentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _list_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListPaymentRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
      })], ListPaymentModule);
      /***/
    },

    /***/
    "O3Ch":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-document/type-of-document.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function O3Ch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1kb2N1bWVudC90eXBlLW9mLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "PE+p":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/payment-type/payment-type.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PaymentTypeComponent */

    /***/
    function PEP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentTypeComponent", function () {
        return PaymentTypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payment_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payment-type.component.html */
      "EJAF");
      /* harmony import */


      var _payment_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payment-type.component.scss */
      "Ncx4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var PaymentTypeComponent = /*#__PURE__*/function () {
        function PaymentTypeComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, PaymentTypeComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['paymentDescription', 'amount', 'bankBranch', 'bankName', 'controlNo', 'fundTransferDate', 'promisorryDate', 'referenceNo', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_6__["STATUSES"]);
          this.paymentType = new _models__WEBPACK_IMPORTED_MODULE_5__["PaymentType"]();
          this.paymentTypeList = [];
        }

        _createClass(PaymentTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this14 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentType).subscribe(function (res) {
              _this14.paymentTypeList = res.responseData.data;
              _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.responseData.data);
              _this14.dataSource.paginator = _this14.formListComponent.paginator;
              _this14.dataSource.sort = _this14.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this15 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentType, this.paymentType).subscribe(function (res) {
              if (res !== undefined) {
                _this15.sweetAlertService.success(res);
              }
            }, function (err) {
              _this15.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this15.resetFormValidator();

              _this15.getList();
            });
          }
        }, {
          key: "getPaymentType",
          value: function getPaymentType() {
            var _this16 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentType, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this16.paymentType = res.responseData.data;
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this17 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentType, this.paymentType).subscribe(function (res) {
              if (res !== undefined) {
                _this17.sweetAlertService.success(res);
              }
            }, function (err) {
              _this17.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this17.resetFormValidator();

              _this17.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.paymentType.status = _shared__WEBPACK_IMPORTED_MODULE_6__["COMMON_FUNCTION"].ACTIVE;
            this.paymentTypeForm = this.formBuilder.group({
              paymentDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              amount: [''],
              bankBranch: [''],
              bankName: [''],
              controlNo: [''],
              fundTransferDate: [''],
              promisorryDate: [''],
              referenceNo: [''],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.paymentType = new _models__WEBPACK_IMPORTED_MODULE_5__["PaymentType"]();
            this.paymentType.status = _shared__WEBPACK_IMPORTED_MODULE_6__["COMMON_FUNCTION"].ACTIVE;
            this.paymentTypeForm.markAsUntouched();
            this.paymentTypeForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this18 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this payment type?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this18.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentType, _this18.paymentType.id).subscribe(function () {
                  _this18.sweetAlertService.customSuccessMessage('Payment type successfully deleted.');

                  _this18.resetFormValidator();

                  _this18.getList();
                });
              }
            });
          }
        }]);

        return PaymentTypeComponent;
      }();

      PaymentTypeComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }];
      };

      PaymentTypeComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_9__["FormListComponent"]]
        }]
      };
      PaymentTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment-type',
        template: _raw_loader_payment_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PaymentTypeComponent);
      /***/
    },

    /***/
    "Ql1/":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/pages/accounting/accounting-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AccountingRoutingModule */

    /***/
    function Ql1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountingRoutingModule", function () {
        return AccountingRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var routes = [{
        path: '',
        children: [{
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].PAYMENTS,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | payments-payments-module */
            "payments-payments-module").then(__webpack_require__.bind(null,
            /*! ./payments/payments.module */
            "aiYd")).then(function (m) {
              return m.PaymentsModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LIST_PAYMENT,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | list-payment-list-payment-module */
            "common").then(__webpack_require__.bind(null,
            /*! ./list-payment/list-payment.module */
            "O1SJ")).then(function (m) {
              return m.ListPaymentModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_PAYMENT,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-payment-add-payment-module */
            [__webpack_require__.e("default~add-payment-add-payment-module~applications-applications-module"), __webpack_require__.e("add-payment-add-payment-module")]).then(__webpack_require__.bind(null,
            /*! ./add-payment/add-payment.module */
            "9Ls8")).then(function (m) {
              return m.AddPaymentModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].UPDATE_PAYMENT + '/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-payment-add-payment-module */
            [__webpack_require__.e("default~add-payment-add-payment-module~applications-applications-module"), __webpack_require__.e("add-payment-add-payment-module")]).then(__webpack_require__.bind(null,
            /*! ./add-payment/add-payment.module */
            "9Ls8")).then(function (m) {
              return m.AddPaymentModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].UPDATE_PAYMENT + '/:id/:status',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-payment-add-payment-module */
            [__webpack_require__.e("default~add-payment-add-payment-module~applications-applications-module"), __webpack_require__.e("add-payment-add-payment-module")]).then(__webpack_require__.bind(null,
            /*! ./add-payment/add-payment.module */
            "9Ls8")).then(function (m) {
              return m.AddPaymentModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].VOUCHER_ENROLLMENT,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | company-voucher-company-voucher-enrollment-company-voucher-enrollment-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("company-voucher-company-voucher-enrollment-company-voucher-enrollment-module")]).then(__webpack_require__.bind(null,
            /*! ./company-voucher/company-voucher-enrollment/company-voucher-enrollment.module */
            "thCm")).then(function (m) {
              return m.CompanyVoucherEnrollmentModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].VOUCHER_REPLENISHMENT,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | company-voucher-company-voucher-fund-company-voucher-fund-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("company-voucher-company-voucher-fund-company-voucher-fund-module")]).then(__webpack_require__.bind(null,
            /*! ./company-voucher/company-voucher-fund/company-voucher-fund.module */
            "O0vE")).then(function (m) {
              return m.CompanyVoucherFundModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_PAYMENT,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | add-payment-add-payment-module */
            [__webpack_require__.e("default~add-payment-add-payment-module~applications-applications-module"), __webpack_require__.e("add-payment-add-payment-module")]).then(__webpack_require__.bind(null,
            /*! ./add-payment/add-payment.module */
            "9Ls8")).then(function (m) {
              return m.AddPaymentModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].REPORTS,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | reports-reports-module */
            [__webpack_require__.e("common"), __webpack_require__.e("reports-reports-module")]).then(__webpack_require__.bind(null,
            /*! ./reports/reports.module */
            "qZlX")).then(function (m) {
              return m.ReportsModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_PENALTY,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-penalty-add-penalty-module */
            "add-penalty-add-penalty-module").then(__webpack_require__.bind(null,
            /*! ./add-penalty/add-penalty.module */
            "EJ3x")).then(function (m) {
              return m.AddPenaltyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ADD_PENALTY + '/:type',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-penalty-add-penalty-module */
            "add-penalty-add-penalty-module").then(__webpack_require__.bind(null,
            /*! ./add-penalty/add-penalty.module */
            "EJ3x")).then(function (m) {
              return m.AddPenaltyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].UPDATE_PENALTY + '/:type/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | add-penalty-add-penalty-module */
            "add-penalty-add-penalty-module").then(__webpack_require__.bind(null,
            /*! ./add-penalty/add-penalty.module */
            "EJ3x")).then(function (m) {
              return m.AddPenaltyModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].VOUCHER_MONITORING,
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module */
            "voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module").then(__webpack_require__.bind(null,
            /*! ./voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring.module */
            "PaDb")).then(function (m) {
              return m.VoucherBrandMonitoringModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].VOUCHER_MONITORING + '/:brand',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module */
            "voucher-brand-monitoring-voucher-brand-monitoring-voucher-brand-monitoring-module").then(__webpack_require__.bind(null,
            /*! ./voucher-brand-monitoring/voucher-brand-monitoring/voucher-brand-monitoring.module */
            "PaDb")).then(function (m) {
              return m.VoucherBrandMonitoringModule;
            });
          }
        }, {
          path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].OR_PREPARATION,
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | or-preparation-or-preparation-module */
            [__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("common"), __webpack_require__.e("or-preparation-or-preparation-module")]).then(__webpack_require__.bind(null,
            /*! ./or-preparation/or-preparation.module */
            "/+ax")).then(function (m) {
              return m.OrPreparationModule;
            });
          }
        }]
      }];

      var AccountingRoutingModule = /*#__PURE__*/_createClass(function AccountingRoutingModule() {
        _classCallCheck(this, AccountingRoutingModule);
      });

      AccountingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountingRoutingModule);
      /***/
    },

    /***/
    "VtJi":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: UserRoleRoutingModule */

    /***/
    function VtJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleRoutingModule", function () {
        return UserRoleRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _user_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-role.component */
      "Yv2Y");

      var routes = [{
        path: '',
        component: _user_role_component__WEBPACK_IMPORTED_MODULE_3__["UserRoleComponent"]
      }];

      var UserRoleRoutingModule = /*#__PURE__*/_createClass(function UserRoleRoutingModule() {
        _classCallCheck(this, UserRoleRoutingModule);
      });

      UserRoleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserRoleRoutingModule);
      /***/
    },

    /***/
    "WIvK":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-reason/type-of-reason.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function WIvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1yZWFzb24vdHlwZS1vZi1yZWFzb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Y9a5":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/affiliation/affiliation.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AffiliationComponent */

    /***/
    function Y9a5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AffiliationComponent", function () {
        return AffiliationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_affiliation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./affiliation.component.html */
      "223Z");
      /* harmony import */


      var _affiliation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./affiliation.component.scss */
      "0lHG");
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


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var AffiliationComponent = /*#__PURE__*/function () {
        function AffiliationComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, AffiliationComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['affiliationDesc', 'member', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["STATUSES"]);
          this.yesNoList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["YES_NO_OPTION"]);
          this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_8__["Affiliation"]();
          this.affiliationList = [];
        }

        _createClass(AffiliationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this19 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].affiliation).subscribe(function (res) {
              _this19.affiliationList = res.responseData.data;
              _this19.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.responseData.data);
              _this19.dataSource.paginator = _this19.formListComponent.paginator;
              _this19.dataSource.sort = _this19.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this20 = this;

            if (this.affiliation.member.toString() === 'No') {
              this.affiliation.member = this.setValue(this.affiliation.member);
            }

            this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].affiliation, this.affiliation).subscribe(function (res) {
              if (res !== undefined) {
                _this20.sweetAlertService.success(res);
              }
            }, function (err) {
              _this20.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this20.resetFormValidator();

              _this20.getList();
            });
          }
        }, {
          key: "getAffiliation",
          value: function getAffiliation() {
            var _this21 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].affiliation, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this21.affiliation = res.responseData.data;
              }
            });
          }
        }, {
          key: "confirmUpdate",
          value: function confirmUpdate() {
            var _this22 = this;

            if (this.affiliation.status === 'INACTIVE') {
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                text: "Admin should manually change the company's membership affiliation value to its equivalent non member value. Continue?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this22.update();
                }
              });
            } else {
              this.update();
            }
          }
        }, {
          key: "update",
          value: function update() {
            var _this23 = this;

            this.affiliation.member = this.setValue(this.affiliation.member);
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].affiliation, this.affiliation).subscribe(function (res) {
              if (res !== undefined) {
                _this23.sweetAlertService.success(res);
              }
            }, function (err) {
              _this23.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this23.resetFormValidator();

              _this23.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            this.affiliation.member = true;
            this.affiliationForm = this.formBuilder.group({
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              member: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_8__["Affiliation"]();
            this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
            this.affiliation.member = true;
            this.affiliationForm.markAsUntouched();
            this.affiliationForm.markAsPristine();
          }
        }, {
          key: "setValue",
          value: function setValue(param) {
            return param === 'Yes' || param === true ? true : false;
          }
        }, {
          key: "compareMember",
          value: function compareMember(value, selected) {
            if (value) {
              return value === (selected ? 'Yes' : 'No');
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this24 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this brand?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this24.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].affiliation, _this24.affiliation.id).subscribe(function () {
                  _this24.sweetAlertService.customSuccessMessage('Affiliation successfully deleted.');

                  _this24.resetFormValidator();

                  _this24.getList();
                });
              }
            });
          }
        }]);

        return AffiliationComponent;
      }();

      AffiliationComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["SweetAlertService"]
        }];
      };

      AffiliationComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_9__["FormListComponent"]]
        }]
      };
      AffiliationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-affiliation',
        template: _raw_loader_affiliation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_affiliation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AffiliationComponent);
      /***/
    },

    /***/
    "YEDN":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/list-payment/list-payment.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YEDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>view_list</mat-icon>  PROOF OF PAYMENTS\r\n        </mat-label>\r\n\r\n        <!-- <button class=\"button-right button-red\" mat-raised-button [routerLink]=\"['/asc/page/accounting/add']\">\r\n          <mat-icon>add</mat-icon> NEW PAYMENT\r\n        </button> -->\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"col-md-12\" fxLayout fxLayoutAlign=\"center center\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"mat-elevation-z8 fields\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"referenceCode\">\r\n          <th mat-header-cell *matHeaderCellDef > REFERENCE CODE </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element.id)\">\r\n            {{ element?.applicationForm?.referenceCode }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"typeOfApplication\">\r\n          <th mat-header-cell *matHeaderCellDef > TYPE OF APPLICATION </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element.id)\">\r\n            {{ element?.applicationForm?.applicationType?.description }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"brand\">\r\n          <th mat-header-cell *matHeaderCellDef > BRAND </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element.id)\">\r\n            {{ element?.applicationForm?.brand?.description }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"typeOfMedium\">\r\n          <th mat-header-cell *matHeaderCellDef > TYPE OF MEDIUM </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element.id)\">\r\n            {{ element?.applicationForm?.refTypeOfMedium }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"companyName\">\r\n          <th mat-header-cell *matHeaderCellDef > PRESENTOR'S COMPANY NAME </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element.id)\">\r\n            {{ element?.applicationForm?.applicationOwner?.company?.companyName }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"paymentStatus\">\r\n          <th mat-header-cell *matHeaderCellDef > PAYMENT STATUS </th>\r\n          <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element.id)\">\r\n            {{ element?.paymentStatus }} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n        No record found.\r\n      </div>\r\n      <mat-paginator [pageSize]=\"pageSize\" [pageIndex]=\"pageNo\" [length]=\"totalItems\"\r\n      [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvents($event)\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n";
      /***/
    },

    /***/
    "Yv2Y":
    /*!************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role.component.ts ***!
      \************************************************************************/

    /*! exports provided: UserRoleComponent */

    /***/
    function Yv2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function () {
        return UserRoleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_role_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-role.component.html */
      "wqAU");
      /* harmony import */


      var _user_role_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-role.component.scss */
      "iQwZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var UserRoleComponent = /*#__PURE__*/function () {
        function UserRoleComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, UserRoleComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['name', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_10__["STATUSES"]);
          this.roleList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_10__["ROLES"]);
          this.userRole = new _models__WEBPACK_IMPORTED_MODULE_8__["UserRole"]();
          this.userRoleList = [];
        }

        _createClass(UserRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this25 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].roles).subscribe(function (res) {
              console.log(res.responseData.data);
              _this25.userRoleList = res.responseData.data;
              _this25.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this25.userRoleList);
              _this25.dataSource.paginator = _this25.paginator;
              _this25.dataSource.sort = _this25.sort;
            }, function (err) {});
          }
        }, {
          key: "save",
          value: function save() {
            var _this26 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].roles, this.userRole).subscribe(function (res) {
              if (res !== undefined) {
                _this26.sweetAlertService.success(res);
              }
            }, function (err) {
              _this26.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this26.resetFormValidator();

              _this26.getList();
            });
          }
        }, {
          key: "getUserRole",
          value: function getUserRole(name) {
            var _this27 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].roles + '/role-name/' + name).subscribe(function (res) {
              if (res) {
                _this27.userRole = res;
              }
            }, function (err) {
              _this27.userRole = err.error;
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this28 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].roles, this.userRole).subscribe(function (res) {
              if (res !== undefined) {
                _this28.sweetAlertService.success(res);
              }
            }, function (err) {
              _this28.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this28.resetFormValidator();

              _this28.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.userRole.status = _shared__WEBPACK_IMPORTED_MODULE_10__["COMMON_FUNCTION"].ACTIVE;
            this.userRoleForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.userRole = new _models__WEBPACK_IMPORTED_MODULE_8__["UserRole"]();
            this.userRole.status = _shared__WEBPACK_IMPORTED_MODULE_10__["COMMON_FUNCTION"].ACTIVE;
            this.userRoleForm.markAsUntouched();
            this.userRoleForm.markAsPristine();
          }
        }]);

        return UserRoleComponent;
      }();

      UserRoleComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"]
        }];
      };

      UserRoleComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
            "static": false
          }]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], {
            "static": false
          }]
        }]
      };
      UserRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-role',
        template: _raw_loader_user_role_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_role_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserRoleComponent);
      /***/
    },

    /***/
    "ZJcX":
    /*!*************************************************************************!*\
      !*** ./src/app/core/models/s1-settlement-or-expiration-period.model.ts ***!
      \*************************************************************************/

    /*! exports provided: S1SettlementOrExpirationPeriod */

    /***/
    function ZJcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1SettlementOrExpirationPeriod", function () {
        return S1SettlementOrExpirationPeriod;
      });

      var S1SettlementOrExpirationPeriod = /*#__PURE__*/_createClass(function S1SettlementOrExpirationPeriod() {
        _classCallCheck(this, S1SettlementOrExpirationPeriod);
      });
      /***/

    },

    /***/
    "bnN7":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-document/type-of-document.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bnN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>file_present</mat-icon> Type of Document\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"typeOfDocumentForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Type of Document:<span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"typeOfDocument.description\" name=\"description\" formControlName=\"description\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfDocument.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"typeOfDocument.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"typeOfDocument.dateOfLaunchEnable\" [checked]=\"typeOfDocument.dateOfLaunchEnable\" color=\"warn\" formControlName=\"dateOfLaunchEnable\"><b>Has Date of Launch</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"typeOfDocument.expiresOnEnable\" [checked]=\"typeOfDocument.expiresOnEnable\" color=\"warn\" formControlName=\"expiresOnEnable\"><b>Has Expiration Date</b>\r\n        </mat-slide-toggle>\r\n      <br>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"typeOfDocument.basedOnEnable\" [checked]=\"typeOfDocument.basedOnEnable\" color=\"warn\" formControlName=\"basedOnEnable\"><b>Has Basis</b></mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"typeOfDocument.variantEnable\" [checked]=\"typeOfDocument.variantEnable\" color=\"warn\" formControlName=\"variantEnable\"><b>Has Variant</b>\r\n        </mat-slide-toggle>\r\n      <br>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"typeOfDocument.remarksEnable\" [checked]=\"typeOfDocument.remarksEnable\" color=\"warn\" formControlName=\"remarksEnable\"><b>Has Remarks</b></mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-5\" [(ngModel)]=\"typeOfDocument.inputEnable\" [checked]=\"typeOfDocument.inputEnable\" color=\"warn\" formControlName=\"inputEnable\"><b>Has Input</b></mat-slide-toggle>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"typeOfDocument\" [childForm]=\"typeOfDocumentForm\" (saveFunction)=\"save()\"\r\n      (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getTypeOfDocument()\"></app-form-list>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "iQwZ":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function iQwZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".badge {\n  padding: 5px 20px;\n  text-decoration: none;\n  width: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcm9sZS91c2VyLXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcm9sZS91c2VyLXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2V7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG59Il19 */";
      /***/
    },

    /***/
    "iUXy":
    /*!*********************************************************!*\
      !*** ./src/app/modules/pages/account/account.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountModule */

    /***/
    function iUXy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account-routing.module */
      "6+jk");

      var AccountModule = /*#__PURE__*/_createClass(function AccountModule() {
        _classCallCheck(this, AccountModule);
      });

      AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"]]
      })], AccountModule);
      /***/
    },

    /***/
    "kQwJ":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/category/category.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kQwJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Category\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"categoryForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Category: <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"category.description\" name=\"description\" formControlName=\"description\">\r\n        </mat-form-field>\r\n\r\n         <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Product <span class=\"required-field\">*</span></mat-label>\r\n          <mat-select [(ngModel)]=\"category.product\" name=\"product\" formControlName=\"product\"\r\n            [compareWith]=\"compareProduct\">\r\n            <mat-option *ngFor=\"let i of productList\" [value]=\"i\">\r\n              {{i.description}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"category.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"category.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"category\" [childForm]=\"categoryForm\" (saveFunction)=\"save()\"\r\n      (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getCategory()\"></app-form-list>\r\n\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "kyg5":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-reason/type-of-reason.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: TypeOfReasonComponent */

    /***/
    function kyg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfReasonComponent", function () {
        return TypeOfReasonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_type_of_reason_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./type-of-reason.component.html */
      "uDXb");
      /* harmony import */


      var _type_of_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./type-of-reason.component.scss */
      "WIvK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var TypeOfReasonComponent = /*#__PURE__*/function () {
        function TypeOfReasonComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, TypeOfReasonComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['reason', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_9__["STATUSES"]);
          this.typeOfReason = new _models__WEBPACK_IMPORTED_MODULE_7__["TypeOfReason"]();
          this.typeOfReasonList = [];
        }

        _createClass(TypeOfReasonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this29 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfReason).subscribe(function (res) {
              _this29.typeOfReasonList = res.responseData.data;
              _this29.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this29.dataSource.paginator = _this29.formListComponent.paginator;
              _this29.dataSource.sort = _this29.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this30 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfReason, this.typeOfReason).subscribe(function (res) {
              if (res !== undefined) {
                _this30.sweetAlertService.success(res);
              }
            }, function (err) {
              _this30.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this30.resetFormValidator();

              _this30.getList();
            });
          }
        }, {
          key: "getTypeOfReason",
          value: function getTypeOfReason() {
            var _this31 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfReason, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this31.typeOfReason = res.responseData.data;
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this32 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfReason, this.typeOfReason).subscribe(function (res) {
              if (res !== undefined) {
                _this32.sweetAlertService.success(res);
              }
            }, function (err) {
              _this32.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this32.resetFormValidator();

              _this32.getList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.typeOfReason.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfReasonForm = this.formBuilder.group({
              reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              status: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.typeOfReason = new _models__WEBPACK_IMPORTED_MODULE_7__["TypeOfReason"]();
            this.typeOfReason.status = _shared__WEBPACK_IMPORTED_MODULE_9__["COMMON_FUNCTION"].ACTIVE;
            this.typeOfReasonForm.markAsUntouched();
            this.typeOfReasonForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this33 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this type of reason?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this33.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].typeOfReason, _this33.typeOfReason.id).subscribe(function () {
                  _this33.sweetAlertService.customSuccessMessage('Type of reason successfully deleted.');

                  _this33.resetFormValidator();

                  _this33.getList();
                });
              }
            });
          }
        }]);

        return TypeOfReasonComponent;
      }();

      TypeOfReasonComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]
        }];
      };

      TypeOfReasonComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      TypeOfReasonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-reason',
        template: _raw_loader_type_of_reason_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TypeOfReasonComponent);
      /***/
    },

    /***/
    "nw/W":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/category/category.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function nwW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "px5W":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/product/product.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ProductModule */

    /***/
    function px5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
        return ProductModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-routing.module */
      "BovY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./product.component */
      "y6m7");

      var ProductModule = /*#__PURE__*/_createClass(function ProductModule() {
        _classCallCheck(this, ProductModule);
      });

      ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
      })], ProductModule);
      /***/
    },

    /***/
    "tlev":
    /*!***************************************************************!*\
      !*** ./src/app/modules/pages/accounting/accounting.module.ts ***!
      \***************************************************************/

    /*! exports provided: AccountingModule */

    /***/
    function tlev(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountingModule", function () {
        return AccountingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _accounting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accounting-routing.module */
      "Ql1/");

      var AccountingModule = /*#__PURE__*/_createClass(function AccountingModule() {
        _classCallCheck(this, AccountingModule);
      });

      AccountingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _accounting_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountingRoutingModule"]]
      })], AccountingModule);
      /***/
    },

    /***/
    "uDXb":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-reason/type-of-reason.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uDXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>event_note</mat-icon> Type of Reason\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"typeOfReasonForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n          <mat-label>Reason:<span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"typeOfReason.reason\" name=\"reason\" formControlName=\"reason\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfReason.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"typeOfReason.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"typeOfReason\" [childForm]=\"typeOfReasonForm\" (saveFunction)=\"save()\"\r\n      (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n      <br>\r\n      <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n        (selectInListFunction)=\"getTypeOfReason()\"></app-form-list>\r\n  </div>\r\n</form>";
      /***/
    },

    /***/
    "wqAU":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/account/user-role/user-role.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wqAU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 title\">\r\n          <mat-label>\r\n            <mat-icon>settings_accessibility</mat-icon> User Role\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n\r\n      <form [formGroup]=\"userRoleForm\">\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n            <!-- <mat-label>User Role: <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"userRole.name\" name=\"name\" formControlName=\"name\"> -->\r\n            <mat-label>User Role</mat-label>\r\n            <mat-select [(ngModel)]=\"userRole.name\" name=\"name\" formControlName=\"name\">\r\n              <mat-option *ngFor=\"let i of roleList\" [value]=\"i.role\">\r\n                {{ i?.role?.replaceAll('_', (' '))?.replace('ENCODER', 'EVALUATOR') }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"userRole.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i.status}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"save()\" *ngIf=\"!name?.id\" [disabled]=\"!(userRoleForm.valid)\">\r\n            <mat-icon>save</mat-icon> SAVE\r\n          </button> -->\r\n          <button mat-raised-button color=\"primary\" (click)=\"update()\" *ngIf=\"userRole?.id\" [disabled]=\"!(userRoleForm.valid)\">\r\n            <mat-icon>task_alt </mat-icon> UPDATE\r\n          </button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"resetFormValidator()\" *ngIf=\"userRole?.id || userRole?.name\">\r\n            <mat-icon>{{ userRole?.id ? 'cancel' : 'refresh' }}</mat-icon> {{ userRole?.id ? 'CANCEL' : 'RESET' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> User Role </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"getUserRole(element?.name)\"> {{ element?.name?.replaceAll('_', ' ')?.replace('ENCODER', 'EVALUATOR') }} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"getUserRole(element?.name)\">\r\n              <span *ngIf=\"element?.status == 'ACTIVE'\" class=\"badge rounded-pill bg-success\">{{ element?.status }}</span>\r\n              <span *ngIf=\"element?.status != 'ACTIVE'\" class=\"badge rounded-pill bg-danger\">{{ element?.status }}</span>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n          No record found.\r\n        </div>\r\n        <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n";
      /***/
    },

    /***/
    "xKaw":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/list-payment/list-payment-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ListPaymentRoutingModule */

    /***/
    function xKaw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPaymentRoutingModule", function () {
        return ListPaymentRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-payment.component */
      "5iOt");

      var routes = [{
        path: '',
        component: _list_payment_component__WEBPACK_IMPORTED_MODULE_3__["ListPaymentComponent"]
      }];

      var ListPaymentRoutingModule = /*#__PURE__*/_createClass(function ListPaymentRoutingModule() {
        _classCallCheck(this, ListPaymentRoutingModule);
      });

      ListPaymentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListPaymentRoutingModule);
      /***/
    },

    /***/
    "xava":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/brands/brands-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: BrandsRoutingModule */

    /***/
    function xava(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandsRoutingModule", function () {
        return BrandsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brands.component */
      "vcPs");

      var routes = [{
        path: '',
        component: _brands_component__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"]
      }];

      var BrandsRoutingModule = /*#__PURE__*/_createClass(function BrandsRoutingModule() {
        _classCallCheck(this, BrandsRoutingModule);
      });

      BrandsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BrandsRoutingModule);
      /***/
    },

    /***/
    "za27":
    /*!*********************************************!*\
      !*** ./src/app/core/models/report.model.ts ***!
      \*********************************************/

    /*! exports provided: Report */

    /***/
    function za27(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Report", function () {
        return Report;
      });

      var Report = /*#__PURE__*/_createClass(function Report() {
        _classCallCheck(this, Report);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map