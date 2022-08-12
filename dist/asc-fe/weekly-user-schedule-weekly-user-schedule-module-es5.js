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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weekly-user-schedule-weekly-user-schedule-module"], {
    /***/
    "5h0i":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: WeeklyUserScheduleModule */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeeklyUserScheduleModule", function () {
        return WeeklyUserScheduleModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./weekly-user-schedule.component */
      "aih6");
      /* harmony import */


      var _weekly_user_schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./weekly-user-schedule-routing.module */
      "h8Pe");

      var WeeklyUserScheduleModule = /*@__PURE__*/function () {
        var WeeklyUserScheduleModule = /*#__PURE__*/_createClass(function WeeklyUserScheduleModule() {
          _classCallCheck(this, WeeklyUserScheduleModule);
        });

        WeeklyUserScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: WeeklyUserScheduleModule
        });
        WeeklyUserScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function WeeklyUserScheduleModule_Factory(t) {
            return new (t || WeeklyUserScheduleModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _weekly_user_schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["WeeklyUserScheduleRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"]]]
        });
        return WeeklyUserScheduleModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeeklyUserScheduleModule, {
          declarations: [_weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_6__["WeeklyUserScheduleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _weekly_user_schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["WeeklyUserScheduleRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "aih6":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: WeeklyUserScheduleComponent */

    /***/
    function aih6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeeklyUserScheduleComponent", function () {
        return WeeklyUserScheduleComponent;
      });
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");

      var _c0 = ["calendar"];

      function WeeklyUserScheduleComponent_div_8_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeeklyUserScheduleComponent_div_8_mat_option_5_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var user_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.onSelectUser(user_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r7.firstName + " " + user_r7.lastName, " ");
        }
      }

      function WeeklyUserScheduleComponent_div_8_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-calendar", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function WeeklyUserScheduleComponent_div_8_div_6_Template_mat_calendar_selectedChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.onCalendarUpdate($event, _r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx_r6.todayDate)("hidden", !ctx_r6.selectedUser)("dateClass", ctx_r6.isSelected(ctx_r6));
        }
      }

      function WeeklyUserScheduleComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ASC Internal User");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WeeklyUserScheduleComponent_div_8_mat_option_5_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WeeklyUserScheduleComponent_div_8_div_6_Template, 3, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.users);
        }
      }

      function WeeklyUserScheduleComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function WeeklyUserScheduleComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeeklyUserScheduleComponent_td_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var element_r13 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.deleteDate(element_r13 == null ? null : element_r13.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.convertDate(element_r13 == null ? null : element_r13.date));
        }
      }

      function WeeklyUserScheduleComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
        }
      }

      function WeeklyUserScheduleComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 26);
        }
      }

      var WeeklyUserScheduleComponent = /*@__PURE__*/function () {
        var WeeklyUserScheduleComponent = /*#__PURE__*/function () {
          function WeeklyUserScheduleComponent(apiService) {
            _classCallCheck(this, WeeklyUserScheduleComponent);

            this.apiService = apiService;
            this.selectedDates = [];
            this.originalUserDates = [];
            this.userExistingRecord = null;
            this.displayedColumns = ['date'];
          }

          _createClass(WeeklyUserScheduleComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.initializeUsers();
              this.todayDate = new Date();
            }
          }, {
            key: "onCalendarUpdate",
            value: function onCalendarUpdate(e, calendar) {
              var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(e, 'yyyy-MM-dd');

              if (this.originalUserDates.find(function (d) {
                return d === date;
              })) {
                return;
              }

              if (!this.selectedDates.find(function (e) {
                return e === date;
              })) {
                this.selectedDates.push(date);
              } else {
                var index = this.selectedDates.findIndex(function (e) {
                  return e === date;
                });
                this.selectedDates.splice(index, 1);
              }

              this.calendar.updateTodaysDate();
              this.updateDataSource();
            }
          }, {
            key: "onSelectUser",
            value: function onSelectUser(user) {
              this.selectedUser = user;
              this.initializeUserDates(this.selectedUser);
            }
          }, {
            key: "isSelected",
            value: function isSelected(componentInstance) {
              return function (date) {
                var _a;

                return Boolean((_a = componentInstance.selectedDates) === null || _a === void 0 ? void 0 : _a.find(function (e) {
                  return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(date, 'yyyy-MM-dd') === e;
                })) ? 'selected' : null;
              };
            }
          }, {
            key: "saveSelectedDates",
            value: function saveSelectedDates() {
              var _this = this;

              var payload = {
                account: this.selectedUser,
                weeklyUserScheduleDates: this.convertSelectedDates(),
                id: this.userExistingRecord ? this.userExistingRecord.id : null
              };

              if (this.userExistingRecord) {
                this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].weeklyUserSchedule, payload).subscribe(function () {
                  _this.initializeUserDates(_this.selectedUser);
                });
              } else {
                this.apiService.insert(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].weeklyUserSchedule, Object.assign(Object.assign({}, payload), {
                  weeklyUserScheduleDates: []
                }), true).subscribe(function (e) {
                  _this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].weeklyUserSchedule, Object.assign(Object.assign({}, payload), {
                    id: e.responseData.data.id
                  })).subscribe(function () {
                    _this.initializeUserDates(_this.selectedUser);
                  });
                });
              }
            }
          }, {
            key: "convertDate",
            value: function convertDate(date) {
              return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(date), 'MMM/dd/yyyy');
            }
          }, {
            key: "deleteDate",
            value: function deleteDate(date) {
              var _this2 = this;

              var indexOriginal = this.originalUserDates.findIndex(function (e) {
                return e === date;
              });

              if (indexOriginal !== -1) {
                var id = this.userExistingRecord.weeklyUserScheduleDates.find(function (e) {
                  return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(e.scheduleDate), 'yyyy-MM-dd') === Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(date), 'yyyy-MM-dd');
                }).id;
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].weeklyScheduledUsers, id).subscribe(function () {
                  var index = _this2.userExistingRecord.weeklyUserScheduleDates.findIndex(function (e) {
                    return e.id === id;
                  });

                  _this2.userExistingRecord.weeklyUserScheduleDates.splice(index, 1);

                  _this2.deletionUpdate(date);

                  _this2.originalUserDates.splice(indexOriginal, 1);
                });
              } else {
                this.deletionUpdate(date);
              }
            }
          }, {
            key: "deletionUpdate",
            value: function deletionUpdate(date) {
              var indexSelected = this.selectedDates.findIndex(function (e) {
                return e === date;
              });
              this.selectedDates.splice(indexSelected, 1);
              this.updateDataSource();
              this.calendar.updateTodaysDate();
            }
          }, {
            key: "updateDataSource",
            value: function updateDataSource() {
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.selectedDates.sort(function (a, b) {
                return new Date(b).valueOf() - new Date(a).valueOf();
              }).map(function (date) {
                return {
                  date: date
                };
              }));
            }
          }, {
            key: "convertSelectedDates",
            value: function convertSelectedDates() {
              var _this3 = this;

              return this.selectedDates.map(function (e) {
                var originalDate = null;

                if (_this3.userExistingRecord) {
                  originalDate = _this3.userExistingRecord.weeklyUserScheduleDates.find(function (c) {
                    return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(c.scheduleDate), 'yyyy-MM-dd') === Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(e), 'yyyy-MM-dd');
                  });
                }

                return originalDate !== null && originalDate !== void 0 ? originalDate : {
                  scheduleDate: e
                };
              });
            }
          }, {
            key: "initializeUsers",
            value: function initializeUsers() {
              var _this4 = this;

              this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].userAccountType, "/ASC_USER")).subscribe(function (res) {
                _this4.users = res.responseData.data;
              });
            }
          }, {
            key: "clearData",
            value: function clearData() {
              this.selectedDates = [];
              this.originalUserDates = [];
              this.calendar.updateTodaysDate();
              this.updateDataSource();
            }
          }, {
            key: "initializeUserDates",
            value: function initializeUserDates(user) {
              var _this5 = this;

              this.clearData();
              this.apiService.findAll("".concat(_shared__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].weeklyUserScheduleCustomSearch, "?&accountId=").concat(user.id)).subscribe(function (res) {
                if (res.data.length) {
                  res = res.data[0];
                  _this5.originalUserDates = res.weeklyUserScheduleDates.map(function (e) {
                    return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(e.scheduleDate), 'yyyy-MM-dd');
                  });
                  _this5.selectedDates = _toConsumableArray(_this5.originalUserDates);
                  _this5.userExistingRecord = res;

                  _this5.updateDataSource();

                  _this5.calendar.updateTodaysDate();
                } else {
                  _this5.userExistingRecord = null;
                }
              });
            }
          }]);

          return WeeklyUserScheduleComponent;
        }();

        WeeklyUserScheduleComponent.ɵfac = function WeeklyUserScheduleComponent_Factory(t) {
          return new (t || WeeklyUserScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
        };

        WeeklyUserScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: WeeklyUserScheduleComponent,
          selectors: [["app-weekly-user-schedule"]],
          viewQuery: function WeeklyUserScheduleComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
            }
          },
          decls: 21,
          vars: 6,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], ["class", "row", 4, "ngIf"], [1, "mat-elevation-z8", "fields"], ["mat-table", "", "mat-sort", "", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], [1, "col-md-12"], ["mat-raised-button", "", 1, "button-red", "col-md-3", "margin", 3, "hidden", "click"], ["appearance", "outline", 1, "col-md-5"], ["name", "status"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-5", "appearance", "outline", 4, "ngIf"], [3, "value", "click"], [3, "minDate", "hidden", "dateClass", "selectedChange"], ["calendar", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", 1, "button-red", "col-md-1", "delete-btn", 3, "click"], [1, "date-text"], ["mat-header-row", ""], ["mat-row", ""]],
          template: function WeeklyUserScheduleComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Weekly User Schedule ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeeklyUserScheduleComponent_div_8_Template, 7, 2, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeeklyUserScheduleComponent_th_12_Template, 2, 0, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WeeklyUserScheduleComponent_td_13_Template, 5, 1, "td", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WeeklyUserScheduleComponent_tr_14_Template, 1, 0, "tr", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WeeklyUserScheduleComponent_tr_15_Template, 1, 0, "tr", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " No record found. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeeklyUserScheduleComponent_Template_button_click_19_listener() {
                return ctx.saveSelectedDates();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Save");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.selectedDates && ctx.selectedDates.length > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.selectedDates.length === 0);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatCalendar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
          styles: [".mat-calendar-body-cell.selected {\n  background-color: #c5140c !important;\n  border-radius: 50%;\n}\n\n.drop-calendar {\n  width: 30rem;\n}\n\n.margin {\n  margin: 10px !important;\n  right: 0 !important;\n  bottom: 0 !important;\n}\n\n.delete-btn {\n  float: right !important;\n}\n\n.date-text {\n  font-size: larger;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS93ZWVrbHktdXNlci1zY2hlZHVsZS93ZWVrbHktdXNlci1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9DQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUVFLFlBQUE7QUFBRjs7QUFHQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS93ZWVrbHktdXNlci1zY2hlZHVsZS93ZWVrbHktdXNlci1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkXG57XG4gIGJhY2tncm91bmQtY29sb3I6I2M1MTQwYyFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJVxufVxuLmRyb3AtY2FsZW5kYXJcbntcbiAgd2lkdGg6MzByZW1cbn1cblxuLm1hcmdpbiBcbntcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZS10ZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"],
          encapsulation: 2
        });
        return WeeklyUserScheduleComponent;
      }();
      /***/

    },

    /***/
    "h8Pe":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: WeeklyUserScheduleRoutingModule */

    /***/
    function h8Pe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeeklyUserScheduleRoutingModule", function () {
        return WeeklyUserScheduleRoutingModule;
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


      var _weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./weekly-user-schedule.component */
      "aih6");

      var routes = [{
        path: '',
        component: _weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_2__["WeeklyUserScheduleComponent"]
      }];

      var WeeklyUserScheduleRoutingModule = /*@__PURE__*/function () {
        var WeeklyUserScheduleRoutingModule = /*#__PURE__*/_createClass(function WeeklyUserScheduleRoutingModule() {
          _classCallCheck(this, WeeklyUserScheduleRoutingModule);
        });

        WeeklyUserScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: WeeklyUserScheduleRoutingModule
        });
        WeeklyUserScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function WeeklyUserScheduleRoutingModule_Factory(t) {
            return new (t || WeeklyUserScheduleRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return WeeklyUserScheduleRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeeklyUserScheduleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=weekly-user-schedule-weekly-user-schedule-module-es5.js.map