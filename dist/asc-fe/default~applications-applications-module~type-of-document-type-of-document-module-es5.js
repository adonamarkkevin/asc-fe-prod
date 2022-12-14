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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~type-of-document-type-of-document-module"], {
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
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

      function TypeOfDocumentComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r2.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r2.status, " ");
        }
      }

      function TypeOfDocumentComponent_mat_form_field_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_mat_form_field_17_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.typeOfDocument.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TypeOfDocumentComponent_mat_form_field_17_mat_option_4_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.typeOfDocument.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.statusList);
        }
      }

      var TypeOfDocumentComponent = /*@__PURE__*/function () {
        var TypeOfDocumentComponent = /*#__PURE__*/function () {
          function TypeOfDocumentComponent(apiService, formBuilder, sweetAlertService) {
            _classCallCheck(this, TypeOfDocumentComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['typeOfDocumentDesc', 'dateOfLaunchEnable', 'expiresOnEnable', 'basedOnEnable', 'variantEnable', 'remarksEnable', 'inputEnable', 'status'];
            this.typeOfDocument = new _models__WEBPACK_IMPORTED_MODULE_2__["TypeOfDocument"]();
            this.typeOfDocumentList = [];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_3__["STATUSES"]);
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

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument).subscribe(function (res) {
                _this.typeOfDocumentList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
            }
          }, {
            key: "isExistingDocument",
            value: function isExistingDocument() {
              var _this2 = this;

              var data = this.typeOfDocumentList.filter(function (document) {
                var _a, _b, _c;

                return ((_a = document === null || document === void 0 ? void 0 : document.description) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_c = (_b = _this2.typeOfDocument) === null || _b === void 0 ? void 0 : _b.description) === null || _c === void 0 ? void 0 : _c.toLowerCase());
              });
              return (data === null || data === void 0 ? void 0 : data.length) > 0;
            }
          }, {
            key: "save",
            value: function save() {
              var _this3 = this;

              if (this.isExistingDocument()) {
                return this.sweetAlertService.customErrorMessage('Document already exists', 2);
              }

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.typeOfDocument).subscribe(function (res) {
                if (res !== undefined) {
                  _this3.sweetAlertService.success(res);
                }
              }, function (err) {
                _this3.sweetAlertService.error(err);
              }, function () {
                // actions after subscription
                _this3.resetFormValidator();

                _this3.getList();
              });
            }
          }, {
            key: "getTypeOfDocument",
            value: function getTypeOfDocument() {
              var _this4 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this4.typeOfDocument = res.responseData.data;
                }
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this5 = this;

              if (this.isExistingDocument()) {
                return this.sweetAlertService.customErrorMessage('Document already exists', 2);
              }

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, this.typeOfDocument).subscribe(function (res) {
                if (res !== undefined) {
                  _this5.sweetAlertService.success(res);
                }
              }, function (err) {
                _this5.sweetAlertService.error(err);
              }, function () {
                // actions after subscription
                _this5.resetFormValidator();

                _this5.getList();
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
              this.typeOfDocument.status = _shared__WEBPACK_IMPORTED_MODULE_3__["COMMON_FUNCTION"].ACTIVE;
              this.typeOfDocumentForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
              this.typeOfDocument = new _models__WEBPACK_IMPORTED_MODULE_2__["TypeOfDocument"]();
              this.typeOfDocument.status = _shared__WEBPACK_IMPORTED_MODULE_3__["COMMON_FUNCTION"].ACTIVE;
              this.typeOfDocumentForm.markAsUntouched();
              this.typeOfDocumentForm.markAsPristine();
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this6 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this type of document?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].typeOfDocument, _this6.typeOfDocument.id).subscribe(function () {
                    _this6.sweetAlertService.customSuccessMessage('Type of document successfully deleted.');

                    _this6.resetFormValidator();

                    _this6.getList();
                  });
                }
              });
            }
          }]);

          return TypeOfDocumentComponent;
        }();

        TypeOfDocumentComponent.??fac = function TypeOfDocumentComponent_Factory(t) {
          return new (t || TypeOfDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]));
        };

        TypeOfDocumentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: TypeOfDocumentComponent,
          selectors: [["app-type-of-document"]],
          viewQuery: function TypeOfDocumentComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 42,
          vars: 19,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], ["color", "warn", "formControlName", "dateOfLaunchEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "expiresOnEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "basedOnEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "variantEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "remarksEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], ["color", "warn", "formControlName", "inputEnable", 1, "col-md-5", 3, "ngModel", "checked", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["appearance", "outline", 1, "col-md-4"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
          template: function TypeOfDocumentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "file_present");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Type of Document ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Type of Document:");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_input_ngModelChange_16_listener($event) {
                return ctx.typeOfDocument.description = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, TypeOfDocumentComponent_mat_form_field_17_Template, 5, 2, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-slide-toggle", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_19_listener($event) {
                return ctx.typeOfDocument.dateOfLaunchEnable = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Has Date of Launch");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-slide-toggle", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_22_listener($event) {
                return ctx.typeOfDocument.expiresOnEnable = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Has Expiration Date");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-slide-toggle", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_26_listener($event) {
                return ctx.typeOfDocument.basedOnEnable = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Has Basis");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-slide-toggle", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_29_listener($event) {
                return ctx.typeOfDocument.variantEnable = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Has Variant");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-slide-toggle", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_33_listener($event) {
                return ctx.typeOfDocument.remarksEnable = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Has Remarks");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-slide-toggle", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TypeOfDocumentComponent_Template_mat_slide_toggle_ngModelChange_36_listener($event) {
                return ctx.typeOfDocument.inputEnable = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Has Input");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "app-form-action-buttons", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_saveFunction_39_listener() {
                return ctx.save();
              })("updateFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_updateFunction_39_listener() {
                return ctx.update();
              })("cancelFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_cancelFunction_39_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function TypeOfDocumentComponent_Template_app_form_action_buttons_deleteFunction_39_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "app-form-list", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function TypeOfDocumentComponent_Template_app_form_list_selectInListFunction_41_listener() {
                return ctx.getTypeOfDocument();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.typeOfDocumentForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.typeOfDocument.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.dateOfLaunchEnable)("checked", ctx.typeOfDocument.dateOfLaunchEnable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.expiresOnEnable)("checked", ctx.typeOfDocument.expiresOnEnable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.basedOnEnable)("checked", ctx.typeOfDocument.basedOnEnable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.variantEnable)("checked", ctx.typeOfDocument.variantEnable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.remarksEnable)("checked", ctx.typeOfDocument.remarksEnable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.typeOfDocument.inputEnable)("checked", ctx.typeOfDocument.inputEnable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.typeOfDocument)("childForm", ctx.typeOfDocumentForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__["FormListComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvdHlwZS1vZi1kb2N1bWVudC90eXBlLW9mLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
        });
        return TypeOfDocumentComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~applications-applications-module~type-of-document-type-of-document-module-es5.js.map