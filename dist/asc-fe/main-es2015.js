(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\asc\asc-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0MCZ":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./layout.component.html */ "b9SZ");
/* harmony import */ var _layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component.scss */ "hvkF");
/* harmony import */ var _core_services_socket_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/socket/websocket.service */ "B1bq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/constants */ "9Vv1");
/* harmony import */ var app_core_models_applicationCountS2_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/models/applicationCountS2.model */ "Uyvf");
/* harmony import */ var app_core_models_application_count_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/application-count.model */ "hlXp");
/* harmony import */ var app_core_services_common_services_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/services/common-services.service */ "Iws0");
/* harmony import */ var app_core_models_counter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/models/counter */ "x25a");















let LayoutComponent = class LayoutComponent {
    constructor(dataStorage, router, spinner, apiService, commonService, webSocketService) {
        this.dataStorage = dataStorage;
        this.router = router;
        this.spinner = spinner;
        this.apiService = apiService;
        this.commonService = commonService;
        this.webSocketService = webSocketService;
        this.opened = true;
        this.userRole = '';
        this.panelOpenState = false;
        this.faAlignJustify = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAlignJustify"];
        this.faChartLine = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChartLine"];
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserCircle"];
        this.faTools = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTools"];
        this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretDown"];
        this.faCaretRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCaretRight"];
        this.faLogout = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPowerOff"];
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCopy"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBuilding"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInfoCircle"];
        this.faHandHoldingUsd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHandHoldingUsd"];
        this.faReceipt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReceipt"];
        this.faMoneyBillWave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMoneyBillWave"];
        this.faPrint = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPrint"];
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileAlt"];
        this.faLayerGroup = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLayerGroup"];
        this.isSuperAdmin = false;
        this.isAdmin = false;
        this.isAccounting = false;
        this.isApplicant = false;
        this.isScreener = false;
        this.isReviewer = false;
        this.isAdSpecialist = false;
        this.isEvaluator = false;
        this.countTotalApplications = 0;
        this.countTotalMultipleApplications = 0;
        this.applicationCount = new app_core_models_application_count_model__WEBPACK_IMPORTED_MODULE_12__["ApplicationCount"]();
        this.applicationCountS2 = new app_core_models_applicationCountS2_model__WEBPACK_IMPORTED_MODULE_11__["ApplicationCountS2"]();
        this.countTotalAssignedApplication = 0;
        this.s1ApplicationCountList = [];
        this.s2ApplicationCountList = [];
        // specialTabDataCount = 0;
        this.currentPage = 1;
        this.currentSize = 10;
        this.openedVoucher = false; // declared in HTML but not in component (feb 14 aot)
        this.hiddenVoucher = false; // declared in HTML but not in component (feb 14 aot)
        // state rotations
        this.s1ApplicationState = 'default';
        this.s2ApplicationState = 'default';
        this.maintenanceState = 'default';
        this.accountState = 'default';
        this.feeState = 'default';
        this.voucherState = 'default';
        this.badgeCounter = new app_core_models_counter__WEBPACK_IMPORTED_MODULE_14__["BadgeCounnter"]();
        this.individualCounter = 0;
        this.multipleCounter = 0;
        this.s2SpecialCounter = 0;
        this.accountsPayableCounter = 0;
        this.userRole = this.dataStorage.getUserRole();
        this.clickEventSubscription = this.commonService.getClickEvent().subscribe(() => {
            this.getApplicationCountS1();
            this.getApplicationCountS2();
        });
    }
    ngOnDestroy() {
        // if(this.counterObservable){
        //   this.counterObservable.unsubscribe();
        // }
    }
    counter() {
        this.apiService.findByParam(_utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].applicationFormPresentor + this.currentUser.id, 'payment-status/FOR_PAYMENT/schedule-of-fees').subscribe((res) => {
            this.individualCounter = res.responseData.data.length;
        });
        this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].applicationFormPresentor + `${this.currentUser.id}/multiple-application?paymentStatus=FOR_PAYMENT`)
            .subscribe((res) => {
            this.multipleCounter = res.responseData.data.length;
        });
        this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesS2Special).subscribe((res) => {
            this.s2SpecialCounter = res.length;
        });
        this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].scheduleOfFeesMonitoring + '?hasPromissoryNote=true').subscribe((res) => {
            this.accountsPayableCounter = res.totalItems;
        });
    }
    ngOnInit() {
        this.webSocketService.listen("broadcast").subscribe(res => {
            this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].badgeCountByAscUser + this.currentUser.id).subscribe((res) => {
                this.badgeCounter = res;
                this.counter();
            }, (err) => {
                console.log('Error:', err);
            });
        });
        this.spinnerMessageEmitter = 'LOADING ';
        this.initUserRole();
        this.currentUser = this.dataStorage.getUserAccount();
        this.counter();
        this.getApplicationCountS1();
        this.getApplicationCountS2();
        if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_APPLICANT) {
            this.voucherNavigationName = 'Voucher Fund';
        }
        else {
            this.voucherNavigationName = 'Company Voucher Fund';
        }
    }
    spinnerMessageReceived($message) {
        this.spinnerMessageEmitter = $message;
    }
    initUserRole() {
        if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_SUPER_ADMIN) {
            this.isSuperAdmin = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_ADMIN) {
            this.isAdmin = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_ACCOUNTING) {
            this.isAccounting = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_APPLICANT) {
            this.isApplicant = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_SCREENER) {
            this.isScreener = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_REVIEWER) {
            this.isReviewer = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_AD_SPECIALIST) {
            this.isAdSpecialist = true;
        }
        else if (this.userRole === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_ENCODER) {
            this.isEvaluator = true;
        }
    }
    close(param) { } // in html but not existing in component -- encountered during 'ng serve --aot'
    rotateCarretIcon(e) {
        if (e === 's1ApplicationState') {
            this.s1ApplicationState = (this.s1ApplicationState === 'default' ? 'rotated' : 'default');
        }
        else if (e === 's2ApplicationState') {
            this.s2ApplicationState = (this.s2ApplicationState === 'default' ? 'rotated' : 'default');
        }
        else if (e === 'maintenanceState') {
            this.maintenanceState = (this.maintenanceState === 'default' ? 'rotated' : 'default');
        }
        else if (e === 'accountState') {
            this.accountState = (this.accountState === 'default' ? 'rotated' : 'default');
        }
        else if (e === 'feeState') {
            this.feeState = (this.feeState === 'default' ? 'rotated' : 'default');
        }
        else if (e === 'voucherState') {
            this.voucherState = (this.voucherState === 'default' ? 'rotated' : 'default');
        }
    }
    logout() {
        this.dataStorage.signOut();
        this.router.navigateByUrl('login');
    }
    spinnerShow() {
        this.spinner.show();
    }
    spinnerHide() {
        setTimeout(() => {
            this.spinner.hide();
        }, 1);
    }
    getApplicationCountS1() {
        let endpoint;
        if (this.currentUser.userRole.name === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_APPLICANT) {
            endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].badgeCountByApplicationOwner;
        }
        else {
            endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].badgeCountByAscUser;
        }
        this.apiService.findAll(endpoint + this.currentUser.id).subscribe((res) => {
            this.badgeCounter = res;
        }, (err) => {
            console.log('Error:', err);
        });
    }
    getApplicationCountS2() {
        let endpoint;
        if (this.currentUser.userRole.name === _utils_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_APPLICANT) {
            endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].badgeCountByApplicationOwnerS2;
        }
        else {
            endpoint = _utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENDPOINTS"].badgeCountByAscUserS2;
        }
        this.apiService.findAll(endpoint + this.currentUser.id).subscribe((res) => {
            this.applicationCountS2 = res;
        });
    }
    refreshBadgeCounter() {
        // this.getApplicationCountS1();
        // this.getApplicationCountS2();
        // const obs$ = interval(5000);
        // obs$.subscribe((d) => {
        //   this.getApplicationCountS1();
        //   this.getApplicationCountS2();
        // })
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: app_core_services_common_services_service__WEBPACK_IMPORTED_MODULE_13__["CommonServices"] },
    { type: _core_services_socket_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"] }
];
LayoutComponent.propDecorators = {
    spinnerMessageEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-layout',
        template: _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(-180deg)', color: 'rgb(58, 238, 58)', fontSize: '20px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms ease-in'))
            ])
        ],
        styles: [_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LayoutComponent);



/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4nSt":
/*!********************************************************************!*\
  !*** ./src/app/core/services/alert-message/sweet-alert.service.ts ***!
  \********************************************************************/
/*! exports provided: SweetAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertService", function() { return SweetAlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _socket_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../socket/websocket.service */ "B1bq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let SweetAlertService = class SweetAlertService {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    success(res, displayTimeInSeconds = 2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'success',
            title: res.responseMessage ? res.responseMessage : res.message,
            timer: displayTimeInSeconds * 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false
        });
        this.webSocketService.emit("broadcast", res);
    }
    error(err, displayTimeInSeconds = 5) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'error',
            title: err.error.message ? err.error.message : err.error.responseMessage,
            timer: displayTimeInSeconds * 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false
        });
    }
    customErrorMessage(errorMessage, displayTimeInSeconds = 5) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'error',
            title: errorMessage,
            timer: displayTimeInSeconds * 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false
        });
    }
    customSuccessMessage(successMessage, displayTimeInSeconds = 2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'success',
            title: successMessage,
            timer: displayTimeInSeconds * 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            allowOutsideClick: false
        });
        this.webSocketService.emit("broadcast", successMessage);
    }
    sweetAlertMessage(iconParam, titleParam, message, displayTimeInSeconds = 2) {
        // icons: success, warning, error, question, info
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: iconParam,
            title: titleParam,
            text: message,
            allowOutsideClick: true
        });
    }
};
SweetAlertService.ctorParameters = () => [
    { type: _socket_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"] }
];
SweetAlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SweetAlertService);



/***/ }),

/***/ "9Vv1":
/*!*******************************************!*\
  !*** ./src/app/shared/utils/constants.ts ***!
  \*******************************************/
