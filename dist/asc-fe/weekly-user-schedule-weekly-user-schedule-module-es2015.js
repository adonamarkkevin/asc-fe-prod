(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weekly-user-schedule-weekly-user-schedule-module"],{

/***/ "5h0i":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: WeeklyUserScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyUserScheduleModule", function() { return WeeklyUserScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/fragments/fragments.module */ "7Tf7");
/* harmony import */ var _weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weekly-user-schedule.component */ "aih6");
/* harmony import */ var _weekly_user_schedule_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weekly-user-schedule-routing.module */ "h8Pe");









let WeeklyUserScheduleModule = class WeeklyUserScheduleModule {
};
WeeklyUserScheduleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_7__["WeeklyUserScheduleComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _weekly_user_schedule_routing_module__WEBPACK_IMPORTED_MODULE_8__["WeeklyUserScheduleRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            app_modules_fragments_fragments_module__WEBPACK_IMPORTED_MODULE_6__["FragmentsModule"]
        ]
    })
], WeeklyUserScheduleModule);



/***/ }),

/***/ "Hgru":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-calendar-body-cell.selected {\n  background-color: #c5140c !important;\n  border-radius: 50%;\n}\n\n.drop-calendar {\n  width: 30rem;\n}\n\n.margin {\n  margin: 10px !important;\n  right: 0 !important;\n  bottom: 0 !important;\n}\n\n.delete-btn {\n  float: right !important;\n}\n\n.date-text {\n  font-size: larger;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS93ZWVrbHktdXNlci1zY2hlZHVsZS93ZWVrbHktdXNlci1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9DQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUVFLFlBQUE7QUFBRjs7QUFHQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9tYWludGVuYW5jZS93ZWVrbHktdXNlci1zY2hlZHVsZS93ZWVrbHktdXNlci1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNjNTE0MGMhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxyXG59XHJcbi5kcm9wLWNhbGVuZGFyXHJcbntcclxuICB3aWR0aDozMHJlbVxyXG59XHJcblxyXG4ubWFyZ2luIFxyXG57XHJcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZS10ZXh0IHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "Oskh":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 title\">\r\n                <mat-label>\r\n                  Weekly User Schedule\r\n                </mat-label>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <form>\r\n            <div class=\"row\" *ngIf=\"users\">\r\n                <mat-form-field class=\"col-md-5\" appearance=\"outline\">\r\n                    <mat-label>ASC Internal User</mat-label>\r\n                    <mat-select name=\"status\">\r\n                      <mat-option *ngFor=\"let user of users\" [value]=\"user\" (click)=\"onSelectUser(user)\">\r\n                         {{user.firstName + ' ' + user.lastName}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"col-md-5\" appearance=\"outline\" *ngIf=\"users\">\r\n                    <mat-calendar\r\n                        #calendar \r\n                        [minDate]=\"todayDate\" \r\n                        [hidden]=\"!selectedUser\"\r\n                        (selectedChange)=\"onCalendarUpdate($event, calendar)\"\r\n                        [dateClass]=\"isSelected(this)\"\r\n                    >\r\n                    </mat-calendar>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"mat-elevation-z8 fields\">\r\n            <table mat-table [dataSource]=\"dataSource\" mat-sort>\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef > Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                       <button class=\"button-red col-md-1 delete-btn\" mat-raised-button (click)=\"deleteDate(element?.date)\">Delete</button>\r\n                       <span class=\"date-text\">{{ convertDate(element?.date) }}</span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n            </table>\r\n            <div class=\"no-record\" [hidden]=\"selectedDates && selectedDates.length > 0\">\r\n                No record found.\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <button class=\"button-red col-md-3 margin\" [hidden]=\"selectedDates.length === 0\" mat-raised-button (click)=\"saveSelectedDates()\">Save</button>\r\n            </div>\r\n        </div>\r\n        ");

/***/ }),

/***/ "aih6":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WeeklyUserScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyUserScheduleComponent", function() { return WeeklyUserScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weekly_user_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weekly-user-schedule.component.html */ "Oskh");
/* harmony import */ var _weekly_user_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly-user-schedule.component.scss */ "Hgru");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services */ "dJ3e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");








