(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-role-user-role-module"],{

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


/***/ })

}]);
//# sourceMappingURL=user-role-user-role-module-es2015.js.map