/*! exports provided: ENV, ENDPOINTS, COMMON_FUNCTION, URL_PATHS, SUCCESS_MESSAGES, ERROR_MESSAGES, APPLICATION_STATUS, APPLICATION_STATUS_FOR_COMPLIANCE, APPLICATION_STATUS_REVISION, OTHER_STATUS, APPLICATION_STATUS_S2, FOR_CLEARANCE_STATUS, TYPE_OF_MEDIUM, FORM_STATUS, ATTACHMENT_TYPE, APPFORM_TYPE, SUBMISSION_TYPE, ACTION_STATUS, PAYMENT_STATUS, USER_ROLES, USER_ROLE_LIST, PAYMENT_TYPE, APP_DECISION_STATUS, PAYMENT_TYPE_LIST, PAYMENT_STATUS_LIST, STATUSES, ROLES, ROLE_LIST, APPLICATION_STATUSES, FORM_TYPE, COMMENT_TYPE, DECISION_STATUS, SPECIAL_APPLICATION, APPLICATION_STAGE, YES_NO_OPTION, HOLIDAY_TYPE, ACCOUNT_TYPE, PAYMENT_MODE, MULTIMEDIA_MOVING, MULTIMEDIA_STATIC, REPORT_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return ENV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function() { return ENDPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_FUNCTION", function() { return COMMON_FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PATHS", function() { return URL_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_MESSAGES", function() { return SUCCESS_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function() { return ERROR_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS", function() { return APPLICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_FOR_COMPLIANCE", function() { return APPLICATION_STATUS_FOR_COMPLIANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_REVISION", function() { return APPLICATION_STATUS_REVISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER_STATUS", function() { return OTHER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_S2", function() { return APPLICATION_STATUS_S2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_CLEARANCE_STATUS", function() { return FOR_CLEARANCE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_OF_MEDIUM", function() { return TYPE_OF_MEDIUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_STATUS", function() { return FORM_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE", function() { return ATTACHMENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPFORM_TYPE", function() { return APPFORM_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMISSION_TYPE", function() { return SUBMISSION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_STATUS", function() { return ACTION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS", function() { return PAYMENT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLES", function() { return USER_ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE_LIST", function() { return USER_ROLE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE", function() { return PAYMENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DECISION_STATUS", function() { return APP_DECISION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE_LIST", function() { return PAYMENT_TYPE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_LIST", function() { return PAYMENT_STATUS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLES", function() { return ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_LIST", function() { return ROLE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUSES", function() { return APPLICATION_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_TYPE", function() { return FORM_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_TYPE", function() { return COMMENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECISION_STATUS", function() { return DECISION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIAL_APPLICATION", function() { return SPECIAL_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STAGE", function() { return APPLICATION_STAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YES_NO_OPTION", function() { return YES_NO_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOLIDAY_TYPE", function() { return HOLIDAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_TYPE", function() { return ACCOUNT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE", function() { return PAYMENT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_MOVING", function() { return MULTIMEDIA_MOVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_STATIC", function() { return MULTIMEDIA_STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT_TYPE", function() { return REPORT_TYPE; });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ "AytR");

const ENV = {
    currentEnv: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].environment,
};
const ENDPOINTS = {
    api: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API,
    authentication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "authentication",
    // Type of Medium
    typeOfMedium: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums",
    typeOfMediumSingleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums/single-media",
    typeOfMediumMultiMediaMoving: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums/multi-media-moving",
    typeOfMediumMultiMediaStatic: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-mediums/multi-media-static",
    singleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "single-media",
    multimediaTypes: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multimedia-types",
    applicationMultimedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-multimedia",
    applicationSingleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-single-media",
    mediumExecutionController: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-medium-executions",
    affiliation: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "members-affiliations",
    activeMembersAffiliation: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "members-affiliations/active",
    brand: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brands",
    approveBrand: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brands/approve",
    activeBrands: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brands/active",
    brandPenalties: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "brand-penalties",
    product: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "products",
    productsByBrand: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "products/brand-id/",
    category: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "categories",
    categoriesByProduct: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "categories/category-id/",
    company: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "companies",
    approveCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "companies/approve",
    activeCompanies: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "companies/active",
    companyPenalties: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "company-penalties",
    typeOfReason: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-reason",
    rationale: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale",
    typeOfDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-documentation",
    applicationType: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-types",
    comment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "comment",
    commentS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "comment-s2",
    copyClaims: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "copy-claims",
    countries: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "countries",
    typeOfApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-types",
    holidays: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "holidays",
    dialects: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "dialects",
    screenerReviewerPairs: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "screener-reviewer-pairs",
    emailNotification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "email-notification",
    typeOfRationale: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-rationale",
    typeOfRationaleS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale-s2",
    noOfMultipleApplicationAllowed: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "number-of-multiple-applications-allowed",
    typeOfExecutions: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-executions",
    typeOfExecutionsByMedium: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-medium-executions/type-of-medium/",
    typeOfMainDocuments: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-main-documents",
    typeOfClearance: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "type-of-clearance",
    uploadingDocumentFileSize: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "uploding-document-file-size",
    announcements: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "announcements",
    activeAnnouncements: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "announcements/custom/search?page=1&size=1000&status=ACTIVE",
    s1AndS2FormExpirationPeriods: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "s1-s2-expiration-periods",
    s1FeesSettlementPeriod: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "s1-fees-settlement-period",
    s1IncompleteDecisionExpirationPeriod: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "s1-incomplete-decision-expiration-period",
    promissoryNotePeriods: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "promissory-note-periods",
    attachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents",
    attachmentDocumentByAppFormReference: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/app-form-reference/",
    attachmentDocumentByS2AppFormReference: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/s2/app-form-reference/",
    finalMeterialAttachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/final-material-attachment-reference",
    brandPenaltyAttachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/brand-penalty-attachment-reference",
    paymentAttachmentReference: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/payment-attachment-reference",
    downloadAttachmentDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-files/image",
    supportiveDocument: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "supporting-documents",
    payment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment",
    paymentMultiple: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment-multiple",
    paymentSpecial: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "accounting/payment-special-clearing-details/application-s2-id/",
    takeApplication: "take-application",
    paymentType: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment-types",
    paymentDetailsAccounting: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/payment-details/application-form-id/",
    paymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/payment-details/application-form-id/",
    individualScheduleOfFeesPaymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment/payment-details/application-form-id",
    multiplePaymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "payment-multiple/payment-multiple-details/multiple-application-id/",
    specialPaymentDetails: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "application-form/payment-special-clearing-details/application-form-s2-id/",
    signature: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "signatures",
    admin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin",
    adminResendVerificationCode: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/resend/username",
    applicationReassignment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/application-form/reassignment",
    s2ApplicationReassignment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/application-form/reassignment",
    performanceMetrics: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "performance-metrics/app-form-reference",
    s1QrCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/code/check?code=",
    s2QrCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/code/check?code=",
    modifyApprovedS1ApplicationFormSingleMedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "admin/modify-approved-s1-form-single-media?applicationFormId",
    modifyApprovedS1ApplicationFormMultimedia: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/modify-approved-s1-form-multimedia?applicationFormId",
    // S1 application
    applicationForm: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form",
    s1Application: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/",
    s1ApplicationForm: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/",
    applicationFormAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-form/",
    applicationFormPresentor: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/presentor/",
    applicationFormEncoder: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/",
    applicationFormAdSpecialist: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/",
    applicationFormScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/",
    applicationFormReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/",
    applicationFormCompliance: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/compliance/",
    ascRates: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "asc-rates",
    validateAscRates: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "asc-rates/validate/asc-rates",
    ascRatesSpecial: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "asc-rates-for-special-application",
    submitDecisionAndCommentScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/decision-comment/submit",
    submitDecisionAndCommentReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/decision-comment/submit",
    stampedMaterialAndDecisionForms: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "stamp-material-and-decision-forms/app-form-reference",
    getAllForReviewerAndScreenerDecisionAndComment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/for-decision-comment/reviewer-screener",
    getAllReturnedApplicationsForAdspe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/get-returned-apps",
    getAllScreenerReturnedApps: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/get-screener-returned-apps",
    getAllAdSpeReturnedApps: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/get-adspe-returned-apps",
    // Release and for release application
    getForReleaseApplicationsReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/applications/for-release",
    getReleaseApplicationsAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/release/application-form",
    getForReleaseApplicationAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/applications/for-release",
    getAdminSuperAdminForReleaseApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-form",
    // Manual Sending decision or stamped material
    s1ManualRelease: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/manual/release",
    s2ManualRelease: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/manual/release",
    // Application Request
    applicationRequests: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-requests",
    s1SpecialApplicationRequests: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/presentor/application-request/special",
    s1SpecialApplicationRequestsAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-request/special",
    s2SpecialClearingApplicationRequests: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "application-form/s2/presentor/application-request/special-clearing",
    s2SpecialClearingApplicationRequestsAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/application-request/special-clearing",
    // Multiple Application
    multipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications",
    pendingMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications/for-approval",
    getMultipleApplicationByASCUser: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "multiple-applications/get-multiple-application-by-asc-user",
    getMultipleAppForms: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "multiple-applications/get/application-forms/multiple-application/group-id/",
    getMultipleAppFormsWithNoRejected: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "multiple-applications/get/no-rejected/application-forms/multiple-application/group-id/",
    reAssignScreenerForMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "application-form/s1/ad-specialist/multiple-application/re-assignment",
    reAssignReviewerForMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "application-form/s1/ad-screener/multiple-application/re-assignment",
    multipleApplicationReturnToAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/multiple-application/group-id/",
    multipleApplicationReturnToScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/multiple-application/group-id/",
    forwardMultipleAppFormToAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/forward-multiple-app-form",
    forwardMultipleAppFormToScreener: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/ad-specialist/forward-multiple-app-form",
    forwardMultipleAppFormToReviewer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/screener/forward-multiple-app-form",
    releaseMultipleApplication: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/reviewer/multiple-application/group-id/",
    // S2 application
    applicationFormS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form-s2",
    s2Application: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form-s2/",
    s2ApplicationForm: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/",
    s2ApplicationFormAdmin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s2/application-form/",
    s2ApplicationFormPresentor: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/",
    s2ApplicationFormPresentorSave: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/save",
    s2ApplicationFormPresentorSubmit: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/submit/",
    s2ApplicationFormEncoder: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/",
    s2ApplicationFormEncoderList: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/applications",
    s2ApplicationFormEncoderVerify: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/verify",
    s2ApplicationFormAdSpeList: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/ad-specialist/applications",
    s2ApplicationFormAdSpe: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/ad-specialist/",
    clearanceAndToa: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "clearance-and-toa-forms/app-form-reference",
    // TOA
    TOAApplicationFormPresentorSave: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/toa/presentor/save",
    TOAApplicationFormPresentorSubmit: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/toa/presentor/submit",
    // application request
    s2SpecialApplicationRequest: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "admin/s1/application-request/special",
    s1SpecialApplicationRequest: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/presentor/application-request/special",
    // Rejection
    s1ApplicationFormEncoderReject: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/reject/original",
    s1ApplicationFormEncoderRejectRevision: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/reject/revision",
    s1ApplicationFormEncoderRejectCompliance: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s1/encoder/reject/compliance",
    s2ApplicationFormEncoderReject: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/encoder/reject",
    s1ReasonOfRejection: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rejections/save/batch",
    s2ReasonOfRejection: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-s2-rejections/save/batch",
    // Rationale
    applicationRationale: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale",
    applicationRationaleS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale-s2",
    rationaleList: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-rationale-list",
    rationaleListS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-s2-rationale-list",
    // account api
    roles: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "user-roles",
    addUserAccount: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/client-registration",
    updateUserAccount: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/profile",
    updatePassword: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/update-password",
    userAccount: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts",
    userPerRole: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/role/id/",
    userAccountType: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/account-type",
    userLogin: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/username",
    existsByUsername: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/validate/username/",
    getPendingAccounts: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/pending",
    emailApproved: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/approve-account",
    accountVerification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/account-verification",
    forgotPassword: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/request/forgot-password/email",
    forgotPasswordVerification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/forgot-password-verification",
    newPasswordVerification: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounts/public/verification-code",
    // email
    sendEmail: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "emails/send-verification",
    // Image
    loginImage: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "login-images",
    // global api
    regions: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "regions",
    provinces: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "provinces",
    cityMunicipalities: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "city-municipalities",
    barangays: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "barangays",
    // accounting
    scheduleOfFeesMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/monitoring",
    accountingPaymentApprove: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/approve",
    accountingPaymentForApprovals: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/for-approval",
    accountingRecompute: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/recompute",
    accountingReject: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment/reject",
    officialReceipt: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "official-receipt",
    orPreparation: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/official-receipt",
    orPreparationRefCodeCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/official-receipt-paid/reference-code",
    orPreparationORNumberCheck: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/official-receipt-in-used/official-receipt-no",
    availableReferenceCode: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/available/reference-code",
    availableReferenceCodeByCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "official-receipt/available/reference-code/company-id",
    paymentDetailsByAppformId: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "payment/application-form-id",
    scheduleOfFeesMultipleMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/multiple-appication/monitoring",
    paymentMultipleMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/monitoring",
    accountingMultiplePaymentApprove: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/approve",
    accountingMultiplePaymentForApprovals: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/for-approval",
    accountingRecomputeMultiple: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/recompute",
    accountingRejectMultiple: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-multiple/reject",
    scheduleOfFeesS2Special: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/s2/presentor/special-clearing/for-payment",
    scheduleOfFeesSpecialMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/special-clearing/monitoring",
    accountingSpecialPaymentApprove: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "accounting/schedule-of-fees/payment-special-clearing/approve",
    accountingSpecialPaymentRecompute: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API +
        "accounting/schedule-of-fees/payment-special-clearing/recompute",
    accountingRejectSpecial: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/schedule-of-fees/payment-special-clearing/reject",
    accountingVoucherFundTransfer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/transfer",
    voucherFundForApproval: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/for-approval",
    voucherFundEnrollment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/enrollment",
    approveVocher: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/approve",
    voucherFundTransfer: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "voucher-fund/transfer",
    voucherFundPayment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "vouchers/fund/",
    voucherMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/voucher-fund/monitoring",
    voucher: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "vouchers",
    voucherReplenishmentsByCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "vouchers-fund-replenishment/company/id/",
    voucherAttachment: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "attachment-documents/voucher-attachment-reference",
    voucherSignatories: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "voucher-signatories",
    brandPenaltyForApproval: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-brand/for-approval",
    approveBrandPenalty: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-brand/payment/approve",
    penalizedBrandMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-brand/monitoring",
    // delinquentApplications: env.ASC_API + 'accounting/delinquent-applications',
    delinquentApplications: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/delinquent-applications",
    delinquentCompanies: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/delinquent-companies",
    approveDelinquentCompany: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/delinquent-app-form/payment/approve",
    getAppFormsByCompanyId: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "application-form/delinquent/company/",
    penalizedCompanyMonitoring: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "accounting/penalized-company/monitoring",
    // reports
    generateReports: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "reports/generate",
    validateReportsCollection: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "reports/collection-report",
    // Badge
    badgeCountByApplicationOwner: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/application-owner-id/",
    badgeCountByAscUser: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/account-id/",
    badgeCountByApplicationOwnerS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/s2/application-owner-id/",
    badgeCountByAscUserS2: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "badge-counter/s2/account-id/",
    // weekly calendar maintenance
    weeklyUserScheduleCustomSearch: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "weekly-user-schedule/custom/search",
    weeklyUserSchedule: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "weekly-user-schedule",
    weeklyScheduledUsers: environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ASC_API + "weekly-scheduled-users"
};
const COMMON_FUNCTION = {
    SAVE: "save",
    UPDATE: "update",
    SUBMIT: "submit",
    SEARCH: "search",
    BATCH: "batch",
    APPLICATIONS: "applications",
    ACCEPT: "accept",
    REJECT: "reject",
    VERIFY: "verify",
    SCREEN: "screen",
    CANCEL: "cancel",
    DISAPPROVED: "disapproved",
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    FOR_APPROVAL: "FOR_APPROVAL",
    APPROVED: "APPROVED",
};
const URL_PATHS = {
    LOGIN: "login",
    ASC: "asc",
    DASHBOARD: "dashboard",
    ANNOUNCEMENT: "announcement",
    // company
    COMPANY: "company",
    LIST_COMPANY: "lists",
    ADD_COMPANY: "add",
    UPDATE_COMPANY: "update",
    // applications
    APPLICATION: "application",
    S1_APPLICATION: "s1",
    S2_APPLICATION: "s2",
    APPLICATION_REASSIGNMENT: "reassignment",
    LIST_APPLICATION: "lists",
    LIST_MULTIPLE_APPLICATION: "multiple",
    LIST_SPECIAL_APPLICATION: "special",
    LIST_ASSIGNED_APPLICATION: "assigned-applications",
    LIST_FOR_RELEASE_APPLICATION: "for-release",
    RELEASED_APPLICATION: "released",
    ADD_APPLICATION: "add",
    UPDATE_APPLICATION: "update",
    ADD_MULTIPLE: "add/multiple",
    SCHEDULE_OF_FEES_SINGLE_APPLICATION: "single-application",
    SCHEDULE_OF_FEES_MULTIPLE_APPLICATIONS: "multiple-applications",
    SCHEDULE_OF_FEES_SPECIAL_APPLICATIONS: "special-applications",
    ACCOUNTS_PAYABLE: "accounts-payable",
    ACCOUNTS_RECEIVABLE: "accounts-receivable",
    // maintenance
    MAINTENANCE: "maintenance",
    BRANDS: "brands",
    TYPE_OF_REASON: "type-of-reason",
    TYPE_OF_MEDIUM: "type-of-medium",
    AFFILIATION: "affiliation",
    PAYMENT_TYPE: "payment-type",
    TYPE_OF_DOCUMENT: "type-of-document",
    CATEGORY: "category",
    PRODUCT: "product",
    TYPE_OF_APPLICATION: "type-of-application",
    ASC_RATES: "asc-rates",
    ASC_RATES_SPECIAL: "asc-rates-special",
    HOLIDAYS: "holidays",
    DIALECTS: "dialects",
    SCREENER_REVIEWER_PAIRS: "screener-reviewer-pairs",
    EMAIL_NOTIFICATION: "email-notification",
    TYPE_OF_EXECUTIONS: "type-of-executions",
    TYPE_OF_MAIN_DOCUMENTS: "type-of-main-documents",
    DOCUMENTS_SIZE: "document-size",
    ANNOUNCEMENT_CONTENT: "announcement-content",
    S1_S2_EXPIRATION_PERIODS: "s1-s2-expiration-periods",
    S1_FEES_SETTLEMENT_PERIOD: "s1-fees-settlement-period",
    S1_INCOMPLETE_DECISION_EXPIRATION_PERIOD: "s1-incomplete-decision-expiration-period",
    PROMISSORY_NOTE_PERIODS: "promissory-note-periods",
    QR_AND_BAR_CODE_CHECKER: "qr-and-bar-code-checker",
    NUMBER_OF_MULTIPLE_APPLICATION_ALLOWED: "number-of-multiple-application-allowed",
    BRAND_PENALTIES: "brand-penalties",
    COMPANY_PENALTIES: "company-penalties",
    TYPE_OF_RATIONAL: "type-of-rational",
    USER_ACCOUNT: "accounts",
    MEDIUM_EXECUTIONS_CONTROLLER: "medium-executions-controller",
    LOGIN_IMAGE: "login-image",
    WEEKLY_USER_SCHEDULE: "weekly-user-schedule",
    // account
    ACCOUNT: "account",
    USER_ROLE: "user-role",
    USER_REGISTRATION: "user-registration",
    UPDATE_USER: "user-update",
    USER_PROFILE: "user-profile",
    USER_LIST: "user-list",
    // accounting
    ACCOUNTING: "accounting",
    LIST_PAYMENT: "lists",
    ADD_PAYMENT: "add",
    UPDATE_PAYMENT: "update",
    UPLOAD_PAYMENT: "upload",
    VOUCHER_ENROLLMENT: "voucher-enrollment",
    VOUCHER_REPLENISHMENT: "voucher-replenishment",
    UPDATE_BRAND_PENALTY: "add-brand-penalty/update",
    LIST_BRAND_PENALTY: "list-brand-penalty",
    ADD_BRAND_PENALTY: "add-brand-penalty",
    VOUCHER_MONITORING: "voucher-monitoring",
    OR_PREPARATION: "or-preparation",
    ACCOUNTING_ACCOUNTS_RECEIVABLE: "accounts-receivable",
    PAYMENTS: "payments",
    ADD_PENALTY: "add-penalty",
    UPDATE_PENALTY: "add-penalty/update",
    REPORTS: "reports",
    ERROR: "result/error",
    SUCCESS: "result/success",
    HOME_PAGE: "asc/page/dashboard",
    ACCESS_DENIED: "access-denied",
    ACCOUNT_VERIFICATION: "account-verification",
    LANDING_PAGE: "login",
    PASSWORD_RESET: "password-verification/verification-code/:code/:username",
};
const SUCCESS_MESSAGES = {
    save: " successfully saved.",
    update: " successfully updated.",
    submit: "Successfully submitted.",
};
const ERROR_MESSAGES = {
    save: " not saved.",
    update: " not updated",
    search: "No record found for ",
    under_maintenance: "Sorry, one of our service is under maintenance.",
};
// S1 APPLICATION STATUS
const APPLICATION_STATUS = {
    SAVED: "SAVED",
    S1_APPLICATION_SUBMITTED: "S1_APPLICATION_SUBMITTED",
    S1_APPLICATION_CANCELLED: "S1_APPLICATION_CANCELLED",
    S1_APPLICATION_VERIFIED_BY_ENCODER: "S1_APPLICATION_VERIFIED_BY_ENCODER",
    S1_APPLICATION_REJECTED: "S1_APPLICATION_REJECTED",
    S1_APPLICATION_DISAPPROVED: "S1_APPLICATION_DISAPPROVED",
    S1_APPLICATION_IN_PROCESS: "S1_APPLICATION_IN_PROCESS",
    S1_APPLICATION_VERIFIED_BY_AD_SPE: "S1_APPLICATION_VERIFIED_BY_AD_SPE",
    S1_APPLICATION_SCREENED: "S1_APPLICATION_SCREENED",
    S1_APPLICATION_REVIEWED: "S1_APPLICATION_REVIEWED",
    APPROVED: "APPROVED",
    APPROVED_WITH_CAUTION: "APPROVED_WITH_CAUTION",
    DISAPPROVED: "DISAPPROVED",
    REFER_TO_PANEL: "REFER_TO_PANEL",
    SUBMITTED_REVISION: "SUBMITTED_REVISION",
    INCOMPLETE: "INCOMPLETE",
};
const APPLICATION_STATUS_FOR_COMPLIANCE = {
    INCOMPLETE: "INCOMPLETE",
    SUBMITTED_DOCUMENT_FOR_COMPLIANCE: "SUBMITTED_DOCUMENT_FOR_COMPLIANCE",
    COMPLIANCE_DOCUMENT_VERIFIED_BY_ENCODER: "COMPLIANCE_DOCUMENT_VERIFIED_BY_ENCODER",
    COMPLIANCE_DOCUMENT_FOR_REVIEW: "COMPLIANCE_DOCUMENT_FOR_REVIEW",
    COMPLIANCE_DOCUMENT_VERIFIED_BY_AD_SPE: "COMPLIANCE_DOCUMENT_VERIFIED_BY_AD_SPE",
    COMPLIANCE_DOCUMENT_REVIEWED_BY_SCREENER: "COMPLIANCE_DOCUMENT_REVIEWED_BY_SCREENER",
    COMPLIANCE_DECISION_FORM_HAS_BEEN_SENT: "COMPLIANCE_DECISION_FORM_HAS_BEEN_SENT",
    DISAPPROVED_DUE_TO_NON_COMPLIANCE: "DISAPPROVED_DUE_TO_NON_COMPLIANCE",
};
const APPLICATION_STATUS_REVISION = {
    SUBMITTED_REVISION: "SUBMITTED_REVISION",
    REVISION_REVIEW_IN_PROCESS: "REVISION_REVIEW_IN_PROCESS",
    REVISION_VERIFIED_BY_ENCODER: "REVISION_VERIFIED_BY_ENCODER",
    REVISION_VERIFIED_BY_AD_SPE: "REVISION_VERIFIED_BY_AD_SPE",
    REVISION_SCREENED: "REVISION_SCREENED",
    REVISION_DECISION_FORM_HAS_BEEN_SENT: "REVISION_DECISION_FORM_HAS_BEEN_SENT",
};
const OTHER_STATUS = {
    FOR_APPROVAL: "FOR_APPROVAL",
};
// S2 APPLICATION STATUS
const APPLICATION_STATUS_S2 = {
    S2_APPLICATION_APPLIED: "S2 APPLICATION APPLIED",
    S2_APPLICATION_SUBMITTED: "S2 APPLICATION SUBMITTED",
    S2_APPLICATION_CANCELLED: "S2 APPLICATION CANCELLED",
    S2_APPLICATION_VERIFIED_BY_ENCODER: "S2 APPLICATION VERIFIED BY ENCODER",
    S2_APPLICATION_REJECTED: "S2 APPLICATION REJECTED",
    S2_APPLICATION_DISAPPROVED: "S2 APPLICATION DISAPPROVED",
    S2_APPLICATION_IN_PROCESS: "S2 APPLICATION IN PROCESS",
    S2_APPLICATION_VERIFIED_BY_AD_SPE: "S2 APPLICATION VERIFIED BY AD SPE",
    // S2_APPLICATION_SCREENED: 'S2 APPLICATION SCREENED',
    // S2_APPLICATION_REVIEWED: 'S2 APPLICATION REVIEWED',
    APPROVED: "APPROVED",
    APPROVED_WITH_CAUTION: "APPROVED WITH CAUTION",
    DISAPPROVED: "DISAPPROVED",
    REFER_TO_PANEL: "REFER TO PANEL",
    SUBMITTED_REVISION: "SUBMITTED REVISION",
    INCOMPLETE: "INCOMPLETE",
};
const FOR_CLEARANCE_STATUS = {
    FOR_CLEARANCE_S2_APPLICATION: "FOR_CLEARANCE_S2_APPLICATION",
    FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_ENCODER: "FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_ENCODER",
    FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_AD_SPE: "FOR_CLEARANCE_S2_APPLICATION_VERIFIED_BY_AD_SPE",
};
const TYPE_OF_MEDIUM = {
    SINGLE_MEDIA: "SINGLE MEDIA",
    MULTIMEDIA: "MULTIMEDIA",
    MULTIMEDIA_MOVING: "MULTIMEDIA-MOVING",
    MULTIMEDIA_STATIC: "MULTIMEDIA-STATIC",
    MOVING: "MOVING",
    STATIC: "STATIC",
};
const FORM_STATUS = {
    OPEN: "OPEN",
    LOCKED: "LOCKED",
};
const ATTACHMENT_TYPE = {
    MAIN: "MAIN",
    SUPPORTIVE: "SUPPORTIVE",
    PAYMENT: "PAYMENT",
    REVISION_LETTER: "REVISION_LETTER",
    FINAL_MATERIAL: "FINAL_MATERIAL",
    VOUCHER_FUND: "VOUCHER_FUND",
    BRAND_PENALTY_PAYMENT: "BRAND_PENALTY_PAYMENT",
};
const APPFORM_TYPE = {
    S1: "S1",
    S2: "S2",
    INDIVIDUAL: "INDIVIDUAL",
    MULTIPLE: "MULTIPLE",
    FOR_PRESENTATION: "FOR_PRESENTATION",
    SPECIAL: "SPECIAL",
};
const SUBMISSION_TYPE = {
    ORIGINAL: "ORIGINAL",
    REVISION: "REVISION",
    COMPLIANCE: "COMPLIANCE",
    TOA: "TOA",
};
const ACTION_STATUS = {
    ASSIGN_TO_ADSPE: "ASSIGN_TO_ADSPE",
    ASSIGN_TO_SCREENER: "ASSIGN_TO_SCREENER",
    ASSIGN_TO_REVIEWER: "ASSIGN_TO_REVIEWER",
    ASSIGN_TO_PRESENTOR: "ASSIGN_TO_PRESENTOR",
};
const PAYMENT_STATUS = {
    PAID: "PAID",
    UNPAID: "UNPAID",
    FOR_APPROVAL: "FOR_APPROVAL",
    FOR_PAYMENT: "FOR_PAYMENT",
};
const USER_ROLES = {
    ROLE_APPLICANT: "ROLE_APPLICANT",
    ROLE_ENCODER: "ROLE_ENCODER",
    ROLE_AD_SPECIALIST: "ROLE_AD_SPECIALIST",
    ROLE_SCREENER: "ROLE_SCREENER",
    ROLE_REVIEWER: "ROLE_REVIEWER",
    ROLE_ADMIN: "ROLE_ADMIN",
    ROLE_SUPER_ADMIN: "ROLE_SUPER_ADMIN",
    ROLE_ACCOUNTING: "ROLE_ACCOUNTING",
};
const USER_ROLE_LIST = [
    "ROLE_APPLICANT",
    "ROLE_ENCODER",
    "ROLE_AD_SPECIALIST",
    "ROLE_SCREENER",
    "ROLE_REVIEWER",
    "ROLE_ADMIN",
    "ROLE_SUPER_ADMIN",
    "ROLE_ACCOUNTING",
];
const PAYMENT_TYPE = {
    SCHEDULE_OF_FEES_INDIVIDUAL: "SCHEDULE OF FEES - INDIVIDUAL",
    SCHEDULE_OF_FEES_MULTIPLE: "SCHEDULE OF FEES - MULTIPLE",
    SCHEDULE_OF_FEES_SPECIAL: "SCHEDULE OF FEES - SPECIAL",
    DELINQUENT: "DELINQUENT",
    PENALIZED_BRANDS: "PENALIZED BRANDS",
    PENALIZED_COMPANY: "PENALIZED COMPANY",
    ACCOUNTS_RECEIVABLE: "ACCOUNTS RECEIVABLE",
};
const APP_DECISION_STATUS = {
    APPROVED: "APPROVED",
    INCOMPLETE: "INCOMPLETE",
    DISAPPROVED: "DISAPPROVED",
    APPROVED_WITH_CAUTION: "APPROVED_WITH_CAUTION",
};
/********************************* FOR LISTING ***************************/
const PAYMENT_TYPE_LIST = [
    {
        type: "SCHEDULE OF FEES - INDIVIDUAL",
    },
    {
        type: "SCHEDULE OF FEES - MULTIPLE",
    },
    {
        type: "SCHEDULE OF FEES - SPECIAL",
    },
    {
        type: "DELINQUENT",
    },
    {
        type: "PENALIZED BRANDS",
    },
    {
        type: "PENALIZED COMPANY",
    },
    {
        type: "ACCOUNTS RECEIVABLE",
    },
];
const PAYMENT_STATUS_LIST = [
    { type: "ALL" },
    { type: "FOR_PAYMENT" },
    { type: "FOR_APPROVAL" },
    { type: "PAID" },
    { type: "UNPAID" },
];
const STATUSES = [
    {
        status: "ACTIVE",
    },
    {
        status: "INACTIVE",
    },
];
const ROLES = [
    {
        role: "ROLE_ADMIN",
        ascUser: true,
        disableFieldOnUpdate: true,
    },
    {
        role: "ROLE_SUPER_ADMIN",
        ascUser: true,
        disableFieldOnUpdate: true,
    },
    {
        role: "ROLE_AD_SPECIALIST",
        ascUser: true,
        disableFieldOnUpdate: true,
    },
    {
        role: "ROLE_SCREENER",
        ascUser: true,
        disableFieldOnUpdate: true,
    },
    {
        role: "ROLE_ENCODER",
        ascUser: true,
        disableFieldOnUpdate: false,
    },
    {
        role: "ROLE_REVIEWER",
        ascUser: true,
        disableFieldOnUpdate: true,
    },
    {
        role: "ROLE_ACCOUNTING",
        ascUser: true,
        disableFieldOnUpdate: true,
    },
    {
        role: "ROLE_APPLICANT",
        ascUser: false,
        disableFieldOnUpdate: true,
    },
];
const ROLE_LIST = ROLES.map((res) => res.role);
const APPLICATION_STATUSES = [
    {
        status: "APPROVED",
    },
    {
        status: "DISAPPROVED",
    },
    {
        status: "INCOMPLETE",
    },
    {
        status: "RE_APPLY",
    },
    {
        status: "PENDING",
    },
    {
        status: "SENT",
    },
    {
        status: "VERIFIED",
    },
    {
        status: "OPEN",
    },
    {
        status: "CLOSED",
    },
];
const FORM_TYPE = [
    {
        description: "INDIVIDUAL",
    },
    {
        description: "MULTIPLE",
    },
];
const COMMENT_TYPE = [
    {
        description: "INTERNAL",
    },
    {
        description: "EXTERNAL",
    },
    {
        description: "OTHERS_FOR_EMAIL",
    },
];
const DECISION_STATUS = [
    {
        status: "APPROVED",
    },
    {
        status: "INCOMPLETE",
    },
    {
        status: "DISAPPROVED",
    },
];
const SPECIAL_APPLICATION = [
    "SPECIAL CLEARING",
    "SPECIAL SCREENING",
    "SPECIAL SCREENING AND CLEARING",
];
const APPLICATION_STAGE = {
    S1_APPLICATION: "S1-APPLICATION",
    S2_APPLICATION: "S2-APPLICATION",
};
const YES_NO_OPTION = ["Yes", "No"];
const HOLIDAY_TYPE = [
    { type: "REGULAR" },
    { type: "SPECIAL" },
    { type: "SPECIAL_WORKING" },
    { type: "SPECIAL_NON_WORKING" },
    { type: "WEEKEND" },
];
const ACCOUNT_TYPE = {
    ASC_USER: "ASC_USER",
    APPLICANT: "APPLICANT",
};
const PAYMENT_MODE = {
    GCASH: "GCash",
    PAYMAYA: "PayMaya",
    BANK: "Bank",
    VOUCHER: "Voucher",
    PROMISORRY_NOTE: "Promisorry Note",
    CASH: "Cash",
    CREDIT_CARD: "Credit Card",
    CHECK: "Check",
};
const MULTIMEDIA_MOVING = [
    {
        id: 0,
        multimediaMovingMedium: "cinema",
        hasSelected: false,
    },
    {
        id: 1,
        multimediaMovingMedium: "collaterals",
        hasSelected: false,
    },
    {
        id: 2,
        multimediaMovingMedium: "digital video",
        hasSelected: false,
    },
    {
        id: 3,
        multimediaMovingMedium: "e-ooh",
        hasSelected: false,
    },
    {
        id: 4,
        multimediaMovingMedium: "television",
        hasSelected: false,
    },
];
const MULTIMEDIA_STATIC = [
    {
        id: 0,
        multimediaStaticMedium: "collaterals",
        hasSelected: false,
        sizeLength: 0,
    },
    {
        id: 1,
        multimediaStaticMedium: "digital static",
        hasSelected: false,
        sizeLength: 0,
    },
    {
        id: 2,
        multimediaStaticMedium: "ooh",
        hasSelected: false,
        sizeLength: 0,
    },
    {
        id: 3,
        multimediaStaticMedium: "print",
        hasSelected: false,
        sizeLength: 0,
    },
];
var REPORT_TYPE;
(function (REPORT_TYPE) {
    REPORT_TYPE["COLLECTION_REPORT"] = "COLLECTION REPORT";
    REPORT_TYPE["VAT_SUMMARY"] = "VAT SUMMARY";
    REPORT_TYPE["TAX_SUMMARY"] = "TAX SUMMARY";
    REPORT_TYPE["REPORT_PER_COMPANY"] = "REPORT PER COMPANY";
    REPORT_TYPE["REPORT_PER_AGENCY"] = "REPORT PER AGENCY";
    REPORT_TYPE["REPORT_PER_SCREENER"] = "REPORT PER SCREENER";
    REPORT_TYPE["REPORT_PER_MEDIUM"] = "REPORT PER MEDIUM";
    REPORT_TYPE["REPORT_PER_APPLICANT"] = "REPORT PER APPLICANT";
})(REPORT_TYPE || (REPORT_TYPE = {}));


