!function(){function e(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=n(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,p=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){p=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(p)throw r}}}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,i,l=[],r=!0,o=!1;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);r=!0);}catch(p){o=!0,i=p}finally{try{r||null==n.return||n.return()}finally{if(o)throw i}}return l}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{T30m:function(n,a,l){"use strict";l.r(a),l.d(a,"SingleApplicationModule",(function(){return le}));var o=l("ofXK"),p=l("tyNb"),m=l("M9IT"),c=l("Dh3D"),d=l("+0xr"),u=l("M0ag"),s=l("9Vv1"),f=l("0IaG"),y=l("sKXY"),v=l("XLGj"),h=l("PSD3"),S=l.n(h),g=l("fXoL"),E=l("jhN1"),b=l("dJ3e"),M=l("TMp0"),D=l("JqCM"),w=l("kmnG"),A=l("NFeN"),C=l("3Pt+"),x=l("qFsG"),I=l("d3UM"),O=l("bTqV"),T=l("FKr1");function P(e,t){if(1&e&&(g["\u0275\u0275elementStart"](0,"div"),g["\u0275\u0275elementStart"](1,"div",24),g["\u0275\u0275elementStart"](2,"object",25),g["\u0275\u0275elementStart"](3,"iframe",26),g["\u0275\u0275elementStart"](4,"p"),g["\u0275\u0275text"](5,"This browser does not support PDF!"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e){var n=g["\u0275\u0275nextContext"]();g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("data",n.safeURLProofOfPayment,g["\u0275\u0275sanitizeResourceUrl"]),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("src",n.safeURLProofOfPayment,g["\u0275\u0275sanitizeResourceUrl"])}}function R(e,t){if(1&e&&(g["\u0275\u0275elementStart"](0,"mat-option",28),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275elementEnd"]()),2&e){var n=g["\u0275\u0275nextContext"]().$implicit;g["\u0275\u0275property"]("value",n),g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate1"](" ",g["\u0275\u0275pipeBind1"](2,2,null==n?null:n.paymentDescription)," ")}}function k(e,t){if(1&e&&(g["\u0275\u0275elementStart"](0,"div"),g["\u0275\u0275template"](1,R,3,4,"mat-option",27),g["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf","ACTIVE"===(null==n?null:n.status))}}function F(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"span"),g["\u0275\u0275elementStart"](1,"i"),g["\u0275\u0275text"](2,"Please contact ASC admin to check the Maintenance of Fees."),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]())}var L,N=function(){return{standalone:!0}},j=((L=function(){function n(e,t,a,l,r,o,p,m,c){var d,u,s,f;if(i(this,n),this.sanitizer=e,this.apiService=t,this.dataStorage=a,this.fileStorageService=l,this.sweetAlertService=r,this.router=o,this.spinner=p,this.dialogRef=m,this.data=c,this.s1Application=new y.q,this.attachmentDocument=new y.h,this.applicationSingleMedia=new v.a,this.payment=new y.n,this.paymentTypeList=[],this.attachmentDocuments=[],this.previewDocument=!1,this.isSubmitted=!1,this.typeOfMediumDisplay="",c&&c){switch(this.s1Application=c,console.log("S1",this.s1Application),(null===(d=this.s1Application)||void 0===d?void 0:d.refTypeOfMedium)||(null===(f=null===(s=null===(u=this.payment)||void 0===u?void 0:u.applicationFormS2)||void 0===s?void 0:s.applicationForm)||void 0===f?void 0:f.refTypeOfMedium)){case"SINGLE MEDIA":this.getApplicationSingleMedia();break;case"MULTIMEDIA-MOVING":this.getMultimediaMoving();break;case"MULTIMEDIA-STATIC":this.getMultimediaStatic()}this.getPaymentDetails()}}return r(n,[{key:"ngOnInit",value:function(){this.currentUser=this.dataStorage.getUserAccount(),this.getPaymentList()}},{key:"getPaymentDetails",value:function(){var e=this;this.apiService.findAll(u.n.paymentDetails+this.s1Application.id).subscribe((function(t){e.paymentDetails=t,e.paymentDetails.vat=e.paymentDetails.vat.toFixed(2)}))}},{key:"getPaymentList",value:function(){var e=this;this.apiService.findAll(u.n.paymentType).subscribe((function(t){if(e.paymentTypeList=t.responseData.data,e.currentUser.userRole.name===s.E.ROLE_APPLICANT){var n=e.paymentTypeList.findIndex((function(e){return"Credit Card"===e.paymentDescription}));e.paymentTypeList.splice(n,1)}}))}},{key:"selectFile",value:function(e){var n=e.target.files[0].size;if("application/pdf"!==e.target.files[0].type)return this.sweetAlertService.customErrorMessage("Attachment should be in PDF format only."),void(e.target.value="");if(n>15e6)return this.sweetAlertService.customErrorMessage("Attachments' total file size should not exceed 15MB."),void(e.target.value="");var a=URL.createObjectURL(e.target.files[0]);this.safeURLProofOfPayment=this.sanitizer.bypassSecurityTrustResourceUrl(a),this.previewDocument=!0;var i=new FileReader,l=t(e.target.files,1)[0];i.readAsDataURL(l),i.onload=function(){},this.selectedFiles=e.target.files}},{key:"uploadDocument",value:function(e){var t=this;S.a.fire({text:"Are you sure you want to submit this PROOF OF PAYMENT?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"}).then((function(n){var a;n.value&&(t.spinner.show(),a="?&attachmentType="+u.j.PAYMENT+"&submissionType=ORIGINAL",t.fileStorageService.pushFileToStorage(u.n.attachmentDocument,t.selectedFiles.item(0),a).subscribe((function(n){var a=n.responseData.data;console.log(a),t.s1Application.paymentAttachmentReference=a.paymentAttachmentReference,t.payment.paymentAttachmentReference=a.paymentAttachmentReference,t.payment.amountDue=e.amount,t.payment.applicationForm=e,t.payment.appFormReference=e.appFormReference,t.payment.filename=a.filename,t.saveProofOfPayment()}),(function(e){t.spinner.hide(),t.sweetAlertService.error(e)}),(function(){t.spinner.hide()})))}))}},{key:"saveProofOfPayment",value:function(){var e=this;this.spinner.show(),console.log("Saving payment..."),this.payment.id=0,this.payment.officialReceiptNo="",this.payment.paymentMethod=null,console.log("PAYMENT : ",this.payment),this.apiService.save("".concat(u.n.applicationFormPresentor,"payment-type-id/").concat(this.paymentType.id,"/payment/submit"),this.payment).subscribe((function(t){console.log("SAVED STATUS: ",t),t.responseData.data?(e.safeURLProofOfPayment=e.sanitizer.bypassSecurityTrustResourceUrl(t.responseData.data.fileURL),e.isSubmitted=!0,e.sweetAlertService.customSuccessMessage("Proof of payment successfully submitted."),e.closeModal()):e.sweetAlertService.customErrorMessage("Error saving payment."),e.spinner.hide(),e.selectedFiles=void 0,e.router.navigateByUrl("asc/page/application/single-application")}),(function(t){console.log(t),e.sweetAlertService.error(t),e.spinner.hide()}),(function(){e.spinner.hide()}))}},{key:"closeModal",value:function(){this.dialogRef.close(),this.router.navigate(["asc/page/application/single-application"])}},{key:"ngOnDestroy",value:function(){}},{key:"getApplicationSingleMedia",value:function(){var e,t=this;this.apiService.findByParam(u.n.applicationSingleMedia,"app-form-reference/"+(null===(e=this.s1Application)||void 0===e?void 0:e.appFormReference)).subscribe((function(e){var n,a,i,l;e.responseData.data.length>0?(t.applicationSingleMedia=e.responseData.data[0],t.typeOfMediumDisplay="".concat(null===(i=null===(a=null===(n=t.applicationSingleMedia)||void 0===n?void 0:n.mediumExecution)||void 0===a?void 0:a.typeOfMedium)||void 0===i?void 0:i.description," (").concat(null===(l=t.applicationSingleMedia)||void 0===l?void 0:l.sizeLength,")")):t.typeOfMediumDisplay=""}),(function(e){t.typeOfMediumDisplay=""}))}},{key:"getMultimediaStatic",value:function(){var t,n=this;this.apiService.findByParam(u.n.applicationMultimedia,"app-form-reference/"+(null===(t=this.s1Application)||void 0===t?void 0:t.appFormReference)).subscribe((function(t){if(t.responseData.data.length>0){var a=new Set(t.responseData.data.map((function(e){var t;return"".concat(null===(t=null==e?void 0:e.typeOfMedium)||void 0===t?void 0:t.description," (").concat(null==e?void 0:e.multimediaSizeLength,")")})));n.typeOfMediumDisplay="";var i,l=1,r=e(a);try{for(r.s();!(i=r.n()).done;){var o=i.value;l!==a.size?(n.typeOfMediumDisplay+=o+", ",l++):n.typeOfMediumDisplay+=o}}catch(p){r.e(p)}finally{r.f()}}else n.typeOfMediumDisplay=""}),(function(e){n.typeOfMediumDisplay=""}))}},{key:"getMultimediaMoving",value:function(){var t,n=this;this.apiService.findByParam(u.n.applicationMultimedia,"app-form-reference/"+(null===(t=this.s1Application)||void 0===t?void 0:t.appFormReference)).subscribe((function(t){if(t.responseData.data.length>0){var a=new Set(t.responseData.data.map((function(e){var t;return"".concat(null===(t=null==e?void 0:e.typeOfMedium)||void 0===t?void 0:t.description," (").concat(null==e?void 0:e.multimediaSizeLength,")")})));n.typeOfMediumDisplay="";var i,l=1,r=e(a);try{for(r.s();!(i=r.n()).done;){var o=i.value;l!==a.size?(n.typeOfMediumDisplay+=o+", ",l++):n.typeOfMediumDisplay+=o}}catch(p){r.e(p)}finally{r.f()}}else n.typeOfMediumDisplay=""}),(function(e){n.typeOfMediumDisplay=""}))}}]),n}()).\u0275fac=function(e){return new(e||L)(g["\u0275\u0275directiveInject"](E.b),g["\u0275\u0275directiveInject"](b.b),g["\u0275\u0275directiveInject"](b.c),g["\u0275\u0275directiveInject"](M.a),g["\u0275\u0275directiveInject"](b.e),g["\u0275\u0275directiveInject"](p.b),g["\u0275\u0275directiveInject"](D.c),g["\u0275\u0275directiveInject"](f.h,8),g["\u0275\u0275directiveInject"](f.a,8))},L.\u0275cmp=g["\u0275\u0275defineComponent"]({type:L,selectors:[["app-modal-single-application"]],inputs:{s1Application:"s1Application"},decls:69,vars:26,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],[1,"row","col-md-12","mt-4"],[1,"col-md-6"],["type","file","accept",".pdf",1,"file-upload",3,"ngModel","ngModelOptions","ngModelChange","change"],[4,"ngIf"],[1,"col-md-3"],["appearance","outline",1,"col-md-12"],["matInput","","readonly","",3,"value"],["matInput","","name","companyName","readonly","",3,"value"],["matInput","","name","refTypeOfMedium","readonly","",3,"value"],["matInput","","name","amount","readonly","",1,"numbers-input",3,"value"],["matInput","","name","amount","readonly","",1,"numbers-input","total",3,"value"],[1,"required-field"],[3,"ngModel","ngModelOptions","ngModelChange"],[4,"ngFor","ngForOf"],[2,"margin-top","2px"],["matInput","","name","remarks",3,"ngModel","ngModelChange"],[1,"row","col-md-12"],[1,"col-md-10"],[1,"col-md-2","text-end"],["mat-raised-button","",1,"button-red","m-0",3,"disabled","click"],[1,"material-icons","color__white"],[1,"file-upload"],["type","application/pdf","width","100%","height","400",3,"data"],["width","100%","height","500",3,"src"],["name","paymentType",3,"value",4,"ngIf"],["name","paymentType",3,"value"]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"div",0),g["\u0275\u0275elementStart"](1,"div",1),g["\u0275\u0275elementStart"](2,"div",2),g["\u0275\u0275elementStart"](3,"mat-label"),g["\u0275\u0275elementStart"](4,"mat-icon"),g["\u0275\u0275text"](5,"view_list"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"b"),g["\u0275\u0275text"](7,"Schedule of Fees - Individual Application"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](8,"hr"),g["\u0275\u0275elementStart"](9,"div",3),g["\u0275\u0275elementStart"](10,"div",4),g["\u0275\u0275elementStart"](11,"div"),g["\u0275\u0275elementStart"](12,"mat-label"),g["\u0275\u0275text"](13,"Proof of Payment: \xa0\xa0\xa0"),g["\u0275\u0275elementStart"](14,"span"),g["\u0275\u0275text"](15,"PDF file only!"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](16,"br"),g["\u0275\u0275elementStart"](17,"input",5),g["\u0275\u0275listener"]("ngModelChange",(function(e){return t.attachment=e}))("change",(function(e){return t.selectFile(e)})),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275template"](18,P,6,2,"div",6),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](19,"div",7),g["\u0275\u0275elementStart"](20,"mat-form-field",8),g["\u0275\u0275elementStart"](21,"mat-label"),g["\u0275\u0275text"](22,"Reference Code"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](23,"input",9),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](24,"mat-form-field",8),g["\u0275\u0275elementStart"](25,"mat-label"),g["\u0275\u0275text"](26,"Advertiser"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](27,"input",10),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](28,"mat-form-field",8),g["\u0275\u0275elementStart"](29,"mat-label"),g["\u0275\u0275text"](30,"Ad Title - Medium (Length)"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](31,"textarea",11),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](32,"div",7),g["\u0275\u0275elementStart"](33,"mat-form-field",8),g["\u0275\u0275elementStart"](34,"mat-label"),g["\u0275\u0275text"](35,"Vatable Sales"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](36,"input",12),g["\u0275\u0275pipe"](37,"number"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](38,"mat-form-field",8),g["\u0275\u0275elementStart"](39,"mat-label"),g["\u0275\u0275text"](40,"VAT"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](41,"input",12),g["\u0275\u0275pipe"](42,"number"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](43,"mat-form-field",8),g["\u0275\u0275elementStart"](44,"mat-label"),g["\u0275\u0275text"](45,"Total Sales (VAT Inclusive)"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](46,"input",13),g["\u0275\u0275pipe"](47,"number"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](48,"mat-form-field",8),g["\u0275\u0275elementStart"](49,"mat-label"),g["\u0275\u0275text"](50,"Payment Mode "),g["\u0275\u0275elementStart"](51,"span",14),g["\u0275\u0275elementStart"](52,"mat-icon"),g["\u0275\u0275text"](53,"notification_important"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](54,"mat-select",15),g["\u0275\u0275listener"]("ngModelChange",(function(e){return t.paymentType=e})),g["\u0275\u0275template"](55,k,2,1,"div",16),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](56,"hr",17),g["\u0275\u0275elementStart"](57,"mat-form-field",8),g["\u0275\u0275elementStart"](58,"mat-label"),g["\u0275\u0275text"](59,"Remarks"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](60,"textarea",18),g["\u0275\u0275listener"]("ngModelChange",(function(e){return t.payment.remarks=e})),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](61,"div",19),g["\u0275\u0275elementStart"](62,"div",20),g["\u0275\u0275template"](63,F,3,0,"span",6),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](64,"div",21),g["\u0275\u0275elementStart"](65,"button",22),g["\u0275\u0275listener"]("click",(function(){return t.uploadDocument(t.s1Application)})),g["\u0275\u0275elementStart"](66,"i",23),g["\u0275\u0275text"](67,"task_alt"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275text"](68," SUBMIT "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275advance"](17),g["\u0275\u0275property"]("ngModel",t.attachment)("ngModelOptions",g["\u0275\u0275pureFunction0"](24,N)),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf",!0===t.previewDocument),g["\u0275\u0275advance"](5),g["\u0275\u0275property"]("value",null==t.s1Application?null:t.s1Application.referenceCode),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("value",null==t.s1Application||null==t.s1Application.company?null:t.s1Application.company.companyName),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("value",(null==t.s1Application?null:t.s1Application.adTitle)+" - "+t.typeOfMediumDisplay),g["\u0275\u0275advance"](5),g["\u0275\u0275property"]("value",g["\u0275\u0275pipeBind2"](37,15,null==t.paymentDetails?null:t.paymentDetails.basicRate,"1.2-2")),g["\u0275\u0275advance"](5),g["\u0275\u0275property"]("value",g["\u0275\u0275pipeBind2"](42,18,null==t.paymentDetails?null:t.paymentDetails.vat,"1.2-2")),g["\u0275\u0275advance"](5),g["\u0275\u0275property"]("value",g["\u0275\u0275pipeBind2"](47,21,null==t.paymentDetails?null:t.paymentDetails.amountDue,"1.2-2")),g["\u0275\u0275advance"](8),g["\u0275\u0275property"]("ngModel",t.paymentType)("ngModelOptions",g["\u0275\u0275pureFunction0"](25,N)),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngForOf",t.paymentTypeList),g["\u0275\u0275advance"](5),g["\u0275\u0275property"]("ngModel",t.payment.remarks),g["\u0275\u0275advance"](3),g["\u0275\u0275property"]("ngIf",t.paymentType&&0===(null==t.paymentDetails?null:t.paymentDetails.amountDue)),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("disabled",!t.paymentType||!t.previewDocument||0===(null==t.paymentDetails?null:t.paymentDetails.amountDue)))},directives:[w.g,A.a,C.d,C.t,C.w,o.t,w.c,x.b,I.a,o.s,O.b,T.m],pipes:[o.g,o.G],styles:["span[_ngcontent-%COMP%]{color:red}.numbers-input[_ngcontent-%COMP%]{text-align:end}.total[_ngcontent-%COMP%]{font-weight:900}"]}),L);function U(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"th",20),g["\u0275\u0275text"](1," REFERENCE CODE "),g["\u0275\u0275elementEnd"]())}function B(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"td",21),g["\u0275\u0275listener"]("click",(function(){g["\u0275\u0275restoreView"](n);var e=t.$implicit;return g["\u0275\u0275nextContext"]().openModal(e)})),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate1"](" ",g["\u0275\u0275pipeBind1"](2,1,null==a?null:a.referenceCode),"")}}function V(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"th",20),g["\u0275\u0275text"](1," TYPE OF APPLICATION"),g["\u0275\u0275elementEnd"]())}function z(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"td",21),g["\u0275\u0275listener"]("click",(function(){g["\u0275\u0275restoreView"](n);var e=t.$implicit;return g["\u0275\u0275nextContext"]().openModal(e)})),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275pipe"](3,"uppercase"),g["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate2"]("",g["\u0275\u0275pipeBind1"](2,2,null==a?null:a.applicationType.description)," - ",g["\u0275\u0275pipeBind1"](3,4,null==a||null==a.formType?null:a.formType.replaceAll("_"," ")),"")}}function $(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"th",20),g["\u0275\u0275text"](1," BRAND"),g["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"td",21),g["\u0275\u0275listener"]("click",(function(){g["\u0275\u0275restoreView"](n);var e=t.$implicit;return g["\u0275\u0275nextContext"]().openModal(e)})),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](g["\u0275\u0275pipeBind1"](2,1,null==a?null:a.brand.description))}}function q(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"th",20),g["\u0275\u0275text"](1," MEDIUM"),g["\u0275\u0275elementEnd"]())}function G(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"td",21),g["\u0275\u0275listener"]("click",(function(){g["\u0275\u0275restoreView"](n);var e=t.$implicit;return g["\u0275\u0275nextContext"]().openModal(e)})),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](g["\u0275\u0275pipeBind1"](2,1,null==a?null:a.typeOfMedium))}}function Y(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"th",20),g["\u0275\u0275text"](1," APPLICANT COMPANY NAME"),g["\u0275\u0275elementEnd"]())}function Q(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"td",21),g["\u0275\u0275listener"]("click",(function(){g["\u0275\u0275restoreView"](n);var e=t.$implicit;return g["\u0275\u0275nextContext"]().openModal(e)})),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](g["\u0275\u0275pipeBind1"](2,1,null==a?null:a.company.companyName))}}function J(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"th",20),g["\u0275\u0275text"](1," PAYMENT STATUS"),g["\u0275\u0275elementEnd"]())}function H(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"td",21),g["\u0275\u0275listener"]("click",(function(){g["\u0275\u0275restoreView"](n);var e=t.$implicit;return g["\u0275\u0275nextContext"]().openModal(e)})),g["\u0275\u0275text"](1),g["\u0275\u0275pipe"](2,"uppercase"),g["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](g["\u0275\u0275pipeBind1"](2,1,null==a||null==a.paymentStatus?null:a.paymentStatus.replaceAll("_"," ")))}}function X(e,t){1&e&&g["\u0275\u0275element"](0,"tr",22)}function K(e,t){1&e&&g["\u0275\u0275element"](0,"tr",23)}var W,Z,ee,te=function(){return[10,20,50]},ne=[{path:"",component:(W=function(){function e(t,n,a){i(this,e),this.apiService=t,this.dialog=n,this.dataStorage=a,this.displayedColumns=["referenceCode","typeOfApplication","brand","medium","applicantCompanyName","paymentStatus"],this.paymentList=[]}return r(e,[{key:"ngOnInit",value:function(){this.currentUser=this.dataStorage.getUserAccount(),this.getS1PaymentList()}},{key:"getS1PaymentList",value:function(){var e=this;this.apiService.findByParam(u.n.applicationFormPresentor+this.currentUser.id,"payment-status/FOR_PAYMENT/schedule-of-fees").subscribe((function(t){e.paymentList=t.responseData.data,e.dataSource=new d.p(e.paymentList),e.dataSource.paginator=e.paginator,e.dataSource.sort=e.sort}))}},{key:"openModal",value:function(e){var t=this;this.dialog.open(j,{width:"80%",height:"fit-content",maxHeight:"85vh",data:e}).afterClosed().subscribe((function(e){t.ngOnInit()}))}}]),e}(),W.\u0275fac=function(e){return new(e||W)(g["\u0275\u0275directiveInject"](b.b),g["\u0275\u0275directiveInject"](f.b),g["\u0275\u0275directiveInject"](b.c))},W.\u0275cmp=g["\u0275\u0275defineComponent"]({type:W,selectors:[["app-single-application"]],viewQuery:function(e,t){var n;1&e&&(g["\u0275\u0275viewQuery"](m.a,!0),g["\u0275\u0275viewQuery"](c.a,!0),g["\u0275\u0275viewQuery"](d.o,!0)),2&e&&(g["\u0275\u0275queryRefresh"](n=g["\u0275\u0275loadQuery"]())&&(t.paginator=n.first),g["\u0275\u0275queryRefresh"](n=g["\u0275\u0275loadQuery"]())&&(t.sort=n.first),g["\u0275\u0275queryRefresh"](n=g["\u0275\u0275loadQuery"]())&&(t.table=n.first))},decls:39,vars:6,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","title"],["fxLayout","","fxLayoutAlign","center center",1,"col-md-12"],["appearance","outline",1,"col-md-12"],["matInput","","type","text","placeholder","Company Name"],[1,"mat-elevation-z8","fields"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","referenceCode"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","typeOfApplication"],["matColumnDef","brand"],["matColumnDef","medium"],["matColumnDef","applicantCompanyName"],["matColumnDef","paymentStatus"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"no-record",3,"hidden"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"form"),g["\u0275\u0275elementStart"](1,"div",0),g["\u0275\u0275elementStart"](2,"div",1),g["\u0275\u0275elementStart"](3,"div",2),g["\u0275\u0275elementStart"](4,"mat-label"),g["\u0275\u0275elementStart"](5,"mat-icon"),g["\u0275\u0275text"](6,"view_list"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275text"](7," Individual Applications - For Payment "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](8,"hr"),g["\u0275\u0275element"](9,"br"),g["\u0275\u0275elementStart"](10,"div",3),g["\u0275\u0275elementStart"](11,"mat-form-field",4),g["\u0275\u0275element"](12,"input",5),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](13,"div",6),g["\u0275\u0275elementStart"](14,"table",7),g["\u0275\u0275elementContainerStart"](15,8),g["\u0275\u0275template"](16,U,2,0,"th",9),g["\u0275\u0275template"](17,B,3,3,"td",10),g["\u0275\u0275elementContainerEnd"](),g["\u0275\u0275elementContainerStart"](18,11),g["\u0275\u0275template"](19,V,2,0,"th",9),g["\u0275\u0275template"](20,z,4,6,"td",10),g["\u0275\u0275elementContainerEnd"](),g["\u0275\u0275elementContainerStart"](21,12),g["\u0275\u0275template"](22,$,2,0,"th",9),g["\u0275\u0275template"](23,_,3,3,"td",10),g["\u0275\u0275elementContainerEnd"](),g["\u0275\u0275elementContainerStart"](24,13),g["\u0275\u0275template"](25,q,2,0,"th",9),g["\u0275\u0275template"](26,G,3,3,"td",10),g["\u0275\u0275elementContainerEnd"](),g["\u0275\u0275elementContainerStart"](27,14),g["\u0275\u0275template"](28,Y,2,0,"th",9),g["\u0275\u0275template"](29,Q,3,3,"td",10),g["\u0275\u0275elementContainerEnd"](),g["\u0275\u0275elementContainerStart"](30,15),g["\u0275\u0275template"](31,J,2,0,"th",9),g["\u0275\u0275template"](32,H,3,3,"td",10),g["\u0275\u0275elementContainerEnd"](),g["\u0275\u0275template"](33,X,1,0,"tr",16),g["\u0275\u0275template"](34,K,1,0,"tr",17),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](35,"div",18),g["\u0275\u0275text"](36," No record found. "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](37,"mat-paginator",19),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](38,"br"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275advance"](14),g["\u0275\u0275property"]("dataSource",t.dataSource),g["\u0275\u0275advance"](19),g["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("hidden",t.dataSource&&(null==t.dataSource||null==t.dataSource.data?null:t.dataSource.data.length)>0),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("pageSizeOptions",g["\u0275\u0275pureFunction0"](5,te)))},directives:[C.J,C.u,C.v,w.g,A.a,w.c,x.b,d.o,c.a,d.c,d.i,d.b,d.k,d.n,m.a,d.h,c.b,d.a,d.j,d.m],pipes:[o.G],styles:[""]}),W)}],ae=((Z=r((function e(){i(this,e)}))).\u0275mod=g["\u0275\u0275defineNgModule"]({type:Z}),Z.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Z)},imports:[[p.f.forChild(ne)],p.f]}),Z),ie=l("tk/3"),le=((ee=r((function e(){i(this,e)}))).\u0275mod=g["\u0275\u0275defineNgModule"]({type:ee}),ee.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ee)},imports:[[o.c,ae,ie.b,C.D,C.n,u.k,d.q]]}),ee)}}])}();