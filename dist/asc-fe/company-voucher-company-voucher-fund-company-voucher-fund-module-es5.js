(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-voucher-company-voucher-fund-company-voucher-fund-module"], {
    /***/
    "3swC":
    /*!********************************************!*\
      !*** ./src/app/modules/fragments/index.ts ***!
      \********************************************/

    /*! exports provided: FormActionButtonsComponent, FormListComponent */

    /***/
    function swC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function () {
        return _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__["FormActionButtonsComponent"];
      });
      /* harmony import */


      var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./form-list/form-list.component */
      "DeKZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FormListComponent", function () {
        return _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__["FormListComponent"];
      });
      /***/

    },

    /***/
    "8/m5":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund-routing.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: CompanyVoucherFundRoutingModule */

    /***/
    function m5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherFundRoutingModule", function () {
        return CompanyVoucherFundRoutingModule;
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


      var _company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-voucher-fund.component */
      "FBay");

      var routes = [{
        path: '',
        component: _company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherFundComponent"]
      }];

      var CompanyVoucherFundRoutingModule = /*#__PURE__*/_createClass(function CompanyVoucherFundRoutingModule() {
        _classCallCheck(this, CompanyVoucherFundRoutingModule);
      });

      CompanyVoucherFundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompanyVoucherFundRoutingModule);
      /***/
    },

    /***/
    "C+gi":
    /*!************************************************************!*\
      !*** ./src/app/core/models/voucher-replenishment.model.ts ***!
      \************************************************************/

    /*! exports provided: VoucherReplenishment */

    /***/
    function CGi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherReplenishment", function () {
        return VoucherReplenishment;
      });

      var VoucherReplenishment = /*#__PURE__*/_createClass(function VoucherReplenishment() {
        _classCallCheck(this, VoucherReplenishment);
      });
      /***/

    },

    /***/
    "FBay":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: CompanyVoucherFundComponent */

    /***/
    function FBay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherFundComponent", function () {
        return CompanyVoucherFundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_company_voucher_fund_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./company-voucher-fund.component.html */
      "YH1i");
      /* harmony import */


      var _company_voucher_fund_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-voucher-fund.component.scss */
      "keJH");
      /* harmony import */


      var _core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../core/services/data.storage.service */
      "nBem");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_voucher_replenishment_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/core/models/voucher-replenishment.model */
      "C+gi");
      /* harmony import */


      var app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/core/models/voucher.model */
      "Inok");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);

      var CompanyVoucherFundComponent = /*#__PURE__*/function () {
        function CompanyVoucherFundComponent(formBuilder, router, apiService, sweetAlertService, sanitizer, fileStorageService, dataStorage) {
          _classCallCheck(this, CompanyVoucherFundComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.apiService = apiService;
          this.sweetAlertService = sweetAlertService;
          this.sanitizer = sanitizer;
          this.fileStorageService = fileStorageService;
          this.dataStorage = dataStorage;
          this.displayedColumns = ['company', 'fundAmount', 'voucherDate'];
          this.displayedReplenishmentColumns = ['transferedDate', 'amountTransfered', 'status'];
          this.voucherReplenishment = new app_core_models_voucher_replenishment_model__WEBPACK_IMPORTED_MODULE_13__["VoucherReplenishment"]();
          this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__["Voucher"]();
          this.company = new _models__WEBPACK_IMPORTED_MODULE_10__["Company"]();
          this.voucherReplenishmentList = [];
          this.companyList = [];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_12__["STATUSES"]);
          this.currentDate = new Date(); // safeURLVoucherReplenishment: any;

          this.previewDocument = false;
          this.process = 'save';
          this.remainingVoucherBalance = 0;
        }

        _createClass(CompanyVoucherFundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.dataStorage.getUserAccount();
            this.setFormValidator();
            this.getCompanyList();
            this.getVoucherTrasnferList();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.voucherReplenishment.status = _shared__WEBPACK_IMPORTED_MODULE_12__["COMMON_FUNCTION"].ACTIVE;
            this.voucherReplenishmentForm = this.formBuilder.group({
              amountTransfered: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              transferedDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.voucherReplenishment = new app_core_models_voucher_replenishment_model__WEBPACK_IMPORTED_MODULE_13__["VoucherReplenishment"]();
            this.voucherReplenishment.status = _shared__WEBPACK_IMPORTED_MODULE_12__["COMMON_FUNCTION"].ACTIVE;
            this.voucherReplenishmentForm.markAsUntouched();
            this.voucherReplenishmentForm.markAsPristine();
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].company).subscribe(function (res) {
              _this.companyList = res.responseData.data;
            });
          }
        }, {
          key: "getCompanyDetails",
          value: function getCompanyDetails(res) {
            this.company = res;
          }
        }, {
          key: "getVoucherTrasnferDetails",
          value: function getVoucherTrasnferDetails() {
            var _this2 = this;

            this.process = 'update';
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].voucher, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                // this.voucherReplenishment.company = res.responseData.data.company.companyName;
                _this2.company = res.responseData.data.company;
                _this2.voucher.voucherAttachmentReference = res.responseData.data.voucherAttachmentReference;
                _this2.voucherReplenishment.company = _this2.company;
                _this2.remainingVoucherBalance = res.responseData.data.fundAmount; // this.voucherReplenishment.amountTransfered = 0;

                _this2.voucherReplenishment.transferedDate = res.responseData.data.voucherDate;
                _this2.voucherReplenishment.status = res.responseData.data.status;

                _this2.getVoucherTrasnferList();

                _this2.viewAttachmentFile();

                _this2.getCompanyReplenishmentList();

                _this2.previewDocument = true;
              }
            });
          }
        }, {
          key: "viewAttachmentFile",
          value: function viewAttachmentFile() {
            var _this3 = this;

            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].attachmentDocument, "voucher-attachment-reference/" + this.voucher.voucherAttachmentReference).subscribe(function (res1) {
              if (res1) {
                _this3.attachmentDocument = res1.responseData.data;
                _this3.safeURL = _this3.sanitizer.bypassSecurityTrustResourceUrl(_this3.attachmentDocument.fileURL);
              }
            }, function (err) {
              _this3.attachmentDocument = [];
            });
          }
        }, {
          key: "getVoucherTrasnferList",
          value: function getVoucherTrasnferList() {
            var _this4 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].voucher).subscribe(function (res) {
              _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.responseData.data);
              _this4.dataSource.paginator = _this4.formListComponent.paginator;
              _this4.dataSource.sort = _this4.formListComponent.sort;
            });
          }
        }, {
          key: "getCompanyReplenishmentList",
          value: function getCompanyReplenishmentList() {
            var _this5 = this;

            var _a;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].voucherReplenishmentsByCompany + ((_a = this.company) === null || _a === void 0 ? void 0 : _a.id)).subscribe(function (res) {
              _this5.dataSourceReplenishments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.responseData.data);
              _this5.dataSourceReplenishments.paginator = _this5.formListComponent.paginator;
              _this5.dataSourceReplenishments.sort = _this5.formListComponent.sort;
            });
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            var attachmentSize = event.target.files[0].size;

            if (event.target.files[0].type === 'application/pdf') {
              if (attachmentSize > 15000000) {
                // 1MB = 1M
                this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB.");
                event.target.value = '';
                return;
              } else {
                var pdfURL = URL.createObjectURL(event.target.files[0]);
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
                this.previewDocument = true;
                var reader = new FileReader();

                var _event$target$files = _slicedToArray(event.target.files, 1),
                    file = _event$target$files[0];

                reader.readAsDataURL(file);

                reader.onload = function () {};
              }

              this.selectedFiles = event.target.files;
            } else {
              this.sweetAlertService.customErrorMessage('Attachment should be in PDF format only.');
              event.target.value = '';
              return;
            }
          }
        }, {
          key: "uploadVoucher",
          value: function uploadVoucher() {
            var _this6 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
              text: 'Are you sure you want to submit this VOUCHER?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                if (_this6.process === 'update') {
                  _this6.saveVoucherReplenishment();
                } else {
                  _this6.dataStorage.setDisplayProgressbar(true);

                  var params = '';
                  params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_12__["ATTACHMENT_TYPE"].VOUCHER_FUND + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_12__["SUBMISSION_TYPE"].ORIGINAL;

                  _this6.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].attachmentDocument, _this6.selectedFiles.item(0), params).subscribe(function (res) {
                    var obj = res.responseData.data;
                    _this6.voucherReplenishment.voucherAttachmentReference = obj.voucherAttachmentReference;
                    _this6.voucherReplenishment.company = _this6.company; // this.voucher.voucherSignatories = this.signatoriesList;

                    console.log('VOUCHER REPLENISHMENT', _this6.voucherReplenishment);

                    _this6.saveVoucherReplenishment();

                    _this6.selectedFiles = undefined;
                  }, function (err) {
                    _this6.sweetAlertService.error(err);
                  }, function () {
                    _this6.dataStorage.setDisplayProgressbar(false);
                  });
                }
              }
            });
          }
        }, {
          key: "saveVoucherReplenishment",
          value: function saveVoucherReplenishment() {
            var _this7 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].accountingVoucherFundTransfer, this.voucherReplenishment).subscribe(function (res) {
              console.log(res);

              _this7.sweetAlertService.success(res);

              _this7.setFormValidator();

              _this7.getVoucherTrasnferList();

              _this7.resetFormValidator();

              _this7.process = 'save';
              _this7.previewDocument = false;
              _this7.attachment = null;

              _this7.router.navigateByUrl('asc/page/accounting/voucher-replenishment');
            }, function (err) {
              console.log(err);

              _this7.sweetAlertService.error(err);
            });
          }
        }, {
          key: "compareStatus",
          value: function compareStatus(value, selected) {
            if (value && selected) {
              return value === selected;
            }
          }
        }]);

        return CompanyVoucherFundComponent;
      }();

      CompanyVoucherFundComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_11__["SweetAlertService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"]
        }, {
          type: _core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
        }];
      };

      CompanyVoucherFundComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_9__["FormListComponent"]]
        }],
        safeURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      CompanyVoucherFundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-company-voucher-fund',
        template: _raw_loader_company_voucher_fund_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_voucher_fund_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CompanyVoucherFundComponent);
      /***/
    },

    /***/
    "O0vE":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund.module.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CompanyVoucherFundModule */

    /***/
    function O0vE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherFundModule", function () {
        return CompanyVoucherFundModule;
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


      var _company_voucher_fund_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-voucher-fund-routing.module */
      "8/m5");
      /* harmony import */


      var _company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./company-voucher-fund.component */
      "FBay");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");

      var CompanyVoucherFundModule = /*#__PURE__*/_createClass(function CompanyVoucherFundModule() {
        _classCallCheck(this, CompanyVoucherFundModule);
      });

      CompanyVoucherFundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_voucher_fund_component__WEBPACK_IMPORTED_MODULE_4__["CompanyVoucherFundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_voucher_fund_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherFundRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], CompanyVoucherFundModule);
      /***/
    },

    /***/
    "YH1i":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YH1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>view_list</mat-icon> Voucher Replenishment\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"col-md-12\">\r\n      <b><b class=\"material-icons\">error_outline</b> Note: Select enrolled voucher to add fund or view amount replenishments made.</b>\r\n    </div>\r\n    <br>\r\n\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n    (selectInListFunction)=\"getVoucherTrasnferDetails()\"></app-form-list>\r\n    <br>\r\n\r\n    <div class=\"container-fluid\"\r\n      *ngIf=\"currentUser?.userRole.name === 'ROLE_APPLICANT' || currentUser?.userRole.name === 'ROLE_ACCOUNTING' && previewDocument===true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 information-title\">\r\n          <mat-label>\r\n            Company Information\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <br>\r\n\r\n      <div class=\"row col-md-12\">\r\n\r\n        <div class=\"row col-md-5\">\r\n          <div>\r\n            <mat-label>Voucher: &nbsp;&nbsp;&nbsp;<span>PDF file only!</span></mat-label><br>\r\n            <input class=\"file-upload\" type=\"file\" [(ngModel)]=\"attachment\" [ngModelOptions]=\"{standalone: true}\"\r\n              accept=\".pdf\" (change)=\"selectFile($event)\">\r\n          </div>\r\n\r\n          <div *ngIf=\"attachment\">\r\n            <div class=\"file-upload\">\r\n              <object [data]=\"safeURL\" type=\"application/pdf\" width=\"100%\" height=\"500\">\r\n                <iframe [src]=\"safeURL\" width=\"100%\" height=\"500\">\r\n                  <p>This browser does not support PDF!</p>\r\n                </iframe>\r\n              </object>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-md-7\">\r\n          <form [formGroup]=\"voucherReplenishmentForm\">\r\n            <div class=\"row\">\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='save'\">\r\n                <mat-label> Company Name\r\n                </mat-label>\r\n                <mat-select [(ngModel)]=\"voucherReplenishment.company\" name=\"company\" formControlName=\"company\">\r\n                  <mat-option *ngFor=\"let i of companyList\" [value]=\"i\" (click)=\"getCompanyDetails(i)\">\r\n                    {{i.companyName}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n                <mat-label>Company Name</mat-label>\r\n                <input matInput [value]=\"company.companyName\" readonly>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n                <mat-label>Remaining Voucher Balance </mat-label>\r\n                <input matInput [value]=\"remainingVoucherBalance\" name=\"remainingVoucherBalance\"\r\n                  formControlName=\"remainingVoucherBalance\" type=\"number\" readonly>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Amount Transferred <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucherReplenishment.amountTransfered\" name=\"amountTransfered\"\r\n                  formControlName=\"amountTransfered\" type=\"number\">\r\n              </mat-form-field>\r\n\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Transferred Date</mat-label>\r\n                <input matInput placeholder=\"Date\" [matDatepicker]=\"transferedDate\" readonly\r\n                  [(ngModel)]=\"voucherReplenishment.transferedDate\" name=\"transferedDate\" formControlName=\"transferedDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"transferedDate\"></mat-datepicker-toggle>\r\n                <mat-datepicker color=\"warn\" #transferedDate disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field> -->\r\n\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Status</mat-label>\r\n                <mat-select [(ngModel)]=\"voucherReplenishment.status\" name=\"status\" formControlName=\"status\" [compareWith]=\"compareStatus\">\r\n                  <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                    {{i.status}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"voucherReplenishment.company\">\r\n                <mat-label>Company TelephoneNo</mat-label>\r\n                <input matInput [value]=\"company.companyTelephoneNo\" readonly>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"voucherReplenishment.company\">\r\n                <mat-label>Company Tin </mat-label>\r\n                <input matInput [value]=\"company.companyTin\" readonly>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"voucherReplenishment.company\">\r\n                <mat-label>Company Address</mat-label>\r\n                <input matInput [value]=\"company.completeAddress\" readonly>\r\n              </mat-form-field> -->\r\n\r\n            </div>\r\n          </form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\"></div>\r\n            <div class=\"col-md-2\">\r\n              <button mat-raised-button class=\"button-red\" (click)=\"uploadVoucher()\" [disabled]=\"!attachment || !voucherReplenishment?.amountTransfered\">\r\n                <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <hr>\r\n          <br>\r\n          <app-form-list [dataSource]=\"dataSourceReplenishments\" [displayedColumns]=\"displayedReplenishmentColumns\"></app-form-list>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-10\"></div>\r\n        <div class=\"col-md-2\">\r\n          <button mat-raised-button class=\"button-red\" (click)=\"uploadAttachment()\" *ngIf=\"process==='save'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n          </button>\r\n          <button mat-raised-button class=\"button-red\" (click)=\"approveVoucher()\" *ngIf=\"process==='update'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> APPROVE\r\n          </button>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "keJH":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-fund/company-voucher-fund.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function keJH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button-green {\n  background-color: green;\n  color: white;\n}\n\n.information-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2NvbXBhbnktdm91Y2hlci9jb21wYW55LXZvdWNoZXItZnVuZC9jb21wYW55LXZvdWNoZXItZnVuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9jb21wYW55LXZvdWNoZXIvY29tcGFueS12b3VjaGVyLWZ1bmQvY29tcGFueS12b3VjaGVyLWZ1bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=company-voucher-company-voucher-fund-company-voucher-fund-module-es5.js.map