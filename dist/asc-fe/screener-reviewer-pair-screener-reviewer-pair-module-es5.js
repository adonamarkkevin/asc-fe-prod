(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screener-reviewer-pair-screener-reviewer-pair-module"], {
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
    "Ei2c":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ScreenerReviewerPairComponent */

    /***/
    function Ei2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairComponent", function () {
        return ScreenerReviewerPairComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_screener_reviewer_pair_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./screener-reviewer-pair.component.html */
      "fr+M");
      /* harmony import */


      var _screener_reviewer_pair_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./screener-reviewer-pair.component.scss */
      "vBl5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fragments */
      "3swC");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/core/models/screener-reviewer-pair.model */
      "+iQW");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var ScreenerReviewerPairComponent = /*#__PURE__*/function () {
        function ScreenerReviewerPairComponent(apiService, formBuilder, sweetAlertService) {
          _classCallCheck(this, ScreenerReviewerPairComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.displayedColumns = ['screenerName', 'reviewerName'];
          this.screenerList = [];
          this.reviewerList = [];
          this.screenerReviewerPair = new app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_9__["ScreenerReviewerPair"]();
          this.screenerReviewerPairList = [];
        }

        _createClass(ScreenerReviewerPairComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
            this.getScreenerAndReviewerForList();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].screenerReviewerPairs).subscribe(function (res) {
              _this.screenerReviewerPairList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
            this.getScreenerAndReviewerForList();
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair).subscribe(function (res) {
              if (res !== undefined) {
                console.log(res);

                _this2.sweetAlertService.success(res);
              }
            }, function (err) {
              _this2.sweetAlertService.error(err);
            }, function () {
              _this2.resetFormValidator(), _this2.getList();

              _this2.getScreenerAndReviewerForList();
            });
          }
        }, {
          key: "getScreenerReviewerPair",
          value: function getScreenerReviewerPair() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].screenerReviewerPairs, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.screenerReviewerPair = res.responseData.data;
                console.log(_this3.screenerReviewerPair);
                console.log(_this3.screenerList.filter(function (res1) {
                  return res1.username === _this3.screenerReviewerPair.screener.username;
                })[0]);
                console.log(_this3.screenerReviewerPair.screener);
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].screenerReviewerPairs, this.screenerReviewerPair).subscribe(function (res) {
              if (res !== undefined) {
                _this4.sweetAlertService.success(res);
              }
            }, function (err) {
              _this4.sweetAlertService.error(err);
            }, function () {
              _this4.resetFormValidator();

              _this4.getList();

              _this4.getScreenerAndReviewerForList();
            });
          }
        }, {
          key: "setFormValidator",
          value: function setFormValidator() {
            this.screenerReviewerPairForm = this.formBuilder.group({
              screenerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              reviewerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.screenerReviewerPair = new app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_9__["ScreenerReviewerPair"]();
            this.screenerReviewerPairForm.markAsUntouched();
            this.screenerReviewerPairForm.markAsPristine();
          }
        }, {
          key: "getScreenerAndReviewerForList",
          value: function getScreenerAndReviewerForList() {
            var _this5 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].userAccount).subscribe(function (res) {
              _this5.screenerList = res.responseData.data.filter(function (account) {
                return account.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_SCREENER && account.status === _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
              });
              _this5.reviewerList = res.responseData.data.filter(function (account) {
                return account.userRole.name === _shared__WEBPACK_IMPORTED_MODULE_8__["USER_ROLES"].ROLE_REVIEWER && account.status === _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
              });
            });
          }
        }, {
          key: "compareUser",
          value: function compareUser(value, selected) {
            if (value && selected) {
              return value.username === selected.username;
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this6 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
              text: 'Are you sure you want to delete this screener reviewer pairing?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this6.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].screenerReviewerPairs, _this6.screenerReviewerPair.id).subscribe(function () {
                  _this6.sweetAlertService.customSuccessMessage('Screener reviewer pairing successfully deleted.');

                  _this6.resetFormValidator();

                  _this6.getList();
                });
              }
            });
          }
        }]);

        return ScreenerReviewerPairComponent;
      }();

      ScreenerReviewerPairComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]
        }];
      };

      ScreenerReviewerPairComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      ScreenerReviewerPairComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-screener-reviewer-pair',
        template: _raw_loader_screener_reviewer_pair_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_screener_reviewer_pair_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ScreenerReviewerPairComponent);
      /***/
    },

    /***/
    "L/mX":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ScreenerReviewerPairModule */

    /***/
    function LMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairModule", function () {
        return ScreenerReviewerPairModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./screener-reviewer-pair-routing.module */
      "T61r");
      /* harmony import */


      var _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./screener-reviewer-pair.component */
      "Ei2c");
      /* harmony import */


      var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/modules/fragments/fragments.module */
      "7Tf7");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ScreenerReviewerPairModule = /*#__PURE__*/_createClass(function ScreenerReviewerPairModule() {
        _classCallCheck(this, ScreenerReviewerPairModule);
      });

      ScreenerReviewerPairModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_4__["ScreenerReviewerPairComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _screener_reviewer_pair_routing_module__WEBPACK_IMPORTED_MODULE_3__["ScreenerReviewerPairRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"]]
      })], ScreenerReviewerPairModule);
      /***/
    },

    /***/
    "T61r":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ScreenerReviewerPairRoutingModule */

    /***/
    function T61r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPairRoutingModule", function () {
        return ScreenerReviewerPairRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./screener-reviewer-pair.component */
      "Ei2c");

      var routes = [{
        path: '',
        component: _screener_reviewer_pair_component__WEBPACK_IMPORTED_MODULE_3__["ScreenerReviewerPairComponent"]
      }];

      var ScreenerReviewerPairRoutingModule = /*#__PURE__*/_createClass(function ScreenerReviewerPairRoutingModule() {
        _classCallCheck(this, ScreenerReviewerPairRoutingModule);
      });

      ScreenerReviewerPairRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScreenerReviewerPairRoutingModule);
      /***/
    },

    /***/
    "fr+M":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function frM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                    Screener-Reviewer Pair\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"screenerReviewerPairForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Screener Name</mat-label>\r\n                    <mat-select [(ngModel)]=\"screenerReviewerPair.screener\" name=\"screenerName\" formControlName=\"screenerName\"\r\n                    [compareWith]=\"compareUser\">\r\n                        <mat-option *ngFor=\"let i of screenerList\" [value]=\"i\">\r\n                            {{ i?.firstName }} {{ i?.lastName }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n                    <mat-label>Reviewer Name</mat-label>\r\n                    <mat-select [(ngModel)]=\"screenerReviewerPair.reviewer\" name=\"reviewerName\" formControlName=\"reviewerName\"\r\n                    [compareWith]=\"compareUser\">\r\n                        <mat-option *ngFor=\"let i of reviewerList\" [value]=\"i\">\r\n                            {{ i?.firstName }} {{ i?.lastName }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"screenerReviewerPair\" [childForm]=\"screenerReviewerPairForm\"\r\n            (saveFunction)=\"save()\" (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\"\r\n            (deleteFunction)=\"delete()\">\r\n        </app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getScreenerReviewerPair()\"></app-form-list>\r\n\r\n    </div>\r\n</form>";
      /***/
    },

    /***/
    "vBl5":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/screener-reviewer-pair/screener-reviewer-pair.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vBl5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2Uvc2NyZWVuZXItcmV2aWV3ZXItcGFpci9zY3JlZW5lci1yZXZpZXdlci1wYWlyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=screener-reviewer-pair-screener-reviewer-pair-module-es5.js.map