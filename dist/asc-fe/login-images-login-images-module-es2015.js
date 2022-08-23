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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_images_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-images-routing.module */ "qZBF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _login_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-images.component */ "oufF");









let LoginImagesModule = class LoginImagesModule {
};
LoginImagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_images_component__WEBPACK_IMPORTED_MODULE_8__["LoginImagesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_images_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginImagesRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_7__["FragmentsModule"],
        ]
    })
], LoginImagesModule);



/***/ }),

/***/ "M2jv":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/login-images/login-images.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          Login Image\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <form [formGroup]=\"loginImageForm\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8\" appearance=\"outline\">\r\n            <mat-label>Filename:  </mat-label>\r\n            <br>\r\n            <input #docInput matInput [value]=\"loginImage?.originalFilename\" *ngIf=\"loginImage?.originalFilename\" disabled>\r\n\r\n            <input #docFile class=\"file-upload\" type=\"file\" accept=\"image/jpg, image/jpeg\" (change)=\"selectFile($event)\" [hidden]=\"loginImage?.originalFilename\"/>\r\n          </div>\r\n          <div class=\"col-md-12\"><br></div>\r\n          <div class=\"col-md-7\" appearance=\"outline\">\r\n            <button mat-raised-button\r\n              *ngIf=\"loginImage?.originalFilename\"\r\n              class=\"button-red button-right\" (click)=\"viewDocument(loginImage)\">\r\n              <i class=\"material-icons color__white\">open_in_new</i> VIEW IMAGE\r\n            </button>\r\n          </div>\r\n        </div><br>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"loginImage\" [childForm]=\"loginImageForm\" (saveFunction)=\"save()\"\r\n      (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\">\r\n    </app-form-action-buttons>\r\n\r\n    <div class=\"col-md-12\"><hr></div>\r\n    <div class=\"col-md-12\"><br></div>\r\n\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"viewLoginImageList()\"></app-form-list>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</form>\r\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_images_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-images.component.html */ "M2jv");
/* harmony import */ var _login_images_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-images.component.scss */ "wMpq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/models/login-image.model */ "VjNL");
/* harmony import */ var app_core_services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/services/date.service */ "HMc/");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);















let LoginImagesComponent = class LoginImagesComponent {
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
        this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
        this.loginImageList = [];
        this.isShowUploadButton = false;
    }
    ngOnInit() {
        this.setFormValidator();
        this.getLoginImageList();
    }
    getLoginImageList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage).subscribe((res) => {
            this.loginImageList = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.responseData.data);
        });
    }
    save() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
            text: 'Are you sure you want to upload this image?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.spinner.show();
                this.fileStorageService.uploadImage(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage + `?displayed=true`, this.selectedFile)
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
                    this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
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
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage, this.formListComponent.idForUpdate).subscribe((res) => {
            var _a;
            this.loginImage = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
        });
    }
    viewDocument(obj) {
        window.open(obj.fileURL);
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
            text: 'Are you sure you want to delete this login image?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_9__["ENDPOINTS"].loginImage, this.formListComponent.idForUpdate).subscribe((res) => {
                this.myDocInput.nativeElement.value = '';
                this.myDocFile.nativeElement.value = '';
                this.sweetAlertService.customSuccessMessage('Login image successfully deleted.');
                this.getLoginImageList();
                this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
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
        this.loginImage = new app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_10__["LoginImage"]();
    }
    hideSpinner() {
        setTimeout(() => {
            this.spinner.hide();
        }, 1);
    }
};
LoginImagesComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"] },
    { type: app_core_services_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"] },
    { type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_12__["FileStorageService"] }
];
LoginImagesComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_7__["FormListComponent"],] }],
    myDocInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['docInput',] }],
    myDocFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['docFile',] }]
};
LoginImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-images',
        template: _raw_loader_login_images_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_images_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginImagesComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-images.component */ "oufF");




const routes = [
    {
        path: '',
        component: _login_images_component__WEBPACK_IMPORTED_MODULE_3__["LoginImagesComponent"]
    }
];
let LoginImagesRoutingModule = class LoginImagesRoutingModule {
};
LoginImagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginImagesRoutingModule);



/***/ }),

/***/ "wMpq":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/login-images/login-images.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvbG9naW4taW1hZ2VzL2xvZ2luLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=login-images-login-images-module-es2015.js.map