(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-list-user-list-module"], {
    /***/
    "SoP/":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/account/user-list/user-list.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SoP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\r\n\r\n  NOTE ! ! ! NOT IN USED. Go to User Account Component.\r\n\r\n --><form>\r\n  <div class=\"container-fluid\">\r\n    <!-- <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getAllAccounts()\"></app-form-list> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>group</mat-icon> Account List\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n\r\n    <form>\r\n      <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n        <mat-label>Search Account</mat-label>\r\n        <input matInput (keyup)=\"applyFilter1($event)\" placeholder=\"Search\" #input>\r\n        <mat-icon matSuffix>search</mat-icon>\r\n      </mat-form-field>\r\n\r\n      <div class=\"mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n          <ng-container matColumnDef=\"userAvatar\">\r\n            <th mat-header-cell *matHeaderCellDef> Image </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"openDialog(element)\"> <img\r\n                src=\"../../../../../assets/images/asc-icon.ico\" alt=\"\"> </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"fullName\">\r\n            <th mat-header-cell *matHeaderCellDef> Account name </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"openDialog(element)\"> {{ element?.firstName }}\r\n              {{ element?.middleName }} {{ element?.lastName }} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"companyName\">\r\n            <th mat-header-cell *matHeaderCellDef> Company </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"openDialog(element)\">\r\n              {{ element?.company.companyName }} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\" (click)=\"openDialog(element)\">\r\n              <span class=\"badge rounded-pill\" [ngClass]=\"element?.status === 'ACTIVE' || element?.status === 'APPROVED' ? 'bg-success' :\r\n                 element?.status === 'PENDING' ? 'bg-danger' :\r\n                 element?.status === 'VERIFICATION_SENT' ? 'bg-warning' : 'no-status-match' \">\r\n                {{ element?.status }}\r\n              </span>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n          No record found.\r\n        </div>\r\n        <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <!-- <mat-tab-group>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <i class=\"material-icons\">group</i>\r\n          All User Account\r\n        </ng-template>\r\n\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <i class=\"material-icons\">person_add_alt</i>\r\n          Pending Accounts\r\n        </ng-template>\r\n        <form>\r\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n            <mat-label>Search Account</mat-label>\r\n            <input matInput (keyup)=\"applyFilter2($event)\" placeholder=\"Search\" #input>\r\n            <mat-icon matSuffix>search</mat-icon>\r\n          </mat-form-field>\r\n\r\n          <div class=\"mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"dataSource2\" matSort>\r\n              <ng-container matColumnDef=\"userAvatar\">\r\n                <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                <td mat-cell *matCellDef=\"let element\"> <img\r\n                    src=\"../../../../../assets/images/asc-icon.ico\" alt=\"\"> </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"fullName\">\r\n                <th mat-header-cell *matHeaderCellDef> Account name </th>\r\n                <td mat-cell *matCellDef=\"let element\" (click)=\"openDialog(element)\"> {{ element?.firstName }}\r\n                  {{ element?.middleName }} {{ element?.lastName }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"companyName\">\r\n                <th mat-header-cell *matHeaderCellDef> Company </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  {{ element?.company.companyName }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <span class=\"badge rounded-pill\" [ngClass]=\"element?.status === 'ACTIVE' ? 'bg-success' :\r\n                   element?.status === 'PENDING' ? 'bg-danger' :\r\n                   element?.status === 'VERIFICATION_SENT' ? 'bg-warning' : 'no-status-match' \">\r\n                    {{ element?.status }}\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <div class=\"no-record\" [hidden]=\"dataSource2 && dataSource2?.data?.length > 0\">\r\n              No record found.\r\n            </div>\r\n            <mat-paginator [pageSizeOptions]=\"[10, 20, 40]\" showFirstLastButtons></mat-paginator>\r\n\r\n          </div>\r\n        </form>\r\n      </mat-tab> -->\r\n\r\n      <!-- <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n          Third\r\n        </ng-template>\r\n\r\n        Content 3\r\n      </mat-tab> -->\r\n    <!-- </mat-tab-group> -->\r\n\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "YOJv":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/pages/account/user-list/user-list.module.ts ***!
      \*********************************************************************/

    /*! exports provided: UserListModule */

    /***/
    function YOJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListModule", function () {
        return UserListModule;
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


      var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-list-routing.module */
      "jnzf");
      /* harmony import */


      var _user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-list.component */
      "rynh");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../fragments/fragments.module */
      "7Tf7");

      var UserListModule = /*#__PURE__*/_createClass(function UserListModule() {
        _classCallCheck(this, UserListModule);
      });

      UserListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserListRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"]]
      })], UserListModule);
      /***/
    },

    /***/
    "Z5Af":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-list/user-list.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function Z5Af(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  border-radius: 10%;\n  height: 2.2em;\n  width: 2.2em;\n}\n\ni {\n  margin: auto 10px;\n}\n\n.icon {\n  text-align: center;\n  color: #810000;\n  margin-bottom: 10px;\n}\n\n.icon i {\n  font-size: 8em;\n}\n\n.message {\n  text-align: center;\n}\n\n.message .fullname {\n  color: green;\n  font-size: 20px;\n}\n\n.details {\n  text-align: left;\n  background-color: rgba(240, 240, 240, 0.24);\n  padding: 10px 5px;\n  box-shadow: 10px 10px 9px -3px rgba(0, 0, 0, 0.13);\n  -webkit-box-shadow: 10px 10px 9px -3px rgba(0, 0, 0, 0.13);\n  -moz-box-shadow: 10px 10px 9px -3px rgba(0, 0, 0, 0.13);\n}\n\nlabel {\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n\n.dialog-button-content {\n  vertical-align: bottom;\n  text-align: center;\n}\n\n.dialog-button-content button {\n  color: white;\n  border: none;\n  padding: 5px 10px 5px 0px;\n  margin: 0px 5px;\n  font-weight: 500;\n  border-radius: 5px;\n}\n\n.dialog-button-content .warn {\n  background-color: red;\n}\n\n.dialog-button-content .caution {\n  background-color: #dfd000;\n  color: black;\n}\n\n.dialog-button-content .confirm {\n  background-color: #449bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQVdBO0VBQ0ksa0JBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFVSTtFQUNJLGNBQUE7QUFSUjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBV0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQVRSOztBQVlBO0VBQ0ksZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSwwREFBQTtFQUNBLHVEQUFBO0FBVEo7O0FBWUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBVEo7O0FBV0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFXSTtFQUNJLHFCQUFBO0FBVFI7O0FBV0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFUUjs7QUFXSTtFQUNJLHlCQUFBO0FBVFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnQvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGhlaWdodDogMi4yZW07XHJcbiAgICB3aWR0aDogMi4yZW07XHJcbn1cclxuXHJcbml7XHJcbiAgICBtYXJnaW46IGF1dG8gMTBweDtcclxuXHJcbn1cclxuXHJcbi8vIC5iYWRnZXtcclxuLy8gICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgd2lkdGg6IDEwZW07XHJcbi8vIH1cclxuXHJcblxyXG4vL2Rlc2lnbnMgZm9yIGRpYWxvZ1xyXG4uaWNvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6IHJnYigxMjksIDAsIDApO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGl7XHJcbiAgICAgICAgZm9udC1zaXplOiA4ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAuZnVsbG5hbWV7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH0gIFxyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC4yNCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggLTNweCByZ2JhKDAsMCwwLDAuMTMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IC0zcHggcmdiYSgwLDAsMCwwLjEzKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAtM3B4IHJnYmEoMCwwLDAsMC4xMyk7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kaWFsb2ctYnV0dG9uLWNvbnRlbnR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC53YXJue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC5jYXV0aW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIwOCwgMCk7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIC5jb25maXJte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMTU1LCAyNTUpO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "c0OL":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/account/user-list/user-list-dialog.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c0OL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-12 username\">\r\n        <p>{{data.username}}</p>\r\n    </div>\r\n</div>\r\n<div class=\"row fullname\">\r\n    <div class=\"col-12\">\r\n        <p>{{data.fullname}}</p>\r\n    </div>\r\n</div> -->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 icon\">\r\n            <i class=\"material-icons\">contact_support</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"row message\">\r\n        <div class=\"col-12\">\r\n            <p>Do you want to send verification email to <b class=\"fullname\">{{data.userAccount.username}}</b> ?</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"details\">\r\n        <div class=\"row \">\r\n            <div class=\"col-md-12\">\r\n                <label><i class=\"material-icons\">contact_mail</i> User Information: </label>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Full name: </b> {{data.userAccount.firstName}} {{data.userAccount.lastName}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Username: </b> {{data.userAccount.username}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>User Role: </b> {{data.userAccount.userRole.name}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Mobile Number: </b> {{data.userAccount.mobileNumber}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Status: </b>  <span class=\"badge rounded-pill bg-danger\" >{{data.userAccount.status}}</span></p>\r\n            </div>\r\n        </div><hr>\r\n        <div class=\"row \">\r\n            <div class=\"col-md-12\">\r\n                <label><i class=\"material-icons\">business</i> Company Information:</label>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Company Name: </b> {{data.userAccount.company.companyName}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Company Address: </b> {{data.userAccount.company.completeAddress}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Company Fax: </b> {{data.userAccount.company.companyFaxNo}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Company Telephone: </b> {{data.userAccount.company.companyTelephoneNo}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Company Tin: </b> {{data.userAccount.company.companyTin}}</p>\r\n                <p><i class=\"material-icons\">arrow_right</i><b>Members Affiliation: </b> {{data.userAccount.membersAffiliation.description}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"row\">\r\n        <div mat-dialog-actions>\r\n            <div class=\"dialog-button-content\" align=\"end\">\r\n                <button class=\"confirm\" (click)=\"onApprove()\"><i class=\"material-icons color__white\">thumb_up_alt</i>Approve</button>\r\n                <button class=\"warn\" (click)=\"onDisapprove()\"><i class=\"material-icons color__white\">thumb_down_alt</i>Disapprove</button>\r\n                <button class=\"caution\" (click)=\"onNoClick()\"><i class=\"material-icons color__white\">keyboard_return</i>Return</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "jnzf":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-list/user-list-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: UserListRoutingModule */

    /***/
    function jnzf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListRoutingModule", function () {
        return UserListRoutingModule;
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


      var _user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-list.component */
      "rynh");

      var routes = [{
        path: '',
        component: _user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
      }];

      var UserListRoutingModule = /*#__PURE__*/_createClass(function UserListRoutingModule() {
        _classCallCheck(this, UserListRoutingModule);
      });

      UserListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserListRoutingModule);
      /***/
    },

    /***/
    "rynh":
    /*!************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-list/user-list.component.ts ***!
      \************************************************************************/

    /*! exports provided: UserListComponent, UserListDialog */

    /***/
    function rynh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
        return UserListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListDialog", function () {
        return UserListDialog;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "SoP/");
      /* harmony import */


      var _user_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-list.component.scss */
      "Z5Af");
      /* harmony import */


      var _raw_loader_user_list_dialog_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! raw-loader!./user-list-dialog.html */
      "c0OL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _core_models_email_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../core/models/email.model */
      "5ZJz");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var UserListComponent = /*#__PURE__*/function () {
        function UserListComponent(apiService, router, dataStorage, dialog, spinner) {
          _classCallCheck(this, UserListComponent);

          this.apiService = apiService;
          this.router = router;
          this.dataStorage = dataStorage;
          this.dialog = dialog;
          this.spinner = spinner;
          this.displayedColumns = ['userAvatar', 'fullName', 'companyName', 'status'];
          this.email = new _core_models_email_model__WEBPACK_IMPORTED_MODULE_13__["Email"]();
          this.allUserLists = [];
          this.pendingUserLists = [];
        }

        _createClass(UserListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getList();
            this.spinner.show();
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].userAccount).subscribe(function (res) {
              _this.allUserLists = res.responseData.data; // console.log("ALL",this.allUserLists );

              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.responseData.data);
              _this.dataSource.paginator = _this.paginator;
              _this.dataSource.sort = _this.sort;
              setTimeout(function () {
                _this.spinner.hide();
              }, 1);
            }); // this.apiService.findAll(ENDPOINTS.getPendingAccounts).subscribe(
            //   (res:any) => {
            //     this.pendingUserLists = res.responseData.data;
            //     this.dataSource2 = new MatTableDataSource<UserAccount>(res.responseData.data);
            //     this.dataSource2.paginator = this.paginator2;
            //     this.dataSource2.sort = this.sort2;
            //   }
            // );
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            this.router.navigate(['/asc/page/account/user-registration']);
            this.dataStorage.saveUserAccountId(id);
          }
        }, {
          key: "applyFilter1",
          value: function applyFilter1(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "applyFilter2",
          value: function applyFilter2(event) {
            var filterValue = event.target.value;
            this.dataSource2.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openDialog",
          value: function openDialog(i) {
            var _this2 = this;

            if (i.status === "PENDING") {
              var dialogRef = this.dialog.open(UserListDialog, {
                width: '40%',
                height: '100%',
                data: {
                  userAccount: i
                } // data: {
                //   isFromModal: true,
                //   isUserRegistration: true
                // }

              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');

                _this2.getList();
              });
            } else {
              this.router.navigate(['asc/page/account/user-update/', i.id]);
            }
          }
        }]);

        return UserListComponent;
      }();

      UserListComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_11__["DataStorageService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"]
        }];
      };

      UserListComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
            "static": false
          }]
        }],
        paginator2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], {
            "static": false
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
            "static": false
          }]
        }],
        sort2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
            "static": false
          }]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], {
            "static": false
          }]
        }]
      };
      UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-list',
        template: _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserListComponent);

      var UserListDialog = /*#__PURE__*/function () {
        function UserListDialog(apiService, sweetAlertService, dialogRef, data) {
          _classCallCheck(this, UserListDialog);

          this.apiService = apiService;
          this.sweetAlertService = sweetAlertService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.email = new _core_models_email_model__WEBPACK_IMPORTED_MODULE_13__["Email"]();
          this.userAccounts = new _models__WEBPACK_IMPORTED_MODULE_10__["UserAccount"]();
        }

        _createClass(UserListDialog, [{
          key: "ngOnInit",
          value: function ngOnInit() {// console.log(this.data);
            // this.userAccounts = this.data.userAccount;
          }
        }, {
          key: "onApprove",
          value: function onApprove() {
            var _this3 = this;

            // console.log("APPROVED", this.data.userAccount.username);
            this.email.mailTo = this.data.userAccount.username;
            this.email.user = this.data.userAccount.firstName + ' ' + this.data.userAccount.lastName;
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_12__["ENDPOINTS"].emailApproved + '/' + this.data.userAccount.username, this.data.userAccount).subscribe(function (res) {
              if (res != undefined) {
                // this.sweetAlertService.success(res);
                _this3.sweetAlertService.customSuccessMessage('Email verification successfully sent.'); // this.apiService.save(ENDPOINTS.sendEmail, this.email).subscribe(
                //   (res:any) => {
                //     this.sweetAlertService.customSuccessMessage('Verification email has been sent!');
                //   });

              }
            });
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "onDisapprove",
          value: function onDisapprove() {}
        }]);

        return UserListDialog;
      }();

      UserListDialog.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_11__["SweetAlertService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      UserListDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-list',
        template: _raw_loader_user_list_dialog_html__WEBPACK_IMPORTED_MODULE_3__["default"],
        styles: [_user_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserListDialog);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-list-user-list-module-es5.js.map