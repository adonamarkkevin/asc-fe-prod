(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-notification-email-notification-module"],{

/***/ "2Ur+":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/email-notification/email-notification.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmailNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNotificationModule", function() { return EmailNotificationModule; });
/* harmony import */ var _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../applications/editor/lib/angular-editor.module */ "ylsH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-notification-routing.module */ "eZ6q");
/* harmony import */ var _email_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-notification.component */ "xz3X");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










let EmailNotificationModule = /*@__PURE__*/ (() => {
    class EmailNotificationModule {
    }
    EmailNotificationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: EmailNotificationModule });
    EmailNotificationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function EmailNotificationModule_Factory(t) { return new (t || EmailNotificationModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailNotificationRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"],
                _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_0__["CustomAngularEditorModule"]
            ]] });
    return EmailNotificationModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](EmailNotificationModule, { declarations: [_email_notification_component__WEBPACK_IMPORTED_MODULE_4__["EmailNotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _email_notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailNotificationRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_5__["FragmentsModule"],
            _applications_editor_lib_angular_editor_module__WEBPACK_IMPORTED_MODULE_0__["CustomAngularEditorModule"]] });
})();



/***/ }),

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

/***/ "eZ6q":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/email-notification/email-notification-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: EmailNotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNotificationRoutingModule", function() { return EmailNotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-notification.component */ "xz3X");