/***/ }),

/***/ "9zEv":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/success-verification-page/success-verification-page.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  background-color: #f0f0f0;\n}\n\n.content {\n  background-color: white;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: 10px 10px 7px -10px rgba(0, 0, 0, 0.35);\n  -webkit-box-shadow: 10px 10px 7px -10px rgba(0, 0, 0, 0.35);\n  -moz-box-shadow: 10px 10px 7px -10px rgba(0, 0, 0, 0.35);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n  padding: 2em 3em;\n}\n\n.content .logo {\n  text-align: center;\n}\n\n.content .check-icon {\n  text-align: center;\n  padding: 1em 0em 2em 0em;\n}\n\n.content .check-icon img {\n  height: 8em;\n  width: 8em;\n}\n\n.content .page-message {\n  text-align: center;\n}\n\n.content .page-message h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #6d6d6d;\n}\n\n.content .button-content {\n  text-align: center;\n  padding: 0px 6em;\n}\n\n.content .button-content button {\n  width: 100%;\n}\n\n.content .help-content {\n  text-align: center;\n  font-style: italic;\n  color: gray;\n}\n\n.content .help-content img {\n  height: 4em;\n  width: 4em;\n  padding: 5px;\n}\n\n.content .help-content img:hover {\n  cursor: pointer;\n}\n\n@media (min-width: 877px) {\n  .content {\n    padding: 3em 5em;\n  }\n  .content .page-message h3 {\n    font-size: 25px;\n  }\n}\n\n@media (min-width: 1230px) {\n  .content {\n    padding: 3em 3em;\n  }\n  .content .check-icon img {\n    height: 12em;\n    width: 12em;\n  }\n  .content .page-message {\n    padding: 0px 5em;\n  }\n  .content .page-message h3 {\n    font-size: 30px;\n  }\n}\n\n@media (min-width: 1300px) {\n  .content .button-content {\n    padding: 0px 15em;\n  }\n}\n\n@media (min-width: 1597px) {\n  .content {\n    padding: 3em 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N1Y2Nlc3MtdmVyaWZpY2F0aW9uLXBhZ2Uvc3VjY2Vzcy12ZXJpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBR0E7RUFHSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtREFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLSTtFQUNJLGtCQUFBO0FBSFI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0FBSFI7O0FBSVE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUZaOztBQU1JO0VBRUksa0JBQUE7QUFMUjs7QUFNUTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7QUFOWjs7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjs7QUFVUTtFQUNJLFdBQUE7QUFSWjs7QUFhSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWFI7O0FBWVE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFWWjs7QUFZUTtFQUNJLGVBQUE7QUFWWjs7QUFpQkE7RUFDSTtJQUNJLGdCQUFBO0VBZE47RUFnQlU7SUFDSSxlQUFBO0VBZGQ7QUFDRjs7QUFzQkE7RUFDSTtJQUNJLGdCQUFBO0VBcEJOO0VBc0JVO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUFwQmQ7RUF1Qk07SUFDSSxnQkFBQTtFQXJCVjtFQXNCVTtJQUNJLGVBQUE7RUFwQmQ7QUFDRjs7QUEyQkE7RUFFUTtJQUNJLGlCQUFBO0VBMUJWO0FBQ0Y7O0FBK0JBO0VBQ0k7SUFDSSxpQkFBQTtFQTdCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N1Y2Nlc3MtdmVyaWZpY2F0aW9uLXBhZ2Uvc3VjY2Vzcy12ZXJpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcblxyXG4uY29udGVudHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hc2MtaW1hZ2Utc21hbGwucG5nJyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3OSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQ1KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXNjLWljb24uaWNvXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggLTEwcHggcmdiYSgwLDAsMCwwLjM1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCAtMTBweCByZ2JhKDAsMCwwLDAuMzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggN3B4IC0xMHB4IHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyZW0gM2VtO1xyXG4gICBcclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2hlY2staWNvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDBlbSAyZW0gMGVtO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA4ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLW1lc3NhZ2V7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMmVtIDBlbSAwZW0gMGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHJnYigwLCAxNTMsIDApO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWNvbnRlbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA2ZW07XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuaGVscC1jb250ZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDRlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWc6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4NzdweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDVlbTtcclxuICAgICAgICAucGFnZS1tZXNzYWdle1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMzBweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDNlbTtcclxuICAgICAgICAuY2hlY2staWNvbntcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtbWVzc2FnZXtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDVlbTtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICAuYnV0dG9uLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1OTdweCkge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogM2VtIDEwZW07XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    environment: 'UAT',
    production: true,
    ASC_API: 'http://18.136.32.45:9095/asc/',
    websocketUri: 'http://18.136.32.45:9095:3000'
};


