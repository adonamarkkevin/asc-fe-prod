(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module"], {
    /***/
    "/Uvp":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/pages/account/user-profile/user-profile.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Uvp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container-fluid {\n  margin: auto;\n  width: 80%;\n  padding: 30px;\n  position: relative;\n}\n.container-fluid .top-content {\n  background-color: #9c0a00;\n  padding: 20px;\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n.container-fluid .top-content .image-side {\n  margin: auto;\n  text-align: center;\n}\n.container-fluid .top-content .image-side img {\n  height: 10em;\n  width: 12em;\n  opacity: 0.2;\n}\n.container-fluid .top-content .user-details {\n  padding: 20px 5px;\n}\n.container-fluid .top-content .user-details h2 {\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 25px;\n  line-height: 0px;\n}\n.container-fluid .top-content .user-details p {\n  margin: 0px;\n  font-size: 12px;\n}\n.container-fluid .top-content .user-details span {\n  font-size: 15px;\n  padding-right: 10px;\n}\n.container-fluid .update-button {\n  text-align: end;\n}\n.container-fluid .update-button span {\n  color: white;\n  font-size: 2.5em;\n}\n.container-fluid .expand-button:hover {\n  cursor: pointer;\n}\n.container-fluid .top-content-footer {\n  background-color: #830900;\n  color: rgba(255, 255, 255, 0.774);\n  padding: 10px 0px 10px 25px;\n  box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 0px 0px 10px 10px;\n  font-weight: 500;\n}\n.container-fluid .sub-content {\n  padding: 20px;\n  border: solid rgba(128, 128, 128, 0.356) 1px;\n  margin-top: 10px;\n  box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 5px 4px 5px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 10px;\n}\n.container-fluid .sub-content p {\n  margin: 0px;\n}\n.container-fluid .sub-content p.social-media-name {\n  font-size: 18px;\n  font-weight: 600;\n}\n.container-fluid .sub-content p.social-media-name.email {\n  color: red;\n}\n.container-fluid .sub-content p.social-media-name.facebook {\n  color: #3b6fff;\n}\n.container-fluid .sub-content p.details {\n  color: #c2c2c2;\n}\n.container-fluid .sub-content img {\n  height: 3em;\n  width: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRVo7QUFEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFaEI7QUFDWTtFQUNJLGVBQUE7RUFFQSxtQkFBQTtBQUFoQjtBQVFJO0VBQ0ksZUFBQTtBQU5SO0FBT1E7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7QUFOWjtBQWNJO0VBQ0ksZUFBQTtBQVpSO0FBZUk7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBYlI7QUFnQkk7RUFFSSxhQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQlE7RUFDSSxXQUFBO0FBZlo7QUFnQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFkaEI7QUFlZ0I7RUFDSSxVQUFBO0FBYnBCO0FBZ0JnQjtFQUNJLGNBQUE7QUFkcEI7QUFtQlk7RUFDSSxjQUFBO0FBakJoQjtBQXNCUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBcEJaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAudG9wLWNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMTAsIDApO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICAuaW1hZ2Utc2lkZXtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAudXBkYXRlLWJ1dHRvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gdG9wOiA1ZW07XHJcbiAgICAgICAgLy8gbGVmdDogODglO1xyXG4gICAgfVxyXG5cclxuICAgIC5leHBhbmQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudG9wLWNvbnRlbnQtZm9vdGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDksIDApO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzc0KTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDI1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA0cHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1jb250ZW50e1xyXG4gICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM1NikgMXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4xNik7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjE2KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCA0cHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMTYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAmLnNvY2lhbC1tZWRpYS1uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICYuZW1haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmZhY2Vib29re1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNTksIDExMSwgMjU1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgICAgICAgICB3aWR0aDogM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "jFnt");
      /* harmony import */


      var _user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile.component.scss */
      "/Uvp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _maintenance_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../maintenance/user-account/user-account.component */
      "ea/y");

      var UserProfileComponent = /*#__PURE__*/function () {
        function UserProfileComponent(dataStorage, apiService, sweetAlertService, router, route, dialog) {
          _classCallCheck(this, UserProfileComponent);

          this.dataStorage = dataStorage;
          this.apiService = apiService;
          this.sweetAlertService = sweetAlertService;
          this.router = router;
          this.route = route;
          this.dialog = dialog;
          this.userProfile = new _models__WEBPACK_IMPORTED_MODULE_6__["UserAccount"]();
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

            var dialogRef = this.dialog.open(_maintenance_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_8__["UserAccountComponent"], {
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

      UserProfileComponent.ctorParameters = function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserProfileComponent);
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


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-profile.component */
      "0TUH");

      var routes = [{
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]
      }];

      var UserProfileRoutingModule = /*#__PURE__*/_createClass(function UserProfileRoutingModule() {
        _classCallCheck(this, UserProfileRoutingModule);
      });

      UserProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserProfileRoutingModule);
      /***/
    },

    /***/
    "jFnt":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/account/user-profile/user-profile.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jFnt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <!-- <div class=\"sub-container\"> -->\r\n            <div class=\"row\">\r\n                <div class=\"top-content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5 image-side\">\r\n                            <img src=\"../../../../../assets/images/Profile-PNG-Free-Image.png\" alt=\"user-profile-img\">\r\n                        </div>\r\n                        <div class=\"col-md-7 user-details\">\r\n                                <h2>{{userProfile?.company?.companyName}}</h2><hr>\r\n                                <p><span class=\"material-icons\">account_box</span> {{ userProfile?.username }}</p>\r\n                                <p><span class=\"material-icons\">perm_identity</span> {{ userProfile?.userRole?.name.replaceAll('ROLE_', '')?.replace('ENCODER', 'EVALUATOR') | uppercase }}</p>\r\n                                <p><span class=\"material-icons\">phone_in_talk</span> {{userProfile?.company?.companyTelephoneNo}}</p>\r\n                                <p><span class=\"material-icons\">business</span> {{ userProfile?.company?.completeAddress }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row top-content-footer\">\r\n                <div class=\"col-md-6\">\r\n                    CONTACT ME\r\n                </div>\r\n                <div class=\"col-md-6 update-button\">\r\n                    <button  mat-raised-button color=\"warn\" (click)=\"updateAccount()\">\r\n                        <span class=\"material-icons \">manage_accounts</span> Update Account\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row sub-content\">\r\n                <div class=\"col-md-2\">\r\n                    <img src=\"../../../../../assets/images/social-media/gmail.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <p class=\"social-media-name email\">EMAIL</p>\r\n                    <p class=\"details\">{{userProfile?.username}}</p>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"row sub-content\">\r\n                <div class=\"col-md-2\">\r\n                    <img src=\"../../../../../assets/images/social-media/facebook.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <p class=\"social-media-name facebook\">Facebook</p>\r\n                    <p class=\"details\">{{userProfile?.username}}</p>\r\n                </div>\r\n            </div> -->\r\n    </div>\r\n</form>\r\n";
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


      var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-profile-routing.module */
      "6oc9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-profile.component */
      "0TUH");
      /* harmony import */


      var _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../maintenance/user-account/user-account.module */
      "gaza");
      /* harmony import */


      var _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../user-registration/user-registration.module */
      "LHvS");

      var UserProfileModule = /*#__PURE__*/_createClass(function UserProfileModule() {
        _classCallCheck(this, UserProfileModule);
      });

      UserProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProfileRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _maintenance_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_8__["UserAccountModule"], _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_9__["UserRegistrationModule"]],
        exports: [_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]]
      })], UserProfileModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module-es5.js.map