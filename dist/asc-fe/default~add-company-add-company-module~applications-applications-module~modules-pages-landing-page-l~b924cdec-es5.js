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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"], {
    /***/
    "9hFf":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/pages/company/add-company/add-company.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AddCompanyComponent */

    /***/
    function hFf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
        return AddCompanyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_company_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-company.component.html */
      "KUbu");
      /* harmony import */


      var _add_company_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-company.component.scss */
      "FSLD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _core_services_address_address_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../core/services/address/address.service */
      "n4+4");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");

      var AddCompanyComponent = /*#__PURE__*/function () {
        function AddCompanyComponent(apiService, addressService, formBuilder, dataStorage, sweetAlertService, validateFieldService, route, router, matDialog, dialogRef, data) {
          var _this$statusList;

          _classCallCheck(this, AddCompanyComponent);

          this.apiService = apiService;
          this.addressService = addressService;
          this.formBuilder = formBuilder;
          this.dataStorage = dataStorage;
          this.sweetAlertService = sweetAlertService;
          this.validateFieldService = validateFieldService;
          this.route = route;
          this.router = router;
          this.matDialog = matDialog;
          this.dialogRef = dialogRef;
          this.data = data;
          this.displayedColumns = ['companyName', 'companyTelephoneNo', 'companyFaxNo', 'companyTin', 'address'];
          this.countryList = [];
          this.companyList = [];
          this.affiliationList = [];
          this.regionsList = [];
          this.provinceList = [];
          this.cityMunicipalityList = [];
          this.barangayList = [];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]);
          this.yesNoList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_4__["YES_NO_OPTION"]);
          this.company = new _models__WEBPACK_IMPORTED_MODULE_5__["Company"]();
          this.todayDate = new Date();
          this.notForeignAddress = true;
          this.isFromModal = false;
          this.isUserRegistration = false;
          this.showApproveRejectButton = false;

          if (data) {
            if (data.dataForModal) {
              var dataFromModal = data.dataForModal;
              this.isFromModal = dataFromModal.isFromModal;
              this.showApproveRejectButton = dataFromModal.isUpdate;

              if (dataFromModal.isUpdate) {
                this.company = dataFromModal.company;
              } else {
                this.company.country = dataFromModal.country;
              }
            }

            this.isUserRegistration = data.isUserRegistration;
          }

          var additionalStatus = [{
            status: 'APPROVED'
          }, {
            status: 'DISAPPROVED'
          }, {
            status: 'FOR_APPROVAL'
          }];

          (_this$statusList = this.statusList).push.apply(_this$statusList, additionalStatus);
        }

        _createClass(AddCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.dataStorage.getUserAccount();
            this.setFormValidator();
            this.getCountries();
            this.getAffiliationList();
            this.id = Number(this.route.snapshot.paramMap.get('id'));

            if (this.id !== 0) {
              this.viewApplication();
            }
          }
        }, {
          key: "viewApplication",
          value: function viewApplication() {
            var _this = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].company, this.id).subscribe(function (res) {
              _this.company = res.responseData.data;

              _this.getAffiliationList();
            });
          }
        }, {
          key: "getCountries",
          value: function getCountries() {
            var _this2 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].countries).subscribe(function (res) {
              _this2.countryList = res.responseData.data;
            });
          }
        }, {
          key: "getAffiliationList",
          value: function getAffiliationList() {
            var _this3 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].activeMembersAffiliation).subscribe(function (res) {
              _this3.affiliationList = res.responseData.data;
            });
          }
        }, {
          key: "save",
          value: function save(endpoint) {
            var _this4 = this;

            if (!endpoint) {
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].company;
            }

            if (this.currentUser && (this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"].ROLE_ADMIN || this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"].ROLE_SUPER_ADMIN)) {
              this.company.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            } else {
              this.company.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].FOR_APPROVAL;
            } // if(this.notForeignAddress){
            //   this.company.country = 'PHIL'
            // }


            if (this.isFromModal) {
              this.company.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].FOR_APPROVAL;
            }

            this.company.delinquent = this.setDelinquent(this.company.delinquent);
            this.apiService.save(endpoint, this.company).subscribe(function (res) {
              if (res !== undefined) {
                _this4.id = res.responseData.data.id;
                _this4.company = res.responseData.data;

                _this4.sweetAlertService.customSuccessMessage('Company successfully saved.');

                if (_this4.isFromModal) {
                  _this4.dialogRef.close(_this4.company);
                }

                if (_this4.isUserRegistration) {
                  _this4.dialogRef.close(_this4.company);
                }
              }
            }, function (err) {
              _this4.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              // this.resetFormValidator();
              if (!_this4.isFromModal && !_this4.isUserRegistration) {
                _this4.router.navigate(['asc/page/company/update/', _this4.id]);
              }
            });
          }
        }, {
          key: "getCompany",
          value: function getCompany(id) {
            var _this5 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].company, id).subscribe(function (res) {
              if (res) {
                _this5.company = res.responseData.data; // this.addressService.getBarangay(res.responseData.data.barangayId).subscribe(
                //   (res: any) => {
                // this.company.region = res.responseData.data.cityMunicipalityDto.provinceDto.regionDto.regionId;
                // this.company.province = res.responseData.data.cityMunicipalityDto.provinceDto.provinceId;
                // this.company.cityMunicipality = res.responseData.data.cityMunicipalityDto.cityMunicipalityId;
                // this.company.barangay = res.responseData.data.barangayId;
                // this.getProvinces();
                // this.getCityMunicipalities();
                // this.getBarangays();
                // });
              }
            });
          }
        }, {
          key: "update",
          value: function update(endpoint) {
            var _this6 = this;

            if (!endpoint) {
              endpoint = _shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].company;
            }

            this.company.delinquent = this.setDelinquent(this.company.delinquent);

            if (this.company.status === 'APPROVED') {
              this.company.status = 'ACTIVE';
            }

            this.apiService.update(endpoint, this.company).subscribe(function (res) {
              if (res !== undefined) {
                _this6.sweetAlertService.success(res);
              }
            }, function (err) {
              _this6.sweetAlertService.error(err);
            }, function () {
              // actions after subscription
              _this6.cancel();

              if (_this6.isFromModal) {
                _this6.dialogRef.close(_this6.company);
              }
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            // if(this.notForeignAddress){
            //   this.companyForm = this.formBuilder.group({
            //     companyName: ['', Validators.required],
            //     companyTelephoneNo: ['', Validators.required],
            //     companyFaxNo: ['', Validators.required],
            //     membersAffiliation: ['', Validators.required],
            //     companyTin: ['', Validators.required],
            //     // region: ['', Validators.required],
            //     // province: ['', Validators.required],
            //     // cityMunicipality: ['', Validators.required],
            //     // barangay: ['', Validators.required],
            //     completeAddress: ['', Validators.required]
            //   });
            // }else{
            //   this.companyForm = this.formBuilder.group({
            //     companyName: ['', Validators.required],
            //     companyTelephoneNo: ['', Validators.required],
            //     companyFaxNo: ['', Validators.required],
            //     membersAffiliation: ['', Validators.required],
            //     companyTin: ['', Validators.required],
            //     country: ['', Validators.required],
            //     foreignAddress: ['', Validators.required]
            //   });
            // }
            this.companyForm = this.formBuilder.group({
              companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              companyMobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              companyTelephoneNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              companyTelephoneNo2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              // companyFaxNo: ['', Validators.required],
              membersAffiliation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              contactPersonName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              contactPersonEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
              companyTin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              completeAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
              voucherFund: [''],
              status: [''],
              delinquent: ['']
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            if (!this.isFromModal) {
              if (this.company.id) {
                this.router.navigate(['/asc/page/company/lists']);
              } else {
                this.company = new _models__WEBPACK_IMPORTED_MODULE_5__["Company"]();
                this.companyForm.markAsUntouched();
                this.companyForm.markAsPristine();
              }
            }
          } // getRegions() {
          //   this.addressService.getRegions().subscribe(
          //     (res: any) => {
          //       this.regionsList = res;
          //     });
          // }
          // getProvinces() {
          //   this.addressService.getProvinces(this.company.region.regionId).subscribe(
          //     (res: any) => {
          //       this.provinceList = res.responseData.data;
          //     });
          // }
          // getCityMunicipalities() {
          //   this.addressService.getCityMunicipalities(this.company.province.provinceId).subscribe(
          //     (res: any) => {
          //       this.cityMunicipalityList = res.responseData.data;
          //     });
          // }
          // getBarangays() {
          //   this.addressService.getBarangays(this.company.cityMunicipality.cityMunicipalityId).subscribe(
          //     (res: any) => {
          //       this.barangayList = res.responseData.data;
          //     });
          // }

        }, {
          key: "isForeignAddress",
          value: function isForeignAddress() {
            this.notForeignAddress = !this.notForeignAddress; // this.setFormValidator();
          }
        }, {
          key: "compareMembersAffiliation",
          value: function compareMembersAffiliation(value, selected) {
            if (value && selected) {
              return value.description === selected.description;
            }
          }
        }, {
          key: "compareCountry",
          value: function compareCountry(value, selected) {
            if (value && selected) {
              return value.id === selected.id;
            }
          }
        }, {
          key: "compareDelinquent",
          value: function compareDelinquent(value, selected) {
            if (value) {
              return value === (selected ? 'Yes' : 'No');
            }
          }
        }, {
          key: "approve",
          value: function approve() {
            this.company.status = 'APPROVED';
            this.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].approveCompany);
          }
        }, {
          key: "reject",
          value: function reject() {
            this.company.status = 'DISAPPROVED';
            this.update('');
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "setDelinquent",
          value: function setDelinquent(delinquentVal) {
            return delinquentVal === 'Yes' ? true : false;
          }
        }]);

        return AddCompanyComponent;
      }();

      AddCompanyComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _core_services_address_address_service__WEBPACK_IMPORTED_MODULE_13__["AddressService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]
        }, {
          type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_14__["ValidateFieldService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      AddCompanyComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], {
            "static": false
          }]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], {
            "static": false
          }]
        }]
      };
      AddCompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-company',
        template: _raw_loader_add_company_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_company_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddCompanyComponent);
      /***/
    },

    /***/
    "FSLD":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/pages/company/add-company/add-company.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function FSLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvY29tcGFueS9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KUbu":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/company/add-company/add-company.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KUbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>apartment</mat-icon> Company\r\n        </mat-label>\r\n        <button class=\"button-right\" *ngIf=\"!isFromModal && !isUserRegistration\" mat-raised-button color=\"primary\"\r\n          [routerLink]=\"['/asc/page/company/lists']\">\r\n          <mat-icon>list</mat-icon> VIEW COMPANIES\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n\r\n    <form [formGroup]=\"companyForm\">\r\n      <div class=\"row fields\">\r\n        <h4>\r\n          <mat-icon>label_important</mat-icon> Company Information\r\n        </h4>\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col-md-7\" appearance=\"outline\">\r\n            <mat-label>Company Name <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.companyName\" name=\"companyName\" formControlName=\"companyName\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-5\" appearance=\"outline\">\r\n            <mat-label>Member Affiliation <span class=\"required-field\">*</span></mat-label>\r\n            <mat-select [(ngModel)]=\"company.membersAffiliation\" name=\"membersAffiliation\"\r\n              [compareWith]=\"compareMembersAffiliation\" formControlName=\"membersAffiliation\">\r\n              <mat-option *ngFor=\"let i of affiliationList\" [value]=\"i\">\r\n                {{i.description}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-3\" appearance=\"outline\">\r\n            <mat-label>Mobile Number <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.companyMobileNo\" name=\"companyMobileNo\" placeholder=\"09xxxxxxxxx\"\r\n              formControlName=\"companyMobileNo\" (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"11\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-3\" appearance=\"outline\">\r\n            <mat-label>Telephone Number <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.companyTelephoneNo\" name=\"companyTelephoneNo\"\r\n              formControlName=\"companyTelephoneNo\" (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"11\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-3\" appearance=\"outline\">\r\n            <mat-label>Alternate Telephone Number <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.companyTelephoneNo2\" name=\"companyTelephoneNo2\"\r\n              formControlName=\"companyTelephoneNo2\" (keydown)=\"validateFieldService.numbersOnly($event)\" maxlength=\"11\">\r\n          </mat-form-field>\r\n\r\n          <!-- <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Fax Number</mat-label>\r\n            <input matInput [(ngModel)]=\"company.companyFaxNo\" name=\"companyFaxNo\" formControlName=\"companyFaxNo\">\r\n          </mat-form-field> -->\r\n          <mat-form-field class=\"col-md-3\" appearance=\"outline\">\r\n            <mat-label>TIN <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.companyTin\" name=\"companyTin\" formControlName=\"companyTin\"\r\n              (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n          </mat-form-field>\r\n\r\n          <!-- <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Voucher Fund</mat-label>\r\n            <input matInput [(ngModel)]=\"company.voucherFund\" name=\"voucherFund\" formControlName=\"voucherFund\">\r\n          </mat-form-field> -->\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Accounting Representative: <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.contactPersonName\" name=\"contactPersonName\"\r\n              formControlName=\"contactPersonName\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Representative's Email Address: <span class=\"required-field\">*</span></mat-label>\r\n            <input matInput [(ngModel)]=\"company.contactPersonEmail\" type=\"email\" name=\"contactPersonEmail\" email\r\n              formControlName=\"contactPersonEmail\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\"\r\n            *ngIf=\"(currentUser?.userRole?.name==='ROLE_ADMIN'||currentUser?.userRole?.name==='ROLE_SUPER_ADMIN'||currentUser?.userRole?.name==='ROLE_ENCODER') && !isUserRegistration\">\r\n            <mat-label>Delinquent</mat-label>\r\n            <mat-select [(ngModel)]=\"company.delinquent\" name=\"delinquent\" formControlName=\"delinquent\"\r\n              [compareWith]=\"compareDelinquent\">\r\n              <mat-option *ngFor=\"let i of yesNoList\" [value]=\"i\">\r\n                {{ i }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\"\r\n            *ngIf=\"(currentUser?.userRole?.name==='ROLE_ADMIN'||currentUser?.userRole?.name==='ROLE_SUPER_ADMIN'||currentUser?.userRole?.name==='ROLE_ENCODER') && company.id\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"company.status\" name=\"status\" formControlName=\"status\">\r\n              <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                {{i?.status?.replace('_',' ')}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <!-- <div class=\"row\">\r\n\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Member Affiliation</mat-label>\r\n            <mat-select [(ngModel)]=\"company.membersAffiliation\" name=\"membersAffiliation\"\r\n              [compareWith]=\"compareMembersAffiliation\" formControlName=\"membersAffiliation\" matNativeControl required>\r\n              <mat-option *ngFor=\"let i of affiliationList\" [value]=\"i\">\r\n                {{i.description}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div> -->\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row fields\">\r\n        <h4>\r\n          <mat-icon>label_important</mat-icon> Address\r\n        </h4>\r\n\r\n        <!-- <div class=\"row\">\r\n          <mat-slide-toggle color=\"warn\" (click)=\"isForeignAddress()\"><b>Foreign Address?</b></mat-slide-toggle>\r\n        </div><br><br> -->\r\n\r\n\r\n        <!-- <div *ngIf=\"notForeignAddress\"> -->\r\n        <div class=\"row\">\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Country </mat-label>\r\n            <!-- <input matInput readonly [(ngModel)]=\"company.country\" formControlName=\"country\"> -->\r\n            <mat-select [(ngModel)]=\"company.country\" name=\"country\" [compareWith]=\"compareCountry\"\r\n              formControlName=\"country\" matNativeControl required>\r\n              <mat-option *ngFor=\"let i of countryList\" [value]=\"i\">\r\n                {{i.code}} - {{i.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n            <mat-label>Company Address <span class=\"required-field\">*</span></mat-label>\r\n            <textarea matInput [(ngModel)]=\"company.completeAddress\" name=\"completeAddress\"\r\n              formControlName=\"completeAddress\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"row\">\r\n            <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n              <mat-label>Region</mat-label>\r\n              <mat-select [(ngModel)]=\"company.region\" (selectionChange)=\"getProvinces()\" name=\"region\"\r\n                formControlName=\"region\" matNativeControl required>\r\n                <mat-option *ngFor=\"let i of regionsList\" [value]=\"i\">\r\n                  {{i.regionName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n              <mat-label>Province</mat-label>\r\n              <mat-select [(ngModel)]=\"company.province\" (selectionChange)=\"getCityMunicipalities()\"\r\n                [disabled]=\"!company.region\" name=\"province\" formControlName=\"province\" matNativeControl required>\r\n                <mat-option *ngFor=\"let i of provinceList\" [value]=\"i\">\r\n                  {{i.provinceName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n              <mat-label>City/Municipality</mat-label>\r\n              <mat-select [(ngModel)]=\"company.cityMunicipality\" (selectionChange)=\"getBarangays()\"\r\n                [disabled]=\"!company.province\" name=\"cityMunicipality\" formControlName=\"cityMunicipality\"\r\n                matNativeControl required>\r\n                <mat-option *ngFor=\"let i of cityMunicipalityList\" [value]=\"i\">\r\n                  {{i.cityMunicipalityName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n              <mat-label>Barangay</mat-label>\r\n              <mat-select [(ngModel)]=\"company.barangay\" [disabled]=\"!company.cityMunicipality\" name=\"barangay\"\r\n                formControlName=\"barangay\" matNativeControl required>\r\n                <mat-option *ngFor=\"let i of barangayList\" [value]=\"i\">\r\n                  {{i.barangayName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div> -->\r\n        <!-- </div> -->\r\n\r\n        <!-- <div *ngIf=\"!notForeignAddress\">\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Country</mat-label>\r\n              <input matInput [(ngModel)]=\"company.country\" name=\"country\" formControlName=\"country\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-md-8\" appearance=\"outline\">\r\n              <mat-label>Foreign Address</mat-label>\r\n              <input matInput [(ngModel)]=\"company.foreignAddress\" name=\"foreignAddress\"\r\n                formControlName=\"foreignAddress\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div> -->\r\n\r\n      </div>\r\n    </form>\r\n    <hr>\r\n    <br>\r\n\r\n    <div class=\"row\" *ngIf=\"!isFromModal || !showApproveRejectButton\">\r\n      <div class=\"col-md-12\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"save('')\" *ngIf=\"!company?.id\"\r\n          [disabled]=\"!(companyForm.valid)\">\r\n          <mat-icon>save</mat-icon> SAVE\r\n        </button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"update('')\" *ngIf=\"company?.id\"\r\n          [disabled]=\"!(companyForm.valid)\">\r\n          <mat-icon>task_alt </mat-icon> UPDATE\r\n        </button>\r\n        <button mat-raised-button class=\"button-red\" (click)=\"approve()\" *ngIf=\"isFromModal && showApproveRejectButton\">\r\n          <i class=\"material-icons color__white\">verified</i> APPROVE\r\n        </button>\r\n        <button mat-raised-button class=\"button-red\" (click)=\"reject()\" *ngIf=\"isFromModal && showApproveRejectButton\">\r\n          <i class=\"material-icons color__white\">unpublished</i> REJECT\r\n        </button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"cancel()\"\r\n          *ngIf=\"company?.id || company?.companyName || company?.companyTelephoneNo || company?.companyTin\">\r\n          <!-- <button mat-raised-button color=\"warn\" (click)=\"cancel()\"\r\n          *ngIf=\"company?.id || company?.companyName || company?.companyTelephoneNo || company?.companyFaxNo || company?.companyTin\"> -->\r\n          <mat-icon>{{ company?.id ? 'cancel' : 'refresh' }}</mat-icon> {{ company?.id ? 'CANCEL' : 'RESET' }}\r\n        </button>\r\n        <button mat-raised-button class=\"button-red\" (click)=\"closeModal()\" *ngIf=\"isFromModal\">\r\n          <i class=\"material-icons color__white\">close</i> CLOSE\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isFromModal && showApproveRejectButton\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"update('')\" *ngIf=\"company?.id\"\r\n        [disabled]=\"!(companyForm.valid)\">\r\n        <mat-icon>task_alt </mat-icon> UPDATE\r\n      </button>\r\n      <button mat-raised-button class=\"button-red\" (click)=\"approve()\">\r\n        <i class=\"material-icons color__white\">verified</i> APPROVE\r\n      </button>\r\n      <button mat-raised-button class=\"button-red\" (click)=\"reject()\">\r\n        <i class=\"material-icons color__white\">unpublished</i> REJECT\r\n      </button>\r\n      <button mat-raised-button class=\"button-red\" (click)=\"closeModal()\">\r\n        <i class=\"material-icons color__white\">close</i> CLOSE\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "n4+4":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/address/address.service.ts ***!
      \**********************************************************/

    /*! exports provided: AddressService */

    /***/
    function n44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressService", function () {
        return AddressService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var AddressService = /*#__PURE__*/function () {
        function AddressService(http) {
          _classCallCheck(this, AddressService);

          this.http = http;
        }

        _createClass(AddressService, [{
          key: "getRegions",
          value: function getRegions() {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].regions));
          }
        }, {
          key: "getProvinces",
          value: function getProvinces(regionId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].provinces, "/region-id/").concat(regionId));
          }
        }, {
          key: "getCityMunicipalities",
          value: function getCityMunicipalities(provinceId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].cityMunicipalities, "/province-id/").concat(provinceId));
          }
        }, {
          key: "getBarangays",
          value: function getBarangays(cityMunicipalityId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].barangays, "/city-municipality-id/").concat(cityMunicipalityId));
          }
        }, {
          key: "getBarangay",
          value: function getBarangay(barangayId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].barangays, "/barangay-id/").concat(barangayId));
          }
        }]);

        return AddressService;
      }();

      AddressService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AddressService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec-es5.js.map