/***/ }),

/***/ "B1bq":
/*!***********************************************************!*\
  !*** ./src/app/core/services/socket/websocket.service.ts ***!
  \***********************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");




let WebSocketService = class WebSocketService {
    constructor(socket) {
        this.socket = socket;
    }
    listen(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](subscriber => {
            this.socket.on(event, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(event, data) {
        this.socket.emit(event, data);
    }
};
WebSocketService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
];
WebSocketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], WebSocketService);



/***/ }),

/***/ "BZDD":
/*!*******************************************************************!*\
  !*** ./src/app/shared/access-denied/access-denied.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  text-align: center;\n  position: fixed;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nmat-icon {\n  line-height: 2;\n  margin-bottom: 1em;\n}\n\nh1 {\n  font-size: 2em;\n}\n\nbody {\n  color: #bf2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGNvbG9yOiAjYmYyYzJjO1xyXG59Il19 */");

/***/ }),

/***/ "CHq8":
/*!************************************************************!*\
  !*** ./src/app/core/services/encr-decr-service.service.ts ***!
  \************************************************************/
/*! exports provided: EncrDecrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncrDecrService", function() { return EncrDecrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



let EncrDecrService = class EncrDecrService {
    constructor() {
        this.key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse('++PJM618KDB23mjp7=+dk2#-BC789!!1');
        this.iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse('089pjm++kdb+2220');
    }
    // The set method is use for encrypt the value.
    set(value) {
        const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(value.toString()), this.key, {
            keySize: 256,
            iv: this.iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        return encrypted.toString();
    }
    // The get method is use for decrypt the value.
    get(value) {
        const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(value.toString(), this.key, {
            keySize: 256,
            iv: this.iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
    }
};
EncrDecrService.ctorParameters = () => [];
EncrDecrService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EncrDecrService);



/***/ }),

/***/ "Iws0":
/*!**********************************************************!*\
  !*** ./src/app/core/services/common-services.service.ts ***!
  \**********************************************************/
/*! exports provided: CommonServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServices", function() { return CommonServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let CommonServices = class CommonServices {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    sendClickEvent() {
        this.subject.next();
    }
    getClickEvent() {
        return this.subject.asObservable();
    }
    toUpperCase(object, property, event) {
        if (object && event) {
            object[property] = event.toUpperCase();
        }
    }
};
CommonServices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonServices);



/***/ }),

/***/ "KXg1":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/success-verification-page/success-verification-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SuccessVerificationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageComponent", function() { return SuccessVerificationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_success_verification_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./success-verification-page.component.html */ "XqPF");
/* harmony import */ var _success_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-verification-page.component.scss */ "9zEv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "9Vv1");







let SuccessVerificationPageComponent = class SuccessVerificationPageComponent {
    constructor(router, route, apiService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.isVerified = false;
        this.showLandingPage = false;
    }
    ngOnInit() {
        this.verificationCode = this.route.snapshot.params.id;
        this.verifyAccount();
    }
    verifyAccount() {
        this.apiService.findAll(_utils_constants__WEBPACK_IMPORTED_MODULE_6__["ENDPOINTS"].accountVerification + `/${this.verificationCode}`).subscribe((res) => {
            if (res === false) {
                this.isVerified = true;
                this.showLandingPage = true;
            }
            else {
                this.showLandingPage = true;
            }
        });
    }
    goToLogin() {
        this.router.navigateByUrl('/login');
    }
};
SuccessVerificationPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
SuccessVerificationPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success-verification-page',
        template: _raw_loader_success_verification_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuccessVerificationPageComponent);



/***/ }),

/***/ "LpW2":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    environment: 'DEV',
    production: false,
    ASC_API: 'http://38.242.217.2:9090/asc/',
    websocketUri: 'http://38.242.217.2:3000'
};


/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: AccessDeniedComponent, LayoutComponent, SuccessVerificationPageComponent, AngularMaterialModule, ENV, ENDPOINTS, COMMON_FUNCTION, URL_PATHS, SUCCESS_MESSAGES, ERROR_MESSAGES, APPLICATION_STATUS, APPLICATION_STATUS_FOR_COMPLIANCE, APPLICATION_STATUS_REVISION, OTHER_STATUS, APPLICATION_STATUS_S2, FOR_CLEARANCE_STATUS, TYPE_OF_MEDIUM, FORM_STATUS, ATTACHMENT_TYPE, APPFORM_TYPE, SUBMISSION_TYPE, ACTION_STATUS, PAYMENT_STATUS, USER_ROLES, USER_ROLE_LIST, PAYMENT_TYPE, APP_DECISION_STATUS, PAYMENT_TYPE_LIST, PAYMENT_STATUS_LIST, STATUSES, ROLES, ROLE_LIST, APPLICATION_STATUSES, FORM_TYPE, COMMENT_TYPE, DECISION_STATUS, SPECIAL_APPLICATION, APPLICATION_STAGE, YES_NO_OPTION, HOLIDAY_TYPE, ACCOUNT_TYPE, PAYMENT_MODE, MULTIMEDIA_MOVING, MULTIMEDIA_STATIC, REPORT_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-denied/access-denied.component */ "zV6t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return _access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_0__["AccessDeniedComponent"]; });

/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "0MCZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]; });

/* harmony import */ var _success_verification_page_success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-verification-page/success-verification-page.component */ "KXg1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessVerificationPageComponent", function() { return _success_verification_page_success_verification_page_component__WEBPACK_IMPORTED_MODULE_2__["SuccessVerificationPageComponent"]; });

/* harmony import */ var _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/angular-material.module */ "ZN+y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return _utils_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"]; });

