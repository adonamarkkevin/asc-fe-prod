!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9hFf":function(t,a,o){"use strict";o.d(a,"a",(function(){return B}));var i=o("M0ag"),l=o("sKXY"),m=o("M9IT"),c=o("Dh3D"),s=o("+0xr"),u=o("3Pt+"),d=o("0IaG"),p=o("fXoL"),f=o("dJ3e"),y=o("n4+4"),v=o("r74M"),h=o("tyNb"),g=o("kmnG"),E=o("NFeN"),S=o("ofXK"),b=o("qFsG"),x=o("d3UM"),C=o("bTqV"),M=o("FKr1"),A=function(){return["/asc/page/company/lists"]};function w(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"button",27),p["\u0275\u0275elementStart"](1,"mat-icon"),p["\u0275\u0275text"](2,"list"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," VIEW COMPANIES "),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("routerLink",p["\u0275\u0275pureFunction0"](1,A))}function I(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",28),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("value",n),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n.description," ")}}function R(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",28),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("value",n),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",n," ")}}function N(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"mat-form-field",21),p["\u0275\u0275elementStart"](1,"mat-label"),p["\u0275\u0275text"](2,"Delinquent"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"mat-select",29),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().company.delinquent=e})),p["\u0275\u0275template"](4,R,2,2,"mat-option",11),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngModel",a.company.delinquent)("compareWith",a.compareDelinquent),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",a.yesNoList)}}function k(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",28),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("value",n.status),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",null==n||null==n.status?null:n.status.replace("_"," ")," ")}}function F(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"mat-form-field",21),p["\u0275\u0275elementStart"](1,"mat-label"),p["\u0275\u0275text"](2,"Status"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"mat-select",30),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().company.status=e})),p["\u0275\u0275template"](4,k,2,2,"mat-option",11),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngModel",a.company.status),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",a.statusList)}}function P(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"mat-option",28),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("value",n),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate2"](" ",n.code," - ",n.name," ")}}function O(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",35),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).save("")})),p["\u0275\u0275elementStart"](1,"mat-icon"),p["\u0275\u0275text"](2,"save"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," SAVE "),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("disabled",!a.companyForm.valid)}}function U(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",35),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).update("")})),p["\u0275\u0275elementStart"](1,"mat-icon"),p["\u0275\u0275text"](2,"task_alt "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," UPDATE "),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("disabled",!a.companyForm.valid)}}function V(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",36),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).approve()})),p["\u0275\u0275elementStart"](1,"i",37),p["\u0275\u0275text"](2,"verified"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," APPROVE "),p["\u0275\u0275elementEnd"]()}}function L(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",36),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).reject()})),p["\u0275\u0275elementStart"](1,"i",37),p["\u0275\u0275text"](2,"unpublished"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," REJECT "),p["\u0275\u0275elementEnd"]()}}function D(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",38),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).cancel()})),p["\u0275\u0275elementStart"](1,"mat-icon"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](null!=a.company&&a.company.id?"cancel":"refresh"),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",null!=a.company&&a.company.id?"CANCEL":"RESET"," ")}}function T(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",36),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).closeModal()})),p["\u0275\u0275elementStart"](1,"i",37),p["\u0275\u0275text"](2,"close"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," CLOSE "),p["\u0275\u0275elementEnd"]()}}function q(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",1),p["\u0275\u0275elementStart"](1,"div",31),p["\u0275\u0275template"](2,O,4,1,"button",32),p["\u0275\u0275template"](3,U,4,1,"button",32),p["\u0275\u0275template"](4,V,4,0,"button",33),p["\u0275\u0275template"](5,L,4,0,"button",33),p["\u0275\u0275template"](6,D,4,2,"button",34),p["\u0275\u0275template"](7,T,4,0,"button",33),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!(null!=n.company&&n.company.id)),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==n.company?null:n.company.id),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.isFromModal&&n.showApproveRejectButton),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.isFromModal&&n.showApproveRejectButton),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",(null==n.company?null:n.company.id)||(null==n.company?null:n.company.companyName)||(null==n.company?null:n.company.companyTelephoneNo)||(null==n.company?null:n.company.companyTin)),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.isFromModal)}}function j(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",35),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).update("")})),p["\u0275\u0275elementStart"](1,"mat-icon"),p["\u0275\u0275text"](2,"task_alt "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," UPDATE "),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("disabled",!a.companyForm.valid)}}function _(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275template"](1,j,4,1,"button",32),p["\u0275\u0275elementStart"](2,"button",36),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().approve()})),p["\u0275\u0275elementStart"](3,"i",37),p["\u0275\u0275text"](4,"verified"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," APPROVE "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"button",36),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().reject()})),p["\u0275\u0275elementStart"](7,"i",37),p["\u0275\u0275text"](8,"unpublished"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](9," REJECT "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"button",36),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().closeModal()})),p["\u0275\u0275elementStart"](11,"i",37),p["\u0275\u0275text"](12,"close"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](13," CLOSE "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",null==a.company?null:a.company.id)}}var B=function(){var t=function(){function t(a,r,o,m,c,s,u,d,p,f,y){if(n(this,t),this.apiService=a,this.addressService=r,this.formBuilder=o,this.dataStorage=m,this.sweetAlertService=c,this.validateFieldService=s,this.route=u,this.router=d,this.matDialog=p,this.dialogRef=f,this.data=y,this.displayedColumns=["companyName","companyTelephoneNo","companyFaxNo","companyTin","address"],this.countryList=[],this.companyList=[],this.affiliationList=[],this.regionsList=[],this.provinceList=[],this.cityMunicipalityList=[],this.barangayList=[],this.statusList=e(i.B),this.yesNoList=e(i.H),this.company=new l.k,this.todayDate=new Date,this.notForeignAddress=!0,this.isFromModal=!1,this.isUserRegistration=!1,this.showApproveRejectButton=!1,y){if(y.dataForModal){var v=y.dataForModal;this.isFromModal=v.isFromModal,this.showApproveRejectButton=v.isUpdate,v.isUpdate?this.company=v.company:this.company.country=v.country}this.isUserRegistration=y.isUserRegistration}this.statusList.push({status:"APPROVED"},{status:"DISAPPROVED"},{status:"FOR_APPROVAL"})}return r(t,[{key:"ngOnInit",value:function(){this.currentUser=this.dataStorage.getUserAccount(),this.setFormValidator(),this.getCountries(),this.getAffiliationList(),this.id=Number(this.route.snapshot.paramMap.get("id")),0!==this.id&&this.viewApplication()}},{key:"viewApplication",value:function(){var e=this;this.apiService.findById(i.n.company,this.id).subscribe((function(t){e.company=t.responseData.data,e.getAffiliationList()}))}},{key:"getCountries",value:function(){var e=this;this.apiService.findAll(i.n.countries).subscribe((function(t){e.countryList=t.responseData.data}))}},{key:"getAffiliationList",value:function(){var e=this;this.apiService.findAll(i.n.activeMembersAffiliation).subscribe((function(t){e.affiliationList=t.responseData.data}))}},{key:"save",value:function(e){var t=this;e||(e=i.n.company),this.company.status=!this.currentUser||this.currentUser.userRole.name!==i.F.ROLE_ADMIN&&this.currentUser.userRole.name!==i.F.ROLE_SUPER_ADMIN?i.m.FOR_APPROVAL:i.m.ACTIVE,this.isFromModal&&(this.company.status=i.m.FOR_APPROVAL),this.company.delinquent=this.setDelinquent(this.company.delinquent),this.apiService.save(e,this.company).subscribe((function(e){void 0!==e&&(t.id=e.responseData.data.id,t.company=e.responseData.data,t.sweetAlertService.customSuccessMessage("Company successfully saved."),t.isFromModal&&t.dialogRef.close(t.company),t.isUserRegistration&&t.dialogRef.close(t.company))}),(function(e){t.sweetAlertService.error(e)}),(function(){t.isFromModal||t.isUserRegistration||t.router.navigate(["asc/page/company/update/",t.id])}))}},{key:"getCompany",value:function(e){var t=this;this.apiService.findById(i.n.company,e).subscribe((function(e){e&&(t.company=e.responseData.data)}))}},{key:"update",value:function(e){var t=this;e||(e=i.n.company),this.company.delinquent=this.setDelinquent(this.company.delinquent),"APPROVED"===this.company.status&&(this.company.status="ACTIVE"),this.apiService.update(e,this.company).subscribe((function(e){void 0!==e&&t.sweetAlertService.success(e)}),(function(e){t.sweetAlertService.error(e)}),(function(){t.cancel(),t.isFromModal&&t.dialogRef.close(t.company)}))}},{key:"setFormValidator",value:function(){this.companyForm=this.formBuilder.group({companyName:["",u.H.required],companyMobileNo:["",u.H.required],companyTelephoneNo:["",u.H.required],companyTelephoneNo2:["",u.H.required],membersAffiliation:["",u.H.required],contactPersonName:["",u.H.required],contactPersonEmail:["",[u.H.required,u.H.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],companyTin:["",u.H.required],country:["",u.H.required],completeAddress:["",u.H.required],voucherFund:[""],status:[""],delinquent:[""]})}},{key:"cancel",value:function(){this.isFromModal||(this.company.id?this.router.navigate(["/asc/page/company/lists"]):(this.company=new l.k,this.companyForm.markAsUntouched(),this.companyForm.markAsPristine()))}},{key:"isForeignAddress",value:function(){this.notForeignAddress=!this.notForeignAddress}},{key:"compareMembersAffiliation",value:function(e,t){if(e&&t)return e.description===t.description}},{key:"compareCountry",value:function(e,t){if(e&&t)return e.id===t.id}},{key:"compareDelinquent",value:function(e,t){if(e)return e===(t?"Yes":"No")}},{key:"approve",value:function(){this.company.status="APPROVED",this.save(i.n.approveCompany)}},{key:"reject",value:function(){this.company.status="DISAPPROVED",this.update("")}},{key:"closeModal",value:function(){this.dialogRef.close()}},{key:"setDelinquent",value:function(e){return"Yes"===e}}]),t}();return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](f.b),p["\u0275\u0275directiveInject"](y.a),p["\u0275\u0275directiveInject"](u.g),p["\u0275\u0275directiveInject"](f.c),p["\u0275\u0275directiveInject"](f.e),p["\u0275\u0275directiveInject"](v.a),p["\u0275\u0275directiveInject"](h.a),p["\u0275\u0275directiveInject"](h.b),p["\u0275\u0275directiveInject"](d.b),p["\u0275\u0275directiveInject"](d.h,8),p["\u0275\u0275directiveInject"](d.a,8))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["app-add-company"]],viewQuery:function(e,t){var n;1&e&&(p["\u0275\u0275viewQuery"](m.a,!0),p["\u0275\u0275viewQuery"](c.a,!0),p["\u0275\u0275viewQuery"](s.o,!0)),2&e&&(p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.paginator=n.first),p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.sort=n.first),p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.table=n.first))},decls:89,vars:20,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],["class","button-right","mat-raised-button","","color","primary",3,"routerLink",4,"ngIf"],[3,"formGroup"],[1,"row","fields"],["appearance","outline",1,"col-md-7"],[1,"required-field"],["matInput","","name","companyName","formControlName","companyName",3,"ngModel","ngModelChange"],["appearance","outline",1,"col-md-5"],["name","membersAffiliation","formControlName","membersAffiliation",3,"ngModel","compareWith","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"col-md-3"],["matInput","","name","companyMobileNo","placeholder","09xxxxxxxxx","formControlName","companyMobileNo","maxlength","11",3,"ngModel","ngModelChange","keydown"],["matInput","","name","companyTelephoneNo","formControlName","companyTelephoneNo","maxlength","11",3,"ngModel","ngModelChange","keydown"],["matInput","","name","companyTelephoneNo2","formControlName","companyTelephoneNo2","maxlength","11",3,"ngModel","ngModelChange","keydown"],["matInput","","name","companyTin","formControlName","companyTin",3,"ngModel","ngModelChange","keydown"],["appearance","outline",1,"col-md-6"],["matInput","","name","contactPersonName","formControlName","contactPersonName",3,"ngModel","ngModelChange"],["matInput","","type","email","name","contactPersonEmail","email","","formControlName","contactPersonEmail",3,"ngModel","ngModelChange"],["class","col-md-4","appearance","outline",4,"ngIf"],["appearance","outline",1,"col-md-4"],["name","country","formControlName","country","matNativeControl","","required","",3,"ngModel","compareWith","ngModelChange"],["appearance","outline",1,"col-md-8"],["matInput","","name","completeAddress","formControlName","completeAddress",3,"ngModel","ngModelChange"],["class","row",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"button-right",3,"routerLink"],[3,"value"],["name","delinquent","formControlName","delinquent",3,"ngModel","compareWith","ngModelChange"],["name","status","formControlName","status",3,"ngModel","ngModelChange"],[1,"col-md-12"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","class","button-red",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","",1,"button-red",3,"click"],[1,"material-icons","color__white"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form"),p["\u0275\u0275elementStart"](1,"div",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"div",2),p["\u0275\u0275elementStart"](4,"mat-label"),p["\u0275\u0275elementStart"](5,"mat-icon"),p["\u0275\u0275text"](6,"apartment"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](7," Company "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](8,w,4,2,"button",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"hr"),p["\u0275\u0275elementStart"](10,"form",4),p["\u0275\u0275elementStart"](11,"div",5),p["\u0275\u0275elementStart"](12,"h4"),p["\u0275\u0275elementStart"](13,"mat-icon"),p["\u0275\u0275text"](14,"label_important"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](15," Company Information "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"div",1),p["\u0275\u0275elementStart"](17,"mat-form-field",6),p["\u0275\u0275elementStart"](18,"mat-label"),p["\u0275\u0275text"](19,"Company Name "),p["\u0275\u0275elementStart"](20,"span",7),p["\u0275\u0275text"](21,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](22,"input",8),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.companyName=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"mat-form-field",9),p["\u0275\u0275elementStart"](24,"mat-label"),p["\u0275\u0275text"](25,"Member Affiliation "),p["\u0275\u0275elementStart"](26,"span",7),p["\u0275\u0275text"](27,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](28,"mat-select",10),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.membersAffiliation=e})),p["\u0275\u0275template"](29,I,2,2,"mat-option",11),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](30,"mat-form-field",12),p["\u0275\u0275elementStart"](31,"mat-label"),p["\u0275\u0275text"](32,"Mobile Number "),p["\u0275\u0275elementStart"](33,"span",7),p["\u0275\u0275text"](34,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](35,"input",13),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.companyMobileNo=e}))("keydown",(function(e){return t.validateFieldService.numbersOnly(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](36,"mat-form-field",12),p["\u0275\u0275elementStart"](37,"mat-label"),p["\u0275\u0275text"](38,"Telephone Number "),p["\u0275\u0275elementStart"](39,"span",7),p["\u0275\u0275text"](40,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](41,"input",14),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.companyTelephoneNo=e}))("keydown",(function(e){return t.validateFieldService.numbersOnly(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](42,"mat-form-field",12),p["\u0275\u0275elementStart"](43,"mat-label"),p["\u0275\u0275text"](44,"Alternate Telephone Number "),p["\u0275\u0275elementStart"](45,"span",7),p["\u0275\u0275text"](46,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](47,"input",15),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.companyTelephoneNo2=e}))("keydown",(function(e){return t.validateFieldService.numbersOnly(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](48,"mat-form-field",12),p["\u0275\u0275elementStart"](49,"mat-label"),p["\u0275\u0275text"](50,"TIN "),p["\u0275\u0275elementStart"](51,"span",7),p["\u0275\u0275text"](52,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](53,"input",16),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.companyTin=e}))("keydown",(function(e){return t.validateFieldService.numbersOnly(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](54,"mat-form-field",17),p["\u0275\u0275elementStart"](55,"mat-label"),p["\u0275\u0275text"](56,"Accounting Representative: "),p["\u0275\u0275elementStart"](57,"span",7),p["\u0275\u0275text"](58,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](59,"input",18),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.contactPersonName=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](60,"mat-form-field",17),p["\u0275\u0275elementStart"](61,"mat-label"),p["\u0275\u0275text"](62,"Representative's Email Address: "),p["\u0275\u0275elementStart"](63,"span",7),p["\u0275\u0275text"](64,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](65,"input",19),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.contactPersonEmail=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](66,N,5,3,"mat-form-field",20),p["\u0275\u0275template"](67,F,5,2,"mat-form-field",20),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](68,"div",5),p["\u0275\u0275elementStart"](69,"h4"),p["\u0275\u0275elementStart"](70,"mat-icon"),p["\u0275\u0275text"](71,"label_important"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](72," Address "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](73,"div",1),p["\u0275\u0275elementStart"](74,"mat-form-field",21),p["\u0275\u0275elementStart"](75,"mat-label"),p["\u0275\u0275text"](76,"Country "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](77,"mat-select",22),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.country=e})),p["\u0275\u0275template"](78,P,2,3,"mat-option",11),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](79,"mat-form-field",23),p["\u0275\u0275elementStart"](80,"mat-label"),p["\u0275\u0275text"](81,"Company Address "),p["\u0275\u0275elementStart"](82,"span",7),p["\u0275\u0275text"](83,"*"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](84,"textarea",24),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.company.completeAddress=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](85,"hr"),p["\u0275\u0275element"](86,"br"),p["\u0275\u0275template"](87,q,8,6,"div",25),p["\u0275\u0275template"](88,_,14,1,"div",26),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](8),p["\u0275\u0275property"]("ngIf",!t.isFromModal&&!t.isUserRegistration),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("formGroup",t.companyForm),p["\u0275\u0275advance"](12),p["\u0275\u0275property"]("ngModel",t.company.companyName),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.membersAffiliation)("compareWith",t.compareMembersAffiliation),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.affiliationList),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.companyMobileNo),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.companyTelephoneNo),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.companyTelephoneNo2),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.companyTin),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.contactPersonName),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.contactPersonEmail),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",("ROLE_ADMIN"===(null==t.currentUser||null==t.currentUser.userRole?null:t.currentUser.userRole.name)||"ROLE_SUPER_ADMIN"===(null==t.currentUser||null==t.currentUser.userRole?null:t.currentUser.userRole.name)||"ROLE_ENCODER"===(null==t.currentUser||null==t.currentUser.userRole?null:t.currentUser.userRole.name))&&!t.isUserRegistration),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",("ROLE_ADMIN"===(null==t.currentUser||null==t.currentUser.userRole?null:t.currentUser.userRole.name)||"ROLE_SUPER_ADMIN"===(null==t.currentUser||null==t.currentUser.userRole?null:t.currentUser.userRole.name)||"ROLE_ENCODER"===(null==t.currentUser||null==t.currentUser.userRole?null:t.currentUser.userRole.name))&&t.company.id),p["\u0275\u0275advance"](10),p["\u0275\u0275property"]("ngModel",t.company.country)("compareWith",t.compareCountry),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.countryList),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngModel",t.company.completeAddress),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",!t.isFromModal||!t.showApproveRejectButton),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.isFromModal&&t.showApproveRejectButton))},directives:[u.J,u.u,u.v,g.g,E.a,S.t,u.l,g.c,b.b,u.d,u.t,u.j,x.a,S.s,u.o,u.e,u.E,C.b,h.c,M.m],styles:[""]}),t}()},"n4+4":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var o=a("M0ag"),i=a("fXoL"),l=a("tk/3"),m=function(){var e=function(){function e(t){n(this,e),this.http=t}return r(e,[{key:"getRegions",value:function(){return this.http.get(""+o.n.regions)}},{key:"getProvinces",value:function(e){return this.http.get("".concat(o.n.provinces,"/region-id/").concat(e))}},{key:"getCityMunicipalities",value:function(e){return this.http.get("".concat(o.n.cityMunicipalities,"/province-id/").concat(e))}},{key:"getBarangays",value:function(e){return this.http.get("".concat(o.n.barangays,"/city-municipality-id/").concat(e))}},{key:"getBarangay",value:function(e){return this.http.get("".concat(o.n.barangays,"/barangay-id/").concat(e))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](l.a))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();