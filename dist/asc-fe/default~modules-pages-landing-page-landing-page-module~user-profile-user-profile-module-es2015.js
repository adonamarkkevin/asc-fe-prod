(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module"],{

/***/ "0TUH":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pages/account/user-profile/user-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _maintenance_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maintenance/user-account/user-account.component */ "ea/y");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










let UserProfileComponent = /*@__PURE__*/ (() => {
    class UserProfileComponent {
        constructor(dataStorage, apiService, sweetAlertService, router, route, dialog) {
            this.dataStorage = dataStorage;
            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.router = router;
            this.route = route;
            this.dialog = dialog;
            this.userProfile = new _models__WEBPACK_IMPORTED_MODULE_1__["UserAccount"]();
        }
        ngOnInit() {
            this.userProfile = this.dataStorage.getUserAccount();
        }
        updateAccount() {
            const dialogRef = this.dialog.open(_maintenance_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_2__["UserAccountComponent"], {
                width: '80%',
                height: '85%',
                data: {
                    isFromProfile: true,
                    userAccount: this.userProfile
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed', result);
                if (result) {
                    this.dataStorage.signOut();
                    this.router.navigateByUrl('login');
                }
            });
        }
    }
    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 44, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "top-content"], [1, "col-md-5", "image-side"], ["src", "../../../../../assets/images/Profile-PNG-Free-Image.png", "alt", "user-profile-img"], [1, "col-md-7", "user-details"], [1, "material-icons"], [1, "row", "top-content-footer"], [1, "col-md-6"], [1, "col-md-6", "update-button"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "row", "sub-content"], [1, "col-md-2"], ["src", "../../../../../assets/images/social-media/gmail.png", "alt", ""], [1, "col-md-10"], [1, "social-media-name", "email"], [1, "details"]], template: function UserProfileComponent_Template(rf, ctx) {
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_32_listener() { return ctx.updateAccount(); });
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
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n  padding: 30px;\n  position: relative;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%] {\n  background-color: #9c0a00;\n  padding: 20px;\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .image-side[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .image-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10em;\n  width: 12em;\n  opacity: 0.2;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  padding: 20px 5px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 25px;\n  line-height: 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 12px;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-right: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .update-button[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.container-fluid[_ngcontent-%COMP%]   .update-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n}\n.container-fluid[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container-fluid[_ngcontent-%COMP%]   .top-content-footer[_ngcontent-%COMP%] {\n  background-color: #830900;\n  color: rgba(255, 255, 255, 0.774);\n  padding: 10px 0px 10px 25px;\n  box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 0px 0px 10px 10px;\n  font-weight: 500;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: solid rgba(128, 128, 128, 0.356) 1px;\n  margin-top: 10px;\n  box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.social-media-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.social-media-name.email[_ngcontent-%COMP%] {\n  color: red;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.social-media-name.facebook[_ngcontent-%COMP%] {\n  color: #3b6fff;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   p.details[_ngcontent-%COMP%] {\n  color: #c2c2c2;\n}\n.container-fluid[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRVo7QUFEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFaEI7QUFDWTtFQUNJLGVBQUE7RUFFQSxtQkFBQTtBQUFoQjtBQVFJO0VBQ0ksZUFBQTtBQU5SO0FBT1E7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7QUFOWjtBQWNJO0VBQ0ksZUFBQTtBQVpSO0FBZUk7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBYlI7QUFnQkk7RUFFSSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQlE7RUFDSSxXQUFBO0FBZlo7QUFnQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFkaEI7QUFlZ0I7RUFDSSxVQUFBO0FBYnBCO0FBZ0JnQjtFQUNJLGNBQUE7QUFkcEI7QUFtQlk7RUFDSSxjQUFBO0FBakJoQjtBQXNCUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBcEJaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAudG9wLWNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTAsIDApO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICAuaW1hZ2Utc2lkZXtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAudXBkYXRlLWJ1dHRvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gdG9wOiA1ZW07XHJcbiAgICAgICAgLy8gbGVmdDogODglO1xyXG4gICAgfVxyXG5cclxuICAgIC5leHBhbmQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudG9wLWNvbnRlbnQtZm9vdGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDksIDApO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDI1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA0cHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1jb250ZW50e1xyXG4gICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM1NikgMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA0cHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAmLnNvY2lhbC1tZWRpYS1uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICYuZW1haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmZhY2Vib29re1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNTksIDExMSwgMjU1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgICAgICB3aWR0aDogM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
    return UserProfileComponent;
})();



/***/ }),

/***/ "6oc9":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pages/account/user-profile/user-profile-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "0TUH");





const routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]
    }
];
let UserProfileRoutingModule = /*@__PURE__*/ (() => {
    class UserProfileRoutingModule {
    }
    UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfileRoutingModule });
    UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfileRoutingModule_Factory(t) { return new (t || UserProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserProfileRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "kZWL":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pages/account/user-profile/user-profile.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile-routing.module */ "6oc9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.component */ "0TUH");
/* harmony import */ var _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../maintenance/user-account/user-account.module */ "gaza");
/* harmony import */ var _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-registration/user-registration.module */ "LHvS");










let UserProfileModule = /*@__PURE__*/ (() => {
    class UserProfileModule {
    }
    UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfileModule });
    UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__["UserAccountModule"],
                _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_8__["UserRegistrationModule"]
            ]] });
    return UserProfileModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_7__["UserAccountModule"],
            _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_8__["UserRegistrationModule"]], exports: [_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]] });
})();



/***/ })

}]);
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module-es2015.js.map