/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/constants */ "9Vv1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ENV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_FUNCTION", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["COMMON_FUNCTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL_PATHS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["URL_PATHS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_MESSAGES", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["SUCCESS_MESSAGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_FOR_COMPLIANCE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS_FOR_COMPLIANCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_REVISION", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS_REVISION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OTHER_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["OTHER_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS_S2", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUS_S2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_CLEARANCE_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["FOR_CLEARANCE_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPE_OF_MEDIUM", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["TYPE_OF_MEDIUM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["FORM_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ATTACHMENT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPFORM_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPFORM_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUBMISSION_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["SUBMISSION_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ACTION_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_ROLES", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["USER_ROLES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE_LIST", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_DECISION_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APP_DECISION_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE_LIST", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_TYPE_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_LIST", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_STATUS_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["STATUSES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROLES", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ROLES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROLE_LIST", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ROLE_LIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUSES", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STATUSES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORM_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["FORM_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMENT_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["COMMENT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECISION_STATUS", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["DECISION_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPECIAL_APPLICATION", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["SPECIAL_APPLICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STAGE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["APPLICATION_STAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YES_NO_OPTION", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["YES_NO_OPTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOLIDAY_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["HOLIDAY_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_MOVING", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["MULTIMEDIA_MOVING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MULTIMEDIA_STATIC", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["MULTIMEDIA_STATIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REPORT_TYPE", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_4__["REPORT_TYPE"]; });








/***/ }),

/***/ "MJGS":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/authorization/auth-guard.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "pPj3");





const TOKEN_KEY = 'AuthToken';
let AuthGuardService = class AuthGuardService {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    canActivate(route, state) {
        const token = this.tokenService.getUserLoginToken();
        if (token) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
    canActivateChild(route, state) {
        var _a;
        const loggedInUser = (_a = this.tokenService.getUserLoginData()) === null || _a === void 0 ? void 0 : _a.user_role;
        if (_shared__WEBPACK_IMPORTED_MODULE_3__["USER_ROLE_LIST"].includes(loggedInUser)) {
            return true;
        }
        else {
            this.router.navigate(['/access-denied']);
            return false;
        }
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-idle/core */ "+lv+");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-idle/keepalive */ "FbN+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/alert-message/sweet-alert.service */ "4nSt");
/* harmony import */ var _core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/data.storage.service */ "nBem");
/* harmony import */ var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/utils/constants */ "9Vv1");











let AppComponent = class AppComponent {
    constructor(dataStorage, router, sweetAlertService, idle, keepalive) {
        this.dataStorage = dataStorage;
        this.router = router;
        this.sweetAlertService = sweetAlertService;
        this.idle = idle;
        this.keepalive = keepalive;
        this.title = '';
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.displayWarningForTimeout = false;
        this.router.events.subscribe((event) => {
            if (event.url !== '/login' && event.url !== '/' && event.url !== undefined) {
                // AUTO-LOGOUT AFTER 5mins of IDLE TIME
                // sets an idle timeout warning after 4 minutes and 30 seconds.
                const idleStart = (29 * 60) + 30;
                idle.setIdle(idleStart);
                // sets a timeout period of 30 seconds.
                // after 5 minutes of inactivity ( 29:30 idle + 30 seconds warning), the user will be considered timed out.
                idle.setTimeout(30);
                // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
                idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_INTERRUPTSOURCES"]);
                idle.onIdleEnd.subscribe(() => {
                    this.reset();
                });
                idle.onTimeout.subscribe(() => {
                    this.sweetAlertService.sweetAlertMessage('info', 'Logout', 'You have been logged out due to inactivity.');
                    this.timedOut = true;
                    this.router.navigate(['/']);
                });
                idle.onIdleStart.subscribe(() => {
                    this.displayWarningForTimeout = true;
                });
                idle.onTimeoutWarning.subscribe((countdown) => {
                    dataStorage.setIdleCountdown(countdown);
                    dataStorage.setIsIdleCountdownDisplayed(true);
                    if (!countdown) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: 'Auto close alert!',
                            html: `You will time out in <b>${countdown}</b> seconds.`,
                            timerProgressBar: true,
                            timer: countdown,
                            didOpen: () => {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                                const b = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.getHtmlContainer().querySelector('b');
                                countdown = setInterval(() => {
                                    var _a;
                                    b.textContent = (_a = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a === null || sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a === void 0 ? void 0 : sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.getTimerLeft()) === null || _a === void 0 ? void 0 : _a.toString();
                                }, 1000);
                            },
                            willClose: () => {
                                clearInterval(countdown);
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.DismissReason.timer) {
                                console.log('I was closed by the timer');
                                this.sweetAlertService.sweetAlertMessage('info', 'Logout', 'You have been logged out due to inactivity.');
                            }
                        });
                    }
                });
                // sets the ping interval to 60 seconds
                keepalive.interval(60);
                keepalive.onPing.subscribe(() => this.lastPing = new Date());
                this.reset();
            }
        });
    }
    ngOnInit() {
        console.log(_shared_utils_constants__WEBPACK_IMPORTED_MODULE_10__["ENV"].currentEnv, ' - OASC v2.0.1');
        this.currentUser = this.dataStorage.getUserAccount();
        this.title = 'ASC Online System';
    }
    reset() {
        this.idle.watch();
        this.timedOut = false;
        this.displayWarningForTimeout = false;
        this.dataStorage.setIsIdleCountdownDisplayed(false);
    }
    logout() {
        this.dataStorage.signOut();
        this.router.navigateByUrl('login');
        this.sweetAlertService.sweetAlertMessage('info', 'Logout', 'You have been logged out due to inactivity.');
    }
    onMove() {
        this.reset();
    }
    onKeyPress() {
        this.reset();
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_services_data_storage_service__WEBPACK_IMPORTED_MODULE_9__["DataStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"] },
    { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["Idle"] },
    { type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"] }
];
AppComponent.propDecorators = {
    onMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mousemove',] }],
    onKeyPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['keypress',] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TMp0":
/*!*******************************************************!*\
  !*** ./src/app/core/services/file.storage.service.ts ***!
  \*******************************************************/
/*! exports provided: FileStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileStorageService", function() { return FileStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");




let FileStorageService = class FileStorageService {
    constructor(http) {
        this.http = http;
    }
    pushFileToStorage(endpoint, file, params) {
        const data = new FormData();
        data.append('file', file);
        return this.http.post(endpoint + params, data);
    }
    uploadImage(endpoint, file) {
        const data = new FormData();
        data.append('file', file);
        return this.http.post(endpoint, data);
    }
    downloadFileToStorage(filename, fileURL) {
        // const headers = new Headers({ 'Content-Type': 'application/pdf', responseType: 'blob' });
        // let headers = new HttpHeaders();
        // headers = headers.set('Accept', 'application/pdf');
        // return this.http.get(fileURL, { headers: headers, responseType: 'blob' });
        return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].downloadAttachmentDocument}` + '/' + filename);
    }
};
FileStorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileStorageService);



/***/ }),

/***/ "Uyvf":
/*!*********************************************************!*\
  !*** ./src/app/core/models/applicationCountS2.model.ts ***!
  \*********************************************************/
/*! exports provided: ApplicationCountS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCountS2", function() { return ApplicationCountS2; });
class ApplicationCountS2 {
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<title>{{title}}</title>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "XqPF":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/success-verification-page/success-verification-page.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n    <div class=\"content\" *ngIf=\"showLandingPage\">\r\n        <div class=\"logo\">\r\n            <img src=\"../../../assets/images/logo.png\" alt=\"\">\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"page-message\">\r\n            <h3 *ngIf=\"!isVerified\">Your account has been verified succesfully.</h3>\r\n            <h3 *ngIf=\"isVerified\">Your account has been already verified</h3>\r\n        </div>\r\n\r\n        <div class=\"check-icon animated rubberBand\" *ngIf=\"!isVerified\">\r\n            <img src=\"../../../assets/images/social-media/check.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"check-icon animated rubberBand\" *ngIf=\"isVerified\">\r\n            <img src=\"../../../assets/images/social-media/info.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"button-content\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"goToLogin()\">\r\n                GO TO LOGIN PAGE\r\n            </button><br><br>\r\n        </div>\r\n\r\n        <div class=\"help-content\">\r\n            <p><b>Need help?</b></p>\r\n            <p>If you encounter some issues, don't hesitate to contact us on</p>\r\n            <img src=\"../../../assets/images/social-media/facebook.png\" alt=\"\">\r\n            <img src=\"../../../assets/images/social-media/gmail.png\" alt=\"\">\r\n        </div>\r\n    </div>\r\n</html>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/encr-decr-service.service */ "CHq8");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-idle/keepalive */ "FbN+");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var environments_environment_dev__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! environments/environment.dev */ "LpW2");











// this includes the core NgIdleModule but includes keepalive providers for easy wireup

// optional, provides moment-style pipes for date formatting



