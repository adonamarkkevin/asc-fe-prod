(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-images-login-images-module"],{

/***/ "3swC":
/*!********************************************!*\
  !*** ./src/app/modules/fragments/index.ts ***!
  \********************************************/
/*! exports provided: FormActionButtonsComponent, FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function() { return _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_0__["FormActionButtonsComponent"]; });

/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-list/form-list.component */ "DeKZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_1__["FormListComponent"]; });






/***/ }),

/***/ "98s5":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/login-images/login-images.module.ts ***!
  \*******************************************************************************/
/*! exports provided: LoginImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginImagesModule", function() { return LoginImagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_images_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-images-routing.module */ "qZBF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _login_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-images.component */ "oufF");









let LoginImagesModule = /*@__PURE__*/ (() => {
    class LoginImagesModule {
    }
    LoginImagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginImagesModule });
    LoginImagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginImagesModule_Factory(t) { return new (t || LoginImagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_images_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginImagesRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsModule"],
            ]] });
    return LoginImagesModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginImagesModule, { declarations: [_login_images_component__WEBPACK_IMPORTED_MODULE_7__["LoginImagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_images_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginImagesRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsModule"]] });
})();



/***/ }),

/***/ "oufF":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/login-images/login-images.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoginImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginImagesComponent", function() { return LoginImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/models/login-image.model */ "VjNL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/services/date.service */ "HMc/");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















const _c0 = ["docInput"];
const _c1 = ["docFile"];
function LoginImagesComponent_input_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 13, 14);
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.loginImage == null ? null : ctx_r0.loginImage.originalFilename);
    }
}
function LoginImagesComponent_button_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginImagesComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.viewDocument(ctx_r4.loginImage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " VIEW IMAGE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let LoginImagesComponent = /*@__PURE__*/ (() => {
    class LoginImagesComponent {
        constructor(apiService, formBuilder, sweetAlertService, dateService, sanitizer, spinner, fileStorageService) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.dateService = dateService;
            this.sanitizer = sanitizer;
            this.spinner = spinner;
            this.fileStorageService = fileStorageService;
            this.displayedColumns = [
                'originalFilename',
                'fileURL',
                'fileExtension',
            ];
            this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
            this.loginImageList = [];
            this.isShowUploadButton = false;
        }
        ngOnInit() {
            this.setFormValidator();
            this.getLoginImageList();
        }
        getLoginImageList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage).subscribe((res) => {
                this.loginImageList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.responseData.data);
            });
        }
        save() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Are you sure you want to upload this image?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.spinner.show();
                    this.fileStorageService.uploadImage(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage + `?displayed=true`, this.selectedFile)
                        .subscribe((res) => {
                        this.uploadedLoginImage = res.responseData.data;
                        this.hideSpinner();
                        this.selectedFile = null;
                        this.isShowUploadButton = false;
                        this.loginImage.originalFilename = null;
                        this.sweetAlertService.customSuccessMessage('Image successfully uploaded.');
                        this.getLoginImageList();
                        this.myDocInput.nativeElement.value = '';
                        this.myDocFile.nativeElement.value = '';
                        this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
                    }, (err) => {
                        this.hideSpinner();
                        this.sweetAlertService.error(err);
                    }, () => {
                        this.hideSpinner();
                    });
                }
                else {
                    this.selectedFile = null;
                }
            });
        }
        viewLoginImageList() {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage, this.formListComponent.idForUpdate).subscribe((res) => {
                var _a;
                this.loginImage = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
            });
        }
        viewDocument(obj) {
            window.open(obj.fileURL);
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Are you sure you want to delete this login image?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage, this.formListComponent.idForUpdate).subscribe((res) => {
                    this.myDocInput.nativeElement.value = '';
                    this.myDocFile.nativeElement.value = '';
                    this.sweetAlertService.customSuccessMessage('Login image successfully deleted.');
                    this.getLoginImageList();
                    this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
                });
            });
        }
        selectFile(event) {
            if (event.target.files[0]) {
                this.fileSize = event.target.files[0].size;
                const fileURL = URL.createObjectURL(event.target.files[0]);
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                const reader = new FileReader();
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onload = () => {
                };
                this.selectedFile = event.target.files[0];
            }
        }
        compareImageLogin(value, selected) {
            if (value && selected) {
                return value.id === selected.id;
            }
        }
        setFormValidator() {
            this.loginImageForm = this.formBuilder.group({
                originalFileName: [''],
                displayed: [''],
            });
        }
        resetFormValidator() {
            this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_4__["LoginImage"]();
        }
        hideSpinner() {
            setTimeout(() => {
                this.spinner.hide();
            }, 1);
        }
    }
    LoginImagesComponent.ɵfac = function LoginImagesComponent_Factory(t) { return new (t || LoginImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_11__["FileStorageService"])); };
    LoginImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginImagesComponent, selectors: [["app-login-images"]], viewQuery: function LoginImagesComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_2__["FormListComponent"], true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formListComponent = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDocInput = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDocFile = _t.first);
            }
        }, decls: 27, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-8"], ["matInput", "", "disabled", "", 3, "value", 4, "ngIf"], ["type", "file", "accept", "image/jpg, image/jpeg", 1, "file-upload", 3, "hidden", "change"], ["docFile", ""], [1, "col-md-12"], ["appearance", "outline", 1, "col-md-7"], ["mat-raised-button", "", "class", "button-red button-right", 3, "click", 4, "ngIf"], [3, "childObject", "childForm", "saveFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], ["matInput", "", "disabled", "", 3, "value"], ["docInput", ""], ["mat-raised-button", "", 1, "button-red", "button-right", 3, "click"], [1, "material-icons", "color__white"]], template: function LoginImagesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login Image ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filename: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginImagesComponent_input_13_Template, 2, 1, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginImagesComponent_Template_input_change_14_listener($event) { return ctx.selectFile($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginImagesComponent_button_19_Template, 4, 0, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-form-action-buttons", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveFunction", function LoginImagesComponent_Template_app_form_action_buttons_saveFunction_21_listener() { return ctx.save(); })("cancelFunction", function LoginImagesComponent_Template_app_form_action_buttons_cancelFunction_21_listener() { return ctx.resetFormValidator(); })("deleteFunction", function LoginImagesComponent_Template_app_form_action_buttons_deleteFunction_21_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-form-list", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectInListFunction", function LoginImagesComponent_Template_app_form_list_selectInListFunction_26_listener() { return ctx.viewLoginImageList(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginImageForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginImage == null ? null : ctx.loginImage.originalFilename);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loginImage == null ? null : ctx.loginImage.originalFilename);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginImage == null ? null : ctx.loginImage.originalFilename);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childObject", ctx.loginImage)("childForm", ctx.loginImageForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__["FormListComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbG9naW4taW1hZ2VzL2xvZ2luLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return LoginImagesComponent;
})();



/***/ }),

/***/ "qZBF":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/login-images/login-images-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: LoginImagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginImagesRoutingModule", function() { return LoginImagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_images_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-images.component */ "oufF");





const routes = [
    {
        path: '',
        component: _login_images_component__WEBPACK_IMPORTED_MODULE_2__["LoginImagesComponent"]
    }
];
let LoginImagesRoutingModule = /*@__PURE__*/ (() => {
    class LoginImagesRoutingModule {
    }
    LoginImagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginImagesRoutingModule });
    LoginImagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginImagesRoutingModule_Factory(t) { return new (t || LoginImagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LoginImagesRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginImagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ })

}]);
//# sourceMappingURL=login-images-login-images-module-es2015.js.map