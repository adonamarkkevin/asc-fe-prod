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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~category-category-module"], {
    /***/
    "1kjv":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/category/category.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CategoryComponent */

    /***/
    function kjv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
        return CategoryComponent;
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


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @models */
      "sKXY");
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


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../fragments/form-action-buttons/form-action-buttons.component */
      "TPGS");
      /* harmony import */


      var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../fragments/form-list/form-list.component */
      "DeKZ");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function CategoryComponent_mat_form_field_15_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r2.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2.status, " ");
        }
      }

      function CategoryComponent_mat_form_field_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryComponent_mat_form_field_15_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.category.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_mat_form_field_15_mat_option_4_Template, 2, 2, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.category.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusList);
        }
      }

      var CategoryComponent = /*@__PURE__*/function () {
        var CategoryComponent = /*#__PURE__*/function () {
          function CategoryComponent(apiService, formBuilder, sweetAlertService) {
            _classCallCheck(this, CategoryComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['categoryDescription', 'status'];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]);
            this.category = new _models__WEBPACK_IMPORTED_MODULE_5__["Category"]();
            this.categoryList = [];
            this.isExist = false;
          }

          _createClass(CategoryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getList();
              this.setFormValidator(); // this.getProductList();
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category).subscribe(function (res) {
                _this.categoryList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                _this.dataSource.paginator = _this.formListComponent.paginator;
                _this.dataSource.sort = _this.formListComponent.sort;
              });
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category, this.category).subscribe(function (res) {
                if (res !== undefined) {
                  _this2.sweetAlertService.success(res);
                }
              }, function (err) {
                _this2.sweetAlertService.error(err);
              }, function () {
                _this2.resetFormValidator(), _this2.getList();
              });
            } // not in used

          }, {
            key: "checkCategoryIfExisting",
            value: function checkCategoryIfExisting(categoryName) {
              var _this3 = this;

              var category = [];
              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category).subscribe(function (res) {
                category = res.responseData.data;
                category = category.filter(function (cn) {
                  return cn.description === categoryName;
                });

                if (category.length > 0) {
                  _this3.sweetAlertService.customErrorMessage('Category name already exist.');
                } else {
                  if (_this3.category.id > 0) {
                    _this3.update();
                  } else {
                    _this3.save();
                  }
                }
              });
            }
          }, {
            key: "getCategory",
            value: function getCategory() {
              var _this4 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category, this.formListComponent.idForUpdate).subscribe(function (res) {
                if (res) {
                  _this4.category = res.responseData.data;
                }
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this5 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category, this.category).subscribe(function (res) {
                if (res !== undefined) {
                  _this5.sweetAlertService.success(res);
                }
              }, function (err) {
                _this5.sweetAlertService.error(err);
              }, function () {
                _this5.resetFormValidator();

                _this5.getList();
              });
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.category.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
              this.categoryForm = this.formBuilder.group({
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                status: ['']
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.category = new _models__WEBPACK_IMPORTED_MODULE_5__["Category"]();
              this.category.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
              this.categoryForm.markAsUntouched();
              this.categoryForm.markAsPristine();
            }
          }, {
            key: "delete",
            value: function _delete() {
              var _this6 = this;

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this company?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].category, _this6.category.id).subscribe(function () {
                    _this6.sweetAlertService.customSuccessMessage('Category successfully deleted.');

                    _this6.resetFormValidator();

                    _this6.getList();
                  }, function (err) {
                    _this6.sweetAlertService.error(err);
                  }, function () {
                    _this6.resetFormValidator();

                    _this6.getList();
                  });
                }
              });
            }
          }]);

          return CategoryComponent;
        }();

        CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
          return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]));
        };

        CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CategoryComponent,
          selectors: [["app-category"]],
          viewQuery: function CategoryComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
            }
          },
          decls: 19,
          vars: 7,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], [1, "required-field"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["class", "col-md-4", "appearance", "outline", 4, "ngIf"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["appearance", "outline", 1, "col-md-4"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
          template: function CategoryComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Category ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Category: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryComponent_Template_input_ngModelChange_14_listener($event) {
                return ctx.category.description = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CategoryComponent_mat_form_field_15_Template, 5, 2, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-form-action-buttons", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function CategoryComponent_Template_app_form_action_buttons_saveFunction_16_listener() {
                return ctx.save();
              })("updateFunction", function CategoryComponent_Template_app_form_action_buttons_updateFunction_16_listener() {
                return ctx.update();
              })("cancelFunction", function CategoryComponent_Template_app_form_action_buttons_cancelFunction_16_listener() {
                return ctx.resetFormValidator();
              })("deleteFunction", function CategoryComponent_Template_app_form_action_buttons_deleteFunction_16_listener() {
                return ctx["delete"]();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-form-list", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function CategoryComponent_Template_app_form_list_selectInListFunction_18_listener() {
                return ctx.getCategory();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.category)("childForm", ctx.categoryForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_11__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_12__["FormListComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"]
        });
        return CategoryComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~applications-applications-module~category-category-module-es5.js.map