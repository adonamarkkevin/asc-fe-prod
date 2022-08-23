(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-penalty-add-penalty-module"],{

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

/***/ "73OC":
/*!******************************************************!*\
  !*** ./src/app/core/models/company-penalty.model.ts ***!
  \******************************************************/
/*! exports provided: CompanyPenalty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPenalty", function() { return CompanyPenalty; });
class CompanyPenalty {
}


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

/***/ "EJ3x":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddPenaltyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPenaltyModule", function() { return AddPenaltyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-penalty-routing.module */ "p7Is");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _add_penalty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-penalty.component */ "YOXF");








let AddPenaltyModule = class AddPenaltyModule {
};
AddPenaltyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_penalty_component__WEBPACK_IMPORTED_MODULE_7__["AddPenaltyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddPenaltyRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        ]
    })
], AddPenaltyModule);



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

/***/ "Xln3":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/add-penalty/add-penalty.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"column\">\r\n                <div class=\"col-md-12 title\">\r\n                    <mat-label>\r\n                        {{ paymentTypeFromUrl | titlecase }} Penalties\r\n                    </mat-label>\r\n                    <button mat-raised-button class=\"button-right button-red button-center\" (click)=\"navigateToList()\">\r\n                        <i class=\"material-icons color__white\">list</i> BACK TO LIST\r\n                    </button>\r\n                </div>\r\n                <hr>\r\n\r\n                <div class=\"col-md-12\" appearance=\"outline\"\r\n                    *ngIf=\"paymentTypeFromUrl === 'brand' || paymentTypeFromUrl === 'company'\">\r\n                    <mat-label>Filename: </mat-label>\r\n                    <br>\r\n                    <input matInput [value]=\"attachmentDocument.originalFilename || objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\" disabled\r\n                        *ngIf=\"attachmentDocument.originalFilename || objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n\r\n                    <input class=\"file-upload\" type=\"file\" *ngIf=\"!attachmentDocument.originalFilename\" accept=\".pdf\"\r\n                        (change)=\"selectFile($event)\" [hidden]=\"objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n                    <br><br>\r\n                </div>\r\n                <div class=\"col-md-12\" appearance=\"outline\" *ngIf=\"paymentTypeFromUrl === 'delinquent' \">\r\n                    <ng-container *ngTemplateOutlet=\"approveDelinquent\"></ng-container>\r\n                </div>\r\n                <div class=\"col-md-12\" appearance=\"outline\"\r\n                    *ngIf=\"paymentTypeFromUrl === 'brand' || paymentTypeFromUrl === 'company' || paymentTypeFromUrl === 'delinquent' \">\r\n\r\n                    <button mat-raised-button class=\"button-red button-right\" (click)=\"viewDocument()\"\r\n                        *ngIf=\"objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n                        <i class=\"material-icons add-document\">open_in_new</i> VIEW DOCUMENT\r\n                    </button>\r\n\r\n                    &nbsp; &nbsp;\r\n\r\n                    <button mat-raised-button class=\"button-red button-right\" (click)=\"uploadProofOfPayment()\"\r\n                        [disabled]=\"!safeURLBrand||!isShowUploadButton\" *ngIf=\"isShowUploadButton\"\r\n                        [hidden]=\"objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n                        <i class=\"material-icons add-document\">upload</i> UPLOAD\r\n                    </button>\r\n\r\n                    <br><br>\r\n                    <div class=\"row col-md-12\" appearance=\"outline\"\r\n                        *ngIf=\"previewDocument==true && (\r\n                            objAttachmentReference?.brandPenaltyAttachmentReference ||\r\n                            objAttachmentReference?.paymentAttachmentReference\r\n                        )\">\r\n                        <div class=\"file-upload\">\r\n                            <object [data]=\"safeURLBrand\" type=\"application/pdf\" width=\"100%\" height=\"400\">\r\n                                <iframe [src]=\"safeURLBrand\" width=\"100%\" height=\"400\">\r\n                                    <p>This browser does not support PDF!</p>\r\n                                </iframe>\r\n                            </object>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"column\" *ngIf=\"paymentTypeFromUrl === 'brand' \">\r\n                <ng-container *ngTemplateOutlet=\"addBrandPenalty\"></ng-container>\r\n            </div>\r\n            <div class=\"column\" *ngIf=\"paymentTypeFromUrl === 'company' \">\r\n                <ng-container *ngTemplateOutlet=\"addCompanyPenalty\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<ng-template #approveDelinquent>\r\n    <div class=\"col-md-12\" style=\"padding: 0 2em;\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Company</mat-label>\r\n            <input matInput name=\"penaltyBrand\" [(ngModel)]=\"company.companyName\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Amount to Settle</mat-label>\r\n            <input class=\"numbers-input\" matInput name=\"amountDue\" [value]=\"payment?.amountDue | number : '1.2-2'\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\" readonly>\r\n        </mat-form-field>\r\n\r\n        <div class=\"mat-elevation-z8 fields\">\r\n          <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"referenceCode\">\r\n              <th mat-header-cell *matHeaderCellDef > REFERENCE CODE </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.referenceCode | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"brand\">\r\n              <th mat-header-cell *matHeaderCellDef > BRAND </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.brand?.description | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"typeOfMedium\">\r\n              <th mat-header-cell *matHeaderCellDef > TYPE OF MEDIUM </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.typeOfMedium | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"paymentStatus\">\r\n              <th mat-header-cell *matHeaderCellDef > PAYMENT STATUS </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.paymentStatus?.replaceAll('_',' ') | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n          <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n            No record found.\r\n          </div>\r\n          <mat-paginator [pageSizeOptions]=\"[10, 20, 50]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n\r\n        <br><br>\r\n\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"addPenalty('Delinquent')\"\r\n            *ngIf=\"process==='save'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n        </button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #addBrandPenalty>\r\n    <div class=\"col-md-12\" style=\"padding: 0 2em;\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyBrand === undefined\">\r\n            <mat-label>Brand</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"brandPenalty.brand\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-option *ngFor=\"let i of brandList\" [value]=\"i\" name=\"brand\">\r\n                    {{ i?.description | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyBrand !== undefined\">\r\n            <mat-label>Brand</mat-label>\r\n            <input matInput name=\"penaltyBrand\" [(ngModel)]=\"penaltyBrand\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Accumulated Amount Due</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"brandPenalty.amount\" [ngModelOptions]=\"{standalone: true}\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Remarks</mat-label>\r\n            <textarea matInput name=\"remarks\" [(ngModel)]=\"brandPenalty.remarks\"\r\n                [ngModelOptions]=\"{standalone: true}\" [readonly]=\"brandPenalty?.paymentStatus === 'PAID'\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <hr *ngIf=\"process==='update'\">\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Payment Mode</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"paymentMethod.paymentType\" name=\"paymentType\"\r\n                [compareWith]=\"comparePaymentMethod\" [disabled]=\"brandPenalty?.paymentStatus === 'PAID'\">\r\n                <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" name=\"paymentType\">\r\n                    {{ i?.paymentDescription | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <!-- <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"paymentMode !== undefined\">\r\n            <mat-label>Payment Mode</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"paymentMode\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Amount Received</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"paymentMethod.amount\" [ngModelOptions]=\"{standalone: true}\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\" [readonly]=\"brandPenalty?.paymentStatus === 'PAID'\">\r\n        </mat-form-field>\r\n\r\n        <br><br>\r\n\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"addPenalty('Brand')\"\r\n            *ngIf=\"process==='save' && brandPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n        </button>\r\n        <button mat-raised-button class=\"button-right button-red button-right__approve\" (click)=\"approvePenalty()\"\r\n            *ngIf=\"process==='update' && brandPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> APPROVE\r\n        </button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #addCompanyPenalty>\r\n    <div class=\"col-md-12\" style=\"padding: 0 2em;\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyCompany === undefined\">\r\n            <mat-label>Company</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"companyPenalty.company\" [ngModelOptions]=\"{standalone: true}\"\r\n                [compareWith]=\"compareCompany\">\r\n                <mat-option *ngFor=\"let i of companyList\" [value]=\"i\" name=\"company\">\r\n                    {{ i?.companyName | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyCompany !== undefined\">\r\n            <mat-label>Company</mat-label>\r\n            <input matInput name=\"penaltyCompany\" [(ngModel)]=\"penaltyCompany\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"totalBalance === undefined || totalBalance === 0\">\r\n            <mat-label>Accumulated Amount Due</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"companyPenalty.penaltyAmount\"\r\n                [ngModelOptions]=\"{standalone: true}\" type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"totalBalance !== undefined && totalBalance > 0\">\r\n            <mat-label>Accumulated Amount Due</mat-label>\r\n            <input matInput name=\"totalBalance\" [(ngModel)]=\"totalBalance\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"previewRemarks === undefined || previewRemarks === ''\">\r\n            <mat-label>Remarks</mat-label>\r\n            <textarea matInput name=\"remarks\" [(ngModel)]=\"companyPenalty.remarks\" [readonly]=\"process==='update'\"\r\n                [ngModelOptions]=\"{standalone: true}\" [readonly]=\"companyPenalty?.paymentStatus === 'PAID'\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"previewRemarks !== undefined && previewRemarks !== ''\">\r\n            <mat-label>Remarks</mat-label>\r\n            <input matInput name=\"previewRemarks\" [(ngModel)]=\"previewRemarks\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <hr *ngIf=\"process==='update'\">\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Payment Mode</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"paymentMethod.paymentType\" name=\"paymentType\"\r\n                [compareWith]=\"comparePaymentMethod\" [disabled]=\"companyPenalty?.paymentStatus === 'PAID'\">\r\n                <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" name=\"paymentType\">\r\n                    {{ i?.paymentDescription | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Amount Received</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"paymentMethod.amount\" [ngModelOptions]=\"{standalone: true}\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\" [readonly]=\"companyPenalty?.paymentStatus === 'PAID'\">\r\n        </mat-form-field>\r\n\r\n        <br><br>\r\n\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"addPenalty('Company')\"\r\n            *ngIf=\"process==='save' && companyPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n        </button>\r\n        <button mat-raised-button class=\"button-right button-red button-right__approve\" (click)=\"approvePenalty()\"\r\n            *ngIf=\"process==='update' && companyPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> APPROVE\r\n        </button>\r\n\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "YOXF":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddPenaltyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPenaltyComponent", function() { return AddPenaltyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_penalty_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-penalty.component.html */ "Xln3");
/* harmony import */ var _add_penalty_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-penalty.component.scss */ "iaCF");
/* harmony import */ var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/utils/constants */ "9Vv1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/models/brand-penalty.model */ "z52K");
/* harmony import */ var app_core_models_company_penalty_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/models/company-penalty.model */ "73OC");
/* harmony import */ var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/models/payment-method.model */ "piSE");
/* harmony import */ var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/services/file.storage.service */ "TMp0");
/* harmony import */ var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/core/services/validate-field.service */ "r74M");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);



















