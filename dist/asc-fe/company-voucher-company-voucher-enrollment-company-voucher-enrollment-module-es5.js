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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-voucher-company-voucher-enrollment-company-voucher-enrollment-module"], {
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
    "Imlt":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Imlt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>view_list</mat-icon> Company Voucher Enrollment\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getVoucherDetails()\"></app-form-list>\r\n    <br>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 information-title\">\r\n          <mat-label>\r\n            Company Information\r\n          </mat-label>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <br>\r\n      <div class=\"row col-md-12\">\r\n        <div class=\"row col-md-5\">\r\n          <div *ngIf=\"process==='save'\">\r\n            <mat-label>Voucher: &nbsp;&nbsp;&nbsp;<span>PDF file only!</span></mat-label><br>\r\n            <input class=\"file-upload\" type=\"file\" [(ngModel)]=\"attachment\" [ngModelOptions]=\"{standalone: true}\"\r\n              accept=\".pdf\" (change)=\"selectFile($event)\">\r\n          </div>\r\n          <div *ngIf=\"previewDocument===true\">\r\n            <div class=\"file-upload\">\r\n              <object [data]=\"safeURL\" type=\"application/pdf\" width=\"100%\" height=\"500\">\r\n                <iframe [src]=\"safeURL\" width=\"100%\" height=\"500\">\r\n                  <p>This browser does not support PDF!</p>\r\n                </iframe>\r\n              </object>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-7\">\r\n          <form [formGroup]=\"voucherForm\">\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" [hidden]=\"process === 'update'\">\r\n                <mat-label> Company Name\r\n                </mat-label>\r\n                <mat-select [(ngModel)]=\"voucher.company\" name=\"company\" formControlName=\"company\">\r\n                  <mat-option *ngFor=\"let i of companyList\" [value]=\"i\" (click)=\"getCompanyDetails(i)\">\r\n                    {{i.companyName}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"voucher.company && process === 'update'\">\r\n                <mat-label>Company Name</mat-label>\r\n                <input matInput [value]=\"company.companyName\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"voucher.company\">\r\n                <mat-label>Company TelephoneNo</mat-label>\r\n                <input matInput [value]=\"company.companyTelephoneNo\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\" *ngIf=\"voucher.company\">\r\n                <mat-label>Company Tin </mat-label>\r\n                <input matInput [value]=\"company.companyTin\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"voucher.company\">\r\n                <mat-label>Company Address</mat-label>\r\n                <input matInput [value]=\"company.completeAddress\" readonly>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Fund Amount <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucher.fundAmount\" name=\"fundAmount\" formControlName=\"fundAmount\"\r\n                  type=\"number\" [readonly]=\"process === 'update'\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Voucher Date</mat-label>\r\n                <input matInput placeholder=\"Date\" [matDatepicker]=\"voucherDate\" readonly\r\n                  [(ngModel)]=\"voucher.voucherDate\" name=\"voucherDate\" formControlName=\"voucherDate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"voucherDate\" [hidden]=\"process === 'update'\"></mat-datepicker-toggle>\r\n                <mat-datepicker color=\"warn\" #voucherDate disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <!-- <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Status</mat-label>\r\n                <mat-select [(ngModel)]=\"voucher.status\" name=\"status\" formControlName=\"status\" [disabled]=\"process === 'update'\">\r\n                  <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                    {{i.status}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n            </div>\r\n          </form>\r\n          <div class=\"row col-md-12\">\r\n          <form [formGroup]=\"voucherSignatoriesForm\">\r\n            <div class=\"row\">\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Voucher Signatories Name <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucherSignatories.name\" name=\"voucherSignatoriesName\"\r\n                  formControlName=\"voucherSignatoriesName\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                <mat-label>Voucher Signatories Position <span class=\"required-field\">*</span></mat-label>\r\n                <input matInput [(ngModel)]=\"voucherSignatories.position\" name=\"voucherSignatoriesPosition\"\r\n                  formControlName=\"voucherSignatoriesPosition\">\r\n              </mat-form-field>\r\n            </div>\r\n          </form>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\"></div>\r\n            <div class=\"col-md-3\">\r\n              <button mat-raised-button class=\"button-red\" (click)=\"setSignatoriesList(voucherSignatories)\"\r\n                [disabled]=\"voucherSignatoriesForm.controls['voucherSignatoriesPosition']?.errors?.required || voucherSignatoriesForm.controls['voucherSignatoriesName']?.errors?.required\">\r\n                <i class=\"material-icons color__white\">task_alt</i> Add Signatory\r\n              </button>\r\n              <br> <br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <app-form-list [dataSource]=\"dataSourceSignatories\" [displayedColumns]=\"displayedColumnsSignatories\" (deleteInListFunction)=\"onDeleteSignatory($event)\" (updateListFunction)=\"onUpdateSignatory($event)\"></app-form-list>\r\n            <!-- <app-form-action-buttons [childObject]=\"voucher\" [childForm]=\"voucherForm\" (saveFunction)=\"uploadVoucher()\"\r\n            (updateFunction)=\"saveVoucher()\"  (cancelFunction)=\"resetFormValidatorVoucher()\"></app-form-action-buttons>\r\n            <br> -->\r\n          <div class=\"row\" >\r\n            <div class=\"col-md-6\"></div>\r\n            <div class=\"col-md-3\">\r\n              <br>\r\n              <button mat-raised-button class=\"button-red\" (click)=\"uploadVoucher()\" [hidden]=\"process === 'update' \"\r\n              [disabled]=\"voucherForm.invalid || signatoriesList?.length === 0 || !attachment\">\r\n                <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <br>\r\n              <button mat-raised-button class=\"button-red\" (click)=\"reset()\" >\r\n                <i class=\"material-icons color__white\">task_alt</i> RESET\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "VPUY":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/voucher-signatories.model.ts ***!
      \**********************************************************/

    /*! exports provided: VoucherSignatories */

    /***/
    function VPUY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherSignatories", function () {
        return VoucherSignatories;
      });

      var VoucherSignatories = /*#__PURE__*/_createClass(function VoucherSignatories() {
        _classCallCheck(this, VoucherSignatories);
      });
      /***/

    },

    /***/
    "h435":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.scss ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h435(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button-green {\n  background-color: green;\n  color: white;\n}\n\n.information-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2NvbXBhbnktdm91Y2hlci9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9jb21wYW55LXZvdWNoZXIvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "m47g":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: CompanyVoucherEnrollmentComponent */

    /***/
    function m47g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentComponent", function () {
        return CompanyVoucherEnrollmentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_company_voucher_enrollment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./company-voucher-enrollment.component.html */
      "Imlt");
      /* harmony import */


      var _company_voucher_enrollment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-voucher-enrollment.component.scss */
      "h435");
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/models/payment-method.model */
      "piSE");
      /* harmony import */


      var app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/core/models/voucher-signatories.model */
      "VPUY");
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

      var CompanyVoucherEnrollmentComponent = /*#__PURE__*/function () {
        function CompanyVoucherEnrollmentComponent(apiService, formBuilder, sanitizer, dataStorage, fileStorageService, sweetAlertService, router) {
          _classCallCheck(this, CompanyVoucherEnrollmentComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sanitizer = sanitizer;
          this.dataStorage = dataStorage;
          this.fileStorageService = fileStorageService;
          this.sweetAlertService = sweetAlertService;
          this.router = router;
          this.displayedColumns = ['company', 'fundAmount', 'voucherDate'];
          this.displayedColumnsSignatories = ['name', 'position', 'voucherActionItems'];
          this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__["Voucher"]();
          this.company = new _models__WEBPACK_IMPORTED_MODULE_9__["Company"]();
          this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_13__["VoucherSignatories"]();
          this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_12__["PaymentMethod"]();
          this.voucherList = [];
          this.companyList = [];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_11__["STATUSES"]);
          this.signatoriesList = []; // safeURLVoucherEnrollment: any;

          this.process = 'save';
          this.previewDocument = false;
          this.currentDate = new Date();

          this.disabledWeekEnds = function (d) {
            var day = (d || new Date()).getDay();
            return day !== 0 && day !== 6;
          };
        }

        _createClass(CompanyVoucherEnrollmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormValidator();
            this.setSignatoriesForm();
            this.getVoucherList();
            this.getCompanyList();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_11__["COMMON_FUNCTION"].ACTIVE;
            this.voucherForm = this.formBuilder.group({
              company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              fundAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              voucherDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "setSignatoriesForm",
          value: function setSignatoriesForm() {
            this.voucherSignatoriesForm = this.formBuilder.group({
              voucherSignatoriesName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              voucherSignatoriesPosition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "resetsetSignatoriesForm",
          value: function resetsetSignatoriesForm() {
            this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_11__["COMMON_FUNCTION"].ACTIVE;
            this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_13__["VoucherSignatories"]();
            this.voucherSignatoriesForm.markAsUntouched();
            this.voucherSignatoriesForm.markAsPristine();
          }
        }, {
          key: "resetFormValidatorVoucher",
          value: function resetFormValidatorVoucher() {
            this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_11__["COMMON_FUNCTION"].ACTIVE;
            this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_14__["Voucher"]();
            this.attachment = null;
            this.voucherForm.markAsUntouched();
            this.voucherForm.markAsPristine();
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
            var _this = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
              text: 'Are you sure you want to submit this VOUCHER?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this.dataStorage.setDisplayProgressbar(true);

                var params = '';
                params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_11__["ATTACHMENT_TYPE"].VOUCHER_FUND + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_11__["SUBMISSION_TYPE"].ORIGINAL;

                _this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, _this.selectedFiles.item(0), params).subscribe(function (res) {
                  var obj = res.responseData.data; // console.log('UPLOADED', obj);

                  _this.voucher.voucherAttachmentReference = obj.voucherAttachmentReference;
                  _this.voucher.company = _this.company;
                  _this.voucher.voucherSignatories = _this.signatoriesList; // console.log('VOUCHER', this.voucher);

                  _this.saveVoucher();

                  _this.selectedFiles = undefined;
                }, function (err) {
                  _this.sweetAlertService.error(err);
                }, function () {
                  _this.dataStorage.setDisplayProgressbar(false);
                });
              }
            });
          }
        }, {
          key: "viewAttachmentFile",
          value: function viewAttachmentFile() {
            var _this2 = this;

            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, "voucher-attachment-reference/" + this.voucher.voucherAttachmentReference).subscribe(function (res1) {
              if (res1) {
                _this2.previewDocument = true;
                _this2.attachmentDocuments = res1.responseData.data;
                _this2.safeURL = _this2.sanitizer.bypassSecurityTrustResourceUrl(_this2.attachmentDocuments.fileURL); // console.log('view attachmentDocument: ', this.attachmentDocuments);
              }
            }, function (err) {
              _this2.attachmentDocuments = [];
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.process = 'save';
            this.resetFormValidatorVoucher();
            this.resetsetSignatoriesForm();
            this.attachmentDocuments = [];
            this.previewDocument = false;
            this.dataSourceSignatories = null;
            this.signatoriesList = [];
          }
        }, {
          key: "saveVoucher",
          value: function saveVoucher() {
            var _this3 = this;

            // console.log('SAVE ::: ', this.voucher);
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherFundEnrollment, this.voucher).subscribe(function (res) {
              // console.log('SAVED ::::: > ', res);
              _this3.sweetAlertService.success(res);

              _this3.setFormValidator();

              _this3.getVoucherList();

              _this3.router.navigateByUrl('asc/page/accounting/voucher-enrollment');

              _this3.reset();
            }, function (err) {
              // console.log(err);
              _this3.sweetAlertService.error(err);
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this4 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].company).subscribe(function (res) {
              _this4.companyList = res.responseData.data;
            });
          }
        }, {
          key: "getCompanyDetails",
          value: function getCompanyDetails(res) {
            this.company = res;
          }
        }, {
          key: "getVoucherDetails",
          value: function getVoucherDetails() {
            var _this5 = this;

            this.process = 'update'; // console.log('+++', this.voucher);

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucher, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                // console.log(res.responseData.data);
                _this5.voucher = res.responseData.data;
                _this5.signatoriesList = _this5.voucher.voucherSignatories;
                _this5.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this5.signatoriesList);
                _this5.dataSourceSignatories.paginator = _this5.formListComponent.paginator;
                _this5.dataSourceSignatories.sort = _this5.formListComponent.sort;

                _this5.getCompanyDetails(_this5.voucher.company);

                _this5.viewAttachmentFile();
              }
            });
          }
        }, {
          key: "onUpdateSignatory",
          value: function onUpdateSignatory(signatory) {
            var _this6 = this;

            if (signatory.id && this.process === 'update' && this.voucher.id) {
              var data = {
                id: signatory.id,
                name: signatory.name,
                position: signatory.position,
                voucherId: this.voucher.id
              };
              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherSignatories, data).subscribe(function (result) {
                _this6.signatoriesList.splice(_this6.signatoriesList.findIndex(function (r) {
                  return r.id === signatory.id;
                }), 1, result.responseData.data);

                _this6.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this6.signatoriesList);
                _this6.dataSourceSignatories.paginator = _this6.formListComponent.paginator;
              });
            } else {
              this.signatoriesList = signatory;
              this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
              this.dataSourceSignatories.paginator = this.formListComponent.paginator;
            }
          }
        }, {
          key: "onDeleteSignatory",
          value: function onDeleteSignatory(signatory) {
            var _this7 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
              text: 'Are you sure you want to delete this SIGNATORY?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this7.signatoriesList = _this7.signatoriesList.filter(function (s) {
                  return s !== signatory;
                });
                _this7.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this7.signatoriesList);

                if (_this7.process === 'update' && signatory.id && _this7.voucher.id) {
                  _this7.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherSignatories, signatory.id).subscribe(function (res) {
                    _this7.signatoriesList.splice(_this7.signatoriesList.findIndex(function (r) {
                      return r.id === signatory.id;
                    }), 1);

                    _this7.dataSourceSignatories.paginator = _this7.formListComponent.paginator;
                  });
                }
              }
            });
          }
        }, {
          key: "setSignatoriesList",
          value: function setSignatoriesList(res) {
            var _this8 = this;

            this.signatoriesList.push(res);
            this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.signatoriesList);
            this.dataSourceSignatories.paginator = this.formListComponent.paginator;
            this.dataSourceSignatories.sort = this.formListComponent.sort;

            if (this.process === 'update' && this.voucher.id) {
              var data = {
                name: res.name,
                position: res.position,
                voucherId: this.voucher.id
              };
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherSignatories, data).subscribe(function (res) {
                _this8.dataSourceSignatories.paginator = _this8.formListComponent.paginator;
              });
            } // this.resetForm === 'voucher_signatories';


            this.resetsetSignatoriesForm();
          }
        }, {
          key: "getVoucherList",
          value: function getVoucherList() {
            var _this9 = this;

            this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].voucherMonitoring, "?page=1&size=30")).subscribe(function (res) {
              // console.log(res.data);
              _this9.voucherList = res.data;
              _this9.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.data);
              _this9.dataSource.paginator = _this9.formListComponent.paginator;
              _this9.dataSource.sort = _this9.formListComponent.sort;
            });
          }
        }]);

        return CompanyVoucherEnrollmentComponent;
      }();

      CompanyVoucherEnrollmentComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"]
        }, {
          type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      CompanyVoucherEnrollmentComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_8__["FormListComponent"]]
        }],
        safeURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CompanyVoucherEnrollmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company-voucher-enrollment',
        template: _raw_loader_company_voucher_enrollment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_voucher_enrollment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CompanyVoucherEnrollmentComponent);
      /***/
    },

    /***/
    "r8KB":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment-routing.module.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: CompanyVoucherEnrollmentRoutingModule */

    /***/
    function r8KB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentRoutingModule", function () {
        return CompanyVoucherEnrollmentRoutingModule;
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


      var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-voucher-enrollment.component */
      "m47g");

      var routes = [{
        path: '',
        component: _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherEnrollmentComponent"]
      }];

      var CompanyVoucherEnrollmentRoutingModule = /*#__PURE__*/_createClass(function CompanyVoucherEnrollmentRoutingModule() {
        _classCallCheck(this, CompanyVoucherEnrollmentRoutingModule);
      });

      CompanyVoucherEnrollmentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CompanyVoucherEnrollmentRoutingModule);
      /***/
    },

    /***/
    "thCm":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/company-voucher/company-voucher-enrollment/company-voucher-enrollment.module.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: CompanyVoucherEnrollmentModule */

    /***/
    function thCm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyVoucherEnrollmentModule", function () {
        return CompanyVoucherEnrollmentModule;
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


      var _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-voucher-enrollment-routing.module */
      "r8KB");
      /* harmony import */


      var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./company-voucher-enrollment.component */
      "m47g");
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

      var CompanyVoucherEnrollmentModule = /*#__PURE__*/_createClass(function CompanyVoucherEnrollmentModule() {
        _classCallCheck(this, CompanyVoucherEnrollmentModule);
      });

      CompanyVoucherEnrollmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_4__["CompanyVoucherEnrollmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherEnrollmentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_8__["FragmentsModule"]]
      })], CompanyVoucherEnrollmentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=company-voucher-company-voucher-enrollment-company-voucher-enrollment-module-es5.js.map