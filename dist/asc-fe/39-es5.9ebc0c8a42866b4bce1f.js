!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"/+ax":function(t,r,a){"use strict";a.r(r),a.d(r,"OrPreparationModule",(function(){return q}));var i=a("ofXK"),l=a("tyNb"),c=function(){function e(){n(this,e),this.totalSales=0,this.totalVat=0,this.totalWithholdingtax=0,this.totalAmountDue=0}return o(e,[{key:"setTotalValues",value:function(e){var t=this;console.log("totalValues:  ",e);var n=0,r=0,o=0;e.filter((function(e){n+=e.amountDue,r+=e.vat,o+=e.amountReceive,e.withholdingTax,t.totalAmountDue=n,t.totalSales=o,t.totalVat=r,t.totalWithholdingtax=t.totalWithholdingtax}))}}]),e}(),s=a("3Pt+"),m=a("+0xr"),f=a("3swC"),p=a("sKXY"),u=a("M0ag"),d=a("za27"),v=a("PSD3"),h=a.n(v),y=a("fXoL"),g=a("dJ3e"),b=a("JqCM"),S=a("kmnG"),R=a("qFsG"),P=a("d3UM"),C=a("TPGS"),M=a("bTqV"),A=a("DeKZ"),E=a("FKr1"),w=a("Qu3c");function L(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"mat-option",28),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](n);var e=t.$implicit;return y["\u0275\u0275nextContext"]().setCompanyDetails(e)})),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;y["\u0275\u0275property"]("value",r),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",r.companyName," ")}}function O(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-option",29),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;y["\u0275\u0275property"]("value",n),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",n.description," ")}}function x(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-option",29),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;y["\u0275\u0275property"]("value",n.referenceCode),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",n.referenceCode," ")}}function N(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"span"),y["\u0275\u0275element"](1,"br"),y["\u0275\u0275element"](2,"br"),y["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"button",30),y["\u0275\u0275listener"]("click",(function(){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().addReceiptReference()})),y["\u0275\u0275elementStart"](1,"i",26),y["\u0275\u0275text"](2,"save"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](3," Add Receipt Reference "),y["\u0275\u0275elementEnd"]()}}function F(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"ul"),y["\u0275\u0275elementStart"](1,"li"),y["\u0275\u0275text"](2),y["\u0275\u0275elementStart"](3,"span",31),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](n);var e=t.$implicit;return y["\u0275\u0275nextContext"]().removeReferenceCode(e)})),y["\u0275\u0275text"](4,"close"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate1"](" ",r.reference," ")}}var I,D,T,j=[{path:"",component:(I=function(){function t(r,o,a,i){n(this,t),this.apiService=r,this.formBuilder=o,this.sweetAlertService=a,this.spinner=i,this.displayedColumns=["officialReceiptNo","typeOfMediumDescription","officialReceiptReferences","status","deleteIcon"],this.statusList=e(u.A),this.orPreparation=new p.l,this.orPreparationReference=new p.m,this.orPreparationList=[],this.typeOfMediumList=[],this.officialReceiptReferenceList=[],this.availableReferenceCodeList=[],this.companyList=[],this.report=new d.a,this.totalAmts=new Array,this.totalAmounts=new c}return o(t,[{key:"ngOnInit",value:function(){this.getList(),this.setFormValidator(),this.getTypeOfMedium(),this.getCompanyList(),this.getAvailableReferenceCode()}},{key:"getList",value:function(){var e=this;this.getAvailableReferenceCode(),this.apiService.findAll(u.n.officialReceipt).subscribe((function(t){e.orPreparationList=t.responseData.data,e.orPreparationList=e.orPreparationList.map((function(e){return Object.assign(Object.assign({},e),{officialReceiptReferencesValue:e.officialReceiptReferences.reduce((function(e,t){return e?e+", "+(null==t?void 0:t.reference):null==t?void 0:t.reference}),"")})})),e.dataSource=new m.p(e.orPreparationList),e.dataSource.paginator=e.formListComponent.paginator,e.dataSource.sort=e.formListComponent.sort}))}},{key:"addReceiptReference",value:function(){var e=this;console.log("prep => ",this.orPreparationReference),this.orPreparation.voucherControlNumber&&this.officialReceiptReferenceList.length>=6||this.officialReceiptReferenceList.length>=9?this.sweetAlertService.customErrorMessage("Max input limit reached"):this.officialReceiptReferenceList.filter((function(t){return t.reference===e.orPreparationReference.reference.trim()})).length?this.sweetAlertService.customErrorMessage("Reference code already in the list"):this.apiService.findByParam(u.n.orPreparationRefCodeCheck,this.orPreparationReference.reference).subscribe((function(t){var n,r;if(null===(n=null==t?void 0:t.responseData)||void 0===n?void 0:n.data){var o=null===(r=null==t?void 0:t.responseData)||void 0===r?void 0:r.data[0];e.apiService.findByParam(u.n.paymentDetailsByAppformId,o.id).subscribe((function(t){console.log("form : ",t),t&&(e.totalAmts.push(t.responseData.data),e.totalAmounts.setTotalValues(e.totalAmts)),console.log("totals : ",e.totalAmounts)})),e.officialReceiptReferenceList.push(e.orPreparationReference),e.orPreparationReference.amount=o.amount,e.orPreparationReference=new p.m,e.officialReceiptReferenceList.filter((function(e){}))}else e.sweetAlertService.customErrorMessage(null==t?void 0:t.responseMessage)}),(function(t){e.sweetAlertService.error(t)}))}},{key:"removeReferenceCode",value:function(e){this.officialReceiptReferenceList=this.officialReceiptReferenceList.filter((function(t){return t.reference!==e.reference.trim()})),console.log("remove ref : ",e),console.log("totalAmts",this.totalAmts),this.totalAmts=this.totalAmts.filter((function(t){return t.applicationForm.referenceCode!==e.reference.trim()})),console.log("totalamts",this.totalAmts),this.totalAmounts.setTotalValues(this.totalAmts),console.log("total amounts : ",this.totalAmounts)}},{key:"getAvailableReferenceCode",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?this.apiService.findByParam(u.n.availableReferenceCode,t).subscribe((function(e){console.log(e)})):this.apiService.findAll(u.n.availableReferenceCode).subscribe((function(t){console.log(t),e.availableReferenceCodeList=t}))}},{key:"saveOrUpdate",value:function(){var e,t=this;this.orPreparation.id=(null===(e=this.orPreparation)||void 0===e?void 0:e.id)?this.orPreparation.id:0,this.orPreparation.officialReceiptReferences=this.officialReceiptReferenceList,console.log("orPrep",this.orPreparation),this.apiService.findByParam(u.n.orPreparationORNumberCheck,this.orPreparation.officialReceiptNo).subscribe((function(e){var n;e.responseData.data&&!(null===(n=t.orPreparation)||void 0===n?void 0:n.id)?t.sweetAlertService.customErrorMessage(e.responseMessage):t.apiService.save(u.n.orPreparation+"/submit",t.orPreparation).subscribe((function(e){void 0!==e&&t.sweetAlertService.success(e)}),(function(e){t.sweetAlertService.error(e)}),(function(){t.resetFormValidator(),t.getList()}))}),(function(e){return t.sweetAlertService.error(e)}))}},{key:"cancel",value:function(){var e=this;h.a.fire({text:"Are you sure you want to cancel this Official Receipt Preparation?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then((function(t){t.value&&(e.orPreparation=e.formListComponent.elementObject,e.orPreparation.officialReceiptReferences=null,e.apiService.save(u.n.orPreparation+"/cancel",e.orPreparation).subscribe((function(t){void 0!==t&&e.sweetAlertService.success(t)}),(function(t){e.sweetAlertService.error(t)}),(function(){e.resetFormValidator(),e.getList()})))}))}},{key:"getOrPreparation",value:function(){var e=this;console.log("get:: =>"),this.apiService.findById(u.n.officialReceipt,this.formListComponent.idForUpdate).subscribe((function(t){t&&(e.orPreparation=t.responseData.data,console.log("OR PREP => ",t),e.officialReceiptReferenceList=e.orPreparation.officialReceiptReferences,e.officialReceiptReferenceList.filter((function(t){e.apiService.findByParam(u.n.orPreparationRefCodeCheck,t.reference).subscribe((function(t){var n,r=null===(n=null==t?void 0:t.responseData)||void 0===n?void 0:n.data[0];e.apiService.findByParam(u.n.paymentDetailsByAppformId,r.id).subscribe((function(t){var n;e.totalAmts.push(null===(n=null==t?void 0:t.responseData)||void 0===n?void 0:n.data)}))}))})))}))}},{key:"getCompanyList",value:function(){var e=this;this.apiService.findAll(u.n.activeCompanies).subscribe((function(t){e.companyList=t.responseData.data}),(function(e){}))}},{key:"setCompanyDetails",value:function(e){this.orPreparation.companyName=e.companyName,this.orPreparation.companyTin=e.companyTin,this.orPreparation.companyAddress="["+e.country.code+" - "+e.country.name+"] "+e.completeAddress}},{key:"setFormValidator",value:function(){this.orPreparationForm=this.formBuilder.group({officialReceiptNo:["",s.H.required],typeOfMedium:["",s.H.required],amount:[""],officialReceiptReference:[""],voucherControlNumber:[""],businessStyle:[""],fullPaymentOf:[""],controlNumber:[""],companyName:[""],companyTin:[""],companyAddress:[""],totalAmount:[""]})}},{key:"resetFormValidator",value:function(){this.orPreparation=new p.l,this.officialReceiptReferenceList=[],this.orPreparationForm.markAsUntouched(),this.orPreparationForm.markAsPristine()}},{key:"getTypeOfMedium",value:function(){var t=this;this.typeOfMediumList=[],this.apiService.findAll(u.n.typeOfMediumSingleMedia).subscribe((function(n){t.apiService.findAll(u.n.typeOfMediumMultiMediaMoving).subscribe((function(r){t.apiService.findAll(u.n.typeOfMediumMultiMediaMoving).subscribe((function(o){t.typeOfMediumList=[].concat(e(n.responseData.data),e(r.responseData.data),e(o.responseData.data)),t.typeOfMediumList=e(new Map(t.typeOfMediumList.map((function(e){return[e.id,e]}))).values())}))}))}),(function(e){console.log(e)}))}},{key:"compareList",value:function(e,t){if(e&&t)return e.id===t.id}},{key:"printOr",value:function(e){e.id?(this.report.filename="ASC_Receipt",this.report.format="pdf",this.report.module="Receipt",this.report.params={officialReceiptId:e.id},this.apiService.printReport(u.n.generateReports,this.report).subscribe((function(e){var t=new Blob([e],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n)}))):this.sweetAlertService.customErrorMessage("Please select data first...")}}]),t}(),I.\u0275fac=function(e){return new(e||I)(y["\u0275\u0275directiveInject"](g.b),y["\u0275\u0275directiveInject"](s.g),y["\u0275\u0275directiveInject"](g.e),y["\u0275\u0275directiveInject"](b.c))},I.\u0275cmp=y["\u0275\u0275defineComponent"]({type:I,selectors:[["app-or-preparation"]],viewQuery:function(e,t){var n;1&e&&y["\u0275\u0275viewQuery"](f.a,!0),2&e&&y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.formListComponent=n.first)},decls:75,vars:23,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[3,"formGroup"],["appearance","outline",1,"col-md-6"],[1,"required-field"],["matInput","","name","officialReceiptNo","formControlName","officialReceiptNo",3,"ngModel","ngModelChange"],["appearance","outline",1,"col-md-12"],[3,"value","click",4,"ngFor","ngForOf"],["matInput","","name","companyName","formControlName","companyName",3,"ngModel","ngModelChange"],["matInput","","name","companyTin","formControlName","companyTin",3,"ngModel","ngModelChange"],["matInput","","name","companyAddress","formControlName","companyAddress",3,"ngModel","ngModelChange"],["matInput","","name","businessStyle","formControlName","businessStyle",3,"ngModel","ngModelChange"],["matInput","","name","controlNumber","formControlName","controlNumber",3,"ngModel","ngModelChange"],["matInput","","name","amount","formControlName","amount",3,"ngModel","ngModelChange"],["matInput","","name","totalAmount","formControlName","totalAmount","readonly",""],["formControlName","typeOfMedium","name","typeOfMedium",3,"ngModel","compareWith","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","officialReceiptReference","name","officialReceiptReference",3,"ngModel","compareWith","ngModelChange"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["matInput","","readonly",""],[4,"ngFor","ngForOf"],[1,"button-content"],[3,"childObject","childForm","saveFunction","updateFunction","cancelFunction"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"material-icons","color__white"],[3,"dataSource","displayedColumns","selectInListFunction","deleteInListFunction"],[3,"value","click"],[3,"value"],["mat-raised-button","","color","primary",3,"click"],["matTooltip","Remove Reference Code",1,"material-icons",3,"click"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"form"),y["\u0275\u0275elementStart"](1,"div",0),y["\u0275\u0275elementStart"](2,"div",1),y["\u0275\u0275elementStart"](3,"div",2),y["\u0275\u0275elementStart"](4,"mat-label"),y["\u0275\u0275text"](5," Official Receipt Preparation "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](6,"hr"),y["\u0275\u0275elementStart"](7,"form",3),y["\u0275\u0275elementStart"](8,"div",1),y["\u0275\u0275elementStart"](9,"mat-form-field",4),y["\u0275\u0275elementStart"](10,"mat-label"),y["\u0275\u0275text"](11,"Official Receipt Number "),y["\u0275\u0275elementStart"](12,"span",5),y["\u0275\u0275text"](13,"*"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](14,"input",6),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.officialReceiptNo=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](15,"mat-form-field",7),y["\u0275\u0275elementStart"](16,"mat-label"),y["\u0275\u0275text"](17,"Search Company:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](18,"mat-select"),y["\u0275\u0275template"](19,L,2,2,"mat-option",8),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](20,"mat-form-field",4),y["\u0275\u0275elementStart"](21,"mat-label"),y["\u0275\u0275text"](22,"Company Name:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](23,"input",9),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.companyName=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](24,"mat-form-field",4),y["\u0275\u0275elementStart"](25,"mat-label"),y["\u0275\u0275text"](26,"Company TIN:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](27,"input",10),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.companyTin=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](28,"mat-form-field",7),y["\u0275\u0275elementStart"](29,"mat-label"),y["\u0275\u0275text"](30,"Company Address:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](31,"textarea",11),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.companyAddress=e})),y["\u0275\u0275text"](32,"            "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](33,"mat-form-field",4),y["\u0275\u0275elementStart"](34,"mat-label"),y["\u0275\u0275text"](35,"Business Style:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](36,"input",12),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.businessStyle=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](37,"mat-form-field",4),y["\u0275\u0275elementStart"](38,"mat-label"),y["\u0275\u0275text"](39,"Control Number:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](40,"input",13),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.controlNumber=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](41,"mat-form-field",4),y["\u0275\u0275elementStart"](42,"mat-label"),y["\u0275\u0275text"](43,"Amount:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](44,"input",14),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.amount=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](45,"mat-form-field",4),y["\u0275\u0275elementStart"](46,"mat-label"),y["\u0275\u0275text"](47,"Total Amount:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](48,"input",15),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](49,"mat-form-field",7),y["\u0275\u0275elementStart"](50,"mat-label"),y["\u0275\u0275text"](51,"Type of Medium"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](52,"mat-select",16),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparation.typeOfMedium=e})),y["\u0275\u0275template"](53,O,2,2,"mat-option",17),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](54,"mat-form-field",4),y["\u0275\u0275elementStart"](55,"mat-label"),y["\u0275\u0275text"](56,"List of Paid Reference Codes:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](57,"mat-select",18),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.orPreparationReference.reference=e})),y["\u0275\u0275template"](58,x,2,2,"mat-option",17),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](59,N,3,0,"span",19),y["\u0275\u0275template"](60,k,4,0,"button",20),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](61,"mat-form-field",4),y["\u0275\u0275elementStart"](62,"mat-label"),y["\u0275\u0275text"](63,"Reference List:"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](64,"input",21),y["\u0275\u0275template"](65,F,5,1,"ul",22),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](66,"div",23),y["\u0275\u0275elementStart"](67,"app-form-action-buttons",24),y["\u0275\u0275listener"]("saveFunction",(function(){return t.saveOrUpdate()}))("updateFunction",(function(){return t.saveOrUpdate()}))("cancelFunction",(function(){return t.resetFormValidator()})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](68,"button",25),y["\u0275\u0275listener"]("click",(function(){return t.printOr(t.orPreparation)})),y["\u0275\u0275elementStart"](69,"i",26),y["\u0275\u0275text"](70,"print"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](71," Print OR"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](72,"br"),y["\u0275\u0275element"](73,"br"),y["\u0275\u0275elementStart"](74,"app-form-list",27),y["\u0275\u0275listener"]("selectInListFunction",(function(){return t.getOrPreparation()}))("deleteInListFunction",(function(){return t.cancel()})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("formGroup",t.orPreparationForm),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("ngModel",t.orPreparation.officialReceiptNo),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngForOf",t.companyList),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.orPreparation.companyName),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.orPreparation.companyTin),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.orPreparation.companyAddress),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngModel",t.orPreparation.businessStyle),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.orPreparation.controlNumber),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.orPreparation.amount),y["\u0275\u0275advance"](8),y["\u0275\u0275property"]("ngModel",t.orPreparation.typeOfMedium)("compareWith",t.compareList),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",t.typeOfMediumList),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.orPreparationReference.reference)("compareWith",t.compareList),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",t.availableReferenceCodeList),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.orPreparationReference.reference),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.orPreparationReference.reference),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngForOf",t.officialReceiptReferenceList),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("childObject",t.orPreparation)("childForm",t.orPreparationForm),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("disabled",!t.orPreparation.id),y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("dataSource",t.dataSource)("displayedColumns",t.displayedColumns))},directives:[s.J,s.u,s.v,S.g,s.l,S.c,R.b,s.d,s.t,s.j,P.a,i.s,i.t,C.a,M.b,A.a,E.m,w.a],styles:["span.material-icons[_ngcontent-%COMP%]{color:#ad0000;cursor:pointer}.button-content[_ngcontent-%COMP%]{display:inline-flex}"]}),I)}],V=((D=o((function e(){n(this,e)}))).\u0275mod=y["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[l.f.forChild(j)],l.f]}),D),B=a("tk/3"),U=a("7Tf7"),q=((T=o((function e(){n(this,e)}))).\u0275mod=y["\u0275\u0275defineNgModule"]({type:T}),T.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||T)},imports:[[i.c,V,B.b,s.D,u.k,U.a]]}),T)},za27:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=o((function e(){n(this,e)}))}}])}();