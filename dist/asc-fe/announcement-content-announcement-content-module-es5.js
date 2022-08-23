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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-content-announcement-content-module"], {
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
    "E5Y0":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E5Y0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvYW5ub3VuY2VtZW50LWNvbnRlbnQvYW5ub3VuY2VtZW50LWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "LmGG":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AnnouncementContentRoutingModule */

    /***/
    function LmGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementContentRoutingModule", function () {
        return AnnouncementContentRoutingModule;
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


      var _announcement_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./announcement-content.component */
      "MvWX");

      var routes = [{
        path: '',
        component: _announcement_content_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementContentComponent"]
      }];

      var AnnouncementContentRoutingModule = /*#__PURE__*/_createClass(function AnnouncementContentRoutingModule() {
        _classCallCheck(this, AnnouncementContentRoutingModule);
      });

      AnnouncementContentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnnouncementContentRoutingModule);
      /***/
    },

    /***/
    "MvWX":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AnnouncementContentComponent */

    /***/
    function MvWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementContentComponent", function () {
        return AnnouncementContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_announcement_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./announcement-content.component.html */
      "uHUQ");
      /* harmony import */


      var _announcement_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./announcement-content.component.scss */
      "E5Y0");
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


      var app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/core/models/announcement.model */
      "dszm");
      /* harmony import */


      var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/core/services/date.service */
      "HMc/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);

      var AnnouncementContentComponent = /*#__PURE__*/function () {
        function AnnouncementContentComponent(apiService, formBuilder, sweetAlertService, dateService) {
          _classCallCheck(this, AnnouncementContentComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.sweetAlertService = sweetAlertService;
          this.dateService = dateService;
          this.displayedColumns = ['title', 'details', 'noOfView', 'postingDate', 'status'];
          this.statusList = _toConsumableArray(_shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]);
          this.announcement = new app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_9__["Announcement"]();
          this.announcementList = [];

          this.disabledWeekEnds = function (d) {
            var day = (d || new Date()).getDay();
            return day !== 0 && day !== 6;
          };
        }

        _createClass(AnnouncementContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.setFormValidator();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements).subscribe(function (res) {
              _this.announcementList = res.responseData.data;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.formListComponent.paginator;
              _this.dataSource.sort = _this.formListComponent.sort;
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            this.announcement.postingDate = this.dateService.setDate(this.announcement.postingDate);
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.announcement).subscribe(function (res) {
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
          key: "getAnnouncement",
          value: function getAnnouncement() {
            var _this3 = this;

            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.formListComponent.idForUpdate).subscribe(function (res) {
              if (res) {
                _this3.announcement = res.responseData.data;
                console.log(res);
              }
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            this.announcement.postingDate = this.dateService.setDate(this.announcement.postingDate);
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, this.announcement).subscribe(function (res) {
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
            this.announcement.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
            this.announcementForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              noOfView: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              postingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              status: [''],
              link: ['']
            });
          }
        }, {
          key: "resetFormValidator",
          value: function resetFormValidator() {
            this.announcement = new app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_9__["Announcement"]();
            this.announcement.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
            this.announcementForm.markAsUntouched();
            this.announcementForm.markAsPristine();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
              text: 'Are you sure you want to delete this announcement?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].announcements, _this5.announcement.id).subscribe(function () {
                  _this5.sweetAlertService.customSuccessMessage('Announcement successfully deleted.');

                  _this5.resetFormValidator();

                  _this5.getList();
                });
              }
            });
          }
        }]);

        return AnnouncementContentComponent;
      }();

      AnnouncementContentComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]
        }, {
          type: app_core_services_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }];
      };

      AnnouncementContentComponent.propDecorators = {
        formListComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_fragments__WEBPACK_IMPORTED_MODULE_6__["FormListComponent"]]
        }]
      };
      AnnouncementContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-announcement-content',
        template: _raw_loader_announcement_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_announcement_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AnnouncementContentComponent);
      /***/
    },

    /***/
    "jfQZ":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/pages/maintenance/announcement-content/announcement-content.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AnnouncementContentModule */

    /***/
    function jfQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementContentModule", function () {
        return AnnouncementContentModule;
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


      var _announcement_content_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./announcement-content-routing.module */
      "LmGG");
      /* harmony import */


      var _announcement_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./announcement-content.component */
      "MvWX");
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

      var AnnouncementContentModule = /*#__PURE__*/_createClass(function AnnouncementContentModule() {
        _classCallCheck(this, AnnouncementContentModule);
      });

      AnnouncementContentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_announcement_content_component__WEBPACK_IMPORTED_MODULE_4__["AnnouncementContentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _announcement_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnnouncementContentRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"]]
      })], AnnouncementContentModule);
      /***/
    },

    /***/
    "uHUQ":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/announcement-content/announcement-content.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uHUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                  <mat-icon>announcement</mat-icon> Announcements\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form [formGroup]=\"announcementForm\">\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Title <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"announcement.title\" name=\"title\" formControlName=\"title\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Details <span class=\"required-field\">*</span></mat-label>\r\n                    <textarea matInput [(ngModel)]=\"announcement.details\" name=\"details\"\r\n                        formControlName=\"details\"></textarea>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n                    <mat-label>Link <span class=\"required-field\">*</span></mat-label>\r\n                    <textarea matInput [(ngModel)]=\"announcement.link\" name=\"link\"\r\n                        formControlName=\"link\"></textarea>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Number Of View <span class=\"required-field\">*</span></mat-label>\r\n                    <input matInput [(ngModel)]=\"announcement.noOfView\" name=\"noOfView\" formControlName=\"noOfView\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Posting Date</mat-label>\r\n                    <input matInput placeholder=\"Date\" [matDatepicker]=\"postingDate\"\r\n                        [matDatepickerFilter]=\"disabledWeekEnds\" readonly [(ngModel)]=\"announcement.postingDate\"\r\n                        name=\"postingDate\" formControlName=\"postingDate\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"postingDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker color=\"warn\" #postingDate disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n                    <mat-label>Status</mat-label>\r\n                    <mat-select [(ngModel)]=\"announcement.status\" name=\"status\" formControlName=\"status\">\r\n                        <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n                            {{i.status}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </form>\r\n\r\n        <app-form-action-buttons [childObject]=\"announcement\" [childForm]=\"announcementForm\" (saveFunction)=\"save()\"\r\n            (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n        <br>\r\n        <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n            (selectInListFunction)=\"getAnnouncement()\"></app-form-list>\r\n\r\n    </div>\r\n</form>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=announcement-content-announcement-content-module-es5.js.map