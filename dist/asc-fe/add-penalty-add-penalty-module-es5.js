(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-penalty-add-penalty-module"], {
    /***/
    "/qS1":
    /*!*******************************************************!*\
      !*** ./src/app/core/models/type-of-document.model.ts ***!
      \*******************************************************/

    /*! exports provided: TypeOfDocument */

    /***/
    function qS1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function () {
        return TypeOfDocument;
      });

      var TypeOfDocument = /*#__PURE__*/_createClass(function TypeOfDocument() {
        _classCallCheck(this, TypeOfDocument);
      });
      /***/

    },

    /***/
    "0Kn2":
    /*!**********************************************!*\
      !*** ./src/app/core/models/country.model.ts ***!
      \**********************************************/

    /*! exports provided: Country */

    /***/
    function Kn2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Country", function () {
        return Country;
      });

      var Country = /*#__PURE__*/_createClass(function Country() {
        _classCallCheck(this, Country);
      });
      /***/

    },

    /***/
    "50w+":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/type-of-reason.model.ts ***!
      \*****************************************************/

    /*! exports provided: TypeOfReason */

    /***/
    function w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfReason", function () {
        return TypeOfReason;
      });

      var TypeOfReason = /*#__PURE__*/_createClass(function TypeOfReason() {
        _classCallCheck(this, TypeOfReason);
      });
      /***/

    },

    /***/
    "73OC":
    /*!******************************************************!*\
      !*** ./src/app/core/models/company-penalty.model.ts ***!
      \******************************************************/

    /*! exports provided: CompanyPenalty */

    /***/
    function OC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyPenalty", function () {
        return CompanyPenalty;
      });

      var CompanyPenalty = /*#__PURE__*/_createClass(function CompanyPenalty() {
        _classCallCheck(this, CompanyPenalty);
      });
      /***/

    },

    /***/
    "AKki":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/type-of-application.model.ts ***!
      \**********************************************************/

    /*! exports provided: TypeOfApplication */

    /***/
    function AKki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function () {
        return TypeOfApplication;
      });

      var TypeOfApplication = /*#__PURE__*/_createClass(function TypeOfApplication() {
        _classCallCheck(this, TypeOfApplication);
      });
      /***/

    },

    /***/
    "Bmuo":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/s1-application.model.ts ***!
      \*****************************************************/

    /*! exports provided: S1Application */

    /***/
    function Bmuo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S1Application", function () {
        return S1Application;
      });

      var S1Application = /*#__PURE__*/_createClass(function S1Application() {
        _classCallCheck(this, S1Application);
      });
      /***/

    },

    /***/
    "CmCX":
    /*!**********************************************!*\
      !*** ./src/app/core/models/product.model.ts ***!
      \**********************************************/

    /*! exports provided: Product */

    /***/
    function CmCX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = /*#__PURE__*/_createClass(function Product() {
        _classCallCheck(this, Product);
      });
      /***/

    },

    /***/
    "EJ3x":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AddPenaltyModule */

    /***/
    function EJ3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPenaltyModule", function () {
        return AddPenaltyModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-penalty-routing.module */
      "p7Is");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _add_penalty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-penalty.component */
      "YOXF");

      var AddPenaltyModule = /*#__PURE__*/_createClass(function AddPenaltyModule() {
        _classCallCheck(this, AddPenaltyModule);
      });

      AddPenaltyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_penalty_component__WEBPACK_IMPORTED_MODULE_7__["AddPenaltyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_penalty_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddPenaltyRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]]
      })], AddPenaltyModule);
      /***/
    },

    /***/
    "HQqM":
    /*!**********************************************!*\
      !*** ./src/app/core/models/payment.model.ts ***!
      \**********************************************/

    /*! exports provided: Payment */

    /***/
    function HQqM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Payment", function () {
        return Payment;
      });
      /* harmony import */


      var _payment_method_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment-method.model */
      "piSE");

      var Payment = /*#__PURE__*/_createClass(function Payment() {
        _classCallCheck(this, Payment);

        this.paymentMethod = new _payment_method_model__WEBPACK_IMPORTED_MODULE_0__["PaymentMethod"]();
        this.filedBirForm = false;
        this.filedBirForm = false;
        this.remarks = '';
      });
      /***/

    },

    /***/
    "JAX2":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/type-of-medium.model.ts ***!
      \*****************************************************/

    /*! exports provided: TypeOfMedium */

    /***/
    function JAX2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function () {
        return TypeOfMedium;
      });

      var TypeOfMedium = /*#__PURE__*/_createClass(function TypeOfMedium() {
        _classCallCheck(this, TypeOfMedium);
      });
      /***/

    },

    /***/
    "JLH3":
    /*!*************************************************************!*\
      !*** ./src/app/core/models/application-multimedia.model.ts ***!
      \*************************************************************/

    /*! exports provided: ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */

    /***/
    function JLH3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function () {
        return ApplicationMultimedia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function () {
        return ApplicationMultimediaItemsDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function () {
        return ApplicationMultimediaMovingDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function () {
        return ApplicationMultimediaStaticDTO;
      });

      var ApplicationMultimedia = /*#__PURE__*/_createClass(function ApplicationMultimedia() {
        _classCallCheck(this, ApplicationMultimedia);
      });

      var ApplicationMultimediaItemsDTO = /*#__PURE__*/_createClass(function ApplicationMultimediaItemsDTO() {
        _classCallCheck(this, ApplicationMultimediaItemsDTO);
      });

      var ApplicationMultimediaMovingDTO = /*#__PURE__*/function (_ApplicationMultimedi) {
        _inherits(ApplicationMultimediaMovingDTO, _ApplicationMultimedi);

        var _super = _createSuper(ApplicationMultimediaMovingDTO);

        function ApplicationMultimediaMovingDTO() {
          _classCallCheck(this, ApplicationMultimediaMovingDTO);

          return _super.apply(this, arguments);
        }

        return _createClass(ApplicationMultimediaMovingDTO);
      }(ApplicationMultimedia);

      var ApplicationMultimediaStaticDTO = /*#__PURE__*/function (_ApplicationMultimedi2) {
        _inherits(ApplicationMultimediaStaticDTO, _ApplicationMultimedi2);

        var _super2 = _createSuper(ApplicationMultimediaStaticDTO);

        function ApplicationMultimediaStaticDTO() {
          _classCallCheck(this, ApplicationMultimediaStaticDTO);

          return _super2.apply(this, arguments);
        }

        return _createClass(ApplicationMultimediaStaticDTO);
      }(ApplicationMultimedia);
      /***/

    },

    /***/
    "LhRd":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/s2-application.model.ts ***!
      \*****************************************************/

    /*! exports provided: S2Application */

    /***/
    function LhRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S2Application", function () {
        return S2Application;
      });

      var S2Application = /*#__PURE__*/_createClass(function S2Application() {
        _classCallCheck(this, S2Application);
      });
      /***/

    },

    /***/
    "QLCe":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/or-preparation.model.ts ***!
      \*****************************************************/

    /*! exports provided: OrPreparation */

    /***/
    function QLCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparation", function () {
        return OrPreparation;
      });

      var OrPreparation = /*#__PURE__*/function () {
        function OrPreparation() {
          _classCallCheck(this, OrPreparation);
        }

        _createClass(OrPreparation, [{
          key: "setTotalAmounts",
          value: function setTotalAmounts(totals) {
            this.totalSales = totals.totalSales;
            this.totalAmountDue = totals.totalAmountDue;
            this.totalVat = totals.totalVat;
            this.totalWithholdingtax = totals.totalWithholdingtax;
          }
        }]);

        return OrPreparation;
      }();
      /***/

    },

    /***/
    "SYHT":
    /*!***************************************************!*\
      !*** ./src/app/core/models/user-account.model.ts ***!
      \***************************************************/

    /*! exports provided: UserAccount */

    /***/
    function SYHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAccount", function () {
        return UserAccount;
      });

      var UserAccount = /*#__PURE__*/_createClass(function UserAccount() {
        _classCallCheck(this, UserAccount);
      });
      /***/

    },

    /***/
    "WN7m":
    /*!***********************************************!*\
      !*** ./src/app/core/models/asc-rate.model.ts ***!
      \***********************************************/

    /*! exports provided: AscRate */

    /***/
    function WN7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AscRate", function () {
        return AscRate;
      });

      var AscRate = /*#__PURE__*/_createClass(function AscRate() {
        _classCallCheck(this, AscRate);
      });
      /***/

    },

    /***/
    "XLGj":
    /*!***************************************************************!*\
      !*** ./src/app/core/models/application-single-media.model.ts ***!
      \***************************************************************/

    /*! exports provided: ApplicationSingleMedia */

    /***/
    function XLGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function () {
        return ApplicationSingleMedia;
      });

      var ApplicationSingleMedia = /*#__PURE__*/_createClass(function ApplicationSingleMedia() {
        _classCallCheck(this, ApplicationSingleMedia);
      });
      /***/

    },

    /***/
    "Xln3":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/accounting/add-penalty/add-penalty.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xln3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"column\">\r\n                <div class=\"col-md-12 title\">\r\n                    <mat-label>\r\n                        {{ paymentTypeFromUrl | titlecase }} Penalties\r\n                    </mat-label>\r\n                    <button mat-raised-button class=\"button-right button-red button-center\" (click)=\"navigateToList()\">\r\n                        <i class=\"material-icons color__white\">list</i> BACK TO LIST\r\n                    </button>\r\n                </div>\r\n                <hr>\r\n\r\n                <div class=\"col-md-12\" appearance=\"outline\"\r\n                    *ngIf=\"paymentTypeFromUrl === 'brand' || paymentTypeFromUrl === 'company'\">\r\n                    <mat-label>Filename: </mat-label>\r\n                    <br>\r\n                    <input matInput [value]=\"attachmentDocument.originalFilename || objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\" disabled\r\n                        *ngIf=\"attachmentDocument.originalFilename || objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n\r\n                    <input class=\"file-upload\" type=\"file\" *ngIf=\"!attachmentDocument.originalFilename\" accept=\".pdf\"\r\n                        (change)=\"selectFile($event)\" [hidden]=\"objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n                    <br><br>\r\n                </div>\r\n                <div class=\"col-md-12\" appearance=\"outline\" *ngIf=\"paymentTypeFromUrl === 'delinquent' \">\r\n                    <ng-container *ngTemplateOutlet=\"approveDelinquent\"></ng-container>\r\n                </div>\r\n                <div class=\"col-md-12\" appearance=\"outline\"\r\n                    *ngIf=\"paymentTypeFromUrl === 'brand' || paymentTypeFromUrl === 'company' || paymentTypeFromUrl === 'delinquent' \">\r\n\r\n                    <button mat-raised-button class=\"button-red button-right\" (click)=\"viewDocument()\"\r\n                        *ngIf=\"objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n                        <i class=\"material-icons add-document\">open_in_new</i> VIEW DOCUMENT\r\n                    </button>\r\n\r\n                    &nbsp; &nbsp;\r\n\r\n                    <button mat-raised-button class=\"button-red button-right\" (click)=\"uploadProofOfPayment()\"\r\n                        [disabled]=\"!safeURLBrand||!isShowUploadButton\" *ngIf=\"isShowUploadButton\"\r\n                        [hidden]=\"objAttachmentReference?.brandPenaltyAttachmentReference || objAttachmentReference?.paymentAttachmentReference\">\r\n                        <i class=\"material-icons add-document\">upload</i> UPLOAD\r\n                    </button>\r\n\r\n                    <br><br>\r\n                    <div class=\"row col-md-12\" appearance=\"outline\"\r\n                        *ngIf=\"previewDocument==true && (\r\n                            objAttachmentReference?.brandPenaltyAttachmentReference ||\r\n                            objAttachmentReference?.paymentAttachmentReference\r\n                        )\">\r\n                        <div class=\"file-upload\">\r\n                            <object [data]=\"safeURLBrand\" type=\"application/pdf\" width=\"100%\" height=\"400\">\r\n                                <iframe [src]=\"safeURLBrand\" width=\"100%\" height=\"400\">\r\n                                    <p>This browser does not support PDF!</p>\r\n                                </iframe>\r\n                            </object>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"column\" *ngIf=\"paymentTypeFromUrl === 'brand' \">\r\n                <ng-container *ngTemplateOutlet=\"addBrandPenalty\"></ng-container>\r\n            </div>\r\n            <div class=\"column\" *ngIf=\"paymentTypeFromUrl === 'company' \">\r\n                <ng-container *ngTemplateOutlet=\"addCompanyPenalty\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<ng-template #approveDelinquent>\r\n    <div class=\"col-md-12\" style=\"padding: 0 2em;\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Company</mat-label>\r\n            <input matInput name=\"penaltyBrand\" [(ngModel)]=\"company.companyName\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Amount to Settle</mat-label>\r\n            <input class=\"numbers-input\" matInput name=\"amountDue\" [value]=\"payment?.amountDue | number : '1.2-2'\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\" readonly>\r\n        </mat-form-field>\r\n\r\n        <div class=\"mat-elevation-z8 fields\">\r\n          <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"referenceCode\">\r\n              <th mat-header-cell *matHeaderCellDef > REFERENCE CODE </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.referenceCode | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"brand\">\r\n              <th mat-header-cell *matHeaderCellDef > BRAND </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.brand?.description | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"typeOfMedium\">\r\n              <th mat-header-cell *matHeaderCellDef > TYPE OF MEDIUM </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.typeOfMedium | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"paymentStatus\">\r\n              <th mat-header-cell *matHeaderCellDef > PAYMENT STATUS </th>\r\n              <td mat-cell *matCellDef=\"let element\" (click)=\"getPaymentDetails(element)\"> {{ element?.paymentStatus?.replaceAll('_',' ') | uppercase }} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n          <div class=\"no-record\" [hidden]=\"dataSource && dataSource?.data?.length > 0\">\r\n            No record found.\r\n          </div>\r\n          <mat-paginator [pageSizeOptions]=\"[10, 20, 50]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n\r\n        <br><br>\r\n\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"addPenalty('Delinquent')\"\r\n            *ngIf=\"process==='save'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n        </button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #addBrandPenalty>\r\n    <div class=\"col-md-12\" style=\"padding: 0 2em;\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyBrand === undefined\">\r\n            <mat-label>Brand</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"brandPenalty.brand\" [ngModelOptions]=\"{standalone: true}\">\r\n                <mat-option *ngFor=\"let i of brandList\" [value]=\"i\" name=\"brand\">\r\n                    {{ i?.description | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyBrand !== undefined\">\r\n            <mat-label>Brand</mat-label>\r\n            <input matInput name=\"penaltyBrand\" [(ngModel)]=\"penaltyBrand\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Accumulated Amount Due</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"brandPenalty.amount\" [ngModelOptions]=\"{standalone: true}\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\">\r\n            <mat-label>Remarks</mat-label>\r\n            <textarea matInput name=\"remarks\" [(ngModel)]=\"brandPenalty.remarks\"\r\n                [ngModelOptions]=\"{standalone: true}\" [readonly]=\"brandPenalty?.paymentStatus === 'PAID'\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <hr *ngIf=\"process==='update'\">\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Payment Mode</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"paymentMethod.paymentType\" name=\"paymentType\"\r\n                [compareWith]=\"comparePaymentMethod\" [disabled]=\"brandPenalty?.paymentStatus === 'PAID'\">\r\n                <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" name=\"paymentType\">\r\n                    {{ i?.paymentDescription | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <!-- <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"paymentMode !== undefined\">\r\n            <mat-label>Payment Mode</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"paymentMode\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Amount Received</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"paymentMethod.amount\" [ngModelOptions]=\"{standalone: true}\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\" [readonly]=\"brandPenalty?.paymentStatus === 'PAID'\">\r\n        </mat-form-field>\r\n\r\n        <br><br>\r\n\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"addPenalty('Brand')\"\r\n            *ngIf=\"process==='save' && brandPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n        </button>\r\n        <button mat-raised-button class=\"button-right button-red button-right__approve\" (click)=\"approvePenalty()\"\r\n            *ngIf=\"process==='update' && brandPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> APPROVE\r\n        </button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #addCompanyPenalty>\r\n    <div class=\"col-md-12\" style=\"padding: 0 2em;\">\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyCompany === undefined\">\r\n            <mat-label>Company</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"companyPenalty.company\" [ngModelOptions]=\"{standalone: true}\"\r\n                [compareWith]=\"compareCompany\">\r\n                <mat-option *ngFor=\"let i of companyList\" [value]=\"i\" name=\"company\">\r\n                    {{ i?.companyName | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"penaltyCompany !== undefined\">\r\n            <mat-label>Company</mat-label>\r\n            <input matInput name=\"penaltyCompany\" [(ngModel)]=\"penaltyCompany\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"totalBalance === undefined || totalBalance === 0\">\r\n            <mat-label>Accumulated Amount Due</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"companyPenalty.penaltyAmount\"\r\n                [ngModelOptions]=\"{standalone: true}\" type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"totalBalance !== undefined && totalBalance > 0\">\r\n            <mat-label>Accumulated Amount Due</mat-label>\r\n            <input matInput name=\"totalBalance\" [(ngModel)]=\"totalBalance\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"previewRemarks === undefined || previewRemarks === ''\">\r\n            <mat-label>Remarks</mat-label>\r\n            <textarea matInput name=\"remarks\" [(ngModel)]=\"companyPenalty.remarks\" [readonly]=\"process==='update'\"\r\n                [ngModelOptions]=\"{standalone: true}\" [readonly]=\"companyPenalty?.paymentStatus === 'PAID'\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"previewRemarks !== undefined && previewRemarks !== ''\">\r\n            <mat-label>Remarks</mat-label>\r\n            <input matInput name=\"previewRemarks\" [(ngModel)]=\"previewRemarks\" [ngModelOptions]=\"{standalone: true}\"\r\n                readonly>\r\n        </mat-form-field>\r\n\r\n        <hr *ngIf=\"process==='update'\">\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Payment Mode</mat-label>\r\n            <mat-select class=\"col-md-4\" [(ngModel)]=\"paymentMethod.paymentType\" name=\"paymentType\"\r\n                [compareWith]=\"comparePaymentMethod\" [disabled]=\"companyPenalty?.paymentStatus === 'PAID'\">\r\n                <mat-option *ngFor=\"let i of paymentTypeList\" [value]=\"i\" name=\"paymentType\">\r\n                    {{ i?.paymentDescription | uppercase }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-12\" appearance=\"outline\" *ngIf=\"process==='update'\">\r\n            <mat-label>Amount Received</mat-label>\r\n            <input matInput name=\"amount\" [(ngModel)]=\"paymentMethod.amount\" [ngModelOptions]=\"{standalone: true}\"\r\n                type=\"text\" (keydown)=\"validateFieldService.numbersOnly($event)\" [readonly]=\"companyPenalty?.paymentStatus === 'PAID'\">\r\n        </mat-form-field>\r\n\r\n        <br><br>\r\n\r\n        <button mat-raised-button class=\"button-right button-red\" (click)=\"addPenalty('Company')\"\r\n            *ngIf=\"process==='save' && companyPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> SUBMIT\r\n        </button>\r\n        <button mat-raised-button class=\"button-right button-red button-right__approve\" (click)=\"approvePenalty()\"\r\n            *ngIf=\"process==='update' && companyPenalty?.paymentStatus !== 'PAID'\">\r\n            <i class=\"material-icons color__white\">task_alt</i> APPROVE\r\n        </button>\r\n\r\n    </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "YOXF":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AddPenaltyComponent */

    /***/
    function YOXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPenaltyComponent", function () {
        return AddPenaltyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_penalty_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-penalty.component.html */
      "Xln3");
      /* harmony import */


      var _add_penalty_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-penalty.component.scss */
      "iaCF");
      /* harmony import */


      var _shared_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../shared/utils/constants */
      "9Vv1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/core/models/brand-penalty.model */
      "z52K");
      /* harmony import */


      var app_core_models_company_penalty_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/core/models/company-penalty.model */
      "73OC");
      /* harmony import */


      var app_core_models_payment_method_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/core/models/payment-method.model */
      "piSE");
      /* harmony import */


      var app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/core/services/file.storage.service */
      "TMp0");
      /* harmony import */


      var app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/core/services/validate-field.service */
      "r74M");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);

      var AddPenaltyComponent = /*#__PURE__*/function () {
        function AddPenaltyComponent(router, apiService, sweetAlertService, sanitizer, fileStorageService, route, spinner, validateFieldService, dataStorageService) {
          _classCallCheck(this, AddPenaltyComponent);

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

        _createClass(AddPenaltyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            sessionStorage.removeItem('PAYMENT');
          }
        }, {
          key: "getPaymentDetails",
          value: function getPaymentDetails(elm) {
            var _a;

            if (elm === null || elm === void 0 ? void 0 : elm.paymentStatus) {
              this.router.navigate(['asc/page/accounting/update/', "".concat((_a = elm === null || elm === void 0 ? void 0 : elm.paymentStatus) === null || _a === void 0 ? void 0 : _a.toLowerCase(), "-").concat(elm.id), "delinquent-".concat(elm.id)]);
            } else {
              this.router.navigate(['asc/page/accounting/update/', "delinquent-".concat(elm.id)]);
            }
          }
        }, {
          key: "getPenalizedBrandList",
          value: function getPenalizedBrandList() {
            var _this = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brand).subscribe(function (res) {
              // this.brandList = res.responseData.data.filter(penalizedBrands => penalizedBrands.penalty);
              _this.brandList = res.responseData.data;
            });
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this2 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].company).subscribe(function (res) {
              _this2.companyList = res.responseData.data.filter(function (company) {
                return !_this2.notInSelection.includes(company.status);
              });
            });
          }
        }, {
          key: "getPaymentList",
          value: function getPaymentList() {
            var _this3 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].paymentType).subscribe(function (res) {
              _this3.paymentTypeList = res.responseData.data;

              if (_this3.currentUser.userRole.name === _shared_utils_constants__WEBPACK_IMPORTED_MODULE_3__["USER_ROLES"].ROLE_APPLICANT) {
                var creditCardIndex = _this3.paymentTypeList.findIndex(function (element) {
                  return element.paymentDescription === 'Credit Card';
                });

                _this3.paymentTypeList.splice(creditCardIndex, 1);
              }
            });
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            this.isShowUploadButton = false;

            if (event.target.files[0]) {
              this.fileSize = event.target.files[0].size;

              if (this.fileSize > 15000000) {
                this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB.");
                event.target.value = '';
                return;
              } else {
                this.isShowUploadButton = true;
                var fileURL = URL.createObjectURL(event.target.files[0]);
                this.previewDocument = true;
                this.safeURLBrand = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
                var reader = new FileReader();

                var _event$target$files = _slicedToArray(event.target.files, 1),
                    file = _event$target$files[0];

                reader.readAsDataURL(file);

                reader.onload = function () {};

                this.selectedFile = event.target.files[0];
              }
            }
          }
        }, {
          key: "addPenalty",
          value: function addPenalty() {
            var _this4 = this;

            var penaltyType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Brand';
            sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
              text: "Are you sure you want to submit this ".concat(penaltyType, " Penalty?"),
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                if (penaltyType === 'Brand') {
                  _this4.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, _this4.brandPenalty).subscribe(function (res) {
                    _this4.sweetAlertService.customSuccessMessage('Brand penalty successfully saved.');

                    _this4.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                  }, function (err) {
                    _this4.sweetAlertService.error(err);
                  });
                } else if (penaltyType === 'Company') {
                  _this4.companyPenalty.penaltyDate = new Date();

                  _this4.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties, _this4.companyPenalty).subscribe(function (res) {
                    _this4.sweetAlertService.customSuccessMessage('Company penalty successfully saved.');

                    _this4.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                  }, function (err) {
                    _this4.sweetAlertService.error(err);
                  });
                }
              }
            });
          }
        }, {
          key: "uploadProofOfPayment",
          value: function uploadProofOfPayment() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
              text: 'Are you sure you want to submit this as proof of payment?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                _this5.spinner.show();

                var attachmentType = '';

                if (_this5.paymentTypeFromUrl === 'brand') {
                  attachmentType = _shared__WEBPACK_IMPORTED_MODULE_11__["ATTACHMENT_TYPE"].BRAND_PENALTY_PAYMENT;
                } else if (_this5.paymentTypeFromUrl === 'company' || _this5.paymentTypeFromUrl === 'delinquent') {
                  attachmentType = _shared__WEBPACK_IMPORTED_MODULE_11__["ATTACHMENT_TYPE"].PAYMENT;
                }

                var params = '';
                params = '?&attachmentType=' + attachmentType + '&submissionType=' + _shared__WEBPACK_IMPORTED_MODULE_11__["SUBMISSION_TYPE"].ORIGINAL;

                _this5.fileStorageService.pushFileToStorage(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, _this5.selectedFile, params).subscribe(function (res) {
                  _this5.uploadedPaymentFile = res.responseData.data;

                  _this5.addToAttachmentDocuments(_this5.uploadedPaymentFile);

                  if (_this5.paymentTypeFromUrl === 'brand') {
                    _this5.brandPenalty.brandPenaltyAttachmentReference = _this5.uploadedPaymentFile.brandPenaltyAttachmentReference;
                    _this5.objAttachmentReference.brandPenaltyAttachmentReference = _this5.brandPenalty.brandPenaltyAttachmentReference;
                  } else if (_this5.paymentTypeFromUrl === 'company') {
                    _this5.companyPenalty.paymentAttachmentReference = _this5.uploadedPaymentFile.paymentAttachmentReference;
                    _this5.objAttachmentReference.paymentAttachmentReference = _this5.companyPenalty.paymentAttachmentReference;
                  } else if (_this5.paymentTypeFromUrl === 'delinquent') {
                    _this5.payment.paymentAttachmentReference = _this5.uploadedPaymentFile.paymentAttachmentReference;
                    _this5.objAttachmentReference.paymentAttachmentReference = _this5.payment.paymentAttachmentReference;
                  }

                  _this5.hideSpinner();

                  _this5.sweetAlertService.customSuccessMessage('Attachment successfully uploaded.');

                  _this5.selectedFile = null;

                  if (_this5.brandPenalty.brandPenaltyAttachmentReference || _this5.companyPenalty.paymentAttachmentReference || _this5.payment.paymentAttachmentReference === 'delinquent') {
                    _this5.getAttachmentDocument();
                  }
                }, function (err) {
                  _this5.hideSpinner();

                  _this5.sweetAlertService.error(err);
                }, function () {// actions after subscription
                });
              } else {
                _this5.selectedFile = null;
              }
            });
          }
        }, {
          key: "saveBrandPenalty",
          value: function saveBrandPenalty() {
            var _this6 = this;

            this.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, "/payment-type-id/").concat(this.paymentType.id, "/payment/submit"), this.brandPenalty).subscribe(function (res) {
              _this6.brandPenalty = new app_core_models_brand_penalty_model__WEBPACK_IMPORTED_MODULE_12__["BrandPenalty"]();
              _this6.paymentType = new _models__WEBPACK_IMPORTED_MODULE_9__["PaymentType"]();
              _this6.attachment = null;
              _this6.previewDocument = false;

              _this6.sweetAlertService.customSuccessMessage('Voucher fund successfully submitted.');
            }, function (err) {
              console.log(err);

              _this6.sweetAlertService.error(err);
            });
          }
        }, {
          key: "approvePenalty",
          value: function approvePenalty() {
            var _this7 = this;

            if (this.paymentTypeFromUrl === 'brand') {
              sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                text: 'Are you sure you want to approve this Brand Penalty?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                if (result.value) {
                  _this7.paymentMethod.paymentDate = new Date();
                  _this7.brandPenalty.paymentMethod = _this7.paymentMethod;
                  _this7.brandPenalty.brandPenaltyAttachmentReference = _this7.attachmentDocument.brandPenaltyAttachmentReference;
                  console.log(_this7.paymentMethod);

                  _this7.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].approveBrandPenalty, _this7.brandPenalty).subscribe(function (res) {
                    _this7.sweetAlertService.customSuccessMessage('Brand penalty approved successfully.');

                    _this7.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                  });
                } else {
                  _this7.attachment = null;
                }
              });
            } else if (this.paymentTypeFromUrl === 'company') {
              sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                text: 'Are you sure you want to approve this Company Penalty?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
              }).then(function (result) {
                var _a, _b;

                if (result.value) {
                  // this.paymentMethod.paymentDate = new Date();
                  _this7.companyPenalty.paymentMethod = _this7.paymentMethod;
                  _this7.companyPenalty.paymentAttachmentReference = _this7.attachmentDocument.paymentAttachmentReference;
                  console.log(_this7.paymentMethod);
                  console.log(_this7.companyPenalty);
                  console.log(_this7.attachmentDocument.paymentAttachmentReference);
                  _this7.companyPenaltyList[0].paymentMethod = _this7.paymentMethod;
                  _this7.companyPenaltyList[0].paymentAttachmentReference = _this7.attachmentDocument.paymentAttachmentReference;

                  _this7.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties, "/submit-penalty-payment?amountReceived=").concat(_this7.paymentMethod.amount, "&paymentTypeId=").concat((_b = (_a = _this7.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType) === null || _b === void 0 ? void 0 : _b.id), _this7.companyPenaltyList[0]).subscribe(function (res) {
                    _this7.sweetAlertService.customSuccessMessage('Company penalty approved successfully.');

                    _this7.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                  }, function (err) {
                    if (!err.error.message) {
                      err.error.message = err.error.responseMessage;
                    }

                    _this7.sweetAlertService.error(err);
                  });
                } else {
                  _this7.attachment = null;
                }
              });
            } else if (this.paymentTypeFromUrl === 'delinquent') {
              if (this.paymentMethod.amount < this.payment.amountDue) {
                this.sweetAlertService.customErrorMessage("Amount Received/Transferred is lower than Amount Due.");
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                  text: 'Are you sure you want to approve this Delinquent Company?',
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Confirm'
                }).then(function (result) {
                  if (result.value) {
                    // this.paymentMethod.paymentDate = new Date();
                    _this7.payment.paymentMethod = _this7.paymentMethod;
                    _this7.payment.amountReceive = Number(_this7.paymentMethod.amount);
                    console.log(_this7.paymentMethod);
                    console.log(_this7.payment);

                    _this7.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].approveDelinquentCompany), _this7.payment).subscribe(function (res) {
                      _this7.sweetAlertService.customSuccessMessage('Delinquent company approved successfully.');

                      _this7.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                    }, function (err) {
                      if (!err.error.message) {
                        err.error.message = err.error.responseMessage;
                      }

                      _this7.sweetAlertService.error(err);
                    });
                  } else {
                    _this7.attachment = null;
                  }
                });
              }
            }
          }
        }, {
          key: "viewPayment",
          value: function viewPayment() {
            var _this8 = this;

            var _a, _b, _c;

            if (this.paymentTypeFromUrl === 'brand') {
              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenalties, this.id).subscribe(function (res) {
                var _a;

                var obj = res.responseData.data;
                _this8.penaltyBrand = obj.brand.description;

                if (obj === null || obj === void 0 ? void 0 : obj.paymentMethod) {
                  _this8.paymentType = (_a = obj === null || obj === void 0 ? void 0 : obj.paymentMethod) === null || _a === void 0 ? void 0 : _a.paymentType;
                  _this8.paymentMethod = obj === null || obj === void 0 ? void 0 : obj.paymentMethod;
                }

                _this8.brandPenalty = obj;

                if (_this8.brandPenalty.brandPenaltyAttachmentReference) {
                  _this8.objAttachmentReference.brandPenaltyAttachmentReference = _this8.brandPenalty.brandPenaltyAttachmentReference;

                  _this8.getAttachmentDocuments();
                }
              });
            } else if (this.paymentTypeFromUrl === 'company') {
              this.apiService.findById("".concat(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties, "/company"), this.id).subscribe(function (res) {
                if (res.responseData.data) {
                  _this8.companyPenaltyList = res.responseData.data;

                  if (_this8.companyPenaltyList[0].paymentAttachmentReference) {
                    _this8.objAttachmentReference.paymentAttachmentReference = _this8.companyPenalty.paymentAttachmentReference;

                    _this8.getAttachmentDocuments();
                  }

                  _this8.penaltyCompany = _this8.companyPenaltyList[0].company.companyName;
                  _this8.totalBalance = _this8.companyPenaltyList.filter(function (filteredData) {
                    return filteredData.paymentStatus !== 'PAID';
                  }).map(function (mapped) {
                    return mapped.penaltyAmount;
                  }).reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                  }, 0);
                  _this8.previewRemarks = _this8.companyPenaltyList.filter(function (filteredData) {
                    return filteredData.paymentStatus !== 'PAID';
                  }).map(function (mapped) {
                    return mapped.remarks ? mapped.remarks + '. ' : '';
                  }).reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                  }, '');
                }
              });
            } else if (this.paymentTypeFromUrl === 'delinquent') {
              this.payment = this.dataStorageService.getPayment();
              var companyName = (_b = (_a = this.payment) === null || _a === void 0 ? void 0 : _a.applicationForm) === null || _b === void 0 ? void 0 : _b.companyName;
              this.company.companyName = companyName;
              this.getAppFormsByCompanyId((_c = this.payment) === null || _c === void 0 ? void 0 : _c.companyId);
            }
          }
        }, {
          key: "getAppFormsByCompanyId",
          value: function getAppFormsByCompanyId(companyId) {
            var _this9 = this;

            this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].getAppFormsByCompanyId + companyId).subscribe(function (res) {
              _this9.delinquentAppForms = res.responseData.data;
              _this9.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this9.delinquentAppForms);
              _this9.dataSource.paginator = _this9.paginator;
            });
          }
        }, {
          key: "getAttachmentDocuments",
          value: function getAttachmentDocuments() {
            var _this10 = this;

            var param;

            if (this.brandPenalty.brandPenaltyAttachmentReference) {
              param = "brand-penalty-attachment-reference/".concat(this.brandPenalty.brandPenaltyAttachmentReference);
            } else if (this.companyPenalty.paymentAttachmentReference) {
              param = "payment-attachment-reference/".concat(this.companyPenaltyList[0].paymentAttachmentReference);
            }

            this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].attachmentDocument, param).subscribe(function (res) {
              if (res) {
                _this10.attachmentDocument = res.responseData.data;
              }

              _this10.previewDocument = true;
              _this10.safeURLBrand = _this10.sanitizer.bypassSecurityTrustResourceUrl(_this10.attachmentDocument.fileURL);
            });
          }
        }, {
          key: "addToAttachmentDocuments",
          value: function addToAttachmentDocuments(obj) {
            this.attachmentDocument.brandPenaltyAttachmentReference = obj.brandPenaltyAttachmentReference;
            this.attachmentDocument.id = obj.id;
            this.attachmentDocument.originalFilename = obj.originalFilename;
            this.attachmentDocument.filename = obj.filename;
            this.attachmentDocument.fileExtension = obj.fileExtension;
            this.attachmentDocument.fileURL = obj.fileURL;
            this.attachmentDocument.attachmentType = obj.attachmentType;
            this.attachmentDocument.documentFormat = obj.documentFormat;
          }
        }, {
          key: "hideSpinner",
          value: function hideSpinner() {
            var _this11 = this;

            setTimeout(function () {
              _this11.spinner.hide();
            }, 1);
          }
        }, {
          key: "getAttachmentDocument",
          value: function getAttachmentDocument() {
            var _this12 = this;

            this.spinner.show();

            if (this.paymentTypeFromUrl === 'brand') {
              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].brandPenaltyAttachmentDocument, this.brandPenalty.brandPenaltyAttachmentReference).subscribe(function (res) {
                if (res) {
                  _this12.attachmentDocument = res;
                }

                _this12.hideSpinner();
              }, function (err) {
                _this12.hideSpinner();

                console.error(err);
              });
            } else {
              var attachmentReference = '';

              if (this.paymentTypeFromUrl === 'company') {
                attachmentReference = this.companyPenalty.paymentAttachmentReference;
              } else if (this.paymentTypeFromUrl === 'delinquent') {
                attachmentReference = this.payment.paymentAttachmentReference;
              }

              this.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].paymentAttachmentReference, attachmentReference).subscribe(function (res) {
                var _a;

                if (res) {
                  _this12.attachmentDocument = (_a = res === null || res === void 0 ? void 0 : res.responseData) === null || _a === void 0 ? void 0 : _a.data;
                }

                _this12.hideSpinner();
              }, function (err) {
                _this12.hideSpinner();

                console.error(err);
              });
            }
          }
        }, {
          key: "viewDocument",
          value: function viewDocument() {
            if (this.uploadedPaymentFile) {
              window.open(this.uploadedPaymentFile.fileURL);
            } else {
              window.open(this.attachmentDocument.fileURL);
            }
          }
        }, {
          key: "comparePaymentMethod",
          value: function comparePaymentMethod(value, selected) {
            if (value && selected) {
              return value.paymentDescription === selected.paymentDescription;
            }
          }
        }, {
          key: "compareCompany",
          value: function compareCompany(value, selected) {
            if (value && selected) {
              return value.id === selected.id;
            }
          }
        }, {
          key: "navigateToList",
          value: function navigateToList() {
            var _this13 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
              text: 'Are you sure you want to go back to payment list?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then(function (result) {
              if (result.value) {
                if (_this13.paymentTypeFromUrl === 'brand') {
                  _this13.router.navigate(['asc/page/accounting/payments/', 'brand-penalties']);
                } else if (_this13.paymentTypeFromUrl === 'company') {
                  _this13.router.navigate(['asc/page/accounting/payments/', 'company-penalties']);
                } else if (_this13.paymentTypeFromUrl === 'delinquent') {
                  _this13.router.navigate(['asc/page/accounting/payments/', 'delinquent-companies']);
                }
              }
            });
          }
        }, {
          key: "updatePayment",
          value: function updatePayment() {
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_11__["ENDPOINTS"].companyPenalties, this.companyPenalty).subscribe(function (res) {
              console.log('Update companyPenalties: ', res);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return AddPenaltyComponent;
      }();

      AddPenaltyComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: app_core_services_file_storage_service__WEBPACK_IMPORTED_MODULE_15__["FileStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerService"]
        }, {
          type: app_core_services_validate_field_service__WEBPACK_IMPORTED_MODULE_16__["ValidateFieldService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"]
        }];
      };

      AddPenaltyComponent.propDecorators = {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
            "static": false
          }]
        }],
        safeURLBrand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      AddPenaltyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-penalty',
        template: _raw_loader_add_penalty_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_penalty_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddPenaltyComponent);
      /***/
    },

    /***/
    "an1Z":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/application-request.model.ts ***!
      \**********************************************************/

    /*! exports provided: ApplicationRequest */

    /***/
    function an1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function () {
        return ApplicationRequest;
      });

      var ApplicationRequest = /*#__PURE__*/_createClass(function ApplicationRequest() {
        _classCallCheck(this, ApplicationRequest);
      });
      /***/

    },

    /***/
    "bN3y":
    /*!**********************************************!*\
      !*** ./src/app/core/models/profile.model.ts ***!
      \**********************************************/

    /*! exports provided: Profile */

    /***/
    function bN3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return Profile;
      });

      var Profile = /*#__PURE__*/_createClass(function Profile() {
        _classCallCheck(this, Profile);
      });
      /***/

    },

    /***/
    "d215":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/attachment-document.model.ts ***!
      \**********************************************************/

    /*! exports provided: AttachmentDocument */

    /***/
    function d215(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function () {
        return AttachmentDocument;
      });

      var AttachmentDocument = /*#__PURE__*/_createClass(function AttachmentDocument() {
        _classCallCheck(this, AttachmentDocument);
      });
      /***/

    },

    /***/
    "eP4w":
    /*!***********************************************!*\
      !*** ./src/app/core/models/category.model.ts ***!
      \***********************************************/

    /*! exports provided: Category */

    /***/
    function eP4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return Category;
      });

      var Category = /*#__PURE__*/_createClass(function Category() {
        _classCallCheck(this, Category);
      });
      /***/

    },

    /***/
    "g+XZ":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/supporting-document.model.ts ***!
      \**********************************************************/

    /*! exports provided: SupportingDocument */

    /***/
    function gXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportingDocument", function () {
        return SupportingDocument;
      });

      var SupportingDocument = /*#__PURE__*/_createClass(function SupportingDocument() {
        _classCallCheck(this, SupportingDocument);
      });
      /***/

    },

    /***/
    "gYLz":
    /*!************************************************!*\
      !*** ./src/app/core/models/user-role.model.ts ***!
      \************************************************/

    /*! exports provided: UserRole */

    /***/
    function gYLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return UserRole;
      });

      var UserRole = /*#__PURE__*/_createClass(function UserRole() {
        _classCallCheck(this, UserRole);
      });
      /***/

    },

    /***/
    "iaCF":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function iaCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".column {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.button-right__approve {\n  margin: 0;\n}\n\n.button-center {\n  margin: -5px auto;\n}\n\n.numbers-input {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hY2NvdW50aW5nL2FkZC1wZW5hbHR5L2FkZC1wZW5hbHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUVJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2FjY291bnRpbmcvYWRkLXBlbmFsdHkvYWRkLXBlbmFsdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5idXR0b24tcmlnaHRfX2FwcHJvdmUge1xyXG4gICAgLy8gbWFyZ2luOiAtMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAtNXB4IGF1dG87XHJcbn1cclxuXHJcbi5udW1iZXJzLWlucHV0e1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "intf":
    /*!***************************************************!*\
      !*** ./src/app/core/models/payment-type.model.ts ***!
      \***************************************************/

    /*! exports provided: PaymentType */

    /***/
    function intf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentType", function () {
        return PaymentType;
      });

      var PaymentType = /*#__PURE__*/_createClass(function PaymentType() {
        _classCallCheck(this, PaymentType);
      });
      /***/

    },

    /***/
    "jEab":
    /*!***************************************************************!*\
      !*** ./src/app/core/models/or-preparation-reference.model.ts ***!
      \***************************************************************/

    /*! exports provided: OrPreparationReference */

    /***/
    function jEab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function () {
        return OrPreparationReference;
      });

      var OrPreparationReference = /*#__PURE__*/_createClass(function OrPreparationReference() {
        _classCallCheck(this, OrPreparationReference);
      });
      /***/

    },

    /***/
    "no/g":
    /*!**********************************************************!*\
      !*** ./src/app/core/models/performance-metrics.model.ts ***!
      \**********************************************************/

    /*! exports provided: PerformanceMetrics */

    /***/
    function noG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function () {
        return PerformanceMetrics;
      });

      var PerformanceMetrics = /*#__PURE__*/_createClass(function PerformanceMetrics() {
        _classCallCheck(this, PerformanceMetrics);
      });
      /***/

    },

    /***/
    "p7Is":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/pages/accounting/add-penalty/add-penalty-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: AddPenaltyRoutingModule */

    /***/
    function p7Is(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPenaltyRoutingModule", function () {
        return AddPenaltyRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_penalty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-penalty.component */
      "YOXF");

      var routes = [{
        path: '',
        component: _add_penalty_component__WEBPACK_IMPORTED_MODULE_3__["AddPenaltyComponent"]
      }];

      var AddPenaltyRoutingModule = /*#__PURE__*/_createClass(function AddPenaltyRoutingModule() {
        _classCallCheck(this, AddPenaltyRoutingModule);
      });

      AddPenaltyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddPenaltyRoutingModule);
      /***/
    },

    /***/
    "piSE":
    /*!*****************************************************!*\
      !*** ./src/app/core/models/payment-method.model.ts ***!
      \*****************************************************/

    /*! exports provided: PaymentMethod */

    /***/
    function piSE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentMethod", function () {
        return PaymentMethod;
      });

      var PaymentMethod = /*#__PURE__*/_createClass(function PaymentMethod() {
        _classCallCheck(this, PaymentMethod);
      });
      /***/

    },

    /***/
    "sKXY":
    /*!**************************************!*\
      !*** ./src/app/core/models/index.ts ***!
      \**************************************/

    /*! exports provided: Affiliation, Brand, Company, PaymentType, Profile, S1Application, S2Application, TypeOfDocument, TypeOfMedium, TypeOfReason, UserRole, UserAccount, AttachmentDocument, Category, Product, TypeOfApplication, AscRate, Payment, Country, PerformanceMetrics, OrPreparation, OrPreparationReference, SupportingDocument, ApplicationSingleMedia, ApplicationRequest, ApplicationMultimedia, ApplicationMultimediaItemsDTO, ApplicationMultimediaMovingDTO, ApplicationMultimediaStaticDTO */

    /***/
    function sKXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _affiliation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./affiliation.model */
      "vWPX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Affiliation", function () {
        return _affiliation_model__WEBPACK_IMPORTED_MODULE_0__["Affiliation"];
      });
      /* harmony import */


      var _brand_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./brand.model */
      "xlTg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Brand", function () {
        return _brand_model__WEBPACK_IMPORTED_MODULE_1__["Brand"];
      });
      /* harmony import */


      var _company_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company.model */
      "xpUm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return _company_model__WEBPACK_IMPORTED_MODULE_2__["Company"];
      });
      /* harmony import */


      var _payment_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-type.model */
      "intf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaymentType", function () {
        return _payment_type_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"];
      });
      /* harmony import */


      var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile.model */
      "bN3y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return _profile_model__WEBPACK_IMPORTED_MODULE_4__["Profile"];
      });
      /* harmony import */


      var _s1_application_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./s1-application.model */
      "Bmuo");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "S1Application", function () {
        return _s1_application_model__WEBPACK_IMPORTED_MODULE_5__["S1Application"];
      });
      /* harmony import */


      var _s2_application_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./s2-application.model */
      "LhRd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "S2Application", function () {
        return _s2_application_model__WEBPACK_IMPORTED_MODULE_6__["S2Application"];
      });
      /* harmony import */


      var _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./type-of-document.model */
      "/qS1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfDocument", function () {
        return _type_of_document_model__WEBPACK_IMPORTED_MODULE_7__["TypeOfDocument"];
      });
      /* harmony import */


      var _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./type-of-medium.model */
      "JAX2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfMedium", function () {
        return _type_of_medium_model__WEBPACK_IMPORTED_MODULE_8__["TypeOfMedium"];
      });
      /* harmony import */


      var _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./type-of-reason.model */
      "50w+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfReason", function () {
        return _type_of_reason_model__WEBPACK_IMPORTED_MODULE_9__["TypeOfReason"];
      });
      /* harmony import */


      var _user_role_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-role.model */
      "gYLz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return _user_role_model__WEBPACK_IMPORTED_MODULE_10__["UserRole"];
      });
      /* harmony import */


      var _user_account_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-account.model */
      "SYHT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserAccount", function () {
        return _user_account_model__WEBPACK_IMPORTED_MODULE_11__["UserAccount"];
      });
      /* harmony import */


      var _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./attachment-document.model */
      "d215");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AttachmentDocument", function () {
        return _attachment_document_model__WEBPACK_IMPORTED_MODULE_12__["AttachmentDocument"];
      });
      /* harmony import */


      var _category_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./category.model */
      "eP4w");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return _category_model__WEBPACK_IMPORTED_MODULE_13__["Category"];
      });
      /* harmony import */


      var _product_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./product.model */
      "CmCX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return _product_model__WEBPACK_IMPORTED_MODULE_14__["Product"];
      });
      /* harmony import */


      var _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./type-of-application.model */
      "AKki");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TypeOfApplication", function () {
        return _type_of_application_model__WEBPACK_IMPORTED_MODULE_15__["TypeOfApplication"];
      });
      /* harmony import */


      var _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./asc-rate.model */
      "WN7m");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AscRate", function () {
        return _asc_rate_model__WEBPACK_IMPORTED_MODULE_16__["AscRate"];
      });
      /* harmony import */


      var _payment_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./payment.model */
      "HQqM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Payment", function () {
        return _payment_model__WEBPACK_IMPORTED_MODULE_17__["Payment"];
      });
      /* harmony import */


      var _country_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./country.model */
      "0Kn2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Country", function () {
        return _country_model__WEBPACK_IMPORTED_MODULE_18__["Country"];
      });
      /* harmony import */


      var _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./performance-metrics.model */
      "no/g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PerformanceMetrics", function () {
        return _performance_metrics_model__WEBPACK_IMPORTED_MODULE_19__["PerformanceMetrics"];
      });
      /* harmony import */


      var _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./or-preparation.model */
      "QLCe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OrPreparation", function () {
        return _or_preparation_model__WEBPACK_IMPORTED_MODULE_20__["OrPreparation"];
      });
      /* harmony import */


      var _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./or-preparation-reference.model */
      "jEab");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OrPreparationReference", function () {
        return _or_preparation_reference_model__WEBPACK_IMPORTED_MODULE_21__["OrPreparationReference"];
      });
      /* harmony import */


      var _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./supporting-document.model */
      "g+XZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SupportingDocument", function () {
        return _supporting_document_model__WEBPACK_IMPORTED_MODULE_22__["SupportingDocument"];
      });
      /* harmony import */


      var _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./application-single-media.model */
      "XLGj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationSingleMedia", function () {
        return _application_single_media_model__WEBPACK_IMPORTED_MODULE_23__["ApplicationSingleMedia"];
      });
      /* harmony import */


      var _application_request_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./application-request.model */
      "an1Z");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationRequest", function () {
        return _application_request_model__WEBPACK_IMPORTED_MODULE_24__["ApplicationRequest"];
      });
      /* harmony import */


      var _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./application-multimedia.model */
      "JLH3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimedia", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimedia"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaItemsDTO", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaItemsDTO"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaMovingDTO", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaMovingDTO"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApplicationMultimediaStaticDTO", function () {
        return _application_multimedia_model__WEBPACK_IMPORTED_MODULE_25__["ApplicationMultimediaStaticDTO"];
      });
      /***/

    },

    /***/
    "vWPX":
    /*!**************************************************!*\
      !*** ./src/app/core/models/affiliation.model.ts ***!
      \**************************************************/

    /*! exports provided: Affiliation */

    /***/
    function vWPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Affiliation", function () {
        return Affiliation;
      });

      var Affiliation = /*#__PURE__*/_createClass(function Affiliation() {
        _classCallCheck(this, Affiliation);
      });
      /***/

    },

    /***/
    "xlTg":
    /*!********************************************!*\
      !*** ./src/app/core/models/brand.model.ts ***!
      \********************************************/

    /*! exports provided: Brand */

    /***/
    function xlTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Brand", function () {
        return Brand;
      });

      var Brand = /*#__PURE__*/_createClass(function Brand() {
        _classCallCheck(this, Brand);
      });
      /***/

    },

    /***/
    "xpUm":
    /*!**********************************************!*\
      !*** ./src/app/core/models/company.model.ts ***!
      \**********************************************/

    /*! exports provided: Company */

    /***/
    function xpUm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Company", function () {
        return Company;
      });

      var Company = /*#__PURE__*/_createClass(function Company() {
        _classCallCheck(this, Company);
      });
      /***/

    },

    /***/
    "z52K":
    /*!****************************************************!*\
      !*** ./src/app/core/models/brand-penalty.model.ts ***!
      \****************************************************/

    /*! exports provided: BrandPenalty */

    /***/
    function z52K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandPenalty", function () {
        return BrandPenalty;
      });

      var BrandPenalty = /*#__PURE__*/_createClass(function BrandPenalty() {
        _classCallCheck(this, BrandPenalty);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=add-penalty-add-penalty-module-es5.js.map