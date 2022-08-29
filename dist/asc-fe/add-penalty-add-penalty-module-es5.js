(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-penalty-add-penalty-module"], {
    /***/
    "73OC":
    /*!******************************************************!*\
      !*** ./src/app/core/models/company-penalty.model.ts ***!
      \******************************************************/

    /*! exports provided: CompanyPenalty */

    /***/
    function OC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyPenalty", function () {
        return CompanyPenalty;
      });

      var CompanyPenalty = /*#__PURE__*/_createClass(function CompanyPenalty() {
        _classCallCheck(this, CompanyPenalty);
      });
      /***/

    },

    /***/
    "EJ3x":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AddPenaltyModule */

    /***/
    function EJ3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPenaltyModule", function () {
        return AddPenaltyModule;
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


      var _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-penalty-routing.module */
      "p7Is");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _add_penalty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-penalty.component */
      "YOXF");

      var AddPenaltyModule = /*@__PURE__*/function () {
        var AddPenaltyModule = /*#__PURE__*/_createClass(function AddPenaltyModule() {
          _classCallCheck(this, AddPenaltyModule);
        });

        AddPenaltyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AddPenaltyModule
        });
        AddPenaltyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AddPenaltyModule_Factory(t) {
            return new (t || AddPenaltyModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddPenaltyRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]]
        });
        return AddPenaltyModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPenaltyModule, {
          declarations: [_add_penalty_component__WEBPACK_IMPORTED_MODULE_6__["AddPenaltyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddPenaltyRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "YOXF":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AddPenaltyComponent */

    /***/
    function YOXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPenaltyComponent", function () {
        return AddPenaltyComponent;
      });
      /* harmony import */


      var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/utils/constants */
      "9Vv1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/core/models/brand-penalty.model */
      "z52K");
      /* harmony import */


      var app_core_models_company_penalty_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/core/models/company-penalty.model */
      "73OC");
      /* harmony import */


      var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/models/payment-method.model */
      "piSE");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function AddPenaltyComponent_div_13_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 14);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r11.attachmentDocument.originalFilename || (ctx_r11.objAttachmentReference == null ? null : ctx_r11.objAttachmentReference.brandPenaltyAttachmentReference) || (ctx_r11.objAttachmentReference == null ? null : ctx_r11.objAttachmentReference.paymentAttachmentReference));
        }
      }

      function AddPenaltyComponent_div_13_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddPenaltyComponent_div_13_input_5_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r13.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", (ctx_r12.objAttachmentReference == null ? null : ctx_r12.objAttachmentReference.brandPenaltyAttachmentReference) || (ctx_r12.objAttachmentReference == null ? null : ctx_r12.objAttachmentReference.paymentAttachmentReference));
        }
      }

      function AddPenaltyComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Filename: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPenaltyComponent_div_13_input_4_Template, 1, 1, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddPenaltyComponent_div_13_input_5_Template, 1, 1, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.attachmentDocument.originalFilename || (ctx_r0.objAttachmentReference == null ? null : ctx_r0.objAttachmentReference.brandPenaltyAttachmentReference) || (ctx_r0.objAttachmentReference == null ? null : ctx_r0.objAttachmentReference.paymentAttachmentReference));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.attachmentDocument.originalFilename);
        }
      }

      function AddPenaltyComponent_div_14_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function AddPenaltyComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPenaltyComponent_div_14_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function AddPenaltyComponent_div_15_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_div_15_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r19.viewDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "open_in_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " VIEW DOCUMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_div_15_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_div_15_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r21.uploadProofOfPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " UPLOAD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r17.safeURLBrand || !ctx_r17.isShowUploadButton)("hidden", (ctx_r17.objAttachmentReference == null ? null : ctx_r17.objAttachmentReference.brandPenaltyAttachmentReference) || (ctx_r17.objAttachmentReference == null ? null : ctx_r17.objAttachmentReference.paymentAttachmentReference));
        }
      }

      function AddPenaltyComponent_div_15_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "object", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This browser does not support PDF!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r18.safeURLBrand, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r18.safeURLBrand, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function AddPenaltyComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPenaltyComponent_div_15_button_1_Template, 4, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPenaltyComponent_div_15_button_3_Template, 4, 2, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddPenaltyComponent_div_15_div_6_Template, 6, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.objAttachmentReference == null ? null : ctx_r2.objAttachmentReference.brandPenaltyAttachmentReference) || (ctx_r2.objAttachmentReference == null ? null : ctx_r2.objAttachmentReference.paymentAttachmentReference));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isShowUploadButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.previewDocument == true && ((ctx_r2.objAttachmentReference == null ? null : ctx_r2.objAttachmentReference.brandPenaltyAttachmentReference) || (ctx_r2.objAttachmentReference == null ? null : ctx_r2.objAttachmentReference.paymentAttachmentReference)));
        }
      }

      function AddPenaltyComponent_div_16_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function AddPenaltyComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPenaltyComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r7);
        }
      }

      function AddPenaltyComponent_div_17_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function AddPenaltyComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPenaltyComponent_div_17_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r9);
        }
      }

      function AddPenaltyComponent_ng_template_18_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " REFERENCE CODE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_18_td_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_18_td_14_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

            var element_r36 = ctx.$implicit;

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r37.getPaymentDetails(element_r36);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r36 == null ? null : element_r36.referenceCode), " ");
        }
      }

      function AddPenaltyComponent_ng_template_18_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " BRAND ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_18_td_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_18_td_17_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var element_r39 = ctx.$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r40.getPaymentDetails(element_r39);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r39 == null ? null : element_r39.brand == null ? null : element_r39.brand.description), " ");
        }
      }

      function AddPenaltyComponent_ng_template_18_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " TYPE OF MEDIUM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_18_td_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_18_td_20_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var element_r42 = ctx.$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r43.getPaymentDetails(element_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r42 == null ? null : element_r42.typeOfMedium), " ");
        }
      }

      function AddPenaltyComponent_ng_template_18_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " PAYMENT STATUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_18_td_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_18_td_23_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var element_r45 = ctx.$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r46.getPaymentDetails(element_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r45 == null ? null : element_r45.paymentStatus == null ? null : element_r45.paymentStatus.replaceAll("_", " ")), " ");
        }
      }

      function AddPenaltyComponent_ng_template_18_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 45);
        }
      }

      function AddPenaltyComponent_ng_template_18_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 46);
        }
      }

      function AddPenaltyComponent_ng_template_18_button_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_18_button_31_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r49.addPenalty("Delinquent");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " SUBMIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var _c1 = function _c1() {
        return [10, 20, 50];
      };

      function AddPenaltyComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_18_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r51.company.companyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Amount to Settle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function AddPenaltyComponent_ng_template_18_Template_input_keydown_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r53.validateFieldService.numbersOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddPenaltyComponent_ng_template_18_th_13_Template, 2, 0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddPenaltyComponent_ng_template_18_td_14_Template, 3, 3, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddPenaltyComponent_ng_template_18_th_16_Template, 2, 0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddPenaltyComponent_ng_template_18_td_17_Template, 3, 3, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddPenaltyComponent_ng_template_18_th_19_Template, 2, 0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddPenaltyComponent_ng_template_18_td_20_Template, 3, 3, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddPenaltyComponent_ng_template_18_th_22_Template, 2, 0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddPenaltyComponent_ng_template_18_td_23_Template, 3, 3, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddPenaltyComponent_ng_template_18_tr_24_Template, 1, 0, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddPenaltyComponent_ng_template_18_tr_25_Template, 1, 0, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " No record found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "mat-paginator", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddPenaltyComponent_ng_template_18_button_31_Template, 4, 0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.company.companyName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 9, ctx_r6.payment == null ? null : ctx_r6.payment.amountDue, "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r6.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r6.dataSource && (ctx_r6.dataSource == null ? null : ctx_r6.dataSource.data == null ? null : ctx_r6.dataSource.data.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.process === "save");
        }
      }

      function AddPenaltyComponent_ng_template_20_mat_form_field_1_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, i_r62 == null ? null : i_r62.description), " ");
        }
      }

      function AddPenaltyComponent_ng_template_20_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_20_mat_form_field_1_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r63.brandPenalty.brand = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPenaltyComponent_ng_template_20_mat_form_field_1_mat_option_4_Template, 3, 4, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r54.brandPenalty.brand)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r54.brandList);
        }
      }

      function AddPenaltyComponent_ng_template_20_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_20_mat_form_field_2_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r65.penaltyBrand = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r55.penaltyBrand)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function AddPenaltyComponent_ng_template_20_hr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
        }
      }

      function AddPenaltyComponent_ng_template_20_mat_form_field_12_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, i_r68 == null ? null : i_r68.paymentDescription), " ");
        }
      }

      function AddPenaltyComponent_ng_template_20_mat_form_field_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Payment Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_20_mat_form_field_12_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r69.paymentMethod.paymentType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPenaltyComponent_ng_template_20_mat_form_field_12_mat_option_4_Template, 3, 4, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r57.paymentMethod.paymentType)("compareWith", ctx_r57.comparePaymentMethod)("disabled", (ctx_r57.brandPenalty == null ? null : ctx_r57.brandPenalty.paymentStatus) === "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.paymentTypeList);
        }
      }

      function AddPenaltyComponent_ng_template_20_mat_form_field_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Amount Received");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_20_mat_form_field_13_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r71.paymentMethod.amount = $event;
          })("keydown", function AddPenaltyComponent_ng_template_20_mat_form_field_13_Template_input_keydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r73.validateFieldService.numbersOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r58.paymentMethod.amount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("readonly", (ctx_r58.brandPenalty == null ? null : ctx_r58.brandPenalty.paymentStatus) === "PAID");
        }
      }

      function AddPenaltyComponent_ng_template_20_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_20_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r74.addPenalty("Brand");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " SUBMIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_20_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_20_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r76.approvePenalty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " APPROVE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPenaltyComponent_ng_template_20_mat_form_field_1_Template, 5, 4, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPenaltyComponent_ng_template_20_mat_form_field_2_Template, 4, 3, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Accumulated Amount Due");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_20_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r78.brandPenalty.amount = $event;
          })("keydown", function AddPenaltyComponent_ng_template_20_Template_input_keydown_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r80.validateFieldService.numbersOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_20_Template_textarea_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r81.brandPenalty.remarks = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddPenaltyComponent_ng_template_20_hr_11_Template, 1, 0, "hr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddPenaltyComponent_ng_template_20_mat_form_field_12_Template, 5, 4, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddPenaltyComponent_ng_template_20_mat_form_field_13_Template, 4, 4, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddPenaltyComponent_ng_template_20_button_16_Template, 4, 0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddPenaltyComponent_ng_template_20_button_17_Template, 4, 0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.penaltyBrand === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.penaltyBrand !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.brandPenalty.amount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.brandPenalty.remarks)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0))("readonly", (ctx_r8.brandPenalty == null ? null : ctx_r8.brandPenalty.paymentStatus) === "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.process === "save" && (ctx_r8.brandPenalty == null ? null : ctx_r8.brandPenalty.paymentStatus) !== "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.process === "update" && (ctx_r8.brandPenalty == null ? null : ctx_r8.brandPenalty.paymentStatus) !== "PAID");
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_1_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r94 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, i_r94 == null ? null : i_r94.companyName), " ");
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_1_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r95.companyPenalty.company = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPenaltyComponent_ng_template_22_mat_form_field_1_mat_option_4_Template, 3, 4, "mat-option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r82.companyPenalty.company)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("compareWith", ctx_r82.compareCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r82.companyList);
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_2_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r97.penaltyCompany = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r83.penaltyCompany)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Accumulated Amount Due");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_3_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r99.companyPenalty.penaltyAmount = $event;
          })("keydown", function AddPenaltyComponent_ng_template_22_mat_form_field_3_Template_input_keydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r101.validateFieldService.numbersOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r84.companyPenalty.penaltyAmount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Accumulated Amount Due");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r102.totalBalance = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r85.totalBalance)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_5_Template_textarea_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r104.companyPenalty.remarks = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r86.companyPenalty.remarks)("readonly", ctx_r86.process === "update")("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0))("readonly", (ctx_r86.companyPenalty == null ? null : ctx_r86.companyPenalty.paymentStatus) === "PAID");
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_6_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r106.previewRemarks = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r87.previewRemarks)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function AddPenaltyComponent_ng_template_22_hr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_8_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r109 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, i_r109 == null ? null : i_r109.paymentDescription), " ");
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Payment Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_8_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r110.paymentMethod.paymentType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPenaltyComponent_ng_template_22_mat_form_field_8_mat_option_4_Template, 3, 4, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r89.paymentMethod.paymentType)("compareWith", ctx_r89.comparePaymentMethod)("disabled", (ctx_r89.companyPenalty == null ? null : ctx_r89.companyPenalty.paymentStatus) === "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r89.paymentTypeList);
        }
      }

      function AddPenaltyComponent_ng_template_22_mat_form_field_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Amount Received");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPenaltyComponent_ng_template_22_mat_form_field_9_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r112.paymentMethod.amount = $event;
          })("keydown", function AddPenaltyComponent_ng_template_22_mat_form_field_9_Template_input_keydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r114.validateFieldService.numbersOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r90.paymentMethod.amount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("readonly", (ctx_r90.companyPenalty == null ? null : ctx_r90.companyPenalty.paymentStatus) === "PAID");
        }
      }

      function AddPenaltyComponent_ng_template_22_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_22_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r116);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r115.addPenalty("Company");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " SUBMIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_22_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_ng_template_22_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118);

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r117.approvePenalty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " APPROVE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddPenaltyComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPenaltyComponent_ng_template_22_mat_form_field_1_Template, 5, 5, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddPenaltyComponent_ng_template_22_mat_form_field_2_Template, 4, 3, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddPenaltyComponent_ng_template_22_mat_form_field_3_Template, 4, 3, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddPenaltyComponent_ng_template_22_mat_form_field_4_Template, 4, 3, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddPenaltyComponent_ng_template_22_mat_form_field_5_Template, 4, 5, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddPenaltyComponent_ng_template_22_mat_form_field_6_Template, 4, 3, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddPenaltyComponent_ng_template_22_hr_7_Template, 1, 0, "hr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddPenaltyComponent_ng_template_22_mat_form_field_8_Template, 5, 4, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddPenaltyComponent_ng_template_22_mat_form_field_9_Template, 4, 4, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddPenaltyComponent_ng_template_22_button_12_Template, 4, 0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddPenaltyComponent_ng_template_22_button_13_Template, 4, 0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.penaltyCompany === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.penaltyCompany !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.totalBalance === undefined || ctx_r10.totalBalance === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.totalBalance !== undefined && ctx_r10.totalBalance > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.previewRemarks === undefined || ctx_r10.previewRemarks === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.previewRemarks !== undefined && ctx_r10.previewRemarks !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.process === "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.process === "save" && (ctx_r10.companyPenalty == null ? null : ctx_r10.companyPenalty.paymentStatus) !== "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.process === "update" && (ctx_r10.companyPenalty == null ? null : ctx_r10.companyPenalty.paymentStatus) !== "PAID");
        }
      }

      var AddPenaltyComponent = /*@__PURE__*/function () {
        var AddPenaltyComponent = /*#__PURE__*/function () {
          function AddPenaltyComponent(router, apiService, sweetAlertService, sanitizer, fileStorageService, route, spinner, validateFieldService, dataStorageService) {
            _classCallCheck(this, AddPenaltyComponent);

            this.router = router;
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.sanitizer = sanitizer;
            this.fileStorageService = fileStorageService;
            this.route = route;
            this.spinner = spinner;
            this.validateFieldService = validateFieldService;
            this.dataStorageService = dataStorageService;
            this.displayedColumns = ['referenceCode', 'brand', 'typeOfMedium', 'paymentStatus'];
            this.brandPenalty = new app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_6__["BrandPenalty"]();
            this.companyPenalty = new app_core_models_company_penalty_model__WEBPACK_IMPORTED_MODULE_7__["CompanyPenalty"]();
            this.paymentType = new _models__WEBPACK_IMPORTED_MODULE_4__["PaymentType"]();
            this.attachmentDocument = new _models__WEBPACK_IMPORTED_MODULE_4__["AttachmentDocument"]();
            this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_8__["PaymentMethod"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_4__["Company"]();
            this.objAttachmentReference = {
              brandPenaltyAttachmentReference: '',
              paymentAttachmentReference: ''
            };
            this.paymentTypeList = [];
            this.brandList = [];
            this.companyList = [];
            this.companyPenaltyList = [];
            this.delinquentAppForms = [];
            this.notInSelection = ['INACTIVE', 'DISAPPROVED'];
            this.previewDocument = false;
            this.process = 'save';
            this.paymentTypeFromUrl = '';
            this.approveDelinquent = false;
            this.isShowUploadButton = false;
          }

          _createClass(AddPenaltyComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.currentUser = this.dataStorageService.getUserAccount();
              this.getPenalizedBrandList();
              this.getCompanyList();
              this.getPaymentList();
              this.id = Number(this.route.snapshot.paramMap.get('id'));
              this.paymentTypeFromUrl = this.route.snapshot.paramMap.get('type');

              if (this.id !== 0) {
                this.process = 'update';
                this.viewPayment();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              sessionStorage.removeItem('PAYMENT');
            }
          }, {
            key: "getPaymentDetails",
            value: function getPaymentDetails(elm) {
              var _a;

              if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
                this.router.navigate(['asc/page/accounting/update/', "".concat((_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase(), "-").concat(elm.id), "delinquent-".concat(elm.id)]);
              } else {
                this.router.navigate(['asc/page/accounting/update/', "delinquent-".concat(elm.id)]);
              }
            }
          }, {
            key: "getPenalizedBrandList",
            value: function getPenalizedBrandList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brand).subscribe(function (res) {
                // this.brandList = res.responseData.data.filter(penalizedBrands => penalizedBrands.penalty);
                _this.brandList = res.responseData.data;
              });
            }
          }, {
            key: "getCompanyList",
            value: function getCompanyList() {
              var _this2 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].company).subscribe(function (res) {
                _this2.companyList = res.responseData.data.filter(function (company) {
                  return !_this2.notInSelection.includes(company.status);
                });
              });
            }
          }, {
            key: "getPaymentList",
            value: function getPaymentList() {
              var _this3 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].paymentType).subscribe(function (res) {
                _this3.paymentTypeList = res.responseData.data;

                if (_this3.currentUser.userRole.name === _shared_utils_constants__WEBPACK_IMPORTED_MODULE_0__["USER_ROLES"].ROLE_APPLICANT) {
                  var creditCardIndex = _this3.paymentTypeList.findIndex(function (element) {
                    return element.paymentDescription === 'Credit Card';
                  });

                  _this3.paymentTypeList.splice(creditCardIndex, 1);
                }
              });
            }
          }, {
            key: "selectFile",
            value: function selectFile(event) {
              this.isShowUploadButton = false;

              if (event.target.files[0]) {
                this.fileSize = event.target.files[0].size;

                if (this.fileSize > 15000000) {
                  this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB.");
                  event.target.value = '';
                  return;
                } else {
                  this.isShowUploadButton = true;
                  var fileURL = URL.createObjectURL(event.target.files[0]);
                  this.previewDocument = true;
                  this.safeURLBrand = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                  var reader = new FileReader();

                  var _event$target$files = _slicedToArray(event.target.files, 1),
                      file = _event$target$files[0];

                  reader.readAsDataURL(file);

                  reader.onload = function () {};

                  this.selectedFile = event.target.files[0];
                }
              }
            }
          }, {
            key: "addPenalty",
            value: function addPenalty() {
              var _this4 = this;

              var penaltyType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Brand';
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                text: "Are you sure you want to submit this ".concat(penaltyType, " Penalty?"),
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  if (penaltyType === 'Brand') {
                    _this4.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, _this4.brandPenalty).subscribe(function (res) {
                      _this4.sweetAlertService.customSuccessMessage('Brand penalty successfully saved.');

                      _this4.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                    }, function (err) {
                      _this4.sweetAlertService.error(err);
                    });
                  } else if (penaltyType === 'Company') {
                    _this4.companyPenalty.penaltyDate = new Date();

                    _this4.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].companyPenalties, _this4.companyPenalty).subscribe(function (res) {
                      _this4.sweetAlertService.customSuccessMessage('Company penalty successfully saved.');

                      _this4.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                    }, function (err) {
                      _this4.sweetAlertService.error(err);
                    });
                  }
                }
              });
            }
          }, {
            key: "uploadProofOfPayment",
            value: function uploadProofOfPayment() {
              var _this5 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                text: 'Are you sure you want to submit this as proof of payment?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this5.spinner.show();

                  var attachmentType = '';

                  if (_this5.paymentTypeFromUrl === 'brand') {
                    attachmentType = _shared__WEBPACK_IMPORTED_MODULE_5__["ATTACHMENT_TYPE"].BRAND_PENALTY_PAYMENT;
                  } else if (_this5.paymentTypeFromUrl === 'company' || _this5.paymentTypeFromUrl === 'delinquent') {
                    attachmentType = _shared__WEBPACK_IMPORTED_MODULE_5__["ATTACHMENT_TYPE"].PAYMENT;
                  }

                  var params = '';
                  params = '?&attachmentType=' + attachmentType + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_5__["SUBMISSION_TYPE"].ORIGINAL;

                  _this5.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, _this5.selectedFile, params).subscribe(function (res) {
                    _this5.uploadedPaymentFile = res.responseData.data;

                    _this5.addToAttachmentDocuments(_this5.uploadedPaymentFile);

                    if (_this5.paymentTypeFromUrl === 'brand') {
                      _this5.brandPenalty.brandPenaltyAttachmentReference = _this5.uploadedPaymentFile.brandPenaltyAttachmentReference;
                      _this5.objAttachmentReference.brandPenaltyAttachmentReference = _this5.brandPenalty.brandPenaltyAttachmentReference;
                    } else if (_this5.paymentTypeFromUrl === 'company') {
                      _this5.companyPenalty.paymentAttachmentReference = _this5.uploadedPaymentFile.paymentAttachmentReference;
                      _this5.objAttachmentReference.paymentAttachmentReference = _this5.companyPenalty.paymentAttachmentReference;
                    } else if (_this5.paymentTypeFromUrl === 'delinquent') {
                      _this5.payment.paymentAttachmentReference = _this5.uploadedPaymentFile.paymentAttachmentReference;
                      _this5.objAttachmentReference.paymentAttachmentReference = _this5.payment.paymentAttachmentReference;
                    }

                    _this5.hideSpinner();

                    _this5.sweetAlertService.customSuccessMessage('Attachment successfully uploaded.');

                    _this5.selectedFile = null;

                    if (_this5.brandPenalty.brandPenaltyAttachmentReference || _this5.companyPenalty.paymentAttachmentReference || _this5.payment.paymentAttachmentReference === 'delinquent') {
                      _this5.getAttachmentDocument();
                    }
                  }, function (err) {
                    _this5.hideSpinner();

                    _this5.sweetAlertService.error(err);
                  }, function () {// actions after subscription
                  });
                } else {
                  _this5.selectedFile = null;
                }
              });
            }
          }, {
            key: "saveBrandPenalty",
            value: function saveBrandPenalty() {
              var _this6 = this;

              this.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, "/payment-type-id/").concat(this.paymentType.id, "/payment/submit"), this.brandPenalty).subscribe(function (res) {
                _this6.brandPenalty = new app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_6__["BrandPenalty"]();
                _this6.paymentType = new _models__WEBPACK_IMPORTED_MODULE_4__["PaymentType"]();
                _this6.attachment = null;
                _this6.previewDocument = false;

                _this6.sweetAlertService.customSuccessMessage('Voucher fund successfully submitted.');
              }, function (err) {
                console.log(err);

                _this6.sweetAlertService.error(err);
              });
            }
          }, {
            key: "approvePenalty",
            value: function approvePenalty() {
              var _this7 = this;

              if (this.paymentTypeFromUrl === 'brand') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                  text: 'Are you sure you want to approve this Brand Penalty?',
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Confirm'
                }).then(function (result) {
                  if (result.value) {
                    _this7.paymentMethod.paymentDate = new Date();
                    _this7.brandPenalty.paymentMethod = _this7.paymentMethod;
                    _this7.brandPenalty.brandPenaltyAttachmentReference = _this7.attachmentDocument.brandPenaltyAttachmentReference;
                    console.log(_this7.paymentMethod);

                    _this7.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].approveBrandPenalty, _this7.brandPenalty).subscribe(function (res) {
                      _this7.sweetAlertService.customSuccessMessage('Brand penalty approved successfully.');

                      _this7.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                    });
                  } else {
                    _this7.attachment = null;
                  }
                });
              } else if (this.paymentTypeFromUrl === 'company') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                  text: 'Are you sure you want to approve this Company Penalty?',
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Confirm'
                }).then(function (result) {
                  var _a, _b;

                  if (result.value) {
                    // this.paymentMethod.paymentDate = new Date();
                    _this7.companyPenalty.paymentMethod = _this7.paymentMethod;
                    _this7.companyPenalty.paymentAttachmentReference = _this7.attachmentDocument.paymentAttachmentReference;
                    console.log(_this7.paymentMethod);
                    console.log(_this7.companyPenalty);
                    console.log(_this7.attachmentDocument.paymentAttachmentReference);
                    _this7.companyPenaltyList[0].paymentMethod = _this7.paymentMethod;
                    _this7.companyPenaltyList[0].paymentAttachmentReference = _this7.attachmentDocument.paymentAttachmentReference;

                    _this7.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].companyPenalties, "/submit-penalty-payment?amountReceived=").concat(_this7.paymentMethod.amount, "&paymentTypeId=").concat((_b = (_a = _this7.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.id), _this7.companyPenaltyList[0]).subscribe(function (res) {
                      _this7.sweetAlertService.customSuccessMessage('Company penalty approved successfully.');

                      _this7.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                    }, function (err) {
                      if (!err.error.message) {
                        err.error.message = err.error.responseMessage;
                      }

                      _this7.sweetAlertService.error(err);
                    });
                  } else {
                    _this7.attachment = null;
                  }
                });
              } else if (this.paymentTypeFromUrl === 'delinquent') {
                if (this.paymentMethod.amount < this.payment.amountDue) {
                  this.sweetAlertService.customErrorMessage("Amount Received/Transferred is lower than Amount Due.");
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    text: 'Are you sure you want to approve this Delinquent Company?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                  }).then(function (result) {
                    if (result.value) {
                      // this.paymentMethod.paymentDate = new Date();
                      _this7.payment.paymentMethod = _this7.paymentMethod;
                      _this7.payment.amountReceive = Number(_this7.paymentMethod.amount);
                      console.log(_this7.paymentMethod);
                      console.log(_this7.payment);

                      _this7.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].approveDelinquentCompany), _this7.payment).subscribe(function (res) {
                        _this7.sweetAlertService.customSuccessMessage('Delinquent company approved successfully.');

                        _this7.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                      }, function (err) {
                        if (!err.error.message) {
                          err.error.message = err.error.responseMessage;
                        }

                        _this7.sweetAlertService.error(err);
                      });
                    } else {
                      _this7.attachment = null;
                    }
                  });
                }
              }
            }
          }, {
            key: "viewPayment",
            value: function viewPayment() {
              var _this8 = this;

              var _a, _b, _c;

              if (this.paymentTypeFromUrl === 'brand') {
                this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenalties, this.id).subscribe(function (res) {
                  var _a;

                  var obj = res.responseData.data;
                  _this8.penaltyBrand = obj.brand.description;

                  if (obj === null || obj === void 0 ? void 0 : obj.paymentMethod) {
                    _this8.paymentType = (_a = obj === null || obj === void 0 ? void 0 : obj.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType;
                    _this8.paymentMethod = obj === null || obj === void 0 ? void 0 : obj.paymentMethod;
                  }

                  _this8.brandPenalty = obj;

                  if (_this8.brandPenalty.brandPenaltyAttachmentReference) {
                    _this8.objAttachmentReference.brandPenaltyAttachmentReference = _this8.brandPenalty.brandPenaltyAttachmentReference;

                    _this8.getAttachmentDocuments();
                  }
                });
              } else if (this.paymentTypeFromUrl === 'company') {
                this.apiService.findById("".concat(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].companyPenalties, "/company"), this.id).subscribe(function (res) {
                  if (res.responseData.data) {
                    _this8.companyPenaltyList = res.responseData.data;

                    if (_this8.companyPenaltyList[0].paymentAttachmentReference) {
                      _this8.objAttachmentReference.paymentAttachmentReference = _this8.companyPenalty.paymentAttachmentReference;

                      _this8.getAttachmentDocuments();
                    }

                    _this8.penaltyCompany = _this8.companyPenaltyList[0].company.companyName;
                    _this8.totalBalance = _this8.companyPenaltyList.filter(function (filteredData) {
                      return filteredData.paymentStatus !== 'PAID';
                    }).map(function (mapped) {
                      return mapped.penaltyAmount;
                    }).reduce(function (previousValue, currentValue) {
                      return previousValue + currentValue;
                    }, 0);
                    _this8.previewRemarks = _this8.companyPenaltyList.filter(function (filteredData) {
                      return filteredData.paymentStatus !== 'PAID';
                    }).map(function (mapped) {
                      return mapped.remarks ? mapped.remarks + '. ' : '';
                    }).reduce(function (previousValue, currentValue) {
                      return previousValue + currentValue;
                    }, '');
                  }
                });
              } else if (this.paymentTypeFromUrl === 'delinquent') {
                this.payment = this.dataStorageService.getPayment();
                var companyName = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.companyName;
                this.company.companyName = companyName;
                this.getAppFormsByCompanyId((_c = this.payment) === null || _c === void 0 ? void 0 : _c.companyId);
              }
            }
          }, {
            key: "getAppFormsByCompanyId",
            value: function getAppFormsByCompanyId(companyId) {
              var _this9 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].getAppFormsByCompanyId + companyId).subscribe(function (res) {
                _this9.delinquentAppForms = res.responseData.data;
                _this9.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this9.delinquentAppForms);
                _this9.dataSource.paginator = _this9.paginator;
              });
            }
          }, {
            key: "getAttachmentDocuments",
            value: function getAttachmentDocuments() {
              var _this10 = this;

              var param;

              if (this.brandPenalty.brandPenaltyAttachmentReference) {
                param = "brand-penalty-attachment-reference/".concat(this.brandPenalty.brandPenaltyAttachmentReference);
              } else if (this.companyPenalty.paymentAttachmentReference) {
                param = "payment-attachment-reference/".concat(this.companyPenaltyList[0].paymentAttachmentReference);
              }

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].attachmentDocument, param).subscribe(function (res) {
                if (res) {
                  _this10.attachmentDocument = res.responseData.data;
                }

                _this10.previewDocument = true;
                _this10.safeURLBrand = _this10.sanitizer.bypassSecurityTrustResourceUrl(_this10.attachmentDocument.fileURL);
              });
            }
          }, {
            key: "addToAttachmentDocuments",
            value: function addToAttachmentDocuments(obj) {
              this.attachmentDocument.brandPenaltyAttachmentReference = obj.brandPenaltyAttachmentReference;
              this.attachmentDocument.id = obj.id;
              this.attachmentDocument.originalFilename = obj.originalFilename;
              this.attachmentDocument.filename = obj.filename;
              this.attachmentDocument.fileExtension = obj.fileExtension;
              this.attachmentDocument.fileURL = obj.fileURL;
              this.attachmentDocument.attachmentType = obj.attachmentType;
              this.attachmentDocument.documentFormat = obj.documentFormat;
            }
          }, {
            key: "hideSpinner",
            value: function hideSpinner() {
              var _this11 = this;

              setTimeout(function () {
                _this11.spinner.hide();
              }, 1);
            }
          }, {
            key: "getAttachmentDocument",
            value: function getAttachmentDocument() {
              var _this12 = this;

              this.spinner.show();

              if (this.paymentTypeFromUrl === 'brand') {
                this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].brandPenaltyAttachmentDocument, this.brandPenalty.brandPenaltyAttachmentReference).subscribe(function (res) {
                  if (res) {
                    _this12.attachmentDocument = res;
                  }

                  _this12.hideSpinner();
                }, function (err) {
                  _this12.hideSpinner();

                  console.error(err);
                });
              } else {
                var attachmentReference = '';

                if (this.paymentTypeFromUrl === 'company') {
                  attachmentReference = this.companyPenalty.paymentAttachmentReference;
                } else if (this.paymentTypeFromUrl === 'delinquent') {
                  attachmentReference = this.payment.paymentAttachmentReference;
                }

                this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].paymentAttachmentReference, attachmentReference).subscribe(function (res) {
                  var _a;

                  if (res) {
                    _this12.attachmentDocument = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
                  }

                  _this12.hideSpinner();
                }, function (err) {
                  _this12.hideSpinner();

                  console.error(err);
                });
              }
            }
          }, {
            key: "viewDocument",
            value: function viewDocument() {
              if (this.uploadedPaymentFile) {
                window.open(this.uploadedPaymentFile.fileURL);
              } else {
                window.open(this.attachmentDocument.fileURL);
              }
            }
          }, {
            key: "comparePaymentMethod",
            value: function comparePaymentMethod(value, selected) {
              if (value && selected) {
                return value.paymentDescription === selected.paymentDescription;
              }
            }
          }, {
            key: "compareCompany",
            value: function compareCompany(value, selected) {
              if (value && selected) {
                return value.id === selected.id;
              }
            }
          }, {
            key: "navigateToList",
            value: function navigateToList() {
              var _this13 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                text: 'Are you sure you want to go back to payment list?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  if (_this13.paymentTypeFromUrl === 'brand') {
                    _this13.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                  } else if (_this13.paymentTypeFromUrl === 'company') {
                    _this13.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                  } else if (_this13.paymentTypeFromUrl === 'delinquent') {
                    _this13.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                  }
                }
              });
            }
          }, {
            key: "updatePayment",
            value: function updatePayment() {
              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_5__["ENDPOINTS"].companyPenalties, this.companyPenalty).subscribe(function (res) {
                console.log('Update companyPenalties: ', res);
              }, function (err) {
                console.log(err);
              });
            }
          }]);

          return AddPenaltyComponent;
        }();

        AddPenaltyComponent.ɵfac = function AddPenaltyComponent_Factory(t) {
          return new (t || AddPenaltyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_11__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_11__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_13__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_15__["ValidateFieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_11__["DataStorageService"]));
        };

        AddPenaltyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: AddPenaltyComponent,
          selectors: [["app-add-penalty"]],
          viewQuery: function AddPenaltyComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            }
          },
          inputs: {
            safeURLBrand: "safeURLBrand"
          },
          decls: 24,
          vars: 8,
          consts: [[1, "container-fluid"], [1, "row"], [1, "column"], [1, "col-md-12", "title"], ["mat-raised-button", "", 1, "button-right", "button-red", "button-center", 3, "click"], [1, "material-icons", "color__white"], ["class", "col-md-12", "appearance", "outline", 4, "ngIf"], ["class", "column", 4, "ngIf"], ["approveDelinquent", ""], ["addBrandPenalty", ""], ["addCompanyPenalty", ""], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], ["class", "file-upload", "type", "file", "accept", ".pdf", 3, "hidden", "change", 4, "ngIf"], ["matInput", "", "disabled", "", 3, "value"], ["type", "file", "accept", ".pdf", 1, "file-upload", 3, "hidden", "change"], [4, "ngTemplateOutlet"], ["mat-raised-button", "", "class", "button-red button-right", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-red button-right", 3, "disabled", "hidden", "click", 4, "ngIf"], ["class", "row col-md-12", "appearance", "outline", 4, "ngIf"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "click"], [1, "material-icons", "add-document"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "disabled", "hidden", "click"], ["appearance", "outline", 1, "row", "col-md-12"], [1, "file-upload"], ["type", "application/pdf", "width", "100%", "height", "400", 3, "data"], ["width", "100%", "height", "400", 3, "src"], [1, "col-md-12", 2, "padding", "0 2em"], ["matInput", "", "name", "penaltyBrand", "readonly", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "name", "amountDue", "type", "text", "readonly", "", 1, "numbers-input", 3, "value", "keydown"], [1, "mat-elevation-z8", "fields"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "referenceCode"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "brand"], ["matColumnDef", "typeOfMedium"], ["matColumnDef", "paymentStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-raised-button", "", "class", "button-right button-red", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "click"], ["matInput", "", "name", "amount", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange", "keydown"], ["matInput", "", "name", "remarks", 3, "ngModel", "ngModelOptions", "readonly", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "class", "button-right button-red button-right__approve", 3, "click", 4, "ngIf"], [1, "col-md-4", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "brand", 3, "value", 4, "ngFor", "ngForOf"], ["name", "brand", 3, "value"], ["name", "paymentType", 1, "col-md-4", 3, "ngModel", "compareWith", "disabled", "ngModelChange"], ["name", "paymentType", 3, "value", 4, "ngFor", "ngForOf"], ["name", "paymentType", 3, "value"], ["matInput", "", "name", "amount", "type", "text", 3, "ngModel", "ngModelOptions", "readonly", "ngModelChange", "keydown"], ["mat-raised-button", "", 1, "button-right", "button-red", "button-right__approve", 3, "click"], [1, "col-md-4", 3, "ngModel", "ngModelOptions", "compareWith", "ngModelChange"], ["name", "company", 3, "value", 4, "ngFor", "ngForOf"], ["name", "company", 3, "value"], ["matInput", "", "name", "penaltyCompany", "readonly", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "name", "totalBalance", "readonly", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "name", "remarks", 3, "ngModel", "readonly", "ngModelOptions", "ngModelChange"], ["matInput", "", "name", "previewRemarks", "readonly", "", 3, "ngModel", "ngModelOptions", "ngModelChange"]],
          template: function AddPenaltyComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPenaltyComponent_Template_button_click_8_listener() {
                return ctx.navigateToList();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "list");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " BACK TO LIST ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddPenaltyComponent_div_13_Template, 8, 2, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddPenaltyComponent_div_14_Template, 2, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddPenaltyComponent_div_15_Template, 7, 3, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddPenaltyComponent_div_16_Template, 2, 1, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddPenaltyComponent_div_17_Template, 2, 1, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddPenaltyComponent_ng_template_18_Template, 32, 14, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddPenaltyComponent_ng_template_20_Template, 18, 14, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddPenaltyComponent_ng_template_22_Template, 14, 11, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, ctx.paymentTypeFromUrl), " Penalties ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentTypeFromUrl === "brand" || ctx.paymentTypeFromUrl === "company");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentTypeFromUrl === "delinquent");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentTypeFromUrl === "brand" || ctx.paymentTypeFromUrl === "company" || ctx.paymentTypeFromUrl === "delinquent");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentTypeFromUrl === "brand");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentTypeFromUrl === "company");
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgTemplateOutlet"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["UpperCasePipe"]],
          styles: [".column[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.button-right__approve[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.button-center[_ngcontent-%COMP%] {\n  margin: -5px auto;\n}\n\n.numbers-input[_ngcontent-%COMP%] {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2FkZC1wZW5hbHR5L2FkZC1wZW5hbHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnRpbmcvYWRkLXBlbmFsdHkvYWRkLXBlbmFsdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5idXR0b24tcmlnaHRfX2FwcHJvdmUge1xyXG4gICAgLy8gbWFyZ2luOiAtMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAtNXB4IGF1dG87XHJcbn1cclxuXHJcbi5udW1iZXJzLWlucHV0e1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4iXX0= */"]
        });
        return AddPenaltyComponent;
      }();
      /***/

    },

    /***/
    "p7Is":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: AddPenaltyRoutingModule */

    /***/
    function p7Is(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPenaltyRoutingModule", function () {
        return AddPenaltyRoutingModule;
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


      var _add_penalty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-penalty.component */
      "YOXF");

      var routes = [{
        path: '',
        component: _add_penalty_component__WEBPACK_IMPORTED_MODULE_2__["AddPenaltyComponent"]
      }];

      var AddPenaltyRoutingModule = /*@__PURE__*/function () {
        var AddPenaltyRoutingModule = /*#__PURE__*/_createClass(function AddPenaltyRoutingModule() {
          _classCallCheck(this, AddPenaltyRoutingModule);
        });

        AddPenaltyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AddPenaltyRoutingModule
        });
        AddPenaltyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AddPenaltyRoutingModule_Factory(t) {
            return new (t || AddPenaltyRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AddPenaltyRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPenaltyRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "z52K":
    /*!****************************************************!*\
      !*** ./src/app/core/models/brand-penalty.model.ts ***!
      \****************************************************/

    /*! exports provided: BrandPenalty */

    /***/
    function z52K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandPenalty", function () {
        return BrandPenalty;
      });

      var BrandPenalty = /*#__PURE__*/_createClass(function BrandPenalty() {
        _classCallCheck(this, BrandPenalty);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=add-penalty-add-penalty-module-es5.js.map