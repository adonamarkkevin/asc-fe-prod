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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac"], {
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
    "rJNo":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/type-of-main-document/type-of-main-document.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TypeOfMainDocumentComponent */

    /***/
    function rJNo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMainDocumentComponent", function () {
        return TypeOfMainDocumentComponent;
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


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/type-of-main-document.model */
      "1T39");
      /* harmony import */


      var app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/core/models/uploading-document-file-size-model */
      "bq+u");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function TypeOfMainDocumentComponent_div_1_mat_form_field_14_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r4.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.status, " ");
        }
      }

      function TypeOfMainDocumentComponent_div_1_mat_form_field_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMainDocumentComponent_div_1_mat_form_field_14_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.typeOfMainDocument.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TypeOfMainDocumentComponent_div_1_mat_form_field_14_mat_option_4_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.typeOfMainDocument.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.statusList);
        }
      }

      function TypeOfMainDocumentComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Type Of Main Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type Of Main Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMainDocumentComponent_div_1_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.typeOfMainDocument.typeOfMainDocument = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TypeOfMainDocumentComponent_div_1_mat_form_field_14_Template, 5, 2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-form-action-buttons", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function TypeOfMainDocumentComponent_div_1_Template_app_form_action_buttons_saveFunction_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.save();
          })("updateFunction", function TypeOfMainDocumentComponent_div_1_Template_app_form_action_buttons_updateFunction_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.update();
          })("cancelFunction", function TypeOfMainDocumentComponent_div_1_Template_app_form_action_buttons_cancelFunction_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.resetFormValidator();
          })("deleteFunction", function TypeOfMainDocumentComponent_div_1_Template_app_form_action_buttons_deleteFunction_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-form-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function TypeOfMainDocumentComponent_div_1_Template_app_form_list_selectInListFunction_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.getTypeOfMainDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.typeOfMainDocumentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.typeOfMainDocument.typeOfMainDocument);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.typeOfMainDocument.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx_r0.typeOfMainDocument)("childForm", ctx_r0.typeOfMainDocumentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource)("displayedColumns", ctx_r0.displayedColumns);
        }
      }

      function TypeOfMainDocumentComponent_div_2_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Size ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeOfMainDocumentComponent_div_2_form_6_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.uploadingDocumentFileSize.fileSize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r14.uploadingDocumentFileSizeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.uploadingDocumentFileSize.fileSize)("disabled", true);
        }
      }

      function TypeOfMainDocumentComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Document File Size ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TypeOfMainDocumentComponent_div_2_form_6_Template, 8, 3, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-form-action-buttons", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateFunction", function TypeOfMainDocumentComponent_div_2_Template_app_form_action_buttons_updateFunction_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.updateUploadingDocumentFileSize();
          })("cancelFunction", function TypeOfMainDocumentComponent_div_2_Template_app_form_action_buttons_cancelFunction_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.resetFormValidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-form-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function TypeOfMainDocumentComponent_div_2_Template_app_form_list_selectInListFunction_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.getuploadingDocumentFileSize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadingDocumentFileSize.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx_r1.uploadingDocumentFileSize)("childForm", ctx_r1.uploadingDocumentFileSizeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.dataSource1)("displayedColumns", ctx_r1.displayedColumns);
        }
      }

      var TypeOfMainDocumentComponent = /*@__PURE__*/function () {
        var TypeOfMainDocumentComponent = /*#__PURE__*/function () {
          function TypeOfMainDocumentComponent(apiService, formBuilder, sweetAlertService, route) {
            _classCallCheck(this, TypeOfMainDocumentComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.route = route;
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]);
            this.typeOfMainDocument = new app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_5__["TypeOfMainDocument"]();
            this.uploadingDocumentFileSize = new app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_6__["UploadingDocumentFileSize"]();
            this.typeOfMainDocumentList = [];
          }

          _createClass(TypeOfMainDocumentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.maintenanceType = this.route.parent.snapshot.url[0].path;

              if (this.maintenanceType === 'type-of-main-documents') {
                this.displayedColumns = ['typeOfMainDocument', 'status'];
                this.getList();
              } else {
                this.displayedColumns = ['size'];
                this.getAllFileSize();
              }

              this.setFormValidator();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.maintenanceType = null;
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMainDocuments).subscribe(function (res) {
                _this.typeOfMainDocumentList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMainDocuments, this.typeOfMainDocument).subscribe(function (res) {
                if (res !== undefined) {
                  _this2.sweetAlertService.success(res);
                }
              }, function (err) {
                _this2.sweetAlertService.error(err);
              }, function () {
                _this2.resetFormValidator(), _this2.getList();
              });
            }
          }, {
            key: "getTypeOfMainDocument",
            value: function getTypeOfMainDocument() {
              var _this3 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMainDocuments, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this3.typeOfMainDocument = res.responseData.data;
                  console.log(res);
                }
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this4 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMainDocuments, this.typeOfMainDocument).subscribe(function (res) {
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
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              if (this.maintenanceType === 'type-of-main-documents') {
                this.typeOfMainDocument.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
                this.typeOfMainDocumentForm = this.formBuilder.group({
                  typeOfMainDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                  status: ['']
                });
              } else {
                this.uploadingDocumentFileSizeForm = this.formBuilder.group({
                  // id: ['',],
                  fileSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                });
              }
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              if (this.maintenanceType === 'type-of-main-documents') {
                this.typeOfMainDocument = new app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_5__["TypeOfMainDocument"]();
                this.typeOfMainDocument.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
                this.typeOfMainDocumentForm.markAsUntouched();
                this.typeOfMainDocumentForm.markAsPristine();
              } else {
                this.uploadingDocumentFileSize = new app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_6__["UploadingDocumentFileSize"]();
                this.uploadingDocumentFileSizeForm.markAsUntouched();
                this.uploadingDocumentFileSizeForm.markAsPristine();
              }
            } //START OF FILE SIZE CONTROLLER

          }, {
            key: "getAllFileSize",
            value: function getAllFileSize() {
              var _this5 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].uploadingDocumentFileSize).subscribe(function (res) {
                _this5.uploadingDocumentFileSize = res.responseData.data;
                _this5.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this5.dataSource1.paginator = _this5.formListComponent.paginator;
                _this5.dataSource1.sort = _this5.formListComponent.sort;
              });
            }
          }, {
            key: "getuploadingDocumentFileSize",
            value: function getuploadingDocumentFileSize() {
              var _this6 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].uploadingDocumentFileSize, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this6.uploadingDocumentFileSize = res.responseData.data;
                  console.log(_this6.uploadingDocumentFileSize);
                }
              });
            }
          }, {
            key: "updateUploadingDocumentFileSize",
            value: function updateUploadingDocumentFileSize() {
              var _this7 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].uploadingDocumentFileSize, this.uploadingDocumentFileSize).subscribe(function (res) {
                if (res !== undefined) {
                  _this7.sweetAlertService.success(res);
                }
              }, function (err) {
                _this7.sweetAlertService.error(err);
              }, function () {
                _this7.resetFormValidator(), _this7.getAllFileSize();
              });
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this8 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                text: 'Are you sure you want to delete this type of main document?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this8.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].typeOfMainDocuments, _this8.typeOfMainDocument.id).subscribe(function () {
                    _this8.sweetAlertService.customSuccessMessage('Type of main document successfully deleted.');

                    _this8.resetFormValidator();

                    _this8.getList();
                  });
                }
              });
            }
          }]);

          return TypeOfMainDocumentComponent;
        }();

        TypeOfMainDocumentComponent.ɵfac = function TypeOfMainDocumentComponent_Factory(t) {
          return new (t || TypeOfMainDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]));
        };

        TypeOfMainDocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TypeOfMainDocumentComponent,
          selectors: [["app-type-of-main-document"]],
          viewQuery: function TypeOfMainDocumentComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 3,
          vars: 2,
          consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "typeOfMainDocument", "formControlName", "typeOfMainDocument", 3, "ngModel", "ngModelChange"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["appearance", "outline", 1, "col-md-4"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "formGroup", 4, "ngIf"], [3, "childObject", "childForm", "updateFunction", "cancelFunction"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "type", "number", "name", "fileSize", "formControlName", "fileSize", 3, "ngModel", "disabled", "ngModelChange"]],
          template: function TypeOfMainDocumentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypeOfMainDocumentComponent_div_1_Template, 18, 7, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TypeOfMainDocumentComponent_div_2_Template, 10, 5, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maintenanceType === "type-of-main-documents");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maintenanceType === "document-size");
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__["FormListComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1tYWluLWRvY3VtZW50L3R5cGUtb2YtbWFpbi1kb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return TypeOfMainDocumentComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~applications-applications-module~type-of-main-document-type-of-main-document-module~type-of-~0f3823ac-es5.js.map