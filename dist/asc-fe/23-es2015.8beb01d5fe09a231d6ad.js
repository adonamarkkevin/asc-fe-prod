(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Bysl:function(e,t,n){"use strict";n.r(t),n.d(t,"SpecialApplicationsModule",(function(){return H}));var i=n("ofXK"),a=n("tyNb"),l=n("M9IT"),o=n("Dh3D"),r=n("+0xr"),p=n("M0ag"),m=n("9Vv1"),s=n("0IaG"),c=n("sKXY"),d=n("XLGj"),u=n("PSD3"),f=n.n(u),y=n("fXoL"),h=n("jhN1"),v=n("dJ3e"),S=n("TMp0"),g=n("JqCM"),E=n("kmnG"),M=n("NFeN"),D=n("3Pt+"),b=n("qFsG"),A=n("d3UM"),C=n("bTqV"),w=n("FKr1");function x(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"div"),y["\u0275\u0275elementStart"](1,"div",21),y["\u0275\u0275elementStart"](2,"object",22),y["\u0275\u0275elementStart"](3,"iframe",23),y["\u0275\u0275elementStart"](4,"p"),y["\u0275\u0275text"](5,"This browser does not support PDF!"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){const e=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("data",e.safeURLProofOfPayment,y["\u0275\u0275sanitizeResourceUrl"]),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("src",e.safeURLProofOfPayment,y["\u0275\u0275sanitizeResourceUrl"])}}function F(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"mat-option",24),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;y["\u0275\u0275property"]("value",e),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",y["\u0275\u0275pipeBind1"](2,2,null==e?null:e.paymentDescription)," ")}}function O(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"span"),y["\u0275\u0275elementStart"](1,"i"),y["\u0275\u0275text"](2,"Please contact ASC admin to check the Maintenance of Fees."),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]())}const I=function(){return{standalone:!0}};let P=(()=>{class e{constructor(e,t,n,i,a,l,o,r,p){var m,s,u,f,y;if(this.sanitizer=e,this.apiService=t,this.dataStorage=n,this.fileStorageService=i,this.sweetAlertService=a,this.router=l,this.spinner=o,this.dialogRef=r,this.data=p,this.s2Application=new c.r,this.attachmentDocument=new c.h,this.payment=new c.n,this.applicationSingleMedia=new d.a,this.paymentTypeList=[],this.attachmentDocuments=[],this.previewDocument=!1,this.isSubmitted=!1,this.typeOfMediumDisplay="",p&&p){switch(this.s2Application=p,console.log("S2",this.s2Application),(null===(s=null===(m=this.s2Application)||void 0===m?void 0:m.applicationForm)||void 0===s?void 0:s.refTypeOfMedium)||(null===(y=null===(f=null===(u=this.payment)||void 0===u?void 0:u.applicationFormS2)||void 0===f?void 0:f.applicationForm)||void 0===y?void 0:y.refTypeOfMedium)){case"SINGLE MEDIA":this.getApplicationSingleMedia();break;case"MULTIMEDIA-MOVING":this.getMultimediaMoving();break;case"MULTIMEDIA-STATIC":this.getMultimediaStatic()}this.getPaymentDetails()}}ngOnInit(){this.currentUser=this.dataStorage.getUserAccount(),this.getPaymentList()}getPaymentDetails(){this.apiService.findAll(p.n.specialPaymentDetails+this.s2Application.id).subscribe(e=>{this.paymentDetails=e,this.paymentDetails.vat=this.paymentDetails.vat.toFixed(2)})}getPaymentList(){this.apiService.findAll(p.n.paymentType).subscribe(e=>{if(this.paymentTypeList=e.responseData.data,this.currentUser.userRole.name===m.E.ROLE_APPLICANT){const e=this.paymentTypeList.findIndex(e=>"Credit Card"===e.paymentDescription);this.paymentTypeList.splice(e,1)}})}selectFile(e){const t=e.target.files[0].size;if("application/pdf"!==e.target.files[0].type)return this.sweetAlertService.customErrorMessage("Attachment should be in PDF format only."),void(e.target.value="");if(t>15e6)return this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB."),void(e.target.value="");{const t=URL.createObjectURL(e.target.files[0]);this.safeURLProofOfPayment=this.sanitizer.bypassSecurityTrustResourceUrl(t),this.previewDocument=!0;const n=new FileReader,[i]=e.target.files;n.readAsDataURL(i),n.onload=()=>{}}this.selectedFiles=e.target.files}uploadDocument(e){f.a.fire({text:"Are you sure you want to submit this PROOF OF PAYMENT?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then(t=>{if(t.value){this.spinner.show();let t="";t="?&attachmentType="+p.j.PAYMENT+"&submissionType="+e.submissionType,this.fileStorageService.pushFileToStorage(p.n.attachmentDocument,this.selectedFiles.item(0),t).subscribe(t=>{const n=t.responseData.data;console.log(n),this.s2Application.paymentAttachmentReference=n.paymentAttachmentReference,this.payment.paymentAttachmentReference=n.paymentAttachmentReference,this.payment.amountDue=e.amount,this.payment.applicationFormS2=e,this.payment.appFormReference=e.appFormReference,this.payment.filename=n.filename,this.saveProofOfPayment(),this.selectedFiles=void 0,this.spinner.hide(),this.router.navigateByUrl("asc/page/application/special-applications")},e=>{this.spinner.hide(),this.sweetAlertService.error(e)},()=>{this.spinner.hide()})}})}saveProofOfPayment(){console.log("Saving payment..."),this.dataStorage.setDisplayProgressbar(!0),this.payment.paymentStatus=p.u.UNPAID,this.payment.id=0,this.payment.officialReceiptNo="",this.payment.paymentMethod=null,console.log("PAYMENT : ",this.payment),this.apiService.save(`${p.n.s2ApplicationFormPresentor}payment-type-id/${this.paymentType.id}\n    /payment-special-clearing/submit`,this.payment).subscribe(e=>{console.log("SAVED STATUS: ",e.responseData.data),this.safeURLProofOfPayment=this.sanitizer.bypassSecurityTrustResourceUrl(e.responseData.data.fileURL),this.isSubmitted=!0,this.sweetAlertService.customSuccessMessage("Proof of payment successfully submitted."),this.closeModal()},e=>{console.log(e),this.sweetAlertService.error(e),this.dataStorage.setDisplayProgressbar(!1)},()=>{this.dataStorage.setDisplayProgressbar(!1)})}closeModal(){this.dialogRef.close(),this.router.navigate(["asc/page/application/special-applications"])}ngOnDestroy(){}getApplicationSingleMedia(){var e,t;this.apiService.findByParam(p.n.applicationSingleMedia,"app-form-reference/"+(null===(t=null===(e=this.s2Application)||void 0===e?void 0:e.applicationForm)||void 0===t?void 0:t.appFormReference)).subscribe(e=>{var t,n,i,a;e.responseData.data.length>0?(this.applicationSingleMedia=e.responseData.data[0],this.typeOfMediumDisplay=`${null===(i=null===(n=null===(t=this.applicationSingleMedia)||void 0===t?void 0:t.mediumExecution)||void 0===n?void 0:n.typeOfMedium)||void 0===i?void 0:i.description} (${null===(a=this.applicationSingleMedia)||void 0===a?void 0:a.sizeLength})`):this.typeOfMediumDisplay=""},e=>{this.typeOfMediumDisplay=""})}getMultimediaStatic(){var e,t;this.apiService.findByParam(p.n.applicationMultimedia,"app-form-reference/"+(null===(t=null===(e=this.s2Application)||void 0===e?void 0:e.applicationForm)||void 0===t?void 0:t.appFormReference)).subscribe(e=>{if(e.responseData.data.length>0){const t=new Set(e.responseData.data.map(e=>{var t;return`${null===(t=null==e?void 0:e.typeOfMedium)||void 0===t?void 0:t.description} (${null==e?void 0:e.multimediaSizeLength})`}));this.typeOfMediumDisplay="";let n=1;for(const e of t)n!==t.size?(this.typeOfMediumDisplay+=e+", ",n++):this.typeOfMediumDisplay+=e}else this.typeOfMediumDisplay=""},e=>{this.typeOfMediumDisplay=""})}getMultimediaMoving(){var e,t;this.apiService.findByParam(p.n.applicationMultimedia,"app-form-reference/"+(null===(t=null===(e=this.s2Application)||void 0===e?void 0:e.applicationForm)||void 0===t?void 0:t.appFormReference)).subscribe(e=>{if(e.responseData.data.length>0){const t=new Set(e.responseData.data.map(e=>{var t;return`${null===(t=null==e?void 0:e.typeOfMedium)||void 0===t?void 0:t.description} (${null==e?void 0:e.multimediaSizeLength})`}));this.typeOfMediumDisplay="";let n=1;for(const e of t)n!==t.size?(this.typeOfMediumDisplay+=e+", ",n++):this.typeOfMediumDisplay+=e}else this.typeOfMediumDisplay=""},e=>{this.typeOfMediumDisplay=""})}}return e.\u0275fac=function(t){return new(t||e)(y["\u0275\u0275directiveInject"](h.b),y["\u0275\u0275directiveInject"](v.b),y["\u0275\u0275directiveInject"](v.c),y["\u0275\u0275directiveInject"](S.a),y["\u0275\u0275directiveInject"](v.e),y["\u0275\u0275directiveInject"](a.b),y["\u0275\u0275directiveInject"](g.c),y["\u0275\u0275directiveInject"](s.h,8),y["\u0275\u0275directiveInject"](s.a,8))},e.\u0275cmp=y["\u0275\u0275defineComponent"]({type:e,selectors:[["app-modal-special-applications"]],inputs:{s2Application:"s2Application"},decls:69,vars:26,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[1,"row","col-md-12"],[1,"row","col-md-6"],["type","file","accept",".pdf",1,"file-upload",3,"ngModel","ngModelOptions","ngModelChange","change"],[4,"ngIf"],["appearance","outline",1,"col-md-12"],["matInput","","readonly","",3,"value"],["matInput","","name","companyName","readonly","",3,"value"],["matInput","","name","refTypeOfMedium","readonly","",3,"value"],["matInput","","name","amount","readonly","",1,"numbers-input",3,"value"],["matInput","","name","amount","readonly","",1,"numbers-input","total",3,"value"],[1,"required-field"],[3,"ngModel","ngModelOptions","ngModelChange"],["name","paymentType",3,"value",4,"ngFor","ngForOf"],["matInput","","name","remarks",3,"ngModel","ngModelChange"],[1,"col-md-10"],[1,"col-md-2"],["mat-raised-button","",1,"button-red",3,"disabled","click"],[1,"material-icons","color__white"],[1,"file-upload"],["type","application/pdf","width","100%","height","500",3,"data"],["width","100%","height","500",3,"src"],["name","paymentType",3,"value"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"div",0),y["\u0275\u0275elementStart"](1,"div",1),y["\u0275\u0275elementStart"](2,"div",2),y["\u0275\u0275elementStart"](3,"mat-label"),y["\u0275\u0275elementStart"](4,"mat-icon"),y["\u0275\u0275text"](5,"view_list"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](6,"b"),y["\u0275\u0275text"](7,"Schedule of Fees - Special Application"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](8,"hr"),y["\u0275\u0275element"](9,"br"),y["\u0275\u0275elementStart"](10,"div",3),y["\u0275\u0275elementStart"](11,"div",4),y["\u0275\u0275elementStart"](12,"div"),y["\u0275\u0275elementStart"](13,"mat-label"),y["\u0275\u0275text"](14,"Proof of Payment: \xa0\xa0\xa0"),y["\u0275\u0275elementStart"](15,"span"),y["\u0275\u0275text"](16,"PDF file only!"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](17,"br"),y["\u0275\u0275elementStart"](18,"input",5),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.attachment=e}))("change",(function(e){return t.selectFile(e)})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](19,x,6,2,"div",6),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](20,"div",4),y["\u0275\u0275elementStart"](21,"mat-form-field",7),y["\u0275\u0275elementStart"](22,"mat-label"),y["\u0275\u0275text"](23,"Reference Code"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](24,"input",8),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](25,"mat-form-field",7),y["\u0275\u0275elementStart"](26,"mat-label"),y["\u0275\u0275text"](27,"Advertiser"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](28,"input",9),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](29,"mat-form-field",7),y["\u0275\u0275elementStart"](30,"mat-label"),y["\u0275\u0275text"](31,"Ad Title - Medium (Length)"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](32,"input",10),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](33,"mat-form-field",7),y["\u0275\u0275elementStart"](34,"mat-label"),y["\u0275\u0275text"](35,"Vatable Sales"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](36,"input",11),y["\u0275\u0275pipe"](37,"number"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](38,"mat-form-field",7),y["\u0275\u0275elementStart"](39,"mat-label"),y["\u0275\u0275text"](40,"VAT"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](41,"input",11),y["\u0275\u0275pipe"](42,"number"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](43,"mat-form-field",7),y["\u0275\u0275elementStart"](44,"mat-label"),y["\u0275\u0275text"](45,"Total Sales (VAT Inclusive)"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](46,"input",12),y["\u0275\u0275pipe"](47,"number"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](48,"hr"),y["\u0275\u0275elementStart"](49,"mat-form-field",7),y["\u0275\u0275elementStart"](50,"mat-label"),y["\u0275\u0275text"](51,"Payment Mode "),y["\u0275\u0275elementStart"](52,"span",13),y["\u0275\u0275elementStart"](53,"mat-icon"),y["\u0275\u0275text"](54,"notification_important"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](55,"mat-select",14),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.paymentType=e})),y["\u0275\u0275template"](56,F,3,4,"mat-option",15),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](57,"mat-form-field",7),y["\u0275\u0275elementStart"](58,"mat-label"),y["\u0275\u0275text"](59,"Remarks"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](60,"textarea",16),y["\u0275\u0275listener"]("ngModelChange",(function(e){return t.payment.remarks=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](61,"div",1),y["\u0275\u0275elementStart"](62,"div",17),y["\u0275\u0275template"](63,O,3,0,"span",6),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](64,"div",18),y["\u0275\u0275elementStart"](65,"button",19),y["\u0275\u0275listener"]("click",(function(){return t.uploadDocument(t.s2Application)})),y["\u0275\u0275elementStart"](66,"i",20),y["\u0275\u0275text"](67,"task_alt"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](68," SUBMIT "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275advance"](18),y["\u0275\u0275property"]("ngModel",t.attachment)("ngModelOptions",y["\u0275\u0275pureFunction0"](24,I)),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!0===t.previewDocument),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("value",null==t.s2Application||null==t.s2Application.applicationForm?null:t.s2Application.applicationForm.referenceCode),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("value",null==t.s2Application||null==t.s2Application.applicationForm||null==t.s2Application.applicationForm.company?null:t.s2Application.applicationForm.company.companyName),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("value",(null==t.s2Application||null==t.s2Application.applicationForm?null:t.s2Application.applicationForm.adTitle)+" - "+t.typeOfMediumDisplay),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("value",y["\u0275\u0275pipeBind2"](37,15,null==t.paymentDetails?null:t.paymentDetails.basicRate,"1.2-2")),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("value",y["\u0275\u0275pipeBind2"](42,18,null==t.paymentDetails?null:t.paymentDetails.vat,"1.2-2")),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("value",y["\u0275\u0275pipeBind2"](47,21,null==t.paymentDetails?null:t.paymentDetails.amountDue,"1.2-2")),y["\u0275\u0275advance"](9),y["\u0275\u0275property"]("ngModel",t.paymentType)("ngModelOptions",y["\u0275\u0275pureFunction0"](25,I)),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",t.paymentTypeList),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngModel",t.payment.remarks),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngIf",t.paymentType&&0===(null==t.paymentDetails?null:t.paymentDetails.amountDue)),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("disabled",!t.paymentType||!t.previewDocument||0===(null==t.paymentDetails?null:t.paymentDetails.amountDue)))},directives:[E.g,M.a,D.d,D.t,D.w,i.t,E.c,b.b,A.a,i.s,C.b,w.m],pipes:[i.g,i.G],styles:[".numbers-input[_ngcontent-%COMP%]{text-align:end}.total[_ngcontent-%COMP%]{font-weight:900}"]}),e})();function T(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"th",20),y["\u0275\u0275text"](1," REFERENCE CODE "),y["\u0275\u0275elementEnd"]())}function R(e,t){if(1&e){const e=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"td",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](e);const n=t.$implicit;return y["\u0275\u0275nextContext"]().openModal(n)})),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",y["\u0275\u0275pipeBind1"](2,1,null==e||null==e.applicationForm?null:e.applicationForm.referenceCode),"")}}function L(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"th",20),y["\u0275\u0275text"](1," TYPE OF APPLICATION"),y["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e){const e=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"td",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](e);const n=t.$implicit;return y["\u0275\u0275nextContext"]().openModal(n)})),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate"](y["\u0275\u0275pipeBind1"](2,1,null==e||null==e.applicationForm?null:e.applicationForm.applicationType.description))}}function U(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"th",20),y["\u0275\u0275text"](1," BRAND"),y["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e){const e=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"td",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](e);const n=t.$implicit;return y["\u0275\u0275nextContext"]().openModal(n)})),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate"](y["\u0275\u0275pipeBind1"](2,1,null==e||null==e.applicationForm?null:e.applicationForm.brand.description))}}function B(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"th",20),y["\u0275\u0275text"](1," MEDIUM"),y["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e){const e=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"td",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](e);const n=t.$implicit;return y["\u0275\u0275nextContext"]().openModal(n)})),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate"](y["\u0275\u0275pipeBind1"](2,1,null==e||null==e.applicationForm?null:e.applicationForm.typeOfMedium))}}function $(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"th",20),y["\u0275\u0275text"](1," APPLICANT COMPANY NAME"),y["\u0275\u0275elementEnd"]())}function V(e,t){if(1&e){const e=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"td",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](e);const n=t.$implicit;return y["\u0275\u0275nextContext"]().openModal(n)})),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate"](y["\u0275\u0275pipeBind1"](2,1,null==e||null==e.applicationForm?null:e.applicationForm.company.companyName))}}function z(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"th",20),y["\u0275\u0275text"](1," PAYMENT STATUS"),y["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e){const e=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"td",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](e);const n=t.$implicit;return y["\u0275\u0275nextContext"]().openModal(n)})),y["\u0275\u0275text"](1),y["\u0275\u0275pipe"](2,"uppercase"),y["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate"](y["\u0275\u0275pipeBind1"](2,1,null==e||null==e.paymentStatus?null:e.paymentStatus.replaceAll("_"," ")))}}function q(e,t){1&e&&y["\u0275\u0275element"](0,"tr",22)}function G(e,t){1&e&&y["\u0275\u0275element"](0,"tr",23)}const Q=function(){return[10,20,50]},Y=[{path:"",component:(()=>{class e{constructor(e,t,n){this.apiService=e,this.dialog=t,this.dataStorage=n,this.displayedColumns=["referenceCode","typeOfApplication","brand","medium","applicantCompanyName","paymentStatus"],this.paymentList=[]}ngOnInit(){this.currentUser=this.dataStorage.getUserAccount(),this.getS2PaymentList()}getS2PaymentList(){this.apiService.findAll(p.n.scheduleOfFeesS2Special).subscribe(e=>{this.paymentList=e,this.dataSource=new r.p(this.paymentList),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}openModal(e){this.dialog.open(P,{width:"60%",height:"85%",data:e}).afterClosed().subscribe(e=>{this.ngOnInit()})}}return e.\u0275fac=function(t){return new(t||e)(y["\u0275\u0275directiveInject"](v.b),y["\u0275\u0275directiveInject"](s.b),y["\u0275\u0275directiveInject"](v.c))},e.\u0275cmp=y["\u0275\u0275defineComponent"]({type:e,selectors:[["app-special-applications"]],viewQuery:function(e,t){var n;1&e&&(y["\u0275\u0275viewQuery"](l.a,!0),y["\u0275\u0275viewQuery"](o.a,!0),y["\u0275\u0275viewQuery"](r.o,!0)),2&e&&(y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.paginator=n.first),y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.sort=n.first),y["\u0275\u0275queryRefresh"](n=y["\u0275\u0275loadQuery"]())&&(t.table=n.first))},decls:39,vars:6,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],["fxLayout","","fxLayoutAlign","center center",1,"col-md-12"],["appearance","outline",1,"col-md-12"],["matInput","","type","text","placeholder","Company Name"],[1,"mat-elevation-z8","fields"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","referenceCode"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","typeOfApplication"],["matColumnDef","brand"],["matColumnDef","medium"],["matColumnDef","applicantCompanyName"],["matColumnDef","paymentStatus"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"no-record",3,"hidden"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"form"),y["\u0275\u0275elementStart"](1,"div",0),y["\u0275\u0275elementStart"](2,"div",1),y["\u0275\u0275elementStart"](3,"div",2),y["\u0275\u0275elementStart"](4,"mat-label"),y["\u0275\u0275elementStart"](5,"mat-icon"),y["\u0275\u0275text"](6,"view_list"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275text"](7," Special Clearing - For Payment "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](8,"hr"),y["\u0275\u0275element"](9,"br"),y["\u0275\u0275elementStart"](10,"div",3),y["\u0275\u0275elementStart"](11,"mat-form-field",4),y["\u0275\u0275element"](12,"input",5),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](13,"div",6),y["\u0275\u0275elementStart"](14,"table",7),y["\u0275\u0275elementContainerStart"](15,8),y["\u0275\u0275template"](16,T,2,0,"th",9),y["\u0275\u0275template"](17,R,3,3,"td",10),y["\u0275\u0275elementContainerEnd"](),y["\u0275\u0275elementContainerStart"](18,11),y["\u0275\u0275template"](19,L,2,0,"th",9),y["\u0275\u0275template"](20,N,3,3,"td",10),y["\u0275\u0275elementContainerEnd"](),y["\u0275\u0275elementContainerStart"](21,12),y["\u0275\u0275template"](22,U,2,0,"th",9),y["\u0275\u0275template"](23,k,3,3,"td",10),y["\u0275\u0275elementContainerEnd"](),y["\u0275\u0275elementContainerStart"](24,13),y["\u0275\u0275template"](25,B,2,0,"th",9),y["\u0275\u0275template"](26,j,3,3,"td",10),y["\u0275\u0275elementContainerEnd"](),y["\u0275\u0275elementContainerStart"](27,14),y["\u0275\u0275template"](28,$,2,0,"th",9),y["\u0275\u0275template"](29,V,3,3,"td",10),y["\u0275\u0275elementContainerEnd"](),y["\u0275\u0275elementContainerStart"](30,15),y["\u0275\u0275template"](31,z,2,0,"th",9),y["\u0275\u0275template"](32,_,3,3,"td",10),y["\u0275\u0275elementContainerEnd"](),y["\u0275\u0275template"](33,q,1,0,"tr",16),y["\u0275\u0275template"](34,G,1,0,"tr",17),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](35,"div",18),y["\u0275\u0275text"](36," No record found. "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](37,"mat-paginator",19),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](38,"br"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275advance"](14),y["\u0275\u0275property"]("dataSource",t.dataSource),y["\u0275\u0275advance"](19),y["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("hidden",t.dataSource&&(null==t.dataSource||null==t.dataSource.data?null:t.dataSource.data.length)>0),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("pageSizeOptions",y["\u0275\u0275pureFunction0"](5,Q)))},directives:[D.J,D.u,D.v,E.g,M.a,E.c,b.b,r.o,o.a,r.c,r.i,r.b,r.k,r.n,l.a,r.h,o.b,r.a,r.j,r.m],pipes:[i.G],styles:[""]}),e})()}];let J=(()=>{class e{}return e.\u0275mod=y["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.f.forChild(Y)],a.f]}),e})();var X=n("tk/3");let H=(()=>{class e{}return e.\u0275mod=y["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,J,X.b,D.D,D.n,p.k,r.q]]}),e})()}}]);