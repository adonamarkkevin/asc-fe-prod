(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-company-list-company-module"],{

/***/ "n4+4":
/*!**********************************************************!*\
  !*** ./src/app/core/services/address/address.service.ts ***!
  \**********************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");




let AddressService = class AddressService {
    constructor(http) {
        this.http = http;
    }
    getRegions() {
        return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].regions}`);
    }
    getProvinces(regionId) {
        return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].provinces}/region-id/${regionId}`);
    }
    getCityMunicipalities(provinceId) {
        return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].cityMunicipalities}/province-id/${provinceId}`);
    }
    getBarangays(cityMunicipalityId) {
        return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].barangays}/city-municipality-id/${cityMunicipalityId}`);
    }
    getBarangay(barangayId) {
        return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].barangays}/barangay-id/${barangayId}`);
    }
};
AddressService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddressService);



/***/ })

}]);
//# sourceMappingURL=list-company-list-company-module-es2015.js.map