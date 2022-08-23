(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~applications-applications-module~type-of-medium-type-of-medium-module"],{

/***/ "Bv/5":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/type-of-medium/type-of-medium.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 title\">\r\n        <mat-label>\r\n          <mat-icon>devices_other</mat-icon> Type of Medium\r\n        </mat-label>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <form [formGroup]=\"typeOfMediumForm\">\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Type Of Main Document <span class=\"required-field\">*</span></mat-label>\r\n          <mat-select [(ngModel)]=\"typeOfMedium.typeOfMainDocument\" name=\"typeOfMainDocument\"\r\n            formControlName=\"typeOfMainDocument\" [compareWith]=\"compareTypeOfMainDocument\">\r\n            <mat-option *ngFor=\"let i of typeOfMainDocumentList\" [value]=\"i\">\r\n              {{i.typeOfMainDocument}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Type of Medium <span class=\"required-field\">*</span></mat-label>\r\n          <input matInput [(ngModel)]=\"typeOfMedium.description\" name=\"medium\" formControlName=\"medium\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-6\" appearance=\"outline\">\r\n          <mat-label>Type Of Clearance <span class=\"required-field\">*</span></mat-label>\r\n          <mat-select [(ngModel)]=\"typeOfMedium.typeOfClearance\" name=\"typeOfClearance\"\r\n            formControlName=\"typeOfClearance\" [compareWith]=\"compareTypeOfClearance\">\r\n            <mat-option *ngFor=\"let i of typeOfClearanceList\" [value]=\"i\">\r\n              {{i.clearanceType}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"col-md-4\" appearance=\"outline\" *ngIf=\"typeOfMedium.id\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select [(ngModel)]=\"typeOfMedium.status\" name=\"status\" formControlName=\"status\">\r\n            <mat-option *ngFor=\"let i of statusList\" [value]=\"i.status\">\r\n              {{i.status}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <b class=\"row warningMsg\" *ngIf=\"warningMsg\">\r\n        <span class=\"warning-msg\">\r\n        <b class=\"material-icons\">error_outline</b> {{warningMsg}}</span>\r\n      </b>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.singlemedia\" [checked]=\"typeOfMedium.singlemedia\"\r\n          color=\"warn\" formControlName=\"singlemedia\"><b>Single Media</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.multimedia\" [checked]=\"typeOfMedium.multimedia\"\r\n          color=\"warn\" formControlName=\"multimedia\"><b>Multimedia</b>\r\n        </mat-slide-toggle>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.multimediaMoving\"\r\n        [checked]=\"typeOfMedium.multimediaMoving\" color=\"warn\" formControlName=\"multimediaMoving\"><b>Multimedia\r\n          Moving</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.multimediaStatic\"\r\n        [checked]=\"typeOfMedium.multimediaStatic\" color=\"warn\" formControlName=\"multimediaStatic\"><b>Multimedia\r\n          Static</b>\r\n        </mat-slide-toggle>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.executionEnable\"\r\n          [checked]=\"typeOfMedium.executionEnable\" color=\"warn\" formControlName=\"executionEnable\"><b>Execution\r\n            Enable</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.languageEnable\"\r\n          [checked]=\"typeOfMedium.languageEnable\" color=\"warn\" formControlName=\"languageEnable\"><b>Language Enable</b>\r\n        </mat-slide-toggle>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.lengthEnable\" [checked]=\"typeOfMedium.lengthEnable\"\r\n          color=\"warn\" formControlName=\"lengthEnable\"><b>Length Enable</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.othersEnable\" [checked]=\"typeOfMedium.othersEnable\"\r\n          color=\"warn\" formControlName=\"othersEnable\"><b>Others Enable</b>\r\n        </mat-slide-toggle>\r\n      </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\"></div>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.sizeLengthEnable\"\r\n        [checked]=\"typeOfMedium.sizeLengthEnable\" color=\"warn\" formControlName=\"sizeLengthEnable\"><b>Size Length\r\n          Enable</b>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle class=\"col-md-4\" [(ngModel)]=\"typeOfMedium.widthEnable\" [checked]=\"typeOfMedium.widthEnable\"\r\n          color=\"warn\" formControlName=\"widthEnable\"><b>Width Enable</b>\r\n        </mat-slide-toggle>\r\n      </div>\r\n    </form>\r\n\r\n    <app-form-action-buttons [childObject]=\"typeOfMedium\" [childForm]=\"typeOfMediumForm\" (saveFunction)=\"save()\"\r\n      (updateFunction)=\"update()\" (cancelFunction)=\"resetFormValidator()\" (deleteFunction)=\"delete()\"></app-form-action-buttons>\r\n    <br>\r\n    <app-form-list [dataSource]=\"dataSource\" [displayedColumns]=\"displayedColumns\"\r\n      (selectInListFunction)=\"getTypeOfMedium()\"></app-form-list>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "cIBp":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium/type-of-medium.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TypeOfMediumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfMediumComponent", function() { return TypeOfMediumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_type_of_medium_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./type-of-medium.component.html */ "Bv/5");
/* harmony import */ var _type_of_medium_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-of-medium.component.scss */ "gcPS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models */ "sKXY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fragments */ "3swC");
/* harmony import */ var _type_of_main_document_type_of_main_document_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type-of-main-document/type-of-main-document.component */ "rJNo");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let TypeOfMediumComponent = class TypeOfMediumComponent {
    constructor(apiService, formBuilder, sweetAlertService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.sweetAlertService = sweetAlertService;
        this.displayedColumns = ['typeOfMainDocumentObject', 'description', 'enabledFields', 'status'];
        this.statusList = [..._shared__WEBPACK_IMPORTED_MODULE_8__["STATUSES"]];
        this.typeOfMedium = new _models__WEBPACK_IMPORTED_MODULE_5__["TypeOfMedium"]();
        this.typeOfMediumList = [];
        this.typeOfMainDocumentList = [];
        this.typeOfClearanceList = [];
        this.warningMsg = '';
    }
    ngOnInit() {
        this.getList();
        this.setFormValidator();
        this.initValue();
    }
    initValue() {
        this.typeOfMedium.executionEnable = false;
        this.typeOfMedium.languageEnable = false;
        this.typeOfMedium.lengthEnable = false;
        this.typeOfMedium.multimedia = false;
        this.typeOfMedium.multimediaMoving = false;
        this.typeOfMedium.multimediaStatic = false;
        this.typeOfMedium.othersEnable = false;
        this.typeOfMedium.singlemedia = false;
        this.typeOfMedium.sizeLengthEnable = false;
        this.typeOfMedium.widthEnable = false;
    }
    getList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfMedium).subscribe((res) => {
            this.typeOfMediumList = res.responseData.data;
            this.typeOfMediumList.map(val => {
                val.enabledFields = '';
                val.enabledFields = val.executionEnable ? val.enabledFields + 'Execution, ' : val.enabledFields;
                val.enabledFields = val.languageEnable ? val.enabledFields + 'Language, ' : val.enabledFields;
                val.enabledFields = val.lengthEnable ? val.enabledFields + 'Length, ' : val.enabledFields;
                val.enabledFields = val.multimedia ? val.enabledFields + 'Multimedia, ' : val.enabledFields;
                val.enabledFields = val.multimediaMoving ? val.enabledFields + 'Multimedia Moving, ' : val.enabledFields;
                val.enabledFields = val.multimediaStatic ? val.enabledFields + 'Multimedia Static, ' : val.enabledFields;
                val.enabledFields = val.singlemedia ? val.enabledFields + 'Single Media, ' : val.enabledFields;
                val.enabledFields = val.sizeLengthEnable ? val.enabledFields + 'Size Length, ' : val.enabledFields;
                val.enabledFields = val.widthEnable ? val.enabledFields + 'Width, ' : val.enabledFields;
                val.enabledFields = val.othersEnable ? val.enabledFields + 'Others' : val.enabledFields;
                // will remove excess comma and space
                val.enabledFields = val.enabledFields.endsWith(' ')
                    ? val.enabledFields.substring(0, val.enabledFields.length - 2) : val.enabledFields;
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.responseData.data);
            this.dataSource.paginator = this.formListComponent.paginator;
            this.dataSource.sort = this.formListComponent.sort;
            this.getTypeOfMainDocumentList();
            this.getTypeOfClearanceList();
        });
    }
    getTypeOfMainDocumentList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfMainDocuments).subscribe((res) => {
            this.typeOfMainDocumentList = res.responseData.data;
        });
    }
    getTypeOfClearanceList() {
        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfClearance).subscribe((res) => {
            this.typeOfClearanceList = res.responseData.data;
            console.log(this.typeOfClearanceList);
        });
    }
    validateInput() {
        this.warningMsg = '';
        if (!this.typeOfMedium.singlemedia && !this.typeOfMedium.multimedia) {
            this.warningMsg = 'Please toggle Single Media and/or Multimedia';
        }
        else if (this.typeOfMedium.multimedia && (!this.typeOfMedium.multimediaMoving && !this.typeOfMedium.multimediaStatic)) {
            this.warningMsg = 'Please toggle Moving and/or Static';
        }
        else if (this.typeOfMedium.singlemedia && !this.typeOfMedium.multimedia &&
            (this.typeOfMedium.multimediaMoving || this.typeOfMedium.multimediaStatic)) {
            this.warningMsg = 'Moving or Static is for Multimedia only';
        }
    }
    save() {
        this.validateInput();
        if (!this.warningMsg) {
            this.apiService.save(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfMedium, this.typeOfMedium).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                console.log(err);
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                this.resetFormValidator();
                this.getList();
            });
        }
    }
    getTypeOfMedium() {
        this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfMedium, this.formListComponent.idForUpdate).subscribe((res) => {
            if (res) {
                this.typeOfMedium = res.responseData.data;
            }
        });
    }
    update() {
        this.validateInput();
        if (!this.warningMsg) {
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfMedium, this.typeOfMedium).subscribe((res) => {
                if (res !== undefined) {
                    this.sweetAlertService.success(res);
                }
            }, (err) => {
                this.sweetAlertService.error(err);
            }, () => {
                // actions after subscription
                this.resetFormValidator();
                this.getList();
            });
        }
    }
    setFormValidator() {
        this.typeOfMedium.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfMediumForm = this.formBuilder.group({
            typeOfMainDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            medium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            status: [''],
            executionEnable: [''],
            languageEnable: [''],
            lengthEnable: [''],
            multimedia: [''],
            multimediaMoving: [''],
            multimediaStatic: [''],
            othersEnable: [''],
            singlemedia: [''],
            sizeLengthEnable: [''],
            widthEnable: [''],
            typeOfClearance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    resetFormValidator() {
        this.typeOfMedium = new _models__WEBPACK_IMPORTED_MODULE_5__["TypeOfMedium"]();
        this.typeOfMedium.status = _shared__WEBPACK_IMPORTED_MODULE_8__["COMMON_FUNCTION"].ACTIVE;
        this.typeOfMediumForm.markAsUntouched();
        this.typeOfMediumForm.markAsPristine();
    }
    compareTypeOfMainDocument(value, selected) {
        if (value && selected) {
            return value.typeOfMainDocument === selected.typeOfMainDocument;
        }
    }
    compareTypeOfClearance(value, selected) {
        if (value && selected) {
            return value.clearanceType === selected.clearanceType;
        }
    }
    delete() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            text: 'Are you sure you want to delete this type of medium?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.value) {
                this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_8__["ENDPOINTS"].typeOfMedium, this.typeOfMedium.id).subscribe(() => {
                    this.sweetAlertService.customSuccessMessage('Type of medium successfully deleted.');
                    this.resetFormValidator();
                    this.getList();
                });
            }
        });
    }
};
TypeOfMediumComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["SweetAlertService"] }
];
TypeOfMediumComponent.propDecorators = {
    formListComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_fragments__WEBPACK_IMPORTED_MODULE_9__["FormListComponent"],] }],
    typeOfMainDocument: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_type_of_main_document_type_of_main_document_component__WEBPACK_IMPORTED_MODULE_10__["TypeOfMainDocumentComponent"],] }]
};
TypeOfMediumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-type-of-medium',
        template: _raw_loader_type_of_medium_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_type_of_medium_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TypeOfMediumComponent);



/***/ }),

/***/ "gcPS":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/type-of-medium/type-of-medium.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".warningMsg {\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS90eXBlLW9mLW1lZGl1bS90eXBlLW9mLW1lZGl1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS90eXBlLW9mLW1lZGl1bS90eXBlLW9mLW1lZGl1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nTXNne1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=default~applications-applications-module~type-of-medium-type-of-medium-module-es2015.js.map