(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-company-list-company-module"], {
    /***/
    "n4+4":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/address/address.service.ts ***!
      \**********************************************************/

    /*! exports provided: AddressService */

    /***/
    function n44(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressService", function () {
        return AddressService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");

      var AddressService = /*#__PURE__*/function () {
        function AddressService(http) {
          _classCallCheck(this, AddressService);

          this.http = http;
        }

        _createClass(AddressService, [{
          key: "getRegions",
          value: function getRegions() {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].regions));
          }
        }, {
          key: "getProvinces",
          value: function getProvinces(regionId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].provinces, "/region-id/").concat(regionId));
          }
        }, {
          key: "getCityMunicipalities",
          value: function getCityMunicipalities(provinceId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].cityMunicipalities, "/province-id/").concat(provinceId));
          }
        }, {
          key: "getBarangays",
          value: function getBarangays(cityMunicipalityId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].barangays, "/city-municipality-id/").concat(cityMunicipalityId));
          }
        }, {
          key: "getBarangay",
          value: function getBarangay(barangayId) {
            return this.http.get("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].barangays, "/barangay-id/").concat(barangayId));
          }
        }]);

        return AddressService;
      }();

      AddressService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AddressService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=list-company-list-company-module-es5.js.map