const config = { url: environments_environment_dev__WEBPACK_IMPORTED_MODULE_14__["environment"].websocketUri, options: {} };
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_11__["NgIdleKeepaliveModule"].forRoot(),
            angular2_moment__WEBPACK_IMPORTED_MODULE_12__["MomentModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["SocketIoModule"].forRoot(config)
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            _core_services_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_10__["EncrDecrService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZN+y":
/*!*********************************************************!*\
  !*** ./src/app/shared/utils/angular-material.module.ts ***!
  \*********************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @candidosales/material-time-picker */ "fvN+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");































const ANGULAR_FORMS = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
];
const MATERIAL_MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
    _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_25__["MaterialTimePickerModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
];
const PACKAGE_MODULES = [
    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__["NgSelectModule"],
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
    ngx_spinner__WEBPACK_IMPORTED_MODULE_28__["NgxSpinnerModule"],
];
let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ANGULAR_FORMS,
            ...PACKAGE_MODULES,
            ...MATERIAL_MODULES
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ANGULAR_FORMS,
            ...PACKAGE_MODULES,
            ...MATERIAL_MODULES
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "b9SZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/layout.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner\">\r\n  <ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"large\" color=\"#fff\" type=\"line-spin-fade\" [fullScreen]=\"false\">\r\n    <p><b> {{spinnerMessageEmitter}} </b></p>\r\n  </ngx-spinner>\r\n</div>\r\n<div class=\"header\" [ngClass]=\"opened == false ? 'header__sidenav-opened' : 'header__sidenav-closed'\">\r\n  <app-header></app-header>\r\n</div>\r\n<mat-sidenav-container (backdropClick)=\"close('backdrop')\">\r\n  <mat-sidenav mode=\"side\" #sidenav [(opened)]=\"opened\">\r\n    <div class=\"side-nav\">\r\n      <hr>\r\n      <p class=\"user-role\">\r\n        <b>{{ userRole?.replace('ENCODER','EVALUATOR')?.replaceAll('_',' ').replaceAll('ROLE ', '') | uppercase }}</b>\r\n      </p>\r\n      <hr>\r\n\r\n      <div class=\"list-items\">\r\n        <div class=\"list-item\" [hidden]=\"isAccounting\"\r\n          (click)=\"hidden4 = !hidden4 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faUserCircle\"></fa-icon>\r\n          <p>S1 Applications</p> <span [@rotatedState]='s1ApplicationState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"opened && hidden4\" class=\"nav-dropdown\">\r\n          <li [routerLink]=\"['/asc/page/application/s1/lists']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon> Application List <span class=\"badge rounded-pill bg-success\">{{badgeCounter.countTotalApplications}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/s1/multiple']\" *ngIf=\"isApplicant || isEvaluator || isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Multiple Applications  <span class=\"badge rounded-pill bg-success\">{{badgeCounter.countTotalMultipleApplications}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/s1/special']\" *ngIf=\"isApplicant || isEvaluator || isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Special Applications  <span class=\"badge rounded-pill bg-success\">{{badgeCounter.countTotalSpecialApplications}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/s1/assigned-applications']\" *ngIf=\"isAdSpecialist||isScreener\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Retrieve/Re-assign <span class=\"badge rounded-pill bg-success\">{{badgeCounter.countTotalAssignedApplication}}</span>\r\n            <!-- <span class=\"badge rounded-pill bg-success\">5</span> -->\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/s1/for-release']\" *ngIf=\"isReviewer || isAdSpecialist || isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>For Release <span class=\"badge rounded-pill bg-success\">{{badgeCounter.countTotalForRelease}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/s1/released']\" *ngIf=\"isAdSpecialist || isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Released <span class=\"badge rounded-pill bg-success\">{{badgeCounter.countTotalReleased}}</span>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"list-item\" (click)=\"hidden7 = !hidden7 && opened=true; rotateCarretIcon('s2ApplicationState') \"\r\n          [hidden]=\"isAccounting||isScreener||isReviewer\">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faUserCircle\"></fa-icon>\r\n          <p>S2 Applications</p> <span [@rotatedState]='s2ApplicationState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"opened && hidden7\" class=\"nav-dropdown\">\r\n          <li [routerLink]=\"['/asc/page/application/s2/lists']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Application List <span class=\"badge rounded-pill bg-success\">{{applicationCountS2.countTotalApplications}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/s2/special']\" *ngIf=\"isApplicant || isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Special Clearing Request <span class=\"badge rounded-pill bg-success\">{{applicationCountS2.countTotalSpecialClearingRequest}}</span>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"list-item\" (click)=\"opened=true\" [routerLink]=\"['/asc/page/accounting/payments']\"\r\n          *ngIf=\"isAccounting\">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faHandHoldingUsd\"></fa-icon>\r\n          Payments\r\n          <span class=\"badge rounded-pill bg-danger badge-accounting\">{{badgeCounter.countForPaymentAccounting || 0}}</span>\r\n        </div>\r\n\r\n        <div class=\"list-item\" *ngIf=\"isAccounting\"\r\n          (click)=\"hiddenVoucher = !hiddenVoucher && openedVoucher=true; rotateCarretIcon('voucherState') \">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faMoneyBillWave\"></fa-icon>\r\n          <p>Vouchers</p>\r\n          <span [@rotatedState]='voucherState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"openedVoucher && hiddenVoucher\" class=\"nav-dropdown\">\r\n          <li [routerLink]=\"['/asc/page/accounting/voucher-enrollment']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Voucher Enrollment\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/accounting/voucher-replenishment']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Voucher Replenishment\r\n          </li>\r\n        </ul>\r\n\r\n\r\n        <div class=\"list-item\" (click)=\"opened=true\" [routerLink]=\"['/asc/page/accounting/or-preparation']\"\r\n          *ngIf=\"isAccounting\">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faReceipt\"></fa-icon>\r\n          <p>Official Receipt Preparation</p>\r\n        </div>\r\n\r\n        <div class=\"list-item\" (click)=\"opened=true\" [routerLink]=\"['/asc/page/accounting/reports']\"\r\n          *ngIf=\"isAccounting || isAdmin || isSuperAdmin\">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faPrint\"></fa-icon>\r\n          <p>Reports</p>\r\n        </div>\r\n\r\n        <div class=\"list-item\" *ngIf=\"userRole == 'ROLE_APPLICANT'\"\r\n          (click)=\"hidden3 = !hidden3 && opened=true; rotateCarretIcon('feeState') \">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faHandHoldingUsd\"></fa-icon>\r\n          <p>For Payments</p> <span [@rotatedState]='feeState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"opened && hidden3\" class=\"nav-dropdown\">\r\n          <li [routerLink]=\"['/asc/page/application/single-application']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Individual <span class=\"badge rounded-pill bg-success\">{{individualCounter}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/multiple-applications']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Multiple <span class=\"badge rounded-pill bg-success\">{{multipleCounter}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/special-applications']\"\r\n            *ngIf=\"isApplicant || isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>S2 Special Clearing <span class=\"badge rounded-pill bg-success\">{{s2SpecialCounter}}</span>\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/accounts-payable']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Accounts Payable <span class=\"badge rounded-pill bg-success\">{{accountsPayableCounter}}</span>\r\n          </li>\r\n        </ul>\r\n\r\n        <!--  <div class=\"list-item\" (click)=\"opened=true\" [routerLink]=\"['/asc/page/accounting/company-voucher-fund']\"\r\n          *ngIf=\"isAccounting || isApplicant\"\r\n          <fa-icon class=\"list-icon\" [icon]=\"faMoneyBillWave\"></fa-icon>\r\n          <p>{{voucherNavigationName}}</p>\r\n        </div> -->\r\n\r\n        <div class=\"list-item\" *ngIf=\"isAdmin || isSuperAdmin\"\r\n          (click)=\"hidden1 = !hidden1 && opened=true; rotateCarretIcon('accountState') \">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faUserCircle\"></fa-icon>\r\n          <p>Account</p> <span [@rotatedState]='accountState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"opened && hidden1\" class=\"nav-dropdown\">\r\n          <!-- <li [routerLink]=\"['/asc/page/account/user-list']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>User Accounts\r\n          </li> -->\r\n          <li [routerLink]=\"['/asc/page/maintenance/accounts']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>User Accounts\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/account/user-role']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>User Role\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"list-item\" *ngIf=\"isAdmin || isSuperAdmin || isAccounting\"\r\n          (click)=\"hidden2 = !hidden2 && opened=true; rotateCarretIcon('maintenanceState')\">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faTools\"></fa-icon>\r\n          <p>Maintenance</p> <span [@rotatedState]='maintenanceState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"opened && hidden2\" class=\"nav-dropdown\">\r\n\r\n          <li [routerLink]=\"['/asc/page/maintenance/announcement-content']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Announcement\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/company/lists']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Company\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/affiliation']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Membership Affiliation\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/login-image']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Login Image\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/type-of-application']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type Of Application\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/dialects']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Dialect\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/type-of-document']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type of Document\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/type-of-main-documents']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type of Main Document\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/document-size']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Main Document File Size\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/email-notification']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Email Notification\r\n          </li>\r\n          <!-- TO DO: Weekly ASC User Schedule -->\r\n          <li [routerLink]=\"['/asc/page/maintenance/payment-type']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Payment Mode\r\n          </li>\r\n\r\n          <li [routerLink]=\"['/asc/page/maintenance/weekly-user-schedule']\" *ngIf=\"isAdmin || isSuperAdmin || isAccounting\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Weekly User Schedule\r\n          </li>\r\n\r\n          <!-- TO DO: Application Decision Override -->\r\n          <li [routerLink]=\"['/asc/page/maintenance/type-of-reason']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type of Reason\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/number-of-multiple-application-allowed']\"\r\n            *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Number of Multiple Application Allowed\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/type-of-rational']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type Of Rationale\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/screener-reviewer-pairs']\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Screener Reviewer Pairing\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/maintenance/qr-and-bar-code-checker']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>QR and Barcode Checker\r\n          </li>\r\n          <li [routerLink]=\"['/asc/page/application/reassignment']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Application Reassignment\r\n          </li>\r\n\r\n          <div  *ngIf=\"isAdmin || isSuperAdmin\">\r\n            <!-- <span>\r\n              <p><fa-icon class=\"list-icon-li\" [icon]=\"faLayerGroup\"></fa-icon> Maintenance Group 1</p>\r\n            </span> -->\r\n\r\n            <div class=\"list-item\" [hidden]=\"isAccounting\"\r\n              (click)=\"hidden5 = !hidden5 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n              <!-- <fa-icon class=\"list-icon\" [icon]=\"faUserCircle\"></fa-icon> -->\r\n              <p>Category-Brand-Product</p> <span [@rotatedState]='s1ApplicationState'>\r\n                <p>\r\n                  <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n                </p>\r\n              </span>\r\n            </div>\r\n\r\n            <ul *ngIf=\"opened && hidden5\" class=\"nav-dropdown\">\r\n              <li [routerLink]=\"['/asc/page/maintenance/category']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n                <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Category\r\n              </li>\r\n              <li [routerLink]=\"['/asc/page/maintenance/brands']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n                <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Brand\r\n              </li>\r\n              <li [routerLink]=\"['/asc/page/maintenance/product']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n                <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Product\r\n              </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <!-- <div class=\"list-item-2\" *ngIf=\"isAdmin || isSuperAdmin\"> -->\r\n        <div *ngIf=\"isAdmin || isSuperAdmin\">\r\n          <!-- <span>\r\n            <p><fa-icon class=\"list-icon-li\" [icon]=\"faLayerGroup\"></fa-icon> Maintenance Group 2</p>\r\n          </span> -->\r\n          <div class=\"list-item\" [hidden]=\"isAccounting\"\r\n            (click)=\"hidden6 = !hidden6 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n            <!-- <fa-icon class=\"list-icon\" [icon]=\"faUserCircle\"></fa-icon> -->\r\n            <p>Medium & Execution</p> <span [@rotatedState]='s1ApplicationState'>\r\n              <p>\r\n                <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n              </p>\r\n            </span>\r\n          </div>\r\n\r\n          <ul *ngIf=\"opened && hidden6\" class=\"nav-dropdown\">\r\n            <li [routerLink]=\"['/asc/page/maintenance/type-of-medium']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type of Medium\r\n            </li>\r\n            <li [routerLink]=\"['/asc/page/maintenance/type-of-executions']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type of Execution\r\n            </li>\r\n            <li [routerLink]=\"['/asc/page/maintenance/medium-executions-controller']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Type of Medium Execution\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div *ngIf=\"isAdmin || isSuperAdmin\">\r\n          <!-- <span>\r\n            <p><fa-icon class=\"list-icon-li\" [icon]=\"faLayerGroup\"></fa-icon> Hours / Days Maintenance</p>\r\n          </span> -->\r\n          <!-- <div  [hidden]=\"isAccounting\"\r\n          (click)=\"hidden8 = !hidden8 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n          <fa-icon class=\"list-icon\" [icon]=\"faUserCircle\"></fa-icon>\r\n          <p>Hours / Days Maintenance</p> <span [@rotatedState]='s1ApplicationState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div> -->\r\n          <div class=\"list-item\" [hidden]=\"isAccounting\"\r\n          (click)=\"hidden8 = !hidden8 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n          <p>Hours / Days Maintenance</p> <span [@rotatedState]='s1ApplicationState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n        <ul *ngIf=\"opened && hidden8\" class=\"nav-dropdown\">\r\n            <li [routerLink]=\"['/asc/page/maintenance/holidays']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Holiday\r\n            </li>\r\n            <li [routerLink]=\"['/asc/page/maintenance/s1-s2-expiration-periods']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>S1 and S2 Form Expiration Period\r\n            </li>\r\n            <li [routerLink]=\"['/asc/page/maintenance/s1-fees-settlement-period']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>S1 Form Schedule of Fees Settlement Period\r\n            </li>\r\n            <li [routerLink]=\"['/asc/page/maintenance/s1-incomplete-decision-expiration-period']\"\r\n              *ngIf=\"isAdmin || isSuperAdmin\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Incomplete Decision Expiration Period\r\n            </li>\r\n            <!-- TO DO: Support Document File Size -->\r\n            <!-- TO DO: Modification of Approved S1 Forms -->\r\n            <li [routerLink]=\"['/asc/page/maintenance/promissory-note-periods']\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Promissory Note Period\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div *ngIf=\"isAdmin || isSuperAdmin\">\r\n          <!-- <span>\r\n            <p><fa-icon class=\"list-icon-li\" [icon]=\"faLayerGroup\"></fa-icon> Penalties</p>\r\n          </span> -->\r\n          <div class=\"list-item\" [hidden]=\"isAccounting\"\r\n          (click)=\"hidden9 = !hidden9 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n          <p>Penalties</p> <span [@rotatedState]='s1ApplicationState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n          <ul *ngIf=\"opened && hidden9\" class=\"nav-dropdown\">\r\n              <li [routerLink]=\"['/asc/page/maintenance/brand-penalties']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n                <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Brand Penalties\r\n              </li>\r\n              <li [routerLink]=\"['/asc/page/maintenance/company-penalties']\" *ngIf=\"isAdmin || isSuperAdmin\">\r\n                <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Company Penalty\r\n              </li>\r\n          </ul>\r\n        </div>\r\n        <div >\r\n          <!-- <span>\r\n            <p><fa-icon class=\"list-icon-li\" [icon]=\"faLayerGroup\"></fa-icon> Rates</p>\r\n          </span> -->\r\n\r\n          <div class=\"list-item\"\r\n          (click)=\"hidden0 = !hidden0 && opened=true; rotateCarretIcon('s1ApplicationState') \">\r\n          <p>Rates</p> <span [@rotatedState]='s1ApplicationState'>\r\n            <p>\r\n              <fa-icon [icon]=\"faCaretDown\"></fa-icon>\r\n            </p>\r\n          </span>\r\n        </div>\r\n          <ul *ngIf=\"opened && hidden0\" class=\"nav-dropdown\">\r\n            <li [routerLink]=\"['/asc/page/maintenance/asc-rates']\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>Maintenance of Fees (ASC Rates)\r\n            </li>\r\n            <li [routerLink]=\"['/asc/page/maintenance/asc-rates-special']\">\r\n              <fa-icon class=\"list-icon-li\" [icon]=\"faCaretRight\"></fa-icon>ASC Rates - Special\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        </ul>\r\n\r\n        <div class=\"list-item\" [routerLink]=\"['/asc/page/announcement']\">\r\n          <fa-icon class=\"list-icon\" (click)=\"opened=true\" [icon]=\"faInfoCircle\"></fa-icon>\r\n          <p>Announcement</p>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <hr>\r\n      <div class=\"list-items\">\r\n        <div class=\"list-item\" (click)=\"logout()\">\r\n          <fa-icon class=\"list-icon\" (click)=\"opened=true\" [icon]=\"faLogout\"></fa-icon>\r\n          <p>Logout</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <div class=\"main-content\">\r\n      <a class=\"sidenav-icon\" [ngClass]=\"opened == true ? 'sidenav-opened' : 'sidenav-closed'\" (click)=\"opened=!opened\"\r\n        matTooltip=\"Toggle Sidenav\">\r\n        <fa-icon [icon]=\"faAlignJustify\"></fa-icon>\r\n      </a><br>\r\n      <div [ngClass]=\"opened == true ? 'sidenav-content-opened' : 'sidenav-content-closed'\">\r\n        <ng-content select=\"router-outlet\"></ng-content>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n    </div>\r\n    <div class=\"footer\" [ngClass]=\"opened == false ? 'footer__sidenav-opened' : 'footer__sidenav-closed'\">\r\n      <app-footer fixed></app-footer>\r\n    </div>\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "buHz":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/access-denied/access-denied.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <div>\r\n        <img src=\"../../../../assets/images/logo.png\" alt=\"\">\r\n        <br>\r\n        <mat-icon>lock</mat-icon>\r\n        <h1>Access Denied</h1>\r\n        <hr>\r\n        <p>\r\n            You don't have permission to access this page. <br>\r\n            Contact an administrator to get permission or go to the home page <br>\r\n            and browse other pages.\r\n        </p>\r\n        <button mat-raised-button (click)=\"goToLogin()\" color=\"primary\">\r\n            Login as a different user\r\n        </button>\r\n        <a routerLink=\"/asc/page/dashboard\" class=\"btn btn-link\">Go to Homepage</a>\r\n    </div>\r\n</body>");

/***/ }),

/***/ "dJ3e":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, DataStorageService, SweetAlertService, AnimateDigitService, AuthGuardService, FileStorageService, ValidateFieldService, CommonServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "qc5V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.storage.service */ "nBem");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return _data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]; });

/* harmony import */ var _alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-message/sweet-alert.service */ "4nSt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SweetAlertService", function() { return _alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__["SweetAlertService"]; });

/* harmony import */ var _animation_animate_digit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation/animate-digit.service */ "r78v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimateDigitService", function() { return _animation_animate_digit_service__WEBPACK_IMPORTED_MODULE_3__["AnimateDigitService"]; });

/* harmony import */ var _autentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autentication/auth-guard.service */ "yAsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _autentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]; });

/* harmony import */ var _file_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file.storage.service */ "TMp0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileStorageService", function() { return _file_storage_service__WEBPACK_IMPORTED_MODULE_5__["FileStorageService"]; });

/* harmony import */ var _validate_field_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate-field.service */ "r74M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateFieldService", function() { return _validate_field_service__WEBPACK_IMPORTED_MODULE_6__["ValidateFieldService"]; });

/* harmony import */ var _common_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-services.service */ "Iws0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonServices", function() { return _common_services_service__WEBPACK_IMPORTED_MODULE_7__["CommonServices"]; });



// export * from './address/address.service';








/***/ }),

/***/ "hlXp":
/*!********************************************************!*\
  !*** ./src/app/core/models/application-count.model.ts ***!
  \********************************************************/
/*! exports provided: ApplicationCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCount", function() { return ApplicationCount; });
class ApplicationCount {
}


/***/ }),

