(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["or-preparation-or-preparation-module"], {
    /***/
    "/+ax":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: OrPreparationModule */

    /***/
    function ax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationModule", function () {
        return OrPreparationModule;
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


      var _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./or-preparation-routing.module */
      "h6MT");
      /* harmony import */


      var _or_preparation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./or-preparation.component */
      "5scm");
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

      var OrPreparationModule = /*@__PURE__*/function () {
        var OrPreparationModule = /*#__PURE__*/_createClass(function OrPreparationModule() {
          _classCallCheck(this, OrPreparationModule);
        });

        OrPreparationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: OrPreparationModule
        });
        OrPreparationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function OrPreparationModule_Factory(t) {
            return new (t || OrPreparationModule)();
          },
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrPreparationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]]
        });
        return OrPreparationModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrPreparationModule, {
          declarations: [_or_preparation_component__WEBPACK_IMPORTED_MODULE_3__["OrPreparationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _or_preparation_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrPreparationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
        });
      })();
      /***/

    },

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
    "5scm":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OrPreparationComponent */

    /***/
    function scm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationComponent", function () {
        return OrPreparationComponent;
      });
      /* harmony import */


      var _core_models_totals_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../core/models/totals.model */
      "DBuf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_report_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/core/models/report.model */
      "za27");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function OrPreparationComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading companies...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function OrPreparationComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Search Company: ");
        }
      }

      function OrPreparationComponent_mat_option_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_mat_option_21_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var i_r9 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.setCompanyDetails(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r9.companyName, " ");
        }
      }

      function OrPreparationComponent_mat_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r12.description, " ");
        }
      }

      function OrPreparationComponent_mat_option_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r13.referenceCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r13.referenceCode, " ");
        }
      }

      function OrPreparationComponent_span_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OrPreparationComponent_button_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_button_66_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.addReceiptReference();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add Receipt Reference ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OrPreparationComponent_ul_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_ul_71_Template_span_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var i_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.removeReferenceCode(i_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r16.reference, " ");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var OrPreparationComponent = /*@__PURE__*/function () {
        var OrPreparationComponent = /*#__PURE__*/function () {
          function OrPreparationComponent(apiService, formBuilder, sweetAlertService, spinner, numberPipe) {
            _classCallCheck(this, OrPreparationComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.spinner = spinner;
            this.numberPipe = numberPipe;
            this.displayedColumns = ["officialReceiptNo", "typeOfMediumDescription", "officialReceiptReferences", "status", "deleteIcon"];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_6__["STATUSES"]);
            this.orPreparation = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparation"]();
            this.orPreparationReference = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparationReference"]();
            this.orPreparationList = [];
            this.typeOfMediumList = [];
            this.officialReceiptReferenceList = [];
            this.availableReferenceCodeList = [];
            this.companyList = [];
            this.report = new app_core_models_report_model__WEBPACK_IMPORTED_MODULE_7__["Report"]();
            this.totalAmts = new Array();
            this.totalAmounts = new _core_models_totals_model__WEBPACK_IMPORTED_MODULE_0__["TotalAmountsModel"]();
          }

          _createClass(OrPreparationComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getList();
              this.setFormValidator();
              this.getTypeOfMedium();
              this.getCompanyList();
              this.getAvailableReferenceCode();
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.getAvailableReferenceCode();
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].officialReceipt).subscribe(function (res) {
                _this.orPreparationList = res.responseData.data;
                _this.orPreparationList = _this.orPreparationList.map(function (mappedList) {
                  return Object.assign(Object.assign({}, mappedList), {
                    officialReceiptReferencesValue: mappedList.officialReceiptReferences.reduce(function (previousValue, currentValue) {
                      if (previousValue) {
                        return previousValue + ", " + (currentValue === null || currentValue === void 0 ? void 0 : currentValue.reference);
                      } else {
                        return currentValue === null || currentValue === void 0 ? void 0 : currentValue.reference;
                      }
                    }, "")
                  });
                });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.orPreparationList);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
            }
          }, {
            key: "amountChanged",
            value: function amountChanged() {// this.orPreparationForm
              //   .get("totalAmount")
              //   .setValue(
              //     this.numberPipe.transform(
              //       (+this.orPreparationForm.get("amount").value || 0) +
              //         this.totalAmounts.totalSales,
              //       ".2-2"
              //     )
              //   );
            }
          }, {
            key: "addReceiptReference",
            value: function addReceiptReference() {
              var _this2 = this;

              console.log("prep => ", this.orPreparationReference);

              if (this.orPreparation.voucherControlNumber && this.officialReceiptReferenceList.length >= 6 || this.officialReceiptReferenceList.length >= 9) {
                this.sweetAlertService.customErrorMessage("Max input limit reached");
              } else {
                var isExisting = this.officialReceiptReferenceList.filter(function (filteredOR) {
                  return filteredOR.reference === _this2.orPreparationReference.reference.trim();
                });

                if (isExisting.length) {
                  this.sweetAlertService.customErrorMessage("Reference code already in the list");
                } else {
                  this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparationRefCodeCheck, this.orPreparationReference.reference).subscribe(function (res) {
                    var _a, _b;

                    if ((_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data) {
                      var appForm = (_b = res === null || res === void 0 ? void 0 : res.responseData) === null || _b === void 0 ? void 0 : _b.data[0];

                      _this2.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetailsByAppformId, appForm.id).subscribe(function (form) {
                        console.log("form : ", form);
                        var paymentDtls;

                        if (form) {
                          //  this.totalAmounts.totalAmountDue = Number(this.totalAmounts.totalAmountDue) + Number(form?.responseData?.data?.amountDue);
                          // this.totalAmounts.setTotalValues(form.responseData.data)
                          _this2.totalAmts.push(form.responseData.data);

                          _this2.totalAmounts.setTotalValues(_this2.totalAmts);

                          _this2.orPreparationForm.get("totalAmount").setValue(_this2.numberPipe.transform(_this2.totalAmounts.totalSales, ".2-2"));
                        }

                        console.log("totals : ", _this2.totalAmounts);
                      });

                      _this2.officialReceiptReferenceList.push(_this2.orPreparationReference);

                      _this2.orPreparationReference.amount = appForm.amount; // this.getAvailableReferenceCode(this.orPreparationReference?.reference);

                      _this2.orPreparationReference = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparationReference"](); // console.log("data => ", this.officialReceiptReferenceList)

                      _this2.officialReceiptReferenceList.filter(function (ref) {// let total = Number(this.orPreparationForm.controls.totalAmount.value) + Number(ref.amount);
                        // this.orPreparationForm.controls.totalAmount.setValue(total);
                      });
                    } else {
                      _this2.sweetAlertService.customErrorMessage(res === null || res === void 0 ? void 0 : res.responseMessage);
                    }
                  }, function (err) {
                    _this2.sweetAlertService.error(err);
                  });
                }
              }
            }
          }, {
            key: "removeReferenceCode",
            value: function removeReferenceCode(obj) {
              this.officialReceiptReferenceList = this.officialReceiptReferenceList.filter(function (filteredOR) {
                return filteredOR.reference !== obj.reference.trim();
              });
              console.log("remove ref : ", obj);
              console.log("totalAmts", this.totalAmts);
              this.totalAmts = this.totalAmts.filter(function (amts) {
                return amts.applicationForm.referenceCode !== obj.reference.trim();
              });
              console.log("totalamts", this.totalAmts);
              this.totalAmounts.setTotalValues(this.totalAmts);
              console.log("total amounts : ", this.totalAmounts);
            }
          }, {
            key: "getAvailableReferenceCode",
            value: function getAvailableReferenceCode() {// if (refCode) {
              //   this.apiService
              //     .findByParam(ENDPOINTS.availableReferenceCode, refCode)
              //     .subscribe((res) => {
              //       console.log(res);
              //     });
              // } else {
              //   this.apiService
              //     .findAll(ENDPOINTS.availableReferenceCode)
              //     .subscribe((res) => {
              //       console.log(res);
              //       this.availableReferenceCodeList = res;
              //     });
              // }

              var refCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            }
          }, {
            key: "saveOrUpdate",
            value: function saveOrUpdate() {
              var _this3 = this;

              var _a;

              this.orPreparation.id = ((_a = this.orPreparation) === null || _a === void 0 ? void 0 : _a.id) ? this.orPreparation.id : 0;
              this.orPreparation.officialReceiptReferences = this.officialReceiptReferenceList; // this.orPreparation.setTotalAmounts(this.totalAmounts);
              // console.log(this.totalAmounts.)

              console.log("orPrep", this.orPreparation);
              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparationORNumberCheck, this.orPreparation.officialReceiptNo).subscribe(function (isExisting) {
                var _a;

                if (isExisting.responseData.data && !((_a = _this3.orPreparation) === null || _a === void 0 ? void 0 : _a.id)) {
                  _this3.sweetAlertService.customErrorMessage(isExisting.responseMessage);
                } else {
                  // this.orPreparation.setTotalAmounts(this.totalAmounts);
                  // console.log('orPreparation')
                  _this3.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparation, "/submit"), Object.assign(Object.assign({}, _this3.orPreparation), _this3.totalAmounts)).subscribe(function (res) {
                    if (res !== undefined) {
                      _this3.sweetAlertService.success(res);
                    }
                  }, function (err) {
                    _this3.sweetAlertService.error(err);
                  }, function () {
                    _this3.resetFormValidator();

                    _this3.getList();
                  });
                }
              }, function (err) {
                return _this3.sweetAlertService.error(err);
              });
            }
          }, {
            key: "cancel",
            value: function cancel() {
              var _this4 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                text: "Are you sure you want to cancel this Official Receipt Preparation?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm"
              }).then(function (result) {
                if (result.value) {
                  _this4.orPreparation = _this4.formListComponent.elementObject;
                  _this4.orPreparation.officialReceiptReferences = null;

                  _this4.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparation, "/cancel"), _this4.orPreparation).subscribe(function (res) {
                    if (res !== undefined) {
                      _this4.sweetAlertService.success(res);
                    }
                  }, function (err) {
                    _this4.sweetAlertService.error(err);
                  }, function () {
                    _this4.resetFormValidator();

                    _this4.getList();
                  });
                }
              });
            }
          }, {
            key: "getOrPreparation",
            value: function getOrPreparation() {
              var _this5 = this;

              console.log("get:: =>");
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].officialReceipt, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this5.orPreparation = res.responseData.data;
                  _this5.orPreparation.filedBirForm = _this5.orPreparation.filedBirForm.toString();
                  console.log("OR PREP => ", _this5.orPreparation);
                  _this5.totalAmounts.totalSales = _this5.orPreparation.totalSales;
                  _this5.totalAmounts.totalAmountDue = _this5.orPreparation.totalAmountDue;
                  _this5.totalAmounts.totalVat = _this5.orPreparation.totalVat;
                  _this5.totalAmounts.totalWithholdingtax = _this5.orPreparation.totalWithholdingtax;

                  var company = _this5.companyList.find(function (company) {
                    return company.companyName === _this5.orPreparation.companyName;
                  });

                  _this5.selectedCompanyId = company.id;
                  _this5.selectedCompany = company;

                  _this5.getAvailableReferenceCodeList();

                  _this5.orPreparationForm.get("totalAmount").setValue(_this5.totalAmounts.totalSales);

                  _this5.officialReceiptReferenceList = _this5.orPreparation.officialReceiptReferences;

                  _this5.officialReceiptReferenceList.filter(function (or) {
                    _this5.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].orPreparationRefCodeCheck, or.reference).subscribe(function (paymentDtls) {
                      var _a;

                      var appForm = (_a = paymentDtls === null || paymentDtls === void 0 ? void 0 : paymentDtls.responseData) === null || _a === void 0 ? void 0 : _a.data[0];

                      _this5.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].paymentDetailsByAppformId, appForm.id).subscribe(function (payment) {
                        var _a;

                        _this5.totalAmts.push((_a = payment === null || payment === void 0 ? void 0 : payment.responseData) === null || _a === void 0 ? void 0 : _a.data);
                      });
                    });
                  });
                }
              });
            }
          }, {
            key: "getCompanyList",
            value: function getCompanyList() {
              var _this6 = this;

              this.isGettingCompanies = true;
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].activeCompanies).subscribe(function (res) {
                _this6.companyList = res.responseData.data; // .filter((company) => !this.notInSelection.includes(company.status));

                _this6.isGettingCompanies = false;
              }, function (err) {
                _this6.isGettingCompanies = false;
              });
            }
          }, {
            key: "setCompanyDetails",
            value: function setCompanyDetails(i) {
              this.selectedCompanyId = i.id;
              this.orPreparation.companyName = i.companyName;
              this.orPreparation.companyTin = i.companyTin;
              this.orPreparation.companyAddress = "[" + i.country.code + " - " + i.country.name + "] " + i.completeAddress;
              this.getAvailableReferenceCodeList();
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.orPreparationForm = this.formBuilder.group({
                officialReceiptNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                typeOfMedium: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                amount: [""],
                officialReceiptReference: [""],
                voucherControlNumber: [""],
                businessStyle: [""],
                fullPaymentOf: [""],
                controlNumber: [""],
                companyName: [""],
                companyTin: [""],
                companyAddress: [""],
                totalAmount: [""]
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.selectedCompanyId = null;
              this.totalAmounts = new _core_models_totals_model__WEBPACK_IMPORTED_MODULE_0__["TotalAmountsModel"]();
              this.orPreparationForm.reset();
              this.orPreparation = new _models__WEBPACK_IMPORTED_MODULE_5__["OrPreparation"]();
              this.officialReceiptReferenceList = [];
              this.orPreparationForm.markAsUntouched();
              this.orPreparationForm.markAsPristine();
            }
          }, {
            key: "getTypeOfMedium",
            value: function getTypeOfMedium() {
              var _this7 = this;

              this.typeOfMediumList = [];
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfMediumSingleMedia).subscribe(function (singleMediaList) {
                _this7.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfMediumMultiMediaMoving).subscribe(function (multimediaMovingList) {
                  _this7.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].typeOfMediumMultiMediaMoving).subscribe(function (multimediaStaticList) {
                    _this7.typeOfMediumList = [].concat(_toConsumableArray(singleMediaList.responseData.data), _toConsumableArray(multimediaMovingList.responseData.data), _toConsumableArray(multimediaStaticList.responseData.data));
                    var key = "id";
                    _this7.typeOfMediumList = _toConsumableArray(new Map(_this7.typeOfMediumList.map(function (item) {
                      return [item[key], item];
                    })).values());
                  });
                });
              }, function (err) {
                console.log(err);
              });
            }
          }, {
            key: "compareList",
            value: function compareList(value, selected) {
              if (value && selected) {
                return value.id === selected.id;
              }
            }
          }, {
            key: "printOr",
            value: function printOr(orData) {
              if (orData.id) {
                this.report.filename = "ASC_Receipt";
                this.report.format = "pdf";
                this.report.module = "Receipt", this.report.params = {
                  officialReceiptId: orData.id
                };
                this.apiService.printReport(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].generateReports, this.report).subscribe(function (data) {
                  var newBlob = new Blob([data], {
                    type: "application/pdf"
                  });
                  var downloadURL = URL.createObjectURL(newBlob);
                  window.open(downloadURL);
                });
              } else {
                this.sweetAlertService.customErrorMessage("Please select data first...");
              }
            }
          }, {
            key: "getAvailableReferenceCodeList",
            value: function getAvailableReferenceCodeList() {
              var _this8 = this;

              if (this.selectedCompanyId && this.orPreparation.typeOfMedium && this.orPreparation.filedBirForm) {
                this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].availableReferenceCodeByCompany + "/" + this.selectedCompanyId + "/type-of-medium/" + this.orPreparation.typeOfMedium.description + "/file-bir-form/" + this.orPreparation.filedBirForm.toString()).subscribe(function (res) {
                  _this8.availableReferenceCodeList = res;
                });
              }
            }
          }]);

          return OrPreparationComponent;
        }();

        OrPreparationComponent.ɵfac = function OrPreparationComponent_Factory(t) {
          return new (t || OrPreparationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]));
        };

        OrPreparationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: OrPreparationComponent,
          selectors: [["app-or-preparation"]],
          viewQuery: function OrPreparationComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_4__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 81,
          vars: 29,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-6"], [1, "required-field"], ["matInput", "", "name", "officialReceiptNo", "formControlName", "officialReceiptNo", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadedLabelTemp", ""], [3, "value"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "companyName", "formControlName", "companyName", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "companyTin", "formControlName", "companyTin", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "companyAddress", "formControlName", "companyAddress", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "businessStyle", "formControlName", "businessStyle", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "controlNumber", "formControlName", "controlNumber", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelOptions", "ngModelChange", "selectionChange"], ["value", "true"], ["value", "false"], ["matInput", "", "name", "totalAmount", "formControlName", "totalAmount", "readonly", ""], ["formControlName", "typeOfMedium", "name", "typeOfMedium", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "officialReceiptReference", "name", "officialReceiptReference", 3, "ngModel", "disabled", "compareWith", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["matInput", "", "readonly", ""], [4, "ngFor", "ngForOf"], [1, "button-content"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons", "color__white"], [3, "dataSource", "displayedColumns", "selectInListFunction", "deleteInListFunction"], [3, "value", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matTooltip", "Remove Reference Code", 1, "material-icons", 3, "click"]],
          template: function OrPreparationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Official Receipt Preparation ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Official Receipt Number ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_14_listener($event) {
                return ctx.orPreparation.officialReceiptNo = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OrPreparationComponent_ng_container_17_Template, 3, 0, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OrPreparationComponent_ng_template_18_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrPreparationComponent_mat_option_21_Template, 2, 2, "mat-option", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Company Name:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_25_listener($event) {
                return ctx.orPreparation.companyName = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Company TIN:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_29_listener($event) {
                return ctx.orPreparation.companyTin = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Company Address:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "textarea", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_textarea_ngModelChange_33_listener($event) {
                return ctx.orPreparation.companyAddress = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "          ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Business Style:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_38_listener($event) {
                return ctx.orPreparation.businessStyle = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Control Number:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_input_ngModelChange_42_listener($event) {
                return ctx.orPreparation.controlNumber = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " With/Witholding Tax? ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-select", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_mat_select_ngModelChange_46_listener($event) {
                return ctx.orPreparation.filedBirForm = $event;
              })("selectionChange", function OrPreparationComponent_Template_mat_select_selectionChange_46_listener() {
                return ctx.getAvailableReferenceCodeList();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-option", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Yes ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " NO ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Total Amount:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Type of Medium");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-select", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_mat_select_ngModelChange_58_listener($event) {
                return ctx.orPreparation.typeOfMedium = $event;
              })("selectionChange", function OrPreparationComponent_Template_mat_select_selectionChange_58_listener() {
                return ctx.getAvailableReferenceCodeList();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, OrPreparationComponent_mat_option_59_Template, 2, 2, "mat-option", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "List of Paid Reference Codes:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-select", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrPreparationComponent_Template_mat_select_ngModelChange_63_listener($event) {
                return ctx.orPreparationReference.reference = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, OrPreparationComponent_mat_option_64_Template, 2, 2, "mat-option", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, OrPreparationComponent_span_65_Template, 3, 0, "span", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, OrPreparationComponent_button_66_Template, 4, 0, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Reference List:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, OrPreparationComponent_ul_71_Template, 5, 1, "ul", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "app-form-action-buttons", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("saveFunction", function OrPreparationComponent_Template_app_form_action_buttons_saveFunction_73_listener() {
                return ctx.saveOrUpdate();
              })("updateFunction", function OrPreparationComponent_Template_app_form_action_buttons_updateFunction_73_listener() {
                return ctx.saveOrUpdate();
              })("cancelFunction", function OrPreparationComponent_Template_app_form_action_buttons_cancelFunction_73_listener() {
                return ctx.resetFormValidator();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrPreparationComponent_Template_button_click_74_listener() {
                return ctx.printOr(ctx.orPreparation);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "i", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "print");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Print OR ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "app-form-list", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectInListFunction", function OrPreparationComponent_Template_app_form_list_selectInListFunction_80_listener() {
                return ctx.getOrPreparation();
              })("deleteInListFunction", function OrPreparationComponent_Template_app_form_list_deleteInListFunction_80_listener() {
                return ctx.cancel();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.orPreparationForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.officialReceiptNo);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGettingCompanies)("ngIfElse", _r1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedCompany);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.companyName);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.companyTin);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.companyAddress);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.businessStyle);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.controlNumber);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.filedBirForm)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparation.typeOfMedium)("compareWith", ctx.compareList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.typeOfMediumList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orPreparationReference.reference)("disabled", !ctx.selectedCompanyId || !ctx.orPreparation.typeOfMedium || !ctx.orPreparation.filedBirForm)("compareWith", ctx.compareList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableReferenceCodeList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orPreparationReference.reference);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orPreparationReference.reference);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.officialReceiptReferenceList);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("childObject", ctx.orPreparation)("childForm", ctx.orPreparationForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.orPreparation.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_16__["FormActionButtonsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_18__["FormListComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"]],
          styles: ["span.material-icons[_ngcontent-%COMP%] {\n  color: #ad0000;\n  cursor: pointer;\n}\n\n.button-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL29yLXByZXBhcmF0aW9uL29yLXByZXBhcmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnRpbmcvb3ItcHJlcGFyYXRpb24vb3ItcHJlcGFyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yOiByZ2IoMTczLCAwLCAwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn0iXX0= */"]
        });
        return OrPreparationComponent;
      }();
      /***/

    },

    /***/
    "DBuf":
    /*!*********************************************!*\
      !*** ./src/app/core/models/totals.model.ts ***!
      \*********************************************/

    /*! exports provided: TotalAmountsModel */

    /***/
    function DBuf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TotalAmountsModel", function () {
        return TotalAmountsModel;
      });

      var TotalAmountsModel = /*#__PURE__*/function () {
        function TotalAmountsModel() {
          _classCallCheck(this, TotalAmountsModel);

          this.totalSales = 0;
          this.totalVat = 0;
          this.totalWithholdingtax = 0;
          this.totalAmountDue = 0;
        }

        _createClass(TotalAmountsModel, [{
          key: "setTotalValues",
          value: function setTotalValues(data) {
            console.log("totalValues:  ", data);
            var totalAmountDue = 0;
            var totalVat = 0;
            var totalSales = 0;
            var totalwWithholdingtax = 0;
            data.filter(function (payment) {
              totalAmountDue = totalAmountDue + payment.amountDue;
              totalVat = totalVat + payment.vat;
              totalSales = totalSales + payment.basicRate + payment.vat;
              totalwWithholdingtax = totalwWithholdingtax + payment.withholdingTax;
            });
            this.totalAmountDue = totalAmountDue;
            this.totalSales = totalSales;
            this.totalVat = totalVat;
            this.totalWithholdingtax = this.totalWithholdingtax;
          }
        }]);

        return TotalAmountsModel;
      }();
      /***/

    },

    /***/
    "h6MT":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/or-preparation/or-preparation-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: OrPreparationRoutingModule */

    /***/
    function h6MT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationRoutingModule", function () {
        return OrPreparationRoutingModule;
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


      var _or_preparation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./or-preparation.component */
      "5scm");

      var routes = [{
        path: '',
        component: _or_preparation_component__WEBPACK_IMPORTED_MODULE_2__["OrPreparationComponent"]
      }];

      var OrPreparationRoutingModule = /*@__PURE__*/function () {
        var OrPreparationRoutingModule = /*#__PURE__*/_createClass(function OrPreparationRoutingModule() {
          _classCallCheck(this, OrPreparationRoutingModule);
        });

        OrPreparationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: OrPreparationRoutingModule
        });
        OrPreparationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function OrPreparationRoutingModule_Factory(t) {
            return new (t || OrPreparationRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return OrPreparationRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrPreparationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=or-preparation-or-preparation-module-es5.js.map