const routes = [
    {
        path: '',
        component: _email_notification_component__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationComponent"]
    }
];
let EmailNotificationRoutingModule = /*@__PURE__*/ (() => {
    class EmailNotificationRoutingModule {
    }
    EmailNotificationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: EmailNotificationRoutingModule });
    EmailNotificationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function EmailNotificationRoutingModule_Factory(t) { return new (t || EmailNotificationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return EmailNotificationRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](EmailNotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "xz3X":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/email-notification/email-notification.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EmailNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNotificationComponent", function() { return EmailNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/email-notification.model */ "FnPy");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _applications_editor_lib_angular_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../applications/editor/lib/angular-editor.component */ "BcYv");
/* harmony import */ var _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../fragments/form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../fragments/form-list/form-list.component */ "DeKZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function EmailNotificationComponent_mat_option_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        const i_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", i_r1.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r1.status, " ");
    }
}
let EmailNotificationComponent = /*@__PURE__*/ (() => {
    class EmailNotificationComponent {
        constructor(apiService, formBuilder, sweetAlertService, spinner) {
            this.apiService = apiService;
            this.formBuilder = formBuilder;
            this.sweetAlertService = sweetAlertService;
            this.spinner = spinner;
            this.displayedColumns = ['emailCode', 'subject', 'description', 'status'];
            this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]];
            this.emailNotification = new app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_5__["EmailNotification"]();
            this.emailNotificationList = [];
            this.editorConfig = {
                editable: true,
                spellcheck: true,
                height: '15em',
                minHeight: '0',
                maxHeight: 'auto',
                width: 'auto',
                minWidth: '0',
                translate: 'no',
                enableToolbar: true,
                showToolbar: true,
                placeholder: 'Enter email body message here...',
                defaultParagraphSeparator: 'p',
                defaultFontName: 'Arial',
                defaultFontSize: '',
                fonts: [
                    { class: 'arial', name: 'Arial' },
                    { class: 'times-new-roman', name: 'Times New Roman' },
                    { class: 'calibri', name: 'Calibri' },
                    { class: 'comic-sans-ms', name: 'Comic Sans MS' }
                ],
                customClasses: [
                    {
                        name: 'quote',
                        class: 'quote',
                    },
                    {
                        name: 'redText',
                        class: 'redText'
                    },
                    {
                        name: 'titleText',
                        class: 'titleText',
                        tag: 'h1',
                    },
                ],
                uploadUrl: 'v1/image',
                // upload: (file: File) => { ... }
                uploadWithCredentials: false,
                sanitize: true,
                toolbarPosition: 'top',
                toolbarHiddenButtons: [
                    ['link',
                        'unlink',
                        'insertImage',
                        'insertVideo',],
                ]
            };
        }
        ngOnInit() {
            this.getList();
            this.setFormValidator();
        }
        getList() {
            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification).subscribe((res) => {
                this.emailNotificationList = res.responseData.data;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.responseData.data);
                this.dataSource.paginator = this.formListComponent.paginator;
                this.dataSource.sort = this.formListComponent.sort;
            });
        }
        save() {
            this.spinner.show();
            console.log(this.emailNotification);
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.emailNotification).subscribe((res) => {
                if (res !== undefined) {
                    this.spinner.hide();
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.spinner.hide();
                this.sweetAlertService.error(err);
            }, () => {
                this.spinner.hide();
                this.resetFormValidator(),
                    this.getList();
            });
        }
        getEmailNotification() {
            this.spinner.show();
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.formListComponent.idForUpdate).subscribe((res) => {
                if (res) {
                    this.emailNotification = res.responseData.data;
                    console.log(res);
                    this.spinner.hide();
                }
            });
        }
        update() {
            this.spinner.show();
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.emailNotification).subscribe((res) => {
                if (res !== undefined) {
                    this.spinner.hide();
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.spinner.hide();
                this.sweetAlertService.error(err);
            }, () => {
                this.spinner.hide();
                this.resetFormValidator();
                this.getList();
            });
        }
        setFormValidator() {
            this.emailNotification.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            this.emailNotificationForm = this.formBuilder.group({
                emailCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                status: [''],
            });
        }
        resetFormValidator() {
            this.emailNotification = new app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_5__["EmailNotification"]();
            this.emailNotification.status = _shared__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"].ACTIVE;
            this.emailNotificationForm.markAsUntouched();
            this.emailNotificationForm.markAsPristine();
        }
        delete() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Are you sure you want to delete this email notification?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.spinner.show();
                    this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].emailNotification, this.emailNotification.id).subscribe(() => {
                        this.spinner.hide();
                        this.sweetAlertService.customSuccessMessage('Email notification successfully deleted.');
                        this.resetFormValidator();
                        this.getList();
                    });
                }
            });
        }
    }
    EmailNotificationComponent.??fac = function EmailNotificationComponent_Factory(t) { return new (t || EmailNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"])); };
    EmailNotificationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmailNotificationComponent, selectors: [["app-email-notification"]], viewQuery: function EmailNotificationComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_fragments__WEBPACK_IMPORTED_MODULE_3__["FormListComponent"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.formListComponent = _t.first);
            }
        }, decls: 36, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], [3, "formGroup"], ["appearance", "outline", 1, "col-md-4"], [1, "required-field"], ["matInput", "", "name", "emailCode", "formControlName", "emailCode", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "subject", "formControlName", "subject", 3, "ngModel", "ngModelChange"], ["name", "status", "formControlName", "status", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "name", "description", "formControlName", "description", 3, "ngModel", "ngModelChange"], ["name", "body", "formControlName", "body", 3, "ngModel", "config", "ngModelChange"], [3, "childObject", "childForm", "saveFunction", "updateFunction", "cancelFunction", "deleteFunction"], [3, "dataSource", "displayedColumns", "selectInListFunction"], [3, "value"]], template: function EmailNotificationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Email Notification ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Email Code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailNotificationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.emailNotification.emailCode = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Subject");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailNotificationComponent_Template_input_ngModelChange_18_listener($event) { return ctx.emailNotification.subject = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailNotificationComponent_Template_mat_select_ngModelChange_22_listener($event) { return ctx.emailNotification.status = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, EmailNotificationComponent_mat_option_23_Template, 2, 2, "mat-option", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-form-field", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "textarea", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailNotificationComponent_Template_textarea_ngModelChange_27_listener($event) { return ctx.emailNotification.description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "angular-editor", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailNotificationComponent_Template_angular_editor_ngModelChange_31_listener($event) { return ctx.emailNotification.body = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "app-form-action-buttons", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("saveFunction", function EmailNotificationComponent_Template_app_form_action_buttons_saveFunction_33_listener() { return ctx.save(); })("updateFunction", function EmailNotificationComponent_Template_app_form_action_buttons_updateFunction_33_listener() { return ctx.update(); })("cancelFunction", function EmailNotificationComponent_Template_app_form_action_buttons_cancelFunction_33_listener() { return ctx.resetFormValidator(); })("deleteFunction", function EmailNotificationComponent_Template_app_form_action_buttons_deleteFunction_33_listener() { return ctx.delete(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "app-form-list", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectInListFunction", function EmailNotificationComponent_Template_app_form_list_selectInListFunction_35_listener() { return ctx.getEmailNotification(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.emailNotificationForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.emailNotification.emailCode);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.emailNotification.subject);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.emailNotification.status);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.statusList);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.emailNotification.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.emailNotification.body)("config", ctx.editorConfig);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("childObject", ctx.emailNotification)("childForm", ctx.emailNotificationForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _applications_editor_lib_angular_editor_component__WEBPACK_IMPORTED_MODULE_13__["AngularEditorComponent"], _fragments_form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_14__["FormActionButtonsComponent"], _fragments_form_list_form_list_component__WEBPACK_IMPORTED_MODULE_15__["FormListComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWFpbnRlbmFuY2UvZW1haWwtbm90aWZpY2F0aW9uL2VtYWlsLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return EmailNotificationComponent;
})();



/***/ })

}]);
//# sourceMappingURL=email-notification-email-notification-module-es2015.js.map