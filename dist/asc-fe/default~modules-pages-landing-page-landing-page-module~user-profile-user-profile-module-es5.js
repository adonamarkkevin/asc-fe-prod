(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module"], {
    /***/
    "0TUH":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-profile/user-profile.component.ts ***!
      \******************************************************************************/

    /*! exports provided: UserProfileComponent */

    /***/
    function TUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
        return UserProfileComponent;
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


      var _maintenance_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../maintenance/user-account/user-account.component */
      "ea/y");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UserProfileComponent = /*@__PURE__*/function () {
        var UserProfileComponent = /*#__PURE__*/function () {
          function UserProfileComponent(dataStorage, apiService, sweetAlertService, router, route, dialog) {
            _classCallCheck(this, UserProfileComponent);

            this.dataStorage = dataStorage;
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.router = router;
            this.route = route;
            this.dialog = dialog;
            this.userProfile = new _models__WEBPACK_IMPORTED_MODULE_1__["UserAccount"]();
          }

          _createClass(UserProfileComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.userProfile = this.dataStorage.getUserAccount();
            }
          }, {
            key: "updateAccount",
            value: function updateAccount() {
              var _this = this;

              var dialogRef = this.dialog.open(_maintenance_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_2__["UserAccountComponent"], {
                width: '80%',
                height: '85%',
                data: {
                  isFromProfile: true,
                  userAccount: this.userProfile
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed', result);

                if (result) {
                  _this.dataStorage.signOut();

                  _this.router.navigateByUrl('login');
                }
              });
            }
          }]);

          return UserProfileComponent;
        }();

        UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
          return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
        };

        UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: UserProfileComponent,
          selectors: [["app-user-profile"]],
          decls: 44,
          vars: 8,
          consts: [[1, "container-fluid"], [1, "row"], [1, "top-content"], [1, "col-md-5", "image-side"], ["src", "../../../../../assets/images/Profile-PNG-Free-Image.png", "alt", "user-profile-img"], [1, "col-md-7", "user-details"], [1, "material-icons"], [1, "row", "top-content-footer"], [1, "col-md-6"], [1, "col-md-6", "update-button"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "row", "sub-content"], [1, "col-md-2"], ["src", "../../../../../assets/images/social-media/gmail.png", "alt", ""], [1, "col-md-10"], [1, "social-media-name", "email"], [1, "details"]],
          template: function UserProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "account_box");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "perm_identity");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "phone_in_talk");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "business");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " CONTACT ME ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_32_listener() {
                return ctx.updateAccount();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "manage_accounts");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Update Account ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "EMAIL");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var tmp_2_0 = null;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userProfile == null ? null : ctx.userProfile.company == null ? null : ctx.userProfile.company.companyName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userProfile == null ? null : ctx.userProfile.username, "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 6, ctx.userProfile == null ? null : ctx.userProfile.userRole == null ? null : (tmp_2_0 = ctx.userProfile.userRole.name.replaceAll("ROLE_", "")) == null ? null : tmp_2_0.replace("ENCODER", "EVALUATOR")), "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userProfile == null ? null : ctx.userProfile.company == null ? null : ctx.userProfile.company.companyTelephoneNo, "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userProfile == null ? null : ctx.userProfile.company == null ? null : ctx.userProfile.company.completeAddress, "");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userProfile == null ? null : ctx.userProfile.username);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]],
          styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n  padding: 30px;\n  position: relative;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%] {\n  background-color: #9c0a00;\n  padding: 20px;\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .image-side[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .image-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10em;\n  width: 12em;\n  opacity: 0.2;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  padding: 20px 5px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 25px;\n  line-height: 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-right: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .update-button[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.container-fluid[_ngcontent-%COMP%]   .update-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content-footer[_ngcontent-%COMP%] {\n  background-color: #830900;\n  color: rgba(255, 255, 255, 0.774);\n  padding: 10px 0px 10px 25px;\n  box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 0px 0px 10px 10px;\n  font-weight: 500;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: solid rgba(128, 128, 128, 0.356) 1px;\n  margin-top: 10px;\n  box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.social-media-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.social-media-name.email[_ngcontent-%COMP%] {\n  color: red;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.social-media-name.facebook[_ngcontent-%COMP%] {\n  color: #3b6fff;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.details[_ngcontent-%COMP%] {\n  color: #c2c2c2;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRVo7QUFEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFaEI7QUFDWTtFQUNJLGVBQUE7RUFFQSxtQkFBQTtBQUFoQjtBQVFJO0VBQ0ksZUFBQTtBQU5SO0FBT1E7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7QUFOWjtBQWNJO0VBQ0ksZUFBQTtBQVpSO0FBZUk7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBYlI7QUFnQkk7RUFFSSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQlE7RUFDSSxXQUFBO0FBZlo7QUFnQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFkaEI7QUFlZ0I7RUFDSSxVQUFBO0FBYnBCO0FBZ0JnQjtFQUNJLGNBQUE7QUFkcEI7QUFtQlk7RUFDSSxjQUFBO0FBakJoQjtBQXNCUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBcEJaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC50b3AtY29udGVudHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTAsIDApO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuXG4gICAgICAgIC5pbWFnZS1zaWRle1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1kZXRhaWxze1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cbiAgICAudXBkYXRlLWJ1dHRvbntcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gdG9wOiA1ZW07XG4gICAgICAgIC8vIGxlZnQ6IDg4JTtcbiAgICB9XG5cbiAgICAuZXhwYW5kLWJ1dHRvbjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC50b3AtY29udGVudC1mb290ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDksIDApO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3NCk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zdWItY29udGVudHtcbiAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zNTYpIDFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgJi5zb2NpYWwtbWVkaWEtbmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAmLmVtYWlse1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuZmFjZWJvb2t7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNTksIDExMSwgMjU1KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5kZXRhaWxze1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgd2lkdGg6IDNlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
        });
        return UserProfileComponent;
      }();
      /***/

    },

    /***/
    "6oc9":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-profile/user-profile-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: UserProfileRoutingModule */

    /***/
    function oc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function () {
        return UserProfileRoutingModule;
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


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile.component */
      "0TUH");

      var routes = [{
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]
      }];

      var UserProfileRoutingModule = /*@__PURE__*/function () {
        var UserProfileRoutingModule = /*#__PURE__*/_createClass(function UserProfileRoutingModule() {
          _classCallCheck(this, UserProfileRoutingModule);
        });

        UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: UserProfileRoutingModule
        });
        UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function UserProfileRoutingModule_Factory(t) {
            return new (t || UserProfileRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return UserProfileRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "kZWL":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-profile/user-profile.module.ts ***!
      \***************************************************************************/

    /*! exports provided: UserProfileModule */

    /***/
    function kZWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
        return UserProfileModule;
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


      var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile-routing.module */
      "6oc9");
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


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-profile.component */
      "0TUH");
      /* harmony import */


      var _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../maintenance/user-account/user-account.module */
      "gaza");
      /* harmony import */


      var _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../user-registration/user-registration.module */
      "LHvS");

      var UserProfileModule = /*@__PURE__*/function () {
        var UserProfileModule = /*#__PURE__*/_createClass(function UserProfileModule() {
          _classCallCheck(this, UserProfileModule);
        });

        UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: UserProfileModule
        });
        UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function UserProfileModule_Factory(t) {
            return new (t || UserProfileModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__["UserAccountModule"], _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_8__["UserRegistrationModule"]]]
        });
        return UserProfileModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, {
          declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"], _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__["UserAccountModule"], _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_8__["UserRegistrationModule"]],
          exports: [_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module-es5.js.map