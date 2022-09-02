(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-payment-add-payment-module~applications-applications-module"], {
    /***/
    "1wm5":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-payment/add-payment-preview-application/add-payment-preview-application.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: AddPaymentPreviewApplicationComponent */

    /***/
    function wm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPaymentPreviewApplicationComponent", function () {
        return AddPaymentPreviewApplicationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/models/application-single-media.model */
      "XLGj");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      function AddPaymentPreviewApplicationComponent_div_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Media Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.previewS1Application == null ? null : ctx_r0.previewS1Application.refTypeOfMedium);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type of Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.applicationSingleMedia == null ? null : ctx_r3.applicationSingleMedia.mediumExecution == null ? null : ctx_r3.applicationSingleMedia.mediumExecution.typeOfMedium == null ? null : ctx_r3.applicationSingleMedia.mediumExecution.typeOfMedium.description);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Execution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.applicationSingleMedia == null ? null : ctx_r4.applicationSingleMedia.mediumExecution == null ? null : ctx_r4.applicationSingleMedia.mediumExecution.typeOfExecution == null ? null : ctx_r4.applicationSingleMedia.mediumExecution.typeOfExecution.typeOfExecution);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Language/Dialect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.applicationSingleMedia == null ? null : ctx_r5.applicationSingleMedia.dialect == null ? null : ctx_r5.applicationSingleMedia.dialect.dialect);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.applicationSingleMedia == null ? null : ctx_r6.applicationSingleMedia.others);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Size / Length");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r7.applicationSingleMedia == null ? null : ctx_r7.applicationSingleMedia.sizeLength);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.applicationSingleMedia == null ? null : ctx_r8.applicationSingleMedia.width);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPaymentPreviewApplicationComponent_div_99_div_1_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPaymentPreviewApplicationComponent_div_99_div_2_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPaymentPreviewApplicationComponent_div_99_div_3_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddPaymentPreviewApplicationComponent_div_99_div_4_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddPaymentPreviewApplicationComponent_div_99_div_5_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddPaymentPreviewApplicationComponent_div_99_div_6_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationSingleMedia == null ? null : ctx_r1.applicationSingleMedia.mediumExecution == null ? null : ctx_r1.applicationSingleMedia.mediumExecution.typeOfMedium == null ? null : ctx_r1.applicationSingleMedia.mediumExecution.typeOfMedium.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationSingleMedia == null ? null : ctx_r1.applicationSingleMedia.mediumExecution);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationSingleMedia == null ? null : ctx_r1.applicationSingleMedia.dialect);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationSingleMedia == null ? null : ctx_r1.applicationSingleMedia.others);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationSingleMedia == null ? null : ctx_r1.applicationSingleMedia.sizeLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationSingleMedia == null ? null : ctx_r1.applicationSingleMedia.width);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_tr_1_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Size ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_tr_1_input_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 4);
        }

        if (rf & 2) {
          var i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r12 == null ? null : i_r12.sizeLength);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_tr_1_td_5_Template, 2, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_tr_1_input_7_Template, 1, 1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", i_r12 == null ? null : i_r12.hasSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, i_r12 == null ? null : i_r12.multimediaStaticMedium), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.previewS1Application == null ? null : ctx_r13.previewS1Application.refTypeOfMedium) === "MULTIMEDIA-STATIC" && (i_r12 == null ? null : i_r12.multimediaStaticMedium) !== "digital static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.previewS1Application == null ? null : ctx_r13.previewS1Application.refTypeOfMedium) === "MULTIMEDIA-STATIC" && (i_r12 == null ? null : i_r12.multimediaStaticMedium) !== "digital static");
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_tr_1_Template, 9, 6, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r12 == null ? null : i_r12.hasSelected);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPaymentPreviewApplicationComponent_div_100_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.multimediaDTO.applicationMultimediaStaticList);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_tr_1_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Length");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_tr_1_input_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 4);
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r22.multimediaDTO == null ? null : ctx_r22.multimediaDTO.sizeLength);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_tr_1_td_5_Template, 2, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_tr_1_input_7_Template, 1, 1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, i_r19 == null ? null : i_r19.multimediaMovingMedium), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.previewS1Application == null ? null : ctx_r20.previewS1Application.refTypeOfMedium) === "MULTIMEDIA-MOVING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.previewS1Application == null ? null : ctx_r20.previewS1Application.refTypeOfMedium) === "MULTIMEDIA-MOVING");
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_tr_1_Template, 9, 6, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r19 == null ? null : i_r19.hasSelected);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPaymentPreviewApplicationComponent_div_100_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.multimediaDTO.applicationMultimediaMovingList);
        }
      }

      function AddPaymentPreviewApplicationComponent_div_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPaymentPreviewApplicationComponent_div_100_ng_container_2_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPaymentPreviewApplicationComponent_div_100_ng_container_3_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.previewS1Application == null ? null : ctx_r2.previewS1Application.refTypeOfMedium) === "MULTIMEDIA-STATIC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.previewS1Application == null ? null : ctx_r2.previewS1Application.refTypeOfMedium) === "MULTIMEDIA-MOVING");
        }
      }

      var AddPaymentPreviewApplicationComponent = /*@__PURE__*/function () {
        var AddPaymentPreviewApplicationComponent = /*#__PURE__*/function () {
          function AddPaymentPreviewApplicationComponent(apiService) {
            _classCallCheck(this, AddPaymentPreviewApplicationComponent);

            this.apiService = apiService;
            this.applicationSingleMedia = new _core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_3__["ApplicationSingleMedia"]();
            this.multimediaDTO = {};
            this.presentorDetails = new _models__WEBPACK_IMPORTED_MODULE_1__["UserAccount"]();
            this.multimediaMovingList = [];
            this.multimediaStaticList = [];
          }

          _createClass(AddPaymentPreviewApplicationComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes['previewS1Application']) {
                this.getPresentorDetails();
              }
            }
          }, {
            key: "getPresentorDetails",
            value: function getPresentorDetails() {
              var _this = this;

              var _a, _b;

              if ((_b = (_a = this.previewS1Application) === null || _a === void 0 ? void 0 : _a.applicationOwner) === null || _b === void 0 ? void 0 : _b.username) {
                this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].userLogin, this.previewS1Application.applicationOwner.username).subscribe(function (res) {
                  if (res.responseData.data) {
                    _this.presentorDetails = res.responseData.data;
                  }
                });
              }
            }
          }]);

          return AddPaymentPreviewApplicationComponent;
        }();

        AddPaymentPreviewApplicationComponent.ɵfac = function AddPaymentPreviewApplicationComponent_Factory(t) {
          return new (t || AddPaymentPreviewApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
        };

        AddPaymentPreviewApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AddPaymentPreviewApplicationComponent,
          selectors: [["app-add-payment-preview-application"]],
          inputs: {
            previewS1Application: "previewS1Application",
            applicationSingleMedia: "applicationSingleMedia",
            multimediaDTO: "multimediaDTO"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 101,
          vars: 18,
          consts: [[1, "row", "fields"], [1, "material-icons"], [1, "row"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "disabled", "", 3, "value"], ["appearance", "outline", 1, "col-md-12", "mb-3"], [1, "row", "col-md-12", "mb-4"], ["appearance", "outline", 1, "col-md-6", "mb-3"], ["appearance", "outline", 1, "col-md-12"], ["appearance", "outline", 1, "col-md-6"], ["class", "row", 4, "ngIf"], ["class", "col-md-3", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "col-md-3"], [1, "mx-3", "mb-3"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "height: 30px;", 4, "ngIf"], [2, "height", "30px"], [1, "col-md-4"], ["disabled", "", 3, "checked"], ["class", "col-md-1", 4, "ngIf"], [1, "col-md-2"], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], [1, "col-md-5"], [1, "col-md-1"], ["style", "height: 30px;", 4, "ngFor", "ngForOf"]],
          template: function AddPaymentPreviewApplicationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "preview");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CLIENT'S INFORMATION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Client Company Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Client Membership Affiliation");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Brand");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Product");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Category");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "preview");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \xA0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "PRESENTOR INFORMATION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Name of Applicant");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Company Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mobile Number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Email Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Telephone Number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Alternate Telephone Number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "i", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "preview");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \xA0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "MATERIAL INFORMATION");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Ad Title");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Reference Code of Previously-Approved Material");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Tag line");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AddPaymentPreviewApplicationComponent_div_96_Template, 5, 1, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AddPaymentPreviewApplicationComponent_div_99_Template, 7, 6, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, AddPaymentPreviewApplicationComponent_div_100_Template, 4, 2, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.company == null ? null : ctx.previewS1Application.company.companyName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.company == null ? null : ctx.previewS1Application.company.membersAffiliation == null ? null : ctx.previewS1Application.company.membersAffiliation.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.brand == null ? null : ctx.previewS1Application.brand.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.product == null ? null : ctx.previewS1Application.product.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.product == null ? null : ctx.previewS1Application.product.category == null ? null : ctx.previewS1Application.product.category.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx.presentorDetails == null ? null : ctx.presentorDetails.firstName) + " " + (ctx.presentorDetails == null ? null : ctx.presentorDetails.lastName));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.presentorDetails == null ? null : ctx.presentorDetails.company == null ? null : ctx.presentorDetails.company.companyName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.presentorDetails == null ? null : ctx.presentorDetails.company == null ? null : ctx.presentorDetails.company.completeAddress);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.presentorDetails == null ? null : ctx.presentorDetails.mobileNumber);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.presentorDetails == null ? null : ctx.presentorDetails.username);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.presentorDetails == null ? null : ctx.presentorDetails.company == null ? null : ctx.presentorDetails.company.companyTelephoneNo);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.presentorDetails == null ? null : ctx.presentorDetails.company == null ? null : ctx.presentorDetails.company.companyTelephoneNo2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.adTitle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.previousRefCode);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.previewS1Application == null ? null : ctx.previewS1Application.tagLine);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewS1Application == null ? null : ctx.previewS1Application.refTypeOfMedium);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationSingleMedia);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multimediaDTO);
            }
          },
          directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]],
          encapsulation: 2
        });
        return AddPaymentPreviewApplicationComponent;
      }();
      /***/

    },

    /***/
    "9Ls8":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-payment/add-payment.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AddPaymentModule */

    /***/
    function Ls8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPaymentModule", function () {
        return AddPaymentModule;
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


      var _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-payment-routing.module */
      "lL+D");
      /* harmony import */


      var _add_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-payment.component */
      "N5VM");
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


      var _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-payment-preview-application/add-payment-preview-application.component */
      "1wm5");

      var AddPaymentModule = /*@__PURE__*/function () {
        var AddPaymentModule = /*#__PURE__*/_createClass(function AddPaymentModule() {
          _classCallCheck(this, AddPaymentModule);
        });

        AddPaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AddPaymentModule
        });
        AddPaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AddPaymentModule_Factory(t) {
            return new (t || AddPaymentModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddPaymentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]]
        });
        return AddPaymentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPaymentModule, {
          declarations: [_add_payment_component__WEBPACK_IMPORTED_MODULE_3__["AddPaymentComponent"], _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_7__["AddPaymentPreviewApplicationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddPaymentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]],
          exports: [_add_payment_component__WEBPACK_IMPORTED_MODULE_3__["AddPaymentComponent"], _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_7__["AddPaymentPreviewApplicationComponent"]]
        });
      })();
      /***/

    },

    /***/
    "N5VM":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-payment/add-payment.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AddPaymentComponent */

    /***/
    function N5VM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPaymentComponent", function () {
        return AddPaymentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/payment-method.model */
      "piSE");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/core/models/application-single-media.model */
      "XLGj");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./add-payment-preview-application/add-payment-preview-application.component */
      "1wm5");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      function AddPaymentComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " PAYMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPaymentComponent_div_2_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.navigateToList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " VIEW LIST OF PAYMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r1.payment == null ? null : ctx_r1.payment.paymentStatus) != "PAID" && ctx_r1.safeURL != undefined ? "FOR APPROVAL" : ctx_r1.payment == null ? null : ctx_r1.payment.paymentStatus, " ");
        }
      }

      function AddPaymentComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type Of Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_23_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 33);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r17.attachmentDocument.originalFilename);
        }
      }

      function AddPaymentComponent_div_23_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddPaymentComponent_div_23_input_5_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filename: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddPaymentComponent_div_23_input_4_Template, 1, 1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddPaymentComponent_div_23_input_5_Template, 1, 0, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.attachmentDocument.originalFilename);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.attachmentDocument.originalFilename && ctx_r3.paymentTypeFromUrl !== "paid");
        }
      }

      function AddPaymentComponent_div_24_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPaymentComponent_div_24_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.viewDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "open_in_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " VIEW DOCUMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_24_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPaymentComponent_div_24_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.uploadProofOfPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " UPLOAD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r22.safeURL || !ctx_r22.isShowUploadButton);
        }
      }

      function AddPaymentComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPaymentComponent_div_24_button_1_Template, 4, 0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPaymentComponent_div_24_button_3_Template, 4, 1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.attachmentDocument == null ? null : ctx_r4.attachmentDocument.paymentAttachmentReference);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isShowUploadButton && !ctx_r4.attachmentDocument.originalFilename);
        }
      }

      function AddPaymentComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "object", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "iframe", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This browser does not support PDF!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", (ctx_r5.payment == null ? null : ctx_r5.payment.paymentStatus) === "PAID" || (ctx_r5.payment == null ? null : ctx_r5.payment.paymentStatus) === "UNPAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r5.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function AddPaymentComponent_div_57_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reference Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_57_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r37 == null ? null : element_r37.referenceCode);
        }
      }

      function AddPaymentComponent_div_57_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ad Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_57_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r39 == null ? null : element_r39.adTitle);
        }
      }

      function AddPaymentComponent_div_57_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Medium And Length");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_57_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r41 == null ? null : element_r41.typeOfMediumDisplay);
        }
      }

      function AddPaymentComponent_div_57_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_57_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r43 == null ? null : element_r43.amount, "1.2-2"));
        }
      }

      function AddPaymentComponent_div_57_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
        }
      }

      function AddPaymentComponent_div_57_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 56);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      function AddPaymentComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddPaymentComponent_div_57_th_3_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddPaymentComponent_div_57_td_4_Template, 2, 1, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddPaymentComponent_div_57_th_6_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddPaymentComponent_div_57_td_7_Template, 2, 1, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddPaymentComponent_div_57_th_9_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddPaymentComponent_div_57_td_10_Template, 2, 1, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddPaymentComponent_div_57_th_12_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddPaymentComponent_div_57_td_13_Template, 3, 4, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddPaymentComponent_div_57_tr_14_Template, 1, 0, "tr", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddPaymentComponent_div_57_tr_15_Template, 1, 0, "tr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " No record found. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-paginator", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r6.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.dataSource && (ctx_r6.dataSource == null ? null : ctx_r6.dataSource.data == null ? null : ctx_r6.dataSource.data.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      }

      function AddPaymentComponent_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_mat_option_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, i_r46 == null ? null : i_r46.paymentDescription), " ");
        }
      }

      function AddPaymentComponent_div_79_mat_datepicker_toggle_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-datepicker-toggle", 66);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r48);
        }
      }

      function AddPaymentComponent_div_79_mat_form_field_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_79_mat_form_field_18_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.paymentMethod.ccConfirmationCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r49.paymentMethod.ccConfirmationCode)("readonly", ctx_r49.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r49.payment == null ? null : ctx_r49.payment.paymentStatus) == "PAID");
        }
      }

      function AddPaymentComponent_div_79_input_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r50.paymentMethod == null ? null : ctx_r50.paymentMethod.amount, "1.2-2"));
        }
      }

      function AddPaymentComponent_div_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reference Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_79_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.paymentMethod.referenceNo = $event;
          })("blur", function AddPaymentComponent_div_79_Template_input_blur_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_79_Template_input_keyup_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fund Transfer Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_79_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.paymentMethod.paymentDate = $event;
          })("dateChange", function AddPaymentComponent_div_79_Template_input_dateChange_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_79_Template_input_keyup_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddPaymentComponent_div_79_mat_datepicker_toggle_15_Template, 1, 1, "mat-datepicker-toggle", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-datepicker", 62, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddPaymentComponent_div_79_mat_form_field_18_Template, 7, 2, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Amount Transferred ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_79_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.paymentMethod.amount = $event;
          })("keydown", function AddPaymentComponent_div_79_Template_input_keydown_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r61.validateFieldService.numbersOnly($event);
          })("blur", function AddPaymentComponent_div_79_Template_input_blur_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_79_Template_input_keyup_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddPaymentComponent_div_79_input_26_Template, 2, 4, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.paymentMethod.referenceNo)("readonly", ctx_r9.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r9.payment == null ? null : ctx_r9.payment.paymentStatus) == "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r48)("min", ctx_r9.currentDate)("ngModel", ctx_r9.paymentMethod.paymentDate)("readonly", (ctx_r9.currentUser == null ? null : ctx_r9.currentUser.userRole.name) != "ROLE_ACCOUNTING" || (ctx_r9.payment == null ? null : ctx_r9.payment.paymentStatus) == "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.payment == null ? null : ctx_r9.payment.paymentStatus) !== "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.paymentMethod == null ? null : ctx_r9.paymentMethod.paymentType == null ? null : ctx_r9.paymentMethod.paymentType.paymentDescription) === "PayMaya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.paymentMethod.amount)("hidden", ctx_r9.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r9.payment == null ? null : ctx_r9.payment.paymentStatus) == "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r9.payment == null ? null : ctx_r9.payment.paymentStatus) == "PAID");
        }
      }

      function AddPaymentComponent_div_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Control Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_80_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r64.paymentMethod.controlNo = $event;
          })("blur", function AddPaymentComponent_div_80_Template_input_blur_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r66.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_80_Template_input_keyup_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r67.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.paymentMethod.controlNo)("readonly", ctx_r10.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r10.payment == null ? null : ctx_r10.payment.paymentStatus) == "PAID");
        }
      }

      function AddPaymentComponent_div_81_mat_form_field_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmation Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_81_mat_form_field_8_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.paymentMethod.ccConfirmationCode = $event;
          })("blur", function AddPaymentComponent_div_81_mat_form_field_8_Template_input_blur_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r75.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_81_mat_form_field_8_Template_input_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r76.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r68.paymentMethod.ccConfirmationCode)("readonly", ctx_r68.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r68.payment == null ? null : ctx_r68.payment.paymentStatus) == "PAID");
        }
      }

      function AddPaymentComponent_div_81_mat_form_field_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_81_mat_form_field_9_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.paymentMethod.checkNo = $event;
          })("blur", function AddPaymentComponent_div_81_mat_form_field_9_Template_input_blur_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r79.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_81_mat_form_field_9_Template_input_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r69.paymentMethod.checkNo)("readonly", ctx_r69.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r69.payment == null ? null : ctx_r69.payment.paymentStatus) == "PAID");
        }
      }

      function AddPaymentComponent_div_81_input_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
        }

        if (rf & 2) {
          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r70.paymentMethod == null ? null : ctx_r70.paymentMethod.amount, "1.2-2"));
        }
      }

      function AddPaymentComponent_div_81_mat_form_field_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Branch ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_81_mat_form_field_18_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r81.paymentMethod.bankBranch = $event;
          })("blur", function AddPaymentComponent_div_81_mat_form_field_18_Template_input_blur_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r83.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_81_mat_form_field_18_Template_input_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r84.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r71.paymentMethod.bankBranch)("readonly", ctx_r71.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r71.payment == null ? null : ctx_r71.payment.paymentStatus) == "PAID");
        }
      }

      function AddPaymentComponent_div_81_mat_form_field_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deposited Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_81_mat_form_field_19_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r86.paymentMethod.paymentDate = $event;
          })("dateChange", function AddPaymentComponent_div_81_mat_form_field_19_Template_input_dateChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r88.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_81_mat_form_field_19_Template_input_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r89.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", 75, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r85)("ngModel", ctx_r72.paymentMethod.paymentDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r85);
        }
      }

      function AddPaymentComponent_div_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bank Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_81_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r90.paymentMethod.bankName = $event;
          })("blur", function AddPaymentComponent_div_81_Template_input_blur_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r92.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_81_Template_input_keyup_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r93.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddPaymentComponent_div_81_mat_form_field_8_Template, 7, 2, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddPaymentComponent_div_81_mat_form_field_9_Template, 7, 2, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount Transferred ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "notification_important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_div_81_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r94.paymentMethod.amount = $event;
          })("blur", function AddPaymentComponent_div_81_Template_input_blur_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r95.paymentTypevalidator();
          })("keyup", function AddPaymentComponent_div_81_Template_input_keyup_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r96.paymentTypevalidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddPaymentComponent_div_81_input_17_Template, 2, 4, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddPaymentComponent_div_81_mat_form_field_18_Template, 7, 2, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddPaymentComponent_div_81_mat_form_field_19_Template, 10, 3, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.paymentMethod.bankName)("readonly", ctx_r11.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r11.payment == null ? null : ctx_r11.payment.paymentStatus) == "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.paymentMethod == null ? null : ctx_r11.paymentMethod.paymentType == null ? null : ctx_r11.paymentMethod.paymentType.paymentDescription) === "Credit Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.paymentMethod == null ? null : ctx_r11.paymentMethod.paymentType == null ? null : ctx_r11.paymentMethod.paymentType.paymentDescription) === "Check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.paymentMethod.amount)("hidden", ctx_r11.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r11.payment == null ? null : ctx_r11.payment.paymentStatus) == "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx_r11.payment == null ? null : ctx_r11.payment.paymentStatus) == "PAID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.paymentMethod == null ? null : ctx_r11.paymentMethod.paymentType == null ? null : ctx_r11.paymentMethod.paymentType.paymentDescription) === "Bank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.paymentMethod == null ? null : ctx_r11.paymentMethod.paymentType == null ? null : ctx_r11.paymentMethod.paymentType.paymentDescription) === "Bank");
        }
      }

      function AddPaymentComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Applicant Company Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accumulated Amount to be settled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r12.isForPayment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r12.isForPayment);
        }
      }

      function AddPaymentComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Client Company Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accumulated Amount to be settled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r13.isForPayment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r13.isForPayment);
        }
      }

      function AddPaymentComponent_div_88_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPaymentComponent_div_88_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r99.approvePenalty();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "task_alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " APPROVE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (!ctx_r97.paymentForm.valid || !(ctx_r97.payment == null ? null : ctx_r97.payment.paymentAttachmentReference) || !ctx_r97.isPaymentTypeValid) && ((ctx_r97.paymentMode == null ? null : ctx_r97.paymentMode.toUpperCase()) !== "PROMISORRY NOTE" && (ctx_r97.paymentMethod.paymentType == null ? null : ctx_r97.paymentMethod.paymentType.paymentDescription == null ? null : ctx_r97.paymentMethod.paymentType.paymentDescription.toUpperCase()) !== "PROMISORRY NOTE" || !ctx_r97.payment.paymentAttachmentReference));
        }
      }

      function AddPaymentComponent_div_88_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPaymentComponent_div_88_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r101.rejectPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "unpublished");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " REJECT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPaymentComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPaymentComponent_div_88_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r103.processPayment(ctx_r103.payment == null ? null : ctx_r103.payment.remarks);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "offline_pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " PROCESS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddPaymentComponent_div_88_button_6_Template, 4, 1, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddPaymentComponent_div_88_button_8_Template, 4, 0, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r14.isDelinquent)("disabled", (!ctx_r14.paymentForm.valid || !(ctx_r14.payment == null ? null : ctx_r14.payment.paymentAttachmentReference) || !ctx_r14.isPaymentTypeValid) && ((ctx_r14.paymentMode == null ? null : ctx_r14.paymentMode.toUpperCase()) !== "PROMISORRY NOTE" && (ctx_r14.paymentMethod.paymentType == null ? null : ctx_r14.paymentMethod.paymentType.paymentDescription == null ? null : ctx_r14.paymentMethod.paymentType.paymentDescription.toUpperCase()) !== "PROMISORRY NOTE" || !ctx_r14.payment.paymentAttachmentReference));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isDelinquent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isForApproval);
        }
      }

      var AddPaymentComponent = /*@__PURE__*/function () {
        var AddPaymentComponent = /*#__PURE__*/function () {
          function AddPaymentComponent(apiService, sanitizer, formBuilder, route, router, fileStorageService, dataStorage, validateFieldService, spinner, sweetAlertService) {
            _classCallCheck(this, AddPaymentComponent);

            this.apiService = apiService;
            this.sanitizer = sanitizer;
            this.formBuilder = formBuilder;
            this.route = route;
            this.router = router;
            this.fileStorageService = fileStorageService;
            this.dataStorage = dataStorage;
            this.validateFieldService = validateFieldService;
            this.spinner = spinner;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ["referenceCode", "adTitle", "mediumAndLength", "amount"];
            this.multipleApplicationList = [];
            this.paymentTypeFromUrl = "";
            this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_1__["S1Application"]();
            this.attachmentDocument = new _models__WEBPACK_IMPORTED_MODULE_1__["AttachmentDocument"]();
            this.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_8__["ApplicationSingleMedia"]();
            this.typeOfMediumDisplay = "";
            this.paymentTypeList = [];
            this.attachmentDocuments = [];
            this.payment = new _models__WEBPACK_IMPORTED_MODULE_1__["Payment"]();
            this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"]();
            this.currentDate = new Date();
            this.paymentTemp = new _models__WEBPACK_IMPORTED_MODULE_1__["Payment"]();
            this.isMultiple = false;
            this.isSpecial = false;
            this.isForPayment = false;
            this.isForApproval = false;
            this.isPaymentTypeValid = false;
            this.isDelinquent = false;
            this.isShowUploadButton = false;
            this.previewDocument = false;
            this.proofOfPayment = [{
              id: 1,
              name: "Schedule of Fees - Individual"
            }, {
              id: 2,
              name: "Schedule of Fees - Multiple"
            }, {
              id: 3,
              name: "Schedule of Fees - Special"
            }, {
              id: 4,
              name: "Settlement of Delinquent Status"
            }, {
              id: 5,
              name: "Settlement of Brand Penalties"
            }, {
              id: 6,
              name: "Settlement of Company Penalties"
            }];
            this.multimediaDTO = {};
          }

          _createClass(AddPaymentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.currentUser = this.dataStorage.getUserAccount();
              this.paymentTypeFromUrl = this.route.snapshot.paramMap.get("id").split("-")[0];
              this.id = this.route.snapshot.paramMap.get("id").split("-")[1];
              this.getPaymentList();
              this.setFormValidator();
              this.initData();
            }
          }, {
            key: "initData",
            value: function initData() {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

              if (((_a = this.paymentTypeFromUrl) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "for_payment") {
                this.isForPayment = true;
              }

              if (((_b = this.paymentTypeFromUrl) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === "for_approval") {
                this.isForApproval = true;
              }

              if ((_f = (_e = (_d = (_c = this.route) === null || _c === void 0 ? void 0 : _c.snapshot) === null || _d === void 0 ? void 0 : _d.paramMap) === null || _e === void 0 ? void 0 : _e.get("status")) === null || _f === void 0 ? void 0 : _f.includes("multiple-")) {
                this.isMultiple = true;
                this.paymentTypeFromUrl = "multiple";
              }

              if ((_j = (_h = (_g = this.route) === null || _g === void 0 ? void 0 : _g.snapshot) === null || _h === void 0 ? void 0 : _h.params) === null || _j === void 0 ? void 0 : _j.id.includes("special-")) {
                this.isSpecial = true;
                this.paymentTypeFromUrl = "special";
              }

              if ((_o = (_m = (_l = (_k = this.route) === null || _k === void 0 ? void 0 : _k.snapshot) === null || _l === void 0 ? void 0 : _l.paramMap) === null || _m === void 0 ? void 0 : _m.get("status")) === null || _o === void 0 ? void 0 : _o.includes("delinquent-")) {
                this.isDelinquent = true;
                this.paymentTypeFromUrl = "delinquent";
              }

              if (this.id !== 0 && this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_2__["USER_ROLES"].ROLE_ACCOUNTING) {
                if (this.isForPayment || this.isSpecial || ((_p = this.paymentTypeFromUrl) === null || _p === void 0 ? void 0 : _p.toLowerCase()) === "unpaid" || this.isMultiple) {
                  this.getPaymentDetails();
                } else {
                  this.viewPayment();
                }

                if (this.isMultiple) {
                  this.getMultipleApplicationList();
                }
              }
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.paymentForm = this.formBuilder.group({
                paymentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                referenceNo: [""],
                amount: [""],
                paymentDate: [""],
                bankName: [""],
                bankBranch: [""],
                controlNo: [""],
                referenceNumber: [""],
                typeOfMaterial: [""],
                length: [""],
                baseRate: [""],
                vat: [""],
                total: [""],
                remarks: [""],
                applicantCompanyDetails: [""],
                accumulatedAmountToBeSettled: [""],
                clientCompanyDetails: [""],
                discount: [""],
                amountReceive: [""],
                filedBirForm: [""],
                withholdingTax: [0],
                orNo: [""],
                ccConfirmationCode: [""],
                checkNo: [""]
              });
            }
          }, {
            key: "approvePenalty",
            value: function approvePenalty() {
              var _this2 = this;

              if (this.paymentMethod.amount < this.payment.amountDue) {
                this.sweetAlertService.customErrorMessage("Amount Received/Transferred is lower than Amount Due.");
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  text: "Are you sure you want to approve this Delinquent Company?",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Confirm"
                }).then(function (result) {
                  if (result.value) {
                    _this2.payment.paymentMethod = _this2.paymentMethod;
                    _this2.payment.amountReceive = Number(_this2.paymentMethod.amount);

                    _this2.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].approveDelinquentCompany), _this2.payment).subscribe(function (res) {
                      _this2.sweetAlertService.customSuccessMessage("Delinquent company approved successfully.");

                      _this2.router.navigate(["asc/page/accounting/payments/", "delinquent-companies"]);
                    }, function (err) {
                      if (!err.error.message) {
                        err.error.message = err.error.responseMessage;
                      }

                      _this2.sweetAlertService.error(err);
                    });
                  }
                });
              }
            }
          }, {
            key: "paymentTypevalidator",
            value: function paymentTypevalidator() {
              var _a, _b;

              var a = this.paymentMethod;
              var b = (_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.paymentDescription;

              if (b === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].GCASH || b === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].CASH) {
                if (a.referenceNo && a.paymentDate && a.amount ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) {}
              } else if (b === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].PAYMAYA) {
                if (a.referenceNo && a.paymentDate && a.amount && a.ccConfirmationCode ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) {}
              } else if (b === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].BANK) {
                if (a.bankName && a.paymentDate && a.amount && a.bankBranch ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) {}
              } else if (b === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].VOUCHER) {
                if (a.controlNo ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) {}
              } else if (b === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].CHECK) {
                if (a.bankName && a.checkNo && a.amount ? this.isPaymentTypeValid = true : this.isPaymentTypeValid = false) {}
              }
            }
          }, {
            key: "resetPaymentTypeValidation",
            value: function resetPaymentTypeValidation() {
              var _a, _b;

              this.isPaymentTypeValid = false;

              if (((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.paymentDescription) === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_MODE"].PROMISORRY_NOTE) {
                this.isPaymentTypeValid = true;
              }
            }
          }, {
            key: "getPaymentDetails",
            value: function getPaymentDetails() {
              var _this3 = this;

              var endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentDetails;

              if (this.isMultiple) {
                if (this.isForPayment) {
                  endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].multiplePaymentDetails;
                } else {
                  endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentMultipleMonitoring + "?groupId=";
                }
              }

              if (this.isSpecial) {
                if (this.isForPayment) {
                  endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].specialPaymentDetails;
                } else {
                  endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentSpecial;
                }
              }

              this.apiService.findAll(endpoint + this.id).subscribe(function (res) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;

                if (res.responseData) {
                  _this3.payment = res.responseData.data;
                  _this3.payment ? _this3.payment.filedBirForm = _this3.payment.filedBirForm ? _this3.payment.filedBirForm : false : null;
                  _this3.paymentMethod = ((_a = _this3.payment) === null || _a === void 0 ? void 0 : _a.paymentMethod) ? _this3.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"]();
                } else if (res.data) {
                  _this3.payment = res.data[0];
                  _this3.payment ? _this3.payment.filedBirForm = _this3.payment.filedBirForm ? _this3.payment.filedBirForm : false : null;
                  _this3.paymentMethod = ((_b = _this3.payment) === null || _b === void 0 ? void 0 : _b.paymentMethod) ? _this3.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"]();
                } else {
                  _this3.payment = res;
                  _this3.payment ? _this3.payment.filedBirForm = _this3.payment.filedBirForm ? _this3.payment.filedBirForm : false : null;
                  _this3.paymentMethod = ((_c = _this3.payment) === null || _c === void 0 ? void 0 : _c.paymentMethod) ? _this3.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"]();
                }

                switch (((_e = (_d = _this3.payment) === null || _d === void 0 ? void 0 : _d.applicationForm) === null || _e === void 0 ? void 0 : _e.refTypeOfMedium) || ((_h = (_g = (_f = _this3.payment) === null || _f === void 0 ? void 0 : _f.applicationFormS2) === null || _g === void 0 ? void 0 : _g.applicationForm) === null || _h === void 0 ? void 0 : _h.refTypeOfMedium)) {
                  case "SINGLE MEDIA":
                    _this3.getApplicationSingleMedia();

                    break;

                  case "MULTIMEDIA-MOVING":
                    _this3.getMultimediaMoving();

                    _this3.fetchMultimedia();

                    break;

                  case "MULTIMEDIA-STATIC":
                    _this3.getMultimediaStatic();

                    _this3.fetchMultimedia();

                    break;

                  default:
                    break;
                }

                if ((_j = _this3.payment) === null || _j === void 0 ? void 0 : _j.paymentAttachmentReference) {
                  _this3.getAttachmentDocumentDisplay(_this3.payment.paymentAttachmentReference);
                } // this.paymentTemp = this.payment;

              });
            }
          }, {
            key: "getPaymentList",
            value: function getPaymentList() {
              var _this4 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentType).subscribe(function (res) {
                _this4.paymentTypeList = res.responseData.data;

                if (_this4.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_2__["USER_ROLES"].ROLE_APPLICANT) {
                  var creditCardIndex = _this4.paymentTypeList.findIndex(function (element) {
                    return element.paymentDescription === "Credit Card";
                  });

                  _this4.paymentTypeList.splice(creditCardIndex, 1);
                }
              });
            }
          }, {
            key: "viewPayment",
            value: function viewPayment() {
              var _this5 = this;

              var _a;

              var endpoint = "".concat(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].payment, "/application-form-id");

              if (this.isMultiple) {
                if (this.isForPayment) {
                  endpoint = "".concat(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentMultiple, "/payment-multiple-details/multiple-application-id");
                } else if (this.isForApproval) {
                  endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentMultipleMonitoring;
                }
              } else {
                if (((_a = this.paymentTypeFromUrl) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "for_payment") {
                  if (this.currentUser.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_2__["USER_ROLES"].ROLE_ACCOUNTING) {
                    endpoint = "".concat(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentDetailsAccounting);
                  } else {
                    endpoint = "".concat(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentDetails);
                  }
                }
              }

              this.apiService.findByParam(endpoint, this.id).subscribe(function (res) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;

                if (res.responseData) {
                  _this5.payment = res.responseData.data;

                  if (_this5.payment) {
                    _this5.payment.filedBirForm = _this5.payment.filedBirForm ? _this5.payment.filedBirForm : false;
                  }
                } else {
                  _this5.payment = res;

                  if (_this5.payment) {
                    _this5.payment.filedBirForm = _this5.payment.filedBirForm ? _this5.payment.filedBirForm : false;
                  }
                }

                _this5.paymentMethod = ((_a = _this5.payment) === null || _a === void 0 ? void 0 : _a.paymentMethod) ? _this5.payment.paymentMethod : new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__["PaymentMethod"]();
                _this5.paymentMode = (_c = (_b = _this5.paymentMethod) === null || _b === void 0 ? void 0 : _b.paymentType) === null || _c === void 0 ? void 0 : _c.paymentDescription; // this.paymentTemp = this.payment;

                if ((_d = _this5.payment) === null || _d === void 0 ? void 0 : _d.paymentAttachmentReference) {
                  _this5.getAttachmentDocumentDisplay(_this5.payment.paymentAttachmentReference);
                }

                switch (((_f = (_e = _this5.payment) === null || _e === void 0 ? void 0 : _e.applicationForm) === null || _f === void 0 ? void 0 : _f.refTypeOfMedium) || ((_j = (_h = (_g = _this5.payment) === null || _g === void 0 ? void 0 : _g.applicationFormS2) === null || _h === void 0 ? void 0 : _h.applicationForm) === null || _j === void 0 ? void 0 : _j.refTypeOfMedium)) {
                  case "SINGLE MEDIA":
                    _this5.getApplicationSingleMedia();

                    break;

                  case "MULTIMEDIA-MOVING":
                    _this5.getMultimediaMoving();

                    _this5.fetchMultimedia();

                    break;

                  case "MULTIMEDIA-STATIC":
                    _this5.getMultimediaStatic();

                    _this5.fetchMultimedia();

                    break;

                  default:
                    break;
                }
              });
            }
          }, {
            key: "getAttachmentDocumentDisplay",
            value: function getAttachmentDocumentDisplay(paymentAttachmentReference) {
              var _this6 = this;

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].attachmentDocument, "payment-attachment-reference/" + paymentAttachmentReference).subscribe(function (res1) {
                if (res1.responseData.data) {
                  _this6.attachmentDocuments = res1.responseData.data;
                  _this6.attachmentDocument = res1.responseData.data;
                  _this6.safeURL = _this6.sanitizer.bypassSecurityTrustResourceUrl(_this6.attachmentDocument.fileURL); // console.log('view attachmentDocument: ', this.attachmentDocuments);
                }
              }, function (err) {
                _this6.attachmentDocuments = [];
              });
            }
          }, {
            key: "getMultipleApplicationList",
            value: function getMultipleApplicationList() {
              var _this7 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].getMultipleAppFormsWithNoRejected + this.id).subscribe(function (res) {
                _this7.multipleApplicationList = res.responseData.data;

                _this7.multipleApplicationList.forEach(function (multipleApplication) {
                  var _a, _b;

                  switch ((multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.refTypeOfMedium) || ((_b = (_a = multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.applicationFormS2) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.refTypeOfMedium)) {
                    case "SINGLE MEDIA":
                      _this7.getApplicationSingleMedia(multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.appFormReference);

                      break;

                    case "MULTIMEDIA-MOVING":
                      _this7.getMultimediaMoving(multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.appFormReference);

                      break;

                    case "MULTIMEDIA-STATIC":
                      _this7.getMultimediaStatic(multipleApplication === null || multipleApplication === void 0 ? void 0 : multipleApplication.appFormReference);

                      break;

                    default:
                      break;
                  }
                });

                _this7.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this7.multipleApplicationList);
                _this7.dataSource.paginator = _this7.paginator;

                if (_this7.multipleApplicationList.length) {
                  _this7.payment.multipleApplication = _this7.multipleApplicationList[0].multipleApplication;
                }
              }, function (err) {
                _this7.sweetAlertService.error(err);
              });
            }
          }, {
            key: "processPayment",
            value: function processPayment(remarks) {
              var _this8 = this;

              var _a, _b, _c, _d;

              var amountTransferred = Number.parseFloat((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.amount) === null || _b === void 0 ? void 0 : _b.toString());
              var toPay = +((_d = Number(this.payment.amountDue - ((_c = this.payment) === null || _c === void 0 ? void 0 : _c.withholdingTax))) === null || _d === void 0 ? void 0 : _d.toFixed(2));

              if (this.paymentMethod.paymentType.paymentDescription === "Voucher" || this.paymentMethod.paymentType.paymentDescription === "Promisorry Note" || this.paymentMethod.paymentType.paymentDescription !== "Voucher" && this.paymentMethod.paymentType.paymentDescription !== "Promisorry Note" && amountTransferred >= toPay) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  text: "Are you sure you want to process this PAYMENT?",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Confirm"
                }).then(function (result) {
                  if (result.value) {
                    _this8.payment.paymentStatus = _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS"].PAID;
                    _this8.payment.paymentDate = new Date();
                    _this8.payment.paymentMethod = _this8.paymentMethod;
                    _this8.payment.amountReceive = _this8.paymentMethod.amount;
                    _this8.payment.amountDue = toPay; // this.payment.paymentAttachmentReference = this.attachmentDocument.paymentAttachmentReference;

                    var endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].accountingPaymentApprove;

                    if (_this8.isMultiple) {
                      endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].accountingMultiplePaymentApprove;
                    } else if (_this8.isSpecial) {
                      endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].accountingSpecialPaymentApprove;
                    }

                    _this8.apiService.save(endpoint, _this8.payment).subscribe(function (res) {
                      _this8.sweetAlertService.customSuccessMessage("Payment successfully processed."); // console.log('SAVED DATA: ', res);


                      _this8.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-".concat(_this8.paymentTypeFromUrl)]);
                    });
                  }
                });
              } else {
                this.sweetAlertService.customErrorMessage("Amount Received/Transferred is lower than Amount Due.");
              }
            }
          }, {
            key: "comparePaymentType",
            value: function comparePaymentType(value, selected) {
              if (value && selected) {
                return value.paymentDescription === selected.paymentDescription;
              }
            }
          }, {
            key: "selectProofOfPayment",
            value: function selectProofOfPayment(res) {
              this.selectedProofOfPayment = res;
            } // recompute() {
            //   console.log('trigerring recompute... ', this.payment);
            //   this.paymentTemp = this.payment;
            //   let endpoint = ENDPOINTS.accountingRecompute;
            //   if (this.isMultiple) {
            //     endpoint = ENDPOINTS.accountingRecomputeMultiple;
            //   } else if (this.isSpecial) {
            //     endpoint = ENDPOINTS.accountingSpecialPaymentRecompute;
            //   }
            //   console.log('paymentMethod - ', this.paymentMethod);
            //   this.payment.paymentMethod = this.paymentMethod;
            //   this.payment.paymentDate = new Date();
            //   this.payment.filename = this.attachmentDocument.filename;
            //   this.payment.amountReceive = this.paymentMethod.amount;
            //   this.payment.paymentAttachmentReference = this.attachmentDocument.paymentAttachmentReference;
            //   this.apiService.save(endpoint, this.payment).subscribe((res: any) => {
            //     this.payment = res;
            //     this.payment.basicRate = this.paymentTemp.basicRate;
            //     this.payment.vat = this.paymentTemp.vat;
            //     this.payment.amountDue = this.paymentTemp.amountDue;
            //     console.log('payment... ', this.payment);
            //   }, (err: any) => {
            //   });
            // }

          }, {
            key: "computeWithholding",
            value: function computeWithholding() {
              var _a;

              if (this.payment) {
                this.payment.withholdingTax = ((_a = this.payment) === null || _a === void 0 ? void 0 : _a.filedBirForm) ? this.payment.basicRate * 0.02 : 0;
              }
            }
          }, {
            key: "getAmountDue",
            value: function getAmountDue() {
              var _a, _b;

              var amountDue = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.amountDue;
              var withholding = (_b = this.payment) === null || _b === void 0 ? void 0 : _b.withholdingTax;
              var result = amountDue - withholding;
              return result ? result : 0;
            }
          }, {
            key: "validatePaymentStatus",
            value: function validatePaymentStatus() {
              var _a, _b;

              if (((_a = this.payment) === null || _a === void 0 ? void 0 : _a.paymentStatus) !== _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS"].PAID && ((_b = this.payment) === null || _b === void 0 ? void 0 : _b.paymentStatus) !== _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS"].UNPAID) {
                return true;
              }

              return false;
            }
          }, {
            key: "comparePaymentMethod",
            value: function comparePaymentMethod(value, selected) {
              if (value && selected) {
                return value.paymentDescription === selected.paymentDescription;
              }
            }
          }, {
            key: "selectFile",
            value: function selectFile(event) {
              this.isShowUploadButton = false;

              if (event.target.files[0]) {
                this.fileSize = event.target.files[0].size;

                if (this.fileSize > 15000000) {
                  this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB.");
                  event.target.value = "";
                  return;
                } else {
                  this.isShowUploadButton = true;
                  var fileURL = URL.createObjectURL(event.target.files[0]);
                  this.previewDocument = true;
                  this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
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
            key: "viewDocument",
            value: function viewDocument() {
              if (this.uploadedPaymentFile) {
                window.open(this.uploadedPaymentFile.fileURL);
              } else {
                window.open(this.attachmentDocument.fileURL);
              }
            }
          }, {
            key: "uploadProofOfPayment",
            value: function uploadProofOfPayment() {
              var _this9 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: "Are you sure you want to submit this as proof of payment?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm"
              }).then(function (result) {
                if (result.value) {
                  _this9.spinner.show();

                  var params = "";
                  params = "?&attachmentType=" + _shared__WEBPACK_IMPORTED_MODULE_2__["ATTACHMENT_TYPE"].PAYMENT + "&submissionType=" + _shared__WEBPACK_IMPORTED_MODULE_2__["SUBMISSION_TYPE"].ORIGINAL;

                  _this9.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].attachmentDocument, _this9.selectedFile, params).subscribe(function (res) {
                    _this9.uploadedPaymentFile = res.responseData.data;
                    _this9.payment.paymentAttachmentReference = _this9.uploadedPaymentFile.paymentAttachmentReference;

                    _this9.addToAttachmentDocuments(_this9.uploadedPaymentFile);

                    _this9.hideSpinner();

                    _this9.sweetAlertService.customSuccessMessage("Attachment successfully uploaded.");

                    _this9.selectedFile = null;

                    _this9.getAttachmentDocument();
                  }, function (err) {
                    _this9.hideSpinner();

                    _this9.sweetAlertService.error(err);
                  }, function () {// actions after subscription
                  });
                } else {
                  _this9.selectedFile = null;
                }
              });
            }
          }, {
            key: "addToAttachmentDocuments",
            value: function addToAttachmentDocuments(obj) {
              this.attachmentDocument.paymentAttachmentReference = obj.paymentAttachmentReference;
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
              var _this10 = this;

              setTimeout(function () {
                _this10.spinner.hide();
              }, 1);
            }
          }, {
            key: "getAttachmentDocument",
            value: function getAttachmentDocument() {
              var _this11 = this;

              this.spinner.show();
              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].paymentAttachmentReference, this.attachmentDocument.paymentAttachmentReference).subscribe(function (res) {
                if (res) {
                  _this11.attachmentDocument = res.responseData.data;
                }

                _this11.hideSpinner();
              }, function (err) {
                _this11.hideSpinner();

                console.error(err);
              });
            }
          }, {
            key: "getAttachmentDocuments",
            value: function getAttachmentDocuments() {
              var _this12 = this;

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].attachmentDocument, "brand-penalty-attachment-reference/".concat(this.payment.paymentAttachmentReference)).subscribe(function (res) {
                if (res) {
                  _this12.attachmentDocument = res;
                }

                _this12.previewDocument = true;
                _this12.safeURL = _this12.sanitizer.bypassSecurityTrustResourceUrl(_this12.attachmentDocument.fileURL);
              });
            }
          }, {
            key: "navigateToList",
            value: function navigateToList() {
              var _this13 = this;

              if (this.payment.paymentStatus === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS"].PAID || this.payment.paymentStatus === _shared__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_STATUS"].UNPAID) {
                if (this.paymentTypeFromUrl) {
                  this.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-".concat(this.paymentTypeFromUrl)]);
                } else {
                  this.router.navigate(["asc/page/accounting/payments/"]);
                }
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  text: "Are you sure you want to go back to payment list?",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Confirm"
                }).then(function (result) {
                  if (result.value) {
                    if (_this13.paymentTypeFromUrl) {
                      _this13.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-".concat(_this13.paymentTypeFromUrl)]);
                    } else {
                      _this13.router.navigate(["asc/page/accounting/payments/"]);
                    }
                  }
                });
              }
            }
          }, {
            key: "getApplicationSingleMedia",
            value: function getApplicationSingleMedia(appFormReference) {
              var _this14 = this;

              var _a, _b, _c, _d, _e, _f, _g, _h;

              if (appFormReference === void 0) {
                appFormReference = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.appFormReference;
              }

              if ((_e = (_d = (_c = this.payment) === null || _c === void 0 ? void 0 : _c.applicationFormS2) === null || _d === void 0 ? void 0 : _d.applicationForm) === null || _e === void 0 ? void 0 : _e.refTypeOfMedium) {
                appFormReference = (_h = (_g = (_f = this.payment) === null || _f === void 0 ? void 0 : _f.applicationFormS2) === null || _g === void 0 ? void 0 : _g.applicationForm) === null || _h === void 0 ? void 0 : _h.appFormReference;
              }

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].applicationSingleMedia, "app-form-reference/".concat(appFormReference)).subscribe(function (res) {
                var _a, _b, _c, _d;

                if (res.responseData.data.length > 0) {
                  _this14.applicationSingleMedia = res.responseData.data[0];
                  _this14.typeOfMediumDisplay = "".concat((_c = (_b = (_a = _this14.applicationSingleMedia) === null || _a === void 0 ? void 0 : _a.mediumExecution) === null || _b === void 0 ? void 0 : _b.typeOfMedium) === null || _c === void 0 ? void 0 : _c.description, " (").concat((_d = _this14.applicationSingleMedia) === null || _d === void 0 ? void 0 : _d.sizeLength, ")");

                  if (_this14.isMultiple) {
                    _this14.multipleApplicationList.forEach(function (element, index) {
                      if (element.appFormReference === appFormReference) {
                        _this14.multipleApplicationList[index] = Object.assign(Object.assign({}, _this14.multipleApplicationList[index]), {
                          typeOfMediumDisplay: _this14.typeOfMediumDisplay
                        });
                      }
                    });

                    _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this14.multipleApplicationList);
                    _this14.dataSource.paginator = _this14.paginator;
                  }
                } else {
                  _this14.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_8__["ApplicationSingleMedia"]();
                  _this14.typeOfMediumDisplay = "";
                }
              }, function (err) {
                _this14.applicationSingleMedia = new app_core_models_application_single_media_model__WEBPACK_IMPORTED_MODULE_8__["ApplicationSingleMedia"]();
                _this14.typeOfMediumDisplay = "";
              });
            }
          }, {
            key: "getMultimediaStatic",
            value: function getMultimediaStatic(appFormReference) {
              var _this15 = this;

              var _a, _b;

              if (appFormReference === void 0) {
                appFormReference = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.appFormReference;
              }

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].applicationMultimedia, "app-form-reference/".concat(appFormReference)).subscribe(function (res) {
                if (res.responseData.data.length > 0) {
                  var multimediaList = new Set(res.responseData.data.map(function (mappedList) {
                    var _a;

                    return "".concat((_a = mappedList === null || mappedList === void 0 ? void 0 : mappedList.typeOfMedium) === null || _a === void 0 ? void 0 : _a.description, " (").concat(mappedList === null || mappedList === void 0 ? void 0 : mappedList.multimediaSizeLength, ")");
                  }));
                  _this15.typeOfMediumDisplay = "";
                  var mediaCtrl = 1;

                  var _iterator = _createForOfIteratorHelper(multimediaList),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var media = _step.value;

                      if (mediaCtrl !== multimediaList.size) {
                        _this15.typeOfMediumDisplay += "".concat(media, ", ");
                        mediaCtrl++;
                      } else {
                        _this15.typeOfMediumDisplay += media;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  if (_this15.isMultiple) {
                    _this15.multipleApplicationList.forEach(function (element, index) {
                      if (element.appFormReference === appFormReference) {
                        _this15.multipleApplicationList[index] = Object.assign(Object.assign({}, _this15.multipleApplicationList[index]), {
                          typeOfMediumDisplay: _this15.typeOfMediumDisplay
                        });
                      }
                    });

                    _this15.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this15.multipleApplicationList);
                    _this15.dataSource.paginator = _this15.paginator;
                  }
                } else {
                  _this15.typeOfMediumDisplay = "";
                }
              }, function (err) {
                _this15.typeOfMediumDisplay = "";
              });
            }
          }, {
            key: "getMultimediaMoving",
            value: function getMultimediaMoving(appFormReference) {
              var _this16 = this;

              var _a, _b;

              if (appFormReference === void 0) {
                appFormReference = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.appFormReference;
              }

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].applicationMultimedia, "app-form-reference/".concat(appFormReference)).subscribe(function (res) {
                if (res.responseData.data.length > 0) {
                  var multimediaList = new Set(res.responseData.data.map(function (mappedList) {
                    var _a;

                    return "".concat((_a = mappedList === null || mappedList === void 0 ? void 0 : mappedList.typeOfMedium) === null || _a === void 0 ? void 0 : _a.description, " (").concat(mappedList === null || mappedList === void 0 ? void 0 : mappedList.multimediaSizeLength, ")");
                  }));
                  _this16.typeOfMediumDisplay = "";
                  var mediaCtrl = 1;

                  var _iterator2 = _createForOfIteratorHelper(multimediaList),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var media = _step2.value;

                      if (mediaCtrl !== multimediaList.size) {
                        _this16.typeOfMediumDisplay += "".concat(media, ", ");
                        mediaCtrl++;
                      } else {
                        _this16.typeOfMediumDisplay += media;
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  if (_this16.isMultiple) {
                    _this16.multipleApplicationList.forEach(function (element, index) {
                      if (element.appFormReference === appFormReference) {
                        _this16.multipleApplicationList[index] = Object.assign(Object.assign({}, _this16.multipleApplicationList[index]), {
                          typeOfMediumDisplay: _this16.typeOfMediumDisplay
                        });
                      }
                    });

                    _this16.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this16.multipleApplicationList);
                    _this16.dataSource.paginator = _this16.paginator;
                  }
                } else {
                  _this16.typeOfMediumDisplay = "";
                }
              }, function (err) {
                _this16.typeOfMediumDisplay = "";
              });
            }
          }, {
            key: "rejectPayment",
            value: function rejectPayment() {
              var _this17 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: "Are you sure you want to reject this roof of payment?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm"
              }).then(function (result) {
                if (result.value) {
                  _this17.spinner.show();

                  var rejectEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].accountingReject;

                  if (_this17.isMultiple) {
                    rejectEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].accountingRejectMultiple;
                  } else if (_this17.isSpecial) {
                    rejectEndpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].accountingRejectSpecial;
                  }

                  _this17.apiService.save(rejectEndpoint, _this17.payment).subscribe(function (res) {
                    _this17.hideSpinner();

                    _this17.sweetAlertService.customSuccessMessage("Successfully rejected.");

                    if (_this17.paymentTypeFromUrl) {
                      _this17.router.navigate(["asc/page/accounting/payments/", "schedule-of-fees-".concat(_this17.paymentTypeFromUrl)]);
                    } else {
                      _this17.router.navigate(["asc/page/accounting/payments/"]);
                    }
                  }, function (err) {
                    _this17.hideSpinner();

                    _this17.sweetAlertService.error(err);
                  }, function () {// actions after subscription
                  });
                }
              });
            }
          }, {
            key: "fetchMultimedia",
            value: function fetchMultimedia() {
              var _this18 = this;

              var _a, _b;

              var typeofMedium = ((_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm.refTypeOfMedium) === _shared__WEBPACK_IMPORTED_MODULE_2__["TYPE_OF_MEDIUM"].MULTIMEDIA_MOVING ? "moving" : "static";
              var endpoint = _shared__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"].applicationMultimedia + "-" + typeofMedium + "/app-form-reference";
              this.apiService.findByParam(endpoint, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.applicationForm.appFormReference).subscribe(function (multimedia) {
                if (multimedia) _this18.multimediaDTO = multimedia.responseData.data;
              });
            }
          }]);

          return AddPaymentComponent;
        }();

        AddPaymentComponent.ɵfac = function AddPaymentComponent_Factory(t) {
          return new (t || AddPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__["FileStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_13__["ValidateFieldService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["SweetAlertService"]));
        };

        AddPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AddPaymentComponent,
          selectors: [["app-add-payment"]],
          viewQuery: function AddPaymentComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            }
          },
          inputs: {
            s1Application: "s1Application",
            payment: "payment"
          },
          decls: 90,
          vars: 50,
          consts: [[1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row", "mt-3"], [1, "headers-align"], [1, "material-icons"], [3, "previewS1Application", "multimediaDTO"], [3, "formGroup"], [1, "row", "fields"], ["class", "col-md-12 title", 4, "ngIf"], ["appearance", "outline", 1, "col-md-6"], ["class", "col-md-12", "appearance", "outline", 4, "ngIf"], ["class", "file-upload", "style", "border: 1px solid red", 3, "hidden", 4, "ngIf"], [1, "row"], ["appearance", "outline", 1, "col-md-12", 3, "hidden"], ["matInput", "", "readonly", "", 3, "value"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "name", "companyName", "readonly", "", 3, "value"], ["matInput", "", "name", "refTypeOfMedium", "readonly", "", 3, "value"], ["matInput", "", "readonly", "", "step", "0.01", 1, "numbers-input", 3, "value"], ["matInput", "", "readonly", "", 1, "numbers-input", 3, "value"], ["matInput", "", "name", "amount", "readonly", "", 1, "numbers-input", "total", 3, "value"], [1, "col-md-6", 3, "hidden"], [4, "ngIf"], ["formControlName", "filedBirForm", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "vat", "formControlName", "withholdingTax", "readonly", "", 1, "numbers-input", 3, "value"], ["name", "paymentType", "formControlName", "paymentType", 1, "col-md-4", 3, "ngModel", "compareWith", "disabled", "ngModelChange", "selectionChange"], ["name", "paymentType", 3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "remarks", "name", "remarks", 3, "ngModel", "readonly", "ngModelChange"], [1, "col-md-12", "title"], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "click"], ["matInput", "", "value", "Schedule of Fees", "readonly", ""], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], ["class", "file-upload", "type", "file", "accept", ".pdf", 3, "change", 4, "ngIf"], ["matInput", "", "disabled", "", 3, "value"], ["type", "file", "accept", ".pdf", 1, "file-upload", 3, "change"], ["mat-raised-button", "", "class", "button-red button-right", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-red button-right", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "click"], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "disabled", "click"], [1, "file-upload", 2, "border", "1px solid red", 3, "hidden"], ["type", "application/pdf", "width", "100%", "height", "500", 3, "data"], ["width", "100%", "height", "500", 3, "src"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "referenceCode"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "adTitle"], ["matColumnDef", "mediumAndLength"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["name", "paymentType", 3, "value"], [1, "required-field"], ["matInput", "", "name", "referenceNo", "formControlName", "referenceNo", 3, "ngModel", "readonly", "ngModelChange", "blur", "keyup"], ["matInput", "", "placeholder", "Date", "name", "paymentDate", "formControlName", "paymentDate", 3, "matDatepicker", "min", "ngModel", "readonly", "ngModelChange", "dateChange", "keyup"], ["matSuffix", "", 3, "for", 4, "ngIf"], ["color", "warn"], ["paymentDate", ""], ["matInput", "", "name", "amount", "formControlName", "amount", 1, "numbers-input", 3, "ngModel", "hidden", "ngModelChange", "keydown", "blur", "keyup"], ["class", "numbers-input total", "matInput", "", "name", "amount", "readonly", "", 3, "value", 4, "ngIf"], ["matSuffix", "", 3, "for"], ["matInput", "", "name", "ccConfirmationCode", "formControlName", "ccConfirmationCode", 3, "ngModel", "readonly", "ngModelChange"], ["matInput", "", "name", "controlNo", "formControlName", "controlNo", 3, "ngModel", "readonly", "ngModelChange", "blur", "keyup"], ["matInput", "", "name", "bankName", "formControlName", "bankName", 3, "ngModel", "readonly", "ngModelChange", "blur", "keyup"], ["matInput", "", "name", "amount", "formControlName", "amount", 1, "numbers-input", 3, "ngModel", "hidden", "ngModelChange", "blur", "keyup"], ["matInput", "", "name", "ccConfirmationCode", "formControlName", "ccConfirmationCode", 3, "ngModel", "readonly", "ngModelChange", "blur", "keyup"], ["matInput", "", "name", "checkNo", "formControlName", "checkNo", 3, "ngModel", "readonly", "ngModelChange", "blur", "keyup"], ["matInput", "", "name", "withholdingTax", "formControlName", "bankBranch", 3, "ngModel", "readonly", "ngModelChange", "blur", "keyup"], ["matInput", "", "placeholder", "Date", "name", "paymentDate", "formControlName", "paymentDate", 3, "matDatepicker", "ngModel", "ngModelChange", "dateChange", "keyup"], ["color", "warn", "disabled", "false"], ["matInput", "", "name", "companyName", 3, "readonly"], ["matInput", "", "name", "length", 1, "numbers-input", 3, "readonly"], [1, "col-md-12"], ["mat-raised-button", "", 1, "button-right", "button-red", 3, "hidden", "disabled", "click"], ["mat-raised-button", "", "class", "button-right button-red button-right__approve", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-right button-red", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "button-right", "button-red", "button-right__approve", 3, "disabled", "click"], [1, "material-icons", "color__white"]],
          template: function AddPaymentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddPaymentComponent_div_2_Template, 10, 0, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "label_important");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \xA0Preview ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-description");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Application Details ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "visibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-add-payment-preview-application", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddPaymentComponent_div_20_Template, 5, 1, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddPaymentComponent_div_21_Template, 5, 0, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddPaymentComponent_div_23_Template, 8, 2, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddPaymentComponent_div_24_Template, 6, 2, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddPaymentComponent_div_25_Template, 5, 3, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reference Number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Advertiser");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ad Title - Medium (Length)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Vatable Sales");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "VAT");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Total Sales (VAT Inclusive)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AddPaymentComponent_div_57_Template, 19, 6, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-checkbox", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_Template_mat_checkbox_ngModelChange_59_listener($event) {
                return ctx.payment && (ctx.payment.filedBirForm = $event);
              })("ngModelChange", function AddPaymentComponent_Template_mat_checkbox_ngModelChange_59_listener() {
                return ctx.computeWithholding();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " BIR Form 2307");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Withholding Tax");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Amount Due");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "number");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AddPaymentComponent_div_73_Template, 4, 0, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Payment Mode");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-select", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_Template_mat_select_ngModelChange_77_listener($event) {
                return ctx.paymentMethod.paymentType = $event;
              })("selectionChange", function AddPaymentComponent_Template_mat_select_selectionChange_77_listener() {
                return ctx.resetPaymentTypeValidation();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AddPaymentComponent_mat_option_78_Template, 3, 4, "mat-option", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AddPaymentComponent_div_79_Template, 27, 11, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AddPaymentComponent_div_80_Template, 8, 2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AddPaymentComponent_div_81_Template, 20, 9, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "REMARKS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "textarea", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_Template_textarea_ngModelChange_85_listener($event) {
                return ctx.payment ? ctx.payment.remarks = $event : null;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AddPaymentComponent_div_86_Template, 11, 2, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AddPaymentComponent_div_87_Template, 11, 2, "div", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AddPaymentComponent_div_88_Template, 9, 4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole.name) == "ROLE_ACCOUNTING");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("previewS1Application", (ctx.payment == null ? null : ctx.payment.applicationForm) || (ctx.payment == null ? null : ctx.payment.multipleApplication))("multimediaDTO", ctx.multimediaDTO);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paymentForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) != "ROLE_ACCOUNTING");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.userRole.name == "ROLE_ACCOUNTING");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForPayment || ctx.paymentTypeFromUrl === "paid" || ctx.safeURL);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.isForPayment || ctx.paymentTypeFromUrl === "paid" || ctx.safeURL) && ((ctx.attachmentDocument == null ? null : ctx.attachmentDocument.paymentAttachmentReference) || ctx.isShowUploadButton));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeURL);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isMultiple);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx.payment == null ? null : ctx.payment.applicationForm == null ? null : ctx.payment.applicationForm.referenceCode) || (ctx.payment == null ? null : ctx.payment.applicationFormS2 == null ? null : ctx.payment.applicationFormS2.applicationForm == null ? null : ctx.payment.applicationFormS2.applicationForm.referenceCode));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx.payment == null ? null : ctx.payment.applicationForm == null ? null : ctx.payment.applicationForm.company == null ? null : ctx.payment.applicationForm.company.companyName) || (ctx.payment == null ? null : ctx.payment.multipleApplication == null ? null : ctx.payment.multipleApplication.company == null ? null : ctx.payment.multipleApplication.company.companyName) || (ctx.payment == null ? null : ctx.payment.applicationFormS2 == null ? null : ctx.payment.applicationFormS2.applicationForm == null ? null : ctx.payment.applicationFormS2.applicationForm.company == null ? null : ctx.payment.applicationFormS2.applicationForm.company.companyName));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isMultiple);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx.payment == null ? null : ctx.payment.applicationForm == null ? null : ctx.payment.applicationForm.adTitle) ? (ctx.payment == null ? null : ctx.payment.applicationForm == null ? null : ctx.payment.applicationForm.adTitle) + " - " + ctx.typeOfMediumDisplay : ctx.typeOfMediumDisplay || (ctx.payment == null ? null : ctx.payment.applicationFormS2 == null ? null : ctx.payment.applicationFormS2.applicationForm == null ? null : ctx.payment.applicationFormS2.applicationForm.adTitle) + " - " + ctx.typeOfMediumDisplay || (ctx.payment == null ? null : ctx.payment.applicationFormS2 == null ? null : ctx.payment.applicationFormS2.applicationForm == null ? null : ctx.payment.applicationFormS2.applicationForm.adTitle) + " - " + ctx.typeOfMediumDisplay);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 35, ctx.payment == null ? null : ctx.payment.basicRate, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 38, ctx.payment == null ? null : ctx.payment.vat, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 41, ctx.payment == null ? null : ctx.payment.amountDue, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", (ctx.payment == null ? null : ctx.payment.paymentStatus) != "PAID" && (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) != "ROLE_ACCOUNTING");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiple);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payment && ctx.payment.filedBirForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 44, ctx.payment == null ? null : ctx.payment.withholdingTax, "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](72, 47, ctx.getAmountDue(), "1.2-2"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiple);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paymentMethod.paymentType)("compareWith", ctx.comparePaymentMethod)("disabled", (ctx.payment == null ? null : ctx.payment.paymentStatus) == "PAID" || (ctx.payment == null ? null : ctx.payment.paymentStatus) == "UNPAID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentTypeList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "Cash" || (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "GCash" || (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "PayMaya");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "Voucher");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "Bank" || (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "Credit Card" || (ctx.paymentMethod == null ? null : ctx.paymentMethod.paymentType == null ? null : ctx.paymentMethod.paymentType.paymentDescription) === "Check");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payment == null ? null : ctx.payment.remarks)("readonly", ctx.currentUser.userRole.name != "ROLE_ACCOUNTING" || (ctx.payment == null ? null : ctx.payment.paymentStatus) == "PAID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProofOfPayment === 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProofOfPayment === 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.userRole == null ? null : ctx.currentUser.userRole.name) == "ROLE_ACCOUNTING" && (ctx.payment == null ? null : ctx.payment.paymentStatus) !== "PAID");
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelDescription"], _add_payment_preview_application_add_payment_preview_application_component__WEBPACK_IMPORTED_MODULE_17__["AddPaymentPreviewApplicationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["UpperCasePipe"]],
          styles: ["textarea[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.numbers-input[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]:hover, .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background: #bad9ff;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: #cfe5ff;\n}\n\n.mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2FkZC1wYXltZW50L2FkZC1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTs7RUFFRSxtQkFBQTtBQUVGOztBQUNBOzs7RUFNRSxtQkFBQTtBQURGOztBQUlBO0VBQ0ksOEJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWNjb3VudGluZy9hZGQtcGF5bWVudC9hZGQtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5udW1iZXJzLWlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi50b3RhbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6aG92ZXIsXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2JhZDlmZjtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWxcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSksXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSksXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKSB7XHJcbiAgYmFja2dyb3VuZDogI2NmZTVmZjtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"]
        });
        return AddPaymentComponent;
      }();
      /***/

    },

    /***/
    "lL+D":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-payment/add-payment-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: AddPaymentRoutingModule */

    /***/
    function lLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPaymentRoutingModule", function () {
        return AddPaymentRoutingModule;
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


      var _add_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-payment.component */
      "N5VM");

      var routes = [{
        path: '',
        component: _add_payment_component__WEBPACK_IMPORTED_MODULE_2__["AddPaymentComponent"]
      }];

      var AddPaymentRoutingModule = /*@__PURE__*/function () {
        var AddPaymentRoutingModule = /*#__PURE__*/_createClass(function AddPaymentRoutingModule() {
          _classCallCheck(this, AddPaymentRoutingModule);
        });

        AddPaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AddPaymentRoutingModule
        });
        AddPaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AddPaymentRoutingModule_Factory(t) {
            return new (t || AddPaymentRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AddPaymentRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPaymentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~add-payment-add-payment-module~applications-applications-module-es5.js.map