/***/ "hvkF":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/layout.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav {\n  width: 290px;\n  background-color: #cee6ff;\n  position: fixed;\n  padding-top: 7em;\n}\n\n.user-role {\n  font-size: 1.5em;\n  padding-top: 1em;\n  text-align: center;\n}\n\nhr {\n  width: 90%;\n  margin: auto;\n}\n\n.mat-drawer-container {\n  max-height: 80vh;\n}\n\n.mat-drawer-content {\n  background: #dfdfdf;\n}\n\n.main-content {\n  height: 87.5vh;\n  max-height: 87.5vh;\n  z-index: 1;\n  overflow-x: hidden;\n}\n\n.badge-accounting {\n  left: 85% !important;\n  width: 1.5rem !important;\n  height: 1rem !important;\n  margin-top: 0.1rem !important;\n  padding: 0.2rem !important;\n  text-align: center !important;\n}\n\n.header {\n  top: 0;\n}\n\n.footer {\n  bottom: 0;\n}\n\n.header__sidenav-opened, .header__sidenav-closed {\n  width: 100%;\n}\n\n.sidenav-content-opened {\n  width: 100%;\n}\n\n.sidenav-content-closed {\n  margin-left: 60px;\n}\n\n.footer__sidenav-opened {\n  width: 100%;\n}\n\n.footer__sidenav-closed {\n  width: calc(100% - 300px);\n}\n\n.sidenav-closed {\n  margin-left: 4em;\n}\n\n.header {\n  position: -webkit-sticky;\n  position: sticky;\n  transition: 100ms;\n  z-index: 2;\n}\n\n.footer {\n  position: fixed;\n  transition: 100ms;\n  z-index: 2;\n}\n\n.user-role {\n  font-size: 1.25em;\n}\n\n::ng-deep .mat-drawer-inner-container {\n  overflow: auto !important;\n}\n\n::ng-deep ::-webkit-scrollbar {\n  width: 1em;\n}\n\n::ng-deep ::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n::ng-deep ::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  border-radius: 10px;\n}\n\n::ng-deep ::-webkit-scrollbar-thumb:hover {\n  background: #8c8b8b;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) {\n  transform: translate3d(0, 0, 0) !important;\n  visibility: visible !important;\n  width: 57px !important;\n  overflow: auto;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .asc-logo {\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .asc-logo-small {\n  padding: 20px 5px 0px 10px;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .asc-logo-small img {\n  height: 35px;\n  width: 35px;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .asc-logo-small:hover {\n  cursor: pointer;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .user-role {\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) hr {\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) p {\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .list-items .list-item {\n  margin-bottom: 10px;\n  vertical-align: middle;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .list-icon-li {\n  display: none;\n}\n\nmat-sidenav-container mat-sidenav:not(.mat-drawer-opened) .list-icon {\n  font-size: 20px;\n}\n\nmat-sidenav-container mat-sidenav {\n  background-color: white;\n  width: 300px;\n  box-shadow: 10px 2px 28px -8px rgba(0, 0, 0, 0.32);\n  -webkit-box-shadow: 10px 2px 28px -8px rgba(0, 0, 0, 0.32);\n  -moz-box-shadow: 10px 2px 28px -8px rgba(0, 0, 0, 0.32);\n}\n\nmat-sidenav-container mat-sidenav a {\n  color: white;\n  font-size: 12px;\n}\n\nmat-sidenav-container mat-sidenav a a:hover {\n  color: #a10000;\n}\n\nmat-sidenav-container mat-sidenav-content a {\n  z-index: 1000;\n  border-radius: 0px 5px 5px 0px;\n  background-color: #c5140c;\n  color: white;\n  border-color: rgba(255, 255, 255, 0);\n  padding: 5px 10px 5px 7px;\n  position: fixed;\n  top: 6.7em;\n}\n\nmat-sidenav-container mat-sidenav-content a:hover {\n  cursor: pointer;\n  transition: 600ms;\n}\n\nmat-sidenav-container .side-nav {\n  height: 100%;\n  width: 100%;\n  overflow: auto !important;\n}\n\nmat-sidenav-container .side-nav .list-items hr {\n  color: rgba(116, 0, 0, 0.445);\n  width: 100%;\n  height: 2px;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item {\n  color: #770000;\n  font-size: 15px;\n  font-weight: 500;\n  padding: 10px 20px;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item span {\n  position: absolute;\n  left: 90%;\n  text-align: end;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item span fa-icon {\n  color: #7a1821;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item:focus {\n  transition: 1000ms;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item:hover {\n  color: red;\n  cursor: pointer;\n  background-color: rgba(255, 166, 0, 0.062);\n}\n\nmat-sidenav-container .side-nav .list-items .list-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 5px;\n  background-color: #ca0000;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.1s, opacity 0.5s;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item:hover::before {\n  opacity: 1;\n  transform: scaleY(1);\n  transition: 0.2s;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item:focus {\n  background-color: rgba(255, 0, 0, 0.137);\n  border-left: 5px solid #740000;\n}\n\nmat-sidenav-container .side-nav .list-items .list-item:focus .list-icon {\n  transition: 0.4s;\n  font-size: 20px;\n}\n\nmat-sidenav-container .side-nav .list-items * {\n  margin: 0;\n  padding: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n\nmat-sidenav-container .side-nav .list-items .list-icon {\n  padding-right: 20px;\n  color: #ca0000;\n}\n\nmat-sidenav-container .side-nav .list-items .list-icon-li {\n  padding-right: 20px;\n  margin-left: -20px;\n  color: #ca0000;\n}\n\nmat-sidenav-container .side-nav .list-items ul {\n  background-color: white;\n}\n\nmat-sidenav-container .side-nav .list-items ul li {\n  font-size: 13px;\n  padding: 10px 0px 10px 70px;\n  width: 100%;\n  color: #770000;\n  font-weight: 500;\n}\n\nmat-sidenav-container .side-nav .list-items ul li span {\n  float: right;\n  margin-right: 10px;\n}\n\nmat-sidenav-container .side-nav .list-items ul li .badge {\n  padding: 2px 10px;\n  width: auto;\n  font-size: 10px;\n}\n\nmat-sidenav-container .side-nav .list-items ul li:hover {\n  background-color: rgba(255, 166, 0, 0.062);\n  border-left: #ca0000 solid 2px;\n  color: red;\n}\n\nmat-sidenav-container .side-nav .list-items ul li:focus {\n  background-color: rgba(255, 0, 0, 0.137);\n  border-color: #f80202;\n  transition: 1000ms;\n}\n\nmat-sidenav-container .side-nav .list-items ul li:focus .list-icon-li {\n  color: #b94a00;\n}\n\n.list-item-2 {\n  border: solid 2px #7a1821;\n  border-radius: 5px;\n  background-color: #e0e0e0;\n}\n\n.list-item-2 span p {\n  text-align: start;\n  color: #7a1821;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n.list-item-2 span fa-icon {\n  color: #7a1821;\n}\n\n@media only screen and (max-width: 600px) {\n  .main-content {\n    margin-left: 2em;\n    text-align: center;\n  }\n\n  a {\n    border-radius: 10px !important;\n    padding: 10px 15px 10px 12px !important;\n    position: fixed !important;\n    top: 80vh !important;\n    right: 5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLE1BQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtBQURKOztBQUlFO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0UsbUJBQUE7QUFKSjs7QUFhRTtFQUNFLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFWSjs7QUFZSTtFQUNFLGFBQUE7QUFWTjs7QUFhSTtFQUtFLDBCQUFBO0FBZk47O0FBV007RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVRSOztBQWNJO0VBQ0UsZUFBQTtBQVpOOztBQWVJO0VBQ0UsYUFBQTtBQWJOOztBQWdCSTtFQUNFLGFBQUE7QUFkTjs7QUFpQkk7RUFDRSxhQUFBO0FBZk47O0FBcUJNO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQW5CUjs7QUF1Qkk7RUFDRSxhQUFBO0FBckJOOztBQXdCSTtFQUNFLGVBQUE7QUF0Qk47O0FBaUNFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSwwREFBQTtFQUNBLHVEQUFBO0FBL0JKOztBQWtDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBaENOOztBQWtDTTtFQUNFLGNBQUE7QUFoQ1I7O0FBd0NJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdENOOztBQXlDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXZDTjs7QUEyQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBekNKOztBQTZDTTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUEzQ1I7O0FBNkNNO0VBV0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXJEUjs7QUFzQ1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBcENWOztBQXFDVTtFQUNFLGNBQUE7QUFuQ1o7O0FBZ0RNO0VBQ0Usa0JBQUE7QUE5Q1I7O0FBaURNO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQS9DUjs7QUFrRE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBQWhEUjs7QUFtRE07RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWpEUjs7QUFvRE07RUFDRSx3Q0FBQTtFQUNBLDhCQUFBO0FBbERSOztBQW9EUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWxEVjs7QUEwRE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0FBeERSOztBQTRETTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQTFEUjs7QUFpRU07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQS9EUjs7QUFrRU07RUFDRSx1QkFBQTtBQWhFUjs7QUFrRVE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBaEVWOztBQWtFVTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQWpFWjs7QUFtRVU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0FBbEVaOztBQXNFUTtFQUNFLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBcEVWOztBQXVFUTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXJFVjs7QUF1RVU7RUFDRSxjQUFBO0FBckVaOztBQXNGQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQW5GQTs7QUFzRkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFwRk47O0FBc0ZJO0VBQ0UsY0FBQTtBQXBGTjs7QUE0RkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUF6RkY7O0VBNEZFO0lBQ0UsOEJBQUE7SUFDQSx1Q0FBQTtJQUNBLDBCQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0VBekZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZy10b3A6IDdlbTtcclxufVxyXG5cclxuLnVzZXItcm9sZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaHIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGhlaWdodDogODcuNXZoO1xyXG4gIG1heC1oZWlnaHQ6IDg3LjV2aDtcclxuICB6LWluZGV4OiAxO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhZGdlLWFjY291bnRpbmcge1xyXG4gIGxlZnQ6IDg1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwLjFyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjJyZW0gIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3NpZGVuYXYtb3BlbmVkLCAuaGVhZGVyX19zaWRlbmF2LWNsb3NlZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYtY29udGVudC1vcGVuZWR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQtY2xvc2Vke1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19zaWRlbmF2LW9wZW5lZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3Rlcl9fc2lkZW5hdi1jbG9zZWR7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxufVxyXG5cclxuLnNpZGVuYXYtY2xvc2Vke1xyXG4gIG1hcmdpbi1sZWZ0OiA0ZW07XHJcbn1cclxuXHJcblxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgei1pbmRleDogMiA7XHJcbn1cclxuLmZvb3RlcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgei1pbmRleDogMiA7XHJcbn1cclxuXHJcbi51c2VyLXJvbGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzhjOGI4YjtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAvLyBmb3IgbWF0LWRyYXdlci1jbG9zZVxyXG4gIG1hdC1zaWRlbmF2Om5vdCgubWF0LWRyYXdlci1vcGVuZWQpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAuYXNjLWxvZ297XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFzYy1sb2dvLXNtYWxse1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNXB4IDBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hc2MtbG9nby1zbWFsbDpob3ZlcntcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXJvbGV7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaHJ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1pdGVtc3tcclxuXHJcblxyXG4gICAgICAubGlzdC1pdGVte1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWljb24tbGl7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtaWNvbntcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvLyBFbmQgZm9yIG1hdC1kcmF3ZXItY2xvc2VcclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDJweCAyOHB4IC04cHggcmdiYSgwLDAsMCwwLjMyKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAycHggMjhweCAtOHB4IHJnYmEoMCwwLDAsMC4zMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMnB4IDI4cHggLThweCByZ2JhKDAsMCwwLDAuMzIpO1xyXG5cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDE2MSwgMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBtYXQtc2lkZW5hdi1jb250ZW50IHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAyMCwgMTIpO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiA2LjdlbTtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiA2MDBtcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWRlLW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmxpc3QtaXRlbXMge1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDExNiwgMCwgMCwgMC40NDUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LWl0ZW0ge1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzdhMTgyMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICBjb2xvcjogcmdiKDExOSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtOmZvY3VzIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxMDAwbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC4wNjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAwLCAwKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzLCBvcGFjaXR5IDAuNXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saXN0LWl0ZW06aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pdGVtOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xMzcpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDExNiwgMCwgMCk7XHJcblxyXG4gICAgICAgIC5saXN0LWljb24ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5saXN0LWl0ZW06Zm9jdXM6aG92ZXIge1xyXG4gICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5saXN0LWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMDIsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyAmLmxpc3QtaWNvbjpob3ZlciB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC1pY29uLWxpIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDIwMiwgMCwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggNzBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMTksIDAsIDApO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICBzcGFueyAvL2ZvciBiYWRnZSBjb3VudGVyXHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFkZ2V7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuMDYyKTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiByZ2IoMjAyLCAwLCAwKSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaTpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xMzcpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQ4LCAyLCAyKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDEwMDBtcztcclxuXHJcbiAgICAgICAgICAubGlzdC1pY29uLWxpIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxODUsIDc0LCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBsaTpmb2N1czpob3ZlciB7XHJcbiAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1pdGVtLTIge1xyXG5ib3JkZXI6IHNvbGlkIDJweCAjN2ExODIxO1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgc3BhbiB7XHJcbiAgIFxyXG4gICAgcHtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGNvbG9yOiAjN2ExODIxO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6ICM3YTE4MjE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IDgwdmggIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDV2dztcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "nBem":
/*!*******************************************************!*\
  !*** ./src/app/core/services/data.storage.service.ts ***!
  \*******************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DataStorageService = class DataStorageService {
    constructor() { }
    saveUserAccountId(id) {
        sessionStorage.setItem('USER_ACCOUNT_ID', id);
    }
    getUserAccountId() {
        return Number(sessionStorage.getItem('USER_ACCOUNT_ID'));
    }
    saveUserAccount(account) {
        sessionStorage.setItem('USER_ACCOUNT', JSON.stringify(account));
    }
    getUserAccount() {
        return JSON.parse(sessionStorage.getItem('USER_ACCOUNT'));
    }
    saveUserRole(userRole) {
        sessionStorage.setItem('USER_ROLE', userRole);
    }
    getUserRole() {
        return sessionStorage.getItem('USER_ROLE');
    }
    saveUserFirstname(name) {
        sessionStorage.setItem('USER_FIRST_NAME', name);
    }
    getUserFirstname() {
        return sessionStorage.getItem('USER_FIRST_NAME');
    }
    saveUserAddress(name) {
        sessionStorage.setItem('USER_ADDRESS', name);
    }
    getUserAddress() {
        return sessionStorage.getItem('USER_ADDRESS');
    }
    saveUserCompany(company) {
        sessionStorage.setItem('USER_COMPANY', JSON.stringify(company));
    }
    getUserCompany() {
        return JSON.parse(sessionStorage.getItem('USER_COMPANY'));
    }
    setDisplayProgressbar(isShow) {
        sessionStorage.setItem('PROGRESS_BAR', '' + isShow);
    }
    getDisplayProgressbar() {
        return sessionStorage.getItem('PROGRESS_BAR');
    }
    setS1NewCompany(company) {
        sessionStorage.setItem('NEW_COMPANY', JSON.stringify(company));
    }
    getS1NewCompany() {
        return JSON.parse(sessionStorage.getItem('NEW_COMPANY'));
    }
    setS1NewBrand(brand) {
        sessionStorage.setItem('NEW_BRAND', JSON.stringify(brand));
    }
    getS1NewBrand() {
        return JSON.parse(sessionStorage.getItem('NEW_BRAND'));
    }
    setS1NewProduct(product) {
        sessionStorage.setItem('NEW_PRODUCT', JSON.stringify(product));
    }
    getS1NewProduct() {
        return JSON.parse(sessionStorage.getItem('NEW_PRODUCT'));
    }
    setDefaultCountry(country) {
        sessionStorage.setItem('DEFAULT_COUNTRY', JSON.stringify(country));
    }
    getDefaultCountry() {
        return JSON.parse(sessionStorage.getItem('DEFAULT_COUNTRY'));
    }
    setS1FormAndAppType({ formType, appType }) {
        sessionStorage.setItem('FORM_TYPE', formType);
        sessionStorage.setItem('APP_TYPE', JSON.stringify(appType));
    }
    getS1FormAndAppType() {
        const s1ApplicationDetails = {
            formType: sessionStorage.getItem('FORM_TYPE'),
            appType: JSON.parse(sessionStorage.getItem('APP_TYPE'))
        };
        return s1ApplicationDetails;
    }
    setNumberOfApplications(numberOfApplications) {
        sessionStorage.setItem('NUMBER_OF_APPLICATIONS', numberOfApplications);
    }
    getNumberOfApplications() {
        return Number(sessionStorage.getItem('NUMBER_OF_APPLICATIONS'));
    }
    setS1Application(s1Application) {
        sessionStorage.setItem('S1_APPLICATION', JSON.stringify(s1Application));
    }
    getS1Application() {
        return JSON.parse(sessionStorage.getItem('S1_APPLICATION'));
    }
    setMultipleS1Application(multipleS1Application) {
        sessionStorage.setItem('MULTIPLE_S1_APPLICATIONS', JSON.stringify(multipleS1Application));
    }
    getMultipleS1Application() {
        return JSON.parse(sessionStorage.getItem('MULTIPLE_S1_APPLICATIONS'));
    }
    setSpecialS1Application(specialS1Application) {
        sessionStorage.setItem('SPECIAL_S1_APPLICATIONS', JSON.stringify(specialS1Application));
    }
    getSpecialS1Application() {
        return JSON.parse(sessionStorage.getItem('SPECIAL_S1_APPLICATIONS'));
    }
    setAmount(amount) {
        sessionStorage.setItem('AMOUNT', JSON.stringify(amount));
    }
    getAmount() {
        return JSON.parse(sessionStorage.getItem('AMOUNT'));
    }
    setRequestFormAndAppType({ formType, appType }) {
        sessionStorage.setItem('FORM_TYPE', formType);
        sessionStorage.setItem('APP_TYPE', JSON.stringify(appType));
    }
    getRequestFormAndAppType() {
        const s1ApplicationDetails = {
            formType: sessionStorage.getItem('FORM_TYPE'),
            appType: JSON.parse(sessionStorage.getItem('APP_TYPE'))
        };
        return s1ApplicationDetails;
    }
    setPayment(payment) {
        sessionStorage.setItem('PAYMENT', JSON.stringify(payment));
    }
    getPayment() {
        return JSON.parse(sessionStorage.getItem('PAYMENT'));
    }
    setDecisionStatus(decisionStatus) {
        sessionStorage.setItem('DECISIONSTATUS', JSON.stringify(decisionStatus));
    }
    getDecisionStatus() {
        return JSON.parse(sessionStorage.getItem('DECISIONSTATUS'));
    }
    setIsIdleCountdownDisplayed(countdown) {
        sessionStorage.setItem('COUNTDOWN_DISPLAY', countdown);
    }
    getIsIdleCountdownDisplayed() {
        return sessionStorage.getItem('COUNTDOWN_DISPLAY');
    }
    setIdleCountdown(countdown) {
        sessionStorage.setItem('COUNTDOWN', countdown);
    }
    getIdleCountdown() {
        return sessionStorage.getItem('COUNTDOWN');
    }
    signOut() {
        // add all stored data here
        sessionStorage.removeItem('BEARER_TOKEN');
        sessionStorage.removeItem('LOGIN_INFO');
        sessionStorage.removeItem('USER_ACCOUNT');
        sessionStorage.removeItem('USER_ACCOUNT_ID');
        sessionStorage.removeItem('USER_ROLE');
        sessionStorage.removeItem('USER_FIRST_NAME');
        sessionStorage.removeItem('USER_ADDRESS');
        sessionStorage.removeItem('USER_COMPANY');
        sessionStorage.removeItem('PROGRESS_BAR');
        sessionStorage.removeItem('NEW_COMPANY');
        sessionStorage.removeItem('NEW_BRAND');
        sessionStorage.removeItem('NEW_PRODUCT');
        sessionStorage.removeItem('DEFAULT_COUNTRY');
        sessionStorage.removeItem('FORM_TYPE');
        sessionStorage.removeItem('APP_TYPE');
        sessionStorage.removeItem('NUMBER_OF_APPLICATIONS');
        sessionStorage.removeItem('S1_APPLICATION');
        sessionStorage.removeItem('MULTIPLE_S1_APPLICATION');
        sessionStorage.removeItem('SPECIAL_S1_APPLICATIONS');
        sessionStorage.removeItem('AMOUNT');
        sessionStorage.removeItem('PAYMENT');
        sessionStorage.removeItem('COUNTDOWN');
        sessionStorage.removeItem('COUNTDOWN_DISPLAY');
        sessionStorage.clear();
    }
};
DataStorageService.ctorParameters = () => [];
DataStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataStorageService);



/***/ }),