let AddPenaltyComponent = class AddPenaltyComponent {
    constructor(router, apiService, sweetAlertService, sanitizer, fileStorageService, route, spinner, validateFieldService, dataStorageService) {
        this.router = router;
        this.apiService = apiService;
        this.sweetAlertService = sweetAlertService;
        this.sanitizer = sanitizer;
        this.fileStorageService = fileStorageService;
        this.route = route;
        this.spinner = spinner;
        this.validateFieldService = validateFieldService;
        this.dataStorageService = dataStorageService;
        this.displayedColumns = ['referenceCode', 'brand', 'typeOfMedium', 'paymentStatus'];
        this.brandPenalty = new app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_12__["BrandPenalty"]();
        this.companyPenalty = new app_core_models_company_penalty_model__WEBPACK_IMPORTED_MODULE_13__["CompanyPenalty"]();
        this.paymentType = new _models__WEBPACK_IMPORTED_MODULE_9__["PaymentType"]();
        this.attachmentDocument = new _models__WEBPACK_IMPORTED_MODULE_9__["AttachmentDocument"]();
        this.paymentMethod = new app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_14__["PaymentMethod"]();
        this.company = new _models__WEBPACK_IMPORTED_MODULE_9__["Company"]();
        this.objAttachmentReference = {
            brandPenaltyAttachmentReference: '',
            paymentAttachmentReference: ''
        };
        this.paymentTypeList = [];
        this.brandList = [];
        this.companyList = [];
        this.companyPenaltyList = [];
        this.delinquentAppForms = [];
        this.notInSelection = ['INACTIVE', 'DISAPPROVED'];
        this.previewDocument = false;
        this.process = 'save';
        this.paymentTypeFromUrl = '';
        this.approveDelinquent = false;
        this.isShowUploadButton = false;
    }
    ngOnInit() {
        this.currentUser = this.dataStorageService.getUserAccount();
        this.getPenalizedBrandList();
        this.getCompanyList();
        this.getPaymentList();
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.paymentTypeFromUrl = this.route.snapshot.paramMap.get('type');
        if (this.id !== 0) {
            this.process = 'update';
            this.viewPayment();
        }
    }
    ngOnDestroy() {
        sessionStorage.removeItem('PAYMENT');
    }
    getPaymentDetails(elm) {
        var _a;
        if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
            this.router.navigate(['asc/page/accounting/update/', `${(_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase()}-${elm.id}`, `delinquent-${elm.id}`]);
        }
        else {
            this.router.navigate(['asc/page/accounting/update/', `delinquent-${elm.id}`]);
        }
    }
    getPenalizedBrandList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brand).subscribe((res) => {
            // this.brandList = res.responseData.data.filter(penalizedBrands => penalizedBrands.penalty);
            this.brandList = res.responseData.data;
        });
    }
    getCompanyList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].company).subscribe((res) => {
            this.companyList = res.responseData.data.filter((company) => !this.notInSelection.includes(company.status));
        });
    }
    getPaymentList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].paymentType).subscribe((res) => {
            this.paymentTypeList = res.responseData.data;
            if (this.currentUser.userRole.name === _shared_utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_APPLICANT) {
                const creditCardIndex = this.paymentTypeList
                    .findIndex((element) => element.paymentDescription === 'Credit Card');
                this.paymentTypeList.splice(creditCardIndex, 1);
            }
        });
    }
    selectFile(event) {
        this.isShowUploadButton = false;
        if (event.target.files[0]) {
            this.fileSize = event.target.files[0].size;
            if (this.fileSize > 15000000) {
                this.sweetAlertService.customErrorMessage(`Attachments' total file size should not exceed 15MB.`);
                event.target.value = '';
                return;
            }
            else {
                this.isShowUploadButton = true;
                const fileURL = URL.createObjectURL(event.target.files[0]);
                this.previewDocument = true;
                this.safeURLBrand = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                const reader = new FileReader();
                const [file] = event.target.files;
                reader.readAsDataURL(file);
                reader.onload = () => {
                };
                this.selectedFile = event.target.files[0];
            }
        }
    }
    addPenalty(penaltyType = 'Brand') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
            text: `Are you sure you want to submit this ${penaltyType} Penalty?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                if (penaltyType === 'Brand') {
                    this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, this.brandPenalty).subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage('Brand penalty successfully saved.');
                        this.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                    }, (err) => {
                        this.sweetAlertService.error(err);
                    });
                }
                else if (penaltyType === 'Company') {
                    this.companyPenalty.penaltyDate = new Date();
                    this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties, this.companyPenalty).subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage('Company penalty successfully saved.');
                        this.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                    }, (err) => {
                        this.sweetAlertService.error(err);
                    });
                }
            }
        });
    }
    uploadProofOfPayment() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
            text: 'Are you sure you want to submit this as proof of payment?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.spinner.show();
                let attachmentType = '';
                if (this.paymentTypeFromUrl === 'brand') {
                    attachmentType = _shared__WEBPACK_IMPORTED_MODULE_11__["ATTACHMENT_TYPE"].BRAND_PENALTY_PAYMENT;
                }
                else if (this.paymentTypeFromUrl === 'company' || this.paymentTypeFromUrl === 'delinquent') {
                    attachmentType = _shared__WEBPACK_IMPORTED_MODULE_11__["ATTACHMENT_TYPE"].PAYMENT;
                }
                let params = '';
                params = '?&attachmentType=' + attachmentType + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_11__["SUBMISSION_TYPE"].ORIGINAL;
                this.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, this.selectedFile, params)
                    .subscribe((res) => {
                    this.uploadedPaymentFile = res.responseData.data;
                    this.addToAttachmentDocuments(this.uploadedPaymentFile);
                    if (this.paymentTypeFromUrl === 'brand') {
                        this.brandPenalty.brandPenaltyAttachmentReference = this.uploadedPaymentFile.brandPenaltyAttachmentReference;
                        this.objAttachmentReference.brandPenaltyAttachmentReference = this.brandPenalty.brandPenaltyAttachmentReference;
                    }
                    else if (this.paymentTypeFromUrl === 'company') {
                        this.companyPenalty.paymentAttachmentReference = this.uploadedPaymentFile.paymentAttachmentReference;
                        this.objAttachmentReference.paymentAttachmentReference = this.companyPenalty.paymentAttachmentReference;
                    }
                    else if (this.paymentTypeFromUrl === 'delinquent') {
                        this.payment.paymentAttachmentReference = this.uploadedPaymentFile.paymentAttachmentReference;
                        this.objAttachmentReference.paymentAttachmentReference = this.payment.paymentAttachmentReference;
                    }
                    this.hideSpinner();
                    this.sweetAlertService.customSuccessMessage('Attachment successfully uploaded.');
                    this.selectedFile = null;
                    if (this.brandPenalty.brandPenaltyAttachmentReference || this.companyPenalty.paymentAttachmentReference
                        || this.payment.paymentAttachmentReference === 'delinquent') {
                        this.getAttachmentDocument();
                    }
                }, (err) => {
                    this.hideSpinner();
                    this.sweetAlertService.error(err);
                }, () => {
                    // actions after subscription
                });
            }
            else {
                this.selectedFile = null;
            }
        });
    }
    saveBrandPenalty() {
        this.apiService.save(`${_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties}/payment-type-id/${this.paymentType.id}/payment/submit`, this.brandPenalty)
            .subscribe((res) => {
            this.brandPenalty = new app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_12__["BrandPenalty"]();
            this.paymentType = new _models__WEBPACK_IMPORTED_MODULE_9__["PaymentType"]();
            this.attachment = null;
            this.previewDocument = false;
            this.sweetAlertService.customSuccessMessage('Voucher fund successfully submitted.');
        }, (err) => {
            console.log(err);
            this.sweetAlertService.error(err);
        });
    }
    approvePenalty() {
        if (this.paymentTypeFromUrl === 'brand') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                text: 'Are you sure you want to approve this Brand Penalty?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                if (result.value) {
                    this.paymentMethod.paymentDate = new Date();
                    this.brandPenalty.paymentMethod = this.paymentMethod;
                    this.brandPenalty.brandPenaltyAttachmentReference = this.attachmentDocument.brandPenaltyAttachmentReference;
                    console.log(this.paymentMethod);
                    this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].approveBrandPenalty, this.brandPenalty).subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage('Brand penalty approved successfully.');
                        this.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                    });
                }
                else {
                    this.attachment = null;
                }
            });
        }
        else if (this.paymentTypeFromUrl === 'company') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                text: 'Are you sure you want to approve this Company Penalty?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then((result) => {
                var _a, _b;
                if (result.value) {
                    // this.paymentMethod.paymentDate = new Date();
                    this.companyPenalty.paymentMethod = this.paymentMethod;
                    this.companyPenalty.paymentAttachmentReference = this.attachmentDocument.paymentAttachmentReference;
                    console.log(this.paymentMethod);
                    console.log(this.companyPenalty);
                    console.log(this.attachmentDocument.paymentAttachmentReference);
                    this.companyPenaltyList[0].paymentMethod = this.paymentMethod;
                    this.companyPenaltyList[0].paymentAttachmentReference = this.attachmentDocument.paymentAttachmentReference;
                    this.apiService.save(`${_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties}/submit-penalty-payment?amountReceived=${this.paymentMethod.amount}&paymentTypeId=${(_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.id}`, this.companyPenaltyList[0]).subscribe((res) => {
                        this.sweetAlertService.customSuccessMessage('Company penalty approved successfully.');
                        this.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                    }, err => {
                        if (!err.error.message) {
                            err.error.message = err.error.responseMessage;
                        }
                        this.sweetAlertService.error(err);
                    });
                }
                else {
                    this.attachment = null;
                }
            });
        }
        else if (this.paymentTypeFromUrl === 'delinquent') {
            if (this.paymentMethod.amount < this.payment.amountDue) {
                this.sweetAlertService.customErrorMessage(`Amount Received/Transferred is lower than Amount Due.`);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                    text: 'Are you sure you want to approve this Delinquent Company?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                }).then((result) => {
                    if (result.value) {
                        // this.paymentMethod.paymentDate = new Date();
                        this.payment.paymentMethod = this.paymentMethod;
                        this.payment.amountReceive = Number(this.paymentMethod.amount);
                        console.log(this.paymentMethod);
                        console.log(this.payment);
                        this.apiService.save(`${_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].approveDelinquentCompany}`, this.payment).subscribe((res) => {
                            this.sweetAlertService.customSuccessMessage('Delinquent company approved successfully.');
                            this.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                        }, err => {
                            if (!err.error.message) {
                                err.error.message = err.error.responseMessage;
                            }
                            this.sweetAlertService.error(err);
                        });
                    }
                    else {
                        this.attachment = null;
                    }
                });
            }
        }
    }
    viewPayment() {
        var _a, _b, _c;
        if (this.paymentTypeFromUrl === 'brand') {
            this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, this.id).subscribe((res) => {
                var _a;
                const obj = res.responseData.data;
                this.penaltyBrand = obj.brand.description;
                if (obj === null || obj === void 0 ? void 0 : obj.paymentMethod) {
                    this.paymentType = (_a = obj === null || obj === void 0 ? void 0 : obj.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType;
                    this.paymentMethod = obj === null || obj === void 0 ? void 0 : obj.paymentMethod;
                }
                this.brandPenalty = obj;
                if (this.brandPenalty.brandPenaltyAttachmentReference) {
                    this.objAttachmentReference.brandPenaltyAttachmentReference = this.brandPenalty.brandPenaltyAttachmentReference;
                    this.getAttachmentDocuments();
                }
            });
        }
        else if (this.paymentTypeFromUrl === 'company') {
            this.apiService.findById(`${_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties}/company`, this.id).subscribe((res) => {
                if (res.responseData.data) {
                    this.companyPenaltyList = res.responseData.data;
                    if (this.companyPenaltyList[0].paymentAttachmentReference) {
                        this.objAttachmentReference.paymentAttachmentReference = this.companyPenalty.paymentAttachmentReference;
                        this.getAttachmentDocuments();
                    }
                    this.penaltyCompany = this.companyPenaltyList[0].company.companyName;
                    this.totalBalance = this.companyPenaltyList.filter(filteredData => filteredData.paymentStatus !== 'PAID')
                        .map(mapped => mapped.penaltyAmount).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
                    this.previewRemarks = this.companyPenaltyList.filter(filteredData => filteredData.paymentStatus !== 'PAID')
                        .map(mapped => mapped.remarks ? mapped.remarks + '. ' : '')
                        .reduce((previousValue, currentValue) => previousValue + currentValue, '');
                }
            });
        }
        else if (this.paymentTypeFromUrl === 'delinquent') {
            this.payment = this.dataStorageService.getPayment();
            const companyName = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.companyName;
            this.company.companyName = companyName;
            this.getAppFormsByCompanyId((_c = this.payment) === null || _c === void 0 ? void 0 : _c.companyId);
        }
    }
    getAppFormsByCompanyId(companyId) {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].getAppFormsByCompanyId + companyId).subscribe((res) => {
            this.delinquentAppForms = res.responseData.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.delinquentAppForms);
            this.dataSource.paginator = this.paginator;
        });
    }
    getAttachmentDocuments() {
        let param;
        if (this.brandPenalty.brandPenaltyAttachmentReference) {
            param = `brand-penalty-attachment-reference/${this.brandPenalty.brandPenaltyAttachmentReference}`;
        }
        else if (this.companyPenalty.paymentAttachmentReference) {
            param = `payment-attachment-reference/${this.companyPenaltyList[0].paymentAttachmentReference}`;
        }
        this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, param).subscribe((res) => {
            if (res) {
                this.attachmentDocument = res.responseData.data;
            }
            this.previewDocument = true;
            this.safeURLBrand = this.sanitizer.bypassSecurityTrustResourceUrl(this.attachmentDocument.fileURL);
        });
    }
    addToAttachmentDocuments(obj) {
        this.attachmentDocument.brandPenaltyAttachmentReference = obj.brandPenaltyAttachmentReference;
        this.attachmentDocument.id = obj.id;
        this.attachmentDocument.originalFilename = obj.originalFilename;
        this.attachmentDocument.filename = obj.filename;
        this.attachmentDocument.fileExtension = obj.fileExtension;
        this.attachmentDocument.fileURL = obj.fileURL;
        this.attachmentDocument.attachmentType = obj.attachmentType;
        this.attachmentDocument.documentFormat = obj.documentFormat;
    }
    hideSpinner() {
        setTimeout(() => {
            this.spinner.hide();
        }, 1);
    }
    getAttachmentDocument() {
        this.spinner.show();
        if (this.paymentTypeFromUrl === 'brand') {
            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenaltyAttachmentDocument, this.brandPenalty.brandPenaltyAttachmentReference).subscribe((res) => {
                if (res) {
                    this.attachmentDocument = res;
                }
                this.hideSpinner();
            }, (err) => {
                this.hideSpinner();
                console.error(err);
            });
        }
        else {
            let attachmentReference = '';
            if (this.paymentTypeFromUrl === 'company') {
                attachmentReference = this.companyPenalty.paymentAttachmentReference;
            }
            else if (this.paymentTypeFromUrl === 'delinquent') {
                attachmentReference = this.payment.paymentAttachmentReference;
            }
            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].paymentAttachmentReference, attachmentReference).subscribe((res) => {
                var _a;
                if (res) {
                    this.attachmentDocument = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
                }
                this.hideSpinner();
            }, (err) => {
                this.hideSpinner();
                console.error(err);
            });
        }
    }
    viewDocument() {
        if (this.uploadedPaymentFile) {
            window.open(this.uploadedPaymentFile.fileURL);
        }
        else {
            window.open(this.attachmentDocument.fileURL);
        }
    }
    comparePaymentMethod(value, selected) {
        if (value && selected) {
            return value.paymentDescription === selected.paymentDescription;
        }
    }
    compareCompany(value, selected) {
        if (value && selected) {
            return value.id === selected.id;
        }
    }
    navigateToList() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
            text: 'Are you sure you want to go back to payment list?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                if (this.paymentTypeFromUrl === 'brand') {
                    this.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                }
                else if (this.paymentTypeFromUrl === 'company') {
                    this.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                }
                else if (this.paymentTypeFromUrl === 'delinquent') {
                    this.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                }
            }
        });
    }
    updatePayment() {
        this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties, this.companyPenalty).subscribe(res => {
            console.log('Update companyPenalties: ', res);
        }, err => {
            console.log(err);
        });
    }
};
AddPenaltyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerService"] },
    { type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_16__["ValidateFieldService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"] }
];
AddPenaltyComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false },] }],
    safeURLBrand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
AddPenaltyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-penalty',
        template: _raw_loader_add_penalty_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_penalty_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPenaltyComponent);



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

/***/ "iaCF":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.button-right__approve {\n  margin: 0;\n}\n\n.button-center {\n  margin: -5px auto;\n}\n\n.numbers-input {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2FkZC1wZW5hbHR5L2FkZC1wZW5hbHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnRpbmcvYWRkLXBlbmFsdHkvYWRkLXBlbmFsdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5idXR0b24tcmlnaHRfX2FwcHJvdmUge1xyXG4gICAgLy8gbWFyZ2luOiAtMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAtNXB4IGF1dG87XHJcbn1cclxuXHJcbi5udW1iZXJzLWlucHV0e1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4iXX0= */");

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

/***/ "p7Is":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: AddPenaltyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPenaltyRoutingModule", function() { return AddPenaltyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_penalty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-penalty.component */ "YOXF");




const routes = [
    {
        path: '',
        component: _add_penalty_component__WEBPACK_IMPORTED_MODULE_3__["AddPenaltyComponent"]
    }
];
let AddPenaltyRoutingModule = class AddPenaltyRoutingModule {
};
AddPenaltyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddPenaltyRoutingModule);



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

/***/ "z52K":
/*!****************************************************!*\
  !*** ./src/app/core/models/brand-penalty.model.ts ***!
  \****************************************************/
/*! exports provided: BrandPenalty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPenalty", function() { return BrandPenalty; });
class BrandPenalty {
}


/***/ })

}]);
//# sourceMappingURL=add-penalty-add-penalty-module-es2015.js.map