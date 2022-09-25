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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let AddressService = /*@__PURE__*/ (() => {
    class AddressService {
        constructor(http) {
            this.http = http;
        }
        getRegions() {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].regions}`);
        }
        getProvinces(regionId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].provinces}/region-id/${regionId}`);
        }
        getCityMunicipalities(provinceId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].cityMunicipalities}/province-id/${provinceId}`);
        }
        getBarangays(cityMunicipalityId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].barangays}/city-municipality-id/${cityMunicipalityId}`);
        }
        getBarangay(barangayId) {
            return this.http.get(`${_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].barangays}/barangay-id/${barangayId}`);
        }
    }
    AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    AddressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });
    return AddressService;
})();



/***/ })

}]);
//# sourceMappingURL=list-company-list-company-module-es2015.js.map