/***/ "pPj3":
/*!**************************************************************!*\
  !*** ./src/app/core/services/authorization/token.service.ts ***!
  \**************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TokenService = class TokenService {
    constructor() { }
    setUserLoginToken(token) {
        sessionStorage.setItem('BEARER_TOKEN', token);
    }
    getUserLoginToken() {
        return sessionStorage.getItem('BEARER_TOKEN');
    }
    setUserLoginData(accessData) {
        sessionStorage.setItem('LOGIN_INFO', JSON.stringify(accessData));
    }
    getUserLoginData() {
        return JSON.parse(sessionStorage.getItem('LOGIN_INFO'));
    }
};
TokenService.ctorParameters = () => [];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "qc5V":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    save(endpoint, object) {
        return this.http.post(`${endpoint}`, object);
    }
    update(endpoint, object) {
        return this.http.put(`${endpoint}`, object);
    }
    insert(endpoint, object, isNewEntry) {
        if (isNewEntry)
            return this.http.post(`${endpoint}`, object);
        else
            return this.http.put(`${endpoint}`, object);
    }
    findAll(endpoint) {
        return this.http.get(`${endpoint}`);
    }
    findById(endpoint, id) {
        return this.http.get(`${endpoint}/id/${id}`);
    }
    findByParam(endpoint, param) {
        // return this.http.get(`${endpoint}/custom/search?${param}`);
        return this.http.get(`${endpoint}/${param}`);
    }
    deleteById(endpoint, id) {
        return this.http.delete(`${endpoint}/id/${id}`);
    }
    printReport(endpoint, param) {
        return this.http.post(endpoint, param, { observe: 'body', responseType: 'blob' });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "r74M":
/*!*********************************************************!*\
  !*** ./src/app/core/services/validate-field.service.ts ***!
  \*********************************************************/
/*! exports provided: ValidateFieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateFieldService", function() { return ValidateFieldService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ValidateFieldService = class ValidateFieldService {
    constructor() { }
    numbersOnly(event) {
        // numbers only and allows select all, tab, cut, copy, paste and backspace
        return (event.key >= 0 && event.key <= 9) || // num 0-9
            event.keyCode === 8 || // backspace
            event.keyCode === 9 || // tab
            (event.ctrlKey === true && (event.keyCode === 65 || // select all
                event.keyCode === 67 || // copy
                event.keyCode === 88 || // cut
                event.keyCode === 8)) // clear from right to left
            || event.key === '.'; // period;
    }
    float(event) {
        // numbers only and allows select all = 65, tab = 9, cut = 88, copy = 67, paste = 86,
        // backspace = 8, period = 190, and decimal = 110
        return (event.key >= 0 && event.key <= 9) || event.keyCode === 8 || event.keyCode === 9 ||
            event.keyCode === 190 || event.keyCode === 110 ||
            (event.ctrlKey === true && (event.keyCode === 65 || event.keyCode === 67 ||
                event.keyCode === 88 || event.keyCode === 86 || event.keyCode === 8));
    }
};
ValidateFieldService.ctorParameters = () => [];
ValidateFieldService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateFieldService);



/***/ }),

/***/ "r78v":
/*!******************************************************************!*\
  !*** ./src/app/core/services/animation/animate-digit.service.ts ***!
  \******************************************************************/
/*! exports provided: AnimateDigitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateDigitService", function() { return AnimateDigitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AnimateDigitService = class AnimateDigitService {
    constructor() {
        this.steps = 12;
    }
    counterFunc(endValue, durationMs, element) {
        const stepCount = Math.abs(durationMs / this.steps);
        const valueIncrement = (endValue - 0) / stepCount;
        const sinValueIncrement = Math.PI / stepCount;
        let currentValue = 0;
        let currentSinValue = 0;
        let step = () => {
            currentSinValue += sinValueIncrement;
            currentValue += valueIncrement * Math.pow(Math.sin(currentSinValue), 2) * 2;
            element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
            if (currentSinValue < Math.PI) {
                window.requestAnimationFrame(step);
            }
            else {
                element.nativeElement.textContent = this.numberWithCommas(endValue);
            }
        };
        step();
    }
    numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};
AnimateDigitService.ctorParameters = () => [];
AnimateDigitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AnimateDigitService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _core_services_authorization_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/authorization/auth-guard.service */ "MJGS");





const routes = [
    {
        path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ASC,
        loadChildren: () => __webpack_require__.e(/*! import() | shared-layout-layout-module */ "shared-layout-layout-module").then(__webpack_require__.bind(null, /*! ./shared/layout/layout.module */ "pV/B")).then(m => m.LayoutModule),
        canActivate: [_core_services_authorization_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        canActivateChild: [_core_services_authorization_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
    },
    {
        path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LANDING_PAGE,
        loadChildren: () => Promise.all(/*! import() | modules-pages-landing-page-landing-page-module */[__webpack_require__.e("default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"), __webpack_require__.e("default~add-company-add-company-module~applications-applications-module~modules-pages-landing-page-l~b924cdec"), __webpack_require__.e("default~applications-applications-module~list-company-list-company-module~modules-pages-landing-page~e873ff00"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-account-user-account-module~user-profile~be01c79e"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module~user-registr~2e1d3186"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-list-user-list-module"), __webpack_require__.e("default~modules-pages-landing-page-landing-page-module~user-profile-user-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-pages-landing-page-landing-page-module")]).then(__webpack_require__.bind(null, /*! ./modules/pages/landing-page/landing-page.module */ "FTG2")).then(m => m.LandingPageModule),
    },
    {
        path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].PASSWORD_RESET,
        loadChildren: () => __webpack_require__.e(/*! import() | modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module */ "modules-fragments-login-forgot-passowrd-reset-password-landing-page-reset-password-landing-page-module").then(__webpack_require__.bind(null, /*! ./modules/fragments/login/forgot-passowrd/reset-password-landing-page/reset-password-landing-page.module */ "0Qv6"))
            .then(m => m.ResetPasswordLandingPageModule),
    },
    {
        path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ACCESS_DENIED,
        loadChildren: () => __webpack_require__.e(/*! import() | shared-access-denied-access-denied-module */ "access-denied-access-denied-module").then(__webpack_require__.bind(null, /*! ./shared/access-denied/access-denied.module */ "ahAP")).then(m => m.AccessDeniedModule)
    },
    {
        path: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].ACCOUNT_VERIFICATION,
        loadChildren: () => __webpack_require__.e(/*! import() | shared-success-verification-page-success-verification-page-module */ "success-verification-page-success-verification-page-module").then(__webpack_require__.bind(null, /*! ./shared/success-verification-page/success-verification-page.module */ "lbkY"))
            .then(m => m.SuccessVerificationPageModule)
    },
    { path: '', pathMatch: 'full', redirectTo: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LANDING_PAGE },
    { path: '**', redirectTo: _shared__WEBPACK_IMPORTED_MODULE_3__["URL_PATHS"].LANDING_PAGE }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "x25a":
/*!****************************************!*\
  !*** ./src/app/core/models/counter.ts ***!
  \****************************************/
/*! exports provided: BadgeCounnter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeCounnter", function() { return BadgeCounnter; });
class BadgeCounnter {
    constructor() {
        this.countOriginal = 0;
        this.countRevision = 0;
        this.countCompliance = 0;
        this.countToa = 0;
        this.countTotalApplications = 0;
        this.countTotalMultipleApplications = 0;
        this.countTotalSpecialApplications = 0;
        this.countScreenerDecisionComment = 0;
        this.countReviewerDecisionComment = 0;
        this.countTotalScreenerAndReviewerDecisionComment = 0;
        this.countTotalReleased = 0;
        this.countTotalForRelease = 0;
        this.countTotalAssignedApplication = 0;
        this.countTotalApplicationByAssignedUser = 0;
        this.countTotalSpecialClearingRequest = 0;
        this.countTotalOngoingAppeal = 0;
        this.countForPaymentAccounting = 0;
        this.returnedApplications = 0;
        this.screenedApplications = 0;
    }
}


/***/ }),

/***/ "yAsx":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/autentication/auth-guard.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AuthGuardService = class AuthGuardService {
    constructor() { }
};
AuthGuardService.ctorParameters = () => [];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep th.mat-header-cell,\n::ng-deep td.mat-cell,\n::ng-deep td.mat-footer-cell {\n  padding: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOzs7RUFHSSwwQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuXHJcbiAgICB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbiAgICB0ZC5tYXQtY2VsbCxcclxuICAgIHRkLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.module */ "ZAI4");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "AytR");




if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zV6t":
/*!*****************************************************************!*\
  !*** ./src/app/shared/access-denied/access-denied.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_access_denied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./access-denied.component.html */ "buHz");
/* harmony import */ var _access_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-denied.component.scss */ "BZDD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AccessDeniedComponent = class AccessDeniedComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToLogin() {
        // add logout function here
        this.router.navigateByUrl('/login');
    }
};
AccessDeniedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AccessDeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-access-denied',
        template: _raw_loader_access_denied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_access_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccessDeniedComponent);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map