let WeeklyUserScheduleComponent = class WeeklyUserScheduleComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.selectedDates = [];
        this.originalUserDates = [];
        this.userExistingRecord = null;
        this.displayedColumns = ['date'];
    }
    ngOnInit() {
        this.initializeUsers();
        this.todayDate = new Date();
    }
    onCalendarUpdate(e, calendar) {
        const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(e, 'yyyy-MM-dd');
        if (this.originalUserDates.find(d => d === date)) {
            return;
        }
        if (!this.selectedDates.find(e => e === date)) {
            this.selectedDates.push(date);
        }
        else {
            const index = this.selectedDates.findIndex(e => e === date);
            this.selectedDates.splice(index, 1);
        }
        this.calendar.updateTodaysDate();
        this.updateDataSource();
    }
    onSelectUser(user) {
        this.selectedUser = user;
        this.initializeUserDates(this.selectedUser);
    }
    isSelected(componentInstance) {
        return (date) => {
            var _a;
            return Boolean((_a = componentInstance.selectedDates) === null || _a === void 0 ? void 0 : _a.find((e) => Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(date, 'yyyy-MM-dd') === e))
                ? 'selected'
                : null;
        };
    }
    saveSelectedDates() {
        const payload = {
            account: this.selectedUser,
            weeklyUserScheduleDates: this.convertSelectedDates(),
            id: this.userExistingRecord ? this.userExistingRecord.id : null
        };
        if (this.userExistingRecord) {
            this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].weeklyUserSchedule, payload).subscribe(() => {
                this.initializeUserDates(this.selectedUser);
            });
        }
        else {
            this.apiService.insert(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].weeklyUserSchedule, Object.assign(Object.assign({}, payload), { weeklyUserScheduleDates: [] }), true).subscribe((e) => {
                this.apiService.update(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].weeklyUserSchedule, Object.assign(Object.assign({}, payload), { id: e.responseData.data.id })).subscribe(() => {
                    this.initializeUserDates(this.selectedUser);
                });
            });
        }
    }
    convertDate(date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(date), 'MMM/dd/yyyy');
    }
    deleteDate(date) {
        const indexOriginal = this.originalUserDates.findIndex((e) => e === date);
        if (indexOriginal !== -1) {
            const id = this.userExistingRecord.weeklyUserScheduleDates
                .find(e => Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(e.scheduleDate), 'yyyy-MM-dd') === Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(date), 'yyyy-MM-dd')).id;
            this.apiService.deleteById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].weeklyScheduledUsers, id).subscribe(() => {
                const index = this.userExistingRecord.weeklyUserScheduleDates.findIndex((e) => e.id === id);
                this.userExistingRecord.weeklyUserScheduleDates.splice(index, 1);
                this.deletionUpdate(date);
                this.originalUserDates.splice(indexOriginal, 1);
            });
        }
        else {
            this.deletionUpdate(date);
        }
    }
    deletionUpdate(date) {
        const indexSelected = this.selectedDates.findIndex((e) => e === date);
        this.selectedDates.splice(indexSelected, 1);
        this.updateDataSource();
        this.calendar.updateTodaysDate();
    }
    updateDataSource() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.selectedDates.sort((a, b) => (new Date(b).valueOf()) - (new Date(a).valueOf())).map((date) => ({ date })));
    }
    convertSelectedDates() {
        return this.selectedDates.map((e) => {
            let originalDate = null;
            if (this.userExistingRecord) {
                originalDate = this.userExistingRecord.weeklyUserScheduleDates
                    .find((c) => Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(c.scheduleDate), 'yyyy-MM-dd') === Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(e), 'yyyy-MM-dd'));
            }
            return originalDate !== null && originalDate !== void 0 ? originalDate : { scheduleDate: e };
        });
    }
    initializeUsers() {
        this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].userAccountType}/ASC_USER`).subscribe((res) => {
            this.users = res.responseData.data;
        });
    }
    clearData() {
        this.selectedDates = [];
        this.originalUserDates = [];
        this.calendar.updateTodaysDate();
        this.updateDataSource();
    }
    initializeUserDates(user) {
        this.clearData();
        this.apiService.findAll(`${_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].weeklyUserScheduleCustomSearch}?&accountId=${user.id}`).subscribe((res) => {
            if (res.data.length) {
                res = res.data[0];
                this.originalUserDates = res.weeklyUserScheduleDates.map((e) => Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(new Date(e.scheduleDate), 'yyyy-MM-dd'));
                this.selectedDates = [...this.originalUserDates];
                this.userExistingRecord = res;
                this.updateDataSource();
                this.calendar.updateTodaysDate();
            }
            else {
                this.userExistingRecord = null;
            }
        });
    }
};
WeeklyUserScheduleComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
WeeklyUserScheduleComponent.propDecorators = {
    calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['calendar',] }]
};
WeeklyUserScheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-weekly-user-schedule',
        template: _raw_loader_weekly_user_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        styles: [_weekly_user_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WeeklyUserScheduleComponent);



/***/ }),

/***/ "h8Pe":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/pages/maintenance/weekly-user-schedule/weekly-user-schedule-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WeeklyUserScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyUserScheduleRoutingModule", function() { return WeeklyUserScheduleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-user-schedule.component */ "aih6");




const routes = [
    {
        path: '',
        component: _weekly_user_schedule_component__WEBPACK_IMPORTED_MODULE_3__["WeeklyUserScheduleComponent"]
    }
];
let WeeklyUserScheduleRoutingModule = class WeeklyUserScheduleRoutingModule {
};
WeeklyUserScheduleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WeeklyUserScheduleRoutingModule);



/***/ })

}]);
//# sourceMappingURL=weekly-user-schedule-weekly-user-schedule-module-es2015.js.map