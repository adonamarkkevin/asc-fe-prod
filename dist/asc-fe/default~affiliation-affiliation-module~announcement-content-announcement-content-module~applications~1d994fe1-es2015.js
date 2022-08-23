(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1"],{

/***/ "+TpJ":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/fragments/request-for-special-clearing/request-for-special-clearing.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RequestForSpecialClearingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForSpecialClearingComponent", function() { return RequestForSpecialClearingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_request_for_special_clearing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./request-for-special-clearing.component.html */ "CQ4H");
/* harmony import */ var _request_for_special_clearing_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-for-special-clearing.component.scss */ "Zydp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_application_request_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/application-request.model */ "an1Z");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let RequestForSpecialClearingComponent = class RequestForSpecialClearingComponent {
    constructor(apiService, dataStorage, sweetAlertService, router, dialogRef, data) {
        this.apiService = apiService;
        this.dataStorage = dataStorage;
        this.sweetAlertService = sweetAlertService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_6__["S1Application"]();
        this.s2Application = new _models__WEBPACK_IMPORTED_MODULE_6__["S2Application"]();
        this.applicationRequest = new app_core_models_application_request_model__WEBPACK_IMPORTED_MODULE_9__["ApplicationRequest"]();
    }
    ngOnInit() {
        this.applicationRequest = this.data.applicationRequest;
        this.s1Application = this.applicationRequest.applicationForm;
        this.currentUser = this.dataStorage.getUserAccount();
        this.setApplicationRequest();
    }
    // static id to select special clearing application type.
    setApplicationRequest() {
        this.applicationRequest.hasSpecialClearing = true;
        this.applicationRequest.applicationType = this.s1Application.applicationType;
        this.applicationRequest.adTitle = this.s1Application.adTitle;
        this.applicationRequest.applicationOwner = this.currentUser;
        this.applicationRequest.brand = this.s1Application.brand;
        this.applicationRequest.product = this.s1Application.product;
        // this.applicationRequest.category = this.s1Application.category;
        this.applicationRequest.company = this.s1Application.company;
        this.applicationRequest.formType = this.s1Application.formType;
        // this.applicationRequest.membersAffiliation = this.s1Application.membersAffiliation;
        this.applicationRequest.submitApplicationForm = false;
        this.applicationRequest.tagLine = this.s1Application.tagLine;
        this.applicationRequest.applicationForm = this.s1Application;
    }
    onApproveOrDisapprove(status = 'APPROVED') {
        const displayStatus = status === 'APPROVED' ? 'approve' : 'disapprove';
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: `Are you sure you want to ${displayStatus} this application?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                const endpointExtension = status === 'APPROVED' ? '/approve' : '/disapprove';
                // this.s1Application.actionDate = new Date();
                this.s1Application.actionBy = this.currentUser.username;
                this.apiService.save(`${_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].applicationRequests}${endpointExtension}/${this.applicationRequest.id}`, this.applicationRequest)
                    .subscribe((res) => {
                    this.sweetAlertService.customSuccessMessage(`Application successfully ${status.toLowerCase()}.`);
                    this.router.navigate(['asc/page/application/s2/special']);
                }, (err) => {
                    err.error.message = _shared__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGES"].under_maintenance;
                    this.sweetAlertService.error(err);
                }, () => {
                    this.dialogRef.close(this.s1Application);
                });
            }
        });
    }
    submitRequest() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to submit request?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].applicationRequests, this.applicationRequest).subscribe((res) => {
                    this.sweetAlertService.customSuccessMessage('Request has been submit successfully.');
                    this.router.navigate(['asc/page/application/s2/special']);
                    this.dialogRef.close();
                }, (err) => {
                    err.error.message = _shared__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGES"].under_maintenance;
                    this.sweetAlertService.error(err);
                });
                this.dialogRef.close();
            }
        });
    }
    proceedToS2() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            text: 'Are you sure you want to apply this application to S2?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.s2Application.specialClearing = true;
                this.s2Application.applicationRequest = this.applicationRequest;
                this.s2Application.applicationForm = this.s1Application;
                this.s2Application.submissionType = _shared__WEBPACK_IMPORTED_MODULE_8__["SUBMISSION_TYPE"].ORIGINAL; // this.s2Application.applicationForm.submissionType;
                this.s2Application.internalStatus = 'SAVED';
                this.s2Application.externalStatus = 'SAVED';
                console.log('View S2:', this.s2Application);
                this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s2ApplicationFormPresentorSave, this.s2Application).subscribe((res) => {
                    this.router.navigate(['asc/page/application/s2/update', res.responseData.data.id]);
                    this.dialogRef.close();
                }, (err) => {
                });
            }
        });
    }
};
RequestForSpecialClearingComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
RequestForSpecialClearingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request-for-special-clearing',
        template: _raw_loader_request_for_special_clearing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_request_for_special_clearing_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RequestForSpecialClearingComponent);



/***/ }),

/***/ "+c4S":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fragments/incomplete-disapproved-rationale/incomplete-disapproved-rationale.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <h1><span class=\"material-icons\" >info</span> Add Rationale</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Select Rationale:</mat-label>\r\n                <mat-select class=\"mat-select-value-text\" (selectionChange)=\"selectRationale($event.value)\">\r\n                    <mat-option *ngFor=\"let i of rationaleList\" [value]=\"i\" [matTooltip]=\"i.rationale\">\r\n                        {{i.rationale}}\r\n                    </mat-option>\r\n                </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>OTHER, PLEASE SPECIFY:</mat-label>\r\n            <textarea matInput [(ngModel)]=\"otherDescription\"></textarea>\r\n        </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div class=\"row \">\r\n        <th >Selected Rationale:</th>\r\n        <div class=\"col list-content\" >\r\n\r\n            <table *ngFor=\"let i of selectedRationaleList\">\r\n                <tr>\r\n                    <td class=\"reason-description\">\r\n                        <span class=\"material-icons\" >label_important</span>  {{i?.typeOfRationale?.rationale}}\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"material-icons\" (click)=\"removeRationale(i.id)\">delete</span>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row button-content\">\r\n        <div class=\"col\">\r\n            <button mat-raised-button class=\"button-red\" (click)=\"submitRationale()\" [disabled]=\"selectedRationaleList.length === 0 && !otherDescription\">\r\n                <i class=\"material-icons color__white\">verified</i> Submit Rationale\r\n            </button>\r\n        </div>\r\n        <div class=\"col\">\r\n            <button class=\"col-md-6\" mat-raised-button class=\"button-red\" (click)=\"cancel()\">\r\n                <i class=\"material-icons color__white\">cancel</i> Cancel\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "+iQW":
/*!*************************************************************!*\
  !*** ./src/app/core/models/screener-reviewer-pair.model.ts ***!
  \*************************************************************/
/*! exports provided: ScreenerReviewerPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenerReviewerPair", function() { return ScreenerReviewerPair; });
class ScreenerReviewerPair {
}


/***/ }),

/***/ "/RNn":
/*!*************************************************************************!*\
  !*** ./src/app/core/models/numberOfMultipleApplicationAllowed.model.ts ***!
  \*************************************************************************/
/*! exports provided: NumberOfMultipleApplicationAllowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOfMultipleApplicationAllowed", function() { return NumberOfMultipleApplicationAllowed; });
class NumberOfMultipleApplicationAllowed {
}


/***/ }),

/***/ "/qS1":
/*!*******************************************************!*\
  !*** ./src/app/core/models/type-of-document.model.ts ***!
  \*******************************************************/
/*! exports provided: TypeOfDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function() { return TypeOfDocument; });
class TypeOfDocument {
}


/***/ }),

/***/ "/sqU":
/*!************************************************************!*\
  !*** ./src/app/core/models/application-rejection.model.ts ***!
  \************************************************************/
/*! exports provided: ApplicationRejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRejection", function() { return ApplicationRejection; });
/* harmony import */ var _type_of_reason_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-of-reason.model */ "50w+");

class ApplicationRejection {
    constructor() {
        this.typeOfReason = new _type_of_reason_model__WEBPACK_IMPORTED_MODULE_0__["TypeOfReason"]();
    }
}


/***/ }),

/***/ "0Kn2":
/*!**********************************************!*\
  !*** ./src/app/core/models/country.model.ts ***!
  \**********************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
class Country {
}


/***/ }),

/***/ "1T39":
/*!************************************************************!*\
  !*** ./src/app/core/models/type-of-main-document.model.ts ***!
  \************************************************************/
/*! exports provided: TypeOfMainDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMainDocument", function() { return TypeOfMainDocument; });
class TypeOfMainDocument {
}


/***/ }),

/***/ "2CCT":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/fragments/reject-disapproved-reason/reject-disapproved-reason.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RejectDisapprovedReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectDisapprovedReasonComponent", function() { return RejectDisapprovedReasonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reject_disapproved_reason_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reject-disapproved-reason.component.html */ "VtBT");
/* harmony import */ var _reject_disapproved_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reject-disapproved-reason.component.scss */ "puE1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_application_rejection_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/application-rejection.model */ "/sqU");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let RejectDisapprovedReasonComponent = class RejectDisapprovedReasonComponent {
    constructor(apiService, sweetAlertService, router, dataStorage, spinner, dialogRef, data) {
        this.apiService = apiService;
        this.sweetAlertService = sweetAlertService;
        this.router = router;
        this.dataStorage = dataStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.s1Application = new _models__WEBPACK_IMPORTED_MODULE_6__["S1Application"]();
        this.s2Application = new _models__WEBPACK_IMPORTED_MODULE_6__["S2Application"]();
        this.applicationRejection = new app_core_models_application_rejection_model__WEBPACK_IMPORTED_MODULE_9__["ApplicationRejection"]();
        this.typeOfReason = new _models__WEBPACK_IMPORTED_MODULE_6__["TypeOfReason"]();
        this.applicationRejectionList = [];
        this.typeOfReasonList = [];
        this.selectedReasonList = [];
    }
    ngOnInit() {
        this.getTypeOfReasonsList();
        this.s1Application = this.data.s1Application;
        this.s2Application = this.data.s2Application;
        this.ascUser = this.data.ascUser;
        this.action = this.data.action;
        this.status = this.data.status;
        this.headerTitle = this.action;
        this.currentUser = this.dataStorage.getUserAccount();
    }
    getTypeOfReasonsList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfReason).subscribe((res) => {
            this.typeOfReasonList = res.responseData.data;
            console.log('reasons => ', this.typeOfReasonList);
        });
    }
    setRejectionData() {
        let endpoint;
        if (this.data.applicationStage === 's1') {
            this.applicationRejection.applicationForm = this.s1Application;
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1ReasonOfRejection;
        }
        else {
            this.applicationRejection.applicationS2 = this.s2Application;
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s2ReasonOfRejection;
        }
        this.applicationRejection.actionBy = this.currentUser;
        this.applicationRejection.actionDate = new Date();
        this.applicationRejection.typeOfReason = this.typeOfReason;
        this.applicationRejectionList.push(this.applicationRejection);
        this.applicationRejection = new app_core_models_application_rejection_model__WEBPACK_IMPORTED_MODULE_9__["ApplicationRejection"]();
    }
    selectedReason(data) {
        const isExist = this.selectedReasonList.filter(reason => reason.id === data.id);
        if (isExist.length === 0) {
            this.selectedReasonList.push(data);
            this.typeOfReason = data;
            this.setRejectionData();
            this.errMsg = '';
        }
        else {
            this.errMsg = 'The selected reason is already added.';
        }
        this.mySelectReason.nativeElement = '';
    }
    checkOthersReason() {
        return this.selectedReasonList.filter(e => e.id === 4).length ? true : false;
    }
    removeReason(id) {
        const index = this.selectedReasonList.findIndex(srl => srl.id === id);
        this.selectedReasonList.splice(index, 1);
    }
    cancel() {
        this.dialogRef.close();
    }
    submitRejectionDisapproved() {
        // console.log('PARAMETER', this.ascUser, this.action, this.status);
        let msg;
        let endpointReason;
        let endpointReject;
        let swalMsg = 'Application has been rejected/disapproved successfully.';
        let applicationForm;
        let navigateToList;
        if (this.status === _shared__WEBPACK_IMPORTED_MODULE_8__["APPLICATION_STATUS"].S1_APPLICATION_REJECTED || this.status === _shared__WEBPACK_IMPORTED_MODULE_8__["APPLICATION_STATUS_S2"].S2_APPLICATION_REJECTED) {
            msg = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].REJECT;
            swalMsg = 'Application has been rejected successfully.';
        }
        else if (this.status === _shared__WEBPACK_IMPORTED_MODULE_8__["APPLICATION_STATUS"].S1_APPLICATION_DISAPPROVED ||
            this.status === _shared__WEBPACK_IMPORTED_MODULE_8__["APPLICATION_STATUS_S2"].S2_APPLICATION_DISAPPROVED) {
            msg = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].DISAPPROVED;
            swalMsg = 'Application has been disapproved.';
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: 'Are you sure you want to ' + msg + ' this application?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.spinner.show();
                if (this.data.applicationStage === 's1') {
                    applicationForm = this.s1Application;
                    navigateToList = 'asc/page/application/s1/lists';
                    endpointReason = _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1ReasonOfRejection;
                    endpointReject = this.s1Application.submissionType === _shared__WEBPACK_IMPORTED_MODULE_8__["SUBMISSION_TYPE"].ORIGINAL
                        ? this.s1Application.decisionStatus === _shared__WEBPACK_IMPORTED_MODULE_8__["APP_DECISION_STATUS"].INCOMPLETE
                            ? _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1ApplicationFormEncoderRejectCompliance : _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1ApplicationFormEncoderReject
                        : _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s1ApplicationFormEncoderRejectRevision;
                }
                else {
                    applicationForm = this.s2Application;
                    navigateToList = 'asc/page/application/s2/lists';
                    endpointReason = _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s2ReasonOfRejection;
                    endpointReject = _shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].s2ApplicationFormEncoderReject;
                }
                console.info('apllicationRejectionList => ', this.applicationRejectionList);
                // this.spinner.hide();
                this.applicationRejectionList.filter(e => {
                    if (e.typeOfReason.id === 4) {
                        e.remarks = this.remarks;
                    }
                });
                this.apiService.save(endpointReason, this.applicationRejectionList).subscribe((res) => {
                    this.apiService.save(endpointReject, applicationForm).subscribe((res1) => {
                        this.s1Application = res1.responseData.data;
                        // Forward Multiple Application
                        if (this.s1Application.submissionType === _shared__WEBPACK_IMPORTED_MODULE_8__["SUBMISSION_TYPE"].ORIGINAL &&
                            this.data.applicationStage === 's1' && this.s1Application.multipleApplication &&
                            this.s1Application.multipleApplication.actualNumberOfApplicationForm ===
                                this.s1Application.multipleApplication.countVerifiedApplicationForm &&
                            this.s1Application.internalStatus !== _shared__WEBPACK_IMPORTED_MODULE_8__["APPLICATION_STATUS"].S1_APPLICATION_REVIEWED) {
                            this.forwardMultipleAppsTo();
                        }
                        else {
                            this.spinner.hide();
                            this.sweetAlertService.customSuccessMessage(swalMsg);
                            this.dialogRef.close();
                            this.router.navigateByUrl(navigateToList);
                        }
                    });
                });
            }
        });
    }
    forwardMultipleAppsTo() {
        console.log('forwardMultipleAppsTo');
        console.log(this.s1Application);
        this.s1Application.multipleApplication.assignedEncoder = this.s1Application.assignedEncoder;
        this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].forwardMultipleAppFormToAdSpe, this.s1Application.multipleApplication).subscribe((res) => {
            console.log(res);
            this.spinner.hide();
            this.sweetAlertService.customSuccessMessage('Multiple application successfully forwarded to the next user.');
            this.dialogRef.close();
            this.router.navigateByUrl('asc/page/application/s1/lists');
        }, (err) => {
            this.spinner.hide();
            this.sweetAlertService.error(err);
        }, () => {
            this.spinner.hide();
        });
    }
};
RejectDisapprovedReasonComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["DataStorageService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
RejectDisapprovedReasonComponent.propDecorators = {
    mySelectReason: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectReason',] }]
};
RejectDisapprovedReasonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reject-disapproved-reason',
        template: _raw_loader_reject_disapproved_reason_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reject_disapproved_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RejectDisapprovedReasonComponent);



/***/ }),

/***/ "2yZ1":
/*!***************************************************!*\
  !*** ./src/app/core/models/rationale-s2.model.ts ***!
  \***************************************************/
/*! exports provided: RationaleS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationaleS2", function() { return RationaleS2; });
class RationaleS2 {
}


/***/ }),

/***/ "50w+":
/*!*****************************************************!*\
  !*** ./src/app/core/models/type-of-reason.model.ts ***!
  \*****************************************************/
/*! exports provided: TypeOfReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfReason", function() { return TypeOfReason; });
class TypeOfReason {
}


/***/ }),

/***/ "551E":
/*!************************************************!*\
  !*** ./src/app/core/models/rationale.model.ts ***!
  \************************************************/
/*! exports provided: Rationale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rationale", function() { return Rationale; });
class Rationale {
}


/***/ }),

/***/ "7Tf7":
/*!*******************************************************!*\
  !*** ./src/app/modules/fragments/fragments.module.ts ***!
  \*******************************************************/
/*! exports provided: FragmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsModule", function() { return FragmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-action-buttons/form-action-buttons.component */ "TPGS");
/* harmony import */ var _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-list/form-list.component */ "DeKZ");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _fragments_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fragments-routing.module */ "GE5f");
/* harmony import */ var _reject_disapproved_reason_reject_disapproved_reason_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reject-disapproved-reason/reject-disapproved-reason.component */ "2CCT");
/* harmony import */ var _request_for_special_clearing_request_for_special_clearing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-for-special-clearing/request-for-special-clearing.component */ "+TpJ");
/* harmony import */ var _incomplete_disapproved_rationale_incomplete_disapproved_rationale_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./incomplete-disapproved-rationale/incomplete-disapproved-rationale.component */ "CDuV");










let FragmentsModule = class FragmentsModule {
};
FragmentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_3__["FormActionButtonsComponent"],
            _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_4__["FormListComponent"],
            _reject_disapproved_reason_reject_disapproved_reason_component__WEBPACK_IMPORTED_MODULE_7__["RejectDisapprovedReasonComponent"],
            _request_for_special_clearing_request_for_special_clearing_component__WEBPACK_IMPORTED_MODULE_8__["RequestForSpecialClearingComponent"],
            _incomplete_disapproved_rationale_incomplete_disapproved_rationale_component__WEBPACK_IMPORTED_MODULE_9__["IncompleteDisapprovedRationaleComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _fragments_routing_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
        ],
        exports: [
            _form_action_buttons_form_action_buttons_component__WEBPACK_IMPORTED_MODULE_3__["FormActionButtonsComponent"],
            _form_list_form_list_component__WEBPACK_IMPORTED_MODULE_4__["FormListComponent"]
        ]
    })
], FragmentsModule);



/***/ }),

/***/ "AKki":
/*!**********************************************************!*\
  !*** ./src/app/core/models/type-of-application.model.ts ***!
  \**********************************************************/
/*! exports provided: TypeOfApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function() { return TypeOfApplication; });
class TypeOfApplication {
}


/***/ }),

/***/ "BFeN":
/*!*****************************************************************!*\
  !*** ./src/app/core/models/application-rationale-list.model.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationRationaleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRationaleList", function() { return ApplicationRationaleList; });
class ApplicationRationaleList {
}


/***/ }),

/***/ "Bmuo":
/*!*****************************************************!*\
  !*** ./src/app/core/models/s1-application.model.ts ***!
  \*****************************************************/
/*! exports provided: S1Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Application", function() { return S1Application; });
class S1Application {
}


/***/ }),

/***/ "CDuV":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/incomplete-disapproved-rationale/incomplete-disapproved-rationale.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: IncompleteDisapprovedRationaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompleteDisapprovedRationaleComponent", function() { return IncompleteDisapprovedRationaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_incomplete_disapproved_rationale_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./incomplete-disapproved-rationale.component.html */ "+c4S");
/* harmony import */ var _incomplete_disapproved_rationale_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incomplete-disapproved-rationale.component.scss */ "HLDB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_application_rationale_list_s2_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/models/application-rationale-list-s2.model */ "yzT2");
/* harmony import */ var app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/application-rationale-list.model */ "BFeN");
/* harmony import */ var app_core_models_rationale_s2_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/models/rationale-s2.model */ "2yZ1");
/* harmony import */ var app_core_models_rationale_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/models/rationale.model */ "551E");
/* harmony import */ var app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/type-of-rational.model */ "Do+y");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "JqCM");














let IncompleteDisapprovedRationaleComponent = class IncompleteDisapprovedRationaleComponent {
    constructor(apiService, sweetAlertService, router, dataStorage, spinner, dialogRef, data) {
        this.apiService = apiService;
        this.sweetAlertService = sweetAlertService;
        this.router = router;
        this.dataStorage = dataStorage;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.rationale = new app_core_models_rationale_model__WEBPACK_IMPORTED_MODULE_11__["Rationale"]();
        this.rationaleS2 = new app_core_models_rationale_s2_model__WEBPACK_IMPORTED_MODULE_10__["RationaleS2"]();
        this.typeOfRational = new app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_12__["TypeOfRational"]();
        this.applicationRationaleList = new app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_9__["ApplicationRationaleList"]();
        this.applicationRationaleListS2 = new app_core_models_application_rationale_list_s2_model__WEBPACK_IMPORTED_MODULE_8__["ApplicationS2RationaleList"]();
        this.rationaleList = [];
        this.selectedRationaleList = [];
        this.submissionType = '';
        this.isOther = false;
        this.otherDescription = '';
        if (data.applicationStage === 's1') {
            this.submissionType = data.s1Application.submissionType;
        }
        else {
            this.submissionType = data.s2Application.submissionType;
        }
    }
    ngOnInit() {
        this.getRationale();
        this.currentUser = this.dataStorage.getUserAccount();
        console.log('ksahkjakj', this.data);
    }
    getRationale() {
        let endpoint;
        let submissionTypeForm;
        if (this.data.applicationStage === 's1') {
            submissionTypeForm = this.data.s1Application.submissionType;
            this.rationale.applicationForm = this.data.s1Application;
        }
        else {
            submissionTypeForm = this.data.s2Application.submissionType;
            this.rationale.applicationFormS2 = this.data.s2Application;
        }
        if (submissionTypeForm === _shared__WEBPACK_IMPORTED_MODULE_7__["SUBMISSION_TYPE"].ORIGINAL) {
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].typeOfRationale;
        }
        else if (submissionTypeForm === _shared__WEBPACK_IMPORTED_MODULE_7__["SUBMISSION_TYPE"].REVISION) {
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].typeOfRationale + '/category/FOR_COMPLIANCE';
        }
        else if (submissionTypeForm === _shared__WEBPACK_IMPORTED_MODULE_7__["SUBMISSION_TYPE"].COMPLIANCE ||
            this.data.s1Application.decisionStatus === _shared__WEBPACK_IMPORTED_MODULE_7__["APP_DECISION_STATUS"].INCOMPLETE) {
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].typeOfRationale + '/category/FOR_INCOMPLETE_DECISION';
        }
        else if (this.data.s1Application.hasToa) {
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].typeOfRationale + '/category/FOR_TOA_APPLICATION';
        }
        this.apiService.findAll(endpoint).subscribe((res) => {
            this.rationaleList = res.responseData.data;
            console.log(this.rationaleList);
        });
    }
    selectRationale(data) {
        let list = [];
        if (this.data.applicationStage === 's1') {
            this.applicationRationaleList.typeOfRationale = data;
            this.selectedRationaleList.push(this.applicationRationaleList);
            this.applicationRationaleList = new app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_9__["ApplicationRationaleList"]();
        }
        else {
            this.applicationRationaleList.typeOfRationale = data;
            this.selectedRationaleList.push(this.applicationRationaleList);
            this.applicationRationaleList = new app_core_models_application_rationale_list_model__WEBPACK_IMPORTED_MODULE_9__["ApplicationRationaleList"]();
        }
        console.log(this.selectedRationaleList);
    }
    removeRationale(id) {
        const index = this.selectedRationaleList.findIndex(srl => srl.id === id);
        this.selectedRationaleList.splice(index, 1);
    }
    submitRationale() {
        let endpoint;
        let swalMessage;
        let activeModel;
        this.spinner.show();
        if (this.data.applicationStage === 's1') {
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].applicationRationale;
            swalMessage = 'S1 application rationale has been saved!';
        }
        else {
            endpoint = _shared__WEBPACK_IMPORTED_MODULE_7__["ENDPOINTS"].applicationRationaleS2;
            swalMessage = 'S2 application rationale has been saved!';
            this.rationale.id = 0;
        }
        this.rationale.applicationRationaleLists = this.selectedRationaleList;
        this.rationale.actionDate = new Date();
        this.rationale.actionBy = this.currentUser;
        this.rationale.others = this.otherDescription;
        console.log('save rationale', this.rationale);
        this.apiService.save(endpoint, this.rationale).subscribe((res) => {
            this.spinner.hide();
            this.sweetAlertService.customSuccessMessage(swalMessage);
            this.dialogRef.close(res);
        }, (err) => {
            console.log(err);
        });
    }
    cancel() {
        this.dialogRef.close();
    }
};
IncompleteDisapprovedRationaleComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["SweetAlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["DataStorageService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
IncompleteDisapprovedRationaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-incomplete-disapproved-rationale',
        template: _raw_loader_incomplete_disapproved_rationale_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_incomplete_disapproved_rationale_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IncompleteDisapprovedRationaleComponent);



/***/ }),

/***/ "CQ4H":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fragments/request-for-special-clearing/request-for-special-clearing.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"row title\">\r\n        <div class=\"col-md-12\">\r\n          <table>\r\n            <tr>\r\n              <td *ngIf=\"applicationRequest?.status!=undefined\">\r\n                <span>\r\n                  Status:\r\n                </span>\r\n              </td>\r\n              <td *ngIf=\"applicationRequest?.status!=undefined\">\r\n                <span *ngIf=\"applicationRequest?.status!=undefined\">\r\n                  <b>{{applicationRequest?.status?.replaceAll('_',' ') | uppercase}}</b>\r\n                </span>\r\n              </td>\r\n              <td class=\"no-border\" *ngIf=\"applicationRequest?.status==='APPROVED' && currentUser?.userRole?.name == 'ROLE_APPLICANT'\"\r\n              [hidden]=\"applicationRequest?.submitApplicationForm\">\r\n              <button class=\"button-right button-red\" mat-raised-button (click)=\"proceedToS2()\">\r\n                <i class=\"material-icons color__white\">check</i> Proceed to S2\r\n              </button>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"no-border\"></td>\r\n            </tr>\r\n          </table>\r\n          <hr />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\" appearance=\"outline\">\r\n          <mat-label>Form Type: </mat-label>\r\n        </div>\r\n        <div class=\"col-md-4\" appearance=\"outline\">\r\n          <mat-label><b>{{ s1Application?.formType.replaceAll('_', ' ') }}</b></mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\" appearance=\"outline\">\r\n          <mat-label>Application Type:</mat-label>\r\n        </div>\r\n        <div class=\"col-md-4\" appearance=\"outline\">\r\n          <mat-label><b>{{ s1Application?.applicationType?.description.replaceAll('_', ' ') | uppercase }}</b></mat-label>\r\n        </div>\r\n        <br>\r\n        <br>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <mat-panel-title>\r\n          <i class=\"material-icons color__white\">label_important</i> &nbsp;Client Information\r\n        </mat-panel-title><br />\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n              <mat-label>Company Name</mat-label>\r\n              <input matInput [value]=\"s1Application?.company?.companyName\" readonly>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n              <mat-label>Company Membership Affiliation</mat-label>\r\n              <input matInput [value]=\"s1Application?.company?.membersAffiliation?.description\" readonly>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Brand</mat-label>\r\n              <input matInput [value]=\"s1Application?.brand?.description\" readonly>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Product</mat-label>\r\n              <input matInput [value]=\"s1Application?.product?.description\" readonly>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Category</mat-label>\r\n              <input matInput [value]=\"s1Application?.product?.category?.description\" readonly>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n        <mat-panel-title *ngIf=\"currentUser?.userRole?.name === 'ROLE_ADMIN' || currentUser?.userRole?.name === 'ROLE_SUPER_ADMIN'\">\r\n          <i class=\"material-icons color__white\">label_important</i> &nbsp;Presentor Information\r\n        </mat-panel-title>\r\n\r\n        <div class=\"row\" *ngIf=\"currentUser?.userRole?.name === 'ROLE_ADMIN' || currentUser?.userRole?.name === 'ROLE_SUPER_ADMIN'\">\r\n          <!-- <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n            <mat-label>Membership Affiliation</mat-label>\r\n            <input matInput [value]=\"s1Application?.company?.membersAffiliation?.description\" readonly>\r\n          </mat-form-field> -->\r\n          <mat-form-field class=\"col-md-7\" appearance=\"outline\">\r\n            <mat-label>Company Name</mat-label>\r\n            <input matInput [value]=\"s1Application?.company?.companyName\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"currentUser?.userRole?.name === 'ROLE_ADMIN' || currentUser?.userRole?.name === 'ROLE_SUPER_ADMIN'\">\r\n          <mat-form-field class=\"col-md-11\" appearance=\"outline\">\r\n            <mat-label>Address</mat-label>\r\n            <input matInput [value]=\"s1Application?.company?.completeAddress\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"currentUser?.userRole?.name === 'ROLE_ADMIN' || currentUser?.userRole?.name === 'ROLE_SUPER_ADMIN'\">\r\n          <mat-form-field class=\"col-md-8\" appearance=\"outline\" *ngIf=\"s1Application.id!= null\">\r\n            <mat-label>Name of Applicant</mat-label>\r\n            <input matInput [value]=\"s1Application?.applicationOwner?.firstName+' '+s1Application?.applicationOwner?.lastName\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"currentUser?.userRole?.name === 'ROLE_ADMIN' || currentUser?.userRole?.name === 'ROLE_SUPER_ADMIN'\">\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"s1Application.id!= null\">\r\n            <mat-label>Mobile Number</mat-label>\r\n            <input matInput [value]=\"s1Application?.applicationOwner?.mobileNumber\" readonly>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"col-md-3\" appearance=\"outline\" *ngIf=\"s1Application.id!= null\">\r\n            <mat-label>Telephone Number</mat-label>\r\n            <input matInput [value]=\"s1Application?.company?.companyTelephoneNo\" readonly>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"s1Application.id!= null\">\r\n            <mat-label>Email Address</mat-label>\r\n            <input matInput [value]=\"s1Application?.applicationOwner?.username\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <mat-panel-title>\r\n          <i class=\"material-icons color__white\">label_important</i> &nbsp;Material Information\r\n        </mat-panel-title>\r\n\r\n          <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Ad Title</mat-label>\r\n              <input matInput [value]=\"s1Application?.adTitle\" readonly />\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Reference Code</mat-label>\r\n              <input matInput [value]=\"s1Application?.referenceCode\" readonly />\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"col-md-4\" appearance=\"outline\">\r\n              <mat-label>Tag Line</mat-label>\r\n              <input matInput [value]=\"s1Application?.tagLine\" readonly />\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        <div class=\"row\"><br /></div>\r\n        <hr />\r\n        <br />\r\n        <div class=\"row\" *ngIf=\"applicationRequest?.status===undefined\">\r\n            <div>\r\n              <button mat-raised-button class=\"button-red\" (click)=\"submitRequest()\">\r\n                <i class=\"material-icons color__white\">check</i> Submit\r\n              </button>\r\n              <button mat-raised-button class=\"button-red\" (click)=\"dialogRef.close()\">\r\n                <i class=\"material-icons color__white\">cancel</i> Cancel\r\n              </button>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- //////////////////////////////////////// ADMIN //////////////////////////////////////////////////////////// -->\r\n        <div class=\"row\"\r\n        *ngIf=\"applicationRequest?.status === 'FOR_APPROVAL' && (currentUser?.userRole?.name == 'ROLE_ADMIN'||currentUser?.userRole?.name == 'ROLE_SUPER_ADMIN')\"\r\n        >\r\n        <div mat-dialog-actions>\r\n          <div class=\"dialog-button-content\" align=\"end\">\r\n            <button class=\"confirm\" (click)=\"onApproveOrDisapprove()\">\r\n              <i class=\"material-icons color__white\">thumb_up_alt</i> Approve\r\n            </button>\r\n            <button class=\"warn\" (click)=\"onApproveOrDisapprove('DISAPPROVED')\">\r\n              <i class=\"material-icons color__white\">thumb_down_alt</i> Disapprove\r\n            </button>\r\n          </div>\r\n        </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n");

/***/ }),

/***/ "CmCX":
/*!**********************************************!*\
  !*** ./src/app/core/models/product.model.ts ***!
  \**********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "DeKZ":
/*!********************************************************************!*\
  !*** ./src/app/modules/fragments/form-list/form-list.component.ts ***!
  \********************************************************************/
/*! exports provided: FormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListComponent", function() { return FormListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-list.component.html */ "YAga");
/* harmony import */ var _form_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-list.component.scss */ "WJgu");
/* harmony import */ var _core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/alert-message/sweet-alert.service */ "4nSt");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/api.service */ "qc5V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");












let FormListComponent = class FormListComponent {
    constructor(dialog, api, spinner, alert) {
        this.dialog = dialog;
        this.api = api;
        this.spinner = spinner;
        this.alert = alert;
        this.displayedColumns = '';
        this.selectInListFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.deleteInListFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.updateListFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.idForUpdate = 0;
        this.idForDelete = 0;
        this.getVoucherRef = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.signatory = {};
        this.signatoryRef = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    getObject(id) {
        this.idForUpdate = id;
        this.selectInListFunction.emit();
    }
    deleteObject(id, obj = '') {
        this.idForDelete = id;
        this.elementObject = obj;
        this.deleteInListFunction.emit(obj);
    }
    openEditModal(id, obj) {
        this.signatory = JSON.parse(JSON.stringify(obj));
        this.signatoryRef = obj;
        this.dialog.open(this.signatoryEditModal, {
            disableClose: true,
            width: '350px',
            data: obj
        });
    }
    updateObject() {
        if (this.signatoryRef.id === undefined) {
            let data = this.dataSource.data;
            data.splice(this.dataSource.data.findIndex(r => r === this.signatoryRef), 1, this.signatory);
            this.updateListFunction.emit(data);
        }
        else {
            this.updateListFunction.emit(this.signatory);
        }
        this.dialog.closeAll();
    }
    closeModal() {
        this.dialog.closeAll();
    }
    viewHistory(data) {
        console.log('data', data);
        // this.spinner.show()
        this.api.findByParam(_shared__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].voucherAttachment, data === null || data === void 0 ? void 0 : data.voucherAttachmentReference).subscribe(res => {
            var _a, _b, _c, _d;
            if (!((_b = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.fileURL)) {
                this.alert.customErrorMessage("No Available file");
            }
            window.open((_d = (_c = res === null || res === void 0 ? void 0 : res.responseData) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.fileURL);
        }, error => {
            this.alert.customErrorMessage("No Available File");
        });
    }
};
FormListComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
    { type: _core_services_alert_message_sweet_alert_service__WEBPACK_IMPORTED_MODULE_3__["SweetAlertService"] }
];
FormListComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: false },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], { static: false },] }],
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], { static: false },] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    displayedColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    selectInListFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    deleteInListFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    updateListFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    idForUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    idForDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    elementObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    getVoucherRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    customModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['myTemplate',] }],
    signatoryEditModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['signatoryEdit',] }]
};
FormListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-form-list',
        template: _raw_loader_form_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormListComponent);



/***/ }),

/***/ "Do+y":
/*!*******************************************************!*\
  !*** ./src/app/core/models/type-of-rational.model.ts ***!
  \*******************************************************/
/*! exports provided: TypeOfRational */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfRational", function() { return TypeOfRational; });
class TypeOfRational {
}


/***/ }),

/***/ "FnPy":
/*!*********************************************************!*\
  !*** ./src/app/core/models/email-notification.model.ts ***!
  \*********************************************************/
/*! exports provided: EmailNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNotification", function() { return EmailNotification; });
class EmailNotification {
}


/***/ }),

/***/ "GE5f":
/*!***************************************************************!*\
  !*** ./src/app/modules/fragments/fragments-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FragmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsRoutingModule", function() { return FragmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let FragmentsRoutingModule = class FragmentsRoutingModule {
};
FragmentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FragmentsRoutingModule);



/***/ }),

/***/ "HLDB":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/incomplete-disapproved-rationale/incomplete-disapproved-rationale.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 20px;\n  font-weight: 600;\n}\nh1 .material-icons {\n  color: #ad0000;\n}\n.list-content {\n  border: solid 1px #b6b6b6;\n  border-radius: 5px;\n  margin: 12px;\n  min-height: 5em;\n  max-height: 10em;\n  overflow: auto;\n  padding: 10px 10px;\n}\n.list-content .material-icons {\n  color: #a00000;\n  text-align: end;\n  font-size: 20px;\n  vertical-align: middle;\n}\n.list-content table {\n  width: 100%;\n}\n.list-content table .reason-description {\n  text-align: left;\n}\n.list-content table td {\n  text-align: end;\n}\n.list-content .material-icons:hover {\n  cursor: pointer;\n}\n.button-content button {\n  width: 100%;\n}\n.errMsg {\n  color: red;\n  font-style: italic;\n}\n::ng-deep .mat-select-value-text {\n  word-wrap: break-word;\n  white-space: normal;\n}\n::ng-deep mat-option.mat-option {\n  overflow-wrap: break-word;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mat-option-text.mat-option-text {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvaW5jb21wbGV0ZS1kaXNhcHByb3ZlZC1yYXRpb25hbGUvaW5jb21wbGV0ZS1kaXNhcHByb3ZlZC1yYXRpb25hbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUdJO0VBQ0ksZUFBQTtBQURSO0FBTUk7RUFDSSxXQUFBO0FBSFI7QUFPQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFRQTtFQU9JLHlCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBWko7QUFlRTtFQUNFLG1CQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZyYWdtZW50cy9pbmNvbXBsZXRlLWRpc2FwcHJvdmVkLXJhdGlvbmFsZS9pbmNvbXBsZXRlLWRpc2FwcHJvdmVkLXJhdGlvbmFsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBjb2xvcjogcmdiKDE3MywgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGlzdC1jb250ZW50e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogNWVtO1xyXG4gICAgbWF4LWhlaWdodDogMTBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnJlYXNvbi1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyTXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIC8vIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1vcHRpb24ubWF0LW9wdGlvbiB7XHJcbiAgICAvLyBtYXJnaW46IDByZW0gMDtcclxuICAgIC8vIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAvLyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAvLyAvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIC8vIHdpZHRoOiAxMHJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtb3B0aW9uLXRleHQubWF0LW9wdGlvbi10ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "HNJZ":
/*!*******************************************************!*\
  !*** ./src/app/core/models/asc-rate-special.model.ts ***!
  \*******************************************************/
/*! exports provided: AscRateSpecial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscRateSpecial", function() { return AscRateSpecial; });
class AscRateSpecial {
}


/***/ }),

/***/ "HQqM":
/*!**********************************************!*\
  !*** ./src/app/core/models/payment.model.ts ***!
  \**********************************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony import */ var _payment_method_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-method.model */ "piSE");

class Payment {
    constructor() {
        this.paymentMethod = new _payment_method_model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"]();
        this.filedBirForm = false;
        this.filedBirForm = false;
        this.remarks = '';
    }
}


/***/ }),

/***/ "JAX2":
/*!*****************************************************!*\
  !*** ./src/app/core/models/type-of-medium.model.ts ***!
  \*****************************************************/
/*! exports provided: TypeOfMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function() { return TypeOfMedium; });
class TypeOfMedium {
}


/***/ }),

/***/ "JLH3":
/*!*************************************************************!*\
  !*** ./src/app/core/models/application-multimedia.model.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function() { return ApplicationMultimedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function() { return ApplicationMultimediaItemsDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function() { return ApplicationMultimediaMovingDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function() { return ApplicationMultimediaStaticDTO; });
class ApplicationMultimedia {
}
class ApplicationMultimediaItemsDTO {
}
class ApplicationMultimediaMovingDTO extends ApplicationMultimedia {
}
class ApplicationMultimediaStaticDTO extends ApplicationMultimedia {
}


/***/ }),

/***/ "LhRd":
/*!*****************************************************!*\
  !*** ./src/app/core/models/s2-application.model.ts ***!
  \*****************************************************/
/*! exports provided: S2Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S2Application", function() { return S2Application; });
class S2Application {
}


/***/ }),

/***/ "QLCe":
/*!*****************************************************!*\
  !*** ./src/app/core/models/or-preparation.model.ts ***!
  \*****************************************************/
/*! exports provided: OrPreparation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparation", function() { return OrPreparation; });
class OrPreparation {
    setTotalAmounts(totals) {
        this.totalSales = totals.totalSales;
        this.totalAmountDue = totals.totalAmountDue;
        this.totalVat = totals.totalVat;
        this.totalWithholdingtax = totals.totalWithholdingtax;
    }
}


/***/ }),

/***/ "Ql0k":
/*!******************************************************************!*\
  !*** ./src/app/core/models/medium-execution-controller.model.ts ***!
  \******************************************************************/
/*! exports provided: MediumExecutionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumExecutionController", function() { return MediumExecutionController; });
class MediumExecutionController {
}


/***/ }),

/***/ "QvPK":
/*!*************************************************************!*\
  !*** ./src/app/core/models/promissory-note-period.model.ts ***!
  \*************************************************************/
/*! exports provided: PromissoryNotePeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromissoryNotePeriod", function() { return PromissoryNotePeriod; });
class PromissoryNotePeriod {
}


/***/ }),

/***/ "SM/z":
/*!**********************************************!*\
  !*** ./src/app/core/models/dialect.model.ts ***!
  \**********************************************/
/*! exports provided: Dialect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialect", function() { return Dialect; });
class Dialect {
}


/***/ }),

/***/ "SYHT":
/*!***************************************************!*\
  !*** ./src/app/core/models/user-account.model.ts ***!
  \***************************************************/
/*! exports provided: UserAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccount", function() { return UserAccount; });
class UserAccount {
}


/***/ }),

/***/ "TPGS":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/fragments/form-action-buttons/form-action-buttons.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FormActionButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionButtonsComponent", function() { return FormActionButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_action_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-action-buttons.component.html */ "e59+");
/* harmony import */ var _form_action_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-action-buttons.component.scss */ "u9Of");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/models/announcement.model */ "dszm");
/* harmony import */ var app_core_models_asc_rate_special_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/models/asc-rate-special.model */ "HNJZ");
/* harmony import */ var app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/models/brand-penalties.model */ "nOv4");
/* harmony import */ var app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/models/company-penalties.model */ "fJLi");
/* harmony import */ var app_core_models_dialect_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/models/dialect.model */ "SM/z");
/* harmony import */ var app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/core/models/email-notification.model */ "FnPy");
/* harmony import */ var app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/models/holiday.model */ "lflh");
/* harmony import */ var app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/login-image.model */ "VjNL");
/* harmony import */ var app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/models/medium-execution-controller.model */ "Ql0k");
/* harmony import */ var app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/models/numberOfMultipleApplicationAllowed.model */ "/RNn");
/* harmony import */ var app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/models/promissory-note-period.model */ "QvPK");
/* harmony import */ var app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/core/models/qrAndBarCodeChecker.model */ "s7wx");
/* harmony import */ var app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/core/models/s1-and-s2-form-expiration-period.model */ "zL5c");
/* harmony import */ var app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/core/models/screener-reviewer-pair.model */ "+iQW");
/* harmony import */ var app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/core/models/type-of-main-document.model */ "1T39");
/* harmony import */ var app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/core/models/type-of-medium-execution.model */ "XP8G");
/* harmony import */ var app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/core/models/type-of-rational.model */ "Do+y");
/* harmony import */ var app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/core/models/uploading-document-file-size-model */ "bq+u");























let FormActionButtonsComponent = class FormActionButtonsComponent {
    constructor() {
        this.isFromModal = false;
        this.showApproveRejectButton = false;
        this.saveFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.validateFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.updateFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.deleteFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cancelFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.closeModalFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.approveFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rejectFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isHideSaveButton = false;
        this.isShowApproveDisapproveButton = false;
        this.isHideDeleteButton = false;
        this.isHideUpdateButton = false;
        this.isShowValidateButton = false;
    }
    ngOnInit() {
        // hides the save button if class of childObject is email notification
        this.isHideSaveButton = this.childObject instanceof app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_10__["EmailNotification"]
            || this.childObject instanceof app_core_models_uploading_document_file_size_model__WEBPACK_IMPORTED_MODULE_22__["UploadingDocumentFileSize"]
            || this.childObject instanceof app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_16__["QrAndBarCodeChecker"]
            || this.childObject instanceof app_core_models_numberOfMultipleApplicationAllowed_model__WEBPACK_IMPORTED_MODULE_14__["NumberOfMultipleApplicationAllowed"]
            || this.childObject instanceof app_core_models_asc_rate_special_model__WEBPACK_IMPORTED_MODULE_6__["AscRateSpecial"];
        this.isHideUpdateButton = this.childObject instanceof app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_12__["LoginImage"];
        this.isHideDeleteButton = this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["Category"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["Product"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["Brand"]
            || this.childObject instanceof app_core_models_brand_penalties_model__WEBPACK_IMPORTED_MODULE_7__["BrandPenalties"]
            || this.childObject instanceof app_core_models_company_penalties_model__WEBPACK_IMPORTED_MODULE_8__["CompanyPenalties"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["Affiliation"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["TypeOfMedium"]
            || this.childObject instanceof app_core_models_type_of_medium_execution_model__WEBPACK_IMPORTED_MODULE_20__["TypeOfMediumExecution"]
            || this.childObject instanceof app_core_models_medium_execution_controller_model__WEBPACK_IMPORTED_MODULE_13__["MediumExecutionController"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["TypeOfReason"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["TypeOfDocument"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["PaymentType"]
            || this.childObject instanceof app_core_models_holiday_model__WEBPACK_IMPORTED_MODULE_11__["Holiday"]
            || this.childObject instanceof app_core_models_dialect_model__WEBPACK_IMPORTED_MODULE_9__["Dialect"]
            || this.childObject instanceof app_core_models_screener_reviewer_pair_model__WEBPACK_IMPORTED_MODULE_18__["ScreenerReviewerPair"]
            || this.childObject instanceof app_core_models_email_notification_model__WEBPACK_IMPORTED_MODULE_10__["EmailNotification"]
            || this.childObject instanceof app_core_models_type_of_main_document_model__WEBPACK_IMPORTED_MODULE_19__["TypeOfMainDocument"]
            || this.childObject instanceof app_core_models_announcement_model__WEBPACK_IMPORTED_MODULE_5__["Announcement"]
            || this.childObject instanceof app_core_models_s1_and_s2_form_expiration_period_model__WEBPACK_IMPORTED_MODULE_17__["S1AndS2FormExpirationPeriod"]
            || this.childObject instanceof app_core_models_promissory_note_period_model__WEBPACK_IMPORTED_MODULE_15__["PromissoryNotePeriod"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["AscRate"]
            || this.childObject instanceof _models__WEBPACK_IMPORTED_MODULE_4__["TypeOfApplication"]
            || this.childObject instanceof app_core_models_type_of_rational_model__WEBPACK_IMPORTED_MODULE_21__["TypeOfRational"]
            || this.childObject instanceof app_core_models_login_image_model__WEBPACK_IMPORTED_MODULE_12__["LoginImage"];
        this.isShowValidateButton = this.childObject instanceof app_core_models_qrAndBarCodeChecker_model__WEBPACK_IMPORTED_MODULE_16__["QrAndBarCodeChecker"];
    }
    save() {
        this.saveFunction.emit(this.childObject);
    }
    validate() {
        this.validateFunction.emit(this.childObject);
    }
    update() {
        this.updateFunction.emit(this.childObject);
    }
    delete() {
        this.deleteFunction.emit(this.childObject);
    }
    approve() {
        this.approveFunction.emit();
    }
    reject() {
        this.rejectFunction.emit();
    }
    closeModal() {
        this.closeModalFunction.emit();
    }
    resetFormValidator() {
        this.cancelFunction.emit();
    }
};
FormActionButtonsComponent.ctorParameters = () => [];
FormActionButtonsComponent.propDecorators = {
    isFromModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showApproveRejectButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    childObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    childForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    saveFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    validateFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    updateFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    deleteFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    cancelFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    closeModalFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    approveFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    rejectFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    isHideSaveButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isShowApproveDisapproveButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
FormActionButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-action-buttons',
        template: _raw_loader_form_action_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_action_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormActionButtonsComponent);



/***/ }),

/***/ "VjNL":
/*!**************************************************!*\
  !*** ./src/app/core/models/login-image.model.ts ***!
  \**************************************************/
/*! exports provided: LoginImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginImage", function() { return LoginImage; });
class LoginImage {
}


/***/ }),

/***/ "VtBT":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fragments/reject-disapproved-reason/reject-disapproved-reason.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <h1><span class=\"material-icons\" >report_problem</span> Reasons for rejection</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <mat-label *ngIf=\"errMsg\" class=\"errMsg\">{{errMsg}}</mat-label>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Select Reason:</mat-label>\r\n                <mat-select #selectReason (selectionChange)=\"selectedReason($event.value)\">\r\n                    <mat-option *ngFor=\"let i of typeOfReasonList\" [value]=\"i\">\r\n                        {{i.reason}}\r\n                    </mat-option>\r\n                </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"row \">\r\n        <th >Selected Reasons:</th>\r\n        <div class=\"col list-content\" >\r\n\r\n            <table *ngFor=\"let i of selectedReasonList\">\r\n                <tr>\r\n                    <td class=\"reason-description\">\r\n                        <span class=\"material-icons\" >label_important</span> {{i.reason}}\r\n                    </td>\r\n                    <td>\r\n                        <!-- <button  (click)=\"removeReason(i.id)\">x</button> -->\r\n                        <span class=\"material-icons\" (click)=\"removeReason(i.id)\">delete</span>\r\n\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"checkOthersReason()\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>REMARKS</mat-label>\r\n            <!-- <textarea matInput [value]=\"payment?.remarks\" [readonly]=\"!isForPayment\"></textarea> -->\r\n            <textarea matInput name=\"remarks\" [(ngModel)]=\"remarks\"\r\n              ></textarea>\r\n          </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"row button-content\">\r\n        <div class=\"col\">\r\n\r\n            <button mat-raised-button class=\"button-red\" (click)=\"submitRejectionDisapproved()\"\r\n            [disabled]=\"selectedReasonList.length === 0\">\r\n                <i class=\"material-icons color__white\">verified</i> Submit Rejection\r\n            </button>\r\n        </div>\r\n        <div class=\"col\">\r\n            <button class=\"col-md-6\" mat-raised-button class=\"button-red\" (click)=\"cancel()\">\r\n                <i class=\"material-icons color__white\">cancel</i> Cancel\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "WJgu":
/*!**********************************************************************!*\
  !*** ./src/app/modules/fragments/form-list/form-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cancel {\n  color: gray !important;\n  text-align: center;\n}\n\nspan {\n  color: #ad0000;\n}\n\n.action-items {\n  width: 120px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWx7XHJcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgY29sb3I6IHJnYigxNzMsIDAsIDApO1xyXG59XHJcblxyXG4uYWN0aW9uLWl0ZW1zIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "WN7m":
/*!***********************************************!*\
  !*** ./src/app/core/models/asc-rate.model.ts ***!
  \***********************************************/
/*! exports provided: AscRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscRate", function() { return AscRate; });
class AscRate {
}


/***/ }),

/***/ "XLGj":
/*!***************************************************************!*\
  !*** ./src/app/core/models/application-single-media.model.ts ***!
  \***************************************************************/
/*! exports provided: ApplicationSingleMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function() { return ApplicationSingleMedia; });
class ApplicationSingleMedia {
}


/***/ }),

/***/ "XP8G":
/*!***************************************************************!*\
  !*** ./src/app/core/models/type-of-medium-execution.model.ts ***!
  \***************************************************************/
/*! exports provided: TypeOfMediumExecution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumExecution", function() { return TypeOfMediumExecution; });
class TypeOfMediumExecution {
}


/***/ }),

/***/ "YAga":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fragments/form-list/form-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container matColumnDef=\"emailCode\">\r\n      <th mat-header-cell *matHeaderCellDef> Email Code </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.emailCode }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"subject\">\r\n      <th mat-header-cell *matHeaderCellDef> Subject </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.subject }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.category?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfMainDocument\">\r\n      <th mat-header-cell *matHeaderCellDef> Type Of Main Document </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.typeOfMainDocument }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfMainDocumentObject\">\r\n      <th mat-header-cell *matHeaderCellDef> Type Of Main Document </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{\r\n        element?.typeOfMainDocument?.typeOfMainDocument }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"noOfHours\">\r\n      <th mat-header-cell *matHeaderCellDef> Number Of Hours </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.noOfHours }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"noOfDays\">\r\n      <th mat-header-cell *matHeaderCellDef> Number Of Days </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.noOfDays }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"noOfWorkingDays\">\r\n      <th mat-header-cell *matHeaderCellDef> Number Of Working Days </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.noOfWorkingDays }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfMedium\">\r\n      <th mat-header-cell *matHeaderCellDef> Type of Medium </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.typeOfMedium }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfMediumObj\">\r\n      <th mat-header-cell *matHeaderCellDef> Type of Medium </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.typeOfMedium?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"reason\">\r\n      <th mat-header-cell *matHeaderCellDef> Reason </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.reason }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.description }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"body\">\r\n      <th mat-header-cell *matHeaderCellDef> Body </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <div [innerHTML]=\"element?.body\"></div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dialect\">\r\n      <th mat-header-cell *matHeaderCellDef> Dialect </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.dialect }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"applicationType\">\r\n      <th mat-header-cell *matHeaderCellDef> Application Type </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.applicationType }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lengthFrom\">\r\n      <th mat-header-cell *matHeaderCellDef> Length From </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.lengthFrom }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lengthTo\">\r\n      <th mat-header-cell *matHeaderCellDef> Length To </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.lengthTo }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"memberOffline\">\r\n      <th mat-header-cell *matHeaderCellDef> Member Offline </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.memberOffline }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"memberOnline\">\r\n      <th mat-header-cell *matHeaderCellDef> Member Online </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.memberOnline }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"nonMemberOffline\">\r\n      <th mat-header-cell *matHeaderCellDef> Non Member Offline </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.nonMemberOffline }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"nonMemberOnline\">\r\n      <th mat-header-cell *matHeaderCellDef> Non Member Online </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.nonMemberOnline }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"screenerName\">\r\n      <th mat-header-cell *matHeaderCellDef> Screener Name </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.screener?.firstName }} {{ element?.screener?.lastName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"reviewerName\">\r\n      <th mat-header-cell *matHeaderCellDef> Reviewer Name </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.reviewer?.firstName }} {{ element?.reviewer?.lastName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"holidayName\">\r\n      <th mat-header-cell *matHeaderCellDef> Holiday Name </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.holidayName }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"holidayDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Holiday Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.holidayDate |\r\n        date:'MM/dd/yyyy' }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"holidayType\">\r\n      <th mat-header-cell *matHeaderCellDef> Holiday Type </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.holidayType?.replaceAll('_','\r\n        ') }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfExecution\">\r\n      <th mat-header-cell *matHeaderCellDef> Type Of Execution </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.typeOfExecution }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfExecutionObj\">\r\n      <th mat-header-cell *matHeaderCellDef> Type Of Execution </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{\r\n        element?.typeOfExecution?.typeOfExecution }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"live\">\r\n      <th mat-header-cell *matHeaderCellDef> LIVE </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <i *ngIf=\"element?.supportingAttachmentReference\" class=\"material-icons\">check_circle</i>\r\n        <i *ngIf=\"!element?.supportingAttachmentReference\" class=\"material-icons cancel\">cancel</i>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"landingPage\">\r\n      <th mat-header-cell *matHeaderCellDef> Landing Page </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <i *ngIf=\"element?.supportingAttachmentReference\" class=\"material-icons\">check_circle</i>\r\n        <i *ngIf=\"!element?.supportingAttachmentReference\" class=\"material-icons cancel\">cancel</i>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"applyForS2\">\r\n      <th mat-header-cell *matHeaderCellDef> Apply for S2 </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <i *ngIf=\"!element?.live\" class=\"material-icons\">check_circle</i>\r\n        <i *ngIf=\"element?.live\" class=\"material-icons cancel\">cancel</i>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"applyForTOA\">\r\n      <th mat-header-cell *matHeaderCellDef> Apply for TOA </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <i *ngIf=\"element?.applyForToa\" class=\"material-icons\">check_circle</i>\r\n        <i *ngIf=\"!element?.applyForToa\" class=\"material-icons cancel\">cancel</i>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"paymentDescription\">\r\n      <th mat-header-cell *matHeaderCellDef> Payment Description </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.paymentDescription }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"categoryDescription\">\r\n      <th mat-header-cell *matHeaderCellDef> Category </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.description }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"product\">\r\n      <th mat-header-cell *matHeaderCellDef> Product </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.product?.description }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"productDescription\">\r\n      <th mat-header-cell *matHeaderCellDef> Product </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.description }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brand\">\r\n      <th mat-header-cell *matHeaderCellDef> Brand </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.brand?.description }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef> Title </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.title }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"details\">\r\n      <th mat-header-cell *matHeaderCellDef> Details </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.details }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"noOfView\">\r\n      <th mat-header-cell *matHeaderCellDef> Number Of Views </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.noOfView }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"minimum\">\r\n      <th mat-header-cell *matHeaderCellDef> Minimum </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.minimum }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"maximum\">\r\n      <th mat-header-cell *matHeaderCellDef> Maximum </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.maximum }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"postingDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Posting Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.postingDate |\r\n        date:'MM/dd/yyyy' }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"s1ExpNoOfYears\">\r\n      <th mat-header-cell *matHeaderCellDef> S1 Expiration No Of Years </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.s1ExpNoOfYears }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"s2ExpNoOfYears\">\r\n      <th mat-header-cell *matHeaderCellDef> S2 Expiration No Of Years </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"> {{ element?.s2ExpNoOfYears }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"referenceCode\">\r\n      <th mat-header-cell *matHeaderCellDef> Reference Code </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.referenceCode\">\r\n          {{ element?.referenceCode }}\r\n        </span>\r\n        <span *ngIf=\"element?.applicationForm?.referenceCode\">\r\n          {{ element?.applicationForm?.referenceCode }}\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"adTitle\">\r\n      <th mat-header-cell *matHeaderCellDef> AD Title </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.adTitle\">\r\n          {{ element?.adTitle }}\r\n        </span>\r\n        <span *ngIf=\"element?.applicationForm?.adTitle\">\r\n          {{ element?.applicationForm?.adTitle }}\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"assignedAdSpecialist\">\r\n      <th mat-header-cell *matHeaderCellDef> AD Specialist </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.assignedAdSpecialist\">\r\n          {{ element?.assignedAdSpecialist?.firstName }} {{ element?.assignedAdSpecialist?.lastName }}\r\n        </span>\r\n        <!-- <span *ngIf=\"element?.applicationForm?.assignedAdSpecialist\">\r\n         {{element?.applicationForm?.assignedAdSpecialist?.firstName }}  {{ element?.applicationForm?.assignedAdSpecialist?.lastName }}\r\n        </span> -->\r\n        <span *ngIf=\"!element?.assignedAdSpecialist\">\r\n          N/A\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"assignedEncoder\">\r\n      <th mat-header-cell *matHeaderCellDef> Evaluator </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.assignedEncoder\">\r\n          {{ element?.assignedEncoder?.firstName }} {{ element?.assignedEncoder?.lastName }}\r\n        </span>\r\n        <!-- <span *ngIf=\"element?.applicationForm?.assignedEncoder\">\r\n          {{element?.applicationForm?.assignedEncoder?.firstName }} {{ element?.applicationForm?.assignedEncoder?.lastName }}\r\n        </span> -->\r\n        <span *ngIf=\"!element?.assignedEncoder && !element?.applicationForm?.assignedEncoder\">\r\n          N/A\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"assignedReviewer\">\r\n      <th mat-header-cell *matHeaderCellDef> Reviewer </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.assignedReviewer\">\r\n          {{ element?.assignedReviewer?.firstName }} {{ element?.assignedReviewer?.lastName }}\r\n        </span>\r\n        <!-- <span *ngIf=\"element?.applicationForm?.assignedReviewer\">\r\n          {{element?.applicationForm?.assignedReviewer?.firstName }} {{ element?.applicationForm?.assignedReviewer?.lastName }}\r\n        </span> -->\r\n        <span *ngIf=\"!element?.assignedReviewer\">\r\n          N/A\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"assignedScreener\">\r\n      <th mat-header-cell *matHeaderCellDef> Screener </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.assignedScreener\">\r\n          {{ element?.assignedScreener?.firstName }} {{ element?.assignedScreener?.lastName }}\r\n        </span>\r\n        <!-- <span *ngIf=\"element?.applicationForm?.assignedScreener\">\r\n          {{element?.applicationForm?.assignedScreener?.firstName }} {{ element?.applicationForm?.assignedScreener?.lastName }}\r\n        </span> -->\r\n        <span *ngIf=\"!element?.assignedScreener\">\r\n          N/A\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"assignedUser\">\r\n      <th mat-header-cell *matHeaderCellDef> Current Assigned User </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.assignedUser\">\r\n          {{ element?.assignedUser?.firstName }} {{ element?.assignedUser?.lastName }}\r\n        </span>\r\n        <!-- <span *ngIf=\"element?.applicationForm?.assignedUser\">\r\n          {{ element?.applicationForm?.assignedUser?.firstName }} {{ element?.applicationForm?.assignedUser?.lastName }}\r\n        </span> -->\r\n        <span *ngIf=\"!element?.assignedUser\">\r\n          N/A\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"applicationOwner\">\r\n      <th mat-header-cell *matHeaderCellDef> Application Owner </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        <span *ngIf=\"element?.applicationOwner\">\r\n          {{ element?.applicationOwner?.firstName }} {{ element?.applicationOwner?.lastName }}\r\n        </span>\r\n        <span *ngIf=\"element?.applicationForm?.applicationOwner\">\r\n          {{element?.applicationForm?.applicationOwner?.firstName }}\r\n          {{element?.applicationForm?.applicationOwner?.lastName }}\r\n        </span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lastModifiedBy\">\r\n      <th mat-header-cell *matHeaderCellDef> Last Modified By </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.modifiedBy ? element?.modifiedBy : element?.createdBy }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lastModifiedDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Last Modified Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.modifiedDate ? (element?.modifiedDate | date:'MM/dd/yyyy hh:mm a') : (element?.createdDate |\r\n        date:'MM/dd/yyyy hh:mm a') }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"affiliationDesc\">\r\n      <th mat-header-cell *matHeaderCellDef> Member's Affiliation </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"member\">\r\n      <th mat-header-cell *matHeaderCellDef> Member </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.member ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brandDesc\">\r\n      <th mat-header-cell *matHeaderCellDef> Brand </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"penalty\">\r\n      <th mat-header-cell *matHeaderCellDef> Penalty </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.penalty ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfDocumentDesc\">\r\n      <th mat-header-cell *matHeaderCellDef> Type of Document </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dateOfLaunchEnable\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Date Of Launch </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.dateOfLaunchEnable ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"expiresOnEnable\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Expiration Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.expiresOnEnable ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"basedOnEnable\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Basis </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.basedOnEnable ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"variantEnable\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Variant </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.variantEnable ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"remarksEnable\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Remarks </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.remarksEnable ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"inputEnable\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Input </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.inputEnable ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"amount\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Amount </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.amount ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"bankBranch\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Bank Branch </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.bankBranch ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"bankName\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Bank Name </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.bankName ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"controlNo\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Control No </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.controlNo ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fundTransferDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Fund Transfer Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.fundTransferDate ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"promisorryDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Promisorry Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.promisorryDate ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"referenceNo\">\r\n      <th mat-header-cell *matHeaderCellDef> Has Reference No </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.referenceNo ? 'Yes' : 'No' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"enabledFields\">\r\n      <th mat-header-cell *matHeaderCellDef> Enabled Fields </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.enabledFields }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef> Status </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.status?.replaceAll('_', ' ') }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- FOR BRAND PENALTIES -->\r\n    <ng-container matColumnDef=\"brandDescription\">\r\n      <th mat-header-cell *matHeaderCellDef> Brand </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.brand?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brandPenaltyAmount\">\r\n      <th mat-header-cell *matHeaderCellDef> Amount </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.amount | number : '1.2-2' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"penaltyDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Penalty Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.penaltyDate | date:'fullDate'}}\r\n      </td>\r\n    </ng-container>\r\n    <!-- FOR BRAND PENALTIES -->\r\n\r\n    <!-- FOR COMPANY PENALTIES -->\r\n    <ng-container matColumnDef=\"companyDescription\">\r\n      <th mat-header-cell *matHeaderCellDef> Company </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\"\r\n        [ngStyle]=\"{'background-color': element?.status === 'ACTIVE' ? 'white' : '#ffbebe' }\">\r\n        {{ element?.company?.companyName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"companyPenaltyAmount\">\r\n      <th mat-header-cell *matHeaderCellDef> Penalty Amount </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.penaltyAmount | number : '1.2-2' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- FOR UPLOADING FILE SIZE -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> Document Id </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.id }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"size\">\r\n      <th mat-header-cell *matHeaderCellDef> Document size </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.fileSize }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- FOR TYPE OF APPLICATION -->\r\n\r\n    <ng-container matColumnDef=\"clearingReleaseTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Clearing Release Time </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.clearingReleaseTime }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"decisionReleaseTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Decision Release Time </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.decisionReleaseTime }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"submissionStartTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Submission Start Time </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.submissionStartTime }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"submissionEndTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Submission End Time </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.submissionEndTime }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- FOR TYPE OF RATIONAL -->\r\n\r\n    <ng-container matColumnDef=\"rationale\">\r\n      <th mat-header-cell *matHeaderCellDef> Rationale </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\" style=\"width: 78%;\">\r\n        {{ element.rationale }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"rationaleCategory\">\r\n      <th mat-header-cell *matHeaderCellDef> Rationale Category </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.rationaleCategory.replaceAll('_',' ') | uppercase }}\r\n      </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <th mat-header-cell *matHeaderCellDef> Firstname </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.firstName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lastName\">\r\n      <th mat-header-cell *matHeaderCellDef> Lastname </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element.lastName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"mobileNumber\">\r\n      <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.mobileNumber }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"emailAddress\">\r\n      <th mat-header-cell *matHeaderCellDef> Email Address </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.username }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"userRole\">\r\n      <th mat-header-cell *matHeaderCellDef> Role </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.userRole?.name?.replaceAll('ROLE_', '')?.replace('_', ' ')?.replace('ENCODER', 'EVALUATOR') }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfMediumController\">\r\n      <th mat-header-cell *matHeaderCellDef> Type of Medium </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.typeOfMedium?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfExecutionController\">\r\n      <th mat-header-cell *matHeaderCellDef> Type of Execution </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.typeOfExecution?.typeOfExecution }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- FOR VOUCHER ENROLLMENT -->\r\n\r\n    <ng-container matColumnDef=\"company\">\r\n      <th mat-header-cell *matHeaderCellDef> Company </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.company?.companyName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fundAmount\">\r\n      <th mat-header-cell *matHeaderCellDef> Fund Amount </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.fundAmount | number : '1.2-2' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"voucherDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Voucher Date</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.voucherDate | date: 'shortDate'}}\r\n      </td>\r\n    </ng-container>\r\n    <!-- <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef> action </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button class=\"button-red\" (click)=\"viewHistory(element)\">\r\n          View History\r\n        </button>\r\n      </td>\r\n    </ng-container> -->\r\n\r\n\r\n    <!-- <ng-container matColumnDef=\"voucherSignatories\">\r\n        <th mat-header-cell *matHeaderCellDef> Signatories Name </th>\r\n        <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n          {{ element?.voucherSignatories.name}}\r\n        </td>\r\n      </ng-container> -->\r\n\r\n    <!-- FOR VOUCHER SIGNATORIES -->\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Signatories Name </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.name}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"position\">\r\n      <th mat-header-cell *matHeaderCellDef> Position</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.position}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- FOR VOUCHER FUND TRANSFER -->\r\n    <ng-container matColumnDef=\"amountTransfered\">\r\n      <th mat-header-cell *matHeaderCellDef> Amount Transferred </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.amountTransfered | number : '1.2-2'}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"transferedDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Transferred Date</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.transferedDate | date: 'shortDate' }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"officialReceiptNo\">\r\n      <th mat-header-cell *matHeaderCellDef> Official Receipt No</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.officialReceiptNo }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"typeOfMediumDescription\">\r\n      <th mat-header-cell *matHeaderCellDef> Type Of Medium</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.typeOfMedium?.description }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"officialReceiptReferences\">\r\n      <th mat-header-cell *matHeaderCellDef> Official Receipt No References</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.officialReceiptReferencesValue }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Image login -->\r\n    <ng-container matColumnDef=\"file\">\r\n      <th mat-header-cell *matHeaderCellDef> File</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.file }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fileName\">\r\n      <th mat-header-cell *matHeaderCellDef> File name</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.fileName }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fileExtension\">\r\n      <th mat-header-cell *matHeaderCellDef> File Extension</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.fileExtension }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"documentFormat\">\r\n      <th mat-header-cell *matHeaderCellDef> Document Format</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.documentFormat }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"displayed\">\r\n      <th mat-header-cell *matHeaderCellDef> Display Status</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.displayed }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fileURL\">\r\n      <th mat-header-cell *matHeaderCellDef> File URL</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.fileURL }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"originalFilename\">\r\n      <th mat-header-cell *matHeaderCellDef> Original Filename</th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.originalFilename }}\r\n      </td>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <!-- Image login -->\r\n\r\n\r\n    <!-- <ng-container matColumnDef=\"companyPenaltyDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Penalty Date </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"getObject(element?.id)\">\r\n        {{ element?.penaltyDate | date:'fullDate'}}\r\n      </td>\r\n    </ng-container> -->\r\n    <!-- FOR COMPANY PENALTIES -->\r\n\r\n    <!-- DELETE ICON -->\r\n    <ng-container matColumnDef=\"deleteIcon\">\r\n      <th mat-header-cell *matHeaderCellDef> Action </th>\r\n      <td mat-cell *matCellDef=\"let element\" (click)=\"deleteObject(element?.id, element)\" matTooltip=\"Cancel OR\">\r\n        <span class=\"material-icons\">delete_forever</span>\r\n      </td>\r\n    </ng-container>\r\n    <!-- DELETE ICON -->\r\n    <ng-container matColumnDef=\"voucherActionItems\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"action-items\"> Action </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"action-items\">\r\n        <span class=\"material-icons\" tooltip=\"Edit\" (click)=\"openEditModal(element?.id, element)\">edit</span>\r\n        <span class=\"material-icons\" tooltip=\"Delete\" (click)=\"deleteObject(element?.id, element)\">delete_forever</span>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n    No record found.\r\n  </div>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n\r\n<ng-template #signatoryEdit>\r\n  <h1 mat-dialog-title>Edit Signatories</h1>\r\n  <div mat-dialog-content>\r\n    <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n      <mat-label>Signatory Name</mat-label>\r\n      <input matInput [(ngModel)]=\"signatory.name\">\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n      <mat-label>Position</mat-label>\r\n      <input matInput [(ngModel)]=\"signatory.position\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div mat-dialog-actions class=\"justify-content-center\">\r\n    <button mat-button (click)=\"closeModal()\">Cancel</button>\r\n    <button mat-button class=\"mat-raised-button button-red\" [disabled]=\"!signatory.name || !signatory.position\" (click)=\"updateObject()\">Save</button>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "Zydp":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/fragments/request-for-special-clearing/request-for-special-clearing.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-panel-title {\n  background-color: #b90000;\n  margin: 20px 0px;\n  color: white;\n  padding: 10px;\n  font-weight: 600;\n}\n\n/* table for status display */\n\ntable tr td {\n  padding: 10px 16px;\n  border-radius: 7px;\n  font: 500 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  width: 31%;\n}\n\ntable tr td:nth-child(odd) {\n  background-color: #ff5252;\n  color: white;\n  border: 1px solid white;\n}\n\ntable tr td:nth-child(even) {\n  color: #ff5252;\n  border: 1px solid #0000001f;\n}\n\n.no-border {\n  background-color: transparent !important;\n  border: 0px !important;\n  padding: 0px !important;\n  width: 5px;\n  height: 5px !important;\n}\n\n.dialog-button-content {\n  vertical-align: bottom;\n  text-align: center;\n}\n\n.dialog-button-content button {\n  color: white;\n  border: none;\n  padding: 5px 10px 5px 5px;\n  margin: 0px 5px;\n  font-weight: 500;\n  border-radius: 5px;\n}\n\n.dialog-button-content .warn {\n  background-color: red;\n}\n\n.dialog-button-content .caution {\n  background-color: #dfd000;\n  color: black;\n}\n\n.dialog-button-content .confirm {\n  background-color: #449bff;\n}\n\ntable {\n  width: 100%;\n}\n\n.button-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvcmVxdWVzdC1mb3Itc3BlY2lhbC1jbGVhcmluZy9yZXF1ZXN0LWZvci1zcGVjaWFsLWNsZWFyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQSw2QkFBQTs7QUFFRTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtFQUNBLFVBQUE7QUFETjs7QUFJRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRk47O0FBS0U7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUFITjs7QUFPQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUpGOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUxGOztBQU9FO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTE47O0FBUUU7RUFDSSxxQkFBQTtBQU5OOztBQVNFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBUE47O0FBVUU7RUFDSSx5QkFBQTtBQVJOOztBQVlBO0VBQ0UsV0FBQTtBQVRGOztBQVlBO0VBQ0UsaUJBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhZ21lbnRzL3JlcXVlc3QtZm9yLXNwZWNpYWwtY2xlYXJpbmcvcmVxdWVzdC1mb3Itc3BlY2lhbC1jbGVhcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYW5lbC10aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDAsIDApO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLyogdGFibGUgZm9yIHN0YXR1cyBkaXNwbGF5ICovXHJcbnRhYmxlIHRyIHtcclxuICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICBmb250OiA1MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB3aWR0aDogMzElO1xyXG4gIH1cclxuXHJcbiAgdGQ6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgdGQ6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgY29sb3I6ICNmZjUyNTI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAxZjtcclxuICB9XHJcbn1cclxuXHJcbi5uby1ib3JkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGJ1dHRvblxyXG4uZGlhbG9nLWJ1dHRvbi1jb250ZW50IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLndhcm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuY2F1dGlvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIwOCwgMCk7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAuY29uZmlybSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMTU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "an1Z":
/*!**********************************************************!*\
  !*** ./src/app/core/models/application-request.model.ts ***!
  \**********************************************************/
/*! exports provided: ApplicationRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function() { return ApplicationRequest; });
class ApplicationRequest {
}


/***/ }),

/***/ "bN3y":
/*!**********************************************!*\
  !*** ./src/app/core/models/profile.model.ts ***!
  \**********************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class Profile {
}


/***/ }),

/***/ "bq+u":
/*!*******************************************************************!*\
  !*** ./src/app/core/models/uploading-document-file-size-model.ts ***!
  \*******************************************************************/
/*! exports provided: UploadingDocumentFileSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadingDocumentFileSize", function() { return UploadingDocumentFileSize; });
class UploadingDocumentFileSize {
}


/***/ }),

/***/ "d215":
/*!**********************************************************!*\
  !*** ./src/app/core/models/attachment-document.model.ts ***!
  \**********************************************************/
/*! exports provided: AttachmentDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function() { return AttachmentDocument; });
class AttachmentDocument {
}


/***/ }),

/***/ "dszm":
/*!***************************************************!*\
  !*** ./src/app/core/models/announcement.model.ts ***!
  \***************************************************/
/*! exports provided: Announcement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Announcement", function() { return Announcement; });
class Announcement {
}


/***/ }),

/***/ "e59+":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fragments/form-action-buttons/form-action-buttons.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"save()\" *ngIf=\"!childObject?.id && !isHideSaveButton\"\r\n      [disabled]=\"!(childForm.valid)\">\r\n      <!-- <mat-icon>save</mat-icon> SAVE -->\r\n      <i class=\"material-icons color__white\">save</i> SAVE\r\n    </button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"validate()\" *ngIf=\"!childObject?.id && isShowValidateButton\"\r\n      [disabled]=\"!(childForm.valid)\">\r\n      <!-- <mat-icon>save</mat-icon> SAVE -->\r\n      <i class=\"material-icons color__white\">search</i> VALIDATE\r\n    </button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"update()\" *ngIf=\"childObject?.id && !isHideUpdateButton\"\r\n      [disabled]=\"!(childForm.valid)\">\r\n      <!-- <mat-icon> </mat-icon>  -->\r\n      <i class=\"material-icons color__white\">task_alt</i> UPDATE\r\n    </button>\r\n    <button mat-raised-button class=\"button-red\" (click)=\"delete()\" *ngIf=\"childObject?.id\" [hidden]=\"!isHideDeleteButton\"\r\n      [disabled]=\"!(childForm.valid)\">\r\n      <!-- <mat-icon> </mat-icon>  -->\r\n      <i class=\"material-icons color__white\">delete</i> DELETE\r\n    </button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"resetFormValidator()\"\r\n      *ngIf=\"(childObject?.id || childObject?.description || childObject?.paymentDescription || childObject?.typeOfMedium || childObject?.reason) && !isFromModal\">\r\n      <!-- <mat-icon>{{ childObject?.id ? 'cancel' : 'refresh' }}</mat-icon> {{ childObject?.id ? 'CANCEL' : 'RESET' }} -->\r\n      <i class=\"material-icons color__white\"> {{ childObject?.id ? 'cancel' : 'refresh' }}</i> {{ childObject?.id ? 'CANCEL' : 'RESET' }}\r\n    </button>\r\n    <ng-container *ngIf=\"(isFromModal && showApproveRejectButton) || isShowApproveDisapproveButton\">\r\n      <!-- <ng-container *ngIf=\"showApproveRejectButton\"> -->\r\n      <button mat-raised-button class=\"button-red\" (click)=\"approve()\">\r\n        <i class=\"material-icons color__white\">verified</i> APPROVE\r\n      </button>\r\n      <button mat-raised-button class=\"button-red\" (click)=\"reject()\">\r\n        <i class=\"material-icons color__white\">unpublished</i> REJECT\r\n      </button>\r\n      <button mat-raised-button class=\"button-red\" (click)=\"closeModal()\" *ngIf=\"isFromModal && showApproveRejectButton\">\r\n        <i class=\"material-icons color__white\">close</i> CLOSE\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "eP4w":
/*!***********************************************!*\
  !*** ./src/app/core/models/category.model.ts ***!
  \***********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "fJLi":
/*!********************************************************!*\
  !*** ./src/app/core/models/company-penalties.model.ts ***!
  \********************************************************/
/*! exports provided: CompanyPenalties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPenalties", function() { return CompanyPenalties; });
class CompanyPenalties {
}


/***/ }),

/***/ "g+XZ":
/*!**********************************************************!*\
  !*** ./src/app/core/models/supporting-document.model.ts ***!
  \**********************************************************/
/*! exports provided: SupportingDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportingDocument", function() { return SupportingDocument; });
class SupportingDocument {
}


/***/ }),

/***/ "gYLz":
/*!************************************************!*\
  !*** ./src/app/core/models/user-role.model.ts ***!
  \************************************************/
/*! exports provided: UserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
class UserRole {
}


/***/ }),

/***/ "intf":
/*!***************************************************!*\
  !*** ./src/app/core/models/payment-type.model.ts ***!
  \***************************************************/
/*! exports provided: PaymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return PaymentType; });
class PaymentType {
}


/***/ }),

/***/ "jEab":
/*!***************************************************************!*\
  !*** ./src/app/core/models/or-preparation-reference.model.ts ***!
  \***************************************************************/
/*! exports provided: OrPreparationReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function() { return OrPreparationReference; });
class OrPreparationReference {
}


/***/ }),

/***/ "lflh":
/*!**********************************************!*\
  !*** ./src/app/core/models/holiday.model.ts ***!
  \**********************************************/
/*! exports provided: Holiday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holiday", function() { return Holiday; });
class Holiday {
}


/***/ }),

/***/ "nOv4":
/*!******************************************************!*\
  !*** ./src/app/core/models/brand-penalties.model.ts ***!
  \******************************************************/
/*! exports provided: BrandPenalties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPenalties", function() { return BrandPenalties; });
class BrandPenalties {
}


/***/ }),

/***/ "no/g":
/*!**********************************************************!*\
  !*** ./src/app/core/models/performance-metrics.model.ts ***!
  \**********************************************************/
/*! exports provided: PerformanceMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function() { return PerformanceMetrics; });
class PerformanceMetrics {
}


/***/ }),

/***/ "piSE":
/*!*****************************************************!*\
  !*** ./src/app/core/models/payment-method.model.ts ***!
  \*****************************************************/
/*! exports provided: PaymentMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethod", function() { return PaymentMethod; });
class PaymentMethod {
}


/***/ }),

/***/ "puE1":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/fragments/reject-disapproved-reason/reject-disapproved-reason.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 20px;\n  font-weight: 600;\n}\nh1 .material-icons {\n  color: #ad0000;\n}\n.list-content {\n  border: solid 1px #b6b6b6;\n  border-radius: 5px;\n  margin: 12px;\n  min-height: 5em;\n  max-height: 10em;\n  overflow: auto;\n  padding: 10px 10px;\n}\n.list-content .material-icons {\n  color: #a00000;\n  text-align: end;\n  font-size: 20px;\n  vertical-align: middle;\n}\n.list-content table {\n  width: 100%;\n}\n.list-content table .reason-description {\n  text-align: left;\n}\n.list-content table td {\n  text-align: end;\n}\n.list-content .material-icons:hover {\n  cursor: pointer;\n}\n.button-content button {\n  width: 100%;\n}\n.errMsg {\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvcmVqZWN0LWRpc2FwcHJvdmVkLXJlYXNvbi9yZWplY3QtZGlzYXBwcm92ZWQtcmVhc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQU1JO0VBQ0ksV0FBQTtBQUhSO0FBT0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhZ21lbnRzL3JlamVjdC1kaXNhcHByb3ZlZC1yZWFzb24vcmVqZWN0LWRpc2FwcHJvdmVkLXJlYXNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBjb2xvcjogcmdiKDE3MywgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGlzdC1jb250ZW50e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogNWVtO1xyXG4gICAgbWF4LWhlaWdodDogMTBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTYwLCAwLCAwKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnJlYXNvbi1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdGVyaWFsLWljb25zOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi1jb250ZW50e1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyTXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "s7wx":
/*!**********************************************************!*\
  !*** ./src/app/core/models/qrAndBarCodeChecker.model.ts ***!
  \**********************************************************/
/*! exports provided: QrAndBarCodeChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrAndBarCodeChecker", function() { return QrAndBarCodeChecker; });
class QrAndBarCodeChecker {
}


/***/ }),

/***/ "sKXY":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: Affiliation, Brand, Company, PaymentType, Profile, S1Application, S2Application, TypeOfDocument, TypeOfMedium, TypeOfReason, UserRole, UserAccount, AttachmentDocument, Category, Product, TypeOfApplication, AscRate, Payment, Country, PerformanceMetrics, OrPreparation, OrPreparationReference, SupportingDocument, ApplicationSingleMedia, ApplicationRequest, ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affiliation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affiliation.model */ "vWPX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Affiliation", function() { return _affiliation_model__WEBPACK_IMPORTED_MODULE_0__["Affiliation"]; });

/* harmony import */ var _brand_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand.model */ "xlTg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return _brand_model__WEBPACK_IMPORTED_MODULE_1__["Brand"]; });

/* harmony import */ var _company_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.model */ "xpUm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return _company_model__WEBPACK_IMPORTED_MODULE_2__["Company"]; });

/* harmony import */ var _payment_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-type.model */ "intf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return _payment_type_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"]; });

/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.model */ "bN3y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _profile_model__WEBPACK_IMPORTED_MODULE_4__["Profile"]; });

/* harmony import */ var _s1_application_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./s1-application.model */ "Bmuo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S1Application", function() { return _s1_application_model__WEBPACK_IMPORTED_MODULE_5__["S1Application"]; });

/* harmony import */ var _s2_application_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./s2-application.model */ "LhRd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S2Application", function() { return _s2_application_model__WEBPACK_IMPORTED_MODULE_6__["S2Application"]; });

/* harmony import */ var _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type-of-document.model */ "/qS1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function() { return _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__["TypeOfDocument"]; });

/* harmony import */ var _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type-of-medium.model */ "JAX2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function() { return _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__["TypeOfMedium"]; });

/* harmony import */ var _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./type-of-reason.model */ "50w+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfReason", function() { return _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfReason"]; });

/* harmony import */ var _user_role_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-role.model */ "gYLz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return _user_role_model__WEBPACK_IMPORTED_MODULE_10__["UserRole"]; });

/* harmony import */ var _user_account_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-account.model */ "SYHT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAccount", function() { return _user_account_model__WEBPACK_IMPORTED_MODULE_11__["UserAccount"]; });

/* harmony import */ var _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./attachment-document.model */ "d215");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function() { return _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__["AttachmentDocument"]; });

/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category.model */ "eP4w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category_model__WEBPACK_IMPORTED_MODULE_13__["Category"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product.model */ "CmCX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product_model__WEBPACK_IMPORTED_MODULE_14__["Product"]; });

/* harmony import */ var _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./type-of-application.model */ "AKki");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function() { return _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__["TypeOfApplication"]; });

/* harmony import */ var _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./asc-rate.model */ "WN7m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AscRate", function() { return _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__["AscRate"]; });

/* harmony import */ var _payment_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment.model */ "HQqM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return _payment_model__WEBPACK_IMPORTED_MODULE_17__["Payment"]; });

/* harmony import */ var _country_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./country.model */ "0Kn2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return _country_model__WEBPACK_IMPORTED_MODULE_18__["Country"]; });

/* harmony import */ var _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./performance-metrics.model */ "no/g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function() { return _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__["PerformanceMetrics"]; });

/* harmony import */ var _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./or-preparation.model */ "QLCe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrPreparation", function() { return _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__["OrPreparation"]; });

/* harmony import */ var _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./or-preparation-reference.model */ "jEab");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function() { return _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__["OrPreparationReference"]; });

/* harmony import */ var _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./supporting-document.model */ "g+XZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportingDocument", function() { return _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__["SupportingDocument"]; });

/* harmony import */ var _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./application-single-media.model */ "XLGj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function() { return _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__["ApplicationSingleMedia"]; });

/* harmony import */ var _application_request_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./application-request.model */ "an1Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function() { return _application_request_model__WEBPACK_IMPORTED_MODULE_24__["ApplicationRequest"]; });

/* harmony import */ var _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./application-multimedia.model */ "JLH3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaItemsDTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaMovingDTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function() { return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaStaticDTO"]; });





























/***/ }),

/***/ "u9Of":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/fragments/form-action-buttons/form-action-buttons.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhZ21lbnRzL2Zvcm0tYWN0aW9uLWJ1dHRvbnMvZm9ybS1hY3Rpb24tYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vWPX":
/*!**************************************************!*\
  !*** ./src/app/core/models/affiliation.model.ts ***!
  \**************************************************/
/*! exports provided: Affiliation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Affiliation", function() { return Affiliation; });
class Affiliation {
}


/***/ }),

/***/ "xlTg":
/*!********************************************!*\
  !*** ./src/app/core/models/brand.model.ts ***!
  \********************************************/
/*! exports provided: Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
class Brand {
}


/***/ }),

/***/ "xpUm":
/*!**********************************************!*\
  !*** ./src/app/core/models/company.model.ts ***!
  \**********************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
}


/***/ }),

/***/ "yzT2":
/*!********************************************************************!*\
  !*** ./src/app/core/models/application-rationale-list-s2.model.ts ***!
  \********************************************************************/
/*! exports provided: ApplicationS2RationaleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationS2RationaleList", function() { return ApplicationS2RationaleList; });
class ApplicationS2RationaleList {
}


/***/ }),

/***/ "zL5c":
/*!***********************************************************************!*\
  !*** ./src/app/core/models/s1-and-s2-form-expiration-period.model.ts ***!
  \***********************************************************************/
/*! exports provided: S1AndS2FormExpirationPeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1AndS2FormExpirationPeriod", function() { return S1AndS2FormExpirationPeriod; });
class S1AndS2FormExpirationPeriod {
}


/***/ })

}]);
//# sourceMappingURL=default~affiliation-affiliation-module~announcement-content-announcement-content-module~applications~1d994fe1-es2015.js.map