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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/core/models/payment-method.model */
      "piSE");
      /* harmony import */


      var app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/core/models/voucher-signatories.model */
      "VPUY");
      /* harmony import */


      var app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/models/voucher.model */
      "Inok");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function CompanyVoucherEnrollmentComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Voucher: \xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PDF file only!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_div_21_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.attachment = $event;
          })("change", function CompanyVoucherEnrollmentComponent_div_21_Template_input_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.attachment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function CompanyVoucherEnrollmentComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "object", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iframe", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This browser does not support PDF!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function CompanyVoucherEnrollmentComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyVoucherEnrollmentComponent_mat_option_30_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r11 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.getCompanyDetails(i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r11.companyName, " ");
        }
      }

      function CompanyVoucherEnrollmentComponent_mat_form_field_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.company.companyName);
        }
      }

      function CompanyVoucherEnrollmentComponent_mat_form_field_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company TelephoneNo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.company.companyTelephoneNo);
        }
      }

      function CompanyVoucherEnrollmentComponent_mat_form_field_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Tin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.company.companyTin);
        }
      }

      function CompanyVoucherEnrollmentComponent_mat_form_field_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.company.completeAddress);
        }
      }

      var CompanyVoucherEnrollmentComponent = /*@__PURE__*/function () {
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
            this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_8__["Voucher"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_4__["Company"]();
            this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_7__["VoucherSignatories"]();
            this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_6__["PaymentMethod"]();
            this.voucherList = [];
            this.companyList = [];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_5__["STATUSES"]);
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
              this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
              this.voucherForm = this.formBuilder.group({
                company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                fundAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                voucherDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "setSignatoriesForm",
            value: function setSignatoriesForm() {
              this.voucherSignatoriesForm = this.formBuilder.group({
                voucherSignatoriesName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                voucherSignatoriesPosition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "resetsetSignatoriesForm",
            value: function resetsetSignatoriesForm() {
              this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
              this.voucherSignatories = new app_core_models_voucher_signatories_model__WEBPACK_IMPORTED_MODULE_7__["VoucherSignatories"]();
              this.voucherSignatoriesForm.markAsUntouched();
              this.voucherSignatoriesForm.markAsPristine();
            }
          }, {
            key: "resetFormValidatorVoucher",
            value: function resetFormValidatorVoucher() {
              this.voucher.status = _shared__WEBPACK_IMPORTED_MODULE_5__["COMMON_FUNCTION"].ACTIVE;
              this.voucher = new app_core_models_voucher_model__WEBPACK_IMPORTED_MODULE_8__["Voucher"]();
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

              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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
                  params = '?&attachmentType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["ATTACHMENT_TYPE"].VOUCHER_FUND + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["SUBMISSION_TYPE"].ORIGINAL;

                  _this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, _this.selectedFiles.item(0), params).subscribe(function (res) {
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

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, "voucher-attachment-reference/" + this.voucher.voucherAttachmentReference).subscribe(function (res1) {
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
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherFundEnrollment, this.voucher).subscribe(function (res) {
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

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].company).subscribe(function (res) {
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

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucher, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  // console.log(res.responseData.data);
                  _this5.voucher = res.responseData.data;
                  _this5.signatoriesList = _this5.voucher.voucherSignatories;
                  _this5.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this5.signatoriesList);
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
                this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherSignatories, data).subscribe(function (result) {
                  _this6.signatoriesList.splice(_this6.signatoriesList.findIndex(function (r) {
                    return r.id === signatory.id;
                  }), 1, result.responseData.data);

                  _this6.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this6.signatoriesList);
                  _this6.dataSourceSignatories.paginator = _this6.formListComponent.paginator;
                });
              } else {
                this.signatoriesList = signatory;
                this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
                this.dataSourceSignatories.paginator = this.formListComponent.paginator;
              }
            }
          }, {
            key: "onDeleteSignatory",
            value: function onDeleteSignatory(signatory) {
              var _this7 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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
                  _this7.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this7.signatoriesList);

                  if (_this7.process === 'update' && signatory.id && _this7.voucher.id) {
                    _this7.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherSignatories, signatory.id).subscribe(function (res) {
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
              this.dataSourceSignatories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.signatoriesList);
              this.dataSourceSignatories.paginator = this.formListComponent.paginator;
              this.dataSourceSignatories.sort = this.formListComponent.sort;

              if (this.process === 'update' && this.voucher.id) {
                var data = {
                  name: res.name,
                  position: res.position,
                  voucherId: this.voucher.id
                };
                this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherSignatories, data).subscribe(function (res) {
                  _this8.dataSourceSignatories.paginator = _this8.formListComponent.paginator;
                });
              } // this.resetForm === 'voucher_signatories';


              this.resetsetSignatoriesForm();
            }
          }, {
            key: "getVoucherList",
            value: function getVoucherList() {
              var _this9 = this;

              this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].voucherMonitoring, "?page=1&size=30")).subscribe(function (res) {
                // console.log(res.data);
                _this9.voucherList = res.data;
                _this9.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.data);
                _this9.dataSource.paginator = _this9.formListComponent.paginator;
                _this9.dataSource.sort = _this9.formListComponent.sort;
              });
            }
          }]);

          return CompanyVoucherEnrollmentComponent;
        }();

        CompanyVoucherEnrollmentComponent.ɵfac = function CompanyVoucherEnrollmentComponent_Factory(t) {
          return new (t || CompanyVoucherEnrollmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]));
        };

        CompanyVoucherEnrollmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CompanyVoucherEnrollmentComponent,
          selectors: [["app-company-voucher-enrollment"]],
          viewQuery: function CompanyVoucherEnrollmentComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          inputs: {
            safeURL: "safeURL"
          },
          decls: 88,
          vars: 26,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [1, "col-md-12", "information-title"], [1, "row", "col-md-12"], [1, "row", "col-md-5"], [4, "ngIf"], [1, "row", "col-md-7"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-12", 3, "hidden"], ["name", "company", "formControlName", "company", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-12", "appearance", "outline", 4, "ngIf"], ["class", "col-md-6", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "fundAmount", "formControlName", "fundAmount", "type", "number", 3, "ngModel", "readonly", "ngModelChange"], ["matInput", "", "placeholder", "Date", "readonly", "", "name", "voucherDate", "formControlName", "voucherDate", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for", "hidden"], ["color", "warn", "disabled", "false"], ["voucherDate", ""], ["matInput", "", "name", "voucherSignatoriesName", "formControlName", "voucherSignatoriesName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "voucherSignatoriesPosition", "formControlName", "voucherSignatoriesPosition", 3, "ngModel", "ngModelChange"], [1, "col-md-9"], [1, "col-md-3"], ["mat-raised-button", "", 1, "button-red", 3, "disabled", "click"], [1, "material-icons", "color__white"], [3, "dataSource", "displayedColumns", "deleteInListFunction", "updateListFunction"], [1, "col-md-6"], ["mat-raised-button", "", 1, "button-red", 3, "hidden", "disabled", "click"], ["mat-raised-button", "", 1, "button-red", 3, "click"], ["type", "file", "accept", ".pdf", 1, "file-upload", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "500", 3, "data"], ["width", "100%", "height", "500", 3, "src"], [3, "value", "click"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "readonly", "", 3, "value"]],
          template: function CompanyVoucherEnrollmentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "view_list");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Company Voucher Enrollment ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-form-list", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function CompanyVoucherEnrollmentComponent_Template_app_form_list_selectInListFunction_10_listener() {
                return ctx.getVoucherDetails();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Company Information ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CompanyVoucherEnrollmentComponent_div_21_Template, 7, 3, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CompanyVoucherEnrollmentComponent_div_22_Template, 6, 2, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Company Name ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_mat_select_ngModelChange_29_listener($event) {
                return ctx.voucher.company = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CompanyVoucherEnrollmentComponent_mat_option_30_Template, 2, 2, "mat-option", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CompanyVoucherEnrollmentComponent_mat_form_field_31_Template, 4, 1, "mat-form-field", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CompanyVoucherEnrollmentComponent_mat_form_field_32_Template, 4, 1, "mat-form-field", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CompanyVoucherEnrollmentComponent_mat_form_field_33_Template, 4, 1, "mat-form-field", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CompanyVoucherEnrollmentComponent_mat_form_field_34_Template, 4, 1, "mat-form-field", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Fund Amount ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_40_listener($event) {
                return ctx.voucher.fundAmount = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Voucher Date");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_44_listener($event) {
                return ctx.voucher.voucherDate = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-datepicker-toggle", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-datepicker", 20, 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Voucher Signatories Name ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_56_listener($event) {
                return ctx.voucherSignatories.name = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Voucher Signatories Position ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyVoucherEnrollmentComponent_Template_input_ngModelChange_62_listener($event) {
                return ctx.voucherSignatories.position = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyVoucherEnrollmentComponent_Template_button_click_66_listener() {
                return ctx.setSignatoriesList(ctx.voucherSignatories);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "i", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "task_alt");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Add Signatory ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "app-form-list", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteInListFunction", function CompanyVoucherEnrollmentComponent_Template_app_form_list_deleteInListFunction_72_listener($event) {
                return ctx.onDeleteSignatory($event);
              })("updateListFunction", function CompanyVoucherEnrollmentComponent_Template_app_form_list_updateListFunction_72_listener($event) {
                return ctx.onUpdateSignatory($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyVoucherEnrollmentComponent_Template_button_click_77_listener() {
                return ctx.uploadVoucher();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "task_alt");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " SUBMIT ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyVoucherEnrollmentComponent_Template_button_click_83_listener() {
                return ctx.reset();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "i", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "task_alt");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " RESET ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.process === "save");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewDocument === true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.voucherForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.process === "update");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.voucher.company);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voucher.company && ctx.process === "update");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voucher.company);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voucher.company);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voucher.company);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.voucher.fundAmount)("readonly", ctx.process === "update");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r7)("ngModel", ctx.voucher.voucherDate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7)("hidden", ctx.process === "update");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.voucherSignatoriesForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.voucherSignatories.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.voucherSignatories.position);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.voucherSignatoriesForm.controls["voucherSignatoriesPosition"] == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesPosition"].errors == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesPosition"].errors.required) || (ctx.voucherSignatoriesForm.controls["voucherSignatoriesName"] == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesName"].errors == null ? null : ctx.voucherSignatoriesForm.controls["voucherSignatoriesName"].errors.required));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceSignatories)("displayedColumns", ctx.displayedColumnsSignatories);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.process === "update")("disabled", ctx.voucherForm.invalid || (ctx.signatoriesList == null ? null : ctx.signatoriesList.length) === 0 || !ctx.attachment);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_16__["FormListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"]],
          styles: [".button-green[_ngcontent-%COMP%] {\n  background-color: green;\n  color: white;\n}\n\n.information-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2NvbXBhbnktdm91Y2hlci9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC9jb21wYW55LXZvdWNoZXItZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9jb21wYW55LXZvdWNoZXIvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQvY29tcGFueS12b3VjaGVyLWVucm9sbG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"]
        });
        return CompanyVoucherEnrollmentComponent;
      }();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-voucher-enrollment.component */
      "m47g");

      var routes = [{
        path: '',
        component: _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherEnrollmentComponent"]
      }];

      var CompanyVoucherEnrollmentRoutingModule = /*@__PURE__*/function () {
        var CompanyVoucherEnrollmentRoutingModule = /*#__PURE__*/_createClass(function CompanyVoucherEnrollmentRoutingModule() {
          _classCallCheck(this, CompanyVoucherEnrollmentRoutingModule);
        });

        CompanyVoucherEnrollmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CompanyVoucherEnrollmentRoutingModule
        });
        CompanyVoucherEnrollmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CompanyVoucherEnrollmentRoutingModule_Factory(t) {
            return new (t || CompanyVoucherEnrollmentRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CompanyVoucherEnrollmentRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyVoucherEnrollmentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-voucher-enrollment-routing.module */
      "r8KB");
      /* harmony import */


      var _company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./company-voucher-enrollment.component */
      "m47g");
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


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");

      var CompanyVoucherEnrollmentModule = /*@__PURE__*/function () {
        var CompanyVoucherEnrollmentModule = /*#__PURE__*/_createClass(function CompanyVoucherEnrollmentModule() {
          _classCallCheck(this, CompanyVoucherEnrollmentModule);
        });

        CompanyVoucherEnrollmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CompanyVoucherEnrollmentModule
        });
        CompanyVoucherEnrollmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CompanyVoucherEnrollmentModule_Factory(t) {
            return new (t || CompanyVoucherEnrollmentModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherEnrollmentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return CompanyVoucherEnrollmentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyVoucherEnrollmentModule, {
          declarations: [_company_voucher_enrollment_component__WEBPACK_IMPORTED_MODULE_3__["CompanyVoucherEnrollmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_voucher_enrollment_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyVoucherEnrollmentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=company-voucher-company-voucher-enrollment-company-voucher-enrollment-module-es5.js.map