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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-role-user-role-module"], {
    /***/
    "Hfcq":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role.module.ts ***!
      \*********************************************************************/

    /*! exports provided: UserRoleModule */

    /***/
    function Hfcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleModule", function () {
        return UserRoleModule;
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


      var _user_role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-role-routing.module */
      "VtJi");
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


      var _user_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-role.component */
      "Yv2Y");

      var UserRoleModule = /*@__PURE__*/function () {
        var UserRoleModule = /*#__PURE__*/_createClass(function UserRoleModule() {
          _classCallCheck(this, UserRoleModule);
        });

        UserRoleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: UserRoleModule
        });
        UserRoleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function UserRoleModule_Factory(t) {
            return new (t || UserRoleModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoleRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]]
        });
        return UserRoleModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserRoleModule, {
          declarations: [_user_role_component__WEBPACK_IMPORTED_MODULE_6__["UserRoleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoleRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "VtJi":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: UserRoleRoutingModule */

    /***/
    function VtJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleRoutingModule", function () {
        return UserRoleRoutingModule;
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


      var _user_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-role.component */
      "Yv2Y");

      var routes = [{
        path: '',
        component: _user_role_component__WEBPACK_IMPORTED_MODULE_2__["UserRoleComponent"]
      }];

      var UserRoleRoutingModule = /*@__PURE__*/function () {
        var UserRoleRoutingModule = /*#__PURE__*/_createClass(function UserRoleRoutingModule() {
          _classCallCheck(this, UserRoleRoutingModule);
        });

        UserRoleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: UserRoleRoutingModule
        });
        UserRoleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function UserRoleRoutingModule_Factory(t) {
            return new (t || UserRoleRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return UserRoleRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserRoleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Yv2Y":
    /*!************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-role/user-role.component.ts ***!
      \************************************************************************/

    /*! exports provided: UserRoleComponent */

    /***/
    function Yv2Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function () {
        return UserRoleComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function UserRoleComponent_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = ctx.$implicit;
          var tmp_1_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r10.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r10 == null ? null : i_r10.role == null ? null : (tmp_1_0 = i_r10.role.replaceAll("_", " ")) == null ? null : tmp_1_0.replace("ENCODER", "EVALUATOR"), " ");
        }
      }

      function UserRoleComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r11.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r11.status, " ");
        }
      }

      function UserRoleComponent_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRoleComponent_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "task_alt ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " UPDATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r2.userRoleForm.valid);
        }
      }

      function UserRoleComponent_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRoleComponent_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.resetFormValidator();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((ctx_r3.userRole == null ? null : ctx_r3.userRole.id) ? "cancel" : "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (ctx_r3.userRole == null ? null : ctx_r3.userRole.id) ? "CANCEL" : "RESET", " ");
        }
      }

      function UserRoleComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " User Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRoleComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRoleComponent_td_30_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var element_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.getUserRole(element_r16 == null ? null : element_r16.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;
          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16 == null ? null : element_r16.name == null ? null : (tmp_0_0 = element_r16.name.replaceAll("_", " ")) == null ? null : tmp_0_0.replace("ENCODER", "EVALUATOR"), " ");
        }
      }

      function UserRoleComponent_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserRoleComponent_td_33_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r19 == null ? null : element_r19.status);
        }
      }

      function UserRoleComponent_td_33_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r19 == null ? null : element_r19.status);
        }
      }

      function UserRoleComponent_td_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserRoleComponent_td_33_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var element_r19 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.getUserRole(element_r19 == null ? null : element_r19.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserRoleComponent_td_33_span_1_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UserRoleComponent_td_33_span_2_Template, 2, 1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (element_r19 == null ? null : element_r19.status) == "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (element_r19 == null ? null : element_r19.status) != "ACTIVE");
        }
      }

      function UserRoleComponent_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 31);
        }
      }

      function UserRoleComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 32);
        }
      }

      var _c0 = function _c0() {
        return [10, 20, 30];
      };

      var UserRoleComponent = /*@__PURE__*/function () {
        var UserRoleComponent = /*#__PURE__*/function () {
          function UserRoleComponent(apiService, formBuilder, sweetAlertService) {
            _classCallCheck(this, UserRoleComponent);

            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.displayedColumns = ['name', 'status'];
            this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_6__["STATUSES"]);
            this.roleList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_6__["ROLES"]);
            this.userRole = new _models__WEBPACK_IMPORTED_MODULE_5__["UserRole"]();
            this.userRoleList = [];
          }

          _createClass(UserRoleComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getList();
              this.setFormValidator();
            }
          }, {
            key: "getList",
            value: function getList() {
              var _this = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].roles).subscribe(function (res) {
                console.log(res.responseData.data);
                _this.userRoleList = res.responseData.data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.userRoleList);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
              }, function (err) {});
            }
          }, {
            key: "save",
            value: function save() {
              var _this2 = this;

              this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].roles, this.userRole).subscribe(function (res) {
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
            key: "getUserRole",
            value: function getUserRole(name) {
              var _this3 = this;

              this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].roles + '/role-name/' + name).subscribe(function (res) {
                if (res) {
                  _this3.userRole = res;
                }
              }, function (err) {
                _this3.userRole = err.error;
              });
            }
          }, {
            key: "update",
            value: function update() {
              var _this4 = this;

              this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].roles, this.userRole).subscribe(function (res) {
                if (res !== undefined) {
                  _this4.sweetAlertService.success(res);
                }
              }, function (err) {
                _this4.sweetAlertService.error(err);
              }, function () {
                // actions after subscription
                _this4.resetFormValidator();

                _this4.getList();
              });
            }
          }, {
            key: "setFormValidator",
            value: function setFormValidator() {
              this.userRole.status = _shared__WEBPACK_IMPORTED_MODULE_6__["COMMON_FUNCTION"].ACTIVE;
              this.userRoleForm = this.formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                status: ['']
              });
            }
          }, {
            key: "resetFormValidator",
            value: function resetFormValidator() {
              this.userRole = new _models__WEBPACK_IMPORTED_MODULE_5__["UserRole"]();
              this.userRole.status = _shared__WEBPACK_IMPORTED_MODULE_6__["COMMON_FUNCTION"].ACTIVE;
              this.userRoleForm.markAsUntouched();
              this.userRoleForm.markAsPristine();
            }
          }]);

          return UserRoleComponent;
        }();

        UserRoleComponent.??fac = function UserRoleComponent_Factory(t) {
          return new (t || UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]));
        };

        UserRoleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: UserRoleComponent,
          selectors: [["app-user-role"]],
          viewQuery: function UserRoleComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
            }
          },
          decls: 39,
          vars: 13,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], ["name", "name", "formControlName", "name", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-4"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "no-record", 3, "hidden"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [3, "value"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["class", "badge rounded-pill bg-success", 4, "ngIf"], ["class", "badge rounded-pill bg-danger", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-success"], [1, "badge", "rounded-pill", "bg-danger"], ["mat-header-row", ""], ["mat-row", ""]],
          template: function UserRoleComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "settings_accessibility");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " User Role ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "User Role");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-select", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRoleComponent_Template_mat_select_ngModelChange_14_listener($event) {
                return ctx.userRole.name = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, UserRoleComponent_mat_option_15_Template, 2, 2, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Status");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-select", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UserRoleComponent_Template_mat_select_ngModelChange_19_listener($event) {
                return ctx.userRole.status = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, UserRoleComponent_mat_option_20_Template, 2, 2, "mat-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, UserRoleComponent_button_23_Template, 4, 1, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, UserRoleComponent_button_24_Template, 4, 2, "button", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "table", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](28, 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, UserRoleComponent_th_29_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, UserRoleComponent_td_30_Template, 2, 1, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](31, 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, UserRoleComponent_th_32_Template, 2, 0, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, UserRoleComponent_td_33_Template, 3, 2, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, UserRoleComponent_tr_34_Template, 1, 0, "tr", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, UserRoleComponent_tr_35_Template, 1, 0, "tr", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " No record found. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-paginator", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.userRoleForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userRole.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.roleList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userRole.status);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.statusList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userRole == null ? null : ctx.userRole.id);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.userRole == null ? null : ctx.userRole.id) || (ctx.userRole == null ? null : ctx.userRole.name));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.dataSource && (ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length) > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c0));
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
          styles: [".badge[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  text-decoration: none;\n  width: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcm9sZS91c2VyLXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcm9sZS91c2VyLXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2V7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG59Il19 */"]
        });
        return UserRoleComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-role-user-role-module-es5.js.map