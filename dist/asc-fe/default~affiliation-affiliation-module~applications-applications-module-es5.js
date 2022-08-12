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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~affiliation-affiliation-module~applications-applications-module"], {
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function AffiliationComponent_mat_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2, " ");
        }
      }

      function AffiliationComponent_mat_form_field_22_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

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

      function AffiliationComponent_mat_form_field_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AffiliationComponent_mat_form_field_22_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.affiliation.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AffiliationComponent_mat_form_field_22_mat_option_4_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.affiliation.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.statusList);
        }
      }

      var AffiliationComponent = /*@__PURE__*/function () {
        var AffiliationComponent = /*#__PURE__*/function () {
          function AffiliationComponent(apiService, formBuilder, sweetAlertService) {
            _classCallCheck(this, AffiliationComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['affiliationDesc', 'member', 'status'];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_1__["STATUSES"]);
            this.yesNoList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_1__["YES_NO_OPTION"]);
            this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_4__["Affiliation"]();
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
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation).subscribe(function (res) {
                _this.affiliationList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              if (this.affiliation.member.toString() === 'No') {
                this.affiliation.member = this.setValue(this.affiliation.member);
              }

              this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.affiliation).subscribe(function (res) {
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
            key: "getAffiliation",
            value: function getAffiliation() {
              var _this3 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this3.affiliation = res.responseData.data;
                }
              });
            }
          }, {
            key: "confirmUpdate",
            value: function confirmUpdate() {
              var _this4 = this;

              if (this.affiliation.status === 'INACTIVE') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                  text: "Admin should manually change the company's membership affiliation value to its equivalent non member value. Continue?",
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Confirm'
                }).then(function (result) {
                  if (result.value) {
                    _this4.update();
                  }
                });
              } else {
                this.update();
              }
            }
          }, {
            key: "update",
            value: function update() {
              var _this5 = this;

              this.affiliation.member = this.setValue(this.affiliation.member);
              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, this.affiliation).subscribe(function (res) {
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
            key: "setFormValidator",
            value: function setFormValidator() {
              this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
              this.affiliation.member = true;
              this.affiliationForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                member: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['']
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.affiliation = new _models__WEBPACK_IMPORTED_MODULE_4__["Affiliation"]();
              this.affiliation.status = _shared__WEBPACK_IMPORTED_MODULE_1__["COMMON_FUNCTION"].ACTIVE;
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
              var _this6 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this brand?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].affiliation, _this6.affiliation.id).subscribe(function () {
                    _this6.sweetAlertService.customSuccessMessage('Affiliation successfully deleted.');

                    _this6.resetFormValidator();

                    _this6.getList();
                  });
                }
              });
            }
          }]);

          return AffiliationComponent;
        }();

        AffiliationComponent.ɵfac = function AffiliationComponent_Factory(t) {
          return new (t || AffiliationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]));
        };

        AffiliationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AffiliationComponent,
          selectors: [["app-affiliation"]],
          viewQuery: function AffiliationComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_5__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 26,
          vars: 10,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "col-md-4"], ["name", "member", "formControlName", "member", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"]],
          template: function AffiliationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "groups");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Member's Affiliation ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Member's Affiliation ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AffiliationComponent_Template_input_ngModelChange_16_listener($event) {
                return ctx.affiliation.description = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Member");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AffiliationComponent_Template_mat_select_ngModelChange_20_listener($event) {
                return ctx.affiliation.member = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AffiliationComponent_mat_option_21_Template, 2, 2, "mat-option", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AffiliationComponent_mat_form_field_22_Template, 5, 2, "mat-form-field", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-form-action-buttons", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function AffiliationComponent_Template_app_form_action_buttons_saveFunction_23_listener() {
                return ctx.save();
              })("updateFunction", function AffiliationComponent_Template_app_form_action_buttons_updateFunction_23_listener() {
                return ctx.confirmUpdate();
              })("cancelFunction", function AffiliationComponent_Template_app_form_action_buttons_cancelFunction_23_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function AffiliationComponent_Template_app_form_action_buttons_deleteFunction_23_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-form-list", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function AffiliationComponent_Template_app_form_list_selectInListFunction_25_listener() {
                return ctx.getAffiliation();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.affiliationForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.affiliation.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.affiliation.member)("compareWith", ctx.compareMember);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yesNoList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.affiliation.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.affiliation)("childForm", ctx.affiliationForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_14__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYWZmaWxpYXRpb24vYWZmaWxpYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
        });
        return AffiliationComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~affiliation-affiliation-module~applications-applications-